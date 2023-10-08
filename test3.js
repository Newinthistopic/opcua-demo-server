function startFeeder(i, nameNodeId, serverValues) {
  var werte = require('./profiles/simulation/variables/Variabeln');

  let currentThroughput = serverValues[werte.data[i].SU2110_Feeding_Hmi_udtEmFeeder_rThroughput_rAct.nodeId.value];

  function simulateFeeder() {
    let setThroughput = serverValues[werte.data[i].SU2110_Feeding_Hmi_udtEmFeeder_rThroughput_rSet.nodeId.value];
    let direction = (setThroughput > currentThroughput) ? 1 : -1;

    // Durchsatz in festgelegten Schritten ändern
    let inkrement = 1.135 * direction;
    currentThroughput += inkrement;

    // Wenn der aktuelle Durchsatz den eingestellten Wert erreicht oder überschreitet oder off geklickt wird
    if (serverValues[werte.data[i].SU2110_Feeding_Hmi_udtEmFeeder_udtButtonStartStop_dwCtrl.nodeId.value] === 64) {
      clearInterval(intervalId); // Simulation beenden
      console.log("Test ob ich rin binS")
      currentThroughput = 0
      serverValues[werte.data[i].SU2110_Feeding_Hmi_udtEmFeeder_rThroughput_rAct.nodeId.value] = currentThroughput
    } else if ((direction === 1 && currentThroughput >= setThroughput) || (direction === -1 && currentThroughput <= setThroughput)) {
      currentThroughput = setThroughput

      clearInterval(intervalId); // Simulation beenden
    }

    // Durchsatz aktualisieren
    serverValues[werte.data[i].SU2110_Feeding_Hmi_udtEmFeeder_rThroughput_rAct.nodeId.value] = currentThroughput;
    //Speed aktualisieren
    serverValues[werte.data[i].SU2110_Feeding_Hmi_udtEmFeeder_rSpeed_rAct.nodeId.value] = currentThroughput

  }

  // Starten Sie das Intervall hier innerhalb der startFeeder-Funktion und speichern Sie den IntervalID zur späteren Verwendung
  let intervalId = setInterval(simulateFeeder, 200);
}


module.exports = {
  createCustomVariable: createCustomVariable,
  initial: initial,
  Uint32createCustomVariable: Uint32createCustomVariable,
  Uint64createCustomVariable: Uint64createCustomVariable,
  Uint16createCustomVariable: Uint64createCustomVariable,
  initialSingleValue: initialSingleValue,
  PIDUP: PIDUP,
  PIDCOOLDOWN: PIDCOOLDOWN,
  getNumberWithBit: getNumberWithBit,
  simulateScrewSpeed: simulateScrewSpeed,
  PIDSHUTDOWN: PIDSHUTDOWN,
  createCustomVariableString: createCustomVariableString,
  startFeeder: startFeeder,
  simulateFeederWeight: simulateFeederWeight,
  OilLubUhr: OilLubUhr,
  updateRThroughputPercSetGesamt: updateRThroughputPercSetGesamt,
  simulateLineMode: simulateLineMode,
  updatedwstat: updatedwstat,
  simulateFeederThroughputLineRamp: simulateFeederThroughputLineRamp,
  dwStatStartWizzard: dwStatStartWizzard,
  StateMachine: StateMachine

}