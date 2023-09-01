

var serverModule = require('./../opcua-demo-server/server');
const { SetGetlogic } = require('./Setter_Getter_Logiken')

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


function getNumberWithBit(...bits) {
  return bits.reduce((num, bit) => num | (1 << bit), 0);
}







let pidTimerIddown = []
let pidTimerIdup = []
let intervalEieruhrIds = []

function PIDUP(i, nameNodeId, serverValues) {
  var werte = require('./profiles/simulation/variables/Variabeln');
  pidTimerIddown.forEach(timerdown => clearTimeout(timerdown)); // Alle Timer löschen


  var rGain = serverValues[werte.data[i].SU3111_ZeExtruder_Parameter_udtCmPzPid_udtHeat_udtPid_rGain.nodeId.value]; //2.250 
  var rTi = serverValues[werte.data[i].SU3111_ZeExtruder_Parameter_udtCmPzPid_udtHeat_udtPid_rTi.nodeId.value]; //47.94
  var rTd = serverValues[werte.data[i].SU3111_ZeExtruder_Parameter_udtCmPzPid_udtHeat_udtPid_rTd.nodeId.value]; //4.32

  var dt = 0.00041;
  var T1 = 60;
  var T2 = 20;

  var K = 1.5;
  var rAct1 = serverValues[werte.data[i].SU3111_ZeExtruder_Hmi_udtEmPz_rPzTemp_rAct.nodeId.value];
  var rAct2 = serverValues[werte.data[i].SU3111_ZeExtruder_Hmi_udtEmPz_rPzTemp_rAct.nodeId.value];

  var rSet = serverValues[werte.data[i].SU3111_ZeExtruder_Parameter_udtEmPz_rTempHeatup_Set.nodeId.value];

  var samplingTime = serverValues[werte.data[i].SU3111_ZeExtruder_Parameter_udtCmPzPid_udtHeat_udtPid_rCycle.nodeId.value];
  var errorSum = 0;
  var lastError = 0;

  var intervalId = 0;



  function calculateNextValue() {


    if (Math.abs(rAct2 - rSet) > 0.1) {

      var error = rSet - rAct2;
      var proportional = rGain * error;
      errorSum += error;
      var integral = rGain / rTi * errorSum;
      var derivative = rGain * rTd * (error - lastError) / dt;
      lastError = error;
      var u = proportional + integral + derivative;

      value = Math.abs(u / 100).toFixed(2);
      if (value > 100) {
        serverValues[werte.data[i].SU3111_ZeExtruder_Hmi_udtEmPz_rActPidCv.nodeId.value] = 100
      } else {
        serverValues[werte.data[i].SU3111_ZeExtruder_Hmi_udtEmPz_rActPidCv.nodeId.value] = value
      }


      console.log("serverValues[werte.data[i].SU3111_ZeExtruder_Hmi_udtEmPz_rActPidCv.nodeId.value]      " + serverValues[werte.data[i].SU3111_ZeExtruder_Hmi_udtEmPz_rActPidCv.nodeId.value])

      var dy1 = (K * u - rAct1) / T1 * dt;
      rAct1 += dy1;

      var dy2 = (K * rAct1 - rAct2) / T2 * dt;
      rAct2 += dy2;

      serverValues[werte.data[i].SU3111_ZeExtruder_Hmi_udtEmPz_rPzTemp_rAct.nodeId.value] = rAct2;
      // console.log("rAct2     :   " +rAct2);


      var rTempTolH = serverValues[werte.data[i].SU3111_ZeExtruder_Parameter_udtEmPz_rTempTolH_Set.nodeId.value];
      var rTempTolHH = serverValues[werte.data[i].SU3111_ZeExtruder_Parameter_udtEmPz_rTempTolHH_Set.nodeId.value];
      var rTempRel = serverValues[werte.data[i].SU3111_ZeExtruder_Parameter_udtEmPz_rTempRel_Set.nodeId.value];


      if (rAct2 < rSet && rAct2 < (rSet - rTempTolH)) {
        let value = getNumberWithBit(0, 2, 3, 9); // Buttons neben dem fenster Icon wird auf active gestellt
        serverValues[werte.data[i].SU3111_ZeExtruder_Hmi_udtEmPz_dwStat.nodeId.value] = value;
      }

      if (rAct2 > rTempRel) {
        let value = getNumberWithBit(0, 2, 3, 9, 15, 17, 18, 20, 25); // Eieruhr Icon ist, aber läuft nicht runter
        serverValues[werte.data[i].SU3111_ZeExtruder_Hmi_udtEmPz_dwStat.nodeId.value] = value;
      }

      if (rAct2 > (rSet - rTempTolHH)) {
        if (rAct2 > rTempRel) {
          let nodeId = serverValues[werte.data[i].SU3111_ZeExtruder_Hmi_udtEmPz_diActRemainTime.nodeId.value];





          let intervalEieruhr = setInterval(() => {
            if (nodeId > 0) {
              nodeId -= 1;
              serverValues[werte.data[i].SU3111_ZeExtruder_Hmi_udtEmPz_diActRemainTime.nodeId.value] = nodeId;
            } else {
              clearInterval(intervalEieruhr);
              intervalEieruhr = null;
              let value = getNumberWithBit(0, 2, 3, 9, 6); // Icon ready wird gesetzt
              serverValues[werte.data[i].SU3111_ZeExtruder_Hmi_udtEmPz_dwStat.nodeId.value] = value;

            }
          }, 200);
          intervalEieruhrIds.push(intervalEieruhr); // Füge die Interval-ID zum Array hinzu

        } else {
          // Wenn nodeId bereits 0 ist, setze den zweiten Zustand
          let value = getNumberWithBit(0, 2, 3, 9, 6);
          serverValues[werte.data[i].SU3111_ZeExtruder_Hmi_udtEmPz_dwStat.nodeId.value] = value;
        }
      }



      //console.log("eWerte von error  " + error)
      if (error < rTempTolH && error < rTempTolHH) {
        let value1 = getNumberWithBit(0, 2, 3, 25, 22); // Farben gehen weg
        //console.log(" erste if asdadas   " + error)
        serverValues[werte.data[i].SU3111_ZeExtruder_Hmi_udtEmPz_rPzTemp_dwStat.nodeId.value] = value1;
      }
      if ((rSet - rAct2) < rTempTolHH && (rSet - rAct2) > rTempTolH) {
        let value3 = getNumberWithBit(0, 2, 3, 25, 22, 17); // Fenster wird orange
        serverValues[werte.data[i].SU3111_ZeExtruder_Hmi_udtEmPz_rPzTemp_dwStat.nodeId.value] = value3;
      }
      if ((rSet - rAct2) > rTempTolHH) {
        let value1 = getNumberWithBit(0, 2, 3, 25, 22, 15, 16); // Fenster wird rot , da out of tolerance

        let value3 = getNumberWithBit(0, 2, 3, 9); // Buttons neben dem fenster Icon wird auf active gestellt

        serverValues[werte.data[i].SU3111_ZeExtruder_Hmi_udtEmPz_rPzTemp_dwStat.nodeId.value] = value1;
        //  serverValues[werte.data[i].SU3111_ZeExtruder_Hmi_udtEmPz_dwStat.nodeId.value] = value3;
      }



      if (Math.abs(rAct2 - rSet) < 0.1) {
        let value8 = getNumberWithBit(0, 2, 3, 25); // Pfeil nach oben geht aus
        serverValues[werte.data[i].SU3111_ZeExtruder_Hmi_udtEmPz_rPzTemp_dwStat.nodeId.value] = value8;
      }
      const timerup = setTimeout(calculateNextValue, samplingTime);
      pidTimerIdup.push(timerup); // Timer-ID zum Array hinzufügen
    }
  }
  // Start der Berechnung
  calculateNextValue();

}

