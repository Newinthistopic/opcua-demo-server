var nameNodeId = {};
var serverValues = {};
var variableName={}


function rActGet( i,nameNodeId, serverValues) {
// rActObjekt.rAct(i,nameNodeId,serverValues)
}




function createInitialStatusFunction(functionName, initialValue, variableName, customValues = {}) {
  return {
    [functionName]: function (i, nameNodeId, serverValues) {
      var nodeIdInitial = [];
      nodeIdInitial[i] = nameNodeId[variableName + "NodeId"];

     // if (!(nameNodeId[variableName + "NodeId"] in serverValues)) {
        for (let index = 0; index <= 13; index++) {
          serverValues[nodeIdInitial[index]] = initialValue;
        }

        // Setze benutzerdefinierte Werte für bestimmte Indizes
        for (const [index, value] of Object.entries(customValues)) {
          serverValues[nodeIdInitial[index]] = value;
        }

        serverValues[nameNodeId[variableName + "NodeId"]] = serverValues[nodeIdInitial[i]];
      }

    //},
  };
}


const rOpMaxObjekt = createInitialStatusFunction("rOpMax", 300, "rOpMax", { 1: 100, 2: 305, 6: 306, 7: 355 });

var rActObjekt = createInitialStatusFunction("rAct", 22, "rAct", { 1: 21, 2: 23, 6: 19 });

const rTempHSetObjekt = createInitialStatusFunction("rTempHSet", 300, "rTempHSet", { 2: 305, 4: 356, 6: 366 });

const rTempHMinObjekt = createInitialStatusFunction("rTempHMin", 150, "rTempHMin", { 2: 305, 4: 356, 6: 366 });

const TempHHSetObjekt = createInitialStatusFunction("TempHHSet", 450, "rTempHSet", { 2: 305, 4: 399, 6: 370, 10: 450 });

const rSetTolHSetObjekt = createInitialStatusFunction("rSetTolHSet", 5, "rSetTolHSet", { 2: 6, 4: 7, 6: 370, 10: 6, 11: 6 });

const rSetTolHMaxObjekt = createInitialStatusFunction("rSetTolHMax", 10, "TrSetTolHMax", { 2: 11, 4: 12, 6: 8, 10: 9, 11: 9 });

const rSetTolHMinObjekt = createInitialStatusFunction("rSetTolHMin", 5, "rSetTolHMin", { 2: 6, 4: 6, 6: 4, 10: 6, 11: 6 });

const rSetTolHHSetObjekt = createInitialStatusFunction("rSetTolHHSet", 10, "rSetTolHHSet", { 2: 11, 4: 12, 6: 13, 10: 14, 11: 15 });

const rSetTolHHMaxObjekt = createInitialStatusFunction("rSetTolHHMax", 20, "rSetTolHHMax", { 2: 21 });

const rSetTolHHMinObjekt = createInitialStatusFunction("rSetTolHHMin", 5, "rSetTolHHMin", { 2: 6, 4: 6, 6: 4, 10: 6, 11: 6 });

const rTempCooldownSetObjekt = createInitialStatusFunction("rTempCooldownSet", 10, "rTempCooldownSet", {});

const rTempCooldownMaxObjekt = createInitialStatusFunction("rTempCooldownMax", 10, "rTempCooldownMax", {});

const rTempCooldownMinObjekt = createInitialStatusFunction("rTempCooldownMin", 6, "rTempCooldownMin", {});

const rTempRampFactorSetObjekt = createInitialStatusFunction("rTempRampFactorSet", 15, "rTempRampFactorSet", {});

const rTempRampFactorMaxObjekt = createInitialStatusFunction("rTempRampFactorMax", 90, "rTempRampFactorMax", {});

const rTempRampFactorMinObjekt = createInitialStatusFunction("rTempRampFactorMin", 8, "rTempRampFactorMin", {});

const rTempReleaseSetObjekt = createInitialStatusFunction("rTempReleaseSet", 152, "rTempReleaseSet", {});

const rTempReleaseMaxObjekt = createInitialStatusFunction("rTempReleaseMax", 300, "rTempReleaseMax", {});

const rTempReleaseMinObjekt = createInitialStatusFunction("rTempReleaseMin", 100, "rTempReleaseMax", {});

const udTimeRelSetObjekt = createInitialStatusFunction("udTimeRelSet", 456, "udTimeRelSet", {});

const udTimeRelMaxObjekt = createInitialStatusFunction("udTimeRelMax", 600, "udTimeRelMax", {});

const udTimeRelMinObjekt = createInitialStatusFunction("udTimeRelMin", 51, "udTimeRelMin", {});

const rTempHeatupSetObjekt = createInitialStatusFunction("rTempHeatupSet", 200, "rTempHeatupSet", {});

const rTempHeatupMaxObjekt = createInitialStatusFunction("rTempHeatupMax", 300, "rTempHeatupMax", {});


