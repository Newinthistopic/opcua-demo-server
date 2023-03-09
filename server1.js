console.log("<<< WebIQ OPC UA Server with MQTT >>>");
console.log("(c) 2019 Smart HMI GmbH");
console.log("-----------------------------------------------------------");
console.log('Starting... please wait!');

const fs = require('fs');

const {
          OPCUAServer,
          OPCUACertificateManager
      } = require("node-opcua");

const certificateManager = new OPCUACertificateManager({
                                                           automaticallyAcceptUnknownCertificate: true,
                                                           rootFolder                           : "./certs",
                                                       });

// Select profile
var profile = 'default';
if (process.argv.length > 2) {
    profile = process.argv[2];
}
var profileDir = __dirname + '/profiles/' + profile;

if (!fs.existsSync(profileDir)) {
    console.log('ERROR: Profile does not exist: "' + profile + '" dir: ' + profileDir);
    process.exit(1);
}

console.log('Using profile "' + profile + '"');

// Functions
const opcua   = require("node-opcua");
var config    = require(profileDir + '/config.json');
const jp      = require('jsonpath');
const mqtt    = require('mqtt');
var batchVars = null;

var mqttFunctions = null;
if (fs.existsSync(profileDir + '/mqtt/functions.js')) {
    mqttFunctions = require(profileDir + '/mqtt/functions.js');
}

// Batch variables (new for Leistritz)
if (fs.existsSync(profileDir + '/batchVariables.json')) {
    batchVars = require(profileDir + '/batchVariables.json');
}

// Simulation functions for Leistritz profile)
simuVars = null;
if (fs.existsSync(profileDir + '/simu.json')) {
    simuVars = require(profileDir + '/simu.json');
}
//console.log(batchVars);

// Settings / vars
var verbose             = config.verbose;
var mqttValues          = {}; // Holds all MQTT values
var serverValues        = {}; // Holds all server values except MQTT values
var mqttPayloadMappings = []; // Holds all payload placeholder matches per item
const methodConfigDir   = profileDir + '/methods';
const varConfigDir      = profileDir + '/variables';

// Parse config files (JS)
let methodFiles = [];
let varFiles    = [];
if (fs.existsSync(methodConfigDir)) {
    var files = fs.readdirSync(methodConfigDir);
    files.forEach(file => {
        if (file.match(/\.js$/)) {
            methodFiles.push(file);
        }
    });
}

if (fs.existsSync(varConfigDir)) {
    files = fs.readdirSync(varConfigDir);
    files.forEach(file => {
        if (file.match(/\.js$/)) {
            varFiles.push(file);
        }
    });
}

