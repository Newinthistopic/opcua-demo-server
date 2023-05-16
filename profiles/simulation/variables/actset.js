const initial = require('./../../../funktionen');


module.exports = {

    run: function (addressSpace, device, opcua, verbose, serverValues) {


        // create ppC_Compound_V3 object
        var namespace2 = addressSpace.getNamespace('http://mynamespace-2/UA/');
        var namespace3 = addressSpace.getNamespace('http://mynamespace-3/UA/');


        var ppC_Compound_V3 = namespace3.addObject({
            organizedBy: device,
            browseName: "ppC_Compound_V3",
            nodeId: "s=PLC",
            description: "The PLC instance which supports you with OPC UA functionality"
        })

        // create DatablocksGlobal object
        var dataBlocksGlobal = namespace3.addObject({
            organizedBy: ppC_Compound_V3,
            browseName: "DataBlocksGlobal",
            nodeId: "s=DatablocksGlobal"
        });



        var ZEEX_3111_Hmi = namespace3.addObject({
            organizedBy: dataBlocksGlobal,
            browseName: "ZEEX_3111_Hmi",
            nodeId: "s=" + "\"ZEEX_3111_Hmi\""
        });






        //   nodeId: "s=" + "\"ZEEX_3111_Hmi\""



        // create udtEmPz variable undefined Datatype Equipment Module Process Zone
        var udtEmPz = namespace3.addVariable({
            componentOf: ZEEX_3111_Hmi,
            browseName: "udtEmPz",
            dataType: opcua.DataType.Double,
            nodeId: "s=" + "\"ZEEX_3111_Hmi\".\"udtEmPz\"",
        });

        for (let i = 0; i < 14; i++) {

            var nr = namespace3.addVariable({
                componentOf: udtEmPz,
                browseName: i.toString(),
                dataType: opcua.DataType.Double,
                nodeId: "s=" + "\"ZEEX_3111_Hmi\".\"udtEmPz\"" + "[" + i + "]",
            })

            var rPzTemp = namespace3.addVariable({
                componentOf: nr,
                browseName: "rPzTemp",
                dataType: opcua.DataType.Float,
                nodeId: "s=" + "\"ZEEX_3111_Hmi\".\"udtEmPz\"" + "[" + i + "]." + "\"rPzTemp\"",

            })

            var rAct = namespace3.addVariable({
                componentOf: rPzTemp,
                browseName: "rAct",
                dataType: opcua.DataType.Float,
                nodeId: "ns=3;s=" + "\"ZEEX_3111_Hmi\".\"udtEmPz\"" + "[" + i + "]." + "\"rPzTemp\".\"rAct\"",
                value: {
                    get: function () {
                        const rActNodeId = this.nodeId.value;
                        initial.rAct(i, rActNodeId, serverValues);
                        return new opcua.Variant({ dataType: opcua.DataType.Float, value: serverValues[rActNodeId] });
                    },
                    set: function (variant) {
                        return opcua.StatusCodes.Good;
                    }
                }
            })





            var rSet = namespace3.addVariable({
                componentOf: rPzTemp,
                browseName: "rSet",
                dataType: opcua.DataType.Float,
                nodeId: "ns=3;s=" + "\"ZEEX_3111_Hmi\".\"udtEmPz\"" + "[" + i + "]." + "\"rPzTemp\".\"rSet\"",
                value: {
                    get: function () {
                        const nodeIdValue = this.nodeId.value;

                        return new opcua.Variant({ dataType: opcua.DataType.Float, value: serverValues[nodeIdValue] });
                    },
                    set: function (variant) {

                        const rSetNodeId = this.nodeId.value;
                        serverValues[rSetNodeId] = parseFloat(variant.value);


                        const rActNodeId = rSetNodeId.replace("rSet", "rAct");


                        // serverValues[rActNodeId] = serverValues[rSetNodeId];
                        console.log(`Setter-Funktion aufgerufen für rSet mit nodeId "${rSetNodeId}": ${serverValues[rSetNodeId]}`);
                        console.log(`------------------------------------`);
                        console.log(`rAct nodeId:${rActNodeId}\nrAct Wert: ${serverValues[rActNodeId]}\n`);
                        console.log(`********************************************\n`);


                        return opcua.StatusCodes.Good;
                    }
                }

            });


            var rOpMin = namespace3.addVariable({
                componentOf: rPzTemp,
                browseName: "rOpMin",
                dataType: opcua.DataType.Float,
                nodeId: "ns=3;s=" + "\"ZEEX_3111_Hmi\".\"udtEmPz\"" + "[" + i + "]." + "\"rPzTemp\".\"rOpMin\"",
                value: {
                    get: function () {
                        return new opcua.Variant({ dataType: opcua.DataType.Float, value: 0 });
                        // 

                    },

                    set: function (variant) {
                        // do nothing
                    }
                }

            })

            var rOpMax = namespace3.addVariable({
                componentOf: rPzTemp,
                browseName: "rOpMax",
                dataType: opcua.DataType.Float,
                nodeId: "ns=3;s=" + "\"ZEEX_3111_Hmi\".\"udtEmPz\"" + "[" + i + "]." + "\"rPzTemp\".\"rOpMax\"",
                value: {
                    get: function () {
                        const rOpMaxNodeId = this.nodeId.value;
                     
                        //  console.log(`Node-ID von rOpMax: ${rOpMaxNodeId}`);
                        return new opcua.Variant({ dataType: opcua.DataType.Float, value: serverValues[rOpMaxNodeId] });
                    },
                    set: function (variant) {
                    }
                }
            })
        }
    }
}