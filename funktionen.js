//*****InitialStatus****/




function createInitialStatusFunction(functionName, initialValue, variableName, customValues = {}) {
  return {
    [functionName]: function (i, nameNodeId, serverValues) {
      var nodeIdInitial = [];
      nodeIdInitial[i] = nameNodeId[variableName + "NodeId"];

      if (!( nameNodeId[variableName + "NodeId"] in serverValues)) {
        for (let index = 0; index <= 13; index++) {
          serverValues[nodeIdInitial[index]] = initialValue;
        }

        // Setze benutzerdefinierte Werte für bestimmte Indizes
        for (const [index, value] of Object.entries(customValues)) {
          serverValues[nodeIdInitial[index]] = value;
        }

        serverValues[nameNodeId[variableName + "NodeId"]] = serverValues[nodeIdInitial[i]];
      }
      
    },
  };
}



/*
Wenn du die Funktion createInitialStatusFunction manuell eingibst, ohne sie als separate Funktion zu definieren, würde der Code folgendermaßen aussehen:

javascript
Copy code
const rOpMaxObjekt = {
  rOpMax: function (i, nodeId, serverValues) {
    var nodeIdInitial = [];
    nodeIdInitial[i] = nodeId;

    if (!(nodeId in serverValues)) {
      for (let index = 0; index <= 13; index++) {
        serverValues[nodeIdInitial[index]] = 300;
      }

      serverValues[nodeIdInitial[0]] = 100;
      serverValues[nodeIdInitial[1]] = 305;
      serverValues[nodeIdInitial[2]] = 306;
      serverValues[nodeIdInitial[3]] = 307;
      serverValues[nodeIdInitial[4]] = 308;
      serverValues[nodeIdInitial[5]] = 309;
      serverValues[nodeIdInitial[6]] = 310;
      serverValues[nodeIdInitial[7]] = 311;
      serverValues[nodeIdInitial[8]] = 312;
      serverValues[nodeIdInitial[9]] = 313;
      serverValues[nodeIdInitial[10]] = 314;
      serverValues[nodeIdInitial[11]] = 315;
      serverValues[nodeIdInitial[12]] = 316;
      serverValues[nodeIdInitial[13]] = 317;
      serverValues[nodeIdInitial[14]] = 318;

      serverValues[nodeId] = serverValues[nodeIdInitial[i]];
    }
  },
};*/


const rOpMaxObjekt = createInitialStatusFunction("rOpMax", 300, "rOpMax", { 1: 100, 2: 305, 6: 306, 7: 355 });

const rActObjekt = createInitialStatusFunction("rAct", 20, "rAct", { 1: 21, 2: 23, 6: 19 });

const rTempHSetObjekt = createInitialStatusFunction("rTempHSet", 300, "rTempHSet", { 2: 305, 4: 356, 6: 366 });

const rTempHMinObjekt = createInitialStatusFunction("rTempHMin", 150, "rTempHMin", { 2: 305, 4: 356, 6: 366 });

const TempHHSetObjekt = createInitialStatusFunction("TempHHSet", 450, "TempHSet", { 2: 305, 4: 399, 6: 370, 10: 450 });

const rSetTolHSetObjekt = createInitialStatusFunction("rSetTolHSet", 5, "TrSetTolHSet", { 2: 6, 4: 7, 6: 370, 10: 6, 11: 6 });

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

}