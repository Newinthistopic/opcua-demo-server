# SmartHMI Demo OPC-UA Server
This repository contains a small OPC-UA Server implemented in JavaScript (Node.js) using
the [node-opcua](https://github.com/node-opcua) library. It provides a few
static as well as dynamic variables and methods.

## Quick Start
First you will need to download the dependencies by executing `npm install` in
this directory.

Now you can run the server using `nodejs server.js`. 
After a successful start you will see something like this:

```
<<< WebIQ OPC UA Server >>>
(c) 2019 Smart HMI GmbH
-----------------------------------------------------------
Starting... please wait!
Please use these values to connect to this server via the IO Manager in WebIQ Designer:
Endpoint URL:  opc.tcp://MCP.mshome.net:48010/WebIQ/DemoServer
Namespace:     urn:NodeOPCUA-Server-default
```

By default the server is running on port 48010 on all interfaces.
You can change some settings in the `config.json` configuration file.

Please read the How-To here: https://www.smart-hmi.de/user/download/deliver/how/How%20To%20Create%20and%20Run%20an%20MQTT-to-OPC-UA%20server/index.html

## Disclaimer
This software is provided as-is without any warranty of any kind. It is not part of the WebIQ system.