const rGainHeatSetObjekt = createInitialStatusFunction("rGainHeatSet", 1.5, "rGainHeatSet", { 1: 2, 2: 2, 5: 3, 6: 0, 7: 2 });

const rTiHeatSetObjekt = createInitialStatusFunction("rTiHeatSet", 1.6, "rTiHeatSet", {});

const rTdHeatSetObjekt = createInitialStatusFunction("rTdHeatSet", 1.7, "rTdHeatSet", {});

const rTdFiltRatioHeatSetObjekt = createInitialStatusFunction("rTdFiltRatioHeatSet", 1.8, "rTdFiltRatioHeatSet", {});

const rPWeightingHeatSetObjekt = createInitialStatusFunction("rPWeightingHeatSet", 1.9, "rPWeightingHeatSet", {});

const rDWeightingHeatSetObjekt = createInitialStatusFunction("rDWeightingHeatSet", 2.0, "rDWeightingHeatSet", {});

const rCycleHeatSetObjekt = createInitialStatusFunction("rCycleHeatSet", 2.1, "rCycleHeatSet", {});

const rControlZoneHeatSetObjekt = createInitialStatusFunction("rControlZoneHeatSet", 2.2, "rControlZoneHeatSet", {});

const rDeadZoneHeatSetObjekt = createInitialStatusFunction("rDeadZoneHeatSet", 88, "rDeadZoneHeatSet", {});

function rSetSet(nameNodeId, serverValues, i) {
  setTimeout(function () {
      console.log("rSetSet");

      const rActNodeId = nameNodeId["rSetNodeId"].replace("rSet", "rAct");
      serverValues[rActNodeId] = serverValues[nameNodeId["rSetNodeId"]];

      console.log("rActNodeId: ", serverValues[rActNodeId]);
      console.log("rAct value: ", serverValues[rActNodeId]);

      console.log("rActSet wurde aufgerufen...", rActNodeId);
  }, 0);
}

module.exports = {
  rAct: rActObjekt.rAct,

  rOpMax: rOpMaxObjekt.rOpMax,

  rTempHSet: rTempHSetObjekt.rTempHSet,
  rTempHMin: rTempHMinObjekt.rTempHMin,

  rTempHHSet: TempHHSetObjekt.TempHHSet,
  rSetTolHMin: rSetTolHMinObjekt.rSetTolHMin,

  rSetTolHSet: rSetTolHSetObjekt.rSetTolHSet,
  rSetTolHMax: rSetTolHMaxObjekt.rSetTolHMax,

  rSetTolHHSet: rSetTolHHSetObjekt.rSetTolHHSet,
  rSetTolHHMax: rSetTolHHMaxObjekt.rSetTolHHMax,
  rSetTolHHMin: rSetTolHHMinObjekt.rSetTolHHMin,

  rTempCooldownSet: rTempCooldownSetObjekt.rTempCooldownSet,
  rTempCooldownMax: rTempCooldownMaxObjekt.rTempCooldownMax,
  rTempCooldownMin: rTempCooldownMinObjekt.rTempCooldownMin,

  rTempRampFactorSet: rTempRampFactorSetObjekt.rTempRampFactorSet,
  rTempRampFactorMax: rTempRampFactorMaxObjekt.rTempRampFactorMax,
  rTempRampFactorMin: rTempRampFactorMinObjekt.rTempRampFactorMin,

  rTempReleaseSet: rTempReleaseSetObjekt.rTempReleaseSet,
  rTempReleaseMax: rTempReleaseMaxObjekt.rTempReleaseMax,
  rTempReleaseMin: rTempReleaseMinObjekt.rTempReleaseMin,

  udTimeRelSet: udTimeRelSetObjekt.udTimeRelSet,
  udTimeRelMax: udTimeRelMaxObjekt.udTimeRelMax,
  udTimeRelMin: udTimeRelMinObjekt.udTimeRelMin,

  rTempHeatupSet: rTempHeatupSetObjekt.rTempHeatupSet,
  rTempHeatupMax: rTempHeatupMaxObjekt.rTempHeatupMax,

  rGainHeatSet: rGainHeatSetObjekt.rGainHeatSet,
  rTiHeatSet: rTiHeatSetObjekt.rTiHeatSet,


  rTdHeatSet: rTdHeatSetObjekt.rTdHeatSet,

  rTdFiltRatioHeatSet: rTdFiltRatioHeatSetObjekt.rTdFiltRatioHeatSet,

  rPWeightingHeatSet: rPWeightingHeatSetObjekt.rPWeightingHeatSet,

  rDWeightingHeatSet: rDWeightingHeatSetObjekt.rDWeightingHeatSet,

  rCycleHeatSet: rCycleHeatSetObjekt.rCycleHeatSet,

  rControlZoneHeatSet: rControlZoneHeatSetObjekt.rControlZoneHeatSet,

  rDeadZoneHeatSet: rDeadZoneHeatSetObjekt.rDeadZoneHeatSet,

  rSetSet:rSetSet,
 
  
  rActGet:rActGet

}
  

