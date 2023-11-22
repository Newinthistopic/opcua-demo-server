console.log("OPC UA Server  ");
console.log("-----------------------------------------------------------");
console.log('Starting... please wait!');

const fs = require('fs');

const {
    OPCUAServer,
    OPCUACertificateManager
} = require("node-opcua");

const certificateManager = new OPCUACertificateManager({
    automaticallyAcceptUnknownCertificate: true,
    rootFolder: "./certs",
});

const path = require('path');

// Pfad zur Konfigurationsdatei
var configPath = path.join(__dirname, 'profiles', 'simulation', 'config.json');
var config = require(configPath);

// Functions
const opcua = require("node-opcua");

// Settings / vars
var verbose = true;
var serverValues = {}; // Holds all server values


(async () => {

    try {
        /*******************/
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
                browseName: config.opcua.browseName,
                nodeId: deviceNodeId
            }
        );

        module.exports = {

            namespaceUri2: namespaceUri2,
            namespace2: namespace2,
            namespaceIndex3: namespaceIndex3,

            namespaceUri3: namespaceUri3,
            namespace3: namespace3,
            namespaceIndex4: namespaceIndex4,

            addressSpace: addressSpace,
            opcua: opcua,
            device: device,
            serverValues: serverValues,
            verbose: verbose
        };

        /*****************/
        /*** VARIABLES ***/
        /*****************/

       var myModule = require('./profiles/simulation/variables/Variabeln')
      
       myModule.run1(addressSpace, device, opcua, verbose, serverValues)
                  
        /********************/
        /*** START SERVER ***/
        /********************/
        await server.start();
        let endpointUrl = server.endpoints[0].endpointDescriptions()[0].endpointUrl;

        // Replace host name by local ip
        endpointUrl = endpointUrl.replace(/^opc.tcp:\/\/([^:]+)/, "opc.tcp://127.0.0.1");

         console.log("[OK] OPC UA: Listening on port " + server.endpoints[0].port);
        console.log('\nPlease use these values to connect to this server via the IO Manager in WebIQ Designer:');
        console.log("Endpoint URL: ", endpointUrl);
        console.log("Namespace:     " + namespace.namespaceUri);

    } catch (err) {
        console.log("[ERROR]");
        console.log(err);
    }

})();