function PIDDOWN(i, nameNodeId, serverValues) {
  var werte = require('./profiles/simulation/variables/Variabeln');
  console.log("Ich bin in der PID DOWN Funktion drin");
  pidTimerIdup.forEach(timerup => clearTimeout(timerup)); // Alle Timer löschen
  intervalEieruhrIds.forEach(intervalEieruhr => clearInterval(intervalEieruhr));
  //  pidTimerIds = []; // Timer-Array zurücksetzen

  var rGain = serverValues[werte.data[i].SU3111_ZeExtruder_Parameter_udtCmPzPid_udtCool_udtPid_rGain.nodeId.value]; //2.250 
  var rTi = serverValues[werte.data[i].SU3111_ZeExtruder_Parameter_udtCmPzPid_udtCool_udtPid_rTi.nodeId.value]; //47.94
  var rTd = serverValues[werte.data[i].SU3111_ZeExtruder_Parameter_udtCmPzPid_udtCool_udtPid_rTd.nodeId.value]; //4.32

  var dt = 0.00041;
  var T1 = 8;
  var T2 = 5;

  var K = 1.5;
  var rAct1 = serverValues[werte.data[i].SU3111_ZeExtruder_Hmi_udtEmPz_rPzTemp_rAct.nodeId.value];
  var rAct2 = serverValues[werte.data[i].SU3111_ZeExtruder_Hmi_udtEmPz_rPzTemp_rAct.nodeId.value];

  var rSet = serverValues[werte.data[i].SU3111_ZeExtruder_Parameter_udtEmPz_rTempCooldown_Set.nodeId.value];

  var samplingTime = serverValues[werte.data[i].SU3111_ZeExtruder_Parameter_udtCmPzPid_udtCool_udtPid_rCycle.nodeId.value];
  var errorSum = 0;
  var lastError = 0;

  var intervalId = 0;


  function calculateNextValue() {
    if (Math.abs(rAct2 - rSet) > 0.1) {
      var error = rSet - rAct2;
      var proportional = rGain * error;
      errorSum += error;
      var integral = rGain / rTi * errorSum;
      var derivative = rGain * rTd * (error - lastError) / dt;
      lastError = error;
      var u = proportional + integral + derivative;

      value = (u / 100).toFixed(2);

      if (value < -100) {
        serverValues[werte.data[i].SU3111_ZeExtruder_Hmi_udtEmPz_rActPidCv.nodeId.value] = -100;
      } else if (value > 0) {
        serverValues[werte.data[i].SU3111_ZeExtruder_Hmi_udtEmPz_rActPidCv.nodeId.value] = 0;
      } else {
        serverValues[werte.data[i].SU3111_ZeExtruder_Hmi_udtEmPz_rActPidCv.nodeId.value] = value
      }

      var dy1 = (K * u - rAct1) / T1 * dt;
      rAct1 += dy1;

      var dy2 = (K * rAct1 - rAct2) / T2 * dt;
      rAct2 += dy2;

      serverValues[werte.data[i].SU3111_ZeExtruder_Hmi_udtEmPz_rPzTemp_rAct.nodeId.value] = rAct2;


      // console.log("rAct2     :   " +rAct2);



      //  console.log("eWerte von error  " + error)


      if (Math.abs(rAct2 - rSet) > 0.1) {
        let value1 = getNumberWithBit(0, 2, 3, 23); // Pfeil nach unten geht 
        serverValues[werte.data[i].SU3111_ZeExtruder_Hmi_udtEmPz_rPzTemp_dwStat.nodeId.value] = value1;
        let value2 = getNumberWithBit(0, 2, 3, 9, 7); // Icon wird auf Cooling gesetzt
        serverValues[werte.data[i].SU3111_ZeExtruder_Hmi_udtEmPz_dwStat.nodeId.value] = value2;
      }
      if (Math.abs(rAct2 - rSet) < 0.1) {
        let value1 = getNumberWithBit(0, 2, 3); // Pfeil nach unten geht aus
        serverValues[werte.data[i].SU3111_ZeExtruder_Hmi_udtEmPz_rPzTemp_dwStat.nodeId.value] = value1;
        let value = getNumberWithBit(0, 2, 3, 9, 6); // Icon ready wird gesetzt
        serverValues[werte.data[i].SU3111_ZeExtruder_Hmi_udtEmPz_dwStat.nodeId.value] = value;
      }
      const timerdown = setTimeout(calculateNextValue, samplingTime);
      pidTimerIddown.push(timerdown); // Timer-ID zum Array hinzufügen

    }
  }

  // Start der Berechnung
  calculateNextValue();
}


