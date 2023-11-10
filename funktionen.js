


const { writeTCPMessageHeader } = require('node-opcua');
var serverModule = require('./../opcua-demo-server/server');

var sharedState = require('./sharedState');

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



function createCustomVariableString(i, variableName, componentOf, browseName, part1, part2, part3, part4, part5, customGetLogic, customSetLogic) {
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
    dataType: opcua.DataType.String,
    nodeId: nodeId,
    value: {
      get: function () {
        var nameNodeId = {};

        nameNodeId[variableName + "NodeId"] = this.nodeId.value;

        if (customGetLogic) {
          customGetLogic(i, nameNodeId, serverValues);
        }
        return new opcua.Variant({ dataType: opcua.DataType.String, value: serverValues[nameNodeId[variableName + "NodeId"]] });
      },
      set: function (variant) {

        return opcua.StatusCodes.Good;
      }
    },
  });
  return newVariable[variableName];
}


function Uint16createCustomVariable(i, variableName, componentOf, browseName, part1, part2, part3, part4, part5, customGetLogic, customSetLogic) {
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
    dataType: opcua.DataType.UInt16,
    nodeId: nodeId,
    value: {
      get: function () {
        var nameNodeId = {};

        nameNodeId[variableName + "NodeId"] = this.nodeId.value;

        if (customGetLogic) {
          customGetLogic(i, nameNodeId, serverValues);
        }

        var serverValue = serverValues[nameNodeId[variableName + "NodeId"]];
        if (serverValue === undefined) {
          serverValue = 0;
        }

        return new opcua.Variant({ dataType: opcua.DataType.UInt16, value: serverValue });
      },
      set: function (variant) {
        var nameNodeId = {};
        nameNodeId[variableName + "NodeId"] = this.nodeId.value;
        serverValues[nameNodeId[variableName + "NodeId"]] = parseInt(variant.value);
        if (customSetLogic) {
          customSetLogic(i, nameNodeId, serverValues);
        }
        return opcua.StatusCodes.Good;
      }
    },
  });
  return newVariable[variableName];
}


function createVariableforTime(i, variableName, componentOf, browseName, nodeId, customGetLogic, customSetLogic) {

  var newVariable = {};
  newVariable[variableName] = namespace3.addVariable({
    componentOf: componentOf,
    browseName: browseName,
    dataType: opcua.DataType.UInt16,
    nodeId: 'ns=3;s=' + nodeId,

    value: {
      get: function () {
        var nameNodeId = {};

        nameNodeId[variableName + "NodeId"] = this.nodeId.value;

        if (customGetLogic) {
          customGetLogic(i, nameNodeId, serverValues);
        }

        var serverValue = serverValues[nameNodeId[variableName + "NodeId"]];
        if (serverValue === undefined) {
          serverValue = 0;
        }

        return new opcua.Variant({ dataType: opcua.DataType.UInt16, value: serverValue });
      },
      set: function (variant) {
        var nameNodeId = {};
        nameNodeId[variableName + "NodeId"] = this.nodeId.value;
        serverValues[nameNodeId[variableName + "NodeId"]] = parseInt(variant.value);
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
        var nameNodeId = {};
        nameNodeId[variableName + "NodeId"] = this.nodeId.value;

        if (customGetLogic) {
          customGetLogic(i, nameNodeId, serverValues);
        }

        var serverValue = serverValues[nameNodeId[variableName + "NodeId"]];
        if (serverValue === undefined) {
          serverValue = 0;
        }

        return new opcua.Variant({ dataType: opcua.DataType.UInt32, value: serverValue });
      },
      set: function (variant) {
        var nameNodeId = {};
        nameNodeId[variableName + "NodeId"] = this.nodeId.value;
        serverValues[nameNodeId[variableName + "NodeId"]] = parseInt(variant.value);

        if (customSetLogic) {
          customSetLogic(i, nameNodeId, serverValues);
        }

        return opcua.StatusCodes.Good;
      }
    },
  });

  // Zustand der zurückgegebenen Variable setzen


  return newVariable[variableName];
}

function Int32createCustomVariable(i, variableName, componentOf, browseName, part1, part2, part3, part4, part5, customGetLogic, customSetLogic) {
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
    dataType: opcua.DataType.Int32,
    nodeId: nodeId,
    value: {
      get: function () {
        var nameNodeId = {};
        nameNodeId[variableName + "NodeId"] = this.nodeId.value;

        if (customGetLogic) {
          customGetLogic(i, nameNodeId, serverValues);
        }

        var serverValue = serverValues[nameNodeId[variableName + "NodeId"]];
        if (serverValue === undefined) {
          serverValue = 0;
        }

        return new opcua.Variant({ dataType: opcua.DataType.Int32, value: serverValue });
      },
      set: function (variant) {
        var nameNodeId = {};
        nameNodeId[variableName + "NodeId"] = this.nodeId.value;
        serverValues[nameNodeId[variableName + "NodeId"]] = parseInt(variant.value);

        if (customSetLogic) {
          customSetLogic(i, nameNodeId, serverValues);
        }

        return opcua.StatusCodes.Good;
      }
    },
  });

  // Zustand der zurückgegebenen Variable setzen


  return newVariable[variableName];
}


