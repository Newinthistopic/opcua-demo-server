





var initial = function (variableName, initialValue, customValues, i, nameNodeId, serverValues) {
  

  var nodeIdInitial = [];
  
  if (nameNodeId[variableName + "NodeId"] !== undefined) {
    nodeIdInitial[i] = nameNodeId[variableName + "NodeId"];
  } else {
    console.error(`Die nameNodeId[${variableName}NodeId] ist nicht definiert.`);
    return; // Beenden Sie die Ausführung der Funktion
  }

  if (!(nameNodeId[variableName + "NodeId"] in serverValues)) {
    
    for (let index = 0; index <= 13; index++) {
      if (nodeIdInitial[index] !== undefined) {
        serverValues[nodeIdInitial[index]] = initialValue;
      }
    }

    // Setze benutzerdefinierte Werte für bestimmte Indizes
    for (const [index, value] of Object.entries(customValues)) {
      if (nodeIdInitial[index] !== undefined && value !== undefined) { // Prevent setting undefined keys in serverValues
        serverValues[nodeIdInitial[index]] = value;
      }
    }
  }
};



function rSetSet(nameNodeId, serverValues) {
 
  console.log("rSetSet");

  const rActNodeId = nameNodeId["rSetNodeId"].replace("rSet", "rAct");
  serverValues[rActNodeId] = serverValues[nameNodeId["rSetNodeId"]];

  
  console.log("rAct value: ", serverValues[rActNodeId]);

  console.log("rActSet wurde aufgerufen...", rActNodeId);
  
}


  



 
  

for (var i = 0; i < 14; i++) {
  function rGainHeatSetGet (i, nameNodeId, serverValues) {
    initial("rGainHeatSet", 1.5, { 1: 2, 2: 2, 5: 3, 6: 0, 7: 2 }, i, nameNodeId, serverValues);
  }
}


for (var i = 0; i < 14; i++) {
  function rOpMinGet (i, nameNodeId, serverValues) {
       initial("rOpMin", 13, { 1: 10, 2: 3, 6: 6, 7: 4}, i, nameNodeId, serverValues);
       
       
   }
 }

for (var i = 0; i < 14; i++) {
 function rOpMaxGet (i, nameNodeId, serverValues) {
      initial("rOpMax", 111, { 1: 100, 2: 305, 6: 306, 7: 355 }, i, nameNodeId, serverValues);
    
  }
}



  function rActGet(i, nameNodeId,serverValues) {
    
    
    initial("rAct", 22222, { 1: 21, 2: 23, 6: 19 }, i, nameNodeId, serverValues);
  }


function rTempHSetGet(nameNodeId, serverValues) {
  for (var i = 0; i < 14; i++) {
    initial("rTempHSet", 300, { 2: 305, 4: 356, 6: 366 }, i, nameNodeId, serverValues);
  }
}

function rTempHMinGet(nameNodeId, serverValues) {
  for (var i = 0; i < 14; i++) {
    initial("rTempHMin", 150, { 2: 305, 4: 356, 6: 366 }, i, nameNodeId, serverValues);
  }
}

function TempHHSetGet(nameNodeId, serverValues) {
  for (var i = 0; i < 14; i++) {
    initial("TempHHSet", 450, { 2: 305, 4: 399, 6: 370, 10: 450 }, i, nameNodeId, serverValues);
  }
}

function rSetTolHSetGet(nameNodeId, serverValues) {
  for (var i = 0; i < 14; i++) {
    initial("rSetTolHSet", 5, { 2: 6, 4: 7, 6: 370, 10: 6, 11: 6 }, i, nameNodeId, serverValues);
  }
}

function rSetTolHMaxGet(nameNodeId, serverValues) {
  for (var i = 0; i < 14; i++) {
    initial("rSetTolHMax", 10, { 2: 11, 4: 12, 6: 8, 10: 9, 11: 9 }, i, nameNodeId, serverValues);
  }
}

function rSetTolHMinGet(nameNodeId, serverValues) {
  for (var i = 0; i < 14; i++) {
    initial("rSetTolHMin", 5, { 2: 6, 4: 6, 6: 4, 10: 6, 11: 6 }, i, nameNodeId, serverValues);
  }
}

function rSetTolHHSetGet(nameNodeId, serverValues) {
  for (var i = 0; i < 14; i++) {
    initial("rSetTolHHSet", 10, { 2: 11, 4: 12, 6: 13, 10: 14, 11: 15 }, i, nameNodeId, serverValues);
  }
}

function rSetTolHHMaxGet(nameNodeId, serverValues) {
  for (var i = 0; i < 14; i++) {
    initial("rSetTolHHMax", 20, { 2: 21 }, i, nameNodeId, serverValues);
  }
}

for (var i = 0; i < 14; i++) {
  function rSetTolHHMinGet(nameNodeId, serverValues) {
    initial("rSetTolHHMin", 5, { 2: 6, 4: 6, 6: 4, 10: 6, 11: 6 }, i, nameNodeId, serverValues);
  }
}

for (var i = 0; i < 14; i++) {
  function rTempCooldownSetGet(nameNodeId, serverValues) {
    initial("rTempCooldownSet", 10, {}, i, nameNodeId, serverValues);
  }
}

