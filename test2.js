var { initial } = require('./../opcua-demo-server/funktionen');
var { initialSingleValue } = require('./../opcua-demo-server/funktionen');
const funktionen = require('./../opcua-demo-server/funktionen'); // Pfade entsprechend anpassen, falls nötig

var serverModule = require('./server');
var serverValues = serverModule.serverValues;
let previousRAct; // Hinzufügen dieser Zeile
const SetGetlogic = {
    let previousRAct = [];
  SU2110_Feeding_Hmi_udtEmFeeder_rSpeed_dwStatGet: function (i, nameNodeId, serverValues) {
    initial("SU2110_Feeding_Hmi_udtEmFeeder_rSpeed_dwStat", 13, {}, i, nameNodeId, serverValues);

  
  
    setTimeout(function () {
  
        var werte = require('./profiles/simulation/variables/Variabeln');
        // Variablenwerte lesen
        var rAct = serverValues[werte.data[i].SU2110_Feeding_Hmi_udtEmFeeder_rSpeed_rAct.nodeId.value];
        const rSetTolMin = serverValues[werte.data[i].SU2110_Feeding_Hmi_udtEmFeeder_rLevel_rSetTolMin.nodeId.value];
        const rSetTolMinMin = serverValues[werte.data[i].SU2110_Feeding_Hmi_udtEmFeeder_rLevel_rSetTolMinMin.nodeId.value];
        const rSetTolMax = serverValues[werte.data[i].SU2110_Feeding_Hmi_udtEmFeeder_rLevel_rSetTolMax.nodeId.value];
        const rSetTolMaxMax = serverValues[werte.data[i].SU2110_Feeding_Hmi_udtEmFeeder_rLevel_rSetTolMaxMax.nodeId.value];
        let setThroughput = serverValues[werte.data[i].SU2110_Feeding_Hmi_udtEmFeeder_rThroughput_rSet.nodeId.value];
        let dwStat = serverValues[werte.data[i].SU2110_Feeding_Hmi_udtEmFeeder_rSpeed_dwStat.nodeId.value];
  
  
        if (rAct > previousRAct[i]) {
          dwStat |= (1 << 23);  // Wert sinkt, setzt das Bit 23
          dwStat &= ~(1 << 22); // Löscht das Bit 22
        } else if (rAct < previousRAct[i]) {
          dwStat |= (1 << 22);  // Wert steigt, setzt das Bit 22
          dwStat &= ~(1 << 23); // Löscht das Bit 23
        } else {
          dwStat &= ~(1 << 23); // Löscht das Bit 23
          dwStat &= ~(1 << 22); // Löscht das Bit 22
        }
      
  
      previousRAct = rAct;  // Wert von rAct speichern für den nächsten Funktionsaufruf
  console.log(" previousRAct   ", previousRAct)
        // Bit 16 setzen, wenn rAct kleiner als rSetTolMin ist
        if (rAct < rSetTolMin) {
          dwStat |= (1 << 16);  // Setzt das 16. Bit
        }
  
        if (rAct < rSetTolMinMin && rAct > rSetTolMin) {
          dwStat |= (1 << 17);         // Setzt das 17. Bit
          dwStat &= ~(1 << 16);        // Löscht das 16. Bit
        }
  
        if (rAct > rSetTolMinMin && rAct < rSetTolMax) {
          dwStat &= ~((1 << 16) | (1 << 17));  // Löscht sowohl das 16. als auch das 17. Bit
        }
        if (rAct > rSetTolMax && rAct < rSetTolMaxMax) {
          dwStat |= (1 << 17)
        }
        if (rAct > rSetTolMaxMax) {
          dwStat |= (1 << 16)
        }
        if (rAct === 0) {
          dwStat &= ~((1 << 16) | (1 << 17));  // Löscht das 16. und 17. Bit
        }
        // Aktualisieren Sie den Wert von dwStat in serverValues
        serverValues[werte.data[i].SU2110_Feeding_Hmi_udtEmFeeder_rSpeed_dwStat.nodeId.value] = dwStat;
      }, 600); // 3000 Millisekunden entsprechen 3 Sekunden
  
  
    }

}

module.exports = {
  SetGetlogic: SetGetlogic,

}