function PIDSHUTDOWN(i, nameNodeId, serverValues) {
  var werte = require('./profiles/simulation/variables/Variabeln');
  console.log("Ich bin in der PID DOWN Funktion drin");
  pidTimerIdup.forEach(timerup => clearTimeout(timerup)); // Alle Timer löschen
  intervalEieruhrIds.forEach(intervalEieruhr => clearInterval(intervalEieruhr));
  //  pidTimerIds = []; // Timer-Array zurücksetzen

  var rGain = serverValues[werte.data[i].SU3111_ZeExtruder_Parameter_udtCmPzPid_udtCool_udtPid_rGain.nodeId.value]; //2.250 
  var rTi = serverValues[werte.data[i].SU3111_ZeExtruder_Parameter_udtCmPzPid_udtCool_udtPid_rTi.nodeId.value]; //47.94
  var rTd = serverValues[werte.data[i].SU3111_ZeExtruder_Parameter_udtCmPzPid_udtCool_udtPid_rTd.nodeId.value]; //4.32

  var dt = 0.00041;
  var T1 = 15;
  var T2 = 5;

  var K = 1.5;
  var rAct1 = serverValues[werte.data[i].SU3111_ZeExtruder_Hmi_udtEmPz_rPzTemp_rAct.nodeId.value];
  var rAct2 = serverValues[werte.data[i].SU3111_ZeExtruder_Hmi_udtEmPz_rPzTemp_rAct.nodeId.value];

  var rSet = 0;

  var samplingTime = serverValues[werte.data[i].SU3111_ZeExtruder_Parameter_udtCmPzPid_udtCool_udtPid_rCycle.nodeId.value];
  var errorSum = 0;
  var lastError = 0;

  var intervalId = 0;


  function calculateNextValue() {

    if (Math.abs(rAct2 - rSet) > 0.01) {
      var error = rSet - rAct2;

      var proportional = rGain * error;
      errorSum += error;
      var integral = rGain / rTi * errorSum;
      var derivative = rGain * rTd * (error - lastError) / dt;
      lastError = error;
      var u = proportional + integral + derivative;

      serverValues[werte.data[i].SU3111_ZeExtruder_Hmi_udtEmPz_rActPidCv.nodeId.value] = Math.abs(u / 100).toFixed(2);

      var dy1 = (K * u - rAct1) / T1 * dt;
      rAct1 += dy1;

      var dy2 = (K * rAct1 - rAct2) / T2 * dt;
      rAct2 += dy2;

      if (rAct2 < 20) {
        serverValues[werte.data[i].SU3111_ZeExtruder_Hmi_udtEmPz_rPzTemp_rAct.nodeId.value] = 20;
      } else {
        serverValues[werte.data[i].SU3111_ZeExtruder_Hmi_udtEmPz_rPzTemp_rAct.nodeId.value] = rAct2;
      }



      //  console.log("eWerte von error  " + error)


      if (Math.abs(rAct2 - rSet) > 0.1) {
        let value1 = getNumberWithBit(0, 2, 3, 23); // Pfeil nach unten geht 
        serverValues[werte.data[i].SU3111_ZeExtruder_Hmi_udtEmPz_rPzTemp_dwStat.nodeId.value] = value1;
        let value2 = getNumberWithBit(0, 2, 3, 9, 7); // Icon wird auf Cooling gesetzt
        serverValues[werte.data[i].SU3111_ZeExtruder_Hmi_udtEmPz_dwStat.nodeId.value] = value2;
      }
      if (Math.abs(rAct2 - rSet) < 0.1) {
        let value1 = getNumberWithBit(0, 2, 3); // Pfeil nach unten geht aus
        serverValues[werte.data[i].SU3111_ZeExtruder_Hmi_udtEmPz_rPzTemp_dwStat.nodeId.value] = value1;
        let value = getNumberWithBit(0, 2, 3,); // Icon ready wird gesetzt
        serverValues[werte.data[i].SU3111_ZeExtruder_Hmi_udtEmPz_dwStat.nodeId.value] = value;
      }
      const timerdown = setTimeout(calculateNextValue, samplingTime);
      pidTimerIddown.push(timerdown); // Timer-ID zum Array hinzufügen

    }
  }

  // Start der Berechnung
  calculateNextValue();
}




