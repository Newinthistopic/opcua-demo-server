
var { SetGetlogic } = require('../../../Setter_Getter_Logiken')
const functions = require('../../../funktionen');

function run1(addressSpace, device, opcua, verbose, serverValues,) {
    var data = {};
       data.SU3111_ZeExtruder_Hmi_udtUm_dwStat = functions.Uint32createCustomVariable(undefined, "SU3111_ZeExtruder_Hmi_udtUm_dwStat", SU3111_ZeExtruder_Hmi_udtUm, "dwStat", "SU3111_ZeExtruder.Hmi", "udtUm", "dwStat", undefined, undefined, SetGetlogic.SU3111_ZeExtruder_Hmi_udtUm_dwStatGet, SetGetlogic.SU3111_ZeExtruder_Hmi_udtUm_dwStatSet)
      module.exports = {
        data: data
    }
}
module.exports = {
    run1: run1,
}





const funktionen = require('./../opcua-demo-server/funktionen'); 
const alarms_warnings_funktionen = require('./alarme_warnungen_funktionen'); 
var sharedState = require('./Zustände');

const SetGetlogic = {
    SU3111_ZeExtruder_Hmi_udtUm_dwStatGet: function (i, nameNodeId, serverValues) { funktionen.initialSingleValue("SU3111_ZeExtruder_Hmi_udtUm_dwStat", 1048589, nameNodeId, serverValues); },
  SU3111_ZeExtruder_Hmi_udtUm_dwStatSet: function (i, nameNodeId, serverValues) { funktionen.initialSingleValue("SU3111_ZeExtruder_Hmi_udtUm_dwStat", undefined, nameNodeId, serverValues); },
  }
module.exports = {
  SetGetlogic: SetGetlogic,
}










var {serverValues, opcua, namespace3} = require('./../opcua-demo-server/server');

var sharedState = require('./Zustände');

function createCustomVariable(i, variableName, componentOf, browseName, part1, part2, part3, part4, part5, customGetLogic, customSetLogic) {
  var nodeId = `"ns=3;s=\"${part1}\".\"${part2}\"`;

  if (i !== undefined) {
    nodeId += `[${i}]`;
  }
  if (part3) {
    nodeId += `.\"${part3}\"`;
  }
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


        if (customGetLogic) {
          customGetLogic(i, nameNodeId, serverValues);
        }

        return new opcua.Variant({ dataType: opcua.DataType.Float, value: serverValues[nameNodeId[variableName + "NodeId"]] });

      },
      set: function (variant) {
        var nameNodeId = {};
        nameNodeId[variableName + "NodeId"] = this.nodeId.value;
        serverValues[nameNodeId[variableName + "NodeId"]] = parseFloat(variant.value);
        if (customSetLogic) {
          customSetLogic(i, nameNodeId, serverValues);
        }
        return opcua.StatusCodes.Good;
      }
    },
  });

  return newVariable[variableName];
}




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







let InitialValueRemainTimeFollowUp = null;