for (var i = 0; i < 14; i++) {
  function rTempCooldownMaxGet(nameNodeId, serverValues) {
    initial("rTempCooldownMax", 10, {}, i, nameNodeId, serverValues);
  }
}

for (var i = 0; i < 14; i++) {
  function rTempCooldownMinGet(nameNodeId, serverValues) {
    initial("rTempCooldownMin", 6, {}, i, nameNodeId, serverValues);
  }
}

for (var i = 0; i < 14; i++) {
  function rTempRampFactorSetGet(nameNodeId, serverValues) {
    initial("rTempRampFactorSet", 15, {}, i, nameNodeId, serverValues);
  }
}

for (var i = 0; i < 14; i++) {
  function rTempRampFactorMaxGet(nameNodeId, serverValues) {
    initial("rTempRampFactorMax", 90, {}, i, nameNodeId, serverValues);
  }
}

for (var i = 0; i < 14; i++) {
  function rTempRampFactorMinGet(nameNodeId, serverValues) {
    initial("rTempRampFactorMin", 8, {}, i, nameNodeId, serverValues);
  }
}

for (var i = 0; i < 14; i++) {
  function rTempReleaseSetGet(nameNodeId, serverValues) {
    initial("rTempReleaseSet", 152, {}, i, nameNodeId, serverValues);
  }
}

for (var i = 0; i < 14; i++) {
  function rTempReleaseMaxGet(nameNodeId, serverValues) {
    initial("rTempReleaseMax", 300, {}, i, nameNodeId, serverValues);
  }
}

for (var i = 0; i < 14; i++) {
  function rTempReleaseMinGet(nameNodeId, serverValues) {
    initial("rTempReleaseMin", 100, {}, i, nameNodeId, serverValues);
  }
}

for (var i = 0; i < 14; i++) {
  function udTimeRelSetGet(nameNodeId, serverValues) {
    initial("udTimeRelSet", 456, {}, i, nameNodeId, serverValues);
  }
}

for (var i = 0; i < 14; i++) {
  function udTimeRelMaxGet(nameNodeId, serverValues) {
    initial("udTimeRelMax", 600, {}, i, nameNodeId, serverValues);
  }
}

for (var i = 0; i < 14; i++) {
  function udTimeRelMinGet(nameNodeId, serverValues) {
    initial("udTimeRelMin", 51, {}, i, nameNodeId, serverValues);
  }
}

for (var i = 0; i < 14; i++) {
  function rTempHeatupSetGet(nameNodeId, serverValues) {
    initial("rTempHeatupSet", 200, {}, i, nameNodeId, serverValues);
  }
}

for (var i = 0; i < 14; i++) {
  function rTempHeatupMaxGet(nameNodeId, serverValues) {
    initial("rTempHeatupMax", 300, {}, i, nameNodeId, serverValues);
  }
}

for (var i = 0; i < 14; i++) {
  function rGainHeatSetGet(nameNodeId, serverValues) {
    initial("rGainHeatSet", 1.5, { 1: 2, 2: 2, 5: 3, 6: 0, 7: 2 }, i, nameNodeId, serverValues);
  }
}

for (var i = 0; i < 14; i++) {
  function rTiHeatSetGet(nameNodeId, serverValues) {
    initial("rTiHeatSet", 1.6, {}, i, nameNodeId, serverValues);
  }
}

for (var i = 0; i < 14; i++) {
  function rTdHeatSetGet(nameNodeId, serverValues) {
    initial("rTdHeatSet", 1.7, {}, i, nameNodeId, serverValues);
  }
}

for (var i = 0; i < 14; i++) {
  function rTdFiltRatioHeatSetGet(nameNodeId, serverValues) {
    initial("rTdFiltRatioHeatSet", 1.8, {}, i, nameNodeId, serverValues);
  }
}

for (var i = 0; i < 14; i++) {
  function rPWeightingHeatSetGet(nameNodeId, serverValues) {
    initial("rPWeightingHeatSet", 1.9, {}, i, nameNodeId, serverValues);
  }
}

for (var i = 0; i < 14; i++) {
  function rDWeightingHeatSetGet(nameNodeId, serverValues) {
    initial("rDWeightingHeatSet", 2.0, {}, i, nameNodeId, serverValues);
  }
}

for (var i = 0; i < 14; i++) {
  function rCycleHeatSetGet(nameNodeId, serverValues) {
    initial("rCycleHeatSet", 2.1, {}, i, nameNodeId, serverValues);
  }
}

for (var i = 0; i < 14; i++) {
  function rControlZoneHeatSetGet(nameNodeId, serverValues) {
    initial("rControlZoneHeatSet", 2.2, {}, i, nameNodeId, serverValues);
  }
}

for (var i = 0; i < 14; i++) {
  function rDeadZoneHeatSetGet(nameNodeId, serverValues) {
    initial("rDeadZoneHeatSet", 88, {}, i, nameNodeId, serverValues);
  }
}




  module.exports={
    rOpMinGet:rOpMinGet,
    rActGet:rActGet,
    rSetSet:rSetSet,
    rOpMaxGet:rOpMaxGet
  }