/*function simulateScrewSpeed(i, nameNodeId, serverValues) {
  var werte = require('./profiles/simulation/variables/Variabeln');

  let maxDrehzahl = serverValues[werte.data.SU3111_ZeExtruder_Config_udtEmExtruderDriveCtrl_rScrewSpeedMax_Set.nodeId.value];
  let nominalTorque = serverValues[werte.data.SU3111_ZeExtruder_Config_udtEmExtruderDriveCtrl_rScrewTorqueNom_Set.nodeId.value];
  let gearFactor = serverValues[werte.data.SU3111_ZeExtruder_Config_udtEmExtruderDriveCtrl_rGearFactor_Set.nodeId.value];
  let set = serverValues[werte.data.SU3111_ZeExtruder_Hmi_udtEmExtruderDriveCtrl_rScrewSpeed_rSet.nodeId.value];
  let act = serverValues[werte.data.SU3111_ZeExtruder_Hmi_udtEmExtruderDriveCtrl_rScrewSpeed_rAct.nodeId.value];
  let rampTime = serverValues[werte.data.SU3111_ZeExtruder_Parameter_udtEmExtruderDriveCtrl_udScrewRampTime_Set.nodeId.value];
  let roundTime = serverValues[werte.data.SU3111_ZeExtruder_Parameter_udtEmExtruderDriveCtrl_udScrewRampRoundTime_Set.nodeId.value];*/

