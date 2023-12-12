// Import von notwendigen Modulen und Dateien
var sharedState = require('./states');
const funktionen = require('./funktionen');

// Eine globale Variable, um den Status des Timers zu verfolgen
let isTimerRunning = false;

// Definition der Hauptfunktion zum Herunterfahren des Extruders bei spezifischen Alarmbedingungen.
function Timer_Alarm_Warning_shutdown_Extruder(i, nameNodeId, serverValues) {
  // Überprüfen, ob der Timer bereits läuft, um Mehrfachausführungen zu verhindern.
  if (isTimerRunning) {
    return;  // Frühzeitiges Beenden der Funktion, falls der Timer schon läuft.
  }

  // Importieren von Variablendefinitionen aus einer externen Datei.
  var werte = require('./profiles/simulation/variables/Variablen');
  
  // Initialisieren des Timerwertes basierend auf einem Wert aus serverValues.
  let startValue = serverValues[werte.data.SU3111_ZeExtruder_Parameter_udtEmExtruderDriveCtrl_udScrewTorqueLTime_Set.nodeId.value];
  let timerValue = startValue; // Setzen des Startwerts für den Timer.

  // Definition der Funktion, die regelmäßig durch den Timer aufgerufen wird.
  function start_Timer_Alarm_Warning_shutdown_Extruder() {
    timerValue--;  // Dekrementieren des Timerwerts.
   
    // 1. Abbruchbedingung: Überprüfen, ob Warnungen (Torque zu niedrig/hoch) nicht mehr aktiv sind.
    if (!sharedState.status_Alarms_Warnings.Extruder_Drive_Control.status_Warning_Torque_too_low_shutdown_timer_started && !sharedState.status_Alarms_Warnings.Extruder_Drive_Control.status_Warning_Torque_too_high_shutdown_timer_started) {
      clearInterval(intervalId); // Stoppen des Timers, falls keine Warnungen mehr aktiv sind.
      isTimerRunning = false; // Zurücksetzen des Timer-Laufstatus.
    }

    // 2. Abbruchbedingung: Timerwert erreicht Null.
    if (timerValue <= 0) {
      clearInterval(intervalId); // Stoppen des Timers.
      isTimerRunning = false; // Zurücksetzen des Timer-Laufstatus.

      // Aktualisieren des Zustands im sharedState.
      sharedState.Process_states.Extruder_is_Off = true; // Extruder ist ausgeschaltet.
      sharedState.Process_states.Extruder_is_On = false; // Extruder ist nicht eingeschaltet.

      // Setzen der Extrudergeschwindigkeit auf Null.
      serverValues[werte.data.SU3111_ZeExtruder_Hmi_udtEmExtruderDriveCtrl_rScrewSpeed_rSet.nodeId.value] = 0;
      // Neustart der Schneckengeschwindigkeitssimulation mit dem Wert Null.
      funktionen.simulateScrewSpeed(i, nameNodeId, serverValues);

      // Ausschalten aller Feeder.
      for (let i = 1; i <= 4; i++) {
        sharedState.feeders[i].FeederisRunning = false;
        sharedState.feeders[i].FeederisOff = true;
        // Dieser Zustand ist für den gesamten Feeder. Ist ein Feeder an, so wird der Zustand auf true gesetzt, sind alle Feeder aus, so wird der Zustand auf false gesetzt
      sharedState.Feeding_is_On=false;
      }
      
      // Setzen der Abbruchbedingungen für die Feeder-Funktionen.
      sharedState.intervalIds.stop_Simulate_Feeder_Single = true;
      sharedState.intervalIds.stop_Simulate_Feeder_Weight = true;
      sharedState.intervalIds.stop_Simulate_Throughput_Ramp_Line = true;
      sharedState.intervalIds.stop_Adjust_Throughput = true;
      sharedState.intervalIds.stop_simulate_Line_Mode = true;

      // Rücksetzen der Abbruchbedingungen nach einer Verzögerung.
      setTimeout(function () {
        sharedState.intervalIds.stop_Simulate_Feeder_Single = false;
        sharedState.intervalIds.stop_Simulate_Feeder_Weight = false;
        sharedState.intervalIds.stop_Simulate_Throughput_Ramp_Line = false;
        sharedState.intervalIds.stop_Adjust_Throughput = false;
        sharedState.intervalIds.stop_simulate_Line_Mode = false;
      }, 1500); // Verzögerung von 1,5 Sekunden.
    }
  }

  // Starten des Timers, der jede Sekunde die Funktion aufruft.
  let intervalId = setInterval(start_Timer_Alarm_Warning_shutdown_Extruder, 1000);
  isTimerRunning = true; // Markieren, dass der Timer nun läuft.

  // Zurückgeben der Timer-ID für eventuelles späteres Referenzieren oder Stoppen.
  return intervalId;
}

// Exportieren der Funktion, damit sie in anderen Dateien verwendet werden kann
module.exports = {
  Timer_Alarm_Warning_shutdown_Extruder
};
