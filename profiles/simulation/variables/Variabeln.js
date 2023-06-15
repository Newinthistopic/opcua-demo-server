
var { SetGetLogic } = require('./../../../Setter_Getter_Logiken')
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

    var udtPc_Hmi = functions.createCustomVariable(undefined, "udtPc.Hmi", PL_3100_Hmi, "udtPc", "PL_3100.Hmi", "udtPc", undefined, undefined, undefined, undefined, undefined);


    var udtCmPzPid_Hmi = functions.createCustomVariable(undefined, "udtCmPzPid_Hmi", SU3111_ZeExtruder_Hmi, "udtCmPzPid", "SU3111_ZeExtruder.Hmi", "udtCmPzPid", undefined, undefined, undefined, undefined, undefined);
    var udtCmPzPid_Parameter = functions.createCustomVariable(undefined, "udtCmPzPid_Parameter", SU3111_ZeExtruder_Parameter, "udtCmPzPid", "SU3111_ZeExtruder.Parameter", "udtCmPzPid", undefined, undefined, undefined, undefined, undefined);
    var udtCmPzPid_Config = functions.createCustomVariable(undefined, "udtCmPzPid_Config", SU3111_ZeExtruder_Config, "udtCmPzPid", "SU3111_ZeExtruder.Config", "udtCmPzPid", undefined, undefined, undefined, undefined, undefined);
    var udtEmPz = functions.createCustomVariable(undefined, "udtEmPz", SU3111_ZeExtruder_Hmi, "udtEmPz", "SU3111_ZeExtruder.Hmi", "udtEmPz", undefined, undefined, undefined, undefined, undefined);
    var udtEmPz_Parameter = functions.createCustomVariable(undefined, "udtEmPz_Parameter", SU3111_ZeExtruder_Parameter, "udtEmPz", "SU3111_ZeExtruder.Parameter", "udtEmPz", undefined, undefined, undefined, undefined, undefined);
    var udtEmPzCool = functions.createCustomVariable(undefined, "udtEmPzCoo", SU3111_ZeExtruder_Parameter, "udtEmPzCool", "SU3111_ZeExtruder.Parameter", "udtEmPzCool", undefined, undefined, undefined, undefined, undefined);
    var udtEmExtruderDriveCtrl_Parameter = functions.createCustomVariable(undefined, "udtEmExtruderDriveCtrl_Parameter ", SU3111_ZeExtruder_Parameter, "udtEmExtruderDriveCtrl", "SU3111_ZeExtruder.Parameter", "udtEmExtruderDriveCtrl", undefined, undefined, undefined, undefined, undefined);
    var udtEmExtruderDriveCtrl_Config = functions.createCustomVariable(undefined, "udtEmExtruderDriveCtrl_Config ", SU3111_ZeExtruder_Config, "udtEmExtruderDriveCtrl", "SU3111_ZeExtruder.Config", "udtEmExtruderDriveCtrl", undefined, undefined, undefined, undefined, undefined);
    var rScrewTorque = functions.createCustomVariable(undefined, "rScrewTorque ", SU3111_ZeExtruder_Hmi, "rScrewTorque", "SU3111_ZeExtruder.Hmi", "udtEmExtruderDriveCtrl", "rSrewTorque", undefined, undefined, undefined, undefined);
    var udtEmGearOilLubExt_Config = functions.createCustomVariable(undefined, "udtEmGearOilLubExt_Config", SU3111_ZeExtruder_Config, "udtEmGearOilLubExt", "SU3111_ZeExtruder.Config", "udtEmMGearOilLubExt", undefined, undefined, undefined, undefined, undefined);
    var udtEmMotorCoolingExt_Config = functions.createCustomVariable(undefined, "udtEmMotorCoolingExt_Config", SU3111_ZeExtruder_Config, "udtEmMotorCoolingExt", "SU3111_ZeExtruder.Config", "udtEmMotorCoolingExt", undefined, undefined, undefined, undefined, undefined);
    var udtEmGearOilLubExt_Hmi = functions.createCustomVariable(undefined, "udtEmMGearOilLubExt_Hmi", SU3111_ZeExtruder_Hmi, "udtEmGearOilLubExt", "SU3111_ZeExtruder.Hmi", "udtEmGearOilLubExt", undefined, undefined, undefined, undefined, undefined);
    // var udtEmMGearOilLubExt.Config = functions.createCustomVariable(undefined, "udtEmMGearOilLubExt.Config",SU3111_ZeExtruder.Config,"udtEmMGearOilLubExt", "SU3111_ZeExtruder.Config", "udtEmMGearOilLubExt", undefined, undefined, undefined, undefined, undefined);
    var udtEmMotorClutchExt_Config = functions.createCustomVariable(undefined, "udtEmMotorClutchExt_Config", SU3111_ZeExtruder_Config, "udtEmMotorClutchExt", "SU3111_ZeExtruder.Config", "udtEmMotorClutchExt", undefined, undefined, undefined, undefined, undefined);
    var udtEmMotorClutchExt_Hmi = functions.createCustomVariable(undefined, "udtEmMotorClutchExt_Hmi", SU3111_ZeExtruder_Hmi, "udtEmMotorClutchExt", "SU3111_ZeExtruder.Hmi", "udtEmMotorClutchExt", undefined, undefined, undefined, undefined, undefined);
    var udtCmMeltPress_Parameter = functions.createCustomVariable(undefined, "udtCmMeltPress_Parameter", SU3111_ZeExtruder_Parameter, "udtCmMeltPress", "SU3111_ZeExtruder.Parameter", "udtCmMeltPress", undefined, undefined, undefined, undefined, undefined);
    var udtCmMeltPress_Hmi = functions.createCustomVariable(undefined, "udtCmMeltPress_Hmi", SU3111_ZeExtruder_Hmi, "udtCmMeltPress", "SU3111_ZeExtruder.Hmi", "udtCmMeltPress", undefined, undefined, undefined, undefined, undefined);
    //Extruder ==> Expert Settings ==> Parameter
    //***********************************************************************************************************/
    //***********************************************************************************************************/
    //***********************************************************************************************************/
    //***********************************************************************************************************/
    //BUTTONS// //BUTTONS// //BUTTONS// //BUTTONS//
    //Extruder ==> Expert Settings ==> Parameter


    //Extruder ==> Expert Settings ==> Parameter ==> Motor Cooling ==> MotorCooling: "Valve / Blower"



    //Extruder ==> Expert Settings ==> Parameter ==> Gear Oil Lubrication ==> Oil temprature type: "Analog Inputs / Digital Inputs"
    var udtOilTempType = functions.createCustomVariable(undefined, "udtOilTempType", udtEmGearOilLubExt_Config, "udtOilTempTyp", "SU3111_ZeExtruder.Config", "udtEmGearOilLubExt", "udtOilTempType", undefined, undefined, undefined, undefined);
    var udtOilTempTypeSet = functions.createCustomVariable(undefined, "udtOilTempTypeSet", udtOilTempType, "Set", "SU3111_ZeExtruder.Config", "udtEmGearOilLubExt", "udOilTempType", "Set", undefined, undefined, undefined);


    //Extruder ==> Expert Settings ==> Parameter ==> Motor Clutch ==> Clutch Tpe: "Pressure Evaluation / Digital Evaluation"
    var udClutchType = functions.createCustomVariable(undefined, "udClutchType", udtEmMotorClutchExt_Config, "udClutchType", "SU3111_ZeExtruder.Config", "udtEmMotorClutchExt", "udClutchType", undefined, undefined, undefined, undefined, undefined);
    var udClutchTypeSet = functions.createCustomVariable(undefined, "udClutchTypeSet", udClutchType, "Set", "SU3111_ZeExtruder.Config", "udtEmMotorClutchExt", "udClutchType", "Set", undefined, undefined, undefined);


    //Extruder ==> Expert Settings ==> Parameter ==> Pressure Monitoring ==> Parameter and values p1: "Calibration"




    //BUTTONS// //BUTTONS// //BUTTONS// //BUTTONS//
    //Extruder ==> Expert Settings ==> PID Parameter


    var udtPcdwCtrl = functions.createCustomVariable(undefined, "udtPcdwCtrl", udtPc_Hmi, "dwCtrl", "PL_3100.Hmi", "udtPc", "dwCtrl", undefined, undefined, undefined, undefined);
    var udtModState_Hmi = functions.createCustomVariable(undefined, "udtModState_Hmi", udtPc_Hmi, "udtModState", "PL_3100.Hmi", "udtPc", "udtModState", undefined, undefined, undefined, undefined);
    var udtModStatedwStatus = functions.createCustomVariable(undefined, "udtModStatedwStatus", udtModState_Hmi, "dwStatus", "PL_3100.Hmi", "udtPc", "udtModState", "dwStatus", undefined, undefined, undefined);
    var udtModStatedwUnitNavigationStatus = functions.createCustomVariable(undefined, "udtModStatedwUnitNavigationStatus", udtModState_Hmi, "dwUnitNavigationStatus", "PL_3100.Hmi", "udtPc", "udtModState", "dwUnitNavigationStatus", undefined, undefined, undefined);
    var udtModStateuiActOpMode = functions.createCustomVariable(undefined, "udtModStateuiActOpMode", udtModState_Hmi, "uiActOpMode", "PL_3100.Hmi", "udtPc", "udtModState", "uiActOpMode", undefined, undefined, undefined);


    var data = {};
    for (var i = 0; i < 14; i++) {
        data[i] = {};

        //Extruder ==> Expert Settings ==> PID Parameter ==> Cooling Control ==> Cool Type: "Analogue / PWM Blower / Injection / PWm Valve  "
        data[i].udCoolType = functions.createCustomVariable(i, "udCoolType ", udtCmPzPid_Config, "udCoolType ", "SU3111_ZeExtruder.Config", "udtCmPzPid", "udCoolType", undefined, undefined, undefined, undefined);
        data[i].udCoolTypeSet = functions.createCustomVariable(i, "udCoolType", data[i].udCoolType, "udCoolType", "SU3111_ZeExtruder.Config", "udtCmPzPid", "udCoolType", "Set", undefined, undefined, undefined);

    }






    //Extruder ==> Expert Settings ==> Parameter==>Extruder==> Spec.rate : "Min-Set" //
    var specRaterOpMin = functions.createCustomVariable(undefined, "specRaterOpMin", udtEmExtruderDriveCtrl_Parameter, "rSpecThroughputMin", "SU3111_ZeExtruder.Parameter", "udtEmExtruderDriveCtrl", "rSpecThroughputMin", undefined, undefined, undefined, undefined);
    //Extruder ==> Expert Settings ==> Parameter==> Spec.rate : "Min-Set" //
    var specRaterOpMinSet = functions.createCustomVariable(undefined, "specRaterOpMinSet", specRaterOpMin, "Set", "SU3111_ZeExtruder.Parameter", "udtEmExtruderDriveCtrl", "rSpecThroughputMin", "Set", undefined, undefined, undefined);
    //Extruder ==> Expert Settings ==> Parameter==> Spec.rate : "Min-Max" //
    var specRaterOpMinMax = functions.createCustomVariable(undefined, "specRaterOpMinMax", specRaterOpMin, "Max", "SU3111_ZeExtruder.Parameter", "udtEmExtruderDriveCtrl", "rSpecThroughputMin", "Max", undefined, undefined, undefined);
    //Extruder ==> Expert Settings ==> Parameter==> Spec.rate : "Min-Min" //
    var specRaterOpMinMin = functions.createCustomVariable(undefined, "specRaterOpMinMin", specRaterOpMin, "Min", "SU3111_ZeExtruder.Parameter", "udtEmExtruderDriveCtrl", "rSpecThroughputMin", "Min", undefined, undefined, undefined);
    //***********************************************************************************************************/
    //Extruder ==> Expert Settings ==> Parameter==>Extruder==> Spec.rate : "Max-Set" //
    var specRaterOpMax = functions.createCustomVariable(undefined, "specRaterOpMax", udtEmExtruderDriveCtrl_Parameter, "rSpecThroughputMax", "SU3111_ZeExtruder.Parameter", "udtEmExtruderDriveCtrl", "rSpecThroughMax", undefined, undefined, undefined, undefined);
    //Extruder ==> Expert Settings ==> Parameter==>Extruder==> Spec.rate : "Max-Set" //
    var specRaterOpMaxSet = functions.createCustomVariable(undefined, "specRaterOpMaxSet", specRaterOpMax, "Set", "SU3111_ZeExtruder.Parameter", "udtEmExtruderDriveCtrl", "rSpecThroughputMax", "Set", undefined, undefined, undefined);
    //Extruder ==> Expert Settings ==> Parameter==>Extruder==> Spec.rate : "Max-Max" //
    var specRaterOpMaxMax = functions.createCustomVariable(undefined, "specRaterOpMaxMax", specRaterOpMax, "Max", "SU3111_ZeExtruder.Parameter", "udtEmExtruderDriveCtrl", "rSpecThroughputMax", "Max", undefined, undefined, undefined);
    //Extruder ==> Expert Settings ==> Parameter==>Extruder==> Spec.rate : "Max-Min" //
    var specRaterOpMaxMin = functions.createCustomVariable(undefined, "specRaterOpMaxMin", specRaterOpMax, "Min", "SU3111_ZeExtruder.Parameter", "udtEmExtruderDriveCtrl", "rSpecThroughputMax", "Min", undefined, undefined, undefined);
    //***********************************************************************************************************/
    //Extruder ==> Expert Settings ==> Parameter==>Extruder==> Spec.rate : "Push.Button" //
    var specPushButton = functions.createCustomVariable(undefined, "specPushButton", udtEmExtruderDriveCtrl_Parameter, "rSpecThroughputPushButton", "SU3111_ZeExtruder.Parameter", "udtEmExtruderDriveCtrl", "rSpecThroughputPushButton", undefined, undefined, undefined, undefined);
    //Extruder ==> Expert Settings ==> Parameter==>Extruder==> Spec.rate : "Push.Button-Set" //
    var specPushButtonSet = functions.createCustomVariable(undefined, "specPushButtonSet", specPushButton, "Set", "SU3111_ZeExtruder.Parameter", "udtEmExtruderDriveCtrl", "rSpecThroughputPushButton", "Set", undefined, undefined, undefined);
    //Extruder ==> Expert Settings ==> Parameter==>Extruder==> Spec.rate : "Push.Button-Max" //
    var specPushButtonMax = functions.createCustomVariable(undefined, "specPushButtonMax", specPushButton, "Max", "SU3111_ZeExtruder.Parameter", "udtEmExtruderDriveCtrl", "rSpecThroughputPushButton", "Max", undefined, undefined, undefined);
    //Extruder ==> Expert Settings ==> Parameter==>Extruder==> Spec.rate : "Push.Button-Min" //
    var specPushButtonMin = functions.createCustomVariable(undefined, "specPushButtonMin", specPushButton, "Min", "SU3111_ZeExtruder.Parameter", "udtEmExtruderDriveCtrl", "rSpecThroughputPushButton", "Min", undefined, undefined, undefined);
    //***********************************************************************************************************/
    //Extruder ==> Expert Settings ==> Parameter==>Extruder==> Screw Torque : "Nominal Torque" //
    var rScrewTorqueNom = functions.createCustomVariable(undefined, "rScrewTorqueNom", udtEmExtruderDriveCtrl_Config, "rScrewTorqueNom", "SU3111_ZeExtruder.Config", "udtEmExtruderDriveCtrl", "rScrewTorqueNom", undefined, undefined, undefined, undefined);
    //Extruder ==> Expert Settings ==> Parameter==>Extruder==> Screw Torque  : "Nominal Torque-Set" //
    var rScrewTorqueNomSet = functions.createCustomVariable(undefined, "rScrewTorqueNomSet", rScrewTorqueNom, "Set", "SU3111_ZeExtruder.Config", "udtEmExtruderDriveCtrl", "rScrewTorqueNom", "Set", undefined, undefined, undefined);
    //Extruder ==> Expert Settings ==> Parameter==>Extruder==> Screw Torque  : "Nominal Torquen-Max" //
    var rScrewTorqueNomMax = functions.createCustomVariable(undefined, "rScrewTorqueNomMax", rScrewTorqueNom, "Max", "SU3111_ZeExtruder.Config", "udtEmExtruderDriveCtrl", "rScrewTorqueNom", "Max", undefined, undefined, undefined);
    //Extruder ==> Expert Settings ==> Parameter==>Extruder==> Screw Torque  : "Nominal Torque-Min" //
    var rScrewTorqueNomMin = functions.createCustomVariable(undefined, "rScrewTorqueNomMin", rScrewTorqueNom, "Min", "SU3111_ZeExtruder.Config", "udtEmExtruderDriveCtrl", "rScrewTorqueNom", "Min", undefined, undefined, undefined);
    //***********************************************************************************************************/
    //Extruder ==> Expert Settings ==> Parameter==>Extruder==> Screw Torque : "Min Shutdown" //
    var rSrewTorqueL = functions.createCustomVariable(undefined, "rSrewTorqueL", udtEmExtruderDriveCtrl_Parameter, " rSrewTorqueL (Min Shutdown)", "SU3111_ZeExtruder.Parameter", "udtEmExtruderDriveCtrl", "rScrewTorqueL", undefined, undefined, undefined, undefined);
    //Extruder ==> Expert Settings ==> Parameter==>Extruder==> Screw Torque : "Min Shutdown-Set" //
    var rSrewTorqueLSet = functions.createCustomVariable(undefined, "rSrewTorqueLMax", rSrewTorqueL, "Set", "SU3111_ZeExtruder.Parameter", "udtEmExtruderDriveCtrl", "rScrewTorqueL", "Set", undefined, undefined, undefined);
    //Extruder ==> Expert Settings ==> Parameter==>Extruder==> Screw Torque : "Min Shutdown-Max" //
    var rSrewTorqueLMax = functions.createCustomVariable(undefined, "rSrewTorqueLMax", rSrewTorqueL, "Max", "SU3111_ZeExtruder.Parameter", "udtEmExtruderDriveCtrl", "rScrewTorqueL", "Max", undefined, undefined, undefined);
    //Extruder ==> Expert Settings ==> Parameter==>Extruder==> Screw Torque : "Min Shutdown-Min" //
    var rSrewTorqueLMin = functions.createCustomVariable(undefined, "rSrewTorqueLMin", rSrewTorqueL, "Max", "SU3111_ZeExtruder.Parameter", "udtEmExtruderDriveCtrl", "rScrewTorqueL", "Min", undefined, undefined, undefined);
    //***********************************************************************************************************/
    //Extruder ==> Expert Settings ==> Parameter==>Extruder==> Screw Torque : "Min Shutdown Time" //
    var udScrewTorqueLTime = functions.createCustomVariable(undefined, "udScrewTorqueLTime", udtEmExtruderDriveCtrl_Parameter, "udScrewTorqueLTime (Min Shutdown Time)", "SU3111_ZeExtruder.Parameter", "udtEmExtruderDriveCtrl", "udScrewTorqueLTime", undefined, undefined, undefined, undefined);
    //Extruder ==> Expert Settings ==> Parameter==>Extruder==> Screw Torque : "Min Shutdown Time-Set" //
    var udScrewTorqueLTimeSet = functions.createCustomVariable(undefined, "udScrewTorqueLTimeSet", udScrewTorqueLTime, " Set", "SU3111_ZeExtruder.Parameter", "udtEmExtruderDriveCtrl", "udScrewTorqueLTime", "Set", undefined, undefined, undefined);
    //Extruder ==> Expert Settings ==> Parameter==>Extruder==> Screw Torque : "Min Shutdown Time-Max" //
    var udScrewTorqueLTimeMax = functions.createCustomVariable(undefined, "udScrewTorqueLTimeMax", udScrewTorqueLTime, " Max", "SU3111_ZeExtruder.Parameter", "udtEmExtruderDriveCtrl", "udScrewTorqueLTime", "Max", undefined, undefined, undefined);
    //Extruder ==> Expert Settings ==> Parameter==>Extruder==> Screw Torque : "Min Shutdown Time-Min" //
    var udScrewTorqueLTimeMin = functions.createCustomVariable(undefined, "udScrewTorqueLTimeMin", udScrewTorqueLTime, " Min", "SU3111_ZeExtruder.Parameter", "udtEmExtruderDriveCtrl", "udScrewTorqueLTime", "Min", undefined, undefined, undefined);
    //***********************************************************************************************************/
    //Extruder ==> Expert Settings ==> Parameter==>Extruder==> Screw Torque : "Limit H" //
    var rSrewTorqueH = functions.createCustomVariable(undefined, "rSrewTorqueH", udtEmExtruderDriveCtrl_Parameter, " rSrewTorqueH (Limit H)", "SU3111_ZeExtruder.Parameter", "udtEmExtruderDriveCtrl", "rScrewTorqueH", undefined, undefined, undefined, undefined);
    //Extruder ==> Expert Settings ==> Parameter==>Extruder==> Screw Torque : "Limit H-Set" //
    var rSrewTorqueHSet = functions.createCustomVariable(undefined, "rSrewTorqueHSet", rScrewTorque, " Set", "SU3111_ZeExtruder.Parameter", "udtEmExtruderDriveCtrl", "rScrewTorqueH", "Set", undefined, undefined, undefined);
    //Extruder ==> Expert Settings ==> Parameter==>Extruder==> Screw Torque : "Limit H-Max" //
    var rSrewTorqueHMax = functions.createCustomVariable(undefined, "rSrewTorqueHMax", rScrewTorque, " Max", "SU3111_ZeExtruder.Parameter", "udtEmExtruderDriveCtrl", "rScrewTorqueH", "Max", undefined, undefined, undefined);
    //Extruder ==> Expert Settings ==> Parameter==>Extruder==> Screw Torque : "Limit H-Min" //
    var rSrewTorqueHMin = functions.createCustomVariable(undefined, "rSrewTorqueHMin", rScrewTorque, " Min", "SU3111_ZeExtruder.Parameter", "udtEmExtruderDriveCtrl", "rScrewTorqueH", "Min", undefined, undefined, undefined);
    //***********************************************************************************************************/
    //Extruder ==> Expert Settings ==> Parameter==>Extruder==> Screw Torque : "Limit HH" //
    var rSrewTorqueHH = functions.createCustomVariable(undefined, "rSrewTorqueHH", udtEmExtruderDriveCtrl_Parameter, "rSrewTorqueH (Limit HH)", "SU3111_ZeExtruder.Parameter", "udtEmExtruderDriveCtrl", "rScrewTorqueHH", undefined, undefined, undefined, undefined);
    //Extruder ==> Expert Settings ==> Parameter==>Extruder==> Screw Torque : "Limit HH-Set" //
    var rSrewTorqueHHSet = functions.createCustomVariable(undefined, "rSrewTorqueHHSet", rScrewTorque, " Set", "SU3111_ZeExtruder.Parameter", "udtEmExtruderDriveCtrl", "rScrewTorqueHH", "Set", undefined, undefined, undefined);
    //Extruder ==> Expert Settings ==> Parameter==>Extruder==> Screw Torque : "Limit HH-Max" //
    var rSrewTorqueHHMax = functions.createCustomVariable(undefined, "rSrewTorqueHHMax", rScrewTorque, " Max", "SU3111_ZeExtruder.Parameter", "udtEmExtruderDriveCtrl", "rScrewTorqueHH", "Max", undefined, undefined, undefined);
    //Extruder ==> Expert Settings ==> Parameter==>Extruder==> Screw Torque : "Limit HH-Min" //
    var rSrewTorqueHHMin = functions.createCustomVariable(undefined, "rSrewTorqueHHMin", rScrewTorque, " Min", "SU3111_ZeExtruder.Parameter", "udtEmExtruderDriveCtrl", "rScrewTorqueHH", "Min", undefined, undefined, undefined);
    //***********************************************************************************************************/
    //Extruder ==> Expert Settings ==> Parameter==>Extruder==> Screw Speed : "Gear Factor" //
    var rGearFactor = functions.createCustomVariable(undefined, "rGearFactor", udtEmExtruderDriveCtrl_Config, " rGearFactor", "SU3111_ZeExtruder.Config", "udtEmExtruderDriveCtrl", "rGearFactor", undefined, undefined, undefined, undefined);
    //Extruder ==> Expert Settings ==> Parameter==>Extruder==> Screw Speed : "Gear Factor-Set" //
    var rGearFactorSet = functions.createCustomVariable(undefined, "rGearFactorSet", rGearFactor, "Set", "SU3111_ZeExtruder.Config", "udtEmExtruderDriveCtrl", "rGearFactor", "Set", undefined, undefined, undefined);
    //Extruder ==> Expert Settings ==> Parameter==>Extruder==> Screw Speed : "Gear Factor-Max" //
    var rGearFactorMax = functions.createCustomVariable(undefined, "rGearFactorMax", rGearFactor, "Max", "SU3111_ZeExtruder.Config", "udtEmExtruderDriveCtrl", "rGearFactor", "Max", undefined, undefined, undefined);
    //Extruder ==> Expert Settings ==> Parameter==>Extruder==> Screw Speed : "Gear Factor-Set" //
    var rGearFactorMin = functions.createCustomVariable(undefined, "rGearFactorMin", rGearFactor, "Min", "SU3111_ZeExtruder.Config", "udtEmExtruderDriveCtrl", "rGearFactor", "Min", undefined, undefined, undefined);
    //***********************************************************************************************************/
    //Extruder ==> Expert Settings ==> Parameter==>Extruder==> Screw Speed : "Min" //
    var rScrewSpeedMin = functions.createCustomVariable(undefined, "rScrewSpeedMin", udtEmExtruderDriveCtrl_Config, "rScrewSpeedMin", "SU3111_ZeExtruder.Config", "udtEmExtruderDriveCtrl", "rScrewSpeedMin", undefined, undefined, undefined, undefined);
    //Extruder ==> Expert Settings ==> Parameter==>Extruder==> Screw Speed : "Min-Set" //
    var rScrewSpeedMinSet = functions.createCustomVariable(undefined, "rScrewSpeedMinSet", rScrewSpeedMin, "Set", "SU3111_ZeExtruder.Config", "udtEmExtruderDriveCtrl", "rScrewSpeedMin", "Set", undefined, undefined, undefined);
    //Extruder ==> Expert Settings ==> Parameter==>Extruder==> Screw Speed : "Min-Set" //
    var rScrewSpeedMinMax = functions.createCustomVariable(undefined, "rScrewSpeedMinMax", rScrewSpeedMin, "Max", "SU3111_ZeExtruder.Config", "udtEmExtruderDriveCtrl", "rScrewSpeedMin", "Max", undefined, undefined, undefined);
    //Extruder ==> Expert Settings ==> Parameter==> Screw Speed : "Min-Set" //
    var rScrewSpeedMinMin = functions.createCustomVariable(undefined, "rScrewSpeedMinMin", rScrewSpeedMin, "Min", "SU3111_ZeExtruder.Config", "udtEmExtruderDriveCtrl", "rScrewSpeedMin", "Min", undefined, undefined, undefined);
    //***********************************************************************************************************/
    //Extruder ==> Expert Settings ==> Parameter==>Extruder==> Screw Speed : "Max" //
    var rScrewSpeedMin = functions.createCustomVariable(undefined, "rScrewSpeedMax", udtEmExtruderDriveCtrl_Config, "rScrewSpeedMax", "SU3111_ZeExtruder.Config", "udtEmExtruderDriveCtrl", "rScrewSpeedMax", undefined, undefined, undefined, undefined);
    //Extruder ==> Expert Settings ==> Parameter==>Extruder==> Screw Speed : "Max-Set" //
    var rScrewSpeedMaxSet = functions.createCustomVariable(undefined, "rScrewSpeedMaxSet", rScrewSpeedMin, " Set", "SU3111_ZeExtruder.Config", "udtEmExtruderDriveCtrl", "rScrewSpeedMax", "Set", undefined, undefined, undefined);
    //Extruder ==> Expert Settings ==> Parameter==>Extruder==> Screw Speed : "Max-Set" //
    var rScrewSpeedMaxMax = functions.createCustomVariable(undefined, "rScrewSpeedMaxMax", rScrewSpeedMin, " Max", "SU3111_ZeExtruder.Config", "udtEmExtruderDriveCtrl", "rScrewSpeedMax", "Max", undefined, undefined, undefined);
    //Extruder ==> Expert Settings ==> Parameter==>Extruder==> Screw Speed : "v-Set" //
    var rScrewSpeedMaxMin = functions.createCustomVariable(undefined, "rScrewSpeedMaxMin", rScrewSpeedMin, " Min", "SU3111_ZeExtruder.Config", "udtEmExtruderDriveCtrl", "rScrewSpeedMax", "Min", undefined, undefined, undefined);
    //***********************************************************************************************************/
    //Extruder ==> Expert Settings ==> Parameter==>Extruder==> Screw Speed : "Limit H" //
    var rScrewSpeedTolH = functions.createCustomVariable(undefined, "rScrewSpeedTolH", udtEmExtruderDriveCtrl_Parameter, "rScrewSpeedTolH", "SU3111_ZeExtruder.Parameter", "udtEmExtruderDriveCtrl", "rScrewSpeedTolH", undefined, undefined, undefined, undefined);
    //Extruder ==> Expert Settings ==> Parameter==>Extruder==> Screw Speed : "Max-Set" //
    var rScrewSpeedTolHSet = functions.createCustomVariable(undefined, "rScrewSpeedTolHSet", rScrewSpeedTolH, "Set", "SU3111_ZeExtruder.Parameter", "udtEmExtruderDriveCtrl", "rScrewSpeedTolH", "Set", undefined, undefined, undefined);
    //Extruder ==> Expert Settings ==> Parameter==>Extruder==> Screw Speed : "Max-Set" //
    var rScrewSpeedTolHMax = functions.createCustomVariable(undefined, "rScrewSpeedTolHMax", rScrewSpeedTolH, "Max", "SU3111_ZeExtruder.Parameter", "udtEmExtruderDriveCtrl", "rScrewSpeedTolH", "Max", undefined, undefined, undefined);
    //Extruder ==> Expert Settings ==> Parameter==>Extruder==> Screw Speed : "v-Set" //
    var rScrewSpeedTolHMin = functions.createCustomVariable(undefined, "rScrewSpeedTolHMin", rScrewSpeedTolH, "Min", "SU3111_ZeExtruder.Parameter", "udtEmExtruderDriveCtrl", "rScrewSpeedTolH", "Min", undefined, undefined, undefined);
    //***********************************************************************************************************/
    //Extruder ==> Expert Settings ==> Parameter==>Extruder==> Screw Speed : "Limit HH" //
    var rScrewSpeedTolHH = functions.createCustomVariable(undefined, "rScrewSpeedTolHH", udtEmExtruderDriveCtrl_Parameter, "rScrewSpeedTolHH", "SU3111_ZeExtruder.Parameter", "udtEmExtruderDriveCtrl", "rScrewSpeedTolHH", undefined, undefined, undefined, undefined);
    //Extruder ==> Expert Settings ==> Parameter==>Extruder==> Screw Speed : "Max-Set" //
    var rScrewSpeedTolHHSet = functions.createCustomVariable(undefined, "rScrewSpeedTolHHSet", rScrewSpeedTolHH, "Set", "SU3111_ZeExtruder.Parameter", "udtEmExtruderDriveCtrl", "rScrewSpeedTolHH", "Set", undefined, undefined, undefined);
    //Extruder ==> Expert Settings ==> Parameter==>Extruder==> Screw Speed : "Max-Set" //
    var rScrewSpeedTolHHMax = functions.createCustomVariable(undefined, "rScrewSpeedTolHHMax", rScrewSpeedTolHH, "Max", "SU3111_ZeExtruder.Parameter", "udtEmExtruderDriveCtrl", "rScrewSpeedTolHH", "Max", undefined, undefined, undefined);
    //Extruder ==> Expert Settings ==> Parameter==>Extruder==> Screw Speed : "Max-Set" //
    var rScrewSpeedTolHHMin = functions.createCustomVariable(undefined, "rScrewSpeedTolHHMin", rScrewSpeedTolHH, "Min", "SU3111_ZeExtruder.Parameter", "udtEmExtruderDriveCtrl", "rScrewSpeedTolHH", "Min", undefined, undefined, undefined);
    //***********************************************************************************************************/
    //Extruder ==> Expert Settings ==> Parameter==>Extruder==> ganz unten bei Extruder : "Ramp Time" //
    var udScrewRampTime = functions.createCustomVariable(undefined, "udScrewRampTimeH", udtEmExtruderDriveCtrl_Parameter, " udScrewRampTime", "SU3111_ZeExtruder.Parameter", "udtEmExtruderDriveCtrl", "udScrewRampTime", undefined, undefined, undefined, undefined);
    //Extruder ==> Expert Settings ==> Parameter==>Extruder==> ganz unten bei Extruder : "Ramp Time-Set" //
    var udScrewRampTimeSet = functions.createCustomVariable(undefined, "udScrewRampTimeSet", udScrewRampTime, "Set", "SU3111_ZeExtruder.Parameter", "udtEmExtruderDriveCtrl", "udScrewRampTime", "Set", undefined, undefined, undefined);
    //Extruder ==> Expert Settings ==> Parameter==>Extruder==> ganz unten bei Extruder : "Ramp Time-Max" //
    var udScrewRampTimeMax = functions.createCustomVariable(undefined, "udScrewRampTimeMax", udScrewRampTime, "Max", "SU3111_ZeExtruder.Parameter", "udtEmExtruderDriveCtrl", "udScrewRampTime", "Max", undefined, undefined, undefined);
    //Extruder ==> Expert Settings ==> Parameter==>Extruder==> ganz unten bei Extruder : "Ramp Time-Min" //
    var udScrewRampTimeMin = functions.createCustomVariable(undefined, "udScrewRampTimeMin", udScrewRampTime, "Min", "SU3111_ZeExtruder.Parameter", "udtEmExtruderDriveCtrl", "udScrewRampTime", "Min", undefined, undefined, undefined);
    //***********************************************************************************************************/
    //Extruder ==> Expert Settings ==> Parameter==> ganz unten bei Extruder : "Ramp Time" //
    var udScrewRampRoundTime = functions.createCustomVariable(undefined, "udScrewRampRoundTimeH", udtEmExtruderDriveCtrl_Parameter, "udScrewRampRoundTime", "SU3111_ZeExtruder.Parameter", "udtEmExtruderDriveCtrl", "udScrewRampRoundTime", undefined, undefined, undefined, undefined);
    //Extruder ==> Expert Settings ==> Parameter==> ganz unten bei Extruder : "Ramp Time-Set" //
    var udScrewRampRoundTimeSet = functions.createCustomVariable(undefined, "udScrewRampRoundTimeSet", udScrewRampRoundTime, "Set", "SU3111_ZeExtruder.Parameter", "udtEmExtruderDriveCtrl", "udScrewRampRoundTime", "Set", undefined, undefined, undefined);
    //Extruder ==> Expert Settings ==> Parameter==> ganz unten bei Extruder : "Ramp Time-Max" //
    var udScrewRampRoundTimeMax = functions.createCustomVariable(undefined, "udScrewRampRoundTimeMax", udScrewRampRoundTime, "Max", "SU3111_ZeExtruder.Parameter", "udtEmExtruderDriveCtrl", "udScrewRampRoundTime", "Max", undefined, undefined, undefined);
    //Extruder ==> Expert Settings ==> Parameter==> ganz unten bei Extruder : "Ramp Time-Min" //
    var udScrewRampRoundTimeMin = functions.createCustomVariable(undefined, "udScrewRampRoundTimeMin", udScrewRampRoundTime, "Min", "SU3111_ZeExtruder.Parameter", "udtEmExtruderDriveCtrl", "udScrewRampRoundTime", "Min", undefined, undefined, undefined);
    //***********************************************************************************************************/
    //Extruder ==> Expert Settings ==> Parameter==>Extruder==> Motor Cooling==>Motor Cooling : "DelayAlarmFlow" //
    var udDelayAlarmFlow = functions.createCustomVariable(undefined, "udDelayAlarmFlow", udtEmMotorCoolingExt_Config, "udDelayAlarmFlow", "SU3111_ZeExtruder.Config", "udtEmMotorCoolingExt", "udDelayAlarmFlow", undefined, undefined, undefined, undefined);
    //Extruder ==> Expert Settings ==> Parameter==>Extruder==> Motor Cooling==>Motor Cooling : "DelayAlarmFlow-Set" //
    var udDelayAlarmFlowSet = functions.createCustomVariable(undefined, "udDelayAlarmFlowSet", udDelayAlarmFlow, "Set", "SU3111_ZeExtruder.Config", "udtEmMotorCoolingExt", "udDelayAlarmFlow", "Set", undefined, undefined, undefined);
    //Extruder ==> Expert Settings ==> Parameter==>Extruder==> Motor Cooling==>Motor Cooling : "DelayAlarmFlow-Max" //
    var udDelayAlarmFlowMax = functions.createCustomVariable(undefined, "udDelayAlarmFlowMax", udDelayAlarmFlow, "Max", "SU3111_ZeExtruder.Config", "udtEmMotorCoolingExt", "udDelayAlarmFlow", "Max", undefined, undefined, undefined);
    //Extruder ==> Expert Settings ==> Parameter==>Extruder==> Motor Cooling==>Motor Cooling : "DelayAlarmFlow-Set" //
    var udDelayAlarmFlowMin = functions.createCustomVariable(undefined, "udDelayAlarmFlowMin", udDelayAlarmFlow, "Min", "SU3111_ZeExtruder.Config", "udtEmMotorCoolingExt", "udDelayAlarmFlow", "Min", undefined, undefined, undefined);
    //***********************************************************************************************************/
    //Extruder ==> Expert Settings ==> Parameter==>Extruder==> Motor Cooling==>Motor Cooling : "Valve / Blower" //
    var udType = functions.createCustomVariable(undefined, "udType", udtEmMotorCoolingExt_Config, "udType", "SU3111_ZeExtruder.Config", "udtEmMotorCoolingExt", "udType", "Set", undefined, undefined, undefined);
    //Extruder ==> Expert Settings ==> Parameter==>Extruder==> Motor Cooling==>Motor Cooling : "Valve / Blower" //



    //Extruder ==> Expert Settings ==> Parameter==>Extruder==> Motor Cooling==>Motor Cooling : "Valve / Blower" //

    //Extruder ==> Expert Settings ==> Parameter==>Extruder==> Motor Cooling==>Motor Cooling : "DelayAlarmTemp" //
    var udDelayAlarmTemp = functions.createCustomVariable(undefined, "udDelayAlarmTemp", udtEmExtruderDriveCtrl_Config, "udDelayAlarmTemp", "SU3111_ZeExtruder.Config", "udtEmMotorCoolingExt", "udDelayAlarmTemp", undefined, undefined, undefined, undefined);
    //Extruder ==> Expert Settings ==> Parameter==>Extruder==> Motor Cooling==>Motor Cooling : "DelayAlarmTemp-Set" //
    var udDelayAlarmTempSet = functions.createCustomVariable(undefined, "udDelayAlarmTempSet", udDelayAlarmTemp, "Set", "SU3111_ZeExtruder.Config", "udtEmMotorCoolingExt", "udDelayAlarmTemp", "Set", undefined, undefined, undefined);
    //Extruder ==> Expert Settings ==> Parameter==>Extruder==> Motor Cooling==>Motor Cooling : "DelayAlarmTemp-Max" //
    var udDelayAlarmTempMax = functions.createCustomVariable(undefined, "udDelayAlarmTempMax", udDelayAlarmTemp, "Max", "SU3111_ZeExtruder.Config", "udtEmMotorCoolingExt", "udDelayAlarmTemp", "Max", undefined, undefined, undefined);
    //Extruder ==> Expert Settings ==> Parameter==>Extruder==> Motor Cooling==>Motor Cooling : "DelayAlarmTemp-Set" //
    var udDelayAlarmTempMin = functions.createCustomVariable(undefined, "udDelayAlarmTempMin", udDelayAlarmTemp, "Min", "SU3111_ZeExtruder.Config", "udtEmMotorCoolingExt", "udDelayAlarmTemp", "Min", undefined, undefined, undefined);
    //***********************************************************************************************************/
    //Extruder ==> Expert Settings ==> Parameter==>Extruder==> Motor Cooling==>Motor Cooling : "udFollowUpTime" //
    var udFollowUpTime = functions.createCustomVariable(undefined, "udFollowUpTime", udtEmExtruderDriveCtrl_Config, "udFollowUpTime", "SU3111_ZeExtruder.Config", "udtEmMotorCoolingExt", "udFollowUpTime", undefined, undefined, undefined, undefined);
    //Extruder ==> Expert Settings ==> Parameter==>Extruder==> Motor Cooling==>Motor Cooling : "DelayAlarmTemp-Set" //
    var udFollowUpTime_MotorCoolingSet = functions.createCustomVariable(undefined, "udFollowUpTimeMotorCoolingSet", udFollowUpTime, "Set", "SU3111_ZeExtruder.Config", "udtEmMotorCoolingExt", "udFollowUpTime", "Set", undefined, undefined, undefined);
    //Extruder ==> Expert Settings ==> Parameter==>Extruder==> Motor Cooling==>Motor Cooling : "DelayAlarmTemp-Max" //
    var udFollowUpTimeMotorCoolingMax = functions.createCustomVariable(undefined, "udFollowUpTimeMotorCoolingMax", udFollowUpTime, "Max", "SU3111_ZeExtruder.Config", "udtEmMotorCoolingExt", "udFollowUpTime", "Max", undefined, undefined, undefined);
    //Extruder ==> Expert Settings ==> Parameter==>Extruder==> Motor Cooling==>Motor Cooling : "DelayAlarmTemp-Set" //
    var udFollowUpTimeMotorCoolingMin = functions.createCustomVariable(undefined, "udFollowUpTimeMotorCoolingMin", udFollowUpTime, "Min", "SU3111_ZeExtruder.Config", "udtEmMotorCoolingExt", "udFollowUpTime", "Min", undefined, undefined, undefined);
    //***********************************************************************************************************/
    //Extruder ==> Expert Settings ==> Parameter==>Extruder==> Gear Oil Lubrication==> Gear Oil Lubrication : "PreRun Time" //
    var udPreRunTime = functions.createCustomVariable(undefined, "udPreRunTime", udtEmGearOilLubExt_Config, "udPreRunTime", "SU3111_ZeExtruder.Config", "udtEmGearOilLubExt", "udPreRunTime", undefined, undefined, undefined, undefined);
    //Extruder ==> Expert Settings ==> Parameter==>Extruder==> Gear Oil Lubrication==> Gear Oil Lubrication : "PreRun Time-Set" //
    var udPreRunTimeSet = functions.createCustomVariable(undefined, "udPreRunTimeSet", udPreRunTime, "Set", "SU3111_ZeExtruder.Config", "udtEmGearOilLubExt", "udPreRunTime", "Set", undefined, undefined, undefined);
    //Extruder ==> Expert Settings ==> Parameter==>Extruder==> Gear Oil Lubrication==> Gear Oil Lubrication : "PreRun Time-Max" //
    var udPreRunTimeMax = functions.createCustomVariable(undefined, "udPreRunTimeMax", udPreRunTime, "uMax", "SU3111_ZeExtruder.Config", "udtEmGearOilLubExt", "udPreRunTime", "Max", undefined, undefined, undefined);
    //Extruder ==> Expert Settings ==> Parameter==>Extruder==> Gear Oil Lubrication==> Gear Oil Lubrication : "PreRun Time-Max" //
    var udPreRunTimeMin = functions.createCustomVariable(undefined, "udPreRunTimeMin", udPreRunTime, "Min", "SU3111_ZeExtruder.Config", "udtEmGearOilLubExt", "udPreRunTime", "Min", undefined, undefined, undefined);
    //***********************************************************************************************************/
    //Extruder ==> Expert Settings ==> Parameter==>Extruder==> Gear Oil Lubrication==> Gear Oil Lubrication : "FollowUpTime" //
    var udFollowUpTime_GeatOil = functions.createCustomVariable(undefined, "udFollowUpTime", udtEmGearOilLubExt_Config, "udFollowUpTime", "SU3111_ZeExtruder.Config", "udtEmGearOilLubExt", "udFollowUpTime", undefined, undefined, undefined, undefined);
    //Extruder ==> Expert Settings ==> Parameter==>Extruder==> Gear Oil Lubrication==> Gear Oil Lubrication : "FollowUpTime-Set" //
    var udFollowUpTime_GearOilSet = functions.createCustomVariable(undefined, "udFollowUpTimeGearOilSet", udFollowUpTime_GeatOil, "Set", "SU3111_ZeExtruder.Config", "udtEmGearOilLubExt", "udFollowUpTime", "Set", undefined, undefined, undefined);
    //Extruder ==> Expert Settings ==> Parameter==>Extruder==> Gear Oil Lubrication==> Gear Oil Lubrication : "FollowUpTime-Max" //
    var udFollowUpTimeGearOilMax = functions.createCustomVariable(undefined, "udFollowUpTimeGearOilMax", udFollowUpTime_GeatOil, "Max", "SU3111_ZeExtruder.Config", "udtEmGearOilLubExt", "udFollowUpTime", "Max", undefined, undefined, undefined);
    //Extruder ==> Expert Settings ==> Parameter==>Extruder==> Gear Oil Lubrication==> Gear Oil Lubrication : "FollowUpTime-Min" //
    var udFollowUpTimeGearOilMin = functions.createCustomVariable(undefined, "udFollowUpTimeGearOilMin", udFollowUpTime_GeatOil, "Min", "SU3111_ZeExtruder.Config", "udtEmGearOilLubExt", "udFollowUpTime", "Min", undefined, undefined, undefined);
    //***********************************************************************************************************/
    //Extruder ==> Expert Settings ==> Parameter==>Extruder==> Gear Oil Lubrication==> Oil temperature Type ==> Analog Inputs: "OilTempHH"
    var OilTempHH = functions.createCustomVariable(undefined, "OilTempHH", udtEmGearOilLubExt_Config, "OilTempHH", "SU3111_ZeExtruder.Config", "udtEmGearOilLubExt", "rOilTempHH", undefined, undefined, undefined, undefined);
    //Extruder ==> Expert Settings ==> Parameter==>Extruder==> Gear Oil Lubrication==> Oil temperature Type ==> Analog Inputs: "OilTempHH-Set"
    var OilTempHHSet = functions.createCustomVariable(undefined, "OilTempHHSet", OilTempHH, "Set", "SU3111_ZeExtruder.Config", "udtEmGearOilLubExt", "rOilTempHH", "Set", undefined, SetGetLogic.OilTempHHSetGet, undefined);
    //Extruder ==> Expert Settings ==> Parameter==>Extruder==> Gear Oil Lubrication==> Oil temperature Type ==> Analog Inputs: "OilTempHH-Max"
    var OilTempHHMax = functions.createCustomVariable(undefined, "OilTempHHMax", OilTempHH, "Max", "SU3111_ZeExtruder.Config", "udtEmGearOilLubExt", "rOilTempHH", "Max", undefined, SetGetLogic.OilTempHHMaxGet, undefined);
    //Extruder ==> Expert Settings ==> Parameter==>Extruder==> Gear Oil Lubrication==> Oil temperature Type ==> Analog Inputs: "OilTempHH-Set"
    var OilTempHHMin = functions.createCustomVariable(undefined, "OilTempHHMin", OilTempHH, "Min", "SU3111_ZeExtruder.Config", "udtEmGearOilLubExt", "rOilTempHH", "Min", undefined, SetGetLogic.OilTempHHMinGet, undefined);
    //***********************************************************************************************************/
    //Extruder ==> Expert Settings ==> Parameter==>Extruder==> Gear Oil Lubrication==> Oil temperature Type ==> Analog Inputs: "OilTempH"
    var OilTempH = functions.createCustomVariable(undefined, "OilTempH", udtEmGearOilLubExt_Config, "OilTempH", "SU3111_ZeExtruder.Config", "udtEmGearOilLubExt", "rOilTempH", undefined, undefined, undefined, undefined);
    //Extruder ==> Expert Settings ==> Parameter==>Extruder==> Gear Oil Lubrication==> Oil temperature Type ==> Analog Inputs: "OilTempH-Set"
    var OilTempHSet = functions.createCustomVariable(undefined, "OilTempHSet", OilTempH, "Set", "SU3111_ZeExtruder.Config", "udtEmGearOilLubExt", "rOilTempH", "Set", undefined, undefined, undefined);
    //Extruder ==> Expert Settings ==> Parameter==>Extruder==> Gear Oil Lubrication==> Oil temperature Type ==> Analog Inputs: "OilTempH-Max"
    var OilTempHMax = functions.createCustomVariable(undefined, "OilTempHMax", OilTempH, "Max", "SU3111_ZeExtruder.Config", "udtEmGearOilLubExt", "rOilTempH", "Max", undefined, undefined, undefined);
    //Extruder ==> Expert Settings ==> Parameter==>Extruder==> Gear Oil Lubrication==> Oil temperature Type ==> Analog Inputs: "OilTempH-Set"
    var OilTempHMin = functions.createCustomVariable(undefined, "OilTempHMin", OilTempH, "Min", "SU3111_ZeExtruder.Config", "udtEmGearOilLubExt", "rOilTempH", "Min", undefined, undefined, undefined);
    //***********************************************************************************************************/
    //Extruder ==> Expert Settings ==> Parameter==>Extruder==> Gear Oil Lubrication==> Oil temperature Type ==> Analog Inputs: "OilTempLL"
    var OilTempLL = functions.createCustomVariable(undefined, "OilTempLL", udtEmGearOilLubExt_Config, "OilTempLL", "SU3111_ZeExtruder.Config", "udtEmGearOilLubExt", "rOilTempLL", undefined, undefined, undefined, undefined);
    //Extruder ==> Expert Settings ==> Parameter==>Extruder==> Gear Oil Lubrication==> Oil temperature Type ==> Analog Inputs: "OilTempLL-Set"
    var OilTempLLSet = functions.createCustomVariable(undefined, "OilTempLLSet", OilTempLL, "Set", "SU3111_ZeExtruder.Config", "udtEmGearOilLubExt", "rOilTempLL", "Set", undefined, undefined, undefined);
    //Extruder ==> Expert Settings ==> Parameter==>Extruder==> Gear Oil Lubrication==> Oil temperature Type ==> Analog Inputs: "OilTempLL-Max"
    var OilTempLLMax = functions.createCustomVariable(undefined, "OilTempLLMax", OilTempLL, "Max", "SU3111_ZeExtruder.Config", "udtEmGearOilLubExt", "rOilTempLL", "Max", undefined, undefined, undefined);
    //Extruder ==> Expert Settings ==> Parameter==>Extruder==> Gear Oil Lubrication==> Oil temperature Type ==> Analog Inputs: "OilTempLL-Set"
    var OilTempLLMin = functions.createCustomVariable(undefined, "OilTempLLMin", OilTempLL, "Min", "SU3111_ZeExtruder.Config", "udtEmGearOilLubExt", "rOilTempLL", "Min", undefined, undefined, undefined);
    //***********************************************************************************************************/
    //Extruder ==> Expert Settings ==> Parameter==>Extruder==> Gear Oil Lubrication==> Oil temperature Type ==> Analog Inputs: "OilTempCoolOn"
    var OilTempCoolOn = functions.createCustomVariable(undefined, "OilTempCoolOn", udtEmGearOilLubExt_Config, "OilTempCoolOn", "SU3111_ZeExtruder.Config", "udtEmGearOilLubExt", "OilTempCoolOn", undefined, undefined, undefined, undefined);
    //Extruder ==> Expert Settings ==> Parameter==>Extruder==> Gear Oil Lubrication==> Oil temperature Type ==> Analog Inputs: "OilTempCoolOnL-Set"
    var OilTempCoolOnSet = functions.createCustomVariable(undefined, "OilTempCoolOnSet", OilTempCoolOn, "Set", "SU3111_ZeExtruder.Config", "udtEmGearOilLubExt", "rOilTempCoolOn", "Set", undefined, undefined, undefined);
    //Extruder ==> Expert Settings ==> Parameter==>Extruder==> Gear Oil Lubrication==> Oil temperature Type ==> Analog Inputs: "OilTempCoolOn-Max"
    var OilTempCoolOnMax = functions.createCustomVariable(undefined, "OilTempCoolOnMax", OilTempCoolOn, "Max", "SU3111_ZeExtruder.Config", "udtEmGearOilLubExt", "rOilTempCoolOn", "Max", undefined, undefined, undefined);
    //Extruder ==> Expert Settings ==> Parameter==>Extruder==> Gear Oil Lubrication==> Oil temperature Type ==> Analog Inputs: "OilTempCoolOn-Set"
    var OilTempCoolOnMin = functions.createCustomVariable(undefined, "OilTempCoolOnMin", OilTempCoolOn, "Min", "SU3111_ZeExtruder.Config", "udtEmGearOilLubExt", "rOilTempCoolOn", "Min", undefined, undefined, undefined);
    //***********************************************************************************************************/
    //Extruder ==> Expert Settings ==> Parameter==>Extruder==> Gear Oil Lubrication==> Oil temperature Type ==> Analog Inputs: "OilTempLLShutdownTime"
    var udOilTempLLShutdownTime = functions.createCustomVariable(undefined, "udOilTempLLShutdownTime", udtEmGearOilLubExt_Config, "udOilTempLLShutdownTime", "SU3111_ZeExtruder.Config", "udtEmGearOilLubExt", "udOilTempLLShutdownTime", undefined, undefined, undefined, undefined);
    //Extruder ==> Expert Settings ==> Parameter==>Extruder==> Gear Oil Lubrication==> Oil temperature Type ==> Analog Inputs: "udOilTempLLShutdownTimeL-Set"
    var udOilTempLLShutdownTimeSet = functions.createCustomVariable(undefined, "udOilTempLLShutdownTimeSet", udOilTempLLShutdownTime, "Set", "SU3111_ZeExtruder.Config", "udtEmGearOilLubExt", "udOilTempLLShutdownTime", "Set", undefined, undefined, undefined);
    //Extruder ==> Expert Settings ==> Parameter==>Extruder==> Gear Oil Lubrication==> Oil temperature Type ==> Analog Inputs: "udOilTempLLShutdownTime-Max"
    var udOilTempLLShutdownTimenMax = functions.createCustomVariable(undefined, "udOilTempLLShutdownTimeMax", udOilTempLLShutdownTime, "Max", "SU3111_ZeExtruder.Config", "udtEmGearOilLubExt", "udOilTempLLShutdownTime", "Max", undefined, undefined, undefined);
    //Extruder ==> Expert Settings ==> Parameter==>Extruder==> Gear Oil Lubrication==> Oil temperature Type ==> Analog Inputs: "udOilTempLLShutdownTime-Set"
    var udOilTempLLShutdownTimeMin = functions.createCustomVariable(undefined, "udOilTempLLShutdownTimeMin", udOilTempLLShutdownTime, "Min", "SU3111_ZeExtruder.Config", "udtEmGearOilLubExt", "udOilTempLLShutdownTime", "Min", undefined, undefined, undefined);
    //***********************************************************************************************************/
    //Extruder ==> Expert Settings ==> Parameter==>Extruder==> Motor Clutch==> Clutch Type ==> Pressure Evalutation: "Act"
    var udtPressure_Hmi = functions.createCustomVariable(undefined, "udtPressure_Hmi", udtEmMotorClutchExt_Hmi, "udtPressure", "SU3111_ZeExtruder.Hmi", "udtEmMotorClutchExt", "udtPressure", undefined, undefined, undefined, undefined);
    var udtPressure_Config = functions.createCustomVariable(undefined, "udtPressure_Config", udtEmMotorClutchExt_Config, "udtPressure", "SU3111_ZeExtruder.Config", "udtEmMotorClutchExt", "udtPressure", undefined, undefined, undefined, undefined);
    var udtPressurerAct = functions.createCustomVariable(undefined, "udtPressurerAct", udtPressure_Hmi, "rAct", "SU3111_ZeExtruder.Hmi", "udtEmMotorClutchExt", "udtPressure", "rAct", undefined, undefined, undefined);
    //***********************************************************************************************************/
    //Extruder ==> Expert Settings ==> Parameter==>Extruder==> Motor Clutch==> Clutch Type ==> Pressure Evalutation: "Set"
    var rPress = functions.createCustomVariable(undefined, "rPress", udtPressure_Config, "rPress", "SU3111_ZeExtruder.Config", "udtEmMotorClutchExt", "rPressSet", undefined, undefined, undefined, undefined);
    //Extruder ==> Expert Settings ==> Parameter==>Extruder==> Motor Clutch==> Clutch Type ==> Pressure Evalutation: "Set-Set"
    var rPressSet = functions.createCustomVariable(undefined, "rPressSet", rPress, "Set", "SU3111_ZeExtruder.Config", "udtEmMotorClutchExt", "rPressSet", "Set", undefined, SetGetLogic.rPressSetGet, undefined);
    //Extruder ==> Expert Settings ==> Parameter==>Extruder==> Motor Clutch==> Clutch Type ==> Pressure Evalutation: "Set-Max"
    var rPressMax = functions.createCustomVariable(undefined, "rPressMax", rPress, "Max", "SU3111_ZeExtruder.Config", "udtEmMotorClutchExt", "rPressSet", "Max", undefined, undefined, undefined);
    //Extruder ==> Expert Settings ==> Parameter==>Extruder==> Motor Clutch==> Clutch Type ==> Pressure Evalutation: "Set-Min"
    var rPressMin = functions.createCustomVariable(undefined, "rPressMin", rPress, "Min", "SU3111_ZeExtruder.Config", "udtEmMotorClutchExt", "rPressSet", "Min", undefined, undefined, undefined);
    //***********************************************************************************************************/
    //Extruder ==> Expert Settings ==> Parameter==>Extruder==> Motor Clutch==> Clutch Type ==> Pressure Evalutation: "Alarm Tolerance"
    var rPressAlarmTol = functions.createCustomVariable(undefined, "rPressAlarmTol", udtEmMotorClutchExt_Config, " rPressAlarm", "SU3111_ZeExtruder.Config", "udtEmMotorClutchExt", "rPressAlarmTol", undefined, undefined, undefined, undefined);
    //Extruder ==> Expert Settings ==> Parameter==>Extruder==> Motor Clutch==> Clutch Type ==> Pressure Evalutation: "Alarm Tolerance-Set"
    var rPressAlarmTolSet = functions.createCustomVariable(undefined, "rPressAlarmTolSet", rPressAlarmTol, "Set", "SU3111_ZeExtruder.Config", "udtEmMotorClutchExt", "rPressAlarmTol", "Set", undefined, undefined, undefined);
    //Extruder ==> Expert Settings ==> Parameter==>Extruder==> Motor Clutch==> Clutch Type ==> Pressure Evalutation: "Alarm Tolerance-Max"
    var rPressAlarmTolMax = functions.createCustomVariable(undefined, "rPressAlarmTolMax", rPressAlarmTol, "Max", "SU3111_ZeExtruder.Config", "udtEmMotorClutchExt", "rPressAlarmTol", "Max", undefined, undefined, undefined);
    //Extruder ==> Expert Settings ==> Parameter==>Extruder==> Motor Clutch==> Clutch Type ==> Pressure Evalutation: "Alarm Tolerance-Min"
    var rPressAlarmTolMin = functions.createCustomVariable(undefined, "rPressAlarmTolMin", rPressAlarmTol, "Min", "SU3111_ZeExtruder.Config", "udtEmMotorClutchExt", "rPressAlarmTol", "Min", undefined, undefined, undefined);
    //***********************************************************************************************************/
    //Extruder ==> Expert Settings ==> Parameter==>Extruder==> Motor Clutch==> Clutch Type ==> Pressure Evalutation: "Warn Tolerance"
    var rPressWarnTol = functions.createCustomVariable(undefined, "rPressAlarmTol", udtEmMotorClutchExt_Config, " rPressAlarm", "SU3111_ZeExtruder.Config", "udtEmMotorClutchExt", "rPressWarnTol", undefined, undefined, undefined, undefined);
    //Extruder ==> Expert Settings ==> Parameter==>Extruder==> Motor Clutch==> Clutch Type ==> Pressure Evalutation: "Warn Tolerance-Set"
    var rPressWarnTolSet = functions.createCustomVariable(undefined, "rPressWarnTolSet", rPressWarnTol, "Set", "SU3111_ZeExtruder.Config", "udtEmMotorClutchExt", "rPressWarnTol", "Set", undefined, undefined, undefined);
    //Extruder ==> Expert Settings ==> Parameter==>Extruder==> Motor Clutch==> Clutch Type ==> Pressure Evalutation: "Warn Tolerance-Max"
    var rPressWarnTolMax = functions.createCustomVariable(undefined, "rPressWarnTolMax", rPressWarnTol, "Max", "SU3111_ZeExtruder.Config", "udtEmMotorClutchExt", "rPressWarnTol", "Max", undefined, undefined, undefined);
    //Extruder ==> Expert Settings ==> Parameter==>Extruder==> Motor Clutch==> Clutch Type ==> Pressure Evalutation: "Warn Tolerance-Min"
    var rPressWarnTolMin = functions.createCustomVariable(undefined, "rPressWarnTolMin", rPressWarnTol, "Min", "SU3111_ZeExtruder.Config", "udtEmMotorClutchExt", "rPressWarnTol", "Min", undefined, undefined, undefined);
    //***********************************************************************************************************/
    //Extruder ==> Expert Settings ==> Parameter==>Extruder==> Motor Clutch==> Clutch Type ==> Pressure Evalutation: "Nominal"
    var rPressNom = functions.createCustomVariable(undefined, "rPressAlarmTol", udtEmMotorClutchExt_Config, " rPressAlarm", "SU3111_ZeExtruder.Config", "udtEmMotorClutchExt", "rPressNom", undefined, undefined, undefined, undefined);
    //Extruder ==> Expert Settings ==> Parameter==>Extruder==> Motor Clutch==> Clutch Type ==> Pressure Evalutation: "Nominal-Set"
    var rPressNomlSet = functions.createCustomVariable(undefined, "rPressNomet", rPressNom, "Set", "SU3111_ZeExtruder.Config", "udtEmMotorClutchExt", "rPressNom", "Set", undefined, undefined, undefined);
    //Extruder ==> Expert Settings ==> Parameter==>Extruder==> Motor Clutch==> Clutch Type ==> Pressure Evalutation: "Nominal-Max"
    var rPressNomMax = functions.createCustomVariable(undefined, "rPressNomMax", rPressNom, "Max", "SU3111_ZeExtruder.Config", "udtEmMotorClutchExt", "rPressNom", "Max", undefined, undefined, undefined);
    //Extruder ==> Expert Settings ==> Parameter==>Extruder==> Motor Clutch==> Clutch Type ==> Pressure Evalutation: "Nominal-Min"
    var rPressNomMin = functions.createCustomVariable(undefined, "rPressNomMin", rPressNom, "Min", "SU3111_ZeExtruder.Config", "udtEmMotorClutchExt", "rPressNom", "Min", undefined, undefined, undefined);
    //***********************************************************************************************************/
    //Extruder ==> Expert Settings ==> Parameter==>Extruder==> Water Cooling==> Limits: "H" 
    var rTempHCool = functions.createCustomVariable(undefined, "rTempHCool", udtEmPzCool, "rTempH", "SU3111_ZeExtruder.Parameter", "udtEmPzCool", "rTempH", undefined, undefined, undefined, undefined);
    //Extruder ==> Expert Settings ==> Parameter==>Extruder==> Water Cooling==> Limits: "H-Set" 
    var rTempHCoolSet = functions.createCustomVariable(undefined, "rTempHCoolSet", udtEmPzCool, "Set", "SU3111_ZeExtruder.Parameter", "udtEmPzCool", "rTempH", "Set", undefined, undefined, undefined);
    //Extruder ==> Expert Settings ==> Parameter==>Extruder==> Water Cooling==> Limits: "H-Max"
    var rTempHCoolMax = functions.createCustomVariable(undefined, "rTempHCoolMax", udtEmPzCool, "Max", "SU3111_ZeExtruder.Parameter", "udtEmPzCool", "rTempH", "Max", undefined, undefined, undefined);
    //Extruder ==> Expert Settings ==> Parameter==>Extruder==> Water Cooling==> Limits: "H-Min"
    var rTempHCoolMin = functions.createCustomVariable(undefined, "rTempHCoolMin", udtEmPzCool, "Min", "SU3111_ZeExtruder.Parameter", "udtEmPzCool", "rTempH", "Min", undefined, undefined, undefined);
    //***********************************************************************************************************/
    //Extruder ==> Expert Settings ==> Parameter==>Extruder==> Water Cooling==> Limits: "HH" 
    var rTempHHCool = functions.createCustomVariable(undefined, "rTempHHCool", udtEmPzCool, "rTempHH", "SU3111_ZeExtruder.Parameter", "udtEmPzCool", "rTempHH", undefined, undefined, undefined, undefined);
    //Extruder ==> Expert Settings ==> Parameter==>Extruder==> Water Cooling==> Limits: "H-Set" 
    var rTempHHCoolSet = functions.createCustomVariable(undefined, "rTempHHCoolSet", udtEmPzCool, "Set", "SU3111_ZeExtruder.Parameter", "udtEmPzCool", "rTempHH", "Set", undefined, undefined, undefined);
    //Extruder ==> Expert Settings ==> Parameter==>Extruder==> Water Cooling==> Limits: "H-Max"
    var rTempHHCoolMax = functions.createCustomVariable(undefined, "rTempHHCoolMax", udtEmPzCool, "Max", "SU3111_ZeExtruder.Parameter", "udtEmPzCool", "rTempHH", "Max", undefined, undefined, undefined);
    //Extruder ==> Expert Settings ==> Parameter==>Extruder==> Water Cooling==> Limits: "H-Min"
    var rTempHHCoolMin = functions.createCustomVariable(undefined, "rTempHHCoolMin", udtEmPzCool, "Min", "SU3111_ZeExtruder.Parameter", "udtEmPzCool", "rTempHH", "Min", undefined, undefined, undefined);
    //***********************************************************************************************************/
    //Extruder ==> Expert Settings ==> Parameter==>Extruder==> Water Cooling==> Limits: "Tolerance H" 
    var rTempTolHCool = functions.createCustomVariable(undefined, "rTempTolHCool", udtEmPzCool, "rTempTolH", "SU3111_ZeExtruder.Parameter", "udtEmPzCool", "rTempTolH", undefined, undefined, undefined, undefined);
    //Extruder ==> Expert Settings ==> Parameter==>Extruder==> Water Cooling==> Limits: "H-Set" 
    var rTempTolHCoolSet = functions.createCustomVariable(undefined, "rTempTolHCoolSet", udtEmPzCool, "Set", "SU3111_ZeExtruder.Parameter", "udtEmPzCool", "rTempTolH", "Set", undefined, undefined, undefined);
    //Extruder ==> Expert Settings ==> Parameter==>Extruder==> Water Cooling==> Limits: "H-Max"
    var rTempTolHCoolMax = functions.createCustomVariable(undefined, "rTempTolHCoolMax", udtEmPzCool, "Max", "SU3111_ZeExtruder.Parameter", "udtEmPzCool", "rTempTolH", "Max", undefined, undefined, undefined);
    //Extruder ==> Expert Settings ==> Parameter==>Extruder==> Water Cooling==> Limits: "H-Min"
    var rTempTolHCoolMin = functions.createCustomVariable(undefined, "rTempTolHCoolMin", udtEmPzCool, "Min", "SU3111_ZeExtruder.Parameter", "udtEmPzCool", "rTempTolH", "Min", undefined, undefined, undefined);
    //***********************************************************************************************************/
    //Extruder ==> Expert Settings ==> Parameter==>Extruder==> Water Cooling==> Limits: "Tolerance HH" 
    var rTempTolHHCool = functions.createCustomVariable(undefined, "rTempTolHCool", udtEmPzCool, "rTempTolHH", "SU3111_ZeExtruder.Parameter", "udtEmPzCool", "rTempTolHH", undefined, undefined, undefined, undefined);
    //Extruder ==> Expert Settings ==> Parameter==>Extruder==> Water Cooling==> Limits: "H-Set" 
    var rTempTolHHCoolSet = functions.createCustomVariable(undefined, "rTempTolHHCoolSet", udtEmPzCool, "Set", "SU3111_ZeExtruder.Parameter", "udtEmPzCool", "rTempTolHH", "Set", undefined, undefined, undefined);
    //Extruder ==> Expert Settings ==> Parameter==>Extruder==> Water Cooling==> Limits: "H-Max"
    var rTempTolHHCoolMax = functions.createCustomVariable(undefined, "rTempTolHHCoolMax", udtEmPzCool, "Max", "SU3111_ZeExtruder.Parameter", "udtEmPzCool", "rTempTolHH", "Max", undefined, undefined, undefined);
    //Extruder ==> Expert Settings ==> Parameter==>Extruder==> Water Cooling==> Limits: "H-Min"
    var rTempTolHHCoolMin = functions.createCustomVariable(undefined, "rTempTolHHCoolMin", udtEmPzCool, "Min", "SU3111_ZeExtruder.Parameter", "udtEmPzCool", "rTempTolHH", "Min", undefined, undefined, undefined);
    //***********************************************************************************************************/
    //Extruder ==> Expert Settings ==> Parameter==>Extruder==> Water Cooling==> Parameter: "Temp.Cool Down"
    var rTempCooldownCool = functions.createCustomVariable(undefined, "rTempCooldownCool", udtEmPzCool, "rTempCooldown", "SU3111_ZeExtruder.Parameter", "udtEmPzCool", "rTempCooldown", undefined, undefined, undefined, undefined);
    //Extruder ==> Expert Settings ==> Parameter==>Extruder==> Water Cooling==> Parameter: "Temp.Cool Down-Set"
    var rTempCooldownCoolSet = functions.createCustomVariable(undefined, "rTempCooldownCoolSet", udtEmPzCool, "Set", "SU3111_ZeExtruder.Parameter", "udtEmPzCool", "rTempCooldown", "Set", undefined, undefined, undefined, undefined);
    //Extruder ==> Expert Settings ==> Parameter==>Extruder==> Water Cooling==> Parameter: "Temp.Cool Down-Max"
    var rTempCooldownCoolMax = functions.createCustomVariable(undefined, "rTempCooldownCoolMax", udtEmPzCool, "Max", "SU3111_ZeExtruder.Parameter", "udtEmPzCool", "rTempCooldown", "Max", undefined, undefined, undefined, undefined);
    //Extruder ==> Expert Settings ==> Parameter==>Extruder==> Water Cooling==> Parameter: "Temp.Cool Down-Min"
    var rTempCooldownCoolMin = functions.createCustomVariable(undefined, "rTempCooldownCoolMin", udtEmPzCool, "Min", "SU3111_ZeExtruder.Parameter", "udtEmPzCool", "rTempCooldown", "Min", undefined, undefined, undefined, undefined);
    //***********************************************************************************************************/
    //Extruder ==> Expert Settings ==> Parameter==> Water Cooling==> Parameter: "Temp. Ramp Factor"
    var rTempRampFactorCool = functions.createCustomVariable(undefined, "rTempRampFactorCool", udtEmPzCool, "rTempRampFactor", "SU3111_ZeExtruder.Parameter", "udtEmPzCool", "rTempRampFactor", undefined, undefined, undefined, undefined);
    //Extruder ==> Expert Settings ==> Parameter==> Water Cooling==> Parameter: "Temp. Ramp Factor-Set"
    var rTempRampFactorCoolSet = functions.createCustomVariable(undefined, "rTempRampFactorCoolSet", udtEmPzCool, "Set", "SU3111_ZeExtruder.Parameter", "udtEmPzCool", "rTempRampFactor", "Set", undefined, undefined, undefined);
    //Extruder ==> Expert Settings ==> Parameter==> Water Cooling==> Parameter: "Temp. Ramp Factor-Max"
    var rTempRampFactorCoolMax = functions.createCustomVariable(undefined, "rTempRampFactorCoolMax", udtEmPzCool, "Max", "SU3111_ZeExtruder.Parameter", "udtEmPzCool", "rTempRampFactor", "Max", undefined, undefined, undefined);
    //Extruder ==> Expert Settings ==> Parameter==> Water Cooling==> Parameter: "Temp. Ramp Factor-Min"
    var rTempRampFactorCoolMin = functions.createCustomVariable(undefined, "rTempRampFactorCoolMin", udtEmPzCool, "Min", "SU3111_ZeExtruder.Parameter", "udtEmPzCool", "rTempRampFactor", "Min", undefined, undefined, undefined);
    //***********************************************************************************************************/


    var data = {};
    for (var i = 0; i < 2; i++) {
        data[i] = {};
        data[i].udtCmMeltPress_Parameter_nr = functions.createCustomVariable(i, "udtCmMeltPress_Parameter_nr", udtCmMeltPress_Parameter, i.toString(), "SU3111_ZeExtruder.Parameter", "udtCmMeltPress", undefined, undefined, undefined, undefined, undefined);
        data[i].udtCmMeltPress_Hmi_nr = functions.createCustomVariable(i, "udtCmMeltPress_Parameter_nr", udtCmMeltPress_Hmi, i.toString(), "SU3111_ZeExtruder.Hmi", "udtCmMeltPress", undefined, undefined, undefined, undefined, undefined);

        //Extruder ==> Expert Settings ==> Parameter==> Pressure Monitoring ==> Limits p1: "Warning H"
        data[i].rPressWarnH = functions.createCustomVariable(i, "rPressWarnH", data[i].udtCmMeltPress_Parameter_nr, "rPressWarnH", "SU3111_ZeExtruder.Parameter", "udtCmMeltPress", "rPressWarnH", undefined, undefined, undefined);
        //Extruder ==> Expert Settings ==> Parameter==> Pressure Monitoring ==> Limits p1: "Warning H-Set"
        data[i].rPressWarnHSet = functions.createCustomVariable(i, "rPressWarnHSet", data[i].rPressWarnH, "Set", "SU3111_ZeExtruder.Parameter", "udtCmMeltPress", "rPressWarnH", "Set", undefined, undefined);
        //Extruder ==> Expert Settings ==> Parameter==> Pressure Monitoring ==> Limits p1: "Warning H-Set"
        data[i].rPressWarnHMax = functions.createCustomVariable(i, "rPressWarnHMax", data[i].rPressWarnH, "Max", "SU3111_ZeExtruder.Parameter", "udtCmMeltPress", "rPressWarnH", "Max", undefined, undefined);
        //Extruder ==> Expert Settings ==> Parameter==> Pressure Monitoring ==> Limits p1: "Warning H-Set"
        data[i].rPressWarnHMin = functions.createCustomVariable(i, "rPressWarnHMin", data[i].rPressWarnH, "Min", "SU3111_ZeExtruder.Parameter", "udtCmMeltPress", "rPressWarnH", "Min", undefined, undefined);
        //***********************************************************************************************************/
        //Extruder ==> Expert Settings ==> Parameter==> Pressure Monitoring ==> Limits p1: "ALARM HH"
        data[i].rPressAlarmHH = functions.createCustomVariable(i, "rPressAlarmHH", data[i].udtCmMeltPress_Parameter_nr, "rPressAlarmHH", "SU3111_ZeExtruder.Parameter", "udtCmMeltPress", "rPressAlarmHH", undefined, undefined, undefined);
        //Extruder ==> Expert Settings ==> Parameter==> Pressure Monitoring ==> Limits p1: "Warning H-Set"
        data[i].rPressAlarmHHSet = functions.createCustomVariable(i, "rPressAlarmHHSet", data[i].rPressAlarmHH, "Set", "SU3111_ZeExtruder.Parameter", "udtCmMeltPress", "rPressAlarmHH", "Set", undefined, undefined);
        //Extruder ==> Expert Settings ==> Parameter==> Pressure Monitoring ==> Limits p1: "Warning H-Set"
        data[i].rPressAlarmHHMax = functions.createCustomVariable(i, "rPressAlarmHHMax", data[i].rPressAlarmHH, "Max", "SU3111_ZeExtruder.Parameter", "udtCmMeltPress", "rPressAlarmHH", "Max", undefined, undefined);
        //Extruder ==> Expert Settings ==> Parameter==> Pressure Monitoring ==> Limits p1: "Warning H-Set"
        data[i].rPressAlarmHHMin = functions.createCustomVariable(i, "rPressAlarmHHHMin", data[i].rPressAlarmHH, "Min", "SU3111_ZeExtruder.Parameter", "udtCmMeltPress", "rPressAlarmHH", "Min", undefined, undefined);
        //***********************************************************************************************************/
        //Extruder ==> Expert Settings ==> Parameter==> Pressure Monitoring ==> Limits p1: "ALARM HH"
        data[i].rPressAlarmHHH = functions.createCustomVariable(i, "rPressAlarmHHH", data[i].udtCmMeltPress_Parameter_nr, "rPressAlarmHHH", "SU3111_ZeExtruder.Parameter", "udtCmMeltPress", "rPressAlarmHHH", undefined, undefined, undefined);
        //Extruder ==> Expert Settings ==> Parameter==> Pressure Monitoring ==> Limits p1: "Warning H-Set"
        data[i].rPressAlarmHHHSet = functions.createCustomVariable(i, "rPressAlarmHHHSet", data[i].rPressAlarmHHH, "Set", "SU3111_ZeExtruder.Parameter", "udtCmMeltPress", "rPressAlarmHHH", "Set", undefined, undefined);
        //Extruder ==> Expert Settings ==> Parameter==> Pressure Monitoring ==> Limits p1: "Warning H-Set"
        data[i].rPressAlarmHHHMax = functions.createCustomVariable(i, "rPressAlarmHHHMax", data[i].rPressAlarmHHH, "Max", "SU3111_ZeExtruder.Parameter", "udtCmMeltPress", "rPressAlarmHHH", "Max", undefined, undefined);
        //Extruder ==> Expert Settings ==> Parameter==> Pressure Monitoring ==> Limits p1: "Warning H-Set"
        data[i].rPressAlarmHHHMin = functions.createCustomVariable(i, "rPressAlarmHHHMin", data[i].rPressAlarmHHH, "Min", "SU3111_ZeExtruder.Parameter", "udtCmMeltPress", "rPressAlarmHHH", "Min", undefined, undefined);
        //***********************************************************************************************************/
        //Extruder ==> Expert Settings ==> Parameter==> Pressure Monitoring ==> Limits p1: "Press Dif."
        data[i].rPressDiffMax = functions.createCustomVariable(i, "rPressDiffMax", data[i].udtCmMeltPress_Parameter_nr, "rPressDiffMax", "SU3111_ZeExtruder.Parameter", "udtCmMeltPress", "rPressDiffMax", undefined, undefined, undefined);
        //Extruder ==> Expert Settings ==> Parameter==> Pressure Monitoring ==> Limits p1: "Warning H-Set"
        data[i].rPressDiffMaxSet = functions.createCustomVariable(i, "rPressDiffMaxSet", data[i].rPressDiffMaxSet, "Set", "SU3111_ZeExtruder.Parameter", "udtCmMeltPress", "rPressDiffMax", "Set", undefined, undefined);
        //Extruder ==> Expert Settings ==> Parameter==> Pressure Monitoring ==> Limits p1: "Warning H-Set"
        data[i].rPressDiffMaxMax = functions.createCustomVariable(i, "rPressDiffMaxMax", data[i].rPressDiffMaxMax, "Max", "SU3111_ZeExtruder.Parameter", "udtCmMeltPress", "rPressDiffMax", "Max", undefined, undefined);
        //Extruder ==> Expert Settings ==> Parameter==> Pressure Monitoring ==> Limits p1: "Warning H-Set"
        data[i].rPressDiffMaxMin = functions.createCustomVariable(i, "rPressDiffMaxMin", data[i].rPressDiffMaxMin, "Min", "SU3111_ZeExtruder.Parameter", "udtCmMeltPress", "rPressDiffMax", "Min", undefined, undefined);
        //***********************************************************************************************************/



    }

    // SU3111_ZeExtruder.Hmi.udtCmMeltPress[1].rPress.rAct










    var data = {};
    for (var i = 0; i < 14; i++) {
        data[i] = {};

        data[i].nr = functions.createCustomVariable(i, "nr", udtCmPzPid_Parameter, i.toString(), "SU3111_ZeExtruder.Parameter", "udtCmPzPid", undefined, undefined, undefined, undefined, undefined);
        data[i].nr2 = functions.createCustomVariable(i, "nr", udtCmPzPid_Config, i.toString(), "SU3111_ZeExtruder.Config", "udtCmPzPid", undefined, undefined, undefined, undefined, undefined);
        data[i].nr3 = functions.createCustomVariable(i, "nr", udtCmPzPid_Hmi, i.toString(), "ZSU3111_ZeExtruder.Hmi", "udtCmPzPid", undefined, undefined, undefined, undefined, undefined);
        data[i].nr4 = functions.createCustomVariable(i, "nr", udtEmPz, i.toString(), undefined, undefined, undefined, undefined, undefined, undefined, undefined);
        data[i].nr5 = functions.createCustomVariable(i, "nr", udtEmPz_Parameter, i.toString(), "SU3111_ZeExtruder.Parameter", "udtEmPz", undefined, undefined, undefined, undefined);

        data[i].udtCool = functions.createCustomVariable(i, "udtCool", data[i].nr, "udtCool", "SU3111_ZeExtruder.Parameter", "udtCmPzPid", "udtCool", undefined, undefined, undefined, undefined);
        data[i].udtHeat = functions.createCustomVariable(i, "udtHeat", data[i].nr, "udtHeat", "SU3111_ZeExtruder.Parameter", "udtCmPzPid", "udtHeat", undefined, undefined, undefined, undefined);
        data[i].udtCoolPid = functions.createCustomVariable(i, "udtCoolPid", data[i].udtCool, "udtPid", "SU3111_ZeExtruder.Config", "udtCool", "udtPid", undefined, undefined, undefined);
        data[i].udtHeatPid = functions.createCustomVariable(i, "udtHeatPid", data[i].udtHeat, "udtPid", "SU3111_ZeExtruder.Parameter", "udtCmPzPid", "udtHeat", "udtPid", undefined, undefined);

        data[i].rPzTemp = functions.createCustomVariable(i, "rPzTemp", data[i].nr4, "rPzTemp", "SU3111_ZeExtruder.Hmi", "udtEmPz", "rPzTemp", undefined, undefined, undefined);
        //***********************************************************************************************************/
        //***********************************************************************************************************/
        //***********************************************************************************************************/
        //***********************************************************************************************************/
        //PLASTIFICATION
        //***********************************************************************************************************/
        //***********************************************************************************************************/
        //***********************************************************************************************************/
        //***********************************************************************************************************/

        //PLASTIFICATION ==> Heatings Zones : "rAct" //
        data[i].rAct = functions.createCustomVariable(i, "rAct", data[i].rPzTemp, "rAct", "SU3111_ZeExtruder.Hmi", "udtEmPz", "rPzTemp", "rAct", undefined, SetGetLogic.rActGet, undefined);
        //PLASTIFICATION ==> Heatings Zones : "rSet" //
        data[i].rSet = functions.createCustomVariable(i, "rSet", data[i].rPzTemp, "rSet", "SU3111_ZeExtruder.Hmi", "udtEmPz", "rPzTemp", "rSet", undefined, SetGetLogic.rSetGet, SetGetLogic.rSetSet);
        //PLASTIFICATION ==> Heatings Zones : "rSet-Minimum" //
        data[i].rOpMin = functions.createCustomVariable(i, "rOpMin", data[i].rPzTemp, "rOpMin", "SU3111_ZeExtruder.Hmi", "udtEmPz", "rPzTemp", "rOpMin", undefined, SetGetLogic.rOpMinGet, undefined);
        //PLASTIFICATION ==> Heatings Zones : "rSet-Maximum  //
        data[i].rOpMax = functions.createCustomVariable(i, "rOpMax", data[i].rPzTemp, "rOpMax", "SU3111_ZeExtruder.Hmi", "udtEmPz", "rPzTemp", "rOpMax", undefined, SetGetLogic.rOpMaxGet, undefined);



        //console.log("serverValues[rAct.nodeId] = " + rAct.nodeId);
        //console.log("Value of rOpMax in serverValues: " + serverValues[rOpMax.nodeId.value]);
        //console.log(serverValues)
        //console.log(rOpMaxObj[i])


        //EXTRUDER EXPERT SETTINGS  Parameters//
        //***********************************************************************************************************/
        //***********************************************************************************************************/
        //***********************************************************************************************************/
        //***********************************************************************************************************/



        //***********************************************************************************************************/
        //***********************************************************************************************************/
        //***********************************************************************************************************/
        //***********************************************************************************************************/
        //EXTRUDER EXPERT SETTINGS PID Parameters//
        //***********************************************************************************************************/
        //***********************************************************************************************************/
        //***********************************************************************************************************/
        //***********************************************************************************************************/
        //Extruder ==> Expert Settings ==> PID Parameters : "Lenght" //
        data[i].rInjPulseTime = functions.createCustomVariable(i, "rInjPulseTime ", data[i].udtCool, "rInjPulseTime ", "SU3111_ZeExtruder.Parameter", "udtCmPzPid", "udtCool", "rInjPulseTime", undefined, undefined, undefined);
        //Extruder ==> Expert Settings ==> PID Parameters : "Lenght-Set" //
        data[i].rInjPulseTimeSet = functions.createCustomVariable(i, "rInjPulseTimeSet", data[i].rInjPulseTime, "Set", "SU3111_ZeExtruder.Parameter", "udtCmPzPid", "udtCool", "rInjPulseTime", "Set", undefined, undefined, undefined);
        //Extruder ==> Expert Settings ==> PID Parameters : "Lenght-Max" //
        data[i].rInjPulseTimeMax = functions.createCustomVariable(i, "rInjPulseTimeMax", data[i].rInjPulseTime, "Max", "SU3111_ZeExtruder.Parameter", "udtCmPzPid", "udtCool", "rInjPulseTime", "Max", undefined, undefined, undefined);
        //Extruder ==> Expert Settings ==> PID Parameters : "Lenght-Min" //
        data[i].rInjPulseTimeMin = functions.createCustomVariable(i, "rInjPulseTimeMin", data[i].rInjPulseTime, "Min", "SU3111_ZeExtruder.Parameter", "udtCmPzPid", "udtCool", "rInjPulseTime", "Min", undefined, undefined, undefined);
        //***********************************************************************************************************/
        //Extruder ==> Expert Settings ==> PID Parameters ==> Cooling Control : "Pause" //
        data[i].rInjMinPauseTime = functions.createCustomVariable(i, "rInjMinPauseTime", data[i].udtCool, "rInjMinPauseTime", "SU3111_ZeExtruder.Parameter", "udtCmPzPid", "udtCool", "rInjMinPauseTime", undefined, undefined, undefined);
        //Extruder ==> Expert Settings ==> PID Parameters ==> Cooling Control : "Pause-Set" //
        data[i].rInjMinPauseTimeSet = functions.createCustomVariable(i, "rInjMinPauseTimeSet", data[i].rInjMinPauseTime, "Set", "SU3111_ZeExtruder.Parameter", "udtCmPzPid", "udtCool", "rInjMinPauseTime", "Set", undefined, undefined, undefined, undefined);
        //Extruder ==> Expert Settings ==> PID Parameters ==> Cooling Control : "Pause-Max" //
        data[i].rInjMinPauseTimeMax = functions.createCustomVariable(i, "rInjMinPauseTimeMax", data[i].rInjMinPauseTime, "Max", "SU3111_ZeExtruder.Parameter", "udtCmPzPid", "udtCool", "rInjMinPauseTime", "Max", undefined, undefined, undefined);
        //***********************************************************************************************************/
        //Extruder ==> Expert Settings ==> PID Parameters ==> Cooling Control : "Pause-Min" //
        data[i].rInjMinPauseTimeMin = functions.createCustomVariable(i, "rInjMinPauseTimeMin", data[i].rInjMinPauseTime, "Min", "SU3111_ZeExtruder.Parameter", "udtCmPzPid", "rInjMinPauseTime", "Min", undefined, undefined, undefined);
        //***********************************************************************************************************/
        //Extruder ==> Expert Settings ==> PID Parameters ==> Cooling Control : "Min OnTime //
        data[i].rPwmMinOnTimeCool = functions.createCustomVariable(i, "rPwmMinOnTimeCool", data[i].udtCool, "rPwmMinOnTime", "SU3111_ZeExtruder.Parameter", "udtCmPzPid", "udtCool", "rPwmMinOnTime", undefined, undefined, undefined);
        //Extruder ==> Expert Settings ==> PID Parameters ==> Cooling Control : "Min OnTime-Set" //
        data[i].rPwmMinOnTimeCoolSet = functions.createCustomVariable(i, "rPwmMinOnTimeCoolSet", data[i].rPwmMinOnTimeCool, "Set", "SU3111_ZeExtruder.Parameter", "udtCmPzPid", "udtCool", "rPwmMinOnTime", "Set", undefined, undefined);
        //Extruder ==> Expert Settings ==> PID Parameters ==> Cooling Control : "Min OnTime-Max" //
        data[i].rPwmMinOnTimeCoolMax = functions.createCustomVariable(i, "rPwmMinOnTimeCoolMax", data[i].rPwmMinOnTimeCool, "Max", "SU3111_ZeExtruder.Parameter", "udtCmPzPid", "udtCool", "rPwmMinOnTime", "Max", undefined, undefined);
        //Extruder ==> Expert Settings ==> PID Parameters ==> Cooling Control : "Min OnTime-Min" //
        data[i].rPwmMinOnTimeCoolMin = functions.createCustomVariable(i, "rPwmMinOnTimeCoolMin", data[i].rPwmMinOnTimeCool, "Min", "SU3111_ZeExtruder.Parameter", "udtCmPzPid", "udtCool", "rPwmMinOnTime", "Min", undefined, undefined);
        //***********************************************************************************************************/
        //Extruder ==> Expert Settings ==> PID Parameters ==> Cooling Controll : "Min OffTime" //
        data[i].rPwmMinOffTimeCool = functions.createCustomVariable(i, "rPwmMinOffTime", data[i].udtCool, "rPwmMinOffTime", "SU3111_ZeExtruder.Parameter", "udtCmPzPid", "udtCool", "rPwmMinOffTime", undefined, undefined, undefined);
        //Extruder ==> Expert Settings ==> PID Parameters ==> Cooling Controll : "Min OffTime-Set" //
        data[i].rPwmMinOffTimeCoolSet = functions.createCustomVariable(i, "rPwmMinOffTimeSet", data[i].rPwmMinOffTimeCool, "Set", "SU3111_ZeExtruder.Parameter", "udtCmPzPid", "udtCool", "rPwmMinOffTime", "Set", undefined, undefined);
        //Extruder ==> Expert Settings ==> PID Parameters ==> Cooling Control : "Min OffTime-Max" //
        data[i].rPwmMinOffTimeCoolMax = functions.createCustomVariable(i, "rPwmMinOffTimeMax", data[i].rPwmMinOffTimeCool, "Max", "SU3111_ZeExtruder.Parameter", "udtCmPzPid", "udtCool", "rPwmMinOffTime", "Max", undefined, undefined);
        //Extruder ==> Expert Settings ==> PID Parameters ==> Cooling Control : "Min OffTime-Min" //
        data[i].rPwmMinOffTimeCoolMin = functions.createCustomVariable(i, "rPwmMinOffTimeMin", data[i].rPwmMinOffTimeCool, "Min", "SU3111_ZeExtruder.Parameter", "udtCmPzPid", "udtCool", "rPwmMinOffTime", "Min", undefined, undefined);
        //***********************************************************************************************************/
        //Extruder ==> Expert Settings ==> PID Parameters ==> Parameter Cool : "rGain-Set" //
        data[i].rGainCool = functions.createCustomVariable(i, "rGainCool", data[i].udtCoolPid, "rGain", "SU3111_ZeExtruder.Parameter", "udtCmPzPid", "udtCool", "udtPid", "rGain", undefined, undefined);
        //***********************************************************************************************************/
        //Extruder ==> Expert Settings ==> PID Parameters ==> Parameter Cool : "rTi-Set" //
        data[i].rTiCool = functions.createCustomVariable(i, "rTiCool", data[i].udtCoolPid, "rTi", "SU3111_ZeExtruder.Parameter", "udtCmPzPid", "udtCool", "udtPid", "rTi", undefined, undefined);
        //***********************************************************************************************************/
        //Extruder ==> Expert Settings ==> PID Parameters ==> Parameter Cool : "rTd-Set" //
        data[i].rTdCool = functions.createCustomVariable(i, "rTdCool", data[i].udtCoolPid, "rTd", "SU3111_ZeExtruder.Parameter", "udtCmPzPid", "udtCool", "udtPid", "rTd", undefined, undefined);
        //***********************************************************************************************************/
        //Extruder ==> Expert Settings ==> PID Parameters ==> Parameter Cool : "rTdFiltRatio-Set" //
        data[i].rTdFiltRatioCool = functions.createCustomVariable(i, "rTdFiltRatioCool", data[i].udtCoolPid, "rTdFiltRatio", "SU3111_ZeExtruder.Parameter", "udtCmPzPid", "udtCool", "udtPid", "rTdFiltRatio", undefined, undefined);
        //***********************************************************************************************************/
        //Extruder ==> Expert Settings ==> PID Parameters ==> Parameter Cool : "rPWeighting-Set" //
        data[i].rPWeightingCool = functions.createCustomVariable(i, "rPWeightingCool", data[i].udtCoolPid, "rPWeighting", "SU3111_ZeExtruder.Parameter", "udtCmPzPid", "udtCool", "udtPid", "rPWeighting", undefined, undefined);
        //***********************************************************************************************************/
        //Extruder ==> Expert Settings ==> PID Parameters ==> Parameter Cool : "rDWeighting-Set" //
        data[i].rDWeightingCool = functions.createCustomVariable(i, "rDWeightingCool", data[i].udtCoolPid, "rDWeighting", "SU3111_ZeExtruder.Parameter", "udtCmPzPid", "udtCool", "udtPid", "rDWeighting", undefined, undefined);
        //***********************************************************************************************************/
        //Extruder ==> Expert Settings ==> PID Parameters ==> Parameter Cool : "rCycle-Set" //
        data[i].rCycleCool = functions.createCustomVariable(i, "rCycleCool", data[i].udtCoolPid, "rCycle", "SU3111_ZeExtruder.Parameter", "udtCmPzPid", "udtCool", "udtPid", "rCycle", undefined, undefined);
        //***********************************************************************************************************/
        //Extruder ==> Expert Settings ==> PID Parameters ==> Parameter Cool : "rControllZone-Set" //
        data[i].rControlZone = functions.createCustomVariable(i, "rControlZone", data[i].udtCoolPid, "rControlZone", "SU3111_ZeExtruder.Parameter", "udtCmPzPid", "udtCool", "udtPid", "rControlZone", undefined, undefined);
        //***********************************************************************************************************/
        //Extruder ==> Expert Settings ==> PID Parameters ==> Parameter Cool : "rDeadZone-Set" //
        data[i].rDeadZone = functions.createCustomVariable(i, "rDeadZone", data[i].udtCoolPid, "rDeadZone", "SU3111_ZeExtruder.Parameter", "udtCmPzPid", "udtCool", "udtPid", "rDeadZone", undefined, undefined);
        //***********************************************************************************************************/
        //Extruder ==> Expert Settings ==> PID Parameters ==> Heating Control : "Min OnTime" //
        data[i].rPwmMinOnTimeHeat = functions.createCustomVariable(i, "rPwmMinOnTimeHeat", data[i].udtHeat, "rPwmMinOnTimeHeat", "SU3111_ZeExtruder.Parameter", "udtCmPzPid", "udtHeat", "rPwmMinOnTime", undefined, undefined);
        //Extruder ==> Expert Settings ==> PID Parameters ==> Heating Control : "Min OnTime-Set" //
        data[i].rPwmMinOnTimeHeatSet = functions.createCustomVariable(i, "rPwmMinOnTimeHeatSet", data[i].rPwmMinOnTimeHeat, "Set", "SU3111_ZeExtruder.Parameter", "udtCmPzPid", "udtHeat", "rPwmMinOnTime", "Set", undefined, undefined, undefined);
        //Extruder ==> Expert Settings ==> PID Parameters ==> Heating Control : "Min OnTime-Max" //
        data[i].rPwmMinOnTimeHeatMax = functions.createCustomVariable(i, "rPwmMinOnTimeHeatMax", data[i].rPwmMinOnTimeHeat, "Max", "SU3111_ZeExtruder.Parameter", "udtCmPzPid", "udtHeat", "rPwmMinOnTime", "Max", undefined, undefined, undefined);
        //Extruder ==> Expert Settings ==> PID Parameters ==> Heating Control : "Min OnTime-Min" //
        data[i].rPwmMinOnTimeHeatMin = functions.createCustomVariable(i, "rPwmMinOnTimeHeatMin", data[i].rPwmMinOnTimeHeat, "Max", "SU3111_ZeExtruder.Parameter", "udtCmPzPid", "udtHeat", "rPwmMinOnTime", "Min", undefined, undefined, undefined);
        //***********************************************************************************************************/
        //Extruder ==> Expert Settings ==> PID Parameters ==> Heating Control : "Min OffTime" //
        data[i].rPwmMinOffTimeHeat = functions.createCustomVariable(i, "rPwmMinOffTimeHeat", data[i].udtHeat, "rPwmMinOffTimeHeat", "SU3111_ZeExtruder.Parameter", "udtCmPzPid", "udtHeat", "rPwmMinOffTime", undefined, undefined, undefined)
        //Extruder ==> Expert Settings ==> PID Parameters ==> Heating Control : "Min OffTime-Set" //
        data[i].rPwmMinOffTimeHeatSet = functions.createCustomVariable(i, "rPwmMinOffTimeHeatSet", data[i].rPwmMinOffTimeHeat, "Set", "SU3111_ZeExtruder.Parameter", "udtCmPzPid", "udtHeat", "rPwmMinOffTime", "Set", undefined, undefined)
        //Extruder ==> Expert Settings ==> PID Parameters ==> Heating Control : "Min OffTime-Max" //
        data[i].rPwmMinOffTimeHeatMax = functions.createCustomVariable(i, "rPwmMinOffTimeHeatMax", data[i].rPwmMinOffTimeHeat, "Max", "SU3111_ZeExtruder.Parameter", "udtCmPzPid", "udtHeat", "rPwmMinOffTime", "Max", undefined, undefined)
        //Extruder ==> Expert Settings ==> PID Parameters ==> Heating Control : "Min OffTime-Min" //
        data[i].rPwmMinOffTimeHeatMin = functions.createCustomVariable(i, "rPwmMinOffTimeHeatMin", data[i].rPwmMinOffTimeHeat, "Min", "SU3111_ZeExtruder.Parameter", "udtCmPzPid", "udtHeat", "rPwmMinOffTime", "Min", undefined, undefined)
        //***********************************************************************************************************/
        //Extruder ==> Expert Settings ==> PID Parameters ==> Parameter Heat : "rGain-Set" //
        data[i].rGainHeatSet = functions.createCustomVariable(i, "rGainHeatSet", data[i].udtHeatPid, "rGain", "SU3111_ZeExtruder.Parameter", "udtCmPzPid", "udtHeat", "udtPid", "rGain", SetGetLogic.rGainHeatSetGet, undefined);
        //***********************************************************************************************************/
        //Extruder ==> Expert Settings ==> PID Parameters ==> Parameter Heat : "rTi-Set" //
        data[i].rTiHeatSet = functions.createCustomVariable(i, "rTiHeatSet", data[i].udtHeatPid, "rTi", "SU3111_ZeExtruder.Parameter", "udtCmPzPid", "udtHeat", "udtPid", "rTi", SetGetLogic.rTiHeatSetGet, undefined);
        //***********************************************************************************************************/
        //Extruder ==> Expert Settings ==> PID Parameters ==> Parameter Heat : "rTd-Set" //
        data[i].rTdHeatSet = functions.createCustomVariable(i, "rTdHeatSet", data[i].udtHeatPid, "rTd", "SU3111_ZeExtruder.Parameter", "udtCmPzPid", "udtHeat", "udtPid", "rTd", SetGetLogic.rTdHeatSetGet, undefined);
        //***********************************************************************************************************/
        //Extruder ==> Expert Settings ==> PID Parameters ==> Parameter Heat : "rTdFiltRatio-Set" //
        data[i].rTdFiltRatioHeatSet = functions.createCustomVariable(i, "rTdFiltRatioHeatSet", data[i].udtHeatPid, "rTdFiltRatio", "SU3111_ZeExtruder.Parameter", "udtCmPzPid", "udtHeat", "udtPid", "rTdFiltRatio", undefined, undefined);
        //***********************************************************************************************************/
        //Extruder ==> Expert Settings ==> PID Parameters ==> Parameter Heat : "rPWeighting-Set" //
        data[i].rPWeightingHeatSet = functions.createCustomVariable(i, "rPWeightingHeatSet", data[i].udtHeatPid, "rPWeighting", "SU3111_ZeExtruder.Parameter", "udtCmPzPid", "udtHeat", "udtPid", "rPWeighting", undefined, undefined);
        //***********************************************************************************************************/
        //Extruder ==> Expert Settings ==> PID Parameters ==> Parameter Heat : "rDWeighting-Set" //
        data[i].rDWeightingHeatSet = functions.createCustomVariable(i, "rDWeightingHeatSet", data[i].udtHeatPid, "rDWeighting", "SU3111_ZeExtruder.Parameter", "udtCmPzPid", "udtHeat", "udtPid", "rDWeighting", undefined, undefined);
        //***********************************************************************************************************/
        //Extruder ==> Expert Settings ==> PID Parameters ==> Parameter Heat : "rCycle-Set" //
        data[i].rCycleHeatSet = functions.createCustomVariable(i, "rCycleHeatSet", data[i].udtHeatPid, "rCycle", "SU3111_ZeExtruder.Parameter", "udtCmPzPid", "udtHeat", "udtPid", "rCycle", SetGetLogic.rCycleHeatSetGet, undefined);
        //***********************************************************************************************************/
        //Extruder ==> Expert Settings ==> PID Parameters ==> Parameter Heat : "rControlZone-Set" //
        data[i].rControlZoneHeatSet = functions.createCustomVariable(i, "rControlZoneHeatSet", data[i].udtHeatPid, "rControlZone", "SU3111_ZeExtruder.Parameter", "udtCmPzPid", "udtHeat", "udtPid", "rControlZone", undefined, undefined);
        //***********************************************************************************************************/
        //Extruder ==> Expert Settings ==> PID Parameters ==> Parameter Heat : "rDeadZone-Set" //
        data[i].rDeadZoneHeatSet = functions.createCustomVariable(i, "rDeadZoneHeatSet", data[i].udtHeatPid, "rDeadZone", "SU3111_ZeExtruder.Parameter", "udtCmPzPid", "udtHeat", "udtPid", "rDeadZone", undefined, undefined);
        //***********************************************************************************************************/
        //Extruder ==> Expert Settings ==> PID Parameters ==> Curent Heat : "Windings//
        data[i].udWindOfCoil = functions.createCustomVariable(i, "udWindOfCoil", data[i].nr2, "udWindOfCoil", "SU3111_ZeExtruder.Config", "udtCmPzPid", "udWindOfCoil", undefined, undefined, undefined, undefined);
        //Extruder ==> Expert Settings ==> PID Parameters ==> Curent Heat : "Windings-Set" //
        data[i].udWindOfCoilSet = functions.createCustomVariable(i, "udWindOfCoilSet", data[i].udWindOfCoil, "Set", "SU3111_ZeExtruder.Config", "udtCmPzPid", "udWindOfCoil", "Set", undefined, undefined, undefined);
        //Extruder ==> Expert Settings ==> PID Parameters ==> Curent Heat : "Windings-Max" //
        data[i].udWindOfCoilMax = functions.createCustomVariable(i, "udWindOfCoilMax", data[i].udWindOfCoil, "Max", "SU3111_ZeExtruder.Config", "udtCmPzPid", "udWindOfCoil", "Max", undefined, undefined, undefined);
        //Extruder ==> Expert Settings ==> PID Parameters ==> Curent Heat : "Windings-Min" //
        data[i].udWindOfCoilMin = functions.createCustomVariable(i, "udWindOfCoilMin", data[i].udWindOfCoil, "Min", "SU3111_ZeExtruder.Config", "udtCmPzPid", "udWindOfCoil", "Min", undefined, undefined, undefined);
        //***********************************************************************************************************/
        //Extruder ==> Expert Settings ==> PID Parameters ==> Current Heat: "Nominal" //
        data[i].rCurr = functions.createCustomVariable(i, "rCurrSet", data[i].udtHeat, "rCurrSet (Nominal)", "SU3111_ZeExtruder.Parameter", "udtCmPzPid", "udtHeat", "rCurrSet", undefined, undefined, undefined);
        //Extruder ==> Expert Settings ==> PID Parameters ==> Current Heat: "Nominal-Set" //
        data[i].rCurrSet = functions.createCustomVariable(i, "rCurrSet", data[i].rCurr, "Set", "SU3111_ZeExtruder.Parameter", "udtCmPzPid", "udtHeat", "rCurrSet", "Set", undefined);
        //Extruder ==> Expert Settings ==> PID Parameters ==> Current Heat: "Nominal-Max" //
        data[i].rCurrMax = functions.createCustomVariable(i, "rCurrMax", data[i].rCurr, "Max", "SU3111_ZeExtruder.Parameter", "udtCmPzPid", "udtHeat", "rCurrSet", "Max", undefined, undefined);
        //Extruder ==> Expert Settings ==> PID Parameters ==> Current Heat: "Nominal-Min" //
        data[i].rCurrMin = functions.createCustomVariable(i, "rCurrMin", data[i].rCurr, "Min", "SU3111_ZeExtruder.Parameter", "udtCmPzPid", "udtHeat", "rCurrSet", "Min", undefined, undefined);
        //***********************************************************************************************************/
        data[i].rCurrTol = functions.createCustomVariable(i, "rCurrSet", data[i].udtHeat, "rCurrTolSet (Tolerance)", "SU3111_ZeExtruder.Parameter", "udtCmPzPid", "udtHeat", "rCurrTol", undefined, undefined);
        //Extruder ==> Expert Settings ==> PID Parameters ==> Current Heat: "Tolerance-Set" //
        data[i].rCurrTolSet = functions.createCustomVariable(i, "rCurrSet", data[i].rCurrTol, "Set", "SU3111_ZeExtruder.Parameter", "udtCmPzPid", "udtHeat", "rCurrTol", "Set", undefined, undefined);
        //Extruder ==> Expert Settings ==> PID Parameters ==> Current Heat: "Tolerance-Max" //
        data[i].rCurrTolMax = functions.createCustomVariable(i, "rCurrSet", data[i].rCurrTol, "Max", "SU3111_ZeExtruder.Parameter", "udtCmPzPid", "udtHeat", "rCurrTol", "Max", undefined, undefined);
        //Extruder ==> Expert Settings ==> PID Parameters ==> Current Heat: "Tolerance-Min" //
        data[i].rCurrTolMin = functions.createCustomVariable(i, "rCurrSet", data[i].rCurrTol, "Min", "SU3111_ZeExtruder.Parameter", "udtCmPzPid", "udtHeat", "rCurrTol", "Min", undefined, undefined);
        //EXTRUDER EXPERT SETTING PID ProzessZonesParameters//
        //***********************************************************************************************************/
        //***********************************************************************************************************/
        //***********************************************************************************************************/
        //***********************************************************************************************************/
        //Extruder ==> Expert Settings ==> Prozess Zones/Parameter ==> Limits:"Warning H" //
        data[i].rTempH = functions.createCustomVariable(i, "rTempH", data[i].nr5, "rTempH (Warning H)", "SU3111_ZeExtruder.Parameter", "udtEmPz", "rTempH", undefined, undefined, undefined, undefined);
        //Extruder ==> Expert Settings ==> Prozess Zones/Parameter ==> Limits:"Warning H-Set" //
        data[i].rTempHSet = functions.createCustomVariable(i, "rTempHSet", data[i].rTempH, "Set", "SU3111_ZeExtruder.Parameter", "udtEmPz", "rTempH", "Set", undefined, SetGetLogic.rTempHSetGet, SetGetLogic.rTempHSetSet);
        //Extruder ==> Expert Settings ==> Prozess Zones/Parameter ==> Limits:"Warning H-Max" //
        data[i].rTempHMax = functions.createCustomVariable(i, "rTempHMax", data[i].rTempH, "Max", "SU3111_ZeExtruder.Parameter", "udtEmPz", "rTempH", "Max", undefined, SetGetLogic.rTempHMaxGet, undefined);
        //Extruder ==> Expert Settings ==> Prozess Zones/Parameter ==> Limits:"Warning H-Min" //
        data[i].rTempHMin = functions.createCustomVariable(i, "rTempHMin", data[i].rTempH, "Min", "SU3111_ZeExtruder.Parameter", "udtEmPz", "rTempH", "Min", undefined, SetGetLogic.rTempHMinGet, undefined);
        //***********************************************************************************************************/
        //Extruder ==> Expert Settings ==> Prozess Zones/Parameter ==> Limits:"Alarm HH" //
        data[i].rTempHH = functions.createCustomVariable(i, "rTempHH", data[i].nr5, "rTempHH (AlarmHH)", "SU3111_ZeExtruder.Parameter", "udtEmPz", "rTempHH", undefined, undefined, undefined, undefined);
        //Extruder ==> Expert Settings ==> Prozess Zones/Parameter ==> Limits:"Alarm HH-Set" //
        data[i].rTempHHSet = functions.createCustomVariable(i, "rTempHHSet", data[i].rTempHH, "Set", "SU3111_ZeExtruder.Parameter", "udtEmPz", "rTempHH", "Set", undefined, SetGetLogic.rTempHHSetGet, undefined);
        //Extruder ==> Expert Settings ==> Prozess Zones/Parameter ==> Limits:"Alarm HH-Max" //
        data[i].rTempHHMax = functions.createCustomVariable(i, "rTempHHMax", data[i].rTempHH, "Max", "SU3111_ZeExtruder.Parameter", "udtEmPz", "rTempHH", "Max", undefined, SetGetLogic.rTempHHMaxGet, undefined);
        //Extruder ==> Expert Settings ==> Prozess Zones/Parameter ==> Limits:"Alarm HH-Min" //
        data[i].rTempHHMin = functions.createCustomVariable(i, "rTempHHMin", data[i].rTempHH, "Min", "SU3111_ZeExtruder.Parameter", "udtEmPz", "rTempHH", "Min", undefined, SetGetLogic.rTempHHMinGet, undefined);
        //***********************************************************************************************************/
        //Extruder ==> Expert Settings ==> Prozess Zones/Parameter ==> Limits:"Tolerance H" //
        data[i].rSetTolH = functions.createCustomVariable(i, "rSetTolH", data[i].nr5, "rSetTolH (Tolerance H)", "SU3111_ZeExtruder.Parameter", "udtEmPz", "rTempTolH", undefined, undefined, undefined, undefined);
        //Extruder ==> Expert Settings ==> Prozess Zones/Parameter ==> Limits:"Tolerance H-Set" //
        data[i].rSetTolHSet = functions.createCustomVariable(i, "rSetTolHSet", data[i].rSetTolH, "Set", "SU3111_ZeExtruder.Parameter", "udtEmPz", "rTempTolH", "Set", undefined, SetGetLogic.rSetTolHSetGet, SetGetLogic.rSetTolHSetSet);
        //Extruder ==> Expert Settings ==> Prozess Zones/Parameter ==> Limits:"Tolerance H-Max" //
        data[i].rSetTolHMax = functions.createCustomVariable(i, "rSetTolHMax", data[i].rSetTolH, "Max", "SU3111_ZeExtruder.Parameter", "udtEmPz", "rTempTolH", "Max", undefined, SetGetLogic.rSetTolHMaxGet, undefined);
        //Extruder ==> Expert Settings ==> Prozess Zones/Parameter ==> Limits:"Tolerance H-Min" //
        data[i].rSetTolHMin = functions.createCustomVariable(i, "rSetTolHMin", data[i].rSetTolH, "Min", "SU3111_ZeExtruder.Parameter", "udtEmPz", "rTempTolH", "Min", undefined, SetGetLogic.rSetTolHMinGet, undefined);
        //***********************************************************************************************************/
        //Extruder ==> Expert Settings ==> Prozess Zones/Parameter ==> Limits:"Tolerance HH" //
        data[i].rSetTolHH = functions.createCustomVariable(i, "rSetTolHH", data[i].nr5, "rSetTolHH (Tolerance HH)", "SU3111_ZeExtruder.Parameter", "udtEmPz", "rTempTolHH", undefined, undefined, undefined, undefined);
        //Extruder ==> Expert Settings ==> Prozess Zones/Parameter ==> Limits:"Tolerance HH-Set" //
        data[i].rSetTolHHSet = functions.createCustomVariable(i, "rSetTolHHSet", data[i].rSetTolHH, "Set", "SU3111_ZeExtruder.Parameter", "udtEmPz", "rTempTolHH", "Set", undefined, SetGetLogic.rSetTolHHSetGet, undefined);
        //Extruder ==> Expert Settings ==> Prozess Zones/Parameter ==> Limits:"Tolerance HH-Max" //
        data[i].rSetTolHHMax = functions.createCustomVariable(i, "rSetTolHHMax", data[i].rSetTolHH, "Max", "SU3111_ZeExtruder.Parameter", "udtEmPz", "rTempTolHH", "Max", undefined, SetGetLogic.rSetTolHHMaxGet, undefined);
        //Extruder ==> Expert Settings ==> Prozess Zones/Parameter ==> Limits:"Tolerance HH-Min" //
        data[i].rSetTolHHMin = functions.createCustomVariable(i, "rSetTolHHMin", data[i].rSetTolHH, "Min", "SU3111_ZeExtruder.Parameter", "udtEmPz", "rTempTolHH", "Min", undefined, SetGetLogic.rSetTolHHMinGet, undefined);
        //***********************************************************************************************************/
        //Extruder ==> Expert Settings ==> Prozess Zones/Parameter ==> Parameter:"Temp. Cool Down" //
        data[i].rTempCooldown = functions.createCustomVariable(i, "rTempCooldown", data[i].nr5, "rTempCooldown", "SU3111_ZeExtruder.Parameter", "udtEmPz", "rTempCooldown", undefined, undefined, undefined, undefined);
        //Extruder ==> Expert Settings ==> Prozess Zones/Parameter ==> Parameter:"Temp. Cool Down-Set" //
        data[i].rTempCooldownSet = functions.createCustomVariable(i, "rTempCooldownSet", data[i].rTempCooldown, "Set", "SU3111_ZeExtruder.Parameter", "udtEmPz", "rTempCooldown", "Set", undefined, SetGetLogic.rTempCooldownSetGet, undefined);
        //Extruder ==> Expert Settings ==> Prozess Zones/Parameter ==> Parameter:"Temp. Cool Down-Max" //
        data[i].rTempCooldownMax = functions.createCustomVariable(i, "rTempCooldownMax", data[i].rTempCooldown, "Max", "SU3111_ZeExtruder.Parameter", "udtEmPz", "rTempCooldown", "Max", undefined, SetGetLogic.rTempCooldownMaxGet, undefined);
        //Extruder ==> Expert Settings ==> Prozess Zones/Parameter ==> Parameter:"Temp. Cool Down-Min" //
        data[i].rTempCooldowHMin = functions.createCustomVariable(i, "rTempCooldownMin", data[i].rTempCooldown, "Min", "SU3111_ZeExtruder.Parameter", "udtEmPz", "rTempCooldown", "Min", undefined, SetGetLogic.rTempCooldownMinGet, undefined);
        //***********************************************************************************************************/
        //Extruder ==> Expert Settings ==> Prozess Zones/Parameter ==> Parameter:"Temp. Ramp Factor" //
        data[i].rTempRampFactor = functions.createCustomVariable(i, "rTempRampFactor", data[i].nr5, "rTempRampFactor", "SU3111_ZeExtruder.Parameter", "udtEmPz", "rTempRampFactor", undefined, undefined, undefined, undefined);
        //Extruder ==> Expert Settings ==> Prozess Zones/Parameter ==> Parameter:"Temp. Ramp Factor-Set" //
        data[i].rTempRampFactorSet = functions.createCustomVariable(i, "rTempRampFactorSet", data[i].rTempRampFactor, "Set", "SU3111_ZeExtruder.Parameter", "udtEmPz", "rTempRampFactor", "Set", undefined, SetGetLogic.rTempRampFactorSetGet, undefined);
        //Extruder ==> Expert Settings ==> Prozess Zones/Parameter ==> Parameter:"Temp. Ramp Factor-Max" //
        data[i].rTempRampFactorMax = functions.createCustomVariable(i, "rTempRampFactorMax", data[i].rTempRampFactor, "Max", "SU3111_ZeExtruder.Parameter", "udtEmPz", "rTempRampFactor", "Max", undefined, SetGetLogic.rTempRampFactorMaxGet, undefined);
        //Extruder ==> Expert Settings ==> Prozess Zones/Parameter ==> Parameter:"Temp. Ramp Factor-Min" //
        data[i].rTempRampFactorMin = functions.createCustomVariable(i, "rTempRampFactorMin", data[i].rTempRampFactor, "Min", "SU3111_ZeExtruder.Parameter", "udtEmPz", "rTempRampFactor", "Min", undefined, SetGetLogic.rTempRampFactorMinGet, undefined);
        //******************************************************************************************* 
        //Extruder ==> Expert Settings ==> Prozess Zones/Parameter ==> Parameter:"Temp. Heatup" //
        data[i].rTempHeatup = functions.createCustomVariable(i, "rTempHeatup", data[i].nr5, "rTempHeatup", "SU3111_ZeExtruder.Parameter", "udtEmPz", "rTempHeatup", undefined, undefined, undefined, undefined);
        //Extruder ==> Expert Settings ==> Prozess Zones/Parameter ==> Parameter:"Temp. Heatup-Set" //
        data[i].rTempHeatupSet = functions.createCustomVariable(i, "rTempHeatupSet", data[i].rTempHeatup, "Set", "SU3111_ZeExtruder.Parameter", "udtEmPz", "rTempHeatup", "Set", undefined, SetGetLogic.rTempHeatupSetGet, undefined);
        //Extruder ==> Expert Settings ==> Prozess Zones/Parameter ==> Parameter:"Temp. Heatup-Max" //
        data[i].rTempHeatupMax = functions.createCustomVariable(i, "rTempHeatupMax", data[i].rTempHeatup, "Max", "SU3111_ZeExtruder.Parameter", "udtEmPz", "rTempHeatup", "Max", undefined, SetGetLogic.rTempHeatupMaxGet, undefined);
        //Extruder ==> Expert Settings ==> Prozess Zones/Parameter ==> Parameter:"Temp. Heatup-Min" //
        data[i].rTempHeatupMin = functions.createCustomVariable(i, "rTempHeatupMin", data[i].rTempHeatup, "Min", "SU3111_ZeExtruder.Parameter", "udtEmPz", "rTempHeatup", "Min", undefined, SetGetLogic.rTempHeatupMinGet, undefined);
        //*******************************************************************************************
        //Extruder ==> Expert Settings ==> Prozess Zones/Parameter ==> Parameter:"Temp.Release" //
        data[i].rTempRelease = functions.createCustomVariable(i, "rTempHeatup", data[i].nr5, "rTempRel", "SU3111_ZeExtruder.Parameter", "udtEmPz", "rTempRel", undefined, undefined, undefined);
        //Extruder ==> Expert Settings ==> Prozess Zones/Parameter ==> Parameter:"Temp.Release-Set" //
        data[i].rTempReleaseSet = functions.createCustomVariable(i, "rTempReleaseSet", data[i].rTempRelease, "Set", "SU3111_ZeExtruder.Parameter", "udtEmPz", "rTempRel", "Set", undefined, SetGetLogic.rTempReleaseSetGet, undefined);
        //Extruder ==> Expert Settings ==> Prozess Zones/Parameter ==> Parameter:"Temp.Release-Max" //
        data[i].rTempReleaseMax = functions.createCustomVariable(i, "rTempReleaseMax", data[i].rTempRelease, "Max", "SU3111_ZeExtruder.Parameter", "udtEmPz", "rTempRel", "Max", undefined, SetGetLogic.rTempReleaseMaxGet, undefined);
        //Extruder ==> Expert Settings ==> Prozess Zones/Parameter ==> Parameter:"Temp.Release-Min" //
        data[i].rTempReleaseMin = functions.createCustomVariable(i, "rTempReleaseMin", data[i].rTempRelease, "Min", "SU3111_ZeExtruder.Parameter", "udtEmPz", "rTempRel", "Min", undefined, SetGetLogic.rTempReleaseMinGet, undefined);
        //*******************************************************************************************
        //Extruder ==> Expert Settings ==> Prozess Zones/Parameter ==> Parameter:"Time.Release" /
        data[i].udTimeRel = functions.createCustomVariable(i, "rTempHeatup", data[i].nr5, "udTimeRel", "SU3111_ZeExtruder.Parameter", "udtEmPz", "udTimeRel", undefined, undefined, undefined, undefined);
        //Extruder ==> Expert Settings ==> Prozess Zones/Parameter ==> Parameter:"Time.Release-Set" //
        data[i].udTimeRelSet = functions.createCustomVariable(i, "udTimeRelSet", data[i].udTimeRel, "Set", "SU3111_ZeExtruder.Parameter", "udtEmPz", "udTimeRel", "Set", undefined, SetGetLogic.udTimeRelSetGet, undefined);
        //Extruder ==> Expert Settings ==> Prozess Zones/Parameter ==> Parameter:"Time.Release-Max" //
        data[i].udTimeRelMax = functions.createCustomVariable(i, "udTimeRelMax", data[i].udTimeRel, "Max", "SU3111_ZeExtruder.Parameter", "udtEmPz", "udTimeRel", "Max", undefined, SetGetLogic.udTimeRelMaxGet, undefined);
        //Extruder ==> Expert Settings ==> Prozess Zones/Parameter ==> Parameter:"Time.Release-Min" //
        data[i].udTimeRelMin = functions.createCustomVariable(i, "udTimeRelMin", data[i].udTimeRel, "Min", "SU3111_ZeExtruder.Parameter", "udtEmPz", "udTimeRel", "Min", undefined, SetGetLogic.udTimeRelMinGet, undefined);

    }


    module.exports = {
        data: data

    }




}



//console.log("kann ich auslesen hier aber punkt 222222" +rOpMaxObj)


module.exports = {
    run1: run1,


}