function simulateScrewSpeed(i, nameNodeId, serverValues) {
  function sCurve(x0, xf, b, c, t) {
    return x0 + (xf - x0) / (1 + Math.exp(-b * (t - c)));
  }

  var werte = require('./profiles/simulation/variables/Variabeln');
  let rScrewTorqueH = serverValues[werte.data.SU3111_ZeExtruder_Parameter_udtEmExtruderDriveCtrl_rScrewTorqueH_Set.nodeId.value];
  let rScrewTorqueHH = serverValues[werte.data.SU3111_ZeExtruder_Parameter_udtEmExtruderDriveCtrl_rScrewTorqueHH_Set.nodeId.value];
  let rSpeedTolHH = serverValues[werte.data.SU3111_ZeExtruder_Parameter_udtEmExtruderDriveCtrl_rScrewSpeedTolHH_Set.nodeId.value];
  let rSpeedTolH = serverValues[werte.data.SU3111_ZeExtruder_Parameter_udtEmExtruderDriveCtrl_rScrewSpeedTolH_Set.nodeId.value];
  let gearFactor = serverValues[werte.data.SU3111_ZeExtruder_Config_udtEmExtruderDriveCtrl_rGearFactor_Set.nodeId.value];
  let roundness = serverValues[werte.data.SU3111_ZeExtruder_Parameter_udtEmExtruderDriveCtrl_udScrewRampRoundTime_Set.nodeId.value];
  let nominalTorque = serverValues[werte.data.SU3111_ZeExtruder_Config_udtEmExtruderDriveCtrl_rScrewTorqueNom_Set.nodeId.value]
  let maxDrehzahl = serverValues[werte.data.SU3111_ZeExtruder_Config_udtEmExtruderDriveCtrl_rScrewSpeedMax_Set.nodeId.value]
  let rampTime = serverValues[werte.data.SU3111_ZeExtruder_Parameter_udtEmExtruderDriveCtrl_udScrewRampTime_Set.nodeId.value];
  let schneckendurchmesserInCm = 4;
  let x0 = serverValues[werte.data.SU3111_ZeExtruder_Hmi_udtEmExtruderDriveCtrl_rScrewSpeed_rAct.nodeId.value]; // Startwert
  let xf = serverValues[werte.data.SU3111_ZeExtruder_Hmi_udtEmExtruderDriveCtrl_rScrewSpeed_rSet.nodeId.value]; // Endwert bzw. Setwert
  let c = rampTime;
  let Emax = 0.1
  let lamda = Emax / Math.abs((xf - x0)) * roundness
  let b = 1 / c * Math.log((1 - lamda) / (lamda))

  const totalIncrements = 500;
  let currentStep = 1 / gearFactor;

  function calculateNextValue() {
    let t = currentStep * (rampTime / totalIncrements);
    let currentValue = sCurve(x0, xf, b, c, t);
    console.log('Aktueller Wert:', currentValue);
    let value3 = getNumberWithBit(0, 2, 3, 25, 22, 17);

    let drehmoment = (currentValue / maxDrehzahl) * nominalTorque
    let prozentDrehmoment = (drehmoment / nominalTorque) * 100
    serverValues[werte.data.SU3111_ZeExtruder_Hmi_udtEmExtruderDriveCtrl_rScrewTorque_rAct.nodeId.value] = prozentDrehmoment;

    let drehmomentdichte = drehmoment / schneckendurchmesserInCm ** 3;
    serverValues[werte.data.SU3111_ZeExtruder_Hmi_udtEmExtruderDriveCtrl_rTorqueDensity_rAct.nodeId.value] = drehmomentdichte;

    if (prozentDrehmoment > rScrewTorqueHH) {
      let value = getNumberWithBit(16);//  Rot
      serverValues[werte.data.SU3111_ZeExtruder_Hmi_udtEmExtruderDriveCtrl_rScrewTorque_dwStat.nodeId.value] = value;
    } else if (prozentDrehmoment > rScrewTorqueH && prozentDrehmoment < rScrewTorqueHH) {
      let value = getNumberWithBit(17);//  Orange
      serverValues[werte.data.SU3111_ZeExtruder_Hmi_udtEmExtruderDriveCtrl_rScrewTorque_dwStat.nodeId.value] = value;
    } else {
      let value = getNumberWithBit(0);//  rot
      serverValues[werte.data.SU3111_ZeExtruder_Hmi_udtEmExtruderDriveCtrl_rScrewTorque_dwStat.nodeId.value] = value;
    }


    serverValues[werte.data.SU3111_ZeExtruder_Hmi_udtEmExtruderDriveCtrl_rScrewSpeed_rAct.nodeId.value] = currentValue;

    if (x0 <= xf && currentValue >= xf || x0 >= xf && currentValue <= xf || Math.abs(currentValue - xf) <= 0.1) {

      let value = getNumberWithBit(0);
      serverValues[werte.data.SU3111_ZeExtruder_Hmi_udtEmExtruderDriveCtrl_rScrewSpeed_dwStat.nodeId.value] = value;
      console.log('Hochfahren abgeschlossen.');
    } else {

      if (x0 < xf) {
        let value = getNumberWithBit(16, 22); // Pfeil zeigt nach oben und ist rot
        serverValues[werte.data.SU3111_ZeExtruder_Hmi_udtEmExtruderDriveCtrl_rScrewSpeed_dwStat.nodeId.value] = value;

        if (x0 < xf && (xf - currentValue) < rSpeedTolHH) {
          let value = getNumberWithBit(0, 2, 3, 25, 22, 17);// Pfeil zeigt nach oben und ist orange
          serverValues[werte.data.SU3111_ZeExtruder_Hmi_udtEmExtruderDriveCtrl_rScrewSpeed_dwStat.nodeId.value] = value;

          if (x0 < xf && (xf - currentValue) < rSpeedTolH) {
            let value = getNumberWithBit(0, 2, 3, 25, 22,);// Pfeil zeigt nach oben und Farben gehen aus
            serverValues[werte.data.SU3111_ZeExtruder_Hmi_udtEmExtruderDriveCtrl_rScrewSpeed_dwStat.nodeId.value] = value;

          }
        }
      }

      if (x0 > xf) {
        let value = getNumberWithBit(23); // Pfeil zeigt nach unten
        serverValues[werte.data.SU3111_ZeExtruder_Hmi_udtEmExtruderDriveCtrl_rScrewSpeed_dwStat.nodeId.value] = value;
      }

      // Wert, wenn es hochfährt
      currentStep++;
      setTimeout(calculateNextValue, 10);
    }
  }

  calculateNextValue();
}



