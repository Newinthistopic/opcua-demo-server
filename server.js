console.log("<<< WebIQ OPC UA Server without MQTT >>>");
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
var batchVars = null;

//console.log(batchVars);

// Settings / vars
var verbose             = config.verbose;
var serverValues        = {}; // Holds all server values
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
        const namespace = addressSpace?.getOwnNamespace()

      
        const namespaceUri2 = "http://mynamespace-2/UA/";
        const namespace2 = addressSpace.registerNamespace(namespaceUri2);
        const namespaceIndex3 = addressSpace.getNamespaceIndex(namespaceUri2);


        const namespaceUri3 = "http://mynamespace-3/UA/";
        const namespace3 = addressSpace.registerNamespace(namespaceUri3);
        const namespaceIndex4 = addressSpace.getNamespaceIndex(namespaceUri3);

        
        const deviceNodeId = "ns=2;s=5001"
    
        const device = namespace2.addObject(
            {
                organizedBy: addressSpace.rootFolder.objects,
                browseName : config.opcua.browseName,
                nodeId: deviceNodeId
            }
        );
        module.exports = {

            namespaceUri2: namespaceUri2 ,
            namespace2: namespace2 ,
            namespaceIndex3: namespaceIndex3 ,
   
           namespaceUri3: namespaceUri3,
            namespace3: namespace3  ,
            namespaceIndex4 : namespaceIndex4,

            addressSpace: addressSpace,
            opcua:opcua,
            device:device
   
       };              

        /*****************/
        /*** VARIABLES ***/
        /*****************/
        
        
        if (varFiles.length) {
            if (verbose) console.log("[..] OPC UA: Creating variables from " + varFiles.length + ' external files');
            varFiles.forEach(function (file) {
                var module = require(profileDir + '/variables/' + file);
                var varName = file.replace(/\.js$/);
                serverValues[varName] = module.run1(addressSpace, device, opcua, verbose, serverValues);
            });
            if (verbose) console.log("[OK] OPC UA: Variables created");
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
  
    
})();

