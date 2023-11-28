var sharedState = require('./Zustände');
const funktionen = require('./funktionen');

// Globale Zustandsvariable
let isTimerRunning = false;

function Timer_Alarm_Warning_shutdown_Extruder(i, nameNodeId, serverValues) {
    // Verhindern, dass der Timer mehrmals gestartet wird
    if (isTimerRunning) {
               return;
    }
    var werte = require('./profiles/simulation/variables/Variablen');
    let startValue = serverValues[werte.data.SU3111_ZeExtruder_Parameter_udtEmExtruderDriveCtrl_udScrewTorqueLTime_Set.nodeId.value];
    let timerValue = startValue;

    function start_Timer_Alarm_Warning_shutdown_Extruder() {
        console.log("Timer für Index " + i + ": ", timerValue);
        timerValue--;

        // Timer beendet oder Bedingungen geändert
        if ( !sharedState.status_Alarms_Warnings.ExtruderDriveControl.status_Warning_Torque_too_low_shutdown_timer_started && !sharedState.status_Alarms_Warnings.ExtruderDriveControl.status_Warning_Torque_too_high_shutdown_timer_started) {
            clearInterval(intervalId);
            isTimerRunning = false;
            console.log("Timer für Index " + i + " abgelaufen oder Bedingungen geändert.");
                  
        }

       if(timerValue <= 0){
        clearInterval(intervalId);
        isTimerRunning = true;
        isTimerRunning = false;
        console.log("Timer abgelaufen, Extruder fährt runter")

        sharedState.ExtruderisOff=true; 
        sharedState.ExtruderisOn=false;

        serverValues[werte.data.SU3111_ZeExtruder_Hmi_udtEmExtruderDriveCtrl_rScrewSpeed_rSet.nodeId.value] = 0 // Endwert bzw. Setwert
      funktionen.simulateScrewSpeed(i, nameNodeId, serverValues) // Funktion wird neu gestartet mit Set Wert 0, Extruder fährt auf Null runter

      // Alle Feeder werden aus gemacht
      for (let i = 1; i <= 4; i++) {
        sharedState.feeders[i].FeederisRunning = false;
        sharedState.feeders[i].FeederisOff = true;
    }
    
      // Das ist die Abruchbedingung für alle Funktionen, die zum Feeder gehören.
      sharedState.intervalIds.stopSimulateFeederSingle = true;
      sharedState.intervalIds.stopSimulateFeederWeight = true;
      sharedState.intervalIds.stopSimulateThroughputRampLine = true;
      sharedState.intervalIds.stopAdjustThroughput = true;
      sharedState.intervalIds.stopSimulateLineMode = true;

      setTimeout(function () {
        sharedState.intervalIds.stopSimulateFeederSingle = false;
        sharedState.intervalIds.stopSimulateFeederWeight = false;
        sharedState.intervalIds.stopSimulateThroughputRampLine = false;
        sharedState.intervalIds.stopAdjustThroughput = false;
        sharedState.intervalIds.stopSimulateLineMode = false;

      }, 1500); // 5000 Millisekunden oder 5 Sekunden
      
       }
    }
    // Timer gestartet
    let intervalId = setInterval(start_Timer_Alarm_Warning_shutdown_Extruder, 1000);
    isTimerRunning = true;
    console.log("Timer gestartet für Index " + i + " mit Startwert: " + startValue);

    return intervalId;
}
// Export der Funktion, falls erforderlich
module.exports = {
    Timer_Alarm_Warning_shutdown_Extruder
};