//FEEDER//////////////
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
      console.log("Test ob ich rin binS")
      currentThroughput = 0;
      clearInterval(intervalId); // Simulation beenden
  } else if ((direction === 1 && currentThroughput >= setThroughput) || 
             (direction === -1 && currentThroughput <= setThroughput)) {
      currentThroughput = setThroughput;
      clearInterval(intervalId); // Simulation beenden
  }
  
   // Durchsatz aktualisieren
 serverValues[werte.data[i].SU2110_Feeding_Hmi_udtEmFeeder_rThroughput_rAct.nodeId.value] = currentThroughput;
 //Speed aktualisieren
 serverValues[werte.data[i].SU2110_Feeding_Hmi_udtEmFeeder_rSpeed_rAct.nodeId.value] = currentThroughput
    
  }

  // Starten Sie das Intervall hier innerhalb der startFeeder-Funktion und speichern Sie den IntervalID zur späteren Verwendung
  let intervalId = setInterval(simulateFeeder, 500);
}

//feeder Line Modus

function simulateLineMode(i, nameNodeId, serverValues) {
  const werte = require('./profiles/simulation/variables/Variabeln');

  // Der Gesamtdurchsatz für die gesamte Linie
  let totalTargetThroughput = serverValues[werte.data.SU1000_Line_Hmi_udtLm_udtLineRamp_Throughput_rSet.nodeId.value];

  // Der aktuelle prozentuale Durchsatz für den spezifischen Feeder
  let currentFeederThroughput = serverValues[werte.data[i].SU2110_Feeding_Hmi_udtEmFeeder_rThroughputPerc_rAct.nodeId.value];

  function simulateThroughputRamp() {




    let rampRate = serverValues[werte.data.SU1000_Line_Parameter_udtLm_rThroughputRamp_Set.nodeId.value] / 60; // Convert kg/h/min to kg/h/s for our simulation

    console.log("Total Target Throughput:", totalTargetThroughput);
    console.log("Ramp Rate (kg/h/s):", rampRate);


    console.log("CurrentFeederThroughputPercentage:", currentFeederThroughput);
    // Errechne den Ziel-Durchsatz für diesen Feeder basierend auf dem gewünschten prozentualen Anteil
    serverValues[werte.data[i].SU2110_Feeding_Hmi_udtEmFeeder_rThroughputPerc_rSet.nodeId.value] = serverValues[werte.data[i].SU2110_Feeding_Hmi_udtEmFeeder_rThroughputPercSet_rSet.nodeId.value]
    let targetThroughputForFeeder = totalTargetThroughput * (serverValues[werte.data[i].SU2110_Feeding_Hmi_udtEmFeeder_rThroughputPerc_rSet.nodeId.value] / 100);

    console.log("Target Throughput for Feeder:", targetThroughputForFeeder);



    let direction = (targetThroughputForFeeder > currentFeederThroughput) ? 1 : -1;
    console.log(" let direction :", direction);
    // Adjust throughput based on the ramp rate
    let inkrement = 1.0 * direction;
    currentFeederThroughput += inkrement;

    console.log("Current Throughput for Feeder:", currentFeederThroughput);



    // Stop Bedingung
    if (serverValues[werte.data[i].SU2110_Feeding_Hmi_udtEmFeeder_udtButtonStartStop_dwCtrl.nodeId.value] === 64) {
      currentFeederThroughput = 0;
      clearInterval(intervalId);
  } else if ((direction === 1 && currentFeederThroughput >= targetThroughputForFeeder) ||
             (direction === -1 && currentFeederThroughput <= targetThroughputForFeeder)) {
      currentFeederThroughput = targetThroughputForFeeder;
      clearInterval(intervalId);
  }
    serverValues[werte.data[i].SU2110_Feeding_Hmi_udtEmFeeder_rThroughputPerc_rAct.nodeId.value] = (currentFeederThroughput / totalTargetThroughput) * 100
    // Update the actual throughput for this feeder
    serverValues[werte.data[i].SU2110_Feeding_Hmi_udtEmFeeder_rThroughput_rAct.nodeId.value] = currentFeederThroughput;
    console.log("serverValues[werte.data[i].SU2110_Feeding_Hmi_udtEmFeeder_rThroughput_rAct.nodeId.value]:", serverValues[werte.data[i].SU2110_Feeding_Hmi_udtEmFeeder_rThroughput_rAct.nodeId.value]);

  }

  let intervalId = setInterval(simulateThroughputRamp, 100);
}



