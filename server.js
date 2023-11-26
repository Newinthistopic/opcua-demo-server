console.log("OPC UA Server  ");
console.log('Starting... please wait!');

const fs = require('fs');

const { OPCUAServer, OPCUACertificateManager } = require("node-opcua");

const certificateManager = new OPCUACertificateManager({ automaticallyAcceptUnknownCertificate: true, rootFolder: "./certs", });
const path = require('path');

// Pfad zur Konfigurationsdatei
var configPath = path.join(__dirname, 'profiles', 'simulation', 'config.json');
var config = require(configPath);

// Functions Import OPCUA Modul
const opcua = require("node-opcua");

// Settings 
var verbose = true;
var serverValues = {}; // Holds all server values

(async () => {

    /*** SERVER INIT ***/
    /*******************/
    const server = new opcua.OPCUAServer(
        {
            alternateHostname: config.opcua.serverHostname,
            port: config.opcua.serverPort,
            resourcePath: config.opcua.resourcePath,
            buildInfo: {
                productName: config.opcua.productName,
                buildNumber: config.opcua.buildNumber,
                buildDate: new Date(config.opcua.buildDate)
            },
            serverCertificateManager: certificateManager
        }
    );

    await server.initialize();
    console.log("[OK] OPC UA: Server created");

    const addressSpace = server.engine.addressSpace;
    const namespace = addressSpace?.getOwnNamespace()

    const namespaceUri2 = "KME_Demo_Namespace2";
    const namespace2 = addressSpace.registerNamespace(namespaceUri2);

    const namespaceUri3 = "KME_Demo_Namespace3";
    const namespace3 = addressSpace.registerNamespace(namespaceUri3);
      
    const device = namespace2.addObject(
        {
            organizedBy: addressSpace.rootFolder.objects,
            browseName: config.opcua.browseName,
            nodeId: "ns=2;s=5001",
        }
    );
   
    module.exports = {
                namespace3: namespace3,
                       opcua: opcua,
        serverValues: serverValues,
    };

    /*** VARIABLES ***/
    var myModule = require('./profiles/simulation/variables/Variablen')
    myModule.run1(addressSpace, device, opcua, verbose, serverValues)

    /*** START SERVER ***/
    await server.start();
    let endpointUrl = server.endpoints[0].endpointDescriptions()[0].endpointUrl;

    // Replace host name by local ip
    endpointUrl = endpointUrl.replace(/^opc.tcp:\/\/([^:]+)/, "opc.tcp://127.0.0.1");

    console.log("[OK] OPC UA: Listening on port " + server.endpoints[0].port);
    console.log("Endpoint URL: ", endpointUrl);
    console.log("Namespace:     " + namespace.namespaceUri);
})();