const BIT_POSITIONS = {
    TargetScrewSpeedCalculation_direct_specRate: 8, //FLASE: Spec. throughput [kg/h/rpm]    (Throughput [kg/h] / Spec. throughput [kg/h/rpm] = Speed [rpm]    TRUE: Absolut setpoint [rpm]; https://kraussmaffei.atlassian.net/wiki/spaces/GHD/pages/3105325128/udt+Hmi+emExtruderDriveCtrl
    Setpoint_value_is_visible: 11, // TRUE: Setpoint value is visible; https://kraussmaffei.atlassian.net/wiki/spaces/GHD/pages/3105325158/udt+Hmi+cmHmiValues
    Setpoint_input_of_Hmi_is_active: 13,// TRUE: Setpoint input of Hmi is active; https://kraussmaffei.atlassian.net/wiki/spaces/GHD/pages/3105325158/udt+Hmi+cmHmiValues
    MainDrive_On_Off: 11, //TRUE: Main drive is running    FALSE: Main drive is off; https://kraussmaffei.atlassian.net/wiki/spaces/GHD/pages/3105325128/udt+Hmi+emExtruderDriveCtrl

    GearOilLubrication_Button_is_On_Off: 11,
    GearOilLubrication_Button_Lock_OFF_Status: 10,

    Tolerance_monitoring_is_active: 15, //TRUE: Tolerance monitoring is active; https://kraussmaffei.atlassian.net/wiki/spaces/GHD/pages/3105325158/udt+Hmi+cmHmiValues
    Out_of_tolerance_MaxMax: 16, // TRUE: Out of tolerance MaxMax;https://kraussmaffei.atlassian.net/wiki/spaces/GHD/pages/3105325158/udt+Hmi+cmHmiValues
    Out_of_tolerance_Max: 17, // TRUE: Out of tolerance Max
    Actual_value_tendence_is_down: 23, // TRUE: Actual value tendence is down
    Actual_value_tendence_is_up: 22, // TRUE: Actual value tendence is up
    Tolreances_are_absolute: 14, // TRUE: Tolreances are absolute


    Status_feeder_is_On_Off: 11, // TRUE: Status feeder is on;https://kraussmaffei.atlassian.net/wiki/spaces/GHD/pages/3123576919/udt+Hmi+emFeederRawMaterial
    Feeder_Button_Lock_On_Status: 9,

    Status_AutoStart_Side_Feeder_is_On_Off: 15,

    Status_Side_Feeder_is_On_Off: 11,

    statemachine: {
        Idle: 5,
        Running: 3,
        Stopped: 4,
        E_Stop_Pressed: 1,
        E_Stop_Released: 2,
        Preheating: 2
    }
    ,
    statemachine_navigationbar: {
        Stopped: 4,
        Running: 5,
        Warning: 2,
        Error: 1,
        Critical: 0
    },


    Status_Auto_Start_On_Off: 8,
    Lock_On_Off_Status_of_AutoStop_Button: 12,
    Lock_On_Off_Status_of_AutoStart_Button: 9,
    Status_Auto_Stop_On: 13,
    Status_Auto_Start_On: 10,

    Lock_On_Off_Status_of_Start_Button: 6,
    Lock_On_Off_Status_of_CoolDown_Button: 24,
    Lock_On_Off_Status_of_ShutDown_Button: 13,

    Lock_On_Off_Status_of_RampOn_Button: 1
};

const buttonPushed = {
    Speed_calculation_with_spec_throughput: 16, //TRUE (Impulse): Speed calculation with spec. throughput; https://kraussmaffei.atlassian.net/wiki/spaces/GHD/pages/3105325128/udt+Hmi+emExtruderDriveCtrl
    Speed_calculation_with_absolut_speed: 32, // TRUE (Impulse): Speed calculation with absolut speed; https://kraussmaffei.atlassian.net/wiki/spaces/GHD/pages/3105325128/udt+Hmi+emExtruderDriveCtrl

    ExtruderOn: 32, // TRUE: Start operation; https://kraussmaffei.atlassian.net/wiki/spaces/GHD/pages/3111715028/cmOpStartStop
    ExtruderOff: 64, // TRUE: Stop operation; https://kraussmaffei.atlassian.net/wiki/spaces/GHD/pages/3111715028/cmOpStartStop

    GearOilLubricationOn: 32,
    GearOilLubricationOff: 64,

    FeederOn: 32,
    FeederOff: 64,

    Feeding_Auto_Start_Feeder_On: 256,
    Feeding_Auto_Start_Feeder_On: 0,
    Feeding_Auto_Stop: 320,
    Feeding_AutoStart: 288,
    Feeding_Stop_Feeding1: 8,
    Feeding_Stop_Feeding2: 256,
    Feeding_Stop_Feeding3: 264,

    AutoStart_Side_Feeder_On: 32768,
    AutoStart_Side_Feeder_Off: 0,

    Side_Feeder_On: 32,
    Side_Feeder_Off: 64,

    ApplyChanges1: 32768,
    ApplyChanges2: 33024,

    StartWizzard_start: 128,
    StartWizzard_coolDown: 32768,
    StartWizzard_shutDown: 131072,

    LineRamp_Off: 4,
    LineRamp_On: 2

}


