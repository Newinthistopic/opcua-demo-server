
const functions = require('./../../../funktionen');



function run1(addressSpace, device, opcua, verbose, serverValues) {
    var namespace2 = addressSpace.getNamespace('http://mynamespace-2/UA/');
    var namespace3 = addressSpace.getNamespace('http://mynamespace-3/UA/');


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
    //Third Level//

    var udtCmPzPid_HMI = functions.createCustomVariable(undefined, "udtCmPzPid_HMI", ZEEX_3111_Hmi, "udtCmPzPid", "ZEEX_3111_Hmi", "udtCmPzPid", undefined, undefined, undefined, undefined, undefined);

    var udtCmPzPid_Parameter = functions.createCustomVariable(undefined, "udtCmPzPid_Parameter", ZEEX_3111_Parameter, "udtCmPzPid", "ZEEX_3111_Parameter", "udtCmPzPid", undefined, undefined, undefined, undefined, undefined);

    var udtCmPzPid_Config = functions.createCustomVariable(undefined, "udtCmPzPid_Config", ZEEX_3111_Config, "udtCmPzPid", "ZEEX_3111_Config", "udtCmPzPid", undefined, undefined, undefined, undefined, undefined);

    var udtEmPz = functions.createCustomVariable(undefined, "udtEmPz", ZEEX_3111_Hmi, "udtEmPz", "ZEEX_3111_Hmi", "udtEmPz", undefined, undefined, undefined, undefined, undefined);
    var udtEmPz_Parameter = functions.createCustomVariable(undefined, "udtEmPz_Parameter", ZEEX_3111_Parameter, "udtEmPz", "ZEEX_3111_Parameter", "udtEmPz", undefined, undefined, undefined, undefined, undefined);

    for (let i = 0; i < 14; i++) {

        var nr = functions.createCustomVariable(i, "nr", udtCmPzPid_Parameter, i.toString(), "ZEEX_3111_Parameter", "udtCmPzPid", undefined, undefined, undefined, undefined, undefined);
        var nr2 = functions.createCustomVariable(i, "nr", udtCmPzPid_Config, i.toString(), "ZEEX_3111_Config", "udtCmPzPid", undefined, undefined, undefined, undefined, undefined);
        var nr3 = functions.createCustomVariable(i, "nr", udtCmPzPid_HMI, i.toString(), "ZZEEX_3111_Hmi", "udtCmPzPid", undefined, undefined, undefined, undefined, undefined);
        var nr4 = functions.createCustomVariable(i, "nr", udtEmPz, i.toString(), undefined, undefined, undefined, undefined, undefined, undefined, undefined,);
        var nr5 = functions.createCustomVariable(i, "nr", udtEmPz_Parameter, i.toString(), "ZEEX_3111_Parameter", "udtEmPz", undefined, undefined, undefined, undefined);


        var udtCool = functions.createCustomVariable(i, "udtCool", nr, "udtCool", "ZZEEX_3111_Parameter", "udtCmPzPid", "udtCool", undefined, undefined, undefined, undefined);
        var udtHeat = functions.createCustomVariable(i, "udtHeat", nr, "udtHeat", "ZEEX_3111_Parameter", "udtCmPzPid", "udtHeat", undefined, undefined, undefined, undefined);
        var udtCoolPid = functions.createCustomVariable(i, "udtCoolPid", udtCool, "udtPid", "ZEEX_3111_Config", "udtCool", "udtPid", undefined, undefined, undefined);
        var udtHeatPid = functions.createCustomVariable(i, "udtHeatPid", udtHeat, "udtPid", "ZEEX_3111_Parameter", "udtCmPzPid", "udtHeat", "udtPid", undefined, undefined);

        //PLASTIFICATION//
        //***********************************************************************************************************/
        //***********************************************************************************************************/
        //***********************************************************************************************************/
        //***********************************************************************************************************/
        var rPzTemp = functions.createCustomVariable(i, "rPzTemp", nr4, "rPzTemp", "ZEEX_3111_Hmi", "udtEmPz", "rPzTemp", undefined, undefined, undefined,);
        //***********************************************************************************************************/
        //Plastification ==> Heating Zones: "Act" //
        var rAct = functions.createCustomVariable(i, "rAct", rPzTemp, "rAct", "ZEEX_3111_Hmi", "udtEmPz", "rPzTemp", "rAct", undefined, functions.rActGet, undefined);
        //***********************************************************************************************************/
        //Plastification ==> Heating Zones: "Set" //
        var rSet = functions.createCustomVariable(i, "rSet", rPzTemp, "rSet", "ZEEX_3111_Hmi", "udtEmPz", "rPzTemp", "rSet", undefined, undefined, functions.rSetSet);




        //Plastification ==> Heating Zones: "Set-Min (rOpMin)" //
        var rOpMin = functions.createCustomVariable(i, "rOpMin", rPzTemp, "rOpMin", "ZEEX_3111_Hmi", "udtEmPz", "rPzTemp", "rOpMin", undefined, functions.rOpMinGet, undefined);
        //console.log(serverValues[rOpMin.rOpMinNodeId]);
        //Plastification ==> Heating Zones: "Set-Max (rOpMax)" //
        var rOpMax = functions.createCustomVariable(i, "rOpMax", rPzTemp, "rOpMax", "ZEEX_3111_Hmi", "udtEmPz", "rPzTemp", "rOpMax", undefined, functions.rOpMaxGet, undefined);
        //***********************************************************************************************************/
        //***********************************************************************************************************/
        //***********************************************************************************************************/
        //***********************************************************************************************************/
        console.log("serverValues[rAct.nodeId] = " + rAct.nodeId);
        console.log("Value of rAct in serverValues: " + serverValues[rAct.nodeId.value]);



        console.log("serverValues[rAct.nodeId] = " + rOpMin.nodeId);
        console.log("Value of rAct in serverValues: " + serverValues[rOpMin.nodeId.value]);
        serverValues[rOpMax.nodeId.value] = serverValues[rOpMin.nodeId.value]
    }


}

module.exports = {
    run1: run1,
    //serverValues:serverValues
}





