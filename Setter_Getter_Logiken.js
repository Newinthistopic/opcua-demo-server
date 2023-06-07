var { initial } = require('./../opcua-demo-server/funktionen');

var serverModule = require('./server');
var serverValues = serverModule.serverValues;

const SetGetLogic = {

  rSetGet: function rSetGet(i, nameNodeId, serverValues) {
    initial("rSet", 1, {}, i, nameNodeId, serverValues);
  },
  rSetSet: function rSetSet(i, nameNodeId, serverValues) {
    console.log("rSetSet");
    const rActNodeId = nameNodeId["rSetNodeId"].replace("rSet", "rAct");
    serverValues[rActNodeId] = serverValues[nameNodeId["rSetNodeId"]];
    console.log("rAct value: ", serverValues[rActNodeId]);
    console.log("rActSet wurde aufgerufen...", rActNodeId);
    console.log("asdsfsdsdfsdfsdfsdfsd5f4sd65fs65d4f56sd4f65sd4")
    var werte = require('./../opcua-demo-server/profiles/simulation/variables/Variabeln')
    console.log("haaaaloo" + serverValues[werte.data[i].rAct.nodeId.value])
    //wertelesen(i,nameNodeId, serverValues)
    // pidController(i, nameNodeId, serverValues)
  },
  rGainHeatSetGet: function (i, nameNodeId, serverValues) {
    initial("rGainHeatSet", 1.5, { 1: 2, 2: 2, 5: 3, 6: 0, 7: 2 }, i, nameNodeId, serverValues);
  },
  rOpMinGet: function (i, nameNodeId, serverValues) {
    initial("rOpMin", 0, {}, i, nameNodeId, serverValues);
  },
  rOpMaxGet: function (i, nameNodeId, serverValues) {
    initial("rOpMax", 300, {}, i, nameNodeId, serverValues);
  },
  rActGet: function (i, nameNodeId, serverValues) {
    initial("rAct", 20, { 1: 21, 2: 23, 6: 19 }, i, nameNodeId, serverValues);
  },
  //***********************************************************************************************************/

  //Extruder ==> Expert Settings ==> Prozess Zones/Parameter ==> Limits:"Warning H-Set" //
  rTempHSetGet: function (i, nameNodeId, serverValues) {
    initial("rTempHSet", 300, { 2: 305, 4: 356, 6: 366 }, i, nameNodeId, serverValues);
  },
  rTempHSetSet: function (i, nameNodeId, serverValues) {
    //initial("rTempHSet", 300, { 2: 305, 4: 356, 6: 366 }, i, nameNodeId, serverValues);
    var werte = require('./../opcua-demo-server/profiles/simulation/variables/Variabeln')
    serverValues[werte.data[i].rTempHHMin.nodeId.value] = serverValues[werte.data[i].rTempHSet.nodeId.value];
    if (serverValues[werte.data[i].rTempHHSet.nodeId.value] < serverValues[werte.data[i].rTempHSet.nodeId.value]) {
      serverValues[werte.data[i].rTempHHSet.nodeId.value] = serverValues[werte.data[i].rTempHSet.nodeId.value];
    }
  },
  //Extruder ==> Expert Settings ==> Prozess Zones/Parameter ==> Limits:"Warning H-Max" //
  rTempHMaxGet: function (i, nameNodeId, serverValues) {
    initial("rTempHMax", 1000, {}, i, nameNodeId, serverValues);
  },
  //Extruder ==> Expert Settings ==> Prozess Zones/Parameter ==> Limits:"Warning H-Min" //
  rTempHMinGet: function (i, nameNodeId, serverValues) {
    initial("rTempHMin", 0, {}, i, nameNodeId, serverValues);
  },
  //***********************************************************************************************************/
  //Extruder ==> Expert Settings ==> Prozess Zones/Parameter ==> Limits:"Alarm HH-Set" //
  rTempHHSetGet: function (i, nameNodeId, serverValues) {
    initial("rTempHHSet", 310, {}, i, nameNodeId, serverValues);
  },
  rTempHHMinGet: function (i, nameNodeId, serverValues) {
    initial("rTempHHMin", 300, {}, i, nameNodeId, serverValues);
  },
  rTempHHMaxGet: function (i, nameNodeId, serverValues) {
    initial("rTempHHMax", 1000, {}, i, nameNodeId, serverValues);
  },
  //***********************************************************************************************************/
  //Extruder ==> Expert Settings ==> Prozess Zones/Parameter ==> Limits:"Tolerance H-Set" //
  rSetTolHSetGet: function (i, nameNodeId, serverValues) {
    initial("rSetTolHSet", 5, {}, i, nameNodeId, serverValues);
  },
  //Extruder ==> Expert Settings ==> Prozess Zones/Parameter ==> Limits:"Tolerance H-Set" //
  rSetTolHSetSet: function (i, nameNodeId, serverValues) {
    var werte = require('./../opcua-demo-server/profiles/simulation/variables/Variabeln')
    serverValues[werte.data[i].rSetTolHHMin.nodeId.value] = serverValues[werte.data[i].rSetTolHSet.nodeId.value];
    if (serverValues[werte.data[i].rSetTolHHSet.nodeId.value] < serverValues[werte.data[i].rSetTolHSet.nodeId.value]) {
      serverValues[werte.data[i].rSetTolHHSet.nodeId.value] = serverValues[werte.data[i].rSetTolHSet.nodeId.value];
    }
  },
  //Extruder ==> Expert Settings ==> Prozess Zones/Parameter ==> Limits:"Tolerance H-Max" //
  rSetTolHMaxGet: function (i, nameNodeId, serverValues) {
    initial("rSetTolHMax", 10, {}, i, nameNodeId, serverValues);
  },
  //Extruder ==> Expert Settings ==> Prozess Zones/Parameter ==> Limits:"Tolerance H-Min" //
  rSetTolHMinGet: function (i, nameNodeId, serverValues) {
    initial("rSetTolHMin", 0, {}, i, nameNodeId, serverValues);
  },
  //****************************************************************************
  //Extruder ==> Expert Settings ==> Prozess Zones/Parameter ==> Limits:"Tolerance HH-Set" //
  rSetTolHHSetGet: function (i, nameNodeId, serverValues) {
    initial("rSetTolHHSet", 10, { 2: 11, 4: 12, 6: 13, 10: 14, 11: 15 }, i, nameNodeId, serverValues);
  },
  //Extruder ==> Expert Settings ==> Prozess Zones/Parameter ==> Limits:"Tolerance HH-Max" //
  rSetTolHHMaxGet: function (i, nameNodeId, serverValues) {
    initial("rSetTolHHMax", 20, { 2: 21 }, i, nameNodeId, serverValues);
  },
  //Extruder ==> Expert Settings ==> Prozess Zones/Parameter ==> Limits:"Tolerance HH-Min" //
  rSetTolHHMinGet: function (i, nameNodeId, serverValues) {
    initial("rSetTolHHMin", 5, { 2: 6, 4: 6, 6: 4, 10: 6, 11: 6 }, i, nameNodeId, serverValues);
  },
  rTempCooldownSetGet: function (i, nameNodeId, serverValues) {
    initial("rTempCooldownSet", 10, {}, i, nameNodeId, serverValues);
  },
  rTempCooldownMaxGet: function (i, nameNodeId, serverValues) {
    initial("rTempCooldownMax", 60, {}, i, nameNodeId, serverValues);
  },
  rTempCooldownMinGet: function (i, nameNodeId, serverValues) {
    initial("rTempCooldownMin", 40, { 1: 0, 2: 0, 3: 0, 4: 0 }, i, nameNodeId, serverValues);
  },
  rTempRampFactorSetGet: function (i, nameNodeId, serverValues) {
    initial("rTempRampFactorSet", 1.5, {}, i, nameNodeId, serverValues);
  },
  rTempRampFactorMaxGet: function (i, nameNodeId, serverValues) {
    initial("rTempRampFactorMax", 90, {}, i, nameNodeId, serverValues);
  },
  rTempRampFactorMinGet: function (i, nameNodeId, serverValues) {
    initial("rTempRampFactorMin", 8, {}, i, nameNodeId, serverValues);
  },
  rTempHeatupSetGet: function (i, nameNodeId, serverValues) {
    initial("rTempHeatupSet", 210, {}, i, nameNodeId, serverValues);
  },
  rTempHeatupMaxGet: function (i, nameNodeId, serverValues) {
    initial("rTempHeatupMax", 300, {2:500}, i, nameNodeId, serverValues);
  },
  rTempHeatupMinGet: function (i, nameNodeId, serverValues) {
    initial("rTempHeatupMin", 105, { 1: 11, 2: 112, 9: 203, 10: 201 }, i, nameNodeId, serverValues);
  },
  rTempReleaseSetGet: function (i, nameNodeId, serverValues) {
    initial("rTempReleaseSet", 210, {}, i, nameNodeId, serverValues);
  },
  rTempReleaseMaxGet: function (i, nameNodeId, serverValues) {
    initial("rTempReleaseMax", 300, {}, i, nameNodeId, serverValues);
  },
  rTempReleaseMinGet: function (i, nameNodeId, serverValues) {
    initial("rTempReleaseMin", 100, {1:0}, i, nameNodeId, serverValues);
  },
  udTimeRelSetGet: function (i, nameNodeId, serverValues) {
    initial("udTimeRelSet", 2, {}, i, nameNodeId, serverValues);
  },
  udTimeRelMaxGet: function (i, nameNodeId, serverValues) {
    initial("udTimeRelMax", 120, {}, i, nameNodeId, serverValues);
  },
  udTimeRelMinGet: function (i, nameNodeId, serverValues) {
    initial("udTimeRelMin", 1, {}, i, nameNodeId, serverValues);
  },

  rGainHeatSetGet: function (i, nameNodeId, serverValues) {
    initial("rGainHeatSet", 1.1, { 1: 2, 2: 2, 5: 3, 6: 0, 7: 2 }, i, nameNodeId, serverValues);
  },
  rTiHeatSetGet: function (i, nameNodeId, serverValues) {
    initial("rTiHeatSet", 0.8, {}, i, nameNodeId, serverValues);
  },
  rTdHeatSetGet: function (i, nameNodeId, serverValues) {
    initial("rTdHeatSet", 0.3, {}, i, nameNodeId, serverValues);
  },
  rTdFiltRatioHeatSetGet: function (i, nameNodeId, serverValues) {
    initial("rTdFiltRatioHeatSet", 1.8, {}, i, nameNodeId, serverValues);
  },
  rPWeightingHeatSetGet: function (i, nameNodeId, serverValues) {
    initial("rPWeightingHeatSet", 1.9, {}, i, nameNodeId, serverValues);
  },
  rDWeightingHeatSetGet: function (i, nameNodeId, serverValues) {
    initial("rDWeightingHeatSet", 2.0, {}, i, nameNodeId, serverValues);
  },
  rCycleHeatSetGet: function (i, nameNodeId, serverValues) {
    initial("rCycleHeatSet", 2.1, {}, i, nameNodeId, serverValues);
  },
  rControlZoneHeatSetGet: function (i, nameNodeId, serverValues) {
    initial("rControlZoneHeatSet", 2.2, {}, i, nameNodeId, serverValues);
  },
  rDeadZoneHeatSetGet: function (i, nameNodeId, serverValues) {
    initial("rDeadZoneHeatSet", 88, {}, i, nameNodeId, serverValues);
  }
};

module.exports = {
  SetGetLogic: SetGetLogic
}