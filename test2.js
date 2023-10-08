var { initial } = require('./../opcua-demo-server/funktionen');

const funktionen = require('./../opcua-demo-server/funktionen'); 
var previousRAct=[]
const SetGetlogic = {
   
  SU2110_Feeding_Hmi_udtEmFeeder_rSpeed_dwStatGet: function (i, nameNodeId, serverValues) {
    
    initial("SU2110_Feeding_Hmi_udtEmFeeder_rSpeed_dwStat", 13, {}, i, nameNodeId, serverValues);

    var werte = require('./profiles/simulation/variables/Variabeln');
    setTimeout(function () {
  
      // Variablenwerte lesen
      var rAct = serverValues[werte.data[i].SU2110_Feeding_Hmi_udtEmFeeder_rSpeed_rAct.nodeId.value];
      const rSetTolMin = serverValues[werte.data[i].SU2110_Feeding_Hmi_udtEmFeeder_rLevel_rSetTolMin.nodeId.value];
      const rSetTolMinMin = serverValues[werte.data[i].SU2110_Feeding_Hmi_udtEmFeeder_rLevel_rSetTolMinMin.nodeId.value];
      const rSetTolMax = serverValues[werte.data[i].SU2110_Feeding_Hmi_udtEmFeeder_rLevel_rSetTolMax.nodeId.value];
      const rSetTolMaxMax = serverValues[werte.data[i].SU2110_Feeding_Hmi_udtEmFeeder_rLevel_rSetTolMaxMax.nodeId.value];
      let setThroughput = serverValues[werte.data[i].SU2110_Feeding_Hmi_udtEmFeeder_rThroughput_rSet.nodeId.value];
      let dwStat = serverValues[werte.data[i].SU2110_Feeding_Hmi_udtEmFeeder_rSpeed_dwStat.nodeId.value];
  
      serverValues[werte.data[i].SU2110_Feeding_Hmi_udtEmFeeder_rSpeed_dwStat.nodeId.value] = dwStat
  
  
      // Verwenden Sie den Index i, um auf das richtige Element von previousRAct zuzugreifen
      if (rAct > previousRAct[i]) {
        console.log(`Index: ${i} - Wert steigt (rAct > previousRAct)`);
        dwStat |= (1 << 22);  // Wert steigt, setzt das Bit 22
        dwStat &= ~(1 << 23); // Löscht das Bit 23
      }
  
      if (rAct < previousRAct[i]) {
        console.log(`Index: ${i} - Wert sinkt (rAct < previousRAct)`);
        dwStat |= (1 << 23);  // Wert sinkt, setzt das Bit 23
        dwStat &= ~(1 << 22); // Löscht das Bit 22
      }
  
      if (rAct === previousRAct[i]) {
        console.log(`Index: ${i} - Wert unverändert (rAct == previousRAct)`);
        dwStat &= ~(1 << 23); // Löscht das Bit 23
        dwStat &= ~(1 << 22); // Löscht das Bit 22
      }
      previousRAct[i] = rAct;
  
      // Speichern Sie den aktuellen Wert von rAct für den nächsten Aufruf
      console.log("Index:", i, "rACt", rAct);
      previousRAct[i] = rAct;
      console.log("Index:previous", i, previousRAct[i]);
  
  
  
      if (rAct < rSetTolMinMin) {
        dwStat |= (1 << 16);        // Wird rot
        dwStat &= ~(1 << 17);
      }
  
      if (rAct > rSetTolMinMin && rAct < rSetTolMin) {
        dwStat &= ~(1 << 16);       // Setzt das 17. Bit
        dwStat |= (1 << 17);
        // dwStat &= ~((1 << 16) | (1 << 17));  // Löscht sowohl das 16. als auch das 17. Bit
      }
      /*  if (rAct > rSetTolMin && rAct < rSetTolMax) {
           dwStat &= ~((1 << 16) | (1 << 17));  // Löscht sowohl das 16. als auch das 17. Bit
        }
        if (rAct > rSetTolMax && rAct < rSetTolMaxMax) {
          dwStat |= (1 << 17)
          dwStat &= ~(1 << 16); 
        }
        if (rAct > rSetTolMaxMax) {
          dwStat |= (1 << 16)
          dwStat &= ~(1 << 17);
        }
        if (rAct === 0) {
          dwStat &= ~((1 << 16) | (1 << 17));  // Löscht das 16. und 17. Bit
        }*/
      // Aktualisieren Sie den Wert von dwStat in serverValues
      serverValues[werte.data[i].SU2110_Feeding_Hmi_udtEmFeeder_rSpeed_dwStat.nodeId.value] = dwStat;
  
    }, 3);
    
  
  },
 
}
module.exports = {
  SetGetlogic: SetGetlogic,
}




















var { SetGetlogic } = require('./../../../Setter_Getter_Logiken')
const functions = require('./../../../funktionen');


function run1(addressSpace, device, opcua, verbose, serverValues,) {
 
    var data = {};
    for (var i = 0; i < 10; i++) {

    data[i].SU2110_Feeding_Hmi_udtEmFeeder_rSpeed_dwCtrl = functions.createCustomVariable(i, "SU2110_Feeding_Hmi_udtEmFeeder_rSpeed_dwCtrl", data[i].SU2110_Feeding_Hmi_udtEmFeeder_rSpeed, "dwCtrl", "SU2110_Feeding.Hmi", "udtEmFeeder", "rSpeed", "dwCtrl", undefined, SetGetlogic.SU2110_Feeding_Hmi_udtEmFeeder_rSpeed_dwCtrlGet, SetGetlogic.SU2110_Feeding_Hmi_udtEmFeeder_rSpeed_dwCtrlSet)
        data[i].SU2110_Feeding_Hmi_udtEmFeeder_rSpeed_dwStat = functions.Uint32createCustomVariable(i, "SU2110_Feeding_Hmi_udtEmFeeder_rSpeed_dwStat", data[i].SU2110_Feeding_Hmi_udtEmFeeder_rSpeed, "dwStat", "SU2110_Feeding.Hmi", "udtEmFeeder", "rSpeed", "dwStat", undefined, SetGetlogic.SU2110_Feeding_Hmi_udtEmFeeder_rSpeed_dwStatGet, SetGetlogic.SU2110_Feeding_Hmi_udtEmFeeder_rSpeed_dwStatSet)
    }

    module.exports = {
        data: data
    }

}



module.exports = {
    run1: run1,
}