function simulateFeederWeight(i, nameNodeId, serverValues) {

  var werte = require('./profiles/simulation/variables/Variabeln');
  let intervalId;

  if (serverValues[werte.data[i].SU2110_Feeding_Hmi_udtEmFeeder_udtButtonStartStop_dwStat.nodeId.value] === 2569) {

    const ratePerInterval = 1;
    intervalId = setInterval(function () {

      let currentLevel = serverValues[werte.data[i].SU2110_Feeding_Hmi_udtEmFeeder_rLevel_rAct.nodeId.value];

      currentLevel -= ratePerInterval;


      serverValues[werte.data[i].SU2110_Feeding_Hmi_udtEmFeeder_rLevel_rAct.nodeId.value] = currentLevel;

      serverValues[werte.data[i].SU2110_Feeding_Hmi_udtEmFeeder_rTotal_rAct.nodeId.value] += ratePerInterval;

      //   console.log(`Neues Level: ${currentLevel}kg, Total: ${serverValues[werte.data[i].SU2110_Feeding_Hmi_udtEmFeeder_rTotal_rAct.nodeId.value]}kg`);

      if (currentLevel <= 0 || serverValues[werte.data[i].SU2110_Feeding_Hmi_udtEmFeeder_udtButtonStartStop_dwStat.nodeId.value] === 521) {
        clearInterval(intervalId);
        console.log('Simulation gestoppt, entweder weil das Level Null oder den Zielwert erreicht hat oder weil die Stop-Bedingung erfüllt wurde.');
      }
    }, 900);
  } else {
    console.log('Startknopf nicht aktiviert. Simulation nicht gestartet.');
  }
}