(async () => {

    try {
        /*******************/
        /*** SERVER INIT ***/
        /*******************/
        const server = new opcua.OPCUAServer(
            {
                alternateHostname       : config.opcua.serverHostname,
                port                    : config.opcua.serverPort,
                resourcePath            : config.opcua.resourcePath,
                buildInfo               : {
                    productName: config.opcua.productName,
                    buildNumber: config.opcua.buildNumber,
                    buildDate  : new Date(config.opcua.buildDate)
                },
                serverCertificateManager: certificateManager
            }
        );

        await server.initialize();
        if (verbose) console.log("[OK] OPC UA: Server created");

        const addressSpace = server.engine.addressSpace;
        const namespace    = addressSpace.getOwnNamespace();

        const device = namespace.addObject(
            {
                organizedBy: addressSpace.rootFolder.objects,
                browseName : config.opcua.browseName
            }
        );

        /***************/
        /*** METHODS ***/
        /***************/
        if (methodFiles.length) {
            if (verbose) console.log("[..] OPC UA: Creating methods from " + methodFiles.length + ' external files');
            methodFiles.forEach(function (file) {
                var module = require(profileDir + '/methods/' + file);
                module.run(namespace, device, opcua, verbose);
            });
            if (verbose) console.log("[OK] OPC UA: Methods created");
        }

        /*****************/
        /*** VARIABLES ***/
        /*****************/
        if (varFiles.length) {
            if (verbose) console.log("[..] OPC UA: Creating variables from " + varFiles.length + ' external files');
            varFiles.forEach(function (file) {
                var module            = require(profileDir + '/variables/' + file);
                var varName           = file.replace(/\.js$/);
                serverValues[varName] = module.run(namespace, device, opcua, verbose, serverValues);
            });
            if (verbose) console.log("[OK] OPC UA: Variables created");
        }

        /***********************/
        /*** BATCH VARIABLES ***/
        /***********************/
        if (batchVars) {
            var name     = null;
            var c        = 0;
            var dataType = null;
            if (verbose) console.log("[..] OPC UA: Creating " + batchVars.length + ' variables from batch file');
            batchVars.forEach(function (def) {
                if (simuVars) {
                    for (item in simuVars) {
                        let ind = def.name.indexOf(item);
                        if (ind !== -1) {
                            def.simu = simuVars[item];
                        }
                    }
                }
                dataType = opcua.DataType[def.type];
                if (dataType === 12) {
                    serverValues[def.name] = String(def.default);
                } else {
                    serverValues[def.name] = def.default;
                }


                namespace.addVariable(
                    {
                        componentOf            : device,
                        nodeId                 : "ns=1;s=" + def.name,
                        browseName             : def.name,
                        dataType               : dataType,
                        samplingInterval       : def.interval,
                        minimumSamplingInterval: def.interval,
                        value                  : {
                            get: function () {
                                dataType = opcua.DataType[def.type];
                                if (dataType === "Boolean") {
                                    // Boolean
                                    let myBool = false;
                                    if (serverValues[def.name]) myBool = true;
                                    return new opcua.Variant({dataType: dataType, value: myBool});
                                } else if (dataType === "String") {
                                    // String
                                    return new opcua.Variant({dataType: dataType, value: String(serverValues[def.name])});
                                } else {
                                    // Num values
                                    return new opcua.Variant({dataType: dataType, value: serverValues[def.name]});
                                }
                            },
                            set: function (variant) {
                                if (def.type === 'Double') {
                                    serverValues[def.name] = parseFloat(variant.value);
                                } else if (def.type === 'Int32') {
                                    serverValues[def.name] = parseInt(variant.value);
                                } else if (def.type === 'Boolean') {
                                    if (variant.value) serverValues[def.name] = true;
                                    else serverValues[def.name] = false;
                                } else if (dataType === 12) {
                                    // String
                                    serverValues[def.name] = String(variant.value);
                                } else {
                                    // 
                                    serverValues[def.name] = variant.value;
                                }
                                return opcua.StatusCodes.Good;
                            }
                        }
                    }
                );
                if (def.type === "Boolean") {
                    serverValues[def.name] = false;
                } else {
                    serverValues[def.name] = def.default;
                }
                if (typeof def.simu !== 'undefined') {
                    //if (typeof def.ramp !== 'undefined') {
                    if (def.simu.ramp) {
                        setInterval(function () {
                            let test  = serverValues[def.name];
                            let test2 = serverValues[def.ramp];
                            if (serverValues[def.name] < serverValues[def.ramp]) { // Act Value < Set-Value
                                serverValues[def.name] += 1;
                            } else if (serverValues[def.name] > serverValues[def.ramp]) { // Act Value < Set-Value
                                serverValues[def.name] -= 1;
                            }
                            serverValues[def.name] = serverValues[def.name] - 0.5 + Math.random();
                        }, def.interval);
                    } else if (def.simu.default) {
                        serverValues[def.name] = def.simu.default;
                    }

                }
            });
            if (verbose) console.log("[OK] OPC UA: Variables created");
        }

        /*********************/
        /*** MQTT MAPPINGS ***/
        /*********************/
        if (config.mqtt.active) {
            if (Object.keys(config.mqttMappings).length) {
                if (verbose) console.log("[..] OPC UA: Creating MQTT mapping items");
                var regex         = new RegExp("\\$\\{(.*?)\\}", "g"); // MQTT Payload match regex
                let mqttItemCount = 0;
                Object.keys(config.mqttMappings).forEach(function (topic) {
                    var mappings = config.mqttMappings[topic];
                    mappings.forEach(
                        function (itemMapping) {
                            Object.keys(itemMapping).forEach(
                                function (jsonPath) {
                                    var valueStorageString = 'mqttValues.' + itemMapping[jsonPath].itemName;
                                    var opcUaNodeId        = itemMapping[jsonPath].itemName;
                                    var opcUaType          = itemMapping[jsonPath].opcDataType;
                                    var setFunction        = itemMapping[jsonPath].setFunction;
                                    var setTopic           = itemMapping[jsonPath].setTopic;
                                    var setPayload         = itemMapping[jsonPath].setPayload;

                                    // Parse optional placeholders like ${mqttValues.val1} and ${serverValues.saw}
                                    // We do this here instead od later for performance reasons because the rules cannot change without a server restart anyway
                                    if (setPayload) {

                                        var matches = setPayload.match(regex);
                                        if (matches.length) {
                                            var mqttMatches   = [];
                                            var serverMatches = [];

                                            matches.forEach(function (m) {
                                                var n = m.match(/\$\{mqttValues\.(.*?)\}/);
                                                if (n) {
                                                    mqttMatches.push(n[1]);
                                                } else {
                                                    n = m.match(/\$\{serverValues\.(.*?)\}/);
                                                    if (n) {
                                                        serverMatches.push(n[1]);
                                                    }
                                                }
                                            });

                                            if (mqttMatches.length || serverMatches.length) {
                                                if (typeof mqttPayloadMappings[itemMapping[jsonPath].itemName] === 'undefined') {
                                                    mqttPayloadMappings[itemMapping[jsonPath].itemName] = {};
                                                }
                                            }
                                            if (mqttMatches.length) {
                                                mqttPayloadMappings[itemMapping[jsonPath].itemName].mqttValues = mqttMatches;
                                            }
                                            if (serverMatches.length) {
                                                mqttPayloadMappings[itemMapping[jsonPath].itemName].serverValues = serverMatches;
                                            }
                                        }
                                    }

                                    mqttItemCount++;

                                    namespace.addVariable(
                                        {
                                            componentOf            : device,
                                            nodeId                 : "ns=1;s=" + opcUaNodeId,
                                            browseName             : opcUaNodeId,
                                            minimumSamplingInterval: 100,
                                            dataType               : opcUaType,
                                            value                  : {
                                                // Get function -> reading the value
                                                get: function () {
                                                    // Conversion for eval
                                                    if (opcUaType === 'Boolean') {
                                                        if (valueStorageString) {
                                                            valueStorageString = 'true';
                                                        } else {
                                                            valueStorageString = 'false';
                                                        }
                                                    }

                                                    // Create empty object on-the-fly if it does not exist
                                                    var firstMapPart = itemMapping[jsonPath].itemName;
                                                    firstMapPart     = firstMapPart.replace(/\..*/, '');
                                                    eval("var create = (typeof mqttValues." + firstMapPart + ' == "undefined")');
                                                    if (create) {
                                                        eval("mqttValues." + firstMapPart + "={}");
                                                    }

                                                    return eval('new opcua.Variant({dataType: opcua.DataType.' + opcUaType + ', value: ' + valueStorageString + '});');
                                                },

                                                // Set function -> writing the value
                                                set: function (variant) {
                                                    // Is setting supported?
                                                    var setResult = null;
                                                    var useClient = null;
                                                    var opts      = {
                                                        qos   : itemMapping[jsonPath].setQos,
                                                        retain: itemMapping[jsonPath].setRetain
                                                    }; // MQTT publish options

                                                    if (typeof client !== 'undefined' && client && client.connected) {
                                                        useClient = client;
                                                    }

                                                    // Without a topic we cannot publish anything
                                                    if (setTopic) {
                                                        // Has a "set" function been defined? This has precedence over setPayload (see below)
                                                        if (setFunction) {
                                                            // Call with given value, configured topic and connected MQTT client
                                                            eval('setResult = mqttFunctions.' + setFunction + '(variant, setTopic, useClient)');
                                                            if (setResult) {
                                                                // Store the modified value only if the call has been successful
                                                                eval(valueStorageString + ' = variant.value');
                                                                return opcua.StatusCodes.Good;
                                                            } else {
                                                                return opcua.StatusCodes.Bad;
                                                            }
                                                        } else if (setPayload) {
                                                            // Called if no setFunction has been defined but a setPayload
                                                            // This means: use $setTopic and $setPayload to send the message directly without any callback
                                                            var i, curVal, rgx, setPayloadUse = setPayload;

                                                            eval(valueStorageString + ' = variant.value');

                                                            if (typeof mqttPayloadMappings[itemMapping[jsonPath].itemName] !== 'undefined') {

                                                                if (typeof mqttPayloadMappings[itemMapping[jsonPath].itemName].serverValues !== 'undefined' && mqttPayloadMappings[itemMapping[jsonPath].itemName].serverValues.length) {
                                                                    // Replace server values in payload
                                                                    for (i = 0; i < mqttPayloadMappings[itemMapping[jsonPath].itemName].serverValues.length; i++) {
                                                                        curVal = serverValues[mqttPayloadMappings[itemMapping[jsonPath].itemName].serverValues[i]];
                                                                        if (typeof curVal === 'undefined') curVal = 'null';

                                                                        rgx           = new RegExp(escapeRegExp('${serverValues.' + mqttPayloadMappings[itemMapping[jsonPath].itemName].serverValues[i] + '}'));
                                                                        setPayloadUse = setPayload.replace(rgx, curVal);
                                                                    }
                                                                }
                                                                if (typeof mqttPayloadMappings[itemMapping[jsonPath].itemName].mqttValues !== 'undefined' && mqttPayloadMappings[itemMapping[jsonPath].itemName].mqttValues.length) {
                                                                    // Replace mqtt values in payload
                                                                    for (i = 0; i < mqttPayloadMappings[itemMapping[jsonPath].itemName].mqttValues.length; i++) {
                                                                        eval("curVal = mqttValues." + mqttPayloadMappings[itemMapping[jsonPath].itemName].mqttValues[i]);

                                                                        if (typeof curVal === 'undefined') curVal = 'null';

                                                                        rgx           = new RegExp(escapeRegExp('${mqttValues.' + mqttPayloadMappings[itemMapping[jsonPath].itemName].mqttValues[i] + '}'));
                                                                        setPayloadUse = setPayloadUse.replace(rgx, curVal);
                                                                    }
                                                                }
                                                            }

                                                            if (useClient) {
                                                                if (verbose) console.log('>MQTT Publish: topic=' + setTopic + ', payload=' + setPayloadUse + ', opts=', opts);
                                                                useClient.publish(setTopic, setPayloadUse, opts);
                                                            }


                                                            return opcua.StatusCodes.Good;
                                                        }
                                                    } else {
                                                        // Return error?
                                                        return opcua.StatusCodes.Bad;
                                                    }
                                                }
                                            }
                                        }
                                    );
                                }
                            );
                        }
                    );
                });
                if (verbose) console.log("[OK] OPC UA: Created " + mqttItemCount + " MQTT mapping items");
            }

            /***********************/
            /*** MQTT CONNECTION ***/
            /***********************/
            if (verbose) console.log("[..] MQTT: Connecting to " + config.mqtt.brokerUrl);
            const client = mqtt.connect(config.mqtt.brokerUrl);
            client.on('connect', () => {
                if (verbose) console.log("[OK] MQTT: Connected");
                client.subscribe(config.mqtt.subscriptionTopic);
                client.on('message', (topic, payload) => {
                    if (config.debugMqtt) console.log(topic);
                    if (typeof config.mqttMappings[topic] !== 'undefined') {
                        var mappings = config.mqttMappings[topic];
                        var create;
                        mappings.forEach(function (itemMapping) {
                            // Loop through all mappings for the current MQTT topic
                            Object.keys(itemMapping).forEach(function (jsonPath) {
                                var valueStorageString = 'mqttValues.' + itemMapping[jsonPath].itemName;
                                var json               = JSON.parse(payload);
                                var evalStr            = null;

                                // Create empty object on-the-fly if it does not exist
                                var firstMapPart = itemMapping[jsonPath].itemName;
                                firstMapPart     = firstMapPart.replace(/\..*/, '');
                                eval("create = (typeof mqttValues." + firstMapPart + ' == "undefined")');
                                if (create) {
                                    eval("mqttValues." + firstMapPart + "={}");
                                }

                                curValue = jp.query(json, jsonPath);

                                var callbackFunction = null;
                                if (typeof itemMapping[jsonPath].callbackFunction !== 'undefined') {
                                    callbackFunction = itemMapping[jsonPath].callbackFunction;
                                }

                                var callbackDataType = null;
                                if (typeof itemMapping[jsonPath].callbackDataType !== 'undefined') {
                                    callbackDataType = itemMapping[jsonPath].callbackDataType;
                                }
                                if (callbackFunction) {
                                    if (callbackDataType === 'string') {
                                        evalStr = callbackFunction + '("' + curValue + '")';
                                    } else {
                                        evalStr = callbackFunction + '(' + curValue + ')';
                                    }
                                    curValue = eval(evalStr);
                                }

                                if (typeof curValue === 'undefined' || Array.isArray(curValue) && curValue.length === 0) {
                                    curValue = null;
                                }

                                // Handle empty curValue to prevent parse error in eval()
                                if (!curValue) {
                                    if (itemMapping[jsonPath].opcDataType === 'Boolean') {
                                        curValue = 'false';
                                    } else if (curValue === null) {
                                        curValue = 'null';
                                    }
                                } else if (itemMapping[jsonPath].opcDataType === 'Boolean') {
                                    curValue = 'true';
                                } else if (itemMapping[jsonPath].opcDataType === 'String') {
                                    curValue = '"' + curValue + '"';
                                }

                                evalStr = valueStorageString + ' = ' + curValue;
                                eval(evalStr);

                                if (config.debugMqtt) console.log(mqttValues);
                            });
                        });
                    }
                });
            });
        }

        /********************/
        /*** START SERVER ***/
        /********************/
        await server.start();
        let endpointUrl = server.endpoints[0].endpointDescriptions()[0].endpointUrl;

        // Replace host name by local ip
        endpointUrl = endpointUrl.replace(/^opc.tcp:\/\/([^:]+)/, "opc.tcp://127.0.0.1");

        if (verbose) console.log("[OK] OPC UA: Listening on port " + server.endpoints[0].port);
        console.log('\nPlease use these values to connect to this server via the IO Manager in WebIQ Designer:');
        console.log("Endpoint URL: ", endpointUrl);
        console.log("Namespace:     " + namespace.namespaceUri);

    } catch (err) {
        console.log("[ERROR]");
        console.log(err);
    }

    // Helper function
    function escapeRegExp(text) {
        return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&');
    }

})();