const Alarms_Warnings = {

    ExtruderDriveControl: {
        
            Warning_Torque_too_high_shutdown_timer_started: 10,
            Warning_Torque_too_low_shutdown_timer_started: 11,
               
            Alarm_Torque_too_high_delay_shutdown_time_expired: 5,
            Alarm_Torque_too_low_delay_shutdown_time_expired: 6,
        }
    }


const feeders = [
    null, // Platzhalter für Index 0
    { FeederLineMode: false, FeederSingleMode: true, FeederRecyclingMode: false, FeederSetupMode: false, FeederisRunning: false, FeederisOff: true }, // Zustand für Feeder 1
    { FeederLineMode: false, FeederSingleMode: true, FeederRecyclingMode: false, FeederSetupMode: false, FeederisRunning: false, FeederisOff: true }, // Zustand für Feeder 2
    { FeederLineMode: false, FeederSingleMode: true, FeederRecyclingMode: false, FeederSetupMode: false, FeederisRunning: false, FeederisOff: true }, // Zustand für Feeder 3
    { FeederLineMode: false, FeederSingleMode: true, FeederRecyclingMode: false, FeederSetupMode: false, FeederisRunning: false, FeederisOff: true }  // Zustand für Feeder 4
]

const status_Alarms_Warnings={
    ExtruderDriveControl:{
        status_Warning_Torque_too_low_shutdown_timer_started:false,
        status_Warning_Torque_too_high_shutdown_timer_started:false,
    }
}


module.exports = {
    BIT_POSITIONS,
    buttonPushed,
    Alarms_Warnings,
    status_Alarms_Warnings,
    HeatingisOn: false,
    CoolingisOn: false,
    CoolingisOff: true,
    ShutdownisOn: false,

    ExtruderisOn: false,
    ExtruderisOff: true,
    feeders,

    FeedingisOn: false, // bezieht sich auf alle Feder, sobald ein Feeder an ist, egal welchen Modus

    SideFeederisOn: false,
    SideFeederisOff: true,
    minimumOneFeederLineMode: false,
    FeederRampModeisOn: false,
    FeederRampModeisOff: true,
    stopStartFeeder: false,

    simulateFeederWeightisRunning: false,

   


    feedingautostartButtons: {

        autoStop: true,
        autoStart: false,
        autoStartFeeder: false,  // false für "X", true für "✔"
        stopFeeding: false

    },


    intervalIds: {
        stopSimulateFeederSingle: false,
        stopSimulateFeederLine: false,
        stopSimulateFeederWeight: false,
        stopsimulateLineMode: false,
        stopAdjustThroughput: false,
        stopSimulateLineMode: false,
        stopSimulateThroughputRampLine: false,

    },


    SpeedCalculationDirectisOn: true,
    SpeedCalculationSpecRateisOn: false,


    AutoStartSideFeederisOn: false,
    AutoStartSideFeederisOff: true,



    ProzesszonesAreReady: false,
    ProzesszonesAreOff: false,


    GearOilLubricationOn: false,
    GearOilLubricationOff: true,
    GearOilRemainPreRunTimeExpired: false,
    GearOilRemainTimeFollowUpExpired: false,

    InitialValueRemainTimeFollowUp: InitialValueRemainTimeFollowUp


};

value      : {
  get: function () {
       HIER DIE LOGIK EINFÜGEN
       return new opcua.Variant({dataType: opcua.DataType.Double, value: serverValues[name]});
  },
  set: function (variant) {
       serverValues[name] = parseFloat(variant.value);
       HIER DIE LOGIK EINFÜGEN
       return opcua.StatusCodes.Good;
  }
}