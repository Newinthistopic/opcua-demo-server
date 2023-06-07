
var { SetGetLogic } = require('./../../../Setter_Getter_Logiken')
const functions = require('./../../../funktionen');




function run1(addressSpace, device, opcua, verbose, serverValues,) {

    var namespace2 = addressSpace.getNamespace('http://mynamespace-2/UA/');
    var namespace3 = addressSpace.getNamespace('http://mynamespace-3/UA/');

    var PL_3100_Hmi = namespace3.addObject({
        organizedBy: device,
        browseName: "PL_3100_Hmi",
        nodeId: "s=PL_3100_HMI",
        
    })
   
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
   
    var udtPc_HMI = functions.createCustomVariable(undefined, "udtPc_HMI", PL_3100_Hmi, "udtPc", "PL_3100_Hmi", "udtPc", undefined, undefined, undefined, undefined, undefined);
    

    var udtCmPzPid_HMI = functions.createCustomVariable(undefined, "udtCmPzPid_HMI", ZEEX_3111_Hmi, "udtCmPzPid", "ZEEX_3111_Hmi", "udtCmPzPid", undefined, undefined, undefined, undefined, undefined);
    var udtCmPzPid_Parameter = functions.createCustomVariable(undefined, "udtCmPzPid_Parameter", ZEEX_3111_Parameter, "udtCmPzPid", "ZEEX_3111_Parameter", "udtCmPzPid", undefined, undefined, undefined, undefined, undefined);
    var udtCmPzPid_Config = functions.createCustomVariable(undefined, "udtCmPzPid_Config", ZEEX_3111_Config, "udtCmPzPid", "ZEEX_3111_Config", "udtCmPzPid", undefined, undefined, undefined, undefined, undefined);
    var udtEmPz = functions.createCustomVariable(undefined, "udtEmPz", ZEEX_3111_Hmi, "udtEmPz", "ZEEX_3111_Hmi", "udtEmPz", undefined, undefined, undefined, undefined, undefined);
    var udtEmPz_Parameter = functions.createCustomVariable(undefined, "udtEmPz_Parameter", ZEEX_3111_Parameter, "udtEmPz", "ZEEX_3111_Parameter", "udtEmPz", undefined, undefined, undefined, undefined, undefined);
    var udtEmExtruderDriveCtrl_Parameter = functions.createCustomVariable(undefined, "udtEmExtruderDriveCtrl_Parameter ", ZEEX_3111_Parameter, "udtEmExtruderDriveCtrl", "ZEEX_3111_Parameter", "udtEmExtruderDriveCtrl", undefined, undefined, undefined, undefined, undefined);
    var udtEmExtruderDriveCtrl_Config = functions.createCustomVariable(undefined, "udtEmExtruderDriveCtrl_Config ", ZEEX_3111_Config, "udtEmExtruderDriveCtrl", "ZEEX_3111_Config", "udtEmExtruderDriveCtrl", undefined, undefined, undefined, undefined, undefined);
    var rScrewTorque = functions.createCustomVariable(undefined, "rScrewTorque ", ZEEX_3111_Hmi, "rScrewTorque", "ZEEX_3111_Hmi", "udtEmExtruderDriveCtrl", "rSrewTorque", undefined, undefined, undefined, undefined);
    var udtEmGearOilLubExt_Config = functions.createCustomVariable(undefined, "udtEmGearOilLubExt_Config", ZEEX_3111_Config, "udtEmGearOilLubExt", "ZEEX_3111_Config", "udtEmMGearOilLubExt", undefined, undefined, undefined, undefined, undefined);
    var udtEmMotorCoolingExt_Config = functions.createCustomVariable(undefined, "udtEmMotorCoolingExt_Config", ZEEX_3111_Config, "udtEmMotorCoolingExt", "ZEEX_3111_Config", "udtEmMotorCoolingExt", undefined, undefined, undefined, undefined, undefined);
    var udtEmGearOilLubExt_Hmi = functions.createCustomVariable(undefined, "udtEmMGearOilLubExt_Hmi", ZEEX_3111_Hmi, "udtEmGearOilLubExt", "ZEEX_3111_Hmi", "udtEmGearOilLubExt", undefined, undefined, undefined, undefined, undefined);
    // var udtEmMGearOilLubExt_Config = functions.createCustomVariable(undefined, "udtEmMGearOilLubExt_Config",ZEEX_3111_Config,"udtEmMGearOilLubExt", "ZEEX_3111_Config", "udtEmMGearOilLubExt", undefined, undefined, undefined, undefined, undefined);
    var udtEmMotorClutchExt_Config = functions.createCustomVariable(undefined, "udtEmMotorClutchExt_Config", ZEEX_3111_Config, "udtEmMotorClutchExt", "ZEEX_3111_Config", "udtEmMotorClutchExt", undefined, undefined, undefined, undefined, undefined);
    //Extruder ==> Expert Settings ==> Parameter
    //***********************************************************************************************************/
    //***********************************************************************************************************/
    //***********************************************************************************************************/
    //***********************************************************************************************************/
    //BUTTONS// //BUTTONS// //BUTTONS// //BUTTONS//
    //Extruder ==> Expert Settings ==> Parameter


    //Extruder ==> Expert Settings ==> Parameter ==> Motor Cooling ==> MotorCooling: "Valve / Blower"



    //Extruder ==> Expert Settings ==> Parameter ==> Gear Oil Lubrication ==> Oil temprature type: "Analog Inputs / Digital Inputs"
    var udtOilTempType = functions.createCustomVariable(undefined, "udtOilTempType", udtEmGearOilLubExt_Config, "udtOilTempTyp", "ZEEX_3111_Config", "udtEmGearOilLubExt", "udtOilTempType", undefined, undefined, undefined, undefined);
    var udtOilTempTypeSet = functions.createCustomVariable(undefined, "udtOilTempTypeSet", udtOilTempType, "Set", "ZEEX_3111_Config", "udtEmGearOilLubExt", "udOilTempType", "Set", undefined, undefined, undefined);


    //Extruder ==> Expert Settings ==> Parameter ==> Motor Clutch ==> Clutch Tpe: "Pressure Evaluation / Digital Evaluation"
    var udClutchType = functions.createCustomVariable(undefined, "udClutchType", udtEmMotorClutchExt_Config, "udClutchType", "ZEEX_3111_Config", "udtEmMotorClutchExt", "udClutchType", undefined, undefined, undefined, undefined, undefined);
    var udClutchTypeSet = functions.createCustomVariable(undefined, "udClutchTypeSet", udClutchType, "Set", "ZEEX_3111_Config", "udtEmMotorClutchExt", "udClutchType", "Set", undefined, undefined, undefined);


    //Extruder ==> Expert Settings ==> Parameter ==> Pressure Monitoring ==> Parameter and values p1: "Calibration"




    //BUTTONS// //BUTTONS// //BUTTONS// //BUTTONS//
    //Extruder ==> Expert Settings ==> PID Parameter


    var udtPcdwCtrl = functions.createCustomVariable(undefined, "udtPcdwCtrl", udtPc_HMI, "dwCtrl", "PL_3100_Hmi", "udtPc", "dwCtrl", undefined, undefined, undefined, undefined);
    var udtModState_HMI = functions.createCustomVariable(undefined, "udtModState_HMI", udtPc_HMI, "udtModState", "PL_3100_Hmi", "udtPc", "udtModState", undefined, undefined, undefined, undefined);
    var udtModStatedwStatus = functions.createCustomVariable(undefined, "udtModStatedwStatus", udtModState_HMI, "dwStatus", "PL_3100_Hmi", "udtPc", "udtModState", "dwStatus", undefined, undefined, undefined);
    var udtModStatedwUnitNavigationStatus = functions.createCustomVariable(undefined, "udtModStatedwUnitNavigationStatus", udtModState_HMI, "dwUnitNavigationStatus", "PL_3100_Hmi", "udtPc", "udtModState", "dwUnitNavigationStatus", undefined, undefined, undefined);
    var udtModStateuiActOpMode= functions.createCustomVariable(undefined, "udtModStateuiActOpMode", udtModState_HMI, "uiActOpMode", "PL_3100_Hmi", "udtPc", "udtModState", "uiActOpMode", undefined, undefined, undefined);


    var data = {};
    for (var i = 0; i < 14; i++) {
        data[i] = {};

        //Extruder ==> Expert Settings ==> PID Parameter ==> Cooling Control ==> Cool Type: "Analogue / PWM Blower / Injection / PWm Valve  "
        data[i].udCoolType = functions.createCustomVariable(i, "udCoolType ", udtCmPzPid_Config, "udCoolType ", "ZEEX_3111_Config", "udtCmPzPid", "udCoolType", undefined, undefined, undefined, undefined);
        data[i].udCoolTypeSet = functions.createCustomVariable(i, "udCoolType", data[i].udCoolType, "udCoolType", "ZEEX_3111_Config", "udtCmPzPid", "udCoolType", "Set", undefined, undefined, undefined);

    }






        //Extruder ==> Expert Settings ==> Parameter==>Extruder==> Spec.rate : "Min-Set" //
        var specRaterOpMin = functions.createCustomVariable(undefined, "specRaterOpMinSet", udtEmExtruderDriveCtrl_Parameter, "rSpecThroughputMin", "ZEEX_3111_Parameter", "udtEmExtruderDriveCtrl", "rSpecThroughputMin", undefined, undefined, undefined, undefined);
        //Extruder ==> Expert Settings ==> Parameter==> Spec.rate : "Min-Set" //
        var specRaterOpMinSet = functions.createCustomVariable(undefined, "specRaterOpMinSet", specRaterOpMin, "Set", "ZEEX_3111_Parameter", "udtEmExtruderDriveCtrl", "rSpecThroughputMin", "Set", undefined, undefined, undefined);
        //Extruder ==> Expert Settings ==> Parameter==> Spec.rate : "Min-Max" //
        var specRaterOpMinMax = functions.createCustomVariable(undefined, "specRaterOpMinMax", specRaterOpMin, "Max", "ZEEX_3111_Parameter", "udtEmExtruderDriveCtrl", "rSpecThroughputMin", "Max", undefined, undefined, undefined);
        //Extruder ==> Expert Settings ==> Parameter==> Spec.rate : "Min-Min" //
        var specRaterOpMinMin = functions.createCustomVariable(undefined, "specRaterOpMinMin", specRaterOpMin, "Min", "ZEEX_3111_Parameter", "udtEmExtruderDriveCtrl", "rSpecThroughputMin", "Min", undefined, undefined, undefined);
        //***********************************************************************************************************/
        //Extruder ==> Expert Settings ==> Parameter==>Extruder==> Spec.rate : "Max-Set" //
        var specRaterOpMax = functions.createCustomVariable(undefined, "specRaterOpMaxSet", udtEmExtruderDriveCtrl_Parameter, "rSpecThroughputMax", "ZEEX_3111_Parameter", "udtEmExtruderDriveCtrl", "rSpecThroughMax", undefined, undefined, undefined, undefined);
        //Extruder ==> Expert Settings ==> Parameter==>Extruder==> Spec.rate : "Max-Set" //
        var specRaterOpMaxSet = functions.createCustomVariable(undefined, "specRaterOpMaxSet", specRaterOpMax, "Set", "ZEEX_3111_Parameter", "udtEmExtruderDriveCtrl", "rSpecThroughputMax", "Set", undefined, undefined, undefined);
        //Extruder ==> Expert Settings ==> Parameter==>Extruder==> Spec.rate : "Max-Max" //
        var specRaterOpMaxMax = functions.createCustomVariable(undefined, "specRaterOpMaxMax", specRaterOpMax, "Max", "ZEEX_3111_Parameter", "udtEmExtruderDriveCtrl", "rSpecThroughputMax", "Max", undefined, undefined, undefined);
        //Extruder ==> Expert Settings ==> Parameter==>Extruder==> Spec.rate : "Max-Min" //
        var specRaterOpMaxMin = functions.createCustomVariable(undefined, "specRaterOpMaxMin", specRaterOpMax, "Min", "ZEEX_3111_Parameter", "udtEmExtruderDriveCtrl", "rSpecThroughputMax", "Min", undefined, undefined, undefined);
        //***********************************************************************************************************/
        //Extruder ==> Expert Settings ==> Parameter==>Extruder==> Spec.rate : "Push.Button" //
        var specPushButton = functions.createCustomVariable(undefined, "specPushButton", udtEmExtruderDriveCtrl_Parameter, "rSpecThroughputPushButton", "ZEEX_3111_Parameter", "udtEmExtruderDriveCtrl", "rSpecThroughputPushButton", undefined, undefined, undefined, undefined);
        //Extruder ==> Expert Settings ==> Parameter==>Extruder==> Spec.rate : "Push.Button-Set" //
        var specPushButtonSet = functions.createCustomVariable(undefined, "specPushButtonSet", specPushButton, "Set", "ZEEX_3111_Parameter", "udtEmExtruderDriveCtrl", "rSpecThroughputPushButton", "Set", undefined, undefined, undefined);
        //Extruder ==> Expert Settings ==> Parameter==>Extruder==> Spec.rate : "Push.Button-Max" //
        var specPushButtonMax = functions.createCustomVariable(undefined, "specPushButtonMax", specPushButton, "Max", "ZEEX_3111_Parameter", "udtEmExtruderDriveCtrl", "rSpecThroughputPushButton", "Max", undefined, undefined, undefined);
        //Extruder ==> Expert Settings ==> Parameter==>Extruder==> Spec.rate : "Push.Button-Min" //
        var specPushButtonMin = functions.createCustomVariable(undefined, "specPushButtonMin", specPushButton, "Min", "ZEEX_3111_Parameter", "udtEmExtruderDriveCtrl", "rSpecThroughputPushButton", "Min", undefined, undefined, undefined);
        //***********************************************************************************************************/
        //Extruder ==> Expert Settings ==> Parameter==>Extruder==> Screw Torque : "Nominal Torque" //
        var rScrewTorqueNom = functions.createCustomVariable(undefined, "rScrewTorqueNom", udtEmExtruderDriveCtrl_Config, "rScrewTorqueNom", "ZEEX_3111_Config", "udtEmExtruderDriveCtrl", "rScrewTorqueNom", undefined, undefined, undefined, undefined);
        //Extruder ==> Expert Settings ==> Parameter==>Extruder==> Screw Torque  : "Nominal Torque-Set" //
        var rScrewTorqueNomSet = functions.createCustomVariable(undefined, "rScrewTorqueNomSet", rScrewTorqueNom, "Set", "ZEEX_3111_Config", "udtEmExtruderDriveCtrl", "rScrewTorqueNom", "Set", undefined, undefined, undefined);
        //Extruder ==> Expert Settings ==> Parameter==>Extruder==> Screw Torque  : "Nominal Torquen-Max" //
        var rScrewTorqueNomMax = functions.createCustomVariable(undefined, "rScrewTorqueNomMax", rScrewTorqueNom, "Max", "ZEEX_3111_Config", "udtEmExtruderDriveCtrl", "rScrewTorqueNom", "Max", undefined, undefined, undefined);
        //Extruder ==> Expert Settings ==> Parameter==>Extruder==> Screw Torque  : "Nominal Torque-Min" //
        var rScrewTorqueNomMin = functions.createCustomVariable(undefined, "rScrewTorqueNomMin", rScrewTorqueNom, "Min", "ZEEX_3111_Config", "udtEmExtruderDriveCtrl", "rScrewTorqueNom", "Min", undefined, undefined, undefined);
        //***********************************************************************************************************/
        //Extruder ==> Expert Settings ==> Parameter==>Extruder==> Screw Torque : "Min Shutdown" //
        var rSrewTorqueL = functions.createCustomVariable(undefined, "rSrewTorqueL", udtEmExtruderDriveCtrl_Parameter, " rSrewTorqueL (Min Shutdown)", "ZEEX_3111_Parameter", "udtEmExtruderDriveCtrl", "rScrewTorqueL", undefined, undefined, undefined, undefined);
        //Extruder ==> Expert Settings ==> Parameter==>Extruder==> Screw Torque : "Min Shutdown-Set" //
        var rSrewTorqueLSet = functions.createCustomVariable(undefined, "rSrewTorqueLMax", rSrewTorqueL, "rSrewTorqueLSet", "ZEEX_3111_Parameter", "udtEmExtruderDriveCtrl", "rScrewTorqueL", "Set", undefined, undefined, undefined);
        //Extruder ==> Expert Settings ==> Parameter==>Extruder==> Screw Torque : "Min Shutdown-Max" //
        var rSrewTorqueLMax = functions.createCustomVariable(undefined, "rSrewTorqueLMax", rSrewTorqueL, "rSrewTorqueLMax", "ZEEX_3111_Parameter", "udtEmExtruderDriveCtrl", "rScrewTorqueL", "Max", undefined, undefined, undefined);
        //Extruder ==> Expert Settings ==> Parameter==>Extruder==> Screw Torque : "Min Shutdown-Min" //
        var rSrewTorqueLMin = functions.createCustomVariable(undefined, "rSrewTorqueLMin", rSrewTorqueL, "rSrewTorqueLMax", "ZEEX_3111_Parameter", "udtEmExtruderDriveCtrl", "rScrewTorqueL", "Min", undefined, undefined, undefined);
        //***********************************************************************************************************/
        //Extruder ==> Expert Settings ==> Parameter==>Extruder==> Screw Torque : "Min Shutdown Time" //
        var udScrewTorqueLTime = functions.createCustomVariable(undefined, "udScrewTorqueLTime", udtEmExtruderDriveCtrl_Parameter, "udScrewTorqueLTime (Min Shutdown Time)", "ZEEX_3111_Parameter", "udtEmExtruderDriveCtrl", "udScrewTorqueLTime", undefined, undefined, undefined, undefined);
        //Extruder ==> Expert Settings ==> Parameter==>Extruder==> Screw Torque : "Min Shutdown Time-Set" //
        var udScrewTorqueLTimeSet = functions.createCustomVariable(undefined, "udScrewTorqueLTimeSet", udScrewTorqueLTime, " Set", "ZEEX_3111_Parameter", "udtEmExtruderDriveCtrl", "udScrewTorqueLTime", "Set", undefined, undefined, undefined);
        //Extruder ==> Expert Settings ==> Parameter==>Extruder==> Screw Torque : "Min Shutdown Time-Max" //
        var udScrewTorqueLTimeMax = functions.createCustomVariable(undefined, "udScrewTorqueLTimeMax", udScrewTorqueLTime, " Max", "ZEEX_3111_Parameter", "udtEmExtruderDriveCtrl", "udScrewTorqueLTime", "Max", undefined, undefined, undefined);
        //Extruder ==> Expert Settings ==> Parameter==>Extruder==> Screw Torque : "Min Shutdown Time-Min" //
        var udScrewTorqueLTimeMin = functions.createCustomVariable(undefined, "udScrewTorqueLTimeMin", udScrewTorqueLTime, " Min", "ZEEX_3111_Parameter", "udtEmExtruderDriveCtrl", "udScrewTorqueLTime", "Min", undefined, undefined, undefined);
        //***********************************************************************************************************/
        //Extruder ==> Expert Settings ==> Parameter==>Extruder==> Screw Torque : "Limit H" //
        var rSrewTorqueH = functions.createCustomVariable(undefined, "rSrewTorqueH", udtEmExtruderDriveCtrl_Parameter, " rSrewTorqueH (Limit H)", "ZEEX_3111_Parameter", "udtEmExtruderDriveCtrl", "rScrewTorqueH", undefined, undefined, undefined, undefined);
        //Extruder ==> Expert Settings ==> Parameter==>Extruder==> Screw Torque : "Limit H-Set" //
        var rSrewTorqueHSet = functions.createCustomVariable(undefined, "rSrewTorqueHSet", rScrewTorque, " Set", "ZEEX_3111_Parameter", "udtEmExtruderDriveCtrl", "rScrewTorqueH", "Set", undefined, undefined, undefined);
        //Extruder ==> Expert Settings ==> Parameter==>Extruder==> Screw Torque : "Limit H-Max" //
        var rSrewTorqueHMax = functions.createCustomVariable(undefined, "rSrewTorqueHMax", rScrewTorque, " Max", "ZEEX_3111_Parameter", "udtEmExtruderDriveCtrl", "rScrewTorqueH", "Max", undefined, undefined, undefined);
        //Extruder ==> Expert Settings ==> Parameter==>Extruder==> Screw Torque : "Limit H-Min" //
        var rSrewTorqueHMin = functions.createCustomVariable(undefined, "rSrewTorqueHMin", rScrewTorque, " Min", "ZEEX_3111_Parameter", "udtEmExtruderDriveCtrl", "rScrewTorqueH", "Min", undefined, undefined, undefined);
        //***********************************************************************************************************/
        //Extruder ==> Expert Settings ==> Parameter==>Extruder==> Screw Torque : "Limit HH" //
        var rSrewTorqueHH = functions.createCustomVariable(undefined, "rSrewTorqueHH", udtEmExtruderDriveCtrl_Parameter, "rSrewTorqueH (Limit HH)", "ZEEX_3111_Parameter", "udtEmExtruderDriveCtrl", "rScrewTorqueHH", undefined, undefined, undefined, undefined);
        //Extruder ==> Expert Settings ==> Parameter==>Extruder==> Screw Torque : "Limit HH-Set" //
        var rSrewTorqueHHSet = functions.createCustomVariable(undefined, "rSrewTorqueHHSet", rScrewTorque, " Set", "ZEEX_3111_Parameter", "udtEmExtruderDriveCtrl", "rScrewTorqueHH", "Set", undefined, undefined, undefined);
        //Extruder ==> Expert Settings ==> Parameter==>Extruder==> Screw Torque : "Limit HH-Max" //
        var rSrewTorqueHHMax = functions.createCustomVariable(undefined, "rSrewTorqueHHMax", rScrewTorque, " Max", "ZEEX_3111_Parameter", "udtEmExtruderDriveCtrl", "rScrewTorqueHH", "Max", undefined, undefined, undefined);
        //Extruder ==> Expert Settings ==> Parameter==>Extruder==> Screw Torque : "Limit HH-Min" //
        var rSrewTorqueHHMin = functions.createCustomVariable(undefined, "rSrewTorqueHHMin", rScrewTorque, " Min", "ZEEX_3111_Parameter", "udtEmExtruderDriveCtrl", "rScrewTorqueHH", "Min", undefined, undefined, undefined);
        //***********************************************************************************************************/
        //Extruder ==> Expert Settings ==> Parameter==>Extruder==> Screw Speed : "Gear Factor" //
        var rGearFactor = functions.createCustomVariable(undefined, "rGearFactor", udtEmExtruderDriveCtrl_Config, " rGearFactor", "ZEEX_3111_Config", "udtEmExtruderDriveCtrl", "rGearFactor", undefined, undefined, undefined, undefined);
        //Extruder ==> Expert Settings ==> Parameter==>Extruder==> Screw Speed : "Gear Factor-Set" //
        var rGearFactorSet = functions.createCustomVariable(undefined, "rGearFactorSet", rGearFactor, "Set", "ZEEX_3111_Config", "udtEmExtruderDriveCtrl", "rGearFactor", "Set", undefined, undefined, undefined);
        //Extruder ==> Expert Settings ==> Parameter==>Extruder==> Screw Speed : "Gear Factor-Max" //
        var rGearFactorMax = functions.createCustomVariable(undefined, "rGearFactorMax", rGearFactor, "Max", "ZEEX_3111_Config", "udtEmExtruderDriveCtrl", "rGearFactor", "Max", undefined, undefined, undefined);
        //Extruder ==> Expert Settings ==> Parameter==>Extruder==> Screw Speed : "Gear Factor-Set" //
        var rGearFactorMin = functions.createCustomVariable(undefined, "rGearFactorMin", rGearFactor, "Min", "ZEEX_3111_Config", "udtEmExtruderDriveCtrl", "rGearFactor", "Min", undefined, undefined, undefined);
        //***********************************************************************************************************/
        //Extruder ==> Expert Settings ==> Parameter==>Extruder==> Screw Speed : "Min" //
        var rScrewSpeedMin = functions.createCustomVariable(undefined, "rScrewSpeedMin", udtEmExtruderDriveCtrl_Config, "rScrewSpeedMin", "ZEEX_3111_Config", "udtEmExtruderDriveCtrl", "rScrewSpeedMin", undefined, undefined, undefined, undefined);
        //Extruder ==> Expert Settings ==> Parameter==>Extruder==> Screw Speed : "Min-Set" //
        var rScrewSpeedMinSet = functions.createCustomVariable(undefined, "rScrewSpeedMinSet", rScrewSpeedMin, "Set", "ZEEX_3111_Config", "udtEmExtruderDriveCtrl", "rScrewSpeedMin", "Set", undefined, undefined, undefined);
        //Extruder ==> Expert Settings ==> Parameter==>Extruder==> Screw Speed : "Min-Set" //
        var rScrewSpeedMinMax = functions.createCustomVariable(undefined, "rScrewSpeedMinMax", rScrewSpeedMin, "Max", "ZEEX_3111_Config", "udtEmExtruderDriveCtrl", "rScrewSpeedMin", "Max", undefined, undefined, undefined);
        //Extruder ==> Expert Settings ==> Parameter==> Screw Speed : "Min-Set" //
        var rScrewSpeedMinMin = functions.createCustomVariable(undefined, "rScrewSpeedMinMin", rScrewSpeedMin, "Min", "ZEEX_3111_Config", "udtEmExtruderDriveCtrl", "rScrewSpeedMin", "Min", undefined, undefined, undefined);
        //***********************************************************************************************************/
        //Extruder ==> Expert Settings ==> Parameter==>Extruder==> Screw Speed : "Max" //
        var rScrewSpeedMin = functions.createCustomVariable(undefined, "rScrewSpeedMax", udtEmExtruderDriveCtrl_Config, "rScrewSpeedMax", "ZEEX_3111_Config", "udtEmExtruderDriveCtrl", "rScrewSpeedMax", undefined, undefined, undefined, undefined);
        //Extruder ==> Expert Settings ==> Parameter==>Extruder==> Screw Speed : "Max-Set" //
        var rScrewSpeedMaxSet = functions.createCustomVariable(undefined, "rScrewSpeedMaxSet", rScrewSpeedMin, " Set", "ZEEX_3111_Config", "udtEmExtruderDriveCtrl", "rScrewSpeedMax", "Set", undefined, undefined, undefined);
        //Extruder ==> Expert Settings ==> Parameter==>Extruder==> Screw Speed : "Max-Set" //
        var rScrewSpeedMaxMax = functions.createCustomVariable(undefined, "rScrewSpeedMaxMax", rScrewSpeedMin, " Max", "ZEEX_3111_Config", "udtEmExtruderDriveCtrl", "rScrewSpeedMax", "Max", undefined, undefined, undefined);
        //Extruder ==> Expert Settings ==> Parameter==>Extruder==> Screw Speed : "v-Set" //
        var rScrewSpeedMaxMin = functions.createCustomVariable(undefined, "rScrewSpeedMaxMin", rScrewSpeedMin, " Min", "ZEEX_3111_Config", "udtEmExtruderDriveCtrl", "rScrewSpeedMax", "Min", undefined, undefined, undefined);
        //***********************************************************************************************************/
        //Extruder ==> Expert Settings ==> Parameter==>Extruder==> Screw Speed : "Limit H" //
        var rScrewSpeedTolH = functions.createCustomVariable(undefined, "rScrewSpeedTolH", udtEmExtruderDriveCtrl_Parameter, "rScrewSpeedTolH", "ZEEX_3111_Parameter", "udtEmExtruderDriveCtrl", "rScrewSpeedTolH", undefined, undefined, undefined, undefined);
        //Extruder ==> Expert Settings ==> Parameter==>Extruder==> Screw Speed : "Max-Set" //
        var rScrewSpeedTolHSet = functions.createCustomVariable(undefined, "rScrewSpeedTolHSet", rScrewSpeedTolH, "Set", "ZEEX_3111_Parameter", "udtEmExtruderDriveCtrl", "rScrewSpeedTolH", "Set", undefined, undefined, undefined);
        //Extruder ==> Expert Settings ==> Parameter==>Extruder==> Screw Speed : "Max-Set" //
        var rScrewSpeedTolHMax = functions.createCustomVariable(undefined, "rScrewSpeedTolHMax", rScrewSpeedTolH, "Max", "ZEEX_3111_Parameter", "udtEmExtruderDriveCtrl", "rScrewSpeedTolH", "Max", undefined, undefined, undefined);
        //Extruder ==> Expert Settings ==> Parameter==>Extruder==> Screw Speed : "v-Set" //
        var rScrewSpeedTolHMin = functions.createCustomVariable(undefined, "rScrewSpeedTolHMin", rScrewSpeedTolH, "Min", "ZEEX_3111_Parameter", "udtEmExtruderDriveCtrl", "rScrewSpeedTolH", "Min", undefined, undefined, undefined);
        //***********************************************************************************************************/
        //Extruder ==> Expert Settings ==> Parameter==>Extruder==> Screw Speed : "Limit HH" //
        var rScrewSpeedTolHH = functions.createCustomVariable(undefined, "rScrewSpeedTolHH", udtEmExtruderDriveCtrl_Parameter, "rScrewSpeedTolHH", "ZEEX_3111_Parameter", "udtEmExtruderDriveCtrl", "rScrewSpeedTolHH", undefined, undefined, undefined, undefined);
        //Extruder ==> Expert Settings ==> Parameter==>Extruder==> Screw Speed : "Max-Set" //
        var rScrewSpeedTolHHSet = functions.createCustomVariable(undefined, "rScrewSpeedTolHHSet", rScrewSpeedTolHH, "Set", "ZEEX_3111_Parameter", "udtEmExtruderDriveCtrl", "rScrewSpeedTolHH", "Set", undefined, undefined, undefined);
        //Extruder ==> Expert Settings ==> Parameter==>Extruder==> Screw Speed : "Max-Set" //
        var rScrewSpeedTolHHMax = functions.createCustomVariable(undefined, "rScrewSpeedTolHHMax", rScrewSpeedTolHH, "Max", "ZEEX_3111_Parameter", "udtEmExtruderDriveCtrl", "rScrewSpeedTolHH", "Max", undefined, undefined, undefined);
        //Extruder ==> Expert Settings ==> Parameter==>Extruder==> Screw Speed : "Max-Set" //
        var rScrewSpeedTolHHMin = functions.createCustomVariable(undefined, "rScrewSpeedTolHHMin", rScrewSpeedTolHH, "Min", "ZEEX_3111_Parameter", "udtEmExtruderDriveCtrl", "rScrewSpeedTolHH", "Min", undefined, undefined, undefined);
        //***********************************************************************************************************/
        //Extruder ==> Expert Settings ==> Parameter==>Extruder==> ganz unten bei Extruder : "Ramp Time" //
        var udScrewRampTime = functions.createCustomVariable(undefined, "udScrewRampTimeH", udtEmExtruderDriveCtrl_Parameter, " udScrewRampTime", "ZEEX_3111_Parameter", "udtEmExtruderDriveCtrl", "udScrewRampTime", undefined, undefined, undefined, undefined);
        //Extruder ==> Expert Settings ==> Parameter==>Extruder==> ganz unten bei Extruder : "Ramp Time-Set" //
        var udScrewRampTimeSet = functions.createCustomVariable(undefined, "udScrewRampTimeSet", udScrewRampTime, "Set", "ZEEX_3111_Parameter", "udtEmExtruderDriveCtrl", "udScrewRampTime", "Set", undefined, undefined, undefined);
        //Extruder ==> Expert Settings ==> Parameter==>Extruder==> ganz unten bei Extruder : "Ramp Time-Max" //
        var udScrewRampTimeMax = functions.createCustomVariable(undefined, "udScrewRampTimeMax", udScrewRampTime, "Max", "ZEEX_3111_Parameter", "udtEmExtruderDriveCtrl", "udScrewRampTime", "Max", undefined, undefined, undefined);
        //Extruder ==> Expert Settings ==> Parameter==>Extruder==> ganz unten bei Extruder : "Ramp Time-Min" //
        var udScrewRampTimeMin = functions.createCustomVariable(undefined, "udScrewRampTimeMin", udScrewRampTime, "Min", "ZEEX_3111_Parameter", "udtEmExtruderDriveCtrl", "udScrewRampTime", "Min", undefined, undefined, undefined);
        //***********************************************************************************************************/
        //Extruder ==> Expert Settings ==> Parameter==> ganz unten bei Extruder : "Ramp Time" //
        var udScrewRampRoundTime = functions.createCustomVariable(undefined, "udScrewRampRoundTimeH", udtEmExtruderDriveCtrl_Parameter, "udScrewRampRoundTime", "ZEEX_3111_Parameter", "udtEmExtruderDriveCtrl", "udScrewRampRoundTime", undefined, undefined, undefined, undefined);
        //Extruder ==> Expert Settings ==> Parameter==> ganz unten bei Extruder : "Ramp Time-Set" //
        var udScrewRampRoundTimeSet = functions.createCustomVariable(undefined, "udScrewRampRoundTimeSet", udScrewRampRoundTime, "Set", "ZEEX_3111_Parameter", "udtEmExtruderDriveCtrl", "udScrewRampRoundTime", "Set", undefined, undefined, undefined);
        //Extruder ==> Expert Settings ==> Parameter==> ganz unten bei Extruder : "Ramp Time-Max" //
        var udScrewRampRoundTimeMax = functions.createCustomVariable(undefined, "udScrewRampRoundTimeMax", udScrewRampRoundTime, "Max", "ZEEX_3111_Parameter", "udtEmExtruderDriveCtrl", "udScrewRampRoundTime", "Max", undefined, undefined, undefined);
        //Extruder ==> Expert Settings ==> Parameter==> ganz unten bei Extruder : "Ramp Time-Min" //
        var udScrewRampRoundTimeMin = functions.createCustomVariable(undefined, "udScrewRampRoundTimeMin", udScrewRampRoundTime, "Min", "ZEEX_3111_Parameter", "udtEmExtruderDriveCtrl", "udScrewRampRoundTime", "Min", undefined, undefined, undefined);
        //***********************************************************************************************************/
        //Extruder ==> Expert Settings ==> Parameter==>Extruder==> Motor Cooling==>Motor Cooling : "DelayAlarmFlow" //
        var udDelayAlarmFlow = functions.createCustomVariable(undefined, "udDelayAlarmFlow", udtEmMotorCoolingExt_Config, "udDelayAlarmFlow", "ZEEX_3111_Config", "udtEmMotorCoolingExt", "udDelayAlarmFlow", undefined, undefined, undefined, undefined);
        //Extruder ==> Expert Settings ==> Parameter==>Extruder==> Motor Cooling==>Motor Cooling : "DelayAlarmFlow-Set" //
        var udDelayAlarmFlowSet = functions.createCustomVariable(undefined, "udDelayAlarmFlowSet", udDelayAlarmFlow, "Set", "ZEEX_3111_Config", "udtEmMotorCoolingExt", "udDelayAlarmFlow", "Set", undefined, undefined, undefined);
        //Extruder ==> Expert Settings ==> Parameter==>Extruder==> Motor Cooling==>Motor Cooling : "DelayAlarmFlow-Max" //
        var udDelayAlarmFlowMax = functions.createCustomVariable(undefined, "udDelayAlarmFlowMax", udDelayAlarmFlow, "Max", "ZEEX_3111_Config", "udtEmMotorCoolingExt", "udDelayAlarmFlow", "Max", undefined, undefined, undefined);
        //Extruder ==> Expert Settings ==> Parameter==>Extruder==> Motor Cooling==>Motor Cooling : "DelayAlarmFlow-Set" //
        var udDelayAlarmFlowMin = functions.createCustomVariable(undefined, "udDelayAlarmFlowMin", udDelayAlarmFlow, "Min", "ZEEX_3111_Config", "udtEmMotorCoolingExt", "udDelayAlarmFlow", "Min", undefined, undefined, undefined);
        //***********************************************************************************************************/
        //Extruder ==> Expert Settings ==> Parameter==>Extruder==> Motor Cooling==>Motor Cooling : "Valve / Blower" //
        var udType = functions.createCustomVariable(undefined, "udType", udtEmMotorCoolingExt_Config, "udType", "ZEEX_3111_Config", "udtEmMotorCoolingExt", "udType", "Set", undefined, undefined, undefined);
        //Extruder ==> Expert Settings ==> Parameter==>Extruder==> Motor Cooling==>Motor Cooling : "Valve / Blower" //



        //Extruder ==> Expert Settings ==> Parameter==>Extruder==> Motor Cooling==>Motor Cooling : "Valve / Blower" //

        //Extruder ==> Expert Settings ==> Parameter==>Extruder==> Motor Cooling==>Motor Cooling : "DelayAlarmTemp" //
        var udDelayAlarmTemp = functions.createCustomVariable(undefined, "udDelayAlarmTemp", udtEmExtruderDriveCtrl_Config, "udDelayAlarmTemp", "ZEEX_3111_Config", "udtEmMotorCoolingExt", "udDelayAlarmTemp", undefined, undefined, undefined, undefined);
        //Extruder ==> Expert Settings ==> Parameter==>Extruder==> Motor Cooling==>Motor Cooling : "DelayAlarmTemp-Set" //
        var udDelayAlarmTempSet = functions.createCustomVariable(undefined, "udDelayAlarmTempSet", udDelayAlarmTemp, "Set", "ZEEX_3111_Config", "udtEmMotorCoolingExt", "udDelayAlarmTemp", "Set", undefined, undefined, undefined);
        //Extruder ==> Expert Settings ==> Parameter==>Extruder==> Motor Cooling==>Motor Cooling : "DelayAlarmTemp-Max" //
        var udDelayAlarmTempMax = functions.createCustomVariable(undefined, "udDelayAlarmTempMax", udDelayAlarmTemp, "Max", "ZEEX_3111_Config", "udtEmMotorCoolingExt", "udDelayAlarmTemp", "Max", undefined, undefined, undefined);
        //Extruder ==> Expert Settings ==> Parameter==>Extruder==> Motor Cooling==>Motor Cooling : "DelayAlarmTemp-Set" //
        var udDelayAlarmTempMin = functions.createCustomVariable(undefined, "udDelayAlarmTempMin", udDelayAlarmTemp, "Min", "ZEEX_3111_Config", "udtEmMotorCoolingExt", "udDelayAlarmTemp", "Min", undefined, undefined, undefined);
        //***********************************************************************************************************/
        //Extruder ==> Expert Settings ==> Parameter==>Extruder==> Motor Cooling==>Motor Cooling : "udFollowUpTime" //
        var udFollowUpTime = functions.createCustomVariable(undefined, "udFollowUpTime", udtEmExtruderDriveCtrl_Config, "udFollowUpTime", "ZEEX_3111_Config", "udtEmMotorCoolingExt", "udFollowUpTime", undefined, undefined, undefined, undefined);
        //Extruder ==> Expert Settings ==> Parameter==>Extruder==> Motor Cooling==>Motor Cooling : "DelayAlarmTemp-Set" //
        var udFollowUpTime_MotorCoolingSet = functions.createCustomVariable(undefined, "udFollowUpTimeMotorCoolingSet", udFollowUpTime, "Set", "ZEEX_3111_Config", "udtEmMotorCoolingExt", "udFollowUpTime", "Set", undefined, undefined, undefined);
        //Extruder ==> Expert Settings ==> Parameter==>Extruder==> Motor Cooling==>Motor Cooling : "DelayAlarmTemp-Max" //
        var udFollowUpTimeMotorCoolingMax = functions.createCustomVariable(undefined, "udFollowUpTimeMotorCoolingMax", udFollowUpTime, "Max", "ZEEX_3111_Config", "udtEmMotorCoolingExt", "udFollowUpTime", "Max", undefined, undefined, undefined);
        //Extruder ==> Expert Settings ==> Parameter==>Extruder==> Motor Cooling==>Motor Cooling : "DelayAlarmTemp-Set" //
        var udFollowUpTimeMotorCoolingMin = functions.createCustomVariable(undefined, "udFollowUpTimeMotorCoolingMin", udFollowUpTime, "Min", "ZEEX_3111_Config", "udtEmMotorCoolingExt", "udFollowUpTime", "Min", undefined, undefined, undefined);
        //***********************************************************************************************************/
        //Extruder ==> Expert Settings ==> Parameter==>Extruder==> Gear Oil Lubrication==> Gear Oil Lubrication : "PreRun Time" //
        var udPreRunTime = functions.createCustomVariable(undefined, "udPreRunTime", udtEmGearOilLubExt_Config, "udPreRunTime", "ZEEX_3111_Config", "udtEmGearOilLubExt", "udPreRunTime", undefined, undefined, undefined, undefined);
        //Extruder ==> Expert Settings ==> Parameter==>Extruder==> Gear Oil Lubrication==> Gear Oil Lubrication : "PreRun Time-Set" //
        var udPreRunTimeSet = functions.createCustomVariable(undefined, "udPreRunTimeSet", udPreRunTime, "udPreRunTimeSet", "ZEEX_3111_Config", "udtEmGearOilLubExt", "udPreRunTime", "Set", undefined, undefined, undefined);
        //Extruder ==> Expert Settings ==> Parameter==>Extruder==> Gear Oil Lubrication==> Gear Oil Lubrication : "PreRun Time-Max" //
        var udPreRunTimeMax = functions.createCustomVariable(undefined, "udPreRunTimeMax", udPreRunTime, "udPreRunTimeMax", "ZEEX_3111_Config", "udtEmGearOilLubExt", "udPreRunTime", "Max", undefined, undefined, undefined);
        //Extruder ==> Expert Settings ==> Parameter==>Extruder==> Gear Oil Lubrication==> Gear Oil Lubrication : "PreRun Time-Max" //
        var udPreRunTimeMin = functions.createCustomVariable(undefined, "udPreRunTimeMin", udPreRunTime, "udPreRunTimeMin", "ZEEX_3111_Config", "udtEmGearOilLubExt", "udPreRunTime", "Min", undefined, undefined, undefined);
        //***********************************************************************************************************/
        //Extruder ==> Expert Settings ==> Parameter==>Extruder==> Gear Oil Lubrication==> Gear Oil Lubrication : "FollowUpTime" //
        var udFollowUpTime_GeatOil = functions.createCustomVariable(undefined, "udFollowUpTime", udtEmGearOilLubExt_Config, "udFollowUpTime", "ZEEX_3111_Config", "udtEmGearOilLubExt", "udFollowUpTime", undefined, undefined, undefined, undefined);
        //Extruder ==> Expert Settings ==> Parameter==>Extruder==> Gear Oil Lubrication==> Gear Oil Lubrication : "FollowUpTime-Set" //
        var udFollowUpTime_GearOilSet = functions.createCustomVariable(undefined, "udFollowUpTimeGearOilSet", udFollowUpTime_GeatOil, "udFollowUpTime", "ZEEX_3111_Config", "udtEmGearOilLubExt", "udFollowUpTime", "Set", undefined, undefined, undefined);
        //Extruder ==> Expert Settings ==> Parameter==>Extruder==> Gear Oil Lubrication==> Gear Oil Lubrication : "FollowUpTime-Max" //
        var udFollowUpTimeGearOilMax = functions.createCustomVariable(undefined, "udFollowUpTimeGearOilMax", udFollowUpTime_GeatOil, "udFollowUpTime", "ZEEX_3111_Config", "udtEmGearOilLubExt", "udFollowUpTime", "Max", undefined, undefined, undefined);
        //Extruder ==> Expert Settings ==> Parameter==>Extruder==> Gear Oil Lubrication==> Gear Oil Lubrication : "FollowUpTime-Min" //
        var udFollowUpTimeGearOilMin = functions.createCustomVariable(undefined, "udFollowUpTimeGearOilMin", udFollowUpTime_GeatOil, "udFollowUpTime", "ZEEX_3111_Config", "udtEmGearOilLubExt", "udFollowUpTime", "Min", undefined, undefined, undefined);
        //***********************************************************************************************************/
        //Extruder ==> Expert Settings ==> Parameter==>Extruder==> Gear Oil Lubrication==> Oil temperature Type : "Digital Inputs / Analog Inputs " //
        // var udtOilTemp = functions.createCustomVariable(undefined, "udtOilTemp", udtEmGearOilLubExt_Hmi, "udtOilTemp", "ZEEX_3111_Hmi", "udtEmGearOilLubExt", "udtOilTemp", undefined, undefined, undefined, undefined);
        //var udtOilTempdwControl = functions.Uint32createCustomVariable(undefined, "udtOilTempdwControl", udtOilTemp, "dwCtrl", "ZEEX_3111_Hmi", "udtEmGearOilLubExt", "udtOilTempType", "dwCtrl", undefined, undefined, undefined);
        //var udtOilTempdwStat = functions.Uint32createCustomVariable(undefined, "udtOilTempdwStat", udtOilTemp, "dwStat", "ZEEX_3111_Hmi", "udtEmGearOilLubExt", "udtOilTempType", "dwStat", undefined, undefined, undefined);




        var data = {};
        for (var i = 0; i < 14; i++) {
            data[i] = {};

            data[i].nr = functions.createCustomVariable(i, "nr", udtCmPzPid_Parameter, i.toString(), "ZEEX_3111_Parameter", "udtCmPzPid", undefined, undefined, undefined, undefined, undefined);
            data[i].nr2 = functions.createCustomVariable(i, "nr", udtCmPzPid_Config, i.toString(), "ZEEX_3111_Config", "udtCmPzPid", undefined, undefined, undefined, undefined, undefined);
            data[i].nr3 = functions.createCustomVariable(i, "nr", udtCmPzPid_HMI, i.toString(), "ZZEEX_3111_Hmi", "udtCmPzPid", undefined, undefined, undefined, undefined, undefined);
            data[i].nr4 = functions.createCustomVariable(i, "nr", udtEmPz, i.toString(), undefined, undefined, undefined, undefined, undefined, undefined, undefined);
            data[i].nr5 = functions.createCustomVariable(i, "nr", udtEmPz_Parameter, i.toString(), "ZEEX_3111_Parameter", "udtEmPz", undefined, undefined, undefined, undefined);

            data[i].udtCool = functions.createCustomVariable(i, "udtCool", data[i].nr, "udtCool", "ZEEX_3111_Parameter", "udtCmPzPid", "udtCool", undefined, undefined, undefined, undefined);
            data[i].udtHeat = functions.createCustomVariable(i, "udtHeat", data[i].nr, "udtHeat", "ZEEX_3111_Parameter", "udtCmPzPid", "udtHeat", undefined, undefined, undefined, undefined);
            data[i].udtCoolPid = functions.createCustomVariable(i, "udtCoolPid", data[i].udtCool, "udtPid", "ZEEX_3111_Config", "udtCool", "udtPid", undefined, undefined, undefined);
            data[i].udtHeatPid = functions.createCustomVariable(i, "udtHeatPid", data[i].udtHeat, "udtPid", "ZEEX_3111_Parameter", "udtCmPzPid", "udtHeat", "udtPid", undefined, undefined);

            data[i].rPzTemp = functions.createCustomVariable(i, "rPzTemp", data[i].nr4, "rPzTemp", "ZEEX_3111_Hmi", "udtEmPz", "rPzTemp", undefined, undefined, undefined);
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
            data[i].rAct = functions.createCustomVariable(i, "rAct", data[i].rPzTemp, "rAct", "ZEEX_3111_Hmi", "udtEmPz", "rPzTemp", "rAct", undefined, SetGetLogic.rActGet, undefined);
            //PLASTIFICATION ==> Heatings Zones : "rSet" //
            data[i].rSet = functions.createCustomVariable(i, "rSet", data[i].rPzTemp, "rSet", "ZEEX_3111_Hmi", "udtEmPz", "rPzTemp", "rSet", undefined, SetGetLogic.rSetGet, SetGetLogic.rSetSet);
            //PLASTIFICATION ==> Heatings Zones : "rSet-Minimum" //
            data[i].rOpMin = functions.createCustomVariable(i, "rOpMin", data[i].rPzTemp, "rOpMin", "ZEEX_3111_Hmi", "udtEmPz", "rPzTemp", "rOpMin", undefined, SetGetLogic.rOpMinGet, undefined);
            //PLASTIFICATION ==> Heatings Zones : "rSet-Maximum  //
            data[i].rOpMax = functions.createCustomVariable(i, "rOpMax", data[i].rPzTemp, "rOpMax", "ZEEX_3111_Hmi", "udtEmPz", "rPzTemp", "rOpMax", undefined, SetGetLogic.rOpMaxGet, undefined);



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
            data[i].rInjPulseTime = functions.createCustomVariable(i, "rInjPulseTime ", data[i].udtCool, "rInjPulseTime ", "ZEEX_3111_Parameter", "udtCmPzPid", "udtCool", "rInjPulseTime", undefined, undefined, undefined);
            //Extruder ==> Expert Settings ==> PID Parameters : "Lenght-Set" //
            data[i].rInjPulseTimeSet = functions.createCustomVariable(i, "rInjPulseTimeSet", data[i].rInjPulseTime, "Set", "ZEEX_3111_Parameter", "udtCmPzPid", "udtCool", "rInjPulseTime", "Set", undefined, undefined, undefined);
            //Extruder ==> Expert Settings ==> PID Parameters : "Lenght-Max" //
            data[i].rInjPulseTimeMax = functions.createCustomVariable(i, "rInjPulseTimeMax", data[i].rInjPulseTime, "Max", "ZEEX_3111_Parameter", "udtCmPzPid", "udtCool", "rInjPulseTime", "Max", undefined, undefined, undefined);
            //Extruder ==> Expert Settings ==> PID Parameters : "Lenght-Min" //
            data[i].rInjPulseTimeMin = functions.createCustomVariable(i, "rInjPulseTimeMin", data[i].rInjPulseTime, "Min", "ZEEX_3111_Parameter", "udtCmPzPid", "udtCool", "rInjPulseTime", "Min", undefined, undefined, undefined);
            //***********************************************************************************************************/
            //Extruder ==> Expert Settings ==> PID Parameters ==> Cooling Control : "Pause" //
            data[i].rInjMinPauseTime = functions.createCustomVariable(i, "rInjMinPauseTime", data[i].udtCool, "rInjMinPauseTime", "ZEEX_3111_Parameter", "udtCmPzPid", "udtCool", "rInjMinPauseTime", undefined, undefined, undefined);
            //Extruder ==> Expert Settings ==> PID Parameters ==> Cooling Control : "Pause-Set" //
            data[i].rInjMinPauseTimeSet = functions.createCustomVariable(i, "rInjMinPauseTimeSet", data[i].rInjMinPauseTime, "Set", "ZEEX_3111_Parameter", "udtCmPzPid", "udtCool", "rInjMinPauseTime", "Set", undefined, undefined, undefined, undefined);
            //Extruder ==> Expert Settings ==> PID Parameters ==> Cooling Control : "Pause-Max" //
            data[i].rInjMinPauseTimeMax = functions.createCustomVariable(i, "rInjMinPauseTimeMax", data[i].rInjMinPauseTime, "Max", "ZEEX_3111_Parameter", "udtCmPzPid", "udtCool", "rInjMinPauseTime", "Max", undefined, undefined, undefined);
            //***********************************************************************************************************/
            //Extruder ==> Expert Settings ==> PID Parameters ==> Cooling Control : "Pause-Min" //
            data[i].rInjMinPauseTimeMin = functions.createCustomVariable(i, "rInjMinPauseTimeMin", data[i].rInjMinPauseTime, "Min", "ZEEX_3111_Parameter", "udtCmPzPid", "rInjMinPauseTime", "Min", undefined, undefined, undefined);
            //***********************************************************************************************************/
            //Extruder ==> Expert Settings ==> PID Parameters ==> Cooling Control : "Min OnTime //
            data[i].rPwmMinOnTimeCool = functions.createCustomVariable(i, "rPwmMinOnTimeCool", data[i].udtCool, "rPwmMinOnTime", "ZEEX_3111_Parameter", "udtCmPzPid", "udtCool", "rPwmMinOnTime", undefined, undefined, undefined);
            //Extruder ==> Expert Settings ==> PID Parameters ==> Cooling Control : "Min OnTime-Set" //
            data[i].rPwmMinOnTimeCoolSet = functions.createCustomVariable(i, "rPwmMinOnTimeCoolSet", data[i].rPwmMinOnTimeCool, "Set", "ZEEX_3111_Parameter", "udtCmPzPid", "udtCool", "rPwmMinOnTime", "Set", undefined, undefined);
            //Extruder ==> Expert Settings ==> PID Parameters ==> Cooling Control : "Min OnTime-Max" //
            data[i].rPwmMinOnTimeCoolMax = functions.createCustomVariable(i, "rPwmMinOnTimeCoolMax", data[i].rPwmMinOnTimeCool, "Max", "ZEEX_3111_Parameter", "udtCmPzPid", "udtCool", "rPwmMinOnTime", "Max", undefined, undefined);
            //Extruder ==> Expert Settings ==> PID Parameters ==> Cooling Control : "Min OnTime-Min" //
            data[i].rPwmMinOnTimeCoolMin = functions.createCustomVariable(i, "rPwmMinOnTimeCoolMin", data[i].rPwmMinOnTimeCool, "Min", "ZEEX_3111_Parameter", "udtCmPzPid", "udtCool", "rPwmMinOnTime", "Min", undefined, undefined);
            //***********************************************************************************************************/
            //Extruder ==> Expert Settings ==> PID Parameters ==> Cooling Controll : "Min OffTime" //
            data[i].rPwmMinOffTimeCool = functions.createCustomVariable(i, "rPwmMinOffTime", data[i].udtCool, "rPwmMinOffTime", "ZEEX_3111_Parameter", "udtCmPzPid", "udtCool", "rPwmMinOffTime", undefined, undefined, undefined);
            //Extruder ==> Expert Settings ==> PID Parameters ==> Cooling Controll : "Min OffTime-Set" //
            data[i].rPwmMinOffTimeCoolSet = functions.createCustomVariable(i, "rPwmMinOffTimeSet", data[i].rPwmMinOffTimeCool, "Set", "ZEEX_3111_Parameter", "udtCmPzPid", "udtCool", "rPwmMinOffTime", "Set", undefined, undefined);
            //Extruder ==> Expert Settings ==> PID Parameters ==> Cooling Control : "Min OffTime-Max" //
            data[i].rPwmMinOffTimeCoolMax = functions.createCustomVariable(i, "rPwmMinOffTimeMax", data[i].rPwmMinOffTimeCool, "Max", "ZEEX_3111_Parameter", "udtCmPzPid", "udtCool", "rPwmMinOffTime", "Max", undefined, undefined);
            //Extruder ==> Expert Settings ==> PID Parameters ==> Cooling Control : "Min OffTime-Min" //
            data[i].rPwmMinOffTimeCoolMin = functions.createCustomVariable(i, "rPwmMinOffTimeMin", data[i].rPwmMinOffTimeCool, "Min", "ZEEX_3111_Parameter", "udtCmPzPid", "udtCool", "rPwmMinOffTime", "Min", undefined, undefined);
            //***********************************************************************************************************/
            //Extruder ==> Expert Settings ==> PID Parameters ==> Parameter Cool : "rGain-Set" //
            data[i].rGainCool = functions.createCustomVariable(i, "rGainCool", data[i].udtCoolPid, "rGain", "ZEEX_3111_Parameter", "udtCmPzPid", "udtCool", "udtPid", "rGain", undefined, undefined);
            //***********************************************************************************************************/
            //Extruder ==> Expert Settings ==> PID Parameters ==> Parameter Cool : "rTi-Set" //
            data[i].rTiCool = functions.createCustomVariable(i, "rTiCool", data[i].udtCoolPid, "rTi", "ZEEX_3111_Parameter", "udtCmPzPid", "udtCool", "udtPid", "rTi", undefined, undefined);
            //***********************************************************************************************************/
            //Extruder ==> Expert Settings ==> PID Parameters ==> Parameter Cool : "rTd-Set" //
            data[i].rTdCool = functions.createCustomVariable(i, "rTdCool", data[i].udtCoolPid, "rTd", "ZEEX_3111_Parameter", "udtCmPzPid", "udtCool", "udtPid", "rTd", undefined, undefined);
            //***********************************************************************************************************/
            //Extruder ==> Expert Settings ==> PID Parameters ==> Parameter Cool : "rTdFiltRatio-Set" //
            data[i].rTdFiltRatioCool = functions.createCustomVariable(i, "rTdFiltRatioCool", data[i].udtCoolPid, "rTdFiltRatio", "ZEEX_3111_Parameter", "udtCmPzPid", "udtCool", "udtPid", "rTdFiltRatio", undefined, undefined);
            //***********************************************************************************************************/
            //Extruder ==> Expert Settings ==> PID Parameters ==> Parameter Cool : "rPWeighting-Set" //
            data[i].rPWeightingCool = functions.createCustomVariable(i, "rPWeightingCool", data[i].udtCoolPid, "rPWeighting", "ZEEX_3111_Parameter", "udtCmPzPid", "udtCool", "udtPid", "rPWeighting", undefined, undefined);
            //***********************************************************************************************************/
            //Extruder ==> Expert Settings ==> PID Parameters ==> Parameter Cool : "rDWeighting-Set" //
            data[i].rDWeightingCool = functions.createCustomVariable(i, "rDWeightingCool", data[i].udtCoolPid, "rDWeighting", "ZEEX_3111_Parameter", "udtCmPzPid", "udtCool", "udtPid", "rDWeighting", undefined, undefined);
            //***********************************************************************************************************/
            //Extruder ==> Expert Settings ==> PID Parameters ==> Parameter Cool : "rCycle-Set" //
            data[i].rCycleCool = functions.createCustomVariable(i, "rCycleCool", data[i].udtCoolPid, "rCycle", "ZEEX_3111_Parameter", "udtCmPzPid", "udtCool", "udtPid", "rCycle", undefined, undefined);
            //***********************************************************************************************************/
            //Extruder ==> Expert Settings ==> PID Parameters ==> Parameter Cool : "rControllZone-Set" //
            data[i].rControlZone = functions.createCustomVariable(i, "rControlZone", data[i].udtCoolPid, "rControlZone", "ZEEX_3111_Parameter", "udtCmPzPid", "udtCool", "udtPid", "rControlZone", undefined, undefined);
            //***********************************************************************************************************/
            //Extruder ==> Expert Settings ==> PID Parameters ==> Parameter Cool : "rDeadZone-Set" //
            data[i].rDeadZone = functions.createCustomVariable(i, "rDeadZone", data[i].udtCoolPid, "rDeadZone", "ZEEX_3111_Parameter", "udtCmPzPid", "udtCool", "udtPid", "rDeadZone", undefined, undefined);
            //***********************************************************************************************************/
            //Extruder ==> Expert Settings ==> PID Parameters ==> Heating Control : "Min OnTime" //
            data[i].rPwmMinOnTimeHeat = functions.createCustomVariable(i, "rPwmMinOnTimeHeat", data[i].udtHeat, "rPwmMinOnTimeHeat", "ZEEX_3111_Parameter", "udtCmPzPid", "udtHeat", "rPwmMinOnTime", undefined, undefined);
            //Extruder ==> Expert Settings ==> PID Parameters ==> Heating Control : "Min OnTime-Set" //
            data[i].rPwmMinOnTimeHeatSet = functions.createCustomVariable(i, "rPwmMinOnTimeHeatSet", data[i].rPwmMinOnTimeHeat, "Set", "ZEEX_3111_Parameter", "udtCmPzPid", "udtHeat", "rPwmMinOnTime", "Set", undefined, undefined, undefined);
            //Extruder ==> Expert Settings ==> PID Parameters ==> Heating Control : "Min OnTime-Max" //
            data[i].rPwmMinOnTimeHeatMax = functions.createCustomVariable(i, "rPwmMinOnTimeHeatMax", data[i].rPwmMinOnTimeHeat, "Max", "ZEEX_3111_Parameter", "udtCmPzPid", "udtHeat", "rPwmMinOnTime", "Max", undefined, undefined, undefined);
            //Extruder ==> Expert Settings ==> PID Parameters ==> Heating Control : "Min OnTime-Min" //
            data[i].rPwmMinOnTimeHeatMin = functions.createCustomVariable(i, "rPwmMinOnTimeHeatMin", data[i].rPwmMinOnTimeHeat, "Max", "ZEEX_3111_Parameter", "udtCmPzPid", "udtHeat", "rPwmMinOnTime", "Min", undefined, undefined, undefined);
            //***********************************************************************************************************/
            //Extruder ==> Expert Settings ==> PID Parameters ==> Heating Control : "Min OffTime" //
            data[i].rPwmMinOffTimeHeat = functions.createCustomVariable(i, "rPwmMinOffTimeHeat", data[i].udtHeat, "rPwmMinOffTimeHeat", "ZEEX_3111_Parameter", "udtCmPzPid", "udtHeat", "rPwmMinOffTime", undefined, undefined, undefined)
            //Extruder ==> Expert Settings ==> PID Parameters ==> Heating Control : "Min OffTime-Set" //
            data[i].rPwmMinOffTimeHeatSet = functions.createCustomVariable(i, "rPwmMinOffTimeHeatSet", data[i].rPwmMinOffTimeHeat, "Set", "ZEEX_3111_Parameter", "udtCmPzPid", "udtHeat", "rPwmMinOffTime", "Set", undefined, undefined)
            //Extruder ==> Expert Settings ==> PID Parameters ==> Heating Control : "Min OffTime-Max" //
            data[i].rPwmMinOffTimeHeatMax = functions.createCustomVariable(i, "rPwmMinOffTimeHeatMax", data[i].rPwmMinOffTimeHeat, "Max", "ZEEX_3111_Parameter", "udtCmPzPid", "udtHeat", "rPwmMinOffTime", "Max", undefined, undefined)
            //Extruder ==> Expert Settings ==> PID Parameters ==> Heating Control : "Min OffTime-Min" //
            data[i].rPwmMinOffTimeHeatMin = functions.createCustomVariable(i, "rPwmMinOffTimeHeatMin", data[i].rPwmMinOffTimeHeat, "Min", "ZEEX_3111_Parameter", "udtCmPzPid", "udtHeat", "rPwmMinOffTime", "Min", undefined, undefined)
            //***********************************************************************************************************/
            //Extruder ==> Expert Settings ==> PID Parameters ==> Parameter Heat : "rGain-Set" //
            data[i].rGainHeatSet = functions.createCustomVariable(i, "rGainHeatSet", data[i].udtHeatPid, "rGain", "ZEEX_3111_Parameter", "udtCmPzPid", "udtHeat", "udtPid", "rGain", SetGetLogic.rGainHeatSetGet, undefined);
            //***********************************************************************************************************/
            //Extruder ==> Expert Settings ==> PID Parameters ==> Parameter Heat : "rTi-Set" //
            data[i].rTiHeatSet = functions.createCustomVariable(i, "rTiHeatSet", data[i].udtHeatPid, "rTi", "ZEEX_3111_Parameter", "udtCmPzPid", "udtHeat", "udtPid", "rTi", SetGetLogic.rTiHeatSetGet, undefined);
            //***********************************************************************************************************/
            //Extruder ==> Expert Settings ==> PID Parameters ==> Parameter Heat : "rTd-Set" //
            data[i].rTdHeatSet = functions.createCustomVariable(i, "rTdHeatSet", data[i].udtHeatPid, "rTd", "ZEEX_3111_Parameter", "udtCmPzPid", "udtHeat", "udtPid", "rTd", SetGetLogic.rTdHeatSetGet, undefined);
            //***********************************************************************************************************/
            //Extruder ==> Expert Settings ==> PID Parameters ==> Parameter Heat : "rTdFiltRatio-Set" //
            data[i].rTdFiltRatioHeatSet = functions.createCustomVariable(i, "rTdFiltRatioHeatSet", data[i].udtHeatPid, "rTdFiltRatio", "ZEEX_3111_Parameter", "udtCmPzPid", "udtHeat", "udtPid", "rTdFiltRatio", undefined, undefined);
            //***********************************************************************************************************/
            //Extruder ==> Expert Settings ==> PID Parameters ==> Parameter Heat : "rPWeighting-Set" //
            data[i].rPWeightingHeatSet = functions.createCustomVariable(i, "rPWeightingHeatSet", data[i].udtHeatPid, "rPWeighting", "ZEEX_3111_Parameter", "udtCmPzPid", "udtHeat", "udtPid", "rPWeighting", undefined, undefined);
            //***********************************************************************************************************/
            //Extruder ==> Expert Settings ==> PID Parameters ==> Parameter Heat : "rDWeighting-Set" //
            data[i].rDWeightingHeatSet = functions.createCustomVariable(i, "rDWeightingHeatSet", data[i].udtHeatPid, "rDWeighting", "ZEEX_3111_Parameter", "udtCmPzPid", "udtHeat", "udtPid", "rDWeighting", undefined, undefined);
            //***********************************************************************************************************/
            //Extruder ==> Expert Settings ==> PID Parameters ==> Parameter Heat : "rCycle-Set" //
            data[i].rCycleHeatSet = functions.createCustomVariable(i, "rCycleHeatSet", data[i].udtHeatPid, "rCycle", "ZEEX_3111_Parameter", "udtCmPzPid", "udtHeat", "udtPid", "rCycle", SetGetLogic.rCycleHeatSetGet, undefined);
            //***********************************************************************************************************/
            //Extruder ==> Expert Settings ==> PID Parameters ==> Parameter Heat : "rControlZone-Set" //
            data[i].rControlZoneHeatSet = functions.createCustomVariable(i, "rControlZoneHeatSet", data[i].udtHeatPid, "rControlZone", "ZEEX_3111_Parameter", "udtCmPzPid", "udtHeat", "udtPid", "rControlZone", undefined, undefined);
            //***********************************************************************************************************/
            //Extruder ==> Expert Settings ==> PID Parameters ==> Parameter Heat : "rDeadZone-Set" //
            data[i].rDeadZoneHeatSet = functions.createCustomVariable(i, "rDeadZoneHeatSet", data[i].udtHeatPid, "rDeadZone", "ZEEX_3111_Parameter", "udtCmPzPid", "udtHeat", "udtPid", "rDeadZone", undefined, undefined);
            //***********************************************************************************************************/
            //Extruder ==> Expert Settings ==> PID Parameters ==> Curent Heat : "Windings//
            data[i].udWindOfCoil = functions.createCustomVariable(i, "udWindOfCoil", data[i].nr2, "udWindOfCoil", "ZEEX_3111_Config", "udtCmPzPid", "udWindOfCoil", undefined, undefined, undefined, undefined);
            //Extruder ==> Expert Settings ==> PID Parameters ==> Curent Heat : "Windings-Set" //
            data[i].udWindOfCoilSet = functions.createCustomVariable(i, "udWindOfCoilSet", data[i].udWindOfCoil, "Set", "ZEEX_3111_Config", "udtCmPzPid", "udWindOfCoil", "Set", undefined, undefined, undefined);
            //Extruder ==> Expert Settings ==> PID Parameters ==> Curent Heat : "Windings-Max" //
            data[i].udWindOfCoilMax = functions.createCustomVariable(i, "udWindOfCoilMax", data[i].udWindOfCoil, "Max", "ZEEX_3111_Config", "udtCmPzPid", "udWindOfCoil", "Max", undefined, undefined, undefined);
            //Extruder ==> Expert Settings ==> PID Parameters ==> Curent Heat : "Windings-Min" //
            data[i].udWindOfCoilMin = functions.createCustomVariable(i, "udWindOfCoilMin", data[i].udWindOfCoil, "Min", "ZEEX_3111_Config", "udtCmPzPid", "udWindOfCoil", "Min", undefined, undefined, undefined);
            //***********************************************************************************************************/
            //Extruder ==> Expert Settings ==> PID Parameters ==> Current Heat: "Nominal" //
            data[i].rCurr = functions.createCustomVariable(i, "rCurrSet", data[i].udtHeat, "rCurrSet (Nominal)", "ZEEX_3111_Parameter", "udtCmPzPid", "udtHeat", "rCurrSet", undefined, undefined, undefined);
            //Extruder ==> Expert Settings ==> PID Parameters ==> Current Heat: "Nominal-Set" //
            data[i].rCurrSet = functions.createCustomVariable(i, "rCurrSet", data[i].rCurr, "Set", "ZEEX_3111_Parameter", "udtCmPzPid", "udtHeat", "rCurrSet", "Set", undefined);
            //Extruder ==> Expert Settings ==> PID Parameters ==> Current Heat: "Nominal-Max" //
            data[i].rCurrMax = functions.createCustomVariable(i, "rCurrMax", data[i].rCurr, "Max", "ZEEX_3111_Parameter", "udtCmPzPid", "udtHeat", "rCurrSet", "Max", undefined, undefined);
            //Extruder ==> Expert Settings ==> PID Parameters ==> Current Heat: "Nominal-Min" //
            data[i].rCurrMin = functions.createCustomVariable(i, "rCurrMin", data[i].rCurr, "Min", "ZEEX_3111_Parameter", "udtCmPzPid", "udtHeat", "rCurrSet", "Min", undefined, undefined);
            //***********************************************************************************************************/
            data[i].rCurrTol = functions.createCustomVariable(i, "rCurrSet", data[i].udtHeat, "rCurrTolSet (Tolerance)", "ZEEX_3111_Parameter", "udtCmPzPid", "udtHeat", "rCurrTol", undefined, undefined);
            //Extruder ==> Expert Settings ==> PID Parameters ==> Current Heat: "Tolerance-Set" //
            data[i].rCurrTolSet = functions.createCustomVariable(i, "rCurrSet", data[i].rCurrTol, "Set", "ZEEX_3111_Parameter", "udtCmPzPid", "udtHeat", "rCurrTol", "Set", undefined, undefined);
            //Extruder ==> Expert Settings ==> PID Parameters ==> Current Heat: "Tolerance-Max" //
            data[i].rCurrTolMax = functions.createCustomVariable(i, "rCurrSet", data[i].rCurrTol, "Max", "ZEEX_3111_Parameter", "udtCmPzPid", "udtHeat", "rCurrTol", "Max", undefined, undefined);
            //Extruder ==> Expert Settings ==> PID Parameters ==> Current Heat: "Tolerance-Min" //
            data[i].rCurrTolMin = functions.createCustomVariable(i, "rCurrSet", data[i].rCurrTol, "Min", "ZEEX_3111_Parameter", "udtCmPzPid", "udtHeat", "rCurrTol", "Min", undefined, undefined);
            //EXTRUDER EXPERT SETTING PID ProzessZonesParameters//
            //***********************************************************************************************************/
            //***********************************************************************************************************/
            //***********************************************************************************************************/
            //***********************************************************************************************************/
            //Extruder ==> Expert Settings ==> Prozess Zones/Parameter ==> Limits:"Warning H" //
            data[i].rTempH = functions.createCustomVariable(i, "rTempH", data[i].nr5, "rTempH (Warning H)", "ZEEX_3111_Parameter", "udtEmPz", "rTempH", undefined, undefined, undefined, undefined);
            //Extruder ==> Expert Settings ==> Prozess Zones/Parameter ==> Limits:"Warning H-Set" //
            data[i].rTempHSet = functions.createCustomVariable(i, "rTempHSet", data[i].rTempH, "Set", "ZEEX_3111_Parameter", "udtEmPz", "rTempH", "Set", undefined, SetGetLogic.rTempHSetGet, SetGetLogic.rTempHSetSet);
            //Extruder ==> Expert Settings ==> Prozess Zones/Parameter ==> Limits:"Warning H-Max" //
            data[i].rTempHMax = functions.createCustomVariable(i, "rTempHMax", data[i].rTempH, "Max", "ZEEX_3111_Parameter", "udtEmPz", "rTempH", "Max", undefined, SetGetLogic.rTempHMaxGet, undefined);
            //Extruder ==> Expert Settings ==> Prozess Zones/Parameter ==> Limits:"Warning H-Min" //
            data[i].rTempHMin = functions.createCustomVariable(i, "rTempHMin", data[i].rTempH, "Min", "ZEEX_3111_Parameter", "udtEmPz", "rTempH", "Min", undefined, SetGetLogic.rTempHMinGet, undefined);
            //***********************************************************************************************************/
            //Extruder ==> Expert Settings ==> Prozess Zones/Parameter ==> Limits:"Alarm HH" //
            data[i].rTempHH = functions.createCustomVariable(i, "rTempHH", data[i].nr5, "rTempHH (AlarmHH)", "ZEEX_3111_Parameter", "udtEmPz", "rTempHH", undefined, undefined, undefined, undefined);
            //Extruder ==> Expert Settings ==> Prozess Zones/Parameter ==> Limits:"Alarm HH-Set" //
            data[i].rTempHHSet = functions.createCustomVariable(i, "rTempHHSet", data[i].rTempHH, "Set", "ZEEX_3111_Parameter", "udtEmPz", "rTempHH", "Set", undefined, SetGetLogic.rTempHHSetGet, undefined);
            //Extruder ==> Expert Settings ==> Prozess Zones/Parameter ==> Limits:"Alarm HH-Max" //
            data[i].rTempHHMax = functions.createCustomVariable(i, "rTempHHMax", data[i].rTempHH, "Max", "ZEEX_3111_Parameter", "udtEmPz", "rTempHH", "Max", undefined, SetGetLogic.rTempHHMaxGet, undefined);
            //Extruder ==> Expert Settings ==> Prozess Zones/Parameter ==> Limits:"Alarm HH-Min" //
            data[i].rTempHHMin = functions.createCustomVariable(i, "rTempHHMin", data[i].rTempHH, "Min", "ZEEX_3111_Parameter", "udtEmPz", "rTempHH", "Min", undefined, SetGetLogic.rTempHHMinGet, undefined);
            //***********************************************************************************************************/
            //Extruder ==> Expert Settings ==> Prozess Zones/Parameter ==> Limits:"Tolerance H" //
            data[i].rSetTolH = functions.createCustomVariable(i, "rSetTolH", data[i].nr5, "rSetTolH (Tolerance H)", "ZEEX_3111_Parameter", "udtEmPz", "rTempTolH", undefined, undefined, undefined, undefined);
            //Extruder ==> Expert Settings ==> Prozess Zones/Parameter ==> Limits:"Tolerance H-Set" //
            data[i].rSetTolHSet = functions.createCustomVariable(i, "rSetTolHSet", data[i].rSetTolH, "Set", "ZEEX_3111_Parameter", "udtEmPz", "rTempTolH", "Set", undefined, SetGetLogic.rSetTolHSetGet, SetGetLogic.rSetTolHSetSet);
            //Extruder ==> Expert Settings ==> Prozess Zones/Parameter ==> Limits:"Tolerance H-Max" //
            data[i].rSetTolHMax = functions.createCustomVariable(i, "rSetTolHMax", data[i].rSetTolH, "Max", "ZEEX_3111_Parameter", "udtEmPz", "rTempTolH", "Max", undefined, SetGetLogic.rSetTolHMaxGet, undefined);
            //Extruder ==> Expert Settings ==> Prozess Zones/Parameter ==> Limits:"Tolerance H-Min" //
            data[i].rSetTolHMin = functions.createCustomVariable(i, "rSetTolHMin", data[i].rSetTolH, "Min", "ZEEX_3111_Parameter", "udtEmPz", "rTempTolH", "Min", undefined, SetGetLogic.rSetTolHMinGet, undefined);
            //***********************************************************************************************************/
            //Extruder ==> Expert Settings ==> Prozess Zones/Parameter ==> Limits:"Tolerance HH" //
            data[i].rSetTolHH = functions.createCustomVariable(i, "rSetTolHH", data[i].nr5, "rSetTolHH (Tolerance HH)", "ZEEX_3111_Parameter", "udtEmPz", "rTempTolHH", undefined, undefined, undefined, undefined);
            //Extruder ==> Expert Settings ==> Prozess Zones/Parameter ==> Limits:"Tolerance HH-Set" //
            data[i].rSetTolHHSet = functions.createCustomVariable(i, "rSetTolHHSet", data[i].rSetTolHH, "Set", "ZEEX_3111_Parameter", "udtEmPz", "rTempTolHH", "Set", undefined, SetGetLogic.rSetTolHHSetGet, undefined);
            //Extruder ==> Expert Settings ==> Prozess Zones/Parameter ==> Limits:"Tolerance HH-Max" //
            data[i].rSetTolHHMax = functions.createCustomVariable(i, "rSetTolHHMax", data[i].rSetTolHH, "Max", "ZEEX_3111_Parameter", "udtEmPz", "rTempTolHH", "Max", undefined, SetGetLogic.rSetTolHHMaxGet, undefined);
            //Extruder ==> Expert Settings ==> Prozess Zones/Parameter ==> Limits:"Tolerance HH-Min" //
            data[i].rSetTolHHMin = functions.createCustomVariable(i, "rSetTolHHMin", data[i].rSetTolHH, "Min", "ZEEX_3111_Parameter", "udtEmPz", "rTempTolHH", "Min", undefined, SetGetLogic.rSetTolHHMinGet, undefined);
            //***********************************************************************************************************/
            //Extruder ==> Expert Settings ==> Prozess Zones/Parameter ==> Parameter:"Temp. Cool Down" //
            data[i].rTempCooldown = functions.createCustomVariable(i, "rTempCooldown", data[i].nr5, "rTempCooldown", "ZEEX_3111_Parameter", "udtEmPz", "rTempCooldown", undefined, undefined, undefined, undefined);
            //Extruder ==> Expert Settings ==> Prozess Zones/Parameter ==> Parameter:"Temp. Cool Down-Set" //
            data[i].rTempCooldownSet = functions.createCustomVariable(i, "rTempCooldownSet", data[i].rTempCooldown, "Set", "ZEEX_3111_Parameter", "udtEmPz", "rTempCooldown", "Set", undefined, SetGetLogic.rTempCooldownSetGet, undefined);
            //Extruder ==> Expert Settings ==> Prozess Zones/Parameter ==> Parameter:"Temp. Cool Down-Max" //
            data[i].rTempCooldownMax = functions.createCustomVariable(i, "rTempCooldownMax", data[i].rTempCooldown, "Max", "ZEEX_3111_Parameter", "udtEmPz", "rTempCooldown", "Max", undefined, SetGetLogic.rTempCooldownMaxGet, undefined);
            //Extruder ==> Expert Settings ==> Prozess Zones/Parameter ==> Parameter:"Temp. Cool Down-Min" //
            data[i].rTempCooldowHMin = functions.createCustomVariable(i, "rTempCooldownMin", data[i].rTempCooldown, "Min", "ZEEX_3111_Parameter", "udtEmPz", "rTempCooldown", "Min", undefined, SetGetLogic.rTempCooldownMinGet, undefined);
            //***********************************************************************************************************/
            //Extruder ==> Expert Settings ==> Prozess Zones/Parameter ==> Parameter:"Temp. Ramp Factor" //
            data[i].rTempRampFactor = functions.createCustomVariable(i, "rTempRampFactor", data[i].nr5, "rTempRampFactor", "ZEEX_3111_Parameter", "udtEmPz", "rTempRampFactor", undefined, undefined, undefined, undefined);
            //Extruder ==> Expert Settings ==> Prozess Zones/Parameter ==> Parameter:"Temp. Ramp Factor-Set" //
            data[i].rTempRampFactorSet = functions.createCustomVariable(i, "rTempRampFactorSet", data[i].rTempRampFactor, "Set", "ZEEX_3111_Parameter", "udtEmPz", "rTempRampFactor", "Set", undefined, SetGetLogic.rTempRampFactorSetGet, undefined);
            //Extruder ==> Expert Settings ==> Prozess Zones/Parameter ==> Parameter:"Temp. Ramp Factor-Max" //
            data[i].rTempRampFactorMax = functions.createCustomVariable(i, "rTempRampFactorMax", data[i].rTempRampFactor, "Max", "ZEEX_3111_Parameter", "udtEmPz", "rTempRampFactor", "Max", undefined, SetGetLogic.rTempRampFactorMaxGet, undefined);
            //Extruder ==> Expert Settings ==> Prozess Zones/Parameter ==> Parameter:"Temp. Ramp Factor-Min" //
            data[i].rTempRampFactorMin = functions.createCustomVariable(i, "rTempRampFactorMin", data[i].rTempRampFactor, "Min", "ZEEX_3111_Parameter", "udtEmPz", "rTempRampFactor", "Min", undefined, SetGetLogic.rTempRampFactorMinGet, undefined);
            //******************************************************************************************* 
            //Extruder ==> Expert Settings ==> Prozess Zones/Parameter ==> Parameter:"Temp. Heatup" //
            data[i].rTempHeatup = functions.createCustomVariable(i, "rTempHeatup", data[i].nr5, "rTempHeatup", "ZEEX_3111_Parameter", "udtEmPz", "rTempHeatup", undefined, undefined, undefined, undefined);
            //Extruder ==> Expert Settings ==> Prozess Zones/Parameter ==> Parameter:"Temp. Heatup-Set" //
            data[i].rTempHeatupSet = functions.createCustomVariable(i, "rTempHeatupSet", data[i].rTempHeatup, "Set", "ZEEX_3111_Parameter", "udtEmPz", "rTempHeatup", "Set", undefined, SetGetLogic.rTempHeatupSetGet, undefined);
            //Extruder ==> Expert Settings ==> Prozess Zones/Parameter ==> Parameter:"Temp. Heatup-Max" //
            data[i].rTempHeatupMax = functions.createCustomVariable(i, "rTempHeatupMax", data[i].rTempHeatup, "Max", "ZEEX_3111_Parameter", "udtEmPz", "rTempHeatup", "Max", undefined, SetGetLogic.rTempHeatupMaxGet, undefined);
            //Extruder ==> Expert Settings ==> Prozess Zones/Parameter ==> Parameter:"Temp. Heatup-Min" //
            data[i].rTempHeatupMin = functions.createCustomVariable(i, "rTempHeatupMin", data[i].rTempHeatup, "Min", "ZEEX_3111_Parameter", "udtEmPz", "rTempHeatup", "Min", undefined, SetGetLogic.rTempHeatupMinGet, undefined);
            //*******************************************************************************************
            //Extruder ==> Expert Settings ==> Prozess Zones/Parameter ==> Parameter:"Temp.Release" //
            data[i].rTempRelease = functions.createCustomVariable(i, "rTempHeatup", data[i].nr5, "rTempRel", "ZEEX_3111_Parameter", "udtEmPz", "rTempRel", undefined, undefined, undefined);
            //Extruder ==> Expert Settings ==> Prozess Zones/Parameter ==> Parameter:"Temp.Release-Set" //
            data[i].rTempReleaseSet = functions.createCustomVariable(i, "rTempReleaseSet", data[i].rTempRelease, "Set", "ZEEX_3111_Parameter", "udtEmPz", "rTempRel", "Set", undefined, SetGetLogic.rTempReleaseSetGet, undefined);
            //Extruder ==> Expert Settings ==> Prozess Zones/Parameter ==> Parameter:"Temp.Release-Max" //
            data[i].rTempReleaseMax = functions.createCustomVariable(i, "rTempReleaseMax", data[i].rTempRelease, "Max", "ZEEX_3111_Parameter", "udtEmPz", "rTempRel", "Max", undefined, SetGetLogic.rTempReleaseMaxGet, undefined);
            //Extruder ==> Expert Settings ==> Prozess Zones/Parameter ==> Parameter:"Temp.Release-Min" //
            data[i].rTempReleaseMin = functions.createCustomVariable(i, "rTempReleaseMin", data[i].rTempRelease, "Min", "ZEEX_3111_Parameter", "udtEmPz", "rTempRel", "Min", undefined, SetGetLogic.rTempReleaseMinGet, undefined);
            //*******************************************************************************************
            //Extruder ==> Expert Settings ==> Prozess Zones/Parameter ==> Parameter:"Time.Release" /
            data[i].udTimeRel = functions.createCustomVariable(i, "rTempHeatup", data[i].nr5, "udTimeRel", "ZEEX_3111_Parameter", "udtEmPz", "udTimeRel", undefined, undefined, undefined, undefined);
            //Extruder ==> Expert Settings ==> Prozess Zones/Parameter ==> Parameter:"Time.Release-Set" //
            data[i].udTimeRelSet = functions.createCustomVariable(i, "udTimeRelSet", data[i].udTimeRel, "Set", "ZEEX_3111_Parameter", "udtEmPz", "udTimeRel", "Set", undefined, SetGetLogic.udTimeRelSetGet, undefined);
            //Extruder ==> Expert Settings ==> Prozess Zones/Parameter ==> Parameter:"Time.Release-Max" //
            data[i].udTimeRelMax = functions.createCustomVariable(i, "udTimeRelMax", data[i].udTimeRel, "Max", "ZEEX_3111_Parameter", "udtEmPz", "udTimeRel", "Max", undefined, SetGetLogic.udTimeRelMaxGet, undefined);
            //Extruder ==> Expert Settings ==> Prozess Zones/Parameter ==> Parameter:"Time.Release-Min" //
            data[i].udTimeRelMin = functions.createCustomVariable(i, "udTimeRelMin", data[i].udTimeRel, "Min", "ZEEX_3111_Parameter", "udtEmPz", "udTimeRel", "Min", undefined, SetGetLogic.udTimeRelMinGet, undefined);

        }


        module.exports = {
            data: data

        }




    }



    //console.log("kann ich auslesen hier aber punkt 222222" +rOpMaxObj)


    module.exports = {
        run1: run1,


    }