// Eieruhr der Ölschmierung //

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
    }


  }, 500); // Hier kann die "Geschwindkeit des Intervalls eingestellt werden !!"
}


function updateRThroughputPercSetGesamt() {
  var werte = require('./profiles/simulation/variables/Variabeln');
  let rThroughputPercSet1 = serverValues[werte.data[1].SU2110_Feeding_Hmi_udtEmFeeder_rThroughputPercSet_rSet.nodeId.value];
  let rThroughputPercSet2 = serverValues[werte.data[2].SU2110_Feeding_Hmi_udtEmFeeder_rThroughputPercSet_rSet.nodeId.value];
  let rThroughputPercSet3 = serverValues[werte.data[3].SU2110_Feeding_Hmi_udtEmFeeder_rThroughputPercSet_rSet.nodeId.value];
  let rThroughputPercSet4 = serverValues[werte.data[4].SU2110_Feeding_Hmi_udtEmFeeder_rThroughputPercSet_rSet.nodeId.value];
  var rThroughputPercSetGesamt = rThroughputPercSet1 + rThroughputPercSet2 + rThroughputPercSet3 + rThroughputPercSet4;
  serverValues[werte.data.SU2110_Feeding_Hmi_udtUm_rThroughputPerc_rAct.nodeId.value] = rThroughputPercSetGesamt;
}

module.exports = {
  createCustomVariable: createCustomVariable,
  initial: initial,
  Uint32createCustomVariable: Uint32createCustomVariable,
  Uint64createCustomVariable: Uint64createCustomVariable,
  initialSingleValue: initialSingleValue,
  PIDUP: PIDUP,
  PIDDOWN: PIDDOWN,
  getNumberWithBit: getNumberWithBit,
  simulateScrewSpeed: simulateScrewSpeed,
  PIDSHUTDOWN: PIDSHUTDOWN,
  createCustomVariableString: createCustomVariableString,
  startFeeder: startFeeder,
  simulateFeederWeight: simulateFeederWeight,
  OilLubUhr: OilLubUhr,
  updateRThroughputPercSetGesamt: updateRThroughputPercSetGesamt,
  simulateLineMode: simulateLineMode,
 

}