function Uint64createCustomVariable(i, variableName, componentOf, browseName, part1, part2, part3, part4, part5, customGetLogic, customSetLogic) {
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
    dataType: opcua.DataType.UInt64,
    nodeId: nodeId,
    value: {
      get: function () {
        var nameNodeId = {};

        nameNodeId[variableName + "NodeId"] = this.nodeId.value;

        if (customGetLogic) {
          customGetLogic(i, nameNodeId, serverValues);
        }

        var serverValue = serverValues[nameNodeId[variableName + "NodeId"]];
        if (serverValue === undefined) {
          serverValue = 0;
        }

        return new opcua.Variant({ dataType: opcua.DataType.UInt64, value: serverValue });
      },
      set: function (variant) {
        var nameNodeId = {};
        nameNodeId[variableName + "NodeId"] = this.nodeId.value;
        serverValues[nameNodeId[variableName + "NodeId"]] = parseInt(variant.value);
        if (customSetLogic) {
          customSetLogic(i, nameNodeId, serverValues);
        }
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

var initialSingleValue = function (variableName, initialValue, nameNodeId, serverValues) {
  var nodeIdInitial;
  // console.log(typeof initialValue); // Fügt eine Konsolenausgabe hinzu, um den Datentyp von initialValue zu überprüfen

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


var wasBelow100 = Array(13).fill(true);  // Am Anfang, außerhalb der Funktion
var timerWasOn = Array(13).fill(false);

const checkedItemsReady = Array(13).fill(false); // Alle Prozesszonen sind auf Ready
const checkedItemsOff = Array(13).fill(false); // Alle Prozesszonen sind auf Off
function dwStatStartWizzard(i, nameNodeId, serverValues) {
  var werte = require('./profiles/simulation/variables/Variabeln');
  let rSetTolMax = serverValues[werte.data[i].SU3111_ZeExtruder_Hmi_udtEmPz_rPzTemp_rSetTolMax.nodeId.value];
  let rSetTolMaxMax = serverValues[werte.data[i].SU3111_ZeExtruder_Hmi_udtEmPz_rPzTemp_rSetTolMaxMax.nodeId.value];
  let rTempRel = serverValues[werte.data[i].SU3111_ZeExtruder_Parameter_udtEmPz_rTempRel_Set.nodeId.value];
  let rAct = serverValues[werte.data[i].SU3111_ZeExtruder_Hmi_udtEmPz_rPzTemp_rAct.nodeId.value];
  let rSet = serverValues[werte.data[i].SU3111_ZeExtruder_Parameter_udtEmPz_rTempHeatup_Set.nodeId.value];
  let rTempCooldown = serverValues[werte.data[i].SU3111_ZeExtruder_Parameter_udtEmPz_rTempCooldown_Set.nodeId.value];
  let rTempRelease = serverValues[werte.data[i].SU3111_ZeExtruder_Parameter_udtEmPz_rTempRel_Set.nodeId.value];
  let diActRemainTime
  const EierUhrEinstellZeit = serverValues[werte.data[i].SU3111_ZeExtruder_Parameter_udtEmPz_udTimeRel.nodeId.value];
  let EierUhrStartWert = EierUhrEinstellZeit
  const machine = new StateMachine();


  //********************************************************************************************************************************** */
  //********************************************************************************************************************************** */
  //********************************************************************************************************************************** */
  //********************************************************************************************************************************** */
  if (sharedState.HeatingisOn) {

    sharedState.ProzesszonesAreOff = false;
    if (rAct < rTempRelease) {
      wasBelow100[i] = true;
    }
    if (rAct > rTempRelease && !wasBelow100[i]) {
      serverValues[werte.data[i].SU3111_ZeExtruder_Hmi_udtEmPz_dwStat.nodeId.value] = (1 << 0) | (1 << 2) | (1 << 3) | (1 << 6) // BIT 6 stellt auf Ready

    }

    if (rAct < rSet && rAct < (rSet - rSetTolMaxMax) && wasBelow100[i]) {

      serverValues[werte.data[i].SU3111_ZeExtruder_Hmi_udtEmPz_dwStat.nodeId.value] = (1 << 0) | (1 << 2) | (1 << 3) | (1 << 9) // BIT 9 stellt auf Active
    }
    // geht nur rein, wenn es true ist, also rAct < 100
    if (rAct > (rSet - rSetTolMaxMax) && wasBelow100[i] && !hasEierUhrFinished[i]) {

      serverValues[werte.data[i].SU3111_ZeExtruder_Hmi_udtEmPz_dwStat.nodeId.value] = (1 << 0) | (1 << 2) | (1 << 3) | (1 << 15)  // BIT 15 Show remain time on hmi
      startEierUhr(i, function (index) {
        serverValues[werte.data[index].SU3111_ZeExtruder_Hmi_udtEmPz_dwStat.nodeId.value] = (1 << 0) | (1 << 2) | (1 << 3) | (1 << 6)  // Bit 6 stellt Icon auf Ready
      });
    }
    for (let i = 1; i < 14; i++) {
      if (serverValues[werte.data[i].SU3111_ZeExtruder_Hmi_udtEmPz_dwStat.nodeId.value] === 77) {
        checkedItemsReady[i] = true;
      }
    }
    if (checkedItemsReady.slice(1, 14).every(Boolean)) {
      sharedState.ProzesszonesAreReady = true
    }
  }

  //********************************************************************************************************************************** */
  //********************************************************************************************************************************** */
  // Shut Down Down Button Shut Down Down Button Shut Down Down Button Shut Down Down Button Shut Down Down Button Shut Down Down Button
  if (sharedState.ShutdownisOn) {
    for (let i = 1; i < 14; i++) {
      if (serverValues[werte.data[i].SU3111_ZeExtruder_Hmi_udtEmPz_dwStat.nodeId.value] === 13) {
        checkedItemsOff[i] = true;
      }
    }
    if (checkedItemsOff.slice(1, 14).every(Boolean)) {
      sharedState.ProzesszonesAreOff = true;
    }
    sharedState.ProzesszonesAreReady = false;
    if (rAct < rTempRelease) {
      wasBelow100[i] = true;
      hasEierUhrFinished = false
      checkedItemsReady[i] = false;

      serverValues[werte.data[i].SU3111_ZeExtruder_Hmi_udtEmPz_dwStat.nodeId.value] = (1 << 0) | (1 << 2) | (1 << 3) // Icon ist auf off
    }

    serverValues[werte.data[i].SU3111_ZeExtruder_Hmi_udtEmPz_rPzTemp_dwStat.nodeId.value] &= ~(1 << 15); // Temperature Monitoring not active

    serverValues[werte.data[i].SU3111_ZeExtruder_Hmi_udtEmPz_diActRemainTime.nodeId.value] = EierUhrEinstellZeit;
    EierUhrStartWert = EierUhrEinstellZeit;

    if (isEierUhrRunning[i]) {
      clearInterval(intervalEieruhrIds[i]);
      isEierUhrRunning[i] = false;  // Setzen Sie den Status für den spezifischen Index zurück
    }
  }
  //********************************************************************************************************************************** */
  //********************************************************************************************************************************** */
  // Cool Down Button ist gedrückt // Cool Down Button ist gedrückt // Cool Down Button ist gedrückt // Cool Down Button ist gedrückt // Cool Down Button ist gedrückt
  if (sharedState.CoolingisOn) {
    for (let i = 1; i < 14; i++) {
      if (serverValues[werte.data[i].SU3111_ZeExtruder_Hmi_udtEmPz_dwStat.nodeId.value] === 13) {
        checkedItemsOff[i] = true;
      }
    }
    if (checkedItemsOff.slice(1, 14).every(Boolean)) {
      sharedState.ProzesszonesAreOff = true;
    }
    sharedState.ProzesszonesAreReady = false;
    if (rAct < rTempRelease) {
      wasBelow100[i] = true;
      hasEierUhrFinished = false
      checkedItemsReady[i] = false;

      serverValues[werte.data[i].SU3111_ZeExtruder_Hmi_udtEmPz_dwStat.nodeId.value] = (1 << 0) | (1 << 2) | (1 << 3) | (1 << 7);
    }

    serverValues[werte.data[i].SU3111_ZeExtruder_Hmi_udtEmPz_rPzTemp_dwStat.nodeId.value] &= ~(1 << 15);
    if (rAct > rTempRelease) {
      serverValues[werte.data[i].SU3111_ZeExtruder_Hmi_udtEmPz_dwStat.nodeId.value] = (1 << 0) | (1 << 2) | (1 << 3) | (1 << 6) | (1 << 7); // Bit 7 Cool Down is running
    }
    serverValues[werte.data[i].SU3111_ZeExtruder_Hmi_udtEmPz_diActRemainTime.nodeId.value] = EierUhrEinstellZeit;
    EierUhrStartWert = EierUhrEinstellZeit;


    if (isEierUhrRunning[i]) {
      clearInterval(intervalEieruhrIds[i]);
      isEierUhrRunning[i] = false;  // Setzen Sie den Status für den spezifischen Index zurück
    }
    if (rAct < rTempCooldown) {
      serverValues[werte.data[i].SU3111_ZeExtruder_Hmi_udtEmPz_dwStat.nodeId.value] = (1 << 0) | (1 << 2) | (1 << 3) // Icon ist auf off
      //machine.setState('SU1000_Line_Hmi_udtLm_udtHeader_dwLineStatus', 'STOPPED')
    }

  }
}


let intervalEieruhrIds = [];
let isEierUhrRunning = Array(14).fill(false);  // Neue Variable als Array
let hasEierUhrFinished = Array(14).fill(false);  // Array, um den abgeschlossenen Status der Eieruhr für jeden Index zu verfolgen

function startEierUhr(i, callback) {
  var werte = require('./profiles/simulation/variables/Variabeln');

  // Überprüfen, ob bereits ein Intervall für den gegebenen Index i läuft
  // oder die Eieruhr für den Index i bereits abgelaufen ist
  if (isEierUhrRunning[i] || hasEierUhrFinished[i]) {
    return; // Wenn ja, brechen Sie die Funktion sofort ab
  }

  let EierUhrStartWert = serverValues[werte.data[i].SU3111_ZeExtruder_Parameter_udtEmPz_udTimeRel.nodeId.value];
  let intervalEieruhr = setInterval(function () {
    if (EierUhrStartWert > 0) {
      isEierUhrRunning[i] = true;
      EierUhrStartWert -= 1;
      serverValues[werte.data[i].SU3111_ZeExtruder_Hmi_udtEmPz_diActRemainTime.nodeId.value] = EierUhrStartWert;
    } else {
      clearInterval(intervalEieruhr);
      isEierUhrRunning[i] = false;
      hasEierUhrFinished[i] = true;  // Setzen Sie den "abgeschlossen" Status für den spezifischen Index
      intervalEieruhr = null;
      wasBelow100[i] = false
      if (callback) {
        callback(i);
      }
    }
  }, 500);
}



let pidTimerIddown = []
let pidTimerIdup = []
let pidTimerIdshutdown = []


const MAX_INDEX = 13;  // Index von 1 bis 13
const savedValues = {};  // Objekt zur Speicherung von rAct1 und integral

function getSaveKey(rAct2, index) {
  return `${Math.round(rAct2)}-${index}`;
}

function PIDUP(i, nameNodeId, serverValues, source) {
  var werte = require('./profiles/simulation/variables/Variabeln');
  if (pidTimerIddown[i]) clearTimeout(pidTimerIddown[i]); // löscht alle Timer von pidDown, falls ein Timer noch läuft
  if (pidTimerIdshutdown[i]) clearTimeout(pidTimerIdshutdown[i]); // löscht alle Timer von shutDown fals ein Timer noch läuft

  const Kp = serverValues[werte.data[i].SU3111_ZeExtruder_Parameter_udtCmPzPid_udtHeat_udtPid_rGain.nodeId.value];
  const Ki = serverValues[werte.data[i].SU3111_ZeExtruder_Parameter_udtCmPzPid_udtHeat_udtPid_rTi.nodeId.value];
  const Kd = serverValues[werte.data[i].SU3111_ZeExtruder_Parameter_udtCmPzPid_udtHeat_udtPid_rTd.nodeId.value];
  const dt = 0.01
  const T1 = 120
  const T2 = 115
  const K1 = 1
  const K2 = 1
  let rAct1 = serverValues[werte.data[i].SU3111_ZeExtruder_Hmi_udtEmPz_rPzTemp_rAct.nodeId.value];
  let rAct2 = serverValues[werte.data[i].SU3111_ZeExtruder_Hmi_udtEmPz_rPzTemp_rAct.nodeId.value];

  let rSet;
  if (source === "A") {
    rSet = serverValues[werte.data[i].SU3111_ZeExtruder_Parameter_udtEmPz_rTempHeatup_Set.nodeId.value];
    // Hängt mit der Funktion dwstatupdate zusammen. Für die Toleranzgrenzen braucht man einen Set Wert. Endung _rSet, rTempHeatup_Set geht nicht !
    serverValues[werte.data[i].SU3111_ZeExtruder_Hmi_udtEmPz_rPzTemp_rSet.nodeId.value] = serverValues[werte.data[i].SU3111_ZeExtruder_Parameter_udtEmPz_rTempHeatup_Set.nodeId.value]
  } else if (source === "B") {
    rSet = serverValues[werte.data[i].SU3111_ZeExtruder_Hmi_udtEmPz_rPzTemp_rSet.nodeId.value];
  }


  let integral

  let key = getSaveKey(rAct2, i);

  if (savedValues.hasOwnProperty(key)) {
    rAct1 = savedValues[key].rAct1;
    //integral = savedValues[key].integral;
    //} else {

  }
  lastError = 0;
  integral = 0;



  function calculateNextValue() {
    var werte = require('./profiles/simulation/variables/Variabeln');
    if (rSet - rAct2 > 0.1) {

      let error = rSet - rAct2;

      integral += error * dt;

      let derivative = (error - lastError) / dt;
      let pTerm = Kp * error;  // Proportional-Anteil
      let iTerm = Ki * integral;  // Integral-Anteil
      let dTerm = Kd * derivative;  // Derivative-Anteil

      let u = pTerm + iTerm + dTerm;

      lastError = error;

      serverValues[werte.data[i].SU3111_ZeExtruder_Hmi_udtEmPz_rActPidCv.nodeId.value] = u

      // 1.Glied PT1 der Reglestrecke
      let dy1 = (K1 * u - rAct1) / T1 * dt;
      rAct1 += dy1;

      // 2.Glied PT1 der Regelstrecke
      let dy2 = (K2 * rAct1 - rAct2) / T2 * dt;
      rAct2 += dy2;

      //Ausgabe des Act Wertes in der HMI 
      serverValues[werte.data[i].SU3111_ZeExtruder_Hmi_udtEmPz_rPzTemp_rAct.nodeId.value] = rAct2;

      let streckenAusgang = Math.round(serverValues[werte.data[i].SU3111_ZeExtruder_Hmi_udtEmPz_rPzTemp_rAct.nodeId.value]);

      for (let idx = 1; idx <= MAX_INDEX; idx++) {
        const key = getSaveKey(streckenAusgang, idx);
        if (!savedValues.hasOwnProperty(key)) {
          savedValues[key] = { rAct1: rAct1, integral: integral, };
          //console.log(`Gespeicherte Werte für ${key}: rAct1 = ${rAct1}, integral = ${integral}, rAct2 = ${streckenAusgang}`);
          break;  // Sobald wir einen Schlüssel gefunden haben, der nicht existiert und gespeichert wurde, brechen wir aus der Schleife aus.
        }
      }
      const timerup = setTimeout(calculateNextValue, 10);
      pidTimerIdup[i] = timerup; // Timer-ID am spezifischen Index setzen
    }
  }
  // Start der Berechnung
  calculateNextValue();
}

function PIDCOOLDOWN(i, nameNodeId, serverValues, source) {
  var werte = require('./profiles/simulation/variables/Variabeln');
  if (pidTimerIdup[i]) clearTimeout(pidTimerIdup[i]); // löscht alle Timer von pidUp
  if (pidTimerIdshutdown[i]) clearTimeout(pidTimerIdshutdown[i]); //löscht alle Timer von shutDown
  intervalEieruhrIds.forEach(intervalEieruhr => clearInterval(intervalEieruhr));

  const Kp = serverValues[werte.data[i].SU3111_ZeExtruder_Parameter_udtCmPzPid_udtHeat_udtPid_rGain.nodeId.value];
  const Ki = serverValues[werte.data[i].SU3111_ZeExtruder_Parameter_udtCmPzPid_udtHeat_udtPid_rTi.nodeId.value];
  const Kd = serverValues[werte.data[i].SU3111_ZeExtruder_Parameter_udtCmPzPid_udtHeat_udtPid_rTd.nodeId.value];
  const dt = 0.01
  const T1 = 80
  const T2 = 70
  const K1 = 1
  const K2 = 1
  let rAct1 = serverValues[werte.data[i].SU3111_ZeExtruder_Hmi_udtEmPz_rPzTemp_rAct.nodeId.value];
  let rAct2 = serverValues[werte.data[i].SU3111_ZeExtruder_Hmi_udtEmPz_rPzTemp_rAct.nodeId.value];
  let rSet
  if (source === "A") {
    rSet = 20
    // Hängt mit der Funktion dwstatupdate zusammen. Für die Toleranzgrenzen braucht man einen Set Wert. Endung _rSet, rTempHeatup_Set geht nicht !
    // serverValues[werte.data[i].SU3111_ZeExtruder_Hmi_udtEmPz_rPzTemp_rSet.nodeId.value]=serverValues[werte.data[i].SU3111_ZeExtruder_Parameter_udtEmPz_rTempHeatup_Set.nodeId.value]
  } else if (source === "B") {
    rSet = serverValues[werte.data[i].SU3111_ZeExtruder_Hmi_udtEmPz_rPzTemp_rSet.nodeId.value];
    if (rSet < 20) {
      rSet = 20
    }
  }
  let lastError = 0;

  let integral = 0

  function calculateNextValue() {
    if (Math.abs(rSet - rAct2) > 0.1) {
      let error = rSet - rAct2;

      integral += error * dt;

      let derivative = (error - lastError) / dt;

      let pTerm = Kp * error;  // Proportional-Anteil
      let iTerm = Ki * integral;  // Integral-Anteil
      let dTerm = Kd * derivative;  // Derivative-Anteil

      let u = pTerm + iTerm + dTerm;

      lastError = error;

      serverValues[werte.data[i].SU3111_ZeExtruder_Hmi_udtEmPz_rActPidCv.nodeId.value] = u

      // 1.Glied PT1 der Reglestrecke
      let dy1 = (K1 * u - rAct1) / T1 * dt;
      rAct1 += dy1;

      // 2.Glied PT1 der Regelstrecke
      let dy2 = (K2 * rAct1 - rAct2) / T2 * dt;
      rAct2 += dy2;

      //Ausgabe des Act Wertes in der HMI 
      serverValues[werte.data[i].SU3111_ZeExtruder_Hmi_udtEmPz_rPzTemp_rAct.nodeId.value] = rAct2;


      const timerdown = setTimeout(calculateNextValue, 10);
      pidTimerIddown[i] = timerdown; // Timer-ID am spezifischen Index setzen
    }
  }
  // Start der Berechnung
  calculateNextValue();
}


function PIDSHUTDOWN(i, nameNodeId, serverValues) {
  var werte = require('./profiles/simulation/variables/Variabeln');
  if (pidTimerIdup[i]) clearTimeout(pidTimerIdup[i]); //löscht alle Timer von PidUp
  if (pidTimerIddown[i]) clearTimeout(pidTimerIddown[i]); //löscht alle Timer von PidDown

  intervalEieruhrIds.forEach(intervalEieruhr => clearInterval(intervalEieruhr));


  const Kp = serverValues[werte.data[i].SU3111_ZeExtruder_Parameter_udtCmPzPid_udtHeat_udtPid_rGain.nodeId.value];
  const Ki = serverValues[werte.data[i].SU3111_ZeExtruder_Parameter_udtCmPzPid_udtHeat_udtPid_rTi.nodeId.value];
  const Kd = serverValues[werte.data[i].SU3111_ZeExtruder_Parameter_udtCmPzPid_udtHeat_udtPid_rTd.nodeId.value];
  const dt = 0.01
  const T1 = 20
  const T2 = 10
  const K1 = 1
  const K2 = 1

  var rAct1 = serverValues[werte.data[i].SU3111_ZeExtruder_Hmi_udtEmPz_rPzTemp_rAct.nodeId.value];
  var rAct2 = serverValues[werte.data[i].SU3111_ZeExtruder_Hmi_udtEmPz_rPzTemp_rAct.nodeId.value];

  var rSet = 20;

  let lastError = 0;

  let integral = 0

  function calculateNextValue() {
    if (Math.abs(rSet - rAct2) > 0.1) {
      let error = rSet - rAct2;

      integral += error * dt;

      let derivative = (error - lastError) / dt;

      let pTerm = Kp * error;  // Proportional-Anteil
      let iTerm = Ki * integral;  // Integral-Anteil
      let dTerm = Kd * derivative;  // Derivative-Anteil

      let u = pTerm + iTerm + dTerm;

      lastError = error;

      serverValues[werte.data[i].SU3111_ZeExtruder_Hmi_udtEmPz_rActPidCv.nodeId.value] = u

      // 1.Glied PT1 der Reglestrecke
      let dy1 = (K1 * u - rAct1) / T1 * dt;
      rAct1 += dy1;

      // 2.Glied PT1 der Regelstrecke
      let dy2 = (K2 * rAct1 - rAct2) / T2 * dt;
      rAct2 += dy2;

      //Ausgabe des Act Wertes in der HMI 
      serverValues[werte.data[i].SU3111_ZeExtruder_Hmi_udtEmPz_rPzTemp_rAct.nodeId.value] = rAct2;

      const timerdown = setTimeout(calculateNextValue, 10);
      pidTimerIdshutdown[i] = timerdown; // Timer-ID am spezifischen Index setzen
    }
  }
  // Start der Berechnung
  calculateNextValue();
}


function simulateScrewSpeed(i, nameNodeId, serverValues) {

 
  function simulateScrewRamp() {
    var werte = require('./profiles/simulation/variables/Variabeln');
    let x0 = serverValues[werte.data.SU3111_ZeExtruder_Hmi_udtEmExtruderDriveCtrl_rScrewSpeed_rAct.nodeId.value]; // Startwert
    let xf = serverValues[werte.data.SU3111_ZeExtruder_Hmi_udtEmExtruderDriveCtrl_rScrewSpeed_rSet.nodeId.value]; // Endwert bzw. Setwert
    let rampTime = serverValues[werte.data.SU3111_ZeExtruder_Parameter_udtEmExtruderDriveCtrl_udScrewRampTime_Set.nodeId.value];
    let roundness = serverValues[werte.data.SU3111_ZeExtruder_Parameter_udtEmExtruderDriveCtrl_udScrewRampRoundTime_Set.nodeId.value];
    let nominalTorque = serverValues[werte.data.SU3111_ZeExtruder_Config_udtEmExtruderDriveCtrl_rScrewTorqueNom_Set.nodeId.value];
    let maxDrehzahl = serverValues[werte.data.SU3111_ZeExtruder_Config_udtEmExtruderDriveCtrl_rScrewSpeedMax_Set.nodeId.value];
    let Durchsatzgesamt = serverValues[werte.data.SU2110_Feeding_Hmi_udtUm_rThroughputTotal_rAct.nodeId.value];
       let specificRate_Set = serverValues[werte.data.SU3111_ZeExtruder_Hmi_udtEmExtruderDriveCtrl_rSpecRate_rSet.nodeId.value]
   
    let t = 0;
    let increment = 0.1 / rampTime;  // basierend auf einem 100ms Update-Intervall
    // Volumen der Schnecke 
    const screwVolume = 3;

if(sharedState.SpeedCalculationSpecRateisOn){
  console.log("if(sharedState.SpeedCalculationSpecRateisOn){")
    // Wenn Anfangs auf Spec.Rate geschaltet wird und der Gesamtdurchsatz null ist, dann wird xf auf die minimale Drehzahl gestellt.
    if (Durchsatzgesamt === 0) {
      xf = serverValues[werte.data.SU3111_ZeExtruder_Hmi_udtEmExtruderDriveCtrl_rScrewSpeed_rOpMin.nodeId.value];
    } else {
      xf = Durchsatzgesamt / specificRate_Set;
    }
}

   /* if (!(TargetScrewSpeed & (1 << 8))) {

      // Wenn Anfangs auf Spec.Rate geschaltet wird und der Gesamtdurchsatz null ist, dann wird xf auf die minimale Drehzahl gestellt.
      if (Durchsatzgesamt === 0) {
        xf = serverValues[werte.data.SU3111_ZeExtruder_Hmi_udtEmExtruderDriveCtrl_rScrewSpeed_rOpMin.nodeId.value];
      } else {
        xf = Durchsatzgesamt / specificRate_Set;
      }
    }*/



    const normalizedTime = t;  // Da t von 0 bis 1 geht, ist es bereits normalisiert
    let currentSpeed = x0 + (xf - x0) / (1 + Math.exp(-roundness * (normalizedTime - 0.5)));

    // Geschwindigkeit wird der HMI zugewiesen
    serverValues[werte.data.SU3111_ZeExtruder_Hmi_udtEmExtruderDriveCtrl_rScrewSpeed_rAct.nodeId.value] = currentSpeed;
  
    let drehmoment = (currentSpeed / maxDrehzahl) * nominalTorque;
    let prozentDrehmoment = (drehmoment / nominalTorque) * 100
    serverValues[werte.data.SU3111_ZeExtruder_Hmi_udtEmExtruderDriveCtrl_rScrewTorque_rAct.nodeId.value] = prozentDrehmoment;

    console.log(" serverValues[werte.data.SU3111_ZeExtruder_Hmi_udtEmExtruderDriveCtrl_rScrewTorque_rAct.nodeId.value]                  "+   serverValues[werte.data.SU3111_ZeExtruder_Hmi_udtEmExtruderDriveCtrl_rScrewTorque_rAct.nodeId.value])

    // Drehmomentdichte berechnen
    let torqueDensity = drehmoment / screwVolume;
    serverValues[werte.data.SU3111_ZeExtruder_Hmi_udtEmExtruderDriveCtrl_rTorqueDensity_rAct.nodeId.value] = torqueDensity;

    // Berechnung der spezifischen Energie
    let specificEnergy = (prozentDrehmoment / 100) * currentSpeed * 60 / Durchsatzgesamt;
    serverValues[werte.data.SU3111_ZeExtruder_Hmi_udtEmExtruderDriveCtrl_rSpecificEnergy_rAct.nodeId.value] = (isFinite(specificEnergy) && specificEnergy !== undefined) ? specificEnergy : null; // Muss gemacht werden, damit Act Wert NaN anzeigt, wenn der Durchsatz Null ist dann wird hier durch null geteilt


    // Prüfen, ob der Unterschied zum Setwert kleiner als 0,01 ist
    if (Math.abs(currentSpeed - xf) < 0.1) {
     
     // Durch das Inkrement wird der Wert nie ganz auf den SetWert laufen, daher wird am Ende nochmal der Wert aktualisiert
      serverValues[werte.data.SU3111_ZeExtruder_Hmi_udtEmExtruderDriveCtrl_rScrewSpeed_rAct.nodeId.value] = xf
      clearInterval(intervalId);
    } else if ((xf > x0 && currentSpeed >= xf) || (xf < x0 && currentSpeed <= xf)) {
      // Durch das Inkrement wird der Wert nie ganz auf den SetWert laufen, daher wird am Ende nochmal der Wert aktualisiert
      serverValues[werte.data.SU3111_ZeExtruder_Hmi_udtEmExtruderDriveCtrl_rScrewSpeed_rAct.nodeId.value] = xf
      clearInterval(intervalId);
    }

    t += increment;  // Zeit inkrementieren
  }

  let intervalId = setInterval(simulateScrewRamp, 100);
}

//FEEDER//////////////
let intervalIds = {
  simulateFeederSingle: [],
  simulateFeederLine: [],
  simulateFeederWeight: [],
  startsimulateLineModeRamp: [],
  updateFeederWeight: []
};

function simulateSingleMode(i, nameNodeId, serverValues) { // Single Mode
  console.log("startfeeder")
  var werte = require('./profiles/simulation/variables/Variabeln');

  let currentThroughput = serverValues[werte.data[i].SU2110_Feeding_Hmi_udtEmFeeder_rThroughput_rAct.nodeId.value];

  function simulateFeederSingle() {

    // 1. Abbruchbedingung
    if (sharedState.intervalIds.stopSimulateFeederSingle) {

      console.log("stopen der Fuktion start Feeder");
      for (let id of intervalIds.simulateFeederSingle) {
        clearInterval(id);
      }
      intervalIds.simulateFeederSingle = [];  // Leeren des Arrays
      return;  // Funktion wird vorzeitig geändert, wir springen aus der Funktion "heraus"
    }
    let setThroughput = serverValues[werte.data[i].SU2110_Feeding_Hmi_udtEmFeeder_rThroughput_rSet.nodeId.value];
    let direction = (setThroughput > currentThroughput) ? 1 : -1;

    let inkrement = 1.135 * direction;
    currentThroughput += inkrement;

    // 2. Abbruchbedingung
    if (sharedState.feeders[i].FeederisOff) {

      clearInterval(intervalIds.simulateFeederSingle[i]);
    }
    // 3. Abbruchbedingung
    if ((direction === 1 && currentThroughput >= setThroughput) || (direction === -1 && currentThroughput <= setThroughput)) {
      currentThroughput = setThroughput;
      clearInterval(intervalIds.simulateFeederSingle[i]);
    }

    serverValues[werte.data[i].SU2110_Feeding_Hmi_udtEmFeeder_rThroughput_rAct.nodeId.value] = currentThroughput;
    serverValues[werte.data[i].SU2110_Feeding_Hmi_udtEmFeeder_rSpeed_rAct.nodeId.value] = currentThroughput;
  }

  let intervalId = setInterval(simulateFeederSingle, 200);
  intervalIds.simulateFeederSingle[i] = intervalId;
}

//feeder Line Modus
function simulateLineMode(i, nameNodeId, serverValues) {
  const werte = require('./profiles/simulation/variables/Variabeln');

  // Der Gesamtdurchsatz für die gesamte Linie
  let totalTargetThroughput = serverValues[werte.data.SU1000_Line_Hmi_udtLm_udtLineRamp_Throughput_rSet.nodeId.value];

  // Der aktuelle prozentuale Durchsatz für den spezifischen Feeder
  let currentFeederThroughput = serverValues[werte.data[i].SU2110_Feeding_Hmi_udtEmFeeder_rThroughputPerc_rAct.nodeId.value];

  function simulateFeederLine() {

    //1.  Abbruchbedingung
    if (sharedState.intervalIds.stopsimulateLineMode) {
      console.log("Abbruchbedingung stopSimulateThroughputRamp")
      for (let id of intervalIds.simulateFeederLine) {
        clearInterval(id);
      }
      intervalIds.simulateFeederLine = [];  // Leeren des Arrays
      return;  // Funktion wird vorzeitig geändert, wir springen aus der Funktion "heraus"
    }

    // Errechne den Ziel-Durchsatz für diesen Feeder basierend auf dem gewünschten prozentualen Anteil
    serverValues[werte.data[i].SU2110_Feeding_Hmi_udtEmFeeder_rThroughputPerc_rSet.nodeId.value] = serverValues[werte.data[i].SU2110_Feeding_Hmi_udtEmFeeder_rThroughputPercSet_rSet.nodeId.value]
    let targetThroughputForFeeder = totalTargetThroughput * (serverValues[werte.data[i].SU2110_Feeding_Hmi_udtEmFeeder_rThroughputPerc_rSet.nodeId.value] / 100);


    let direction = (targetThroughputForFeeder > currentFeederThroughput) ? 1 : -1;

    let inkrement = 1.0 * direction;
    currentFeederThroughput += inkrement;


    //2.  Abbruchbedingung
    if (sharedState.feeders[i].FeederisOff) {
      currentFeederThroughput = 0;
      clearInterval(intervalIds.simulateFeederLine[i]);
    }

    //3.  Abbruchbedingung
    if ((direction === 1 && currentFeederThroughput >= targetThroughputForFeeder) ||
      (direction === -1 && currentFeederThroughput <= targetThroughputForFeeder)) {
      currentFeederThroughput = targetThroughputForFeeder;
      clearInterval(intervalIds.simulateFeederLine[i]);
    }

    serverValues[werte.data[i].SU2110_Feeding_Hmi_udtEmFeeder_rThroughputPerc_rAct.nodeId.value] = (currentFeederThroughput / totalTargetThroughput) * 100
    serverValues[werte.data[i].SU2110_Feeding_Hmi_udtEmFeeder_rSpeed_rAct.nodeId.value] = serverValues[werte.data[i].SU2110_Feeding_Hmi_udtEmFeeder_rThroughputPerc_rAct.nodeId.value]

    //Wert wird der HMI zugewiesen

    serverValues[werte.data[i].SU2110_Feeding_Hmi_udtEmFeeder_rThroughput_rAct.nodeId.value] = Math.round(currentFeederThroughput);

  }
  let intervalId = setInterval(simulateFeederLine, 100);
  intervalIds.simulateFeederLine[i] = intervalId;
}


function simulateFeederWeight(i, nameNodeId, serverValues) {

  var werte = require('./profiles/simulation/variables/Variabeln');

  function updateFeederWeight() {

    // 1. Abbruchbedingung
    if (sharedState.intervalIds.stopSimulateFeederWeight) {
      console.log("Abbruchbedingung stopSimulateThroughputRamp")
      for (let id of intervalIds.updateFeederWeight) {
        clearTimeout(id);
      }
      intervalIds.updateFeederWeight = [];  // Leeren des Arrays
      return;  // Funktion wird vorzeitig geändert, wir springen aus der Funktion "heraus"
    }

    let ratePerInterval = serverValues[werte.data[i].SU2110_Feeding_Hmi_udtEmFeeder_rThroughput_rAct.nodeId.value];
    let currentLevel = serverValues[werte.data[i].SU2110_Feeding_Hmi_udtEmFeeder_rLevel_rAct.nodeId.value];

    currentLevel -= ratePerInterval;

    serverValues[werte.data[i].SU2110_Feeding_Hmi_udtEmFeeder_rTotal_rAct.nodeId.value] += ratePerInterval;

    // Wert wird der HMI zugewiesen
    serverValues[werte.data[i].SU2110_Feeding_Hmi_udtEmFeeder_rLevel_rAct.nodeId.value] = currentLevel;

    // 2. Abbruchbedingung
    if (currentLevel <= 0 || serverValues[werte.data[i].SU2110_Feeding_Hmi_udtEmFeeder_udtButtonStartStop_dwStat.nodeId.value] === 521) {
      clearInterval(intervalIds.updateFeederWeight[i]); // Stopp das Interval
      currentLevel = 0;
      //Wert wird der HMI zugewiesen
      serverValues[werte.data[i].SU2110_Feeding_Hmi_udtEmFeeder_rLevel_rAct.nodeId.value] = currentLevel;
    }
  }
    let intervalId = setInterval(updateFeederWeight, 200); // Setze das setInterval hier
    intervalIds.updateFeederWeight[i] = intervalId;
  }



function simulateLineModeRamp(i, nameNodeId, serverValues) {
  console.log(" in der funktion simulateLineModeRamp")
  var werte = require('./profiles/simulation/variables/Variabeln');

  // Zieldurchsatz kg/h bestimmen anhand vom Throughput Set
  let throughputSet = serverValues[werte.data.SU1000_Line_Hmi_udtLm_udtLineRamp_Throughput_rSet.nodeId.value]
  let througputSetPercLineMode = serverValues[werte.data[i].SU2110_Feeding_Hmi_udtEmFeeder_rThroughputPerc_rSet.nodeId.value]
  let targetThroughput = throughputSet * througputSetPercLineMode / 100


  // Steigung der Rampe 
  let gradient = serverValues[werte.data.SU1000_Line_Parameter_udtLm_rThroughputRamp_Set.nodeId.value] / 60
  console.log("gradient   " + gradient)

  function startsimulateLineModeRamp() {
    console.log("ppppppppppppppppppppppppppppppppppppppppppppppp")


    let currentThroughput = serverValues[werte.data[i].SU2110_Feeding_Hmi_udtEmFeeder_rThroughput_rAct.nodeId.value];
    // Bestimmt die Richtung, in die der Durchsatz verändert werden soll
    let direction = (targetThroughput > currentThroughput) ? 1 : -1;

    // Das Inkrement, also die Steigung  multipliziert mit der Richtung
    let increment = gradient * direction;

    // Aktualisiert den aktuellen Durchsatz mit dem Inkrement
    currentThroughput += increment;

    // Wert wird in der HMI bei den Feedern angezeigt
    serverValues[werte.data[i].SU2110_Feeding_Hmi_udtEmFeeder_rThroughput_rAct.nodeId.value] = currentThroughput;


    // 1. Abbruchbedingung
    if (sharedState.intervalIds.stopSimulateThroughputRampLine) {
      console.log("Abbruchbedingung stopSimulateThroughputRampLine")
      for (let id of intervalIds.startsimulateLineModeRamp) {
        clearInterval(id);
      }
      intervalIds.startsimulateLineModeRamp = [];  // Leeren des Arrays

      return;  // Funktion wird vorzeitig geändert, wir springen aus der Funktion "heraus"
    }

    // 2. Abbruchbedingung
    if (sharedState.FeederRampModeisOff) {
      console.log("fsdfsdfsdfsdfsdfdsdfsfsdfsdfsdfsdfsdfsdfsdfsdf")
      clearInterval(intervalIds.startsimulateLineModeRamp[1]);
      intervalIds.startsimulateLineModeRamp = []
    }

    //3. Abbruchbedingung
    if ((direction === 1 && currentThroughput > targetThroughput) || (direction === -1 && currentThroughput < targetThroughput)) {

      serverValues[werte.data[i].SU2110_Feeding_Hmi_udtEmFeeder_rThroughput_rAct.nodeId.value] = targetThroughput;
      sharedState.FeederRampModeisOff = true;
      sharedState.FeederRampModeisOn = false;
      clearInterval(intervalIds.startsimulateLineModeRamp[i]);
    }
  }

  let intervalId = setInterval(startsimulateLineModeRamp, 500);
  intervalIds.startsimulateLineModeRamp[i] = intervalId; // Speichern Sie intervalId im globalen intervalIds-Objekt
}


// Funktion zum Verteilen Prozente
function DistributionPercentages() {
  let sum = 0
  var werte = require('./profiles/simulation/variables/Variabeln');

  // Zuweisung von udtLineRamp.Throughput.rSet an  totalThroughput (Feeding Popup operating Point oder start Wizzard)
  let totalThroughput = serverValues[werte.data.SU1000_Line_Hmi_udtLm_udtLineRamp_Throughput_rSet.nodeId.value]
  let activeFeeders = 0;

  // Prüfung ob ein Feeder auf Line steht, Zähler wird dementsprechend hochgezählt.
  for (let i = 1; i <= 4; i++) {
    if (sharedState.feeders[i].FeederLineMode) {
      activeFeeders++;
    }
  }

  // Prüfung, ob genau ein Feeder auf Line Modus steht.
  if (activeFeeders === 1) {
    // Werte aktualisiert, wenn genau ein Feeder auf Line steht
    for (let i = 1; i <= 4; i++) {
      if (sharedState.feeders[i].FeederLineMode) {
        let feederThroughput = serverValues[werte.data[i].SU2110_Feeding_Hmi_udtEmFeeder_rThroughput_rSet.nodeId.value];
        if (feederThroughput < totalThroughput) { // Wenn der totale Durchsatz kleiner als der Durchsatz vom Feeder ist, dann wird der Durchsatz 
          serverValues[werte.data[i].SU2110_Feeding_Hmi_udtEmFeeder_rThroughput_rSet.nodeId.value] = totalThroughput;
        }
        if (feederThroughput > totalThroughput) { // Wenn Feeder Durchsatz größer als der Totale Durchsatz, ist der Totale Durchsatz gleich dem Feederdurchsatz
          totalThroughput = serverValues[werte.data[i].SU2110_Feeding_Hmi_udtEmFeeder_rThroughput_rSet.nodeId.value]
        }
      }
    }
  } ////////***** ACHTUNG GILT NUR WENN EIN FEEDER AUF LINE STEHT. ES IST DAFÜR GEDACHT, WENN GENAU EIN FEEDER AUF LINE STEHT */

  // Jetzt berechnen Sie totalThroughput
  for (let i = 1; i <= 4; i++) {
    if (sharedState.feeders[i].FeederLineMode) {
      sum += serverValues[werte.data[i].SU2110_Feeding_Hmi_udtEmFeeder_rThroughput_rSet.nodeId.value];
    }
  }
  serverValues[werte.data.SU1000_Line_Hmi_udtLm_udtLineRamp_Throughput_rSet.nodeId.value] = sum
  totalThroughput = sum

  // Prozentsatzberechnung
  for (let i = 1; i <= 4; i++) {
    if (sharedState.feeders[i].FeederLineMode) {
      let feederThroughput = serverValues[werte.data[i].SU2110_Feeding_Hmi_udtEmFeeder_rThroughput_rSet.nodeId.value];
      let percentage = (feederThroughput / totalThroughput) * 100;
      serverValues[werte.data[i].SU2110_Feeding_Hmi_udtEmFeeder_rThroughputPercSet_rSet.nodeId.value] = percentage;
    }
  }

  // Wenn keiner Feeder auf Line Mode steht, dann ist PercSet_rSet
  for (let i = 1; i <= 4; i++) {
    if (!sharedState.feeders[i].FeederLineMode) {
      serverValues[werte.data[i].SU2110_Feeding_Hmi_udtEmFeeder_rThroughputPercSet_rSet.nodeId.value] = 0; // Wenn feeder Mode nicht 2 ist, dann wird auf null gesetzt
    }
  }
}

function OilLubUhrFollowUp(i, nameNodeId, serverValues) {
  // Werte-Modul einbinden
  var werte = require('./profiles/simulation/variables/Variabeln');

  // Intervall starten
  var interval = setInterval(function () {
    // Wert um 1 verringern
    serverValues[werte.data.SU3111_ZeExtruder_Hmi_udtEmGearOilLubExt_udActRemainTimeFollowUp.nodeId.value]--;
    // Überprüfen, ob der Wert 0 oder kleiner ist
    if (serverValues[werte.data.SU3111_ZeExtruder_Hmi_udtEmGearOilLubExt_udActRemainTimeFollowUp.nodeId.value] <= 0) {
      // Wert auf 0 setzen, um sicherzustellen, dass er nicht negativ wird
      serverValues[werte.data.SU3111_ZeExtruder_Hmi_udtEmGearOilLubExt_udActRemainTimeFollowUp.nodeId.value] = 0;
      // Intervall stoppen, da der Wert 0 erreicht ist
      clearInterval(interval);
      sharedState.GearOilRemainTimeFollowUpExpired = true;

    }
  }, 500);
}


function OilLubUhr(i, nameNodeId, serverValues) {
  // Werte-Modul einbinden
  var werte = require('./profiles/simulation/variables/Variabeln');

  // Intervall starten
  var interval = setInterval(function () {
    // Wert um 1 verringern
    serverValues[werte.data.SU3111_ZeExtruder_Hmi_udtEmGearOilLubExt_udActRemainPreRunTime.nodeId.value]--;
    // Überprüfen, ob der Wert 0 oder kleiner ist
    if (serverValues[werte.data.SU3111_ZeExtruder_Hmi_udtEmGearOilLubExt_udActRemainPreRunTime.nodeId.value] <= 0) {
      // Wert auf 0 setzen, um sicherzustellen, dass er nicht negativ wird
      serverValues[werte.data.SU3111_ZeExtruder_Hmi_udtEmGearOilLubExt_udActRemainPreRunTime.nodeId.value] = 0;
      // Intervall stoppen, da der Wert 0 erreicht ist
      clearInterval(interval);
      sharedState.GearOilRemainPreRunTimeExpired = true;

    }
  }, 500); // Hier kann die "Geschwindkeit des Intervalls eingestellt werden !!"
}




let previousRAct = {};
let consecutiveCounter = {};

function updatedwstat(i, NameVariabel) {

  var werte = require('./profiles/simulation/variables/Variabeln');
  var rActKey;
  var data;

  if (typeof i !== "undefined") {
    rActKey = i + "_" + "." + NameVariabel; // Schlüssel basierend auf dem Präfix erstellen
    data = werte.data[i];
  } else {
    rActKey = "." + NameVariabel;
    data = werte.data;
  }

  var rAct = serverValues[data[NameVariabel + "_rAct"].nodeId.value];
  let rSetTolMin = serverValues[data[NameVariabel + "_rSetTolMin"].nodeId.value];
  let rSetTolMinMin = serverValues[data[NameVariabel + "_rSetTolMinMin"].nodeId.value];
  let rSetTolMax = serverValues[data[NameVariabel + "_rSetTolMax"].nodeId.value];
  let rSetTolMaxMax = serverValues[data[NameVariabel + "_rSetTolMaxMax"].nodeId.value];
  let set = serverValues[data[NameVariabel + "_rSet"].nodeId.value];
  let dwStat = serverValues[data[NameVariabel + "_dwStat"].nodeId.value];

  if (!(dwStat & (1 << 15))) { // Wenn das Bit für Tolerance Monitoring aus,  dann werden die Farben rot und orange "gelöscht"
    dwStat &= ~(1 << 16);
    dwStat &= ~(1 << 17);
  }


  if (rAct === 0) {
    dwStat &= ~(1 << 23);
    dwStat &= ~(1 << 22);
    dwStat &= ~(1 << 16);
    dwStat &= ~(1 << 17);
  } else {
    if (typeof previousRAct[rActKey] !== 'undefined') {
      if (rAct > previousRAct[rActKey]) {
        consecutiveCounter[rActKey] = 0;
        dwStat |= (1 << 22);
        dwStat &= ~(1 << 23);
      } else if (rAct < previousRAct[rActKey]) {
        consecutiveCounter[rActKey] = 0;
        dwStat |= (1 << 23);
        dwStat &= ~(1 << 22);
      } else {
        consecutiveCounter[rActKey] = (consecutiveCounter[rActKey] || 0) + 1;
        if (consecutiveCounter[rActKey] > 20) {
          dwStat &= ~(1 << 23);
          dwStat &= ~(1 << 22);
        }
      }
    }
  }

  if ((dwStat & (1 << 15)) && (dwStat & (1 << 14))) {


    if (rSetTolMin === 0 && rAct < rSetTolMinMin && rAct < rSetTolMax && rAct < rSetTolMaxMax) {
      dwStat &= ~(1 << 17);
      dwStat |= (1 << 16); // ROT
      //console.log("erste Stufe")
    }

    if (rAct === 0) {
      dwStat &= ~(1 << 23);
      dwStat &= ~(1 << 22);
      dwStat &= ~(1 << 16);
      dwStat &= ~(1 << 17);
    }

    if (rAct < rSetTolMin && rAct < rSetTolMinMin && rAct < rSetTolMax && rAct < rSetTolMaxMax) {
      dwStat &= ~(1 << 17);
      dwStat |= (1 << 16); // ROT
      //  console.log("erste Stude 1 B")
    }
    if (rAct > rSetTolMin && rSetTolMin > 0 && rAct < rSetTolMinMin && rAct < rSetTolMax && rAct < rSetTolMaxMax) {
      dwStat &= ~(1 << 16);
      dwStat |= (1 << 17);
      //console.log("zweite Stufe")
    }

    if (rAct > rSetTolMinMin && rAct < rSetTolMax && rAct < rSetTolMaxMax) {
      dwStat &= ~(1 << 16);
      dwStat &= ~(1 << 17);
      // console.log("dritte Stufe")
    }

    if (rAct > rSetTolMin && rAct > rSetTolMinMin && rAct < rSetTolMaxMax && rAct > rSetTolMax) {
      dwStat &= ~(1 << 16);
      dwStat |= (1 << 17);
      // console.log("vierte Stufe")
    }
    if (rAct > rSetTolMin && rAct > rSetTolMinMin && rAct > rSetTolMaxMax && rAct > rSetTolMax) {
      dwStat &= ~(1 << 17);
      dwStat |= (1 << 16);
      // console.log("fünfte Stufe")
    }
  }


  if ((dwStat & (1 << 15)) && !(dwStat & (1 << 14))) {
    // BIT15 ist gesetzt und BIT14 ist nicht gesetzt

    // Relativ zum Set-Wert
    if (rAct < set - rSetTolMinMin) {
      dwStat |= (1 << 16);
    }
    if (rAct < set - rSetTolMin && rAct > set - rSetTolMinMin) {
      dwStat &= ~(1 << 16);
      dwStat |= (1 << 17);
    }
    if (rAct > set - rSetTolMin) {
      dwStat &= ~((1 << 16) | (1 << 17));
    }
    if (rAct > set + rSetTolMinMin) {
      dwStat |= (1 << 16);
    }

    if (rAct > set + rSetTolMin) {
      dwStat |= (1 << 17);
    }

  }


  // Am Ende der Logik speichern wir den aktuellen Wert von rAct
  previousRAct[rActKey] = rAct;
  serverValues[data[NameVariabel + "_dwStat"].nodeId.value] = dwStat
};

class StateMachine {
  constructor() {
    this.states = {
      IDLE: { name: "IDLE", bit: (1 << 5) },
      RUNNING: { name: "RUNNING", bit: (1 << 3) },
      STOPPED: { name: "STOPPED", bit: (1 << 4) },
      E_STOP_PRESSED: { name: "E-STOP-PRESSED", bit: (1 << 1) },
      E_STOP_RELEASED: { name: "E-STOP-RELEASED", bit: (1 << 2) },
      PREHEATING: { name: "PREHEATING", bit: (1 << 2) }
    };
  }
  setState(variableName, stateName) {
    var werte = require('./profiles/simulation/variables/Variabeln');
    const state = this.states[stateName];

    const variableKey = werte.data[variableName].nodeId.value;

    if (typeof serverValues[variableKey] !== 'undefined') {
      serverValues[variableKey] = state.bit;
    } else {
      console.error(`serverValues enthält keinen Schlüssel namens ${variableKey}`);
    }
  }
}

class StateMachineNavigationBar {
  constructor() {
    this.states = {
      STOPPED: { name: "STOPPED", bit: (1 << 4) },
      RUNNING: { name: "RUNNING", bit: (1 << 5) },
      WARNING: { name: "WARNING", bit: (1 << 2) },
      ERROR: { name: "ERROR", bit: (1 << 1) },
      CRITICAL: { name: "CRITICAL", bit: (1 << 0) }
    };
  }

  setState(variableName, stateName) {
    var werte = require('./profiles/simulation/variables/Variabeln');
    const state = this.states[stateName];

    // if (!state) {
    // console.error(`Ungültiger Statusname: ${stateName}`);
    //return;
    // }

    const variableKey = werte.data[variableName].nodeId.value;

    if (typeof serverValues[variableKey] !== 'undefined') {
      serverValues[variableKey] = state.bit;
    } else {
      console.error(`serverValues enthält keinen Schlüssel namens ${variableKey}`);
    }
  }
}



module.exports = {
  createCustomVariable: createCustomVariable,
  initial: initial,
  createVariableforTime: createVariableforTime,
  Uint32createCustomVariable: Uint32createCustomVariable,
  Uint64createCustomVariable: Uint64createCustomVariable,
  Uint16createCustomVariable: Uint16createCustomVariable,
  Int32createCustomVariable: Int32createCustomVariable,
  initialSingleValue: initialSingleValue,
  PIDUP: PIDUP,
  PIDCOOLDOWN: PIDCOOLDOWN,
  simulateScrewSpeed: simulateScrewSpeed,
  PIDSHUTDOWN: PIDSHUTDOWN,
  createCustomVariableString: createCustomVariableString,
  simulateSingleMode: simulateSingleMode,
  simulateFeederWeight: simulateFeederWeight,
  OilLubUhr: OilLubUhr,
  OilLubUhrFollowUp: OilLubUhrFollowUp,
  simulateLineMode: simulateLineMode,
  updatedwstat: updatedwstat,
  simulateLineModeRamp: simulateLineModeRamp,
  dwStatStartWizzard: dwStatStartWizzard,
  DistributionPercentages: DistributionPercentages,
  StateMachine: StateMachine,
  StateMachineNavigationBar: StateMachineNavigationBar

}