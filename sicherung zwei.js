
var { SetGetlogic } = require('./../../../Setter_Getter_Logiken')
const functions = require('./../../../funktionen');




function run1(addressSpace, device, opcua, verbose, serverValues,) {

    var namespace2 = addressSpace.getNamespace('http://mynamespace-2/UA/');
    var namespace3 = addressSpace.getNamespace('http://mynamespace-3/UA/');



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


    var PL_3100_Hmi = namespace3.addObject({
        organizedBy: datablocksGlobal,
        browseName: "PL_3100.Hmi",
        nodeId: "s=PL_3100.Hmi",

    })


    var SU3111_ZeExtruder_Hmi = namespace3.addObject({
        organizedBy: datablocksGlobal,
        browseName: "SU3111_ZeExtruder.Hmi",
        nodeId: "ns=3;s=" + "\"SU3111_ZeExtruder.Hmi\"",
    });
    var SU3111_ZeExtruder_Parameter = namespace3.addObject({
        organizedBy: datablocksGlobal,
        browseName: "SU3111_ZeExtruder.Parameter",
        nodeId: "ns=3;s=" + "\"SU3111_ZeExtruder.Parameter\"",
    });
    var SU3111_ZeExtruder_Config = namespace3.addObject({
        componentOf: datablocksGlobal,
        browseName: "SU3111_ZeExtruder.Config",
        dataType: opcua.DataType.Double,
        nodeId: "s=" + "\"SU3111_ZeExtruder.Config\""
    });

    var SU2110_Feeding_Hmi = namespace3.addObject({
        componentOf: datablocksGlobal,
        browseName: "SU2110_Feeding.Hmi",
        dataType: opcua.DataType.Double,
        nodeId: "s=" + "\"SU2110_Feeding.Hmi\""
    });

    var SU2110_Feeding_Parameter = namespace3.addObject({
        componentOf: datablocksGlobal,
        browseName: "SU2110_Feeding.Parameter",
        dataType: opcua.DataType.Double,
        nodeId: "s=" + "\"SU2110_Feeding.Parameter\""
    });

    var SU1000_Line_Hmi = namespace3.addObject({
        componentOf: datablocksGlobal,
        browseName: "SU1000_Line.Hmi",
        dataType: opcua.DataType.Double,
        nodeId: "s=" + "\"SU1000_Line.Hmi\""
    });

    var SU1000_Line_Parameter = namespace3.addObject({
        componentOf: datablocksGlobal,
        browseName: "SU1000_Line.Parameter",
        dataType: opcua.DataType.Double,
        nodeId: "s=" + "\"SU1000_Line.Parameter\""
    });


    var SU3100_Plastification_Hmi = namespace3.addObject({
        componentOf: datablocksGlobal,
        browseName: "SU3000_Plastification.Hmi",
        dataType: opcua.DataType.Double,
        nodeId: "s=" + "\"SU3000_Plastification.Hmi\""
    });


    var SU3100_Plastification_Parameter = namespace3.addObject({
        componentOf: datablocksGlobal,
        browseName: "SU3000_Plastification.Parameter",
        dataType: opcua.DataType.Double,
        nodeId: "s=" + "\"SU3000_Plastification.Parameter\""
    });

    var SU3141_DiverterValve_Hmi = namespace3.addObject({
        componentOf: datablocksGlobal,
        browseName: "SU3141_DiverterValve.Hmi",
        dataType: opcua.DataType.Double,
        nodeId: "s=" + "\"SU3141_DiverterValve.Hmi\""
    });

    var SU3141_DiverterValve_Parameter = namespace3.addObject({
        componentOf: datablocksGlobal,
        browseName: "SU3141_DiverterValve.Parameter",
        dataType: opcua.DataType.Double,
        nodeId: "s=" + "\"SU3141_DiverterValve.Parameter\""
    });


    var SU3111_ZeExtruder_Hmi_udtUm = functions.createCustomVariable(undefined, "SU3111_ZeExtruder_Hmi_udtUm", SU3111_ZeExtruder_Hmi, "udtUm", "SU3111_ZeExtruder.Hmi", "udtUm", undefined, undefined, undefined, SetGetlogic.SU3111_ZeExtruder_Hmi_udtUmGet, SetGetlogic.SU3111_ZeExtruder_Hmi_udtUmSet)
    var SU3111_ZeExtruder_Hmi_udtUm_dwStat = functions.createCustomVariable(undefined, "SU3111_ZeExtruder_Hmi_udtUm_dwStat", SU3111_ZeExtruder_Hmi_udtUm, "dwStat", "SU3111_ZeExtruder.Hmi", "udtUm", "dwStat", undefined, undefined, SetGetlogic.SU3111_ZeExtruder_Hmi_udtUm_dwStatGet, SetGetlogic.SU3111_ZeExtruder_Hmi_udtUm_dwStatSet)

    module.exports = {
        data: data
    }

}


module.exports = {
    run1: run1,
}


