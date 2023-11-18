
const { writeTCPMessageHeader } = require('node-opcua');
var serverModule = require('./../opcua-demo-server/server');

var sharedState = require('./sharedState');

var addressSpace = serverModule.addressSpace;
var namespace2 = serverModule.namespace2;
var namespace3 = serverModule.namespace3;
var opcua = serverModule.opcua;
var serverValues = serverModule.serverValues;
const funktionen = require('./../opcua-demo-server/funktionen'); // Pfade entsprechend anpassen, falls nötig


// Globale Zustandsvariable
let isTimerRunning = false;


function Timer_Alarm_Warning_shutdown_Extruder(i, nameNodeId, serverValues) {
    var werte = require('./profiles/simulation/variables/Variabeln');


  // Verhindern, dass der Timer mehrmals gestartet wird
  if (isTimerRunning) {
    return;
}


    // Startwert für den Timer aus der serverValues-Variable holen
    let startValue = serverValues[werte.data.SU3111_ZeExtruder_Parameter_udtEmExtruderDriveCtrl_udScrewTorqueLTime_Set.nodeId.value];
    let timerValue = startValue;
   


    
    function start_Timer_Alarm_Warning_shutdown_Extruder() {
        console.log("Timer für Index " + i + ": ", timerValue);
        timerValue--;

        // 1. Abbruchbedingung
        if (!sharedState.status_Alarms_Warnings.Warning_Torque_too_low_shutdown_timer_started && 
            !sharedState.status_Alarms_Warnings.Warning_Torque_too_high_shutdown_timer_started) {
            console.log("Warnungszustände sind nicht mehr aktiv. Timer wird gestoppt.");
            clearInterval(intervalId);
            isTimerRunning = false;
            return;
        }

        // 2. Abbruchbedingung 
        if (timerValue <= 0 || !sharedState.status_Alarms_Warnings.Warning_Torque_too_low_shutdown_timer_started && !sharedState.status_Alarms_Warnings.Warning_Torque_too_high_shutdown_timer_started) {
            clearInterval(intervalId);
            console.log("Timer abgelaufen")
            serverValues[werte.data.SU3111_ZeExtruder_Hmi_udtEmExtruderDriveCtrl_rScrewSpeed_rSet.nodeId.value] = 0 // Endwert bzw. Setwert
            funktionen.simulateScrewSpeed(i, nameNodeId, serverValues)
      
            for (let i = 1; i <= 4; i++) {
              serverValues[werte.data[i].SU2110_Feeding_Hmi_udtEmFeeder_rThroughput_rAct.nodeId.value] = 0;
              serverValues[werte.data[i].SU2110_Feeding_Hmi_udtEmFeeder_rSpeed_rAct.nodeId.value] = 0;
      
            }
           
         
            // Das ist die Abruchbedingung für alle Funktionen, die zum Feeder gehören.
            sharedState.intervalIds.stopSimulateFeederSingle = true
            sharedState.intervalIds.stopSimulateFeederWeight = true,
              sharedState.intervalIds.stopsimulateLineMode = true,
              sharedState.intervalIds.stopAdjustThroughput = true
            sharedState.intervalIds.stopSimulateLineMode = true,
              sharedState.intervalIds.stopSimulateThroughputRampLine = true
            setTimeout(function () {
              sharedState.intervalIds.stopSimulateFeederSingle = false,
                sharedState.intervalIds.stopSimulateFeederWeight = false,
                sharedState.intervalIds.stopsimulateLineMode = false,
                sharedState.intervalIds.stopAdjustThroughput = false,
                sharedState.intervalIds.stopSimulateLineMode = false,
                sharedState.intervalIds.stopSimulateThroughputRampLine = false
            }, 1500); 
      


        }
    }

    let intervalId = setInterval(start_Timer_Alarm_Warning_shutdown_Extruder, 2000);
    isTimerRunning = true;
    return intervalId;
}



module.exports = {
    Timer_Alarm_Warning_shutdown_Extruder
};




