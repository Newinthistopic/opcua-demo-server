
const initial = require('./../../../funktionen');
module.exports = {

    run1: function (addressSpace, device, opcua, verbose, serverValues) {

        var namespace3 = addressSpace.getNamespace('http://mynamespace-3/UA/');
        var namespace2 = addressSpace.getNamespace('http://mynamespace-2/UA/');

        function createCustomVariable(i, variableName, componentOf, browseName, part1, part2, part3, part4, part5, customGetLogic, customSetLogic) {
            var nodeId;
        
            if(part3 || part4 || part5 || i !== undefined) {
                nodeId = `"ns=3;s=\"${part1}\".\"${part2}\"[${i}]`;
                if (part3) {
                    nodeId += `.\"${part3}\"`;
                }
                if (part4) {
                    nodeId += `.\"${part4}\"`;
                }
                if (part5) {
                    nodeId += `.\"${part5}\"`;
                }
            } else {
                nodeId = `"ns=3;s=\"${part1}\".\"${part2}\"`;
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
                        }
                        return opcua.StatusCodes.Good;
                    }
                }
            });
            return newVariable[variableName];
        }
               
        

        //First Level//
        var ppC_Compound_V3 = namespace3.addObject({
            organizedBy: device,
            browseName: "ppC_Compound_V3",
            nodeId: "s=PLC",
            description: "The PLC instance which supports you with OPC UA functionality"
        })

        var datablocksGlobal = namespace3.addObject({
            organizedBy: ppC_Compound_V3,
            browseName: "DatablocksGlobal",
            nodeId: "s=DatablocksGlobal"
        });

        //Second Level//
        var ZEEX_3111_Hmi = namespace3.addObject({
            organizedBy: datablocksGlobal,
            browseName: "ZEEX_3111_Hmi",
            nodeId: "ns=3;s=" + "\"ZEEX_3111_Hmi\"",
        });


        var ZEEX_3111_Parameter = namespace3.addObject({
            organizedBy: datablocksGlobal,
            browseName: "ZEEX_3111_Parameter",
            nodeId: "ns=3;s=" + "\"ZEEX_3111_Parameter\"",
        });

        var ZEEX_3111_Config = namespace3.addObject({
            componentOf: datablocksGlobal,
            browseName: "ZEEX_3111_Config",
            dataType: opcua.DataType.Double,
            nodeId: "s=" + "\"ZEEX_3111_Config\""

        });



             
        //Thid Level//
     

        var udtCmPzPid_HMI = createCustomVariable(undefined, "udtCmPzPid_HMI", ZEEX_3111_Hmi, "udtCmPzPid", "ZEEX_3111_Hmi", "udtCmPzPid", undefined, undefined, undefined, undefined, undefined);

        var udtCmPzPid_Parameter = createCustomVariable(undefined, "udtCmPzPid_Parameter", udtCmPzPid_Parameter, "udtCmPzPid", "ZEEX_3111_Parameter", "udtCmPzPid", undefined, undefined, undefined, undefined, undefined);

        var udtCmPzPid_Config = createCustomVariable(undefined, "udtCmPzPid_Config", ZEEX_3111_Config, "udtCmPzPid", "ZEEX_3111_Config", "udtCmPzPid", undefined, undefined, undefined, undefined, undefined);


        var udtEmPz = createCustomVariable(undefined, "udtEmPz", ZEEX_3111_Hmi, "udtEmPz", "ZEEX_3111_Hmi", "udtEmPz", undefined, undefined, undefined, undefined, undefined);
   

        for (let i = 0; i < 14; i++) {

            var nr = createCustomVariable(i, "nr", udtCmPzPid_Parameter, i.toString(), "ZEEX_3111_Parameter", "udtCmPzPid", undefined, undefined, undefined, undefined, undefined);
            var nr2 = createCustomVariable(i, "nr", udtCmPzPid_Config, i.toString(), "ZEEX_3111_Config", "udtCmPzPid", undefined, undefined, undefined, undefined, undefined);
            var nr3 = createCustomVariable(i, "nr", udtCmPzPid_HMI, i.toString(), "ZZEEX_3111_Hmi", "udtCmPzPid", undefined, undefined, undefined, undefined, undefined);
            var nr4 = createCustomVariable(i, "nr", udtEmPz, i.toString(), undefined, undefined, undefined, undefined, undefined, undefined, undefined,);

            var udtCool = createCustomVariable(i, "udtCool", nr, "udtCool", "ZZEEX_3111_Parameter", "udtCmPzPid", "udtCool", undefined, undefined, undefined, undefined);
            var udtCoolPid = createCustomVariable(i, "udtCoolPid", udtCool, "udtPid", "ZEEX_3111_Config", "udtCool", "udtPid", undefined, undefined, undefined);


            var udtHeat = createCustomVariable(i, "udtHeat", nr, "udtHeat", "ZEEX_3111_Parameter", "udtHeat", undefined, undefined, undefined, undefined);
            var udtHeatPid = createCustomVariable(i, "udtHeatPid", udtHeat, "udtHeatPid", "ZEEX_3111_Parameter", "udtCmPzPid", "udtHeat", "udtPid", undefined, undefined);

            //PLASTIFICATION//
            //***********************************************************************************************************/
            //***********************************************************************************************************/
            //***********************************************************************************************************/
            //***********************************************************************************************************/
         

            var rPzTemp = createCustomVariable(i, "rPzTemp", nr4, "rPzTemp", "ZEEX_3111_Hmi", "udtEmPz", "rPzTemp", undefined, undefined, undefined,);

            var rAct = createCustomVariable(i, "rAct", rPzTemp, "rAct", "ZEEX_3111_Hmi", "udtEmPz", "rPzTemp", "rAct", undefined, rActGet, rActSet);
          function rActGet (nameNodeId,serverValues){
            initial.rAct(i,nameNodeId,serverValues)
          }
            function rActSet(){}
        }
        function rActGet (nameNodeId,serverValues){
            initial.rAct(i,nameNodeId,serverValues)
    }
}
