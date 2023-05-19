const initial = require('../../../funktionen');


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
        var datablocksGlobal = namespace3.addObject({
            organizedBy: ppC_Compound_V3,
            browseName: "DatablocksGlobal",
            nodeId: "s=DatablocksGlobal"
        });



        var ZEEX_3111_Hmi = namespace3.addObject({
            organizedBy: datablocksGlobal,
            browseName: "ZEEX_3111_Hmi",
            nodeId: "ns=3;s=" + "\"ZEEX_3111_Hmi\"",
        });

       


    
        var udtEmPz = namespace3.addVariable({
            componentOf: ZEEX_3111_Hmi,
            browseName: "udtEmPz",
            dataType: opcua.DataType.Double,
            nodeId: "s=" + "\"ZEEX_3111_Hmi\".\"udtEmPz\"",
        });




        function createCustomVariable(i, variableName, componentOf, browseName, part1, part2, part3, part4, part5,  customGetLogic, customSetLogic) {
            var nodeId = `"ns=3;s=\"${part1}\".\"${part2}\"[${i}]`;
            // Nur hinzufügen, wenn part3 definiert ist
            if (part3) {
                nodeId += `.\"${part3}\"`;
            }
            // Nur hinzufügen, wenn part4 definiert ist
            if (part4) {
                nodeId += `.\"${part4}\"`;
            }
            if (part5) {
                nodeId += `.\"${part5}\"`;
            }


            
            var newVariable = {};
            newVariable[variableName] = namespace3.addVariable({
                componentOf: componentOf,
                browseName: browseName,
                dataType: opcua.DataType.Float,
                nodeId: nodeId,
                value: {
                    get: function () {
                        var nameNodeId = {};
                        nameNodeId[variableName + "NodeId"] = this.nodeId.value;
                        // console.log("nameNodeId:", nameNodeId);

                        if (customGetLogic) {
                            customGetLogic(nameNodeId, serverValues);

                         
                          
                        }

                    
                        return new opcua.Variant({ dataType: opcua.DataType.Float, value: serverValues[nameNodeId[variableName + "NodeId"]] });
                    },
                    set: function (variant) {
                        var nameNodeId = {};
                        nameNodeId[variableName + "NodeId"] = this.nodeId.value;
                        serverValues[nameNodeId[variableName + "NodeId"]] = parseFloat(variant.value);
                        if (customSetLogic) {
                            customSetLogic(nameNodeId, serverValues);
                            console.debug("customSetLogic wird aufgerufen...", nameNodeId);

                        }
                        return opcua.StatusCodes.Good;
                    }
                }
            });

            return newVariable[variableName]; // Rückgabe der neu erstellten Variable
        }


       



        for (let i = 0; i < 14; i++) {

            var nr = createCustomVariable(i, "nr", udtEmPz, i.toString(), undefined, undefined,undefined,undefined,undefined ,undefined, undefined,);

            var rPzTemp = createCustomVariable(i, "rPzTemp", nr, "rPzTemp", "ZEEX_3111_Hmi","udtEmPz","rPzTemp",undefined ,undefined, undefined,);

            var rAct = createCustomVariable(i, "rAct", rPzTemp, "rAct", "ZEEX_3111_Hmi","udtEmPz","rPzTemp","rAct" ,undefined, rActGet, rActSet);
            function rActGet (nameNodeId, serverValues){
                initial.rAct(i,nameNodeId, serverValues)
            }
            function rActSet (){}

            var rSet = createCustomVariable(i, "rSet", rPzTemp, "rSet", "ZEEX_3111_Hmi","udtEmPz","rPzTemp","rSet" ,undefined, rSetGet,  rSetSet);
            function rSetGet (){}
            function rSetSet (){}


            var rOpMin = createCustomVariable(i, "rOpMin", rPzTemp, "rOpMin", "ZEEX_3111_Hmi","udtEmPz","rPzTemp","rOpMin" ,undefined, rOpMinGet,  rOpMinSet);
            function rOpMinGet (){}
            function rOpMinSet(){}
            
            var rOpMax = createCustomVariable(i, "rOpMax", rPzTemp, "rOpMax", "ZEEX_3111_Hmi","udtEmPz","rPzTemp","rOpMax" ,undefined, rOpMaxGet,  rOpMaxSet);
            function rOpMaxGet (){}
            function rOpMaxSet(){}

       
            
        } 
    }
}