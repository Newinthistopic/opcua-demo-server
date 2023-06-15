

var serverModule = require('./../opcua-demo-server/server');

var addressSpace = serverModule.addressSpace;
var namespace2 = serverModule.namespace2;
var namespace3 = serverModule.namespace3;
var opcua = serverModule.opcua;
var serverValues = serverModule.serverValues;

function createCustomVariable(i, variableName, componentOf, browseName, part1, part2, part3, part4, part5, customGetLogic, customSetLogic) {
  var nodeId = `"ns=3;s=\"${part1}\".\"${part2}\"`;

  if (i !== undefined) {
    nodeId += `[${i}]`;
  }
  
  if (part3) {
    nodeId += `.\"${part3}\"`;
  }
  
  if (part4) {
    nodeId += `.\"${part4}\"`;
  }
  
  if (part5) {
    nodeId += `.\"${part5}\"`;
  }
  var newVariable = {};
  newVariable[variableName] = namespace3.addVariable({
    componentOf: componentOf,
    browseName: browseName,
    dataType: opcua.DataType.Float,
    nodeId: nodeId,
    value: {
      get: function () {
        var nameNodeId = {};

        nameNodeId[variableName + "NodeId"] = this.nodeId.value;

        if (customGetLogic) {
          customGetLogic(i, nameNodeId, serverValues);

        }
        return new opcua.Variant({ dataType: opcua.DataType.Float, value: serverValues[nameNodeId[variableName + "NodeId"]] });
      },
      set: function (variant) {
        var nameNodeId = {};
        nameNodeId[variableName + "NodeId"] = this.nodeId.value;
        serverValues[nameNodeId[variableName + "NodeId"]] = parseFloat(variant.value);
        if (customSetLogic) {
          customSetLogic(i, nameNodeId, serverValues);
        }
        return opcua.StatusCodes.Good;
      }
    },
  });
  return newVariable[variableName];
}


function Uint32createCustomVariable(i, variableName, componentOf, browseName, part1, part2, part3, part4, part5, customGetLogic, customSetLogic) {
  var nodeId = `"ns=3;s=\"${part1}\".\"${part2}\"`;

  if (i !== undefined) {
    nodeId += `[${i}]`;
  }
  
  if (part3) {
    nodeId += `.\"${part3}\"`;
  }
  
  if (part4) {
    nodeId += `.\"${part4}\"`;
  }
  
  if (part5) {
    nodeId += `.\"${part5}\"`;
  }
  
  var newVariable = {};
  newVariable[variableName] = namespace3.addVariable({
    componentOf: componentOf,
    browseName: browseName,
    dataType: opcua.DataType.UInt32,
    nodeId: nodeId,
    value: {
      get: function () {
       
        return opcua.StatusCodes.Good;
       
      },
      set: function (variant) {
      

        return opcua.StatusCodes.Good;
      }
    },
  });
  
  return newVariable[variableName];
}


var initial = function (variableName, initialValue, customValues, i, nameNodeId, serverValues) {
  var nodeIdInitial = [];
  if (nameNodeId[variableName + "NodeId"] !== undefined) {
    nodeIdInitial[i] = nameNodeId[variableName + "NodeId"];
  } else {
 
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

var initialSingleValue = function(variableName, initialValue, nameNodeId, serverValues) {
  var nodeIdInitial;

  // Überprüfe, ob die Node-ID für den gegebenen Variablennamen existiert.
  if (nameNodeId[variableName + "NodeId"] !== undefined) {
    nodeIdInitial = nameNodeId[variableName + "NodeId"];
  } else {
    // Beende die Ausführung der Funktion, wenn die Node-ID nicht existiert
    return;
  }

  // Setze den initialen Wert, wenn die Node-ID noch nicht in serverValues vorhanden ist
  if (!(nodeIdInitial in serverValues)) {
    serverValues[nodeIdInitial] = initialValue;
  }
};




module.exports = {
  createCustomVariable: createCustomVariable,
  initial: initial,
  Uint32createCustomVariable:Uint32createCustomVariable,
  initialSingleValue:initialSingleValue
}



/*function pidController(i, nameNodeId, serverValues) {
  var werte = require('./profiles/simulation/variables/Variabeln');
  var rGain = serverValues[werte.data[i].rGainHeatSet.nodeId.value]; // Proportionalgewichtungsfaktor
  var rTi = serverValues[werte.data[i].rTiHeatSet.nodeId.value];  // Integralgewichtungsfaktor
  var rTd = serverValues[werte.data[i].rTdHeatSet.nodeId.value];   // Differentiationsgewichtungsfaktor
  var rPWeighting = serverValues[werte.data[i].rPWeightingHeatSet.nodeId.value]; // Gewichtungsfaktor
  var rTdFiltRatio = serverValues[werte.data[i].rTdFiltRatioHeatSet.nodeId.value]; // Filter-Verhältnis
  var rDWeighting = serverValues[werte.data[i].rDWeightingHeatSet.nodeId.value]; // Differentielgewichtungsfaktor

  var previous_error = serverValues[werte.data[i].rAct.nodeId.value];
  var integral = 0.0;
  var dt = 0.01; // Zeitintervall in Sekunden

  var T = 1.5; // Zeitkonstante der PT1-Strecke
  var K = 0.1; // Verstärkung der PT1-Strecke
  var rAct = serverValues[werte.data[i].rAct.nodeId.value];  // Anfangswert der PT1-Strecke
  var rSet = serverValues[werte.data[i].rSet.nodeId.value]; // Sollwert

  var samplingTime = 1200; // Abtastzeit in Millisekunden

  
  function calculateNextValue() {
    if (Math.abs(rAct - rSet) > 0.01) {
      // Berechnung des Reglerausgangs
      var error = rSet - rAct;
      integral = integral + error * dt;
      var derivative = (error - previous_error) / dt;
      var u = rGain * [(rPWeighting * error) + (1/rTi) * integral + rTd * (rDWeighting * error - derivative)/(rTdFiltRatio * rTd + dt)];
      previous_error = error;

      // Berechnung des Ausgangs der PT1-Strecke
      let dy = (K * u - rAct) / T * dt;
      rAct = rAct + dy;
      serverValues[werte.data[i].rAct.nodeId.value] = rAct;
    }
  }

  // Aufruf der Funktion für die erste Berechnung und Einstellung der Abtastzeit
  setInterval(calculateNextValue, samplingTime);
// Aktuellen Wert von rAct in serverValues schreiben

  return serverValues[werte.data[i].rAct.nodeId.value];
}*/



/*function wertelesen(i, nameNodeId, serverValues) {
  var werte = require('./profiles/simulation/variables/Variabeln');

  // nameNodeId[variableName + "NodeId"] = werte.data[0].rOpMax.nodeId.value;

  console.log("rOpMax value:", serverValues[werte.data[i].rOpMax.nodeId.value]);

  serverValues[werte.data[7].rOpMax.nodeId.value] = serverValues[werte.data[i].rOpMax.nodeId.value]
  y = serverValues[werte.data[7].rOpMax.nodeId.value]

  serverValues[werte.data[7].rOpMax.nodeId.value] = a
}
/* let rOpMaxNode = werte.rOpMaxObj[i];
 console.log(serverValues[rOpMaxNode.nodeId.value])
 
/* for (let j in rOpMaxObj) {
   let rOpMaxNode = werte.rOpMaxObj[j];
   console.log(`Value of rOpMax[${j}]  ${serverValues[rOpMaxNode.nodeId.value]}`);
 }*/
