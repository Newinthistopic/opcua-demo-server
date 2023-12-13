
var { serverValues, opcua, namespace3 } = require('./../opcua-demo-server/server');

var sharedState = require('./states');




/**
 * Erstellt ein neues Objekt in einem bestimmten Namensraum.
 * 
.  @param {Object} organizedByValue - Das organisatorische Element, unter dem das neue Objekt erstellt wird.
 * @param {string} browseName - Der Anzeigename des zu erstellenden Objekts.
 * @param {string} nodeId - Der eindeutige Identifikator für das neue Objekt. Wird Teil der nodeId.
 * @returns {Object} Das erstellte Objekt mit der generierten nodeId.

 */
/* Beispielaufrufe der Funktion
 var SU3111_ZeExtruder_Hmi = functions.createObject(datablocksGlobal, 'SU3111_ZeExtruder.Hmi', 'SU3111_ZeExtruder.Hmi');
 var SU3111_ZeExtruder_Config = functions.createObject(datablocksGlobal, 'SU3111_ZeExtruder_Config', 'SU3111_ZeExtruder_Config');
*/

function createObject(organizedByValue, browseName, nodeId) {
  return namespace3.addObject({
    organizedBy: organizedByValue,
    browseName: browseName,
    nodeId: "ns=3;s=\"" + nodeId + "\""
  });
}


/**
 * Erstellt eine benutzerdefinierte Variable des Typs Float in einem OPC UA Server.
 * 
 * Diese Funktion generiert eine Variable mit einem dynamischen nodeId-Format, basierend auf den übergebenen Teilen (part1, part2, etc.).
 * Die Variable wird einem bestimmten Komponenten-Objekt zugeordnet und kann benutzerdefinierte Logik für Get- und Set-Operationen enthalten.
 * 
 * @param {number} i - Der Index, der in die nodeId eingefügt werden soll. Kann undefined sein.
 * @param {string} variableName - Der Name der zu erstellenden Variable.
 * @param {Object} componentOf - Das OPC UA-Objekt, zu dem diese Variable gehört.
 * @param {string} browseName - Der Anzeigename der Variable im OPC UA Server.
 * @param {string} part1 - Der erste Teil der nodeId.
 * @param {string} part2 - Der zweite Teil der nodeId.
 * @param {string} [part3] - Der optionale dritte Teil der nodeId.
 * @param {string} [part4] - Der optionale vierte Teil der nodeId.
 * @param {string} [part5] - Der optionale fünfte Teil der nodeId.
 * @param {Function} [customGetLogic] - Eine optionale benutzerdefinierte Logik, die bei Get-Operationen ausgeführt wird.
 * @param {Function} [customSetLogic] - Eine optionale benutzerdefinierte Logik, die bei Set-Operationen ausgeführt wird.
 * @returns {Object} Die erstellte OPC UA-Variable.
 */
/* Beispielaufrufe der Funktion
  var SU3111_ZeExtruder_Hmi_udtEmExtruderDriveCtrl_rScrewPower = functions.createCustomVariableFloat(undefined, "SU3111_ZeExtruder_Hmi_udtEmExtruderDriveCtrl_rScrewPower", SU3111_ZeExtruder_Hmi_udtEmExtruderDriveCtrl, "rScrewPower", "SU3111_ZeExtruder.Hmi", "udtEmExtruderDriveCtrl", "rScrewPower", undefined, undefined, SetGetlogic.SU3111_ZeExtruder_Hmi_udtEmExtruderDriveCtrl_rScrewPowerGet, SetGetlogic.SU3111_ZeExtruder_Hmi_udtEmExtruderDriveCtrl_rScrewPowerSet)
    data.SU3111_ZeExtruder_Hmi_udtEmExtruderDriveCtrl_rScrewPower_dwCtrl = functions.createCustomVariableFloat(undefined, "SU3111_ZeExtruder_Hmi_udtEmExtruderDriveCtrl_rScrewPower_dwCtrl", SU3111_ZeExtruder_Hmi_udtEmExtruderDriveCtrl_rScrewPower, "dwCtrl", "SU3111_ZeExtruder.Hmi", "udtEmExtruderDriveCtrl", "rScrewPower", "dwCtrl", undefined, SetGetlogic.SU3111_ZeExtruder_Hmi_udtEmExtruderDriveCtrl_rScrewPower_dwCtrlGet, SetGetlogic.SU3111_ZeExtruder_Hmi_udtEmExtruderDriveCtrl_rScrewPower_dwCtrlSet)
    data.SU3111_ZeExtruder_Hmi_udtEmExtruderDriveCtrl_rScrewPower_dwStat = functions.createCustomVariableUint32(undefined, "SU3111_ZeExtruder_Hmi_udtEmExtruderDriveCtrl_rScrewPower_dwStat", SU3111_ZeExtruder_Hmi_udtEmExtruderDriveCtrl_rScrewPower, "dwStat", "SU3111_ZeExtruder.Hmi", "udtEmExtruderDriveCtrl", "rScrewPower", "dwStat", undefined, SetGetlogic.SU3111_ZeExtruder_Hmi_udtEmExtruderDriveCtrl_rScrewPower_dwStatGet, SetGetlogic.SU3111_ZeExtruder_Hmi_udtEmExtruderDriveCtrl_rScrewPower_dwStatSet)
    data.SU3111_ZeExtruder_Hmi_udtEmExtruderDriveCtrl_rScrewPower_rAct = functions.createCustomVariableFloat(undefined, "SU3111_ZeExtruder_Hmi_udtEmExtruderDriveCtrl_rScrewPower_rAct", SU3111_ZeExtruder_Hmi_udtEmExtruderDriveCtrl_rScrewPower, "rAct", "SU3111_ZeExtruder.Hmi", "udtEmExtruderDriveCtrl", "rScrewPower", "rAct", undefined, SetGetlogic.SU3111_ZeExtruder_Hmi_udtEmExtruderDriveCtrl_rScrewPower_rActGet, SetGetlogic.SU3111_ZeExtruder_Hmi_udtEmExtruderDriveCtrl_rScrewPower_rActSet)
    data.SU3111_ZeExtruder_Hmi_udtEmExtruderDriveCtrl_rScrewPower_rActRec = functions.createCustomVariableFloat(undefined, "SU3111_ZeExtruder_Hmi_udtEmExtruderDriveCtrl_rScrewPower_rActRec", SU3111_ZeExtruder_Hmi_udtEmExtruderDriveCtrl_rScrewPower, "rActRec", "SU3111_ZeExtruder.Hmi", "udtEmExtruderDriveCtrl", "rScrewPower", "rActRec", undefined, SetGetlogic.SU3111_ZeExtruder_Hmi_udtEmExtruderDriveCtrl_rScrewPower_rActRecGet, SetGetlogic.SU3111_ZeExtruder_Hmi_udtEmExtruderDriveCtrl_rScrewPower_rActRecSet)

     data[i].SU3111_ZeExtruder_Hmi_udtCmMeltPressLoop = functions.createCustomVariableFloat(i, "SU3111_ZeExtruder_Hmi_udtCmMeltPressLoop", SU3111_ZeExtruder_Hmi_udtCmMeltPress, i.toString(), "SU3111_ZeExtruder.Hmi", "udtCmMeltPress", undefined, undefined, undefined, SetGetlogic.SU3111_ZeExtruder_Hmi_udtCmMeltPressLoopGet, SetGetlogic.SU3111_ZeExtruder_Hmi_udtCmMeltPressLoopSet)
        data[i].SU3111_ZeExtruder_Hmi_udtCmMeltPress_dwCtrl = functions.createCustomVariableFloat(i, "SU3111_ZeExtruder_Hmi_udtCmMeltPress_dwCtrl", data[i].SU3111_ZeExtruder_Hmi_udtCmMeltPressLoop, "dwCtrl", "SU3111_ZeExtruder.Hmi", "udtCmMeltPress", "dwCtrl", undefined, undefined, SetGetlogic.SU3111_ZeExtruder_Hmi_udtCmMeltPress_dwCtrlGet, SetGetlogic.SU3111_ZeExtruder_Hmi_udtCmMeltPress_dwCtrlSet)
        data[i].SU3111_ZeExtruder_Hmi_udtCmMeltPress_dwStat = functions.createCustomVariableUint32(i, "SU3111_ZeExtruder_Hmi_udtCmMeltPress_dwStat", data[i].SU3111_ZeExtruder_Hmi_udtCmMeltPressLoop, "dwStat", "SU3111_ZeExtruder.Hmi", "udtCmMeltPress", "dwStat", undefined, undefined, SetGetlogic.SU3111_ZeExtruder_Hmi_udtCmMeltPress_dwStatGet, SetGetlogic.SU3111_ZeExtruder_Hmi_udtCmMeltPress_dwStatSet)
        data[i].SU3111_ZeExtruder_Hmi_udtCmMeltPress_rPresValueX1 = functions.createCustomVariableFloat(i, "SU3111_ZeExtruder_Hmi_udtCmMeltPress_rPresValueX1", data[i].SU3111_ZeExtruder_Hmi_udtCmMeltPressLoop, "rPresValueX1", "SU3111_ZeExtruder.Hmi", "udtCmMeltPress", "rPresValueX1", undefined, undefined, SetGetlogic.SU3111_ZeExtruder_Hmi_udtCmMeltPress_rPresValueX1Get, SetGetlogic.SU3111_ZeExtruder_Hmi_udtCmMeltPress_rPresValueX1Set)
        data[i].SU3111_ZeExtruder_Hmi_udtCmMeltPress_rPresValueX2 = functions.createCustomVariableFloat(i, "SU3111_ZeExtruder_Hmi_udtCmMeltPress_rPresValueX2", data[i].SU3111_ZeExtruder_Hmi_udtCmMeltPressLoop, "rPresValueX2", "SU3111_ZeExtruder.Hmi", "udtCmMeltPress", "rPresValueX2", undefined, undefined, SetGetlogic.SU3111_ZeExtruder_Hmi_udtCmMeltPress_rPresValueX2Get, SetGetlogic.SU3111_ZeExtruder_Hmi_udtCmMeltPress_rPresValueX2Set)
        data[i].SU3111_ZeExtruder_Hmi_udtCmMeltPress_rPress = functions.createCustomVariableFloat(i, "SU3111_ZeExtruder_Hmi_udtCmMeltPress_rPress", data[i].SU3111_ZeExtruder_Hmi_udtCmMeltPressLoop, "rPress", "SU3111_ZeExtruder.Hmi", "udtCmMeltPress", "rPress", undefined, undefined, SetGetlogic.SU3111_ZeExtruder_Hmi_udtCmMeltPress_rPressGet, SetGetlogic.SU3111_ZeExtruder_Hmi_udtCmMeltPress_rPressSet)
        data[i].SU3111_ZeExtruder_Hmi_udtCmMeltPress_rPress_dwCtrl = functions.createCustomVariableFloat(i, "SU3111_ZeExtruder_Hmi_udtCmMeltPress_rPress_dwCtrl", data[i].SU3111_ZeExtruder_Hmi_udtCmMeltPress_rPress, "dwCtrl", "SU3111_ZeExtruder.Hmi", "udtCmMeltPress", "rPress", "dwCtrl", undefined, SetGetlogic.SU3111_ZeExtruder_Hmi_udtCmMeltPress_rPress_dwCtrlGet, SetGetlogic.SU3111_ZeExtruder_Hmi_udtCmMeltPress_rPress_dwCtrlSet)
        data[i].SU3111_ZeExtruder_Hmi_udtCmMeltPress_rPress_dwStat = functions.createCustomVariableUint32(i, "SU3111_ZeExtruder_Hmi_udtCmMeltPress_rPress_dwStat", data[i].SU3111_ZeExtruder_Hmi_udtCmMeltPress_rPress, "dwStat", "SU3111_ZeExtruder.Hmi", "udtCmMeltPress", "rPress", "dwStat", undefined, SetGetlogic.SU3111_ZeExtruder_Hmi_udtCmMeltPress_rPress_dwStatGet, SetGetlogic.SU3111_ZeExtruder_Hmi_udtCmMeltPress_rPress_dwStatSet)
        data[i].SU3111_ZeExtruder_Hmi_udtCmMeltPress_rPress_rAct = functions.createCustomVariableFloat(i, "SU3111_ZeExtruder_Hmi_udtCmMeltPress_rPress_rAct", data[i].SU3111_ZeExtruder_Hmi_udtCmMeltPress_rPress, "rAct", "SU3111_ZeExtruder.Hmi", "udtCmMeltPress", "rPress", "rAct", undefined, SetGetlogic.SU3111_ZeExtruder_Hmi_udtCmMeltPress_rPress_rActGet, SetGetlogic.SU3111_ZeExtruder_Hmi_udtCmMeltPress_rPress_rActSet)
        data[i].SU3111_ZeExtruder_Hmi_udtCmMeltPress_rPress_rActRec = functions.createCustomVariableFloat(i, "SU3111_ZeExtruder_Hmi_udtCmMeltPress_rPress_rActRec", data[i].SU3111_ZeExtruder_Hmi_udtCmMeltPress_rPress, "rActRec", "SU3111_ZeExtruder.Hmi", "udtCmMeltPress", "rPress", "rActRec", undefined, SetGetlogic.SU3111_ZeExtruder_Hmi_udtCmMeltPress_rPress_rActRecGet, SetGetlogic.SU3111_ZeExtruder_Hmi_udtCmMeltPress_rPress_rActRecSet)
*/

function createCustomVariableFloat(i, variableName, componentOf, browseName, part1, part2, part3, part4, part5, customGetLogic, customSetLogic) {
  var nodeId = `"ns=3;s=\"${part1}\".\"${part2}\"`;

  if (i !== undefined) { nodeId += `[${i}]`; }
  if (part3) { nodeId += `.\"${part3}\"`; }
  if (part4) { nodeId += `.\"${part4}\"`; }
  if (part5) { nodeId += `.\"${part5}\"`; }
  var newVariable = {};
  newVariable[variableName] = namespace3.addVariable({
    componentOf: componentOf,
    browseName: browseName,
    dataType: opcua.DataType.Float,
    nodeId: nodeId,
    value: {
      get: function () {
        var nameNodeId = {};
        nameNodeId[variableName] = this.nodeId.value;


        setTimeout(() => {
          if (customGetLogic) {
            customGetLogic(i, nameNodeId, serverValues);
          }
        }, 1);

        return new opcua.Variant({ dataType: opcua.DataType.Float, value: serverValues[nameNodeId[variableName]] });
      },
      set: function (variant) {
        var nameNodeId = {};
        nameNodeId[variableName] = this.nodeId.value;
        serverValues[nameNodeId[variableName]] = parseFloat(variant.value);
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
        nameNodeId[variableName] = this.nodeId.value;

        setTimeout(() => {
          if (customGetLogic) {
            customGetLogic(i, nameNodeId, serverValues);
          }
        }, 1);

        return new opcua.Variant({ dataType: opcua.DataType.String, value: serverValues[nameNodeId[variableName]] });
      },
      set: function (variant) {
        return opcua.StatusCodes.Good;
      }
    },
  });
  return newVariable[variableName];
}

function createCustomVariableUint16(i, variableName, componentOf, browseName, part1, part2, part3, part4, part5, customGetLogic, customSetLogic) {
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

        nameNodeId[variableName] = this.nodeId.value;

        setTimeout(() => {
          if (customGetLogic) {
            customGetLogic(i, nameNodeId, serverValues);
          }
        }, 1);

        var serverValue = serverValues[nameNodeId[variableName]];
        if (serverValue === undefined) {
          serverValue = 0;
        }

        return new opcua.Variant({ dataType: opcua.DataType.UInt16, value: serverValue });
      },
      set: function (variant) {
        var nameNodeId = {};
        nameNodeId[variableName] = this.nodeId.value;
        serverValues[nameNodeId[variableName]] = parseInt(variant.value);
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

        nameNodeId[variableName] = this.nodeId.value;

        setTimeout(() => {
          if (customGetLogic) {
            customGetLogic(i, nameNodeId, serverValues);
          }
        }, 1);

        var serverValue = serverValues[nameNodeId[variableName]];
        if (serverValue === undefined) {
          serverValue = 0;
        }

        return new opcua.Variant({ dataType: opcua.DataType.UInt16, value: serverValue });
      },
      set: function (variant) {
        var nameNodeId = {};
        nameNodeId[variableName] = this.nodeId.value;
        serverValues[nameNodeId[variableName]] = parseInt(variant.value);
        if (customSetLogic) {
          customSetLogic(i, nameNodeId, serverValues);
        }
        return opcua.StatusCodes.Good;
      }
    },
  });
  return newVariable[variableName];
}



function createCustomVariableUint32(i, variableName, componentOf, browseName, part1, part2, part3, part4, part5, customGetLogic, customSetLogic) {
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
        nameNodeId[variableName] = this.nodeId.value;

        setTimeout(() => {
          if (customGetLogic) {
            customGetLogic(i, nameNodeId, serverValues);
          }
        }, 1);

        var serverValue = serverValues[nameNodeId[variableName]];
        if (serverValue === undefined) {
          serverValue = 0;
        }

        return new opcua.Variant({ dataType: opcua.DataType.UInt32, value: serverValue });
      },
      set: function (variant) {
        var nameNodeId = {};
        nameNodeId[variableName] = this.nodeId.value;
        serverValues[nameNodeId[variableName]] = parseInt(variant.value);

        if (customSetLogic) {
          customSetLogic(i, nameNodeId, serverValues);
        }
        return opcua.StatusCodes.Good;
      }
    },
  });
  return newVariable[variableName];
}

function createCustomVariableInt32(i, variableName, componentOf, browseName, part1, part2, part3, part4, part5, customGetLogic, customSetLogic) {
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
        nameNodeId[variableName] = this.nodeId.value;

        setTimeout(() => {
          if (customGetLogic) {
            customGetLogic(i, nameNodeId, serverValues);
          }
        }, 1);

        var serverValue = serverValues[nameNodeId[variableName]];
        if (serverValue === undefined) {
          serverValue = 0;
        }

        return new opcua.Variant({ dataType: opcua.DataType.Int32, value: serverValue });
      },
      set: function (variant) {
        var nameNodeId = {};
        nameNodeId[variableName] = this.nodeId.value;
        serverValues[nameNodeId[variableName]] = parseInt(variant.value);

        if (customSetLogic) {
          customSetLogic(i, nameNodeId, serverValues);
        }
        return opcua.StatusCodes.Good;
      }
    },
  });
  return newVariable[variableName];
}


function createCustomVariableUint64(i, variableName, componentOf, browseName, part1, part2, part3, part4, part5, customGetLogic, customSetLogic) {
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

        nameNodeId[variableName] = this.nodeId.value;

        setTimeout(() => {
          if (customGetLogic) {
            customGetLogic(i, nameNodeId, serverValues);
          }
        }, 1);

        var serverValue = serverValues[nameNodeId[variableName]];
        if (serverValue === undefined) {
          serverValue = 0;
        }

        return new opcua.Variant({ dataType: opcua.DataType.UInt64, value: serverValue });
      },
      set: function (variant) {
        var nameNodeId = {};
        nameNodeId[variableName] = this.nodeId.value;
        serverValues[nameNodeId[variableName]] = parseInt(variant.value);
        if (customSetLogic) {
          customSetLogic(i, nameNodeId, serverValues);
        }
        return opcua.StatusCodes.Good;
      }
    },
  });
  return newVariable[variableName];
}

/**
 * Initialisiert Serverwerte für eine Reihe von Node-IDs.
 * 
 * Diese Funktion nimmt einen Variablennamen, einen Initialwert, benutzerdefinierte Werte, 
 * einen Index und ein Objekt mit Node-IDs entgegen. Sie initialisiert die Serverwerte 
 * für jede Node-ID. Falls benutzerdefinierte Werte vorhanden sind, werden diese verwendet, 
 * andernfalls wird der Standardinitialwert gesetzt.
 * 
 * @param {string} variableName - Der Name der Variable, deren Werte initialisiert werden sollen.
 * @param {number} initialValue - Der Standardinitialwert, der gesetzt werden soll, falls keine benutzerdefinierten Werte vorliegen.
 * @param {Object} customValues - Ein Objekt, das benutzerdefinierte Werte enthält. Die Schlüssel sind die Indizes, die Werte sind die benutzerdefinierten Werte.
 * @param {number} i - Der Index der aktuellen Operation.
 * @param {Object} nameNodeId - Ein Objekt, das die Node-IDs für die gegebenen Variablennamen enthält.
 * @param {Object} serverValues - Ein Objekt, das die Serverwerte speichert, die initialisiert oder aktualisiert werden sollen.
 */
/*Beispielaufrufe der Funktion
funktionen.initial("SU3111_ZeExtruder_Hmi_udtCmMeltPress", undefined, {}, i, nameNodeId, serverValues)
funktionen.initial("SU3111_ZeExtruder_Hmi_udtCmMeltPress_dwStat", 13, {}, i, nameNodeId, serverValues)
funktionen.initial("SU3111_ZeExtruder_Hmi_udtCmMeltPress_dwStat", undefined, {}, i, nameNodeId, serverValues)
funktionen.initial("SU3111_ZeExtruder_Hmi_udtCmMeltPress_rPresValueX1", 1, {}, i, nameNodeId, serverValues)
funktionen.initial("SU3111_ZeExtruder_Hmi_udtCmMeltPress_rPresValueX1", undefined, {}, i, nameNodeId, serverValues)
funktionen.initial("SU3111_ZeExtruder_Hmi_udtCmMeltPress_rPresValueX2", 1, {}, i, nameNodeId, serverValues)
funktionen.initial("SU3111_ZeExtruder_Hmi_udtCmMeltPress_rPresValueX2", undefined, {}, i, nameNodeId, serverValues)
funktionen.initial("SU3111_ZeExtruder_Hmi_udtCmMeltPress_rPress", undefined, {}, i, nameNodeId, serverValues)
funktionen.initial("SU3111_ZeExtruder_Hmi_udtCmMeltPress_rPress", undefined, {}, i, nameNodeId, serverValues)
funktionen.initial("SU3111_ZeExtruder_Hmi_udtEmPz_dwStat", 1114125, {}, i, nameNodeId, serverValues);
funktionen.initial("SU3111_ZeExtruder_Hmi_udtCmMeltTemp_rMeltTemp_dwStat", 1049613, {}, i, nameNodeId, serverValues);
*/
function initial(variableName, initialValue, customValues, i, nameNodeId, serverValues) {

  // Initialisieren eines Arrays zum Speichern der Node-IDs
  var nodeIdInitial = [];

  // Überprüfen, ob die Node-ID der Variable im nameNodeId-Objekt existiert
  if (nameNodeId[variableName] !== undefined) {
    // Speichern der Node-ID im nodeIdInitial-Array an der Position i
    // Dies wird verwendet, um später auf die spezifische Node-ID zuzugreifen
    nodeIdInitial[i] = nameNodeId[variableName];
  } else {
    // Beenden der Funktion, falls die Node-ID nicht definiert ist
    // Dies verhindert, dass die Funktion mit ungültigen Daten arbeitet
    return;
  }
  // Prüfung, ob die Node-ID bereits in serverValues vorhanden ist
  if (!(nameNodeId[variableName] in serverValues)) {
    // Wenn die Node-ID nicht in serverValues ist, wird der folgende Block ausgeführt

    // Durchlaufen aller Indizes von 0 bis 13
    for (let index = 0; index <= 13; index++) {
      // Überprüfen, ob die Node-ID für den aktuellen Index definiert ist
      if (nodeIdInitial[index] !== undefined) {
        // Setzen des Initialwerts für die Node-ID im serverValues-Objekt
        // Dies ist der Standardwert, der für alle Indizes gesetzt wird, falls keine benutzerdefinierten Werte angegeben sind
        serverValues[nodeIdInitial[index]] = initialValue;
      }
    }
    // Durchlaufen der benutzerdefinierten Werte, falls vorhanden
    for (const [index, value] of Object.entries(customValues)) {
      // Überprüfen, ob ein Wert für den aktuellen Index definiert ist
      if (nodeIdInitial[index] !== undefined && value !== undefined) {
        // Setzen des benutzerdefinierten Werts für die Node-ID im serverValues-Objekt
        // Dies überschreibt den Standardwert aus dem vorherigen Schritt, falls ein benutzerdefinierter Wert vorhanden ist
        serverValues[nodeIdInitial[index]] = value;
      }
    }
  }
};



/**
 * Setzt einen Anfangswert für eine spezifische Node-ID im ServerValues-Objekt.
 * 
 * Diese Funktion nimmt einen Variablennamen, einen Initialwert, ein Objekt mit Node-IDs und ein ServerValues-Objekt entgegen. 
 * Sie prüft, ob eine Node-ID für den gegebenen Variablennamen existiert und setzt den Initialwert für diese Node-ID im ServerValues-Objekt,
 * falls diese Node-ID noch nicht vorhanden ist. Die Funktion beendet sich frühzeitig, wenn keine gültige Node-ID gefunden wird.
 * 
 * @param {string} variableName - Der Name der Variable, deren Anfangswert gesetzt werden soll.
 * @param {number} initialValue - Der Initialwert, der für die Node-ID gesetzt werden soll.
 * @param {Object} nameNodeId - Ein Objekt, das die Node-IDs für die gegebenen Variablennamen enthält.
 * @param {Object} serverValues - Ein Objekt, das die Serverwerte speichert, die initialisiert oder aktualisiert werden sollen.
 */
/*Beispielaufrufe der Funktion
funktionen.initialSingleValue("SU3111_ZeExtruder_Hmi_udtUm", undefined, nameNodeId, serverValues); },
funktionen.initialSingleValue("SU3111_ZeExtruder_Hmi_udtUm", undefined, nameNodeId, serverValues); },
funktionen.initialSingleValue("SU3111_ZeExtruder_Hmi_udtUm_dwStat", 1048589, nameNodeId, serverValues); },
funktionen.initialSingleValue("SU3111_ZeExtruder_Hmi_udtUm_dwStat", undefined, nameNodeId, serverValues); },
funktionen.initialSingleValue("SU3111_ZeExtruder_Hmi_udtUm_dwCtrl", 0, nameNodeId, serverValues);
*/

function initialSingleValue(variableName, initialValue, nameNodeId, serverValues) {

  // Variable zur Speicherung der Node-ID.
  var nodeIdInitial;

  // Überprüfung, ob eine Node-ID für den angegebenen Variablennamen existiert.
  // Hier wird der Variablenname dynamisch aus dem Parameter 'variableName' und dem String 'NodeId' zusammengesetzt.
  // Beispiel: Wenn 'variableName' = "Temperatur" ist, wird nach 'nameNodeId["TemperaturNodeId"]' gesucht.
  if (nameNodeId[variableName] !== undefined) {
    // Wenn die Node-ID existiert (nicht 'undefined'), wird sie in 'nodeIdInitial' gespeichert.
    // Dies ist der Schlüssel, der später verwendet wird, um den Wert in 'serverValues' zu setzen.
    nodeIdInitial = nameNodeId[variableName];
  } else {
    // Beendet die Funktion vorzeitig, wenn keine Node-ID für den angegebenen Variablennamen existiert.
    // Dies verhindert, dass die Funktion mit einer ungültigen Node-ID arbeitet, was zu Fehlern führen könnte.
    return;
  }
  // Überprüfung, ob die Node-ID bereits in 'serverValues' vorhanden ist.
  // Der 'in'-Operator prüft, ob ein bestimmter Schlüssel in einem Objekt existiert.
  if (!(nodeIdInitial in serverValues)) {
    // Wenn die Node-ID noch nicht in 'serverValues' existiert, wird der 'initialValue' für diese Node-ID gesetzt.
    // 'serverValues[nodeIdInitial]' setzt den Wert für die spezifische Node-ID.
    serverValues[nodeIdInitial] = initialValue;
  }
  // Wenn die Node-ID bereits in 'serverValues' vorhanden ist, wird dieser Block übersprungen und nichts weiter unternommen,
  // um zu verhindern, dass bereits festgelegte Werte überschrieben werden.
};



var wasBelowTempRelease = Array(13).fill(true);  // Initialzustand für die Überprüfung, ob die Temperatur unterhalb des Freigabewertes gefallen ist
const checkedItemsReady = Array(13).fill(false); // Statusarray für die Überprüfung, ob alle Prozesszonen "Ready" sind
const checkedItemsOff = Array(13).fill(false); // Statusarray für die Überprüfung, ob alle Prozesszonen "Off" sind

/**
 * Verwaltet und aktualisiert den Status von Prozesszonen basierend auf Temperaturwerten und Systemzuständen.
 * 
 * Diese Funktion führt verschiedene Aktionen und Zustandsänderungen für Prozesszonen in einem Produktionsprozess aus.
 * Sie wird genutzt, um den Status von Prozesszonen in Heiz-, Shutdown- und Kühlmodi zu kontrollieren und zu aktualisieren.
 * Die Funktion prüft Temperaturwerte und Systemzustände, um den aktuellen Zustand der Prozesszonen zu bestimmen und entsprechende
 * Aktionen durchzuführen (wie das Aktualisieren von Statuswerten oder das Starten/Stopp der Eieruhr).
 * 
 * @param {number} i - Der Index der aktuellen Prozesszone.
 * @param {Object} nameNodeId - Ein Objekt, das Node-IDs für die verschiedenen Variablen und Zustände enthält.
 * @param {Object} serverValues - Ein Objekt, das aktuelle Werte für verschiedene Servervariablen speichert.
 */
/*Beispielaufrufe der Funktion
funktionen.dwStatStartWizzard(i, nameNodeId, serverValues);
*/

function dwStatStartWizzard(i, nameNodeId, serverValues) {
  var werte = require('./profiles/simulation/variables/Variablen');
  // Definieren von wichtigen Temperaturwerten und der Eieruhrzeit aus den Serverdaten
  let rSetTolMaxMax = serverValues[werte.data[i].SU3111_ZeExtruder_Hmi_udtEmPz_rPzTemp_rSetTolMaxMax.nodeId.value];
  let rAct = serverValues[werte.data[i].SU3111_ZeExtruder_Hmi_udtEmPz_rPzTemp_rAct.nodeId.value];
  let rSet = serverValues[werte.data[i].SU3111_ZeExtruder_Parameter_udtEmPz_rTempHeatup_Set.nodeId.value];
  let rTempCooldown = serverValues[werte.data[i].SU3111_ZeExtruder_Parameter_udtEmPz_rTempCooldown_Set.nodeId.value];
  let rTempRelease = serverValues[werte.data[i].SU3111_ZeExtruder_Parameter_udtEmPz_rTempRel_Set.nodeId.value];
  let EierUhrEinstellZeit = serverValues[werte.data[i].SU3111_ZeExtruder_Parameter_udtEmPz_udTimeRel_Set.nodeId.value];
  let EierUhrStartWert = EierUhrEinstellZeit

  //********************************************************************************************************************************** */
  //********************************************************************************************************************************** */
  //********************************************************************************************************************************** */
  // Prüft, ob das System im Heizmodus ist.
  if (sharedState.Process_states.Heating_is_On) {

    serverValues[werte.data[i].SU3111_ZeExtruder_Hmi_udtEmPz_rPzTemp_dwStat.nodeId.value] |= (1 << sharedState.dwStat.Tolerance_monitoring_is_active); // Tolerance Monitoring On
    // In dem Moment, wo der Button auf Heating geklickt wird, sind die Prozesszonen nicht mehr auf Off, daher wird der Zustand gesetzt
    sharedState.Process_states.Prozesszones_Are_Off = false;
    if (rAct < rTempRelease) {
      wasBelowTempRelease[i] = true;
    }
    // Wenn die aktuelle Temperatur überhalb des Freigabewerts liegt und nicht einmal drunter war.
    if (rAct > rTempRelease && !wasBelowTempRelease[i]) {
      // Aktualisiere verschiedene Statuswerte entsprechend
      serverValues[werte.data[i].SU3111_ZeExtruder_Hmi_udtEmPz_dwStat.nodeId.value] |= (1 << sharedState.dwStat.startWizzard.Temp_release_Temp_reached_and_soaktime_expired) // BIT 6 stellt auf Ready
      serverValues[werte.data[i].SU3111_ZeExtruder_Hmi_udtEmPz_dwStat.nodeId.value] &= ~(1 << sharedState.dwStat.startWizzard.Temp_controller_on) // BIT 9
      serverValues[werte.data[i].SU3111_ZeExtruder_Hmi_udtEmPz_dwStat.nodeId.value] &= ~(1 << sharedState.dwStat.startWizzard.Cool_down_is_running); // Bit 7 Cool Down is running
    }
    // Mehrere Bedingungen für die Temperaturkontrolle
    if (rAct < rSet && rAct < (rSet - rSetTolMaxMax) && wasBelowTempRelease[i]) {
      // Statusänderungen, wenn die Temperatur unterhalb des Sollwertes und der Toleranzgrenze liegt und einmal unter der Freigabetemperatur.
      serverValues[werte.data[i].SU3111_ZeExtruder_Hmi_udtEmPz_dwStat.nodeId.value] |= (1 << sharedState.dwStat.startWizzard.Temp_controller_on) // BIT 9 stellt auf Active
      serverValues[werte.data[i].SU3111_ZeExtruder_Hmi_udtEmPz_dwStat.nodeId.value] &= ~(1 << sharedState.dwStat.startWizzard.Temp_release_Temp_reached_and_soaktime_expired) // BIT 6 
      serverValues[werte.data[i].SU3111_ZeExtruder_Hmi_udtEmPz_dwStat.nodeId.value] &= ~(1 << sharedState.dwStat.startWizzard.Cool_down_is_running); // Bit 7 Cool Down is running
    }

    // Bedingung für die Eieruhr
    if (rAct > (rSet - rSetTolMaxMax) && wasBelowTempRelease[i] && !hasEierUhrFinished[i]) {
      // Aktualisiere verschiedene Statuswerte entsprechend
      serverValues[werte.data[i].SU3111_ZeExtruder_Hmi_udtEmPz_dwStat.nodeId.value] |= (1 << sharedState.dwStat.startWizzard.Show_remain_time_on_hmi)  // BIT 15 Show remain time on hmi
      serverValues[werte.data[i].SU3111_ZeExtruder_Hmi_udtEmPz_dwStat.nodeId.value] &= ~(1 << sharedState.dwStat.startWizzard.Temp_release_Temp_reached_and_soaktime_expired) // BIT 6
      serverValues[werte.data[i].SU3111_ZeExtruder_Hmi_udtEmPz_dwStat.nodeId.value] &= ~(1 << sharedState.dwStat.startWizzard.Temp_controller_on) // BIT 9
      serverValues[werte.data[i].SU3111_ZeExtruder_Hmi_udtEmPz_dwStat.nodeId.value] &= ~(1 << sharedState.dwStat.startWizzard.Cool_down_is_running); // Bit 7 Cool Down is running
      startTimerIconStartWizzard(i, function () {
        // Statusänderungen, wenn die Eieruhr abgelaufen ist
        serverValues[werte.data[i].SU3111_ZeExtruder_Hmi_udtEmPz_dwStat.nodeId.value] |= (1 << sharedState.dwStat.startWizzard.Temp_release_Temp_reached_and_soaktime_expired)  // Bit 6 stellt Icon auf Ready
        serverValues[werte.data[i].SU3111_ZeExtruder_Hmi_udtEmPz_dwStat.nodeId.value] &= ~(1 << sharedState.dwStat.startWizzard.Temp_controller_on) //BIT 9
        serverValues[werte.data[i].SU3111_ZeExtruder_Hmi_udtEmPz_dwStat.nodeId.value] &= ~(1 << sharedState.dwStat.startWizzard.Show_remain_time_on_hmi) // BIT 15
        serverValues[werte.data[i].SU3111_ZeExtruder_Hmi_udtEmPz_dwStat.nodeId.value] &= ~(1 << sharedState.dwStat.startWizzard.Cool_down_is_running); // Bit 7 Cool Down is running
      });
    }
    // Überprüfung aller Prozesszonen auf "Ready"
    for (let i = 1; i < 14; i++) {
      if (serverValues[werte.data[i].SU3111_ZeExtruder_Hmi_udtEmPz_dwStat.nodeId.value] & (1 << sharedState.dwStat.startWizzard.Temp_release_Temp_reached_and_soaktime_expired)) { // Prüft ob das 6 Bit gesetzt ist, unabhängig davon ob die anderen gesetzt sind
        checkedItemsReady[i] = true;
      }
    }
    // Prüfung des Arrays, ob alle Einträge im Array True sind, dann setze Zustand Process_states.Prozesszones_Are_Ready
    if (checkedItemsReady.slice(1, 14).every(Boolean)) {
      sharedState.Process_states.Prozesszones_Are_Ready = true
    }
  }
  //********************************************************************************************************************************** */
  //********************************************************************************************************************************** */
  //********************************************************************************************************************************** */
  // Prüft, ob das System im Shutdown Modus ist.
  if (sharedState.Process_states.Shutdown_is_On) {
    serverValues[werte.data[i].SU3111_ZeExtruder_Hmi_udtEmPz_rPzTemp_dwStat.value] &= ~((1 << sharedState.dwStat.Tolerance_monitoring_is_active));// Tolerance Monitoring On
    sharedState.Process_states.Prozesszones_Are_Ready = false; // Setzt den Zustand der Prozesszonen auf "Nicht Ready"

    // Überprüfen, ob alle Prozesszonen nicht mehr im "Ready" Zustand sind
    for (let i = 1; i < 14; i++) {
      if (!(serverValues[werte.data[i].SU3111_ZeExtruder_Hmi_udtEmPz_dwStat.nodeId.value] & (1 << sharedState.dwStat.startWizzard.Temp_release_Temp_reached_and_soaktime_expired))) {
        checkedItemsOff[i] = true;
      }
    }
    // Wenn alle Prozesszonen "Off" sind, setze den Zustand entsprechend
    if (checkedItemsOff.slice(1, 14).every(Boolean)) {
      sharedState.Process_states.Prozesszones_Are_Off = true;
    }

    // Logik für die Temperaturprüfung im Shutdown-Modus
    if (rAct < rTempRelease) {

      wasBelowTempRelease[i] = true;
      hasEierUhrFinished = false
      checkedItemsReady[i] = false;
      // Setzen der Zustände und Icons für den Shutdown-Modus
      serverValues[werte.data[i].SU3111_ZeExtruder_Hmi_udtEmPz_dwStat.nodeId.value] &= ~(1 << sharedState.dwStat.startWizzard.Temp_release_Temp_reached_and_soaktime_expired) // BIT 6
      serverValues[werte.data[i].SU3111_ZeExtruder_Hmi_udtEmPz_dwStat.nodeId.value] &= ~(1 << sharedState.dwStat.startWizzard.Temp_controller_on) // BIT 9
      serverValues[werte.data[i].SU3111_ZeExtruder_Hmi_udtEmPz_dwStat.nodeId.value] &= ~(1 << sharedState.dwStat.startWizzard.Cool_down_is_running); // Bit 7 Cool Down is running
      serverValues[werte.data[i].SU3111_ZeExtruder_Hmi_udtEmPz_dwStat.nodeId.value] &= ~(1 << sharedState.dwStat.startWizzard.Show_remain_time_on_hmi)  // BIT 15 Show remain time on hmi
    }
    serverValues[werte.data[i].SU3111_ZeExtruder_Hmi_udtEmPz_rPzTemp_dwStat.nodeId.value] &= ~(1 << sharedState.dwStat.startWizzard.Show_remain_time_on_hmi);

    serverValues[werte.data[i].SU3111_ZeExtruder_Hmi_udtEmPz_diActRemainTime.nodeId.value] = EierUhrEinstellZeit;
    EierUhrStartWert = EierUhrEinstellZeit;

    // Löscht das Intervall der EierUhr, falls noch einer Aktiv ist.
    if (isEierUhrRunning[i]) {
      // Überprüft, ob der Timer (EierUhr) für den aktuellen Index i noch läuft.
      // Wenn ja, wird das Intervall gestoppt.
      clearInterval(intervalEieruhrIds[i]);
      // Setzt den Laufstatus des Timers für diesen Index auf 'false', was bedeutet, dass er nicht mehr aktiv ist.
      isEierUhrRunning[i] = false;
    }
  }
  //********************************************************************************************************************************** */
  //********************************************************************************************************************************** */
  //********************************************************************************************************************************** */
  //********************************************************************************************************************************** */
  // Prüft, ob das System im Kühl Modus ist.
  if (sharedState.Process_states.Cooling_is_On) {
    serverValues[werte.data[i].SU3111_ZeExtruder_Hmi_udtEmPz_rPzTemp_dwStat.value] &= ~((1 << sharedState.dwStat.Tolerance_monitoring_is_active));
    sharedState.Process_states.Prozesszones_Are_Ready = false; // Setzt den Zustand der Prozesszonen auf "Nicht Ready"

    // Überprüfen, ob alle Prozesszonen nicht mehr im "Ready" Zustand sind
    for (let i = 1; i < 14; i++) {
      if (!(serverValues[werte.data[i].SU3111_ZeExtruder_Hmi_udtEmPz_dwStat.nodeId.value] & (1 << sharedState.dwStat.startWizzard.Temp_release_Temp_reached_and_soaktime_expired))) {
        checkedItemsOff[i] = true;
      }
    }
    // Wenn alle Prozesszonen "Off" sind, setze den Zustand entsprechend
    if (checkedItemsOff.slice(1, 14).every(Boolean)) {
      sharedState.Process_states.Prozesszones_Are_Off = true;
    }

    // Logik für die Temperaturprüfung im Cooling-Modus
    if (rAct < rTempRelease) {

      wasBelowTempRelease[i] = true;
      hasEierUhrFinished = false
      checkedItemsReady[i] = false;
      serverValues[werte.data[i].SU3111_ZeExtruder_Hmi_udtEmPz_dwStat.nodeId.value] &= ~(1 << sharedState.dwStat.startWizzard.Temp_release_Temp_reached_and_soaktime_expired);
      serverValues[werte.data[i].SU3111_ZeExtruder_Hmi_udtEmPz_dwStat.nodeId.value] |= (1 << sharedState.dwStat.startWizzard.Cool_down_is_running);
      serverValues[werte.data[i].SU3111_ZeExtruder_Hmi_udtEmPz_dwStat.nodeId.value] &= ~(1 << sharedState.dwStat.startWizzard.Temp_controller_on)
    }

    serverValues[werte.data[i].SU3111_ZeExtruder_Hmi_udtEmPz_rPzTemp_dwStat.nodeId.value] &= ~(1 << sharedState.dwStat.startWizzard.Show_remain_time_on_hmi);

    // Prüfung ob Temperatur über TempRelease ist, dann werden einige Zustände gesetzt
    if (rAct > rTempRelease) {
      serverValues[werte.data[i].SU3111_ZeExtruder_Hmi_udtEmPz_dwStat.nodeId.value] |= (1 << sharedState.dwStat.startWizzard.Temp_release_Temp_reached_and_soaktime_expired);
      serverValues[werte.data[i].SU3111_ZeExtruder_Hmi_udtEmPz_dwStat.nodeId.value] |= (1 << sharedState.dwStat.startWizzard.Cool_down_is_running); // Bit 7 Cool Down is running
      serverValues[werte.data[i].SU3111_ZeExtruder_Hmi_udtEmPz_dwStat.nodeId.value] &= ~(1 << sharedState.dwStat.startWizzard.Temp_controller_on)
    }

    // Setzt den Remain Time der EierUhr wieder auf den Standard Wert zurück
    serverValues[werte.data[i].SU3111_ZeExtruder_Hmi_udtEmPz_diActRemainTime.nodeId.value] = EierUhrEinstellZeit;
    EierUhrStartWert = EierUhrEinstellZeit;


    if (isEierUhrRunning[i]) {
      // Wenn die EierUhr (ein Timer) für den spezifischen Index i aktiv ist, wird sie gestoppt.
      clearInterval(intervalEieruhrIds[i]);
      // Der Status der EierUhr für diesen Index wird auf 'false' gesetzt, was bedeutet, dass sie nicht mehr läuft.
      isEierUhrRunning[i] = false;
    }

    // Wenn die aktuelle Temperatur unter dem Freigabewert fällt, dann werden Zustände gesetzt
    if (rAct < rTempCooldown) {
      serverValues[werte.data[i].SU3111_ZeExtruder_Hmi_udtEmPz_dwStat.nodeId.value] &= ~(1 << sharedState.dwStat.startWizzard.Temp_release_Temp_reached_and_soaktime_expired);
      serverValues[werte.data[i].SU3111_ZeExtruder_Hmi_udtEmPz_dwStat.nodeId.value] &= ~(1 << sharedState.dwStat.startWizzard.Cool_down_is_running); // Bit 7 Cool Down is running
      serverValues[werte.data[i].SU3111_ZeExtruder_Hmi_udtEmPz_dwStat.nodeId.value] &= ~(1 << sharedState.dwStat.startWizzard.Temp_controller_on)
    }
  }
}


// Deklaration von Arrays zur Verwaltung der Eieruhr-Timer für jeden Index
let intervalEieruhrIds = []; // Speichert die IDs der Intervalle (Timer) für die Eieruhr
let isEierUhrRunning = Array(14).fill(false); // Speichert, ob die Eieruhr für jeden Index läuft
let hasEierUhrFinished = Array(14).fill(false); // Speichert, ob die Eieruhr für jeden Index abgeschlossen ist

/**
 * Startet einen Eieruhr-Timer für einen spezifischen Index.
 * 
 * Diese Funktion initiiert einen Countdown-Timer, der für die Dauer eines Prozesses oder Zustands herunterzählt.
 * Der Timer läuft für einen spezifischen Index 'i' und nutzt serverseitige Werte, um den Startwert des Timers zu bestimmen.
 * Die Funktion prüft, ob bereits ein Timer für den gegebenen Index läuft oder abgeschlossen ist, und verhindert
 * in diesem Fall die Mehrfachausführung des Timers. Nach Ablauf des Timers werden bestimmte Aktionen ausgeführt,
 * wie das Aktualisieren von Statuswerten und die Ausführung einer optionalen Callback-Funktion.
 * 
 * @param {number} i - Der Index, für den der Timer gestartet wird.
 * @param {Function} callback - Eine optionale Callback-Funktion, die nach Ablauf des Timers ausgeführt wird.
 */
function startTimerIconStartWizzard(i, callback) {
  // Importieren notwendiger Variablen aus einer externen Datei
  var werte = require('./profiles/simulation/variables/Variablen');

  // Überprüfen, ob bereits ein Intervall für den Index 'i' existiert oder ob die Eieruhr abgeschlossen ist
  if (isEierUhrRunning[i] || hasEierUhrFinished[i] || intervalEieruhrIds[i]) {
    // Wenn ja, beende die Funktion vorzeitig, um Mehrfachausführungen zu vermeiden
    return;
  }
  // Initialisiere den Startwert der Eieruhr basierend auf Serverdaten
  let EierUhrStartWert = serverValues[werte.data[i].SU3111_ZeExtruder_Parameter_udtEmPz_udTimeRel_Set.nodeId.value];
  // Erstelle ein Intervall (Timer), das wiederholt eine Funktion ausführt
  let intervalEieruhr = setInterval(function () {
    // Prüfen, ob der Zeitwert auf der Eieruhr null oder kleiner ist
    if (EierUhrStartWert <= 1) {
      // Wenn die Zeit abgelaufen ist oder der Wert negativ ist, stoppe das Intervall
      clearInterval(intervalEieruhr);
      // Setze den Status der Eieruhr auf abgeschlossen und nicht mehr laufend
      isEierUhrRunning[i] = false;
      hasEierUhrFinished[i] = true;
      // Entferne die Referenz auf das Intervall
      intervalEieruhr = null;
      intervalEieruhrIds[i] = null;
      // Setze den Zustand 'wasBelowTempRelease' zurück
      wasBelowTempRelease[i] = false;
      // Wenn eine Callback-Funktion definiert wurde, führe sie aus
      if (callback) {
        callback(i); // Übergabe i an die Funktion
      }
    } else {
      // Wenn noch Zeit verbleibt, reduziere den Zeitwert
      isEierUhrRunning[i] = true;
      EierUhrStartWert -= 1;
      // Aktualisiere den verbleibenden Zeitwert in den Serverdaten
      serverValues[werte.data[i].SU3111_ZeExtruder_Hmi_udtEmPz_diActRemainTime.nodeId.value] = EierUhrStartWert;
    }
  }, 2000); // Das Intervall wird alle 2000 Millisekunden (2 Sekunden) ausgeführt
  // Speichere die Intervall-ID im Array zur späteren Verwaltung
  intervalEieruhrIds[i] = intervalEieruhr;
}



// Initialisierung von Arrays zur Speicherung von Timer-IDs.
// Diese Timer werden verwendet, um zeitgesteuerte Funktionen im PID-Regelkreis zu steuern.
let pidTimerIddown = []; // Für das Herunterfahren der Temperatur
let pidTimerIdup = []; // Für das Hochfahren der Temperatur
let pidTimerIdshutdown = []; // Für das Abschalten der Temperatursteuerung


const MAX_INDEX = 13; // Maximale Anzahl der speicherbaren Zustände
const savedValues = {}; // Objekt zum Speichern von Zuständen für rAct1 und integral

/**
 * Generiert einen eindeutigen Schlüssel für die Speicherung von Temperaturwerten.
 * 
 * Diese Funktion nimmt einen Temperaturwert und einen Index auf und erzeugt daraus einen eindeutigen Schlüssel.
 * Der Temperaturwert wird zuerst gerundet, um Ganzzahligkeit zu gewährleisten. Anschließend wird dieser Wert
 * mit einem Index kombiniert, um verschiedene Zustände bei gleichem Temperaturwert unterscheiden zu können.
 * Der resultierende Schlüssel wird im Format "gerundeterWert-index" zurückgegeben und kann für die Identifikation
 * und Speicherung spezifischer Zustände in einem Objekt verwendet werden.
 * 
 * @param {number} rAct2 - Der zu speichernde Temperaturwert.
 * @param {number} index - Ein Zähler, der zur Unterscheidung verschiedener Zustände bei gleichem Temperaturwert dient.
 * @returns {string} Ein eindeutiger Schlüssel im Format "gerundeterWert-index".
 */
function getSaveKey(rAct2, index) {
  return `${Math.round(rAct2)}-${index}`;
}

/**
 * PID-Regelungsfunktion zum Hochfahren der Temperatur.
 * 
 * Diese Funktion steuert das Hochfahren der Temperatur für eine bestimmte Prozesszone.
 * Sie verwendet PID-Reglerparameter, um die Steuerungsgröße basierend auf dem Unterschied zwischen
 * dem Sollwert und dem aktuellen Temperaturwert zu berechnen. Die Funktion verhindert die gleichzeitige
 * Ausführung mit anderen Temperaturregelungsfunktionen, indem sie bestehende Timer für Herunterfahren und
 * Abschalten der Temperatursteuerung löscht. Sie simuliert den Regelvorgang durch die Anwendung von
 * PT1-Gliedern und speichert Zustände für zukünftige Regelvorgänge.
 * 
 * @param {number} i - Der Index der aktuellen Prozesszone.
 * @param {Object} nameNodeId - Ein Objekt, das Node-IDs für die verschiedenen Variablen und Zustände enthält.
 * @param {Object} serverValues - Ein Objekt, das aktuelle Werte für verschiedene Servervariablen speichert.
 */
function PIDUP(i, nameNodeId, serverValues) {
  // Einbinden notwendiger Variablen aus einer externen Datei
  var werte = require('./profiles/simulation/variables/Variablen');
  // Löschen laufender Timer von pidDown und shutdown, um Konflikte zu vermeiden
  if (pidTimerIddown[i]) clearTimeout(pidTimerIddown[i]); // löscht alle Timer von pidDown, falls ein Timer noch läuft
  if (pidTimerIdshutdown[i]) clearTimeout(pidTimerIdshutdown[i]); // löscht alle Timer von shutDown fals ein Timer noch läuft

  // Laden der PID-Reglerparameter aus Serverdaten
  const Kp = serverValues[werte.data[i].SU3111_ZeExtruder_Parameter_udtCmPzPid_udtHeat_udtPid_rGain.nodeId.value];
  const Ki = serverValues[werte.data[i].SU3111_ZeExtruder_Parameter_udtCmPzPid_udtHeat_udtPid_rTi.nodeId.value];
  const Kd = serverValues[werte.data[i].SU3111_ZeExtruder_Parameter_udtCmPzPid_udtHeat_udtPid_rTd.nodeId.value];
  // Festlegung von Zeitschritt (dt) und Zeitkonstanten (T1, T2) für die Simulation
  const dt = 0.01;
  const T1 = 105;
  const T2 = 100;
  const K1 = 1; // Verstärkungsfaktor für das erste PT1-Glied der Regelstrecke
  const K2 = 1; // Verstärkungsfaktor für das zweite PT1-Glied der Regelstrecke
  // Aktuelle Temperaturwerte (Ist-Werte) aus den Serverdaten
  let rAct1 = serverValues[werte.data[i].SU3111_ZeExtruder_Hmi_udtEmPz_rPzTemp_rAct.nodeId.value];
  let rAct2 = serverValues[werte.data[i].SU3111_ZeExtruder_Hmi_udtEmPz_rPzTemp_rAct.nodeId.value];

  // Bestimmung des Sollwerts der Temperatur
  let rSet;
  // Logik zur Festlegung des Sollwerts, abhängig vom Zustand der Prozesszonen
  if (!sharedState.Process_states.Prozesszones_Are_Ready) {
    rSet = serverValues[werte.data[i].SU3111_ZeExtruder_Parameter_udtEmPz_rTempHeatup_Set.nodeId.value];
    // Hängt mit der Funktion dwstatupdate zusammen. Für die Toleranzgrenzen braucht man einen Set Wert. Endung _rSet, rTempHeatup_Set geht nicht !
    serverValues[werte.data[i].SU3111_ZeExtruder_Hmi_udtEmPz_rPzTemp_rSet.nodeId.value] = serverValues[werte.data[i].SU3111_ZeExtruder_Parameter_udtEmPz_rTempHeatup_Set.nodeId.value]
  } else if (sharedState.Process_states.Prozesszones_Are_Ready) {
    rSet = serverValues[werte.data[i].SU3111_ZeExtruder_Hmi_udtEmPz_rPzTemp_rSet.nodeId.value];
  }

  let integral
  // Bestimmung des eindeutigen Schlüssels für die Speicherung von Regelzuständen
  let key = getSaveKey(rAct2, i);
  // Überprüfung, ob bereits ein gespeicherter Zustand für diesen spezifischen Temperaturwert existiert
  if (savedValues.hasOwnProperty(key)) {
    // Wenn ja, wird rAct1 mit dem gespeicherten Wert aktualisiert
    rAct1 = savedValues[key].rAct1;
  }
  lastError = 0;
  integral = 0;


  function calculateNextValue() {
    var werte = require('./profiles/simulation/variables/Variablen');
    // Prüfung, ob eine Anpassung der Temperatur notwendig ist
    if (rSet - rAct2 > 0.1) {
      // Berechnung des Fehlers zwischen Soll- und Istwert
      let error = rSet - rAct2;
      integral += error * dt;
      // Berechnung der PID-Anteile (Proportional, Integral, Derivativ)
      let derivative = (error - lastError) / dt;
      let pTerm = Kp * error;  // Proportional-Anteil
      let iTerm = Ki * integral;  // Integral-Anteil
      let dTerm = Kd * derivative;  // Derivative-Anteil
      // Ermittlung der Steuerungsgröße aus den PID-Anteilen
      let u = pTerm + iTerm + dTerm;
      lastError = error;

      // Begrenzung des Wertes von u zwischen -100 und 100
      u_begrenzt = Math.max(-100, Math.min(u, 100));

      // Zuweisung des berechneten Werts an die HMI
      serverValues[werte.data[i].SU3111_ZeExtruder_Hmi_udtEmPz_rPzCv_rAct.nodeId.value] = u_begrenzt

      // Simulation der Regelstrecke mit zwei PT1-Gliedern
      let dy1 = (K1 * u - rAct1) / T1 * dt;
      rAct1 += dy1;

      // 2.Glied PT1 der Regelstrecke
      let dy2 = (K2 * rAct1 - rAct2) / T2 * dt;
      rAct2 += dy2;

      // Aktualisierung des Ist-Werts der Temperatur in der HMI
      serverValues[werte.data[i].SU3111_ZeExtruder_Hmi_udtEmPz_rPzTemp_rAct.nodeId.value] = rAct2;

      // Speicherung der Zustände für zukünftige Regelvorgänge
      let streckenAusgang = Math.round(serverValues[werte.data[i].SU3111_ZeExtruder_Hmi_udtEmPz_rPzTemp_rAct.nodeId.value]);
      for (let idx = 1; idx <= MAX_INDEX; idx++) {
        const key = getSaveKey(streckenAusgang, idx);
        if (!savedValues.hasOwnProperty(key)) {
          savedValues[key] = { rAct1: rAct1, integral: integral, };

          break;  // Sobald wir einen Schlüssel gefunden haben, der nicht existiert und gespeichert wurde, brechen wir aus der Schleife aus.
        }
      }
      // Setzen eines Timers zur kontinuierlichen Ausführung der Funktion
      const timerup = setTimeout(calculateNextValue, 10);
      pidTimerIdup[i] = timerup; // Timer-ID am spezifischen Index setzen
    }
  }
  // Start der Berechnung
  calculateNextValue();
}

/**
 * PID-Regelungsfunktion zum Herunterfahren der Temperatur.
 * 
 * Diese Funktion steuert das Herunterfahren der Temperatur für eine spezifische Prozesszone. Sie verwendet PID-Reglerparameter,
 * um die Steuerungsgröße auf Basis des Unterschieds zwischen dem Sollwert und dem aktuellen Temperaturwert zu berechnen.
 * Die Funktion löscht bestehende Timer für Temperaturerhöhung und -abschaltung, um Konflikte zu vermeiden.
 * Zudem führt sie eine Simulation des Regelvorgangs durch, indem sie PT1-Glieder anwendet, und aktualisiert den Istwert
 * der Temperatur kontinuierlich. Die Funktion berücksichtigt den aktuellen Systemzustand, um angemessene Sollwerte festzulegen.
 * 
 * @param {number} i - Der Index der aktuellen Prozesszone.
 * @param {Object} nameNodeId - Ein Objekt, das Node-IDs für verschiedene Variablen und Zustände enthält.
 * @param {Object} serverValues - Ein Objekt, das aktuelle Werte für verschiedene Servervariablen speichert.
 */
function PIDCOOLDOWN(i, nameNodeId, serverValues) {
  // Einbinden der notwendigen Variablen aus einer externen Datei
  var werte = require('./profiles/simulation/variables/Variablen')
  // Löschen laufender Timer von pidUp und shutdown, um Konflikte zu vermeiden
  if (pidTimerIdup[i]) clearTimeout(pidTimerIdup[i]);
  if (pidTimerIdshutdown[i]) clearTimeout(pidTimerIdshutdown[i]);
  // Löschen aller Timer, die für andere zeitgesteuerte Funktionen gesetzt wurden
  intervalEieruhrIds.forEach(intervalEieruhr => clearInterval(intervalEieruhr));

  // Laden der PID-Reglerparameter (Kp, Ki, Kd) aus den Serverdaten
  const Kp = serverValues[werte.data[i].SU3111_ZeExtruder_Parameter_udtCmPzPid_udtHeat_udtPid_rGain.nodeId.value];
  const Ki = serverValues[werte.data[i].SU3111_ZeExtruder_Parameter_udtCmPzPid_udtHeat_udtPid_rTi.nodeId.value];
  const Kd = serverValues[werte.data[i].SU3111_ZeExtruder_Parameter_udtCmPzPid_udtHeat_udtPid_rTd.nodeId.value];
  // Festlegung von Zeitschritt (dt) und Zeitkonstanten (T1, T2) für die Regelstrecken-Simulation
  const dt = 0.01
  const T1 = 80
  const T2 = 70
  const K1 = 1; // Verstärkungsfaktor für das erste PT1-Glied der Regelstrecke
  const K2 = 1; // Verstärkungsfaktor für das zweite PT1-Glied der Regelstrecke

  // Aktuelle Temperaturwerte (Ist-Werte) aus den Serverdaten
  let rAct1 = serverValues[werte.data[i].SU3111_ZeExtruder_Hmi_udtEmPz_rPzTemp_rAct.nodeId.value];
  let rAct2 = serverValues[werte.data[i].SU3111_ZeExtruder_Hmi_udtEmPz_rPzTemp_rAct.nodeId.value];
  // Bestimmung des Sollwerts der Temperatur basierend auf Systemzustand
  let rSet
  if (sharedState.Process_states.Cooling_is_On && !sharedState.Process_states.Heating_is_On) {
    rSet = 20 // Festlegung eines Standardkühlwerts, wenn Kühlung aktiv ist, aber Heizung nicht
  } else if (sharedState.Process_states.Heating_is_On && sharedState.Process_states.Prozesszones_Are_Ready) {
    // Nutzung des Sollwerts aus HMI, falls Heizung aktiv und Prozesszonen bereit sind
    rSet = serverValues[werte.data[i].SU3111_ZeExtruder_Hmi_udtEmPz_rPzTemp_rSet.nodeId.value];
    // Sicherstellung, dass der Sollwert nicht unter einem Mindestwert liegt
    if (rSet < 20) {
      rSet = 20
    }
  }
  // Initialisierung der Variablen für den PID-Regelungsprozess
  let lastError = 0;
  let integral = 0

  // Funktion zur Berechnung des nächsten Temperaturwerts mittels PID-Regelung
  function calculateNextValue() {
    // Prüfung, ob eine Anpassung der Temperatur notwendig ist
    if (Math.abs(rSet - rAct2) > 0.1) {
      // Berechnung des Fehlers zwischen Soll- und Istwert
      let error = rSet - rAct2;
      integral += error * dt;
      let derivative = (error - lastError) / dt;

      // Berechnung der PID-Anteile (Proportional, Integral, Derivativ)
      let pTerm = Kp * error;  // Proportional-Anteil
      let iTerm = Ki * integral;  // Integral-Anteil
      let dTerm = Kd * derivative;  // Derivative-Anteil
      // Ermittlung der Steuerungsgröße aus den PID-Anteilen
      let u = pTerm + iTerm + dTerm;
      lastError = error;

      // Begrenzung der Steuerungsgröße
      u_begrenzt = Math.max(-100, Math.min(u, 100));

      // Zuweisung des berechneten Werts an die HMI
      serverValues[werte.data[i].SU3111_ZeExtruder_Hmi_udtEmPz_rPzCv_rAct.nodeId.value] = u_begrenzt

      // Simulation der Regelstrecke mit zwei PT1-Gliedern
      let dy1 = (K1 * u - rAct1) / T1 * dt;// Dynamik des ersten Glieds
      rAct1 += dy1;

      let dy2 = (K2 * rAct1 - rAct2) / T2 * dt;// Dynamik des zweiten Glieds
      rAct2 += dy2;

      // Aktualisierung des Ist-Werts der Temperatur in der HMI
      serverValues[werte.data[i].SU3111_ZeExtruder_Hmi_udtEmPz_rPzTemp_rAct.nodeId.value] = rAct2;

      // Setzen eines Timers zur kontinuierlichen Ausführung der Funktion
      const timerdown = setTimeout(calculateNextValue, 10);
      pidTimerIddown[i] = timerdown; // Speicherung der Timer-ID für spätere Referenz
    }
  }
  // Start der Berechnung
  calculateNextValue();
}

/**
 * PID-Regelungsfunktion für das Abschalten des Systems.
 * 
 * Diese Funktion steuert den Prozess des Abschaltens der Temperatursteuerung für eine spezifische Prozesszone.
 * Sie verwendet PID-Reglerparameter, um die Steuerungsgröße auf Basis des Unterschieds zwischen einem festgelegten 
 * Sollwert und dem aktuellen Temperaturwert zu berechnen. Die Funktion beendet jegliche laufende Temperaturerhöhung 
 * oder -senkung, indem sie die entsprechenden Timer löscht. Sie führt eine Simulation des Regelvorgangs durch und 
 * aktualisiert den Istwert der Temperatur kontinuierlich. Der Sollwert für das Abschalten wird auf einen festen Wert gesetzt.
 * 
 * @param {number} i - Der Index der aktuellen Prozesszone.
 * @param {Object} nameNodeId - Ein Objekt, das Node-IDs für verschiedene Variablen und Zustände enthält.
 * @param {Object} serverValues - Ein Objekt, das aktuelle Werte für verschiedene Servervariablen speichert.
 */
function PIDSHUTDOWN(i, nameNodeId, serverValues) {
  // Einbinden notwendiger Variablen aus einer externen Datei
  var werte = require('./profiles/simulation/variables/Variablen');
  // Löschen laufender Timer von pidUp und pidDown, um Konflikte zu vermeiden
  if (pidTimerIdup[i]) clearTimeout(pidTimerIdup[i]); // Löscht alle Hochfahr-Timer
  if (pidTimerIddown[i]) clearTimeout(pidTimerIddown[i]); // Löscht alle Herunterfahr-Timer

  // Löschen aller Timer
  intervalEieruhrIds.forEach(intervalEieruhr => clearInterval(intervalEieruhr));

  // Laden der PID-Reglerparameter aus den Serverdaten
  const Kp = serverValues[werte.data[i].SU3111_ZeExtruder_Parameter_udtCmPzPid_udtHeat_udtPid_rGain.nodeId.value];
  const Ki = serverValues[werte.data[i].SU3111_ZeExtruder_Parameter_udtCmPzPid_udtHeat_udtPid_rTi.nodeId.value];
  const Kd = serverValues[werte.data[i].SU3111_ZeExtruder_Parameter_udtCmPzPid_udtHeat_udtPid_rTd.nodeId.value];
  // Festlegung von Zeitschritt (dt) und Zeitkonstanten (T1, T2) für die Regelstrecken-Simulation
  const dt = 0.01
  const T1 = 50; // Zeitkonstante für das erste PT1-Glied der Regelstrecke
  const T2 = 50; // Zeitkonstante für das zweite PT1-Glied der Regelstrecke
  const K1 = 1; // Verstärkungsfaktor für das erste PT1-Glied
  const K2 = 1; // Verstärkungsfaktor für das zweite PT1-Glied
  // Aktuelle Temperaturwerte (Ist-Werte) aus den Serverdaten
  var rAct1 = serverValues[werte.data[i].SU3111_ZeExtruder_Hmi_udtEmPz_rPzTemp_rAct.nodeId.value];
  var rAct2 = serverValues[werte.data[i].SU3111_ZeExtruder_Hmi_udtEmPz_rPzTemp_rAct.nodeId.value];

  // Festlegung eines festen Sollwerts für das Herunterfahren
  var rSet = 20; // Zieltemperatur für das Abschalten

  // Initialisierung der Variablen für den PID-Regelungsprozess
  let lastError = 0; // Letzter Fehlerwert
  let integral = 0; // Integralwert für den Integral-Anteil des PID-Reglers

  // Funktion zur Berechnung des nächsten Temperaturwerts mittels PID-Regelung
  function calculateNextValue() {
    // Prüfung, ob eine Anpassung der Temperatur notwendig ist
    if (Math.abs(rSet - rAct2) > 0.1) {
      // Berechnung des Fehlers zwischen Soll- und Istwert
      let error = rSet - rAct2;
      integral += error * dt; // Akkumulation des Fehlers für den Integralanteil
      let derivative = (error - lastError) / dt; // Berechnung der Ableitung des Fehlers für den Differenzialanteil

      // Berechnung der PID-Anteile (Proportional, Integral, Derivativ)
      let pTerm = Kp * error;  // Proportional-Anteil
      let iTerm = Ki * integral;  // Integral-Anteil
      let dTerm = Kd * derivative;  // Derivative-Anteil
      // Ermittlung der Steuerungsgröße aus den PID-Anteilen
      let u = pTerm + iTerm + dTerm;
      lastError = error; // Aktualisierung des letzten Fehlerwerts

      // Begrenzung der Steuerungsgröße
      u_begrenzt = Math.max(-100, Math.min(u, 100));

      // Zuweisung des berechneten Werts an die Mensch-Maschine-Schnittstelle (HMI)
      serverValues[werte.data[i].SU3111_ZeExtruder_Hmi_udtEmPz_rPzCv_rAct.nodeId.value] = u_begrenzt

      // Simulation der Regelstrecke mit zwei PT1-Gliedern
      let dy1 = (K1 * u - rAct1) / T1 * dt; // Dynamik des ersten Glieds
      rAct1 += dy1;
      let dy2 = (K2 * rAct1 - rAct2) / T2 * dt; // Dynamik des zweiten Glieds
      rAct2 += dy2;

      // Aktualisierung des Ist-Werts der Temperatur in der HMI
      serverValues[werte.data[i].SU3111_ZeExtruder_Hmi_udtEmPz_rPzTemp_rAct.nodeId.value] = rAct2;
      // Setzen eines Timers zur kontinuierlichen Ausführung der Funktion
      const timerdown = setTimeout(calculateNextValue, 10);
      pidTimerIdshutdown[i] = timerdown; //  Speicherung der Timer-ID für spätere Referenz
    }
  }
  // Start der Berechnung
  calculateNextValue();
}

/**
 * Simuliert die Drehzahl eines Extruders basierend auf Sigmoid-Kurven.
 * 
 * Diese Funktion simuliert die Anpassung der Drehzahl eines Extruders von einem Startwert zu einem Zielwert.
 * Sie verwendet eine Sigmoid-Funktion, um eine gleichmäßige und realistische Beschleunigung und Verzögerung der Drehzahl zu erreichen.
 * Die Funktion berücksichtigt verschiedene Faktoren wie Rampenzeit, Durchsatz und spezifische Rate, um die Zielgeschwindigkeit
 * anzupassen. Die Simulation wird in regelmäßigen Intervallen durchgeführt und stoppt, sobald der Zielwert erreicht ist.
 * 
 * Die innere Funktion 'simulateScrewRamp' wird periodisch aufgerufen und berechnet die aktuelle Drehzahl
 * basierend auf der verstrichenen Zeit und den PID-Parametern. Die Funktion passt die Drehzahl kontinuierlich
 * an, bis der Zielwert erreicht ist oder die Abbruchbedingungen erfüllt sind.
 */
function simulateScrewSpeed() {
  // Importieren der Variablendefinitionen aus einer externen Datei für Zugriff auf verschiedene Variablenwerte.
  var werte = require('./profiles/simulation/variables/Variablen');

  // Innere Funktion 'simulateScrewRamp', die die schrittweise Anpassung der Drehzahl simuliert.
  function simulateScrewRamp() {
    // Abfragen des aktuellen und des Zielwerts der Drehzahl aus dem serverValues-Objekt.
    let x0 = serverValues[werte.data.SU3111_ZeExtruder_Hmi_udtEmExtruderDriveCtrl_rScrewSpeed_rAct.nodeId.value]; // Startwert
    let xf = serverValues[werte.data.SU3111_ZeExtruder_Hmi_udtEmExtruderDriveCtrl_rScrewSpeed_rSet.nodeId.value]; // Zielwert

    // Weitere relevante Werte für die Drehzahlrampen-Simulation.
    let rampTime = serverValues[werte.data.SU3111_ZeExtruder_Parameter_udtEmExtruderDriveCtrl_udScrewRampTime_Set.nodeId.value];
    let roundness = serverValues[werte.data.SU3111_ZeExtruder_Parameter_udtEmExtruderDriveCtrl_udScrewRampRoundTime_Set.nodeId.value];
    let Durchsatzgesamt = serverValues[werte.data.SU2110_Feeding_Hmi_udtUm_rThroughputTotal_rAct.nodeId.value];
    let specificRate_Set = serverValues[werte.data.SU3111_ZeExtruder_Hmi_udtEmExtruderDriveCtrl_rSpecRate_rSet.nodeId.value];

    // Initialisierung der Zeitvariablen und Festlegung des Inkrements basierend auf der Rampenzeit.
    let t = 0;
    let increment = 0.1 / rampTime; // Inkrement basiert auf einem 100ms Update-Intervall.

    // Anpassen der Zielgeschwindigkeit xf basierend auf dem Gesamtdurchsatz und der spezifischen Rate.
    if (sharedState.Process_states.Speed_Calculation_Spec_Rate_is_On) {
      if (Durchsatzgesamt === 0 && sharedState.Process_states.Extruder_is_On) {
        // Wenn der Gesamtdurchsatz null ist und der Extruder läuft, wird xf auf die minimale Drehzahl gesetzt.
        xf = serverValues[werte.data.SU3111_ZeExtruder_Hmi_udtEmExtruderDriveCtrl_rScrewSpeed_rOpMin.nodeId.value];
      } else {
        // Andernfalls wird xf basierend auf dem Gesamtdurchsatz und der spezifischen Rate berechnet.
        xf = Durchsatzgesamt / specificRate_Set;
      }
    }
    // Normalisierung der Zeit und Berechnung der aktuellen Drehzahl anhand einer sigmoiden Funktion.
    const normalizedTime = t;
    let currentSpeed = x0 + (xf - x0) / (1 + Math.exp(-roundness * (normalizedTime - 0.5)));
    // Zuweisung der berechneten Drehzahl an die HMI.
    serverValues[werte.data.SU3111_ZeExtruder_Hmi_udtEmExtruderDriveCtrl_rScrewSpeed_rAct.nodeId.value] = currentSpeed;

    // Überprüfung, ob der Unterschied zum Zielwert klein genug ist, um die Simulation zu beenden.
    // 1. Abbruchbedingung: Wenn der Unterschied kleiner als ein definierter Schwellenwert ist.
    if (Math.abs(currentSpeed - xf) < 0.1) {
      serverValues[werte.data.SU3111_ZeExtruder_Hmi_udtEmExtruderDriveCtrl_rScrewSpeed_rAct.nodeId.value] = xf;
      clearInterval(intervalId); // Beenden der periodischen Ausführung der Funktion.
    }
    // 2. Abbruchbedingung: Wenn die aktuelle Geschwindigkeit den Zielwert erreicht oder überschreitet.
    else if ((xf > x0 && currentSpeed >= xf) || (xf < x0 && currentSpeed <= xf)) {
      serverValues[werte.data.SU3111_ZeExtruder_Hmi_udtEmExtruderDriveCtrl_rScrewSpeed_rAct.nodeId.value] = xf;
      clearInterval(intervalId); // Beenden der periodischen Ausführung der Funktion.
    }
    // Inkrementieren der Zeitvariablen für den nächsten Durchlauf der Simulation.
    t += increment;
  }
  // Starten der periodischen Ausführung von 'simulateScrewRamp' im 100-Millisekunden-Intervall.
  let intervalId = setInterval(simulateScrewRamp, 100);
}

// Globales Objekt zur Verwaltung von Intervall-IDs für verschiedene Feeder-Modi.
let intervalIds = {
  simulateFeederSingle: [],
  simulateFeederLine: [],
  simulateFeederFillLevel: [],
  startsimulateLineModeRamp: [],
  updateFeederWeight: []
};

/**
 * Simuliert den Betrieb eines einzelnen Feeders in einem Extrudersystem.
 * 
 * Diese Funktion steuert die Durchsatzanpassung eines Feeders, indem sie dessen Durchsatz schrittweise erhöht oder verringert,
 * um einen vorgegebenen Zielwert zu erreichen. Sie verwendet ein Intervall, um die Durchsatzänderungen regelmäßig zu aktualisieren.
 * Die Funktion berücksichtigt auch globale Stoppsignale und den Status des Feeders, um die Simulation entsprechend zu steuern.
 * Wenn der Feeder ausgeschaltet ist oder der Ziel-Durchsatz erreicht wird, wird das Intervall gestoppt.
 * 
 * @param {number} i - Der Index des zu simulierenden Feeders.
 * @param {Object} nameNodeId - Ein Objekt, das Node-IDs für verschiedene Variablen und Zustände enthält.
 * @param {Object} serverValues - Ein Objekt, das aktuelle Werte für verschiedene Servervariablen speichert.
 */
function simulateFeederSingleMode(i, nameNodeId, serverValues) {
  // Prüft, ob für den angegebenen Feeder (identifiziert durch 'i') bereits ein Intervall läuft.
  if (intervalIds.simulateFeederSingle[i]) {
    return;  // Verhindert das mehrfache Starten des gleichen Intervalls für denselben Feeder.
  }
  // Importiert Variablen aus einer externen Datei.
  var werte = require('./profiles/simulation/variables/Variablen');
  // Holt den aktuellen Durchsatz des Feeders aus den Serverdaten.
  let currentThroughput = serverValues[werte.data[i].SU2110_Feeding_Hmi_udtEmFeeder_rThroughput_rAct.nodeId.value];
  // Innere Funktion zur Simulation des einzelnen Feeders.
  function simulateFeederSingle() {
    // Prüft, ob ein globaler Stoppbefehl für alle Feeder im Single Mode vorliegt.
    if (sharedState.intervalIds.stop_Simulate_Feeder_Single) {
      // Durchläuft alle Intervall-IDs und stoppt jedes Intervall.
      for (let id of intervalIds.simulateFeederSingle) {
        clearInterval(id);  // Beendet das Intervall.
      }
      intervalIds.simulateFeederSingle = [];  // Setzt das Array zurück.
      return;  // Beendet die Ausführung der inneren Funktion.
    }
    // Ermittelt den Ziel-Durchsatz aus den Serverdaten.
    let setThroughput = serverValues[werte.data[i].SU2110_Feeding_Hmi_udtEmFeeder_rThroughput_rSet.nodeId.value];
    // Bestimmt die Richtung der Anpassung: Erhöhen oder Verringern.
    let direction = (setThroughput > currentThroughput) ? 1 : -1;
    // Berechnet das Inkrement für die Durchsatzanpassung.
    let inkrement = 1.135 * direction;
    // Aktualisiert den aktuellen Durchsatz basierend auf dem Inkrement.
    currentThroughput += inkrement;
    // Prüft, ob der Feeder ausgeschaltet ist.
    if (sharedState.feeders[i].FeederisOff) {
      clearInterval(intervalIds.simulateFeederSingle[i]);  // Stoppt das spezifische Intervall für diesen Feeder.
      intervalIds.simulateFeederSingle[i] = null;  // Entfernt die Referenz auf das Intervall.
    }
    // Prüft, ob der aktuelle Durchsatz den Zielwert erreicht hat.
    if ((direction === 1 && currentThroughput >= setThroughput) || (direction === -1 && currentThroughput <= setThroughput)) {
      currentThroughput = setThroughput;  // Setzt den Durchsatz auf den Zielwert.
      clearInterval(intervalIds.simulateFeederSingle[i]);  // Stoppt das Intervall.
      intervalIds.simulateFeederSingle[i] = null;  // Entfernt die Referenz auf das Intervall.
    }
    // Aktualisiert die Serverdaten mit dem neuen Durchsatz.
    serverValues[werte.data[i].SU2110_Feeding_Hmi_udtEmFeeder_rThroughput_rAct.nodeId.value] = currentThroughput;
    serverValues[werte.data[i].SU2110_Feeding_Hmi_udtEmFeeder_rSpeed_rAct.nodeId.value] = currentThroughput;
  }
  // Startet das Intervall, das die simulateFeederSingle-Funktion regelmäßig aufruft.
  let intervalId = setInterval(simulateFeederSingle, 200);
  // Speichert die Intervall-ID im globalen Objekt zur späteren Referenzierung.
  intervalIds.simulateFeederSingle[i] = intervalId;
}


/**
 * Simuliert den Betrieb eines einzelnen Feeders im Line Mode eines Extrudersystems.
 * 
 * Diese Funktion kontrolliert die Anpassung des Durchsatzes eines einzelnen Feeders innerhalb einer Linienkonfiguration,
 * um einen vorgegebenen Zielwert zu erreichen. Der Zielwert wird basierend auf dem Gesamtdurchsatz der Feederlinie und dem
 * prozentualen Anteil des spezifischen Feeders berechnet. Die Funktion verwendet ein Intervall, um die Durchsatzänderungen
 * regelmäßig zu aktualisieren. Sie berücksichtigt globale Stoppsignale und den Status des Feeders, um die Simulation
 * entsprechend zu steuern. Das Intervall wird gestoppt, wenn der Feeder ausgeschaltet ist oder der Ziel-Durchsatz erreicht wird.
 * 
 * @param {number} i - Der Index des zu simulierenden Feeders im Line Mode.
 * @param {Object} nameNodeId - Ein Objekt, das Node-IDs für verschiedene Variablen und Zustände enthält.
 * @param {Object} serverValues - Ein Objekt, das aktuelle Werte für verschiedene Servervariablen speichert.
 */
function simulateFeederLineMode(i, nameNodeId, serverValues) {
  // Prüft, ob bereits ein Intervall für den aktuellen Feeder (identifiziert durch 'i') läuft.
  if (intervalIds.simulateFeederLine[i]) {
    return;  // Beendet die Funktion frühzeitig.
  }
  // Importiert die Variablendefinitionen aus einer externen Datei.
  var werte = require('./profiles/simulation/variables/Variablen');
  // Holt den Gesamtdurchsatz für die Feederlinie aus den Server-Daten.
  let totalTargetThroughput = serverValues[werte.data.SU1000_Line_Hmi_udtLm_udtLineRamp_Throughput_rSet.nodeId.value];
  // Bestimmt den aktuellen prozentualen Durchsatz des spezifischen Feeders.
//  let currentFeederThroughput = serverValues[werte.data[i].SU2110_Feeding_Hmi_udtEmFeeder_rThroughputPerc_rAct.nodeId.value];
  let currentFeederThroughput = serverValues[werte.data[i].SU2110_Feeding_Hmi_udtEmFeeder_rThroughput_rAct.nodeId.value]
  // Innere Funktion, die den Durchsatz des Feeders im Line Mode simuliert.
  function simulateFeederLine() {
    // Berechnet den Zieldurchsatz für den Feeder basierend auf dem Gesamtdurchsatz.
    let targetThroughputForFeeder = totalTargetThroughput * (serverValues[werte.data[i].SU2110_Feeding_Hmi_udtEmFeeder_rThroughputPerc_rSet.nodeId.value] / 100);
    // Ermittelt die Richtung der Durchsatzänderung (Erhöhung oder Verringerung).
    let direction = (targetThroughputForFeeder > currentFeederThroughput) ? 1 : -1;
    // Berechnet das Inkrement, um den Durchsatz anzupassen.
    let inkrement = 1.0 * direction;
    currentFeederThroughput += inkrement;
    // Prüft, ob ein globaler Stoppbefehl für den Line Mode vorliegt.
    if (sharedState.intervalIds.stop_simulate_Line_Mode) {
      // Beendet alle Intervalle, wenn ein Stoppbefehl vorliegt.
      for (let id of intervalIds.simulateFeederLine) {
        clearInterval(id);
      }
      intervalIds.simulateFeederLine = [];  // Setzt das Array zurück.
      return;  // Beendet die Ausführung der inneren Funktion.
    }
    // Prüft, ob der Feeder ausgeschaltet ist.
    if (sharedState.feeders[i].FeederisOff) {
      currentFeederThroughput = 0;  // Setzt den Durchsatz auf Null.
      clearInterval(intervalIds.simulateFeederLine[i]);  // Beendet das spezifische Intervall.
      intervalIds.simulateFeederLine[i] = null;  // Entfernt die Referenz auf das Intervall.
    }
    // Prüft, ob der aktuelle Durchsatz den Zielwert erreicht hat.
    if ((direction === 1 && currentFeederThroughput >= targetThroughputForFeeder) ||
      (direction === -1 && currentFeederThroughput <= targetThroughputForFeeder)) {
      currentFeederThroughput = targetThroughputForFeeder;  // Setzt den Durchsatz auf den Zielwert.
      clearInterval(intervalIds.simulateFeederLine[i]);  // Beendet das Intervall.
      intervalIds.simulateFeederLine[i] = null;  // Entfernt die Referenz auf das Intervall.
    }
    // Aktualisiert die Werte in den Server-Daten für die HMI-Anzeige.
    serverValues[werte.data[i].SU2110_Feeding_Hmi_udtEmFeeder_rThroughputPerc_rAct.nodeId.value] = (currentFeederThroughput / totalTargetThroughput) * 100;  // Prozentualer Anteil am Gesamtdurchsatz.
    serverValues[werte.data[i].SU2110_Feeding_Hmi_udtEmFeeder_rSpeed_rAct.nodeId.value] = serverValues[werte.data[i].SU2110_Feeding_Hmi_udtEmFeeder_rThroughputPerc_rAct.nodeId.value];
    serverValues[werte.data[i].SU2110_Feeding_Hmi_udtEmFeeder_rThroughput_rAct.nodeId.value] = Math.round(currentFeederThroughput);  // Gerundeter Durchsatzwert.
  }
  // Startet ein wiederkehrendes Intervall, das 'simulateFeederLine' ausführt.
  let intervalId = setInterval(simulateFeederLine, 100);
  intervalIds.simulateFeederLine[i] = intervalId;  // Speichert die ID des Intervalls für spätere Referenzen.
}



/**
 * Simuliert kontinuierlich die Verringerung des Füllniveaus eines Feeders in einem Extrudersystem.
 * 
 * Diese Funktion reduziert das Füllniveau eines spezifischen Feeders basierend auf der aktuellen Durchsatzrate.
 * Sie berechnet das neue Füllniveau in regelmäßigen Intervallen und aktualisiert die entsprechenden Werte in den Serverdaten.
 * Die Funktion berücksichtigt auch Abbruchbedingungen wie den Stop-Button in der HMI, das Erreichen eines leeren Füllstandes
 * oder das Ausschalten des Feeders, um das Intervall zu stoppen und die Simulation zu beenden. 
 * 
 * @param {number} i - Der Index des zu simulierenden Feeders.
 * @param {Object} nameNodeId - Ein Objekt, das Node-IDs für verschiedene Variablen und Zustände enthält.
 * @param {Object} serverValues - Ein Objekt, das aktuelle Werte für verschiedene Servervariablen speichert.
 */
function simulateFeederFillLevel(i, nameNodeId, serverValues) {
  // Überprüft, ob für diesen Feeder bereits ein Intervall aktiv ist, um Doppelungen zu vermeiden.
  if (intervalIds.updateFeederWeight[i]) {
    // Wenn ja, verlässt die Funktion frühzeitig, da kein neues Intervall benötigt wird.
    return;
  }
  // Importiert Variablen und Konfigurationen aus einer externen Datei.
  var werte = require('./profiles/simulation/variables/Variablen');
  // Die innere Funktion, die das Füllniveau aktualisiert.
  function updateFeederWeight() {
    
    
    // Berechnet den neuen Füllstand basierend auf der aktuellen Durchsatzrate.
    let ratePerInterval = serverValues[werte.data[i].SU2110_Feeding_Hmi_udtEmFeeder_rThroughput_rAct.nodeId.value];
    let currentLevel = serverValues[werte.data[i].SU2110_Feeding_Hmi_udtEmFeeder_rLevel_rAct.nodeId.value];
    currentLevel -= ratePerInterval;
    // Aktualisiert die Gesamtmenge und den Füllstand in der HMI.
    serverValues[werte.data[i].SU2110_Feeding_Hmi_udtEmFeeder_rTotal_rAct.nodeId.value] += ratePerInterval;
    serverValues[werte.data[i].SU2110_Feeding_Hmi_udtEmFeeder_rLevel_rAct.nodeId.value] = currentLevel;
    // Erste Abbruchbedingung: Wenn der Stop-Button in der HMI gedrückt wird.
    if (sharedState.intervalIds.stop_Simulate_Feeder_Weight) {
      // Stoppt alle Intervalle für die Aktualisierung des Füllstandes.
      for (let id of intervalIds.updateFeederWeight) {
        clearInterval(id);
      }
      // Setzt die Intervall-Referenzen zurück.
      intervalIds.updateFeederWeight = [];
      // Verlässt die Funktion, da keine weiteren Aktualisierungen erforderlich sind.
      return;
    }
    // Zweite Abbruchbedingung: Wenn der Füllstand Null oder negativ wird.
    if (currentLevel <= 0) {
      // Stoppt das Intervall für diesen speziellen Feeder.
      clearInterval(intervalIds.updateFeederWeight[i]);
      // Entfernt die Referenz auf das gestoppte Intervall.
      intervalIds.updateFeederWeight[i] = null;
      // Stellt sicher, dass der Füllstand nicht negativ wird.
      currentLevel = 0;
      // Aktualisiert den Füllstand in der HMI auf 0.
      serverValues[werte.data[i].SU2110_Feeding_Hmi_udtEmFeeder_rLevel_rAct.nodeId.value] = currentLevel;
    }
    // Dritte Abbruchbedingung: Wenn der Feeder ausgeschaltet wird.
    if (sharedState.feeders[i].FeederisOff) {
      // Stoppt das Intervall für diesen speziellen Feeder.
      clearInterval(intervalIds.updateFeederWeight[i]);
      // Entfernt die Referenz auf das gestoppte Intervall.
      intervalIds.updateFeederWeight[i] = null;
    }
  }
  // Legt ein neues Intervall an, das updateFeederWeight jede Minute aufruft.
  let intervalId = setInterval(updateFeederWeight, 60000);
  // Speichert die ID des Intervalls, damit es später gestoppt werden kann.
  intervalIds.updateFeederWeight[i] = intervalId;
}


/**
 * Simuliert die Rampensteuerung des Durchsatzes für einen Feeder im Line Mode eines Extrudersystems.
 * 
 * Diese Funktion steuert die schrittweise Anpassung des Durchsatzes eines Feeders an einen Zielwert, der auf Basis des Gesamtdurchsatzes
 * und des prozentualen Anteils des Feeders berechnet wird. Die Funktion verwendet ein Intervall, um die Durchsatzänderungen
 * regelmäßig zu aktualisieren. Sie berücksichtigt globale Stoppsignale und den Modus des Feeders, um die Simulation
 * entsprechend zu steuern. Das Intervall wird gestoppt, wenn der Feeder ausgeschaltet ist, der Ziel-Durchsatz erreicht wird
 * oder über globale Steuerungssignale ein Stopp der Rampensteuerung signalisiert wird.
 * 
 * @param {number} i - Der Index des zu simulierenden Feeders im Line Mode.
 * @param {Object} nameNodeId - Ein Objekt, das Node-IDs für verschiedene Variablen und Zustände enthält.
 * @param {Object} serverValues - Ein Objekt, das aktuelle Werte für verschiedene Servervariablen speichert.
 */
function simulateFeederLineModeRamp(i, nameNodeId, serverValues) {
  // Überprüfen, ob bereits ein Intervall für diesen Feeder existiert
  // Verhindert das mehrfache Starten des Intervalls für denselben Feeder
  if (intervalIds.startsimulateLineModeRamp[i]) {
    return;  // Frühzeitiger Abbruch, falls das Intervall schon läuft
  }
  // Importieren notwendiger Werte aus einer externen Datei
  var werte = require('./profiles/simulation/variables/Variablen');

  // Bestimmen des Zieldurchsatzes (kg/h) basierend auf dem gesetzten Gesamtdurchsatz und dem prozentualen Anteil des Feeders
  let throughputSet = serverValues[werte.data.SU1000_Line_Hmi_udtLm_udtLineRamp_Throughput_rSet.nodeId.value];
  let througputSetPercLineMode = serverValues[werte.data[i].SU2110_Feeding_Hmi_udtEmFeeder_rThroughputPerc_rSet.nodeId.value];
  let targetThroughput = throughputSet * througputSetPercLineMode / 100;

  // Wert wird der HMI zugewiesen, Anpassung des aktuellen Set Wertes für den Durchsatz, Achtung Wert wird nur angezeigt, wenn die RampenFuntion gestartet wird,
  serverValues[werte.data[i].SU2110_Feeding_Hmi_udtEmFeeder_rThroughput_rSet.nodeId.value] = targetThroughput;

  // Berechnung der Steigung der Durchsatzrampe (Änderung pro Minute)
  let gradient = serverValues[werte.data.SU1000_Line_Parameter_udtLm_rThroughputRamp_Set.nodeId.value] / 60;

  // Funktion zur stetigen Anpassung des aktuellen Durchsatzes des Feeders
  function startsimulateLineModeRamp() {
    // Abrufen des aktuellen Durchsatzes des Feeders
    let currentThroughput = serverValues[werte.data[i].SU2110_Feeding_Hmi_udtEmFeeder_rThroughput_rAct.nodeId.value];
    // Ermitteln der Richtung der Durchsatzanpassung (Erhöhung oder Verringerung)
    let direction = (targetThroughput > currentThroughput) ? 1 : -1;
    // Berechnung des Durchsatzinkrements basierend auf der Rampensteigung und der Richtung
    let increment = gradient * direction;
    // Aktualisieren des aktuellen Durchsatzes um das berechnete Inkrement
    currentThroughput += increment;
    // Zuweisen des aktualisierten Durchsatzes zur Anzeige in der HMI
    serverValues[werte.data[i].SU2110_Feeding_Hmi_udtEmFeeder_rThroughput_rAct.nodeId.value] = currentThroughput;
    // Erste Abbruchbedingung: Stoppen der Rampe über globale Steuerung
    if (sharedState.intervalIds.stop_Simulate_Throughput_Ramp_Line) {
      // Stoppen aller Intervalle der Rampensteuerung
      for (let id of intervalIds.startsimulateLineModeRamp) {
        clearInterval(id);
      }
      // Leeren des Intervall-Arrays
      intervalIds.startsimulateLineModeRamp = [];
      return;  // Frühzeitiger Abbruch der Funktion
    }
    // Zweite Abbruchbedingung: Globales Signal zum Stoppen der Rampensteuerung
    if (sharedState.Process_states.Feeder_Ramp_Mode_is_Off) {
      clearInterval(intervalIds.startsimulateLineModeRamp[i]);
      intervalIds.startsimulateLineModeRamp[i] = null;
    }
    // Dritte Abbruchbedingung: Erreichen des Zielwertes in beiden Richtungen
    if ((direction === 1 && currentThroughput >= targetThroughput) || (direction === -1 && currentThroughput <= targetThroughput)) {
      // Festlegen des Durchsatzes auf den Zielwert
      serverValues[werte.data[i].SU2110_Feeding_Hmi_udtEmFeeder_rThroughput_rAct.nodeId.value] = targetThroughput;
      // Stoppen des aktuellen Intervalls
      clearInterval(intervalIds.startsimulateLineModeRamp[i]);
      // Entfernen der Referenz auf das gestoppte Intervall
      intervalIds.startsimulateLineModeRamp[i] = null;

      // Überprüfen, ob alle Feeders ihr Ziel erreicht haben
      let allFeedersCompleted = true;
      for (let j = 1; j <= 4; j++) {
        // Hier wird überprüft, ob noch Intervalle für die Rampensteuerung der Feeder laufen.
        // Für nicht gestartete Feeder ist `intervalIds.startsimulateLineModeRamp[j]` bereits auf Null gesetzt,
        // daher werden sie in dieser Überprüfung nicht als aktiv betrachtet.
        // Wenn ein aktives Intervall gefunden wird, bedeutet dies, dass der betreffende Feeder sein Ziel noch nicht erreicht hat.
        if (intervalIds.startsimulateLineModeRamp[j]) {
          // Sobald ein noch laufendes Intervall gefunden wird, wird festgestellt, dass nicht alle Feeder ihr Ziel erreicht haben.
          allFeedersCompleted = false;
          break; // Schleife wird sofort verlassen, da ein laufendes Intervall gefunden wurde.
        }
      }
      // Wenn alle Feeders ihr Ziel erreicht haben, also kein aktives Intervall mehr läuft,
      // werden die globalen Steuerungssignale für die Rampensteuerung aktualisiert.
      if (allFeedersCompleted) {
        sharedState.Process_states.Feeder_Ramp_Mode_is_Off = true;
        sharedState.FeederRampModeisOn = false;
      }
    }
  }
  // Starten der Rampensteuerungsfunktion in regelmäßigen Intervallen
  let intervalId = setInterval(startsimulateLineModeRamp, 300);
  // Speichern der Interval-ID im globalen Objekt für spätere Referenzierung
  intervalIds.startsimulateLineModeRamp[i] = intervalId;
}


/**
 * Verteilt den Gesamtdurchsatz auf die im Line Mode aktiven Feeder und berechnet deren prozentualen Anteil.
 * 
 * Diese Funktion ermittelt den Gesamtdurchsatz eines Extrudersystems und verteilt diesen auf mehrere im Line Mode aktive Feeder.
 * Sie berechnet den prozentualen Anteil jedes Feeders am Gesamtdurchsatz. Wenn nur ein Feeder im Line Mode ist, wird ihm der gesamte
 * Durchsatz zugewiesen. Bei mehreren Feedern im Line Mode wird der Durchsatz basierend auf den eingestellten Werten und
 * der Anzahl der aktiven Feeder neu berechnet und verteilt. Die Funktion aktualisiert die Serverwerte, um die prozentuale
 * Verteilung des Durchsatzes auf die einzelnen Feeder widerzuspiegeln.
 * 
 */
function PercentagedistributionFeederLineMode() {
  // Summe der Durchsätze wird initialisiert, um später die Gesamtdurchsätze zu berechnen.
  let sum = 0;
  // Import der Variablen-Definitionen aus einer externen Datei, um Zugriff auf Variablenwerte zu erhalten.
  var werte = require('./profiles/simulation/variables/Variablen');
  // Der Gesamtdurchsatz wird aus den Serverwerten bezogen. Dies ist der Referenzwert für die Verteilung.
  let totalThroughput = serverValues[werte.data.SU1000_Line_Hmi_udtLm_udtLineRamp_Throughput_rSet.nodeId.value];

  // Zähler für die Anzahl der aktiven Feeder im Line Mode.
  let activeFeeders = 0;
  // Durchläuft alle Feeder und zählt, wie viele im Line Mode sind.
  for (let i = 1; i <= 4; i++) {
    if (sharedState.feeders[i].FeederLineMode) {
      activeFeeders++;
    }
  }
  // Wenn nur ein Feeder im Line Mode ist, wird sein Durchsatz mit dem Gesamtdurchsatz synchronisiert.
  if (activeFeeders === 1) {
    // Durchläuft alle Feeder, um den aktiven Feeder im Line Mode zu finden.
    for (let i = 1; i <= 4; i++) {
      if (sharedState.feeders[i].FeederLineMode) {
        // Aktueller Durchsatz des aktiven Feeders im Line Mode.
        let feederThroughput = serverValues[werte.data[i].SU2110_Feeding_Hmi_udtEmFeeder_rThroughput_rSet.nodeId.value];
        // Passt den Durchsatz des aktiven Feeders an, wenn er nicht mit dem Gesamtdurchsatz übereinstimmt.
        // Dies stellt sicher, dass der Feeder den gesamten Durchsatz nutzt, wenn er der einzige im Line Mode ist.
        if (feederThroughput < totalThroughput) {
          serverValues[werte.data[i].SU2110_Feeding_Hmi_udtEmFeeder_rThroughput_rSet.nodeId.value] = totalThroughput;
        }
        // Aktualisiert den Gesamtdurchsatz, wenn der Feeder einen höheren Wert als den aktuellen Gesamtdurchsatz hat.
        if (feederThroughput > totalThroughput) {
          totalThroughput = feederThroughput;
        }
      }
    }
  }
  // Berechnet den Gesamtdurchsatz neu, wenn mehrere Feeder im Line Mode sind.
  sum = 0; // Reset der Summe für die Neuberechnung.
  for (let i = 1; i <= 4; i++) {
    if (sharedState.feeders[i].FeederLineMode) {
      // Addiert die Durchsätze aller im Line Mode aktiven Feeder.
      sum += serverValues[werte.data[i].SU2110_Feeding_Hmi_udtEmFeeder_rThroughput_rSet.nodeId.value];
    }
  }
  // Speichert den neu berechneten Gesamtdurchsatz.
  serverValues[werte.data.SU1000_Line_Hmi_udtLm_udtLineRamp_Throughput_rSet.nodeId.value] = sum;
  totalThroughput = sum;
  // Berechnet den Prozentsatz des Beitrags jedes Feeders zum Gesamtdurchsatz.
  for (let i = 1; i <= 4; i++) {
    if (sharedState.feeders[i].FeederLineMode) {
      // Berechnet den prozentualen Anteil des Feeders am Gesamtdurchsatz.
      let feederThroughput = serverValues[werte.data[i].SU2110_Feeding_Hmi_udtEmFeeder_rThroughput_rSet.nodeId.value];
      let percentage = (feederThroughput / totalThroughput) * 100;
      // Speichert den berechneten Prozentsatz im Serverwert für die spätere Verwendung.
      serverValues[werte.data[i].SU2110_Feeding_Hmi_udtEmFeeder_rThroughputPercSet_rSet.nodeId.value] = percentage;
    }
  }
  // Setzt die Durchsatzprozente der Feeder, die nicht im Line Mode sind, auf 0.
  for (let i = 1; i <= 4; i++) {
    // Überprüft, ob der Feeder nicht im Line Mode ist.
    if (!sharedState.feeders[i].FeederLineMode) {
      // Feeder, die nicht im Line Mode sind, werden im Prozess der Durchsatzverteilung ignoriert.
      // Daher wird ihr Durchsatzanteil auf 0 gesetzt, um dies in der Anzeige der HMI zu reflektieren.
      serverValues[werte.data[i].SU2110_Feeding_Hmi_udtEmFeeder_rThroughputPercSet_rSet.nodeId.value] = 0;
    }
  }
}






/**
 * Verwaltet einen Nachlauf-Timer für die Getriebeölschmierung eines Extrudersystems.
 * 
 * Diese Funktion initialisiert und startet einen Countdown-Timer für die Nachlaufphase der Getriebeölschmierung.
 * Der Timer beginnt mit einem voreingestellten Wert und zählt jede Sekunde herunter. Während dieser Nachlaufzeit
 * wird das Getriebeöl weiterhin geschmiert, um einen optimalen Schutz des Getriebes zu gewährleisten. Nach Ablauf des Timers
 * wird der Zustand der Schmierung aktualisiert, und es wird eine kurze Verzögerung eingeführt, bevor der Zustand zurückgesetzt wird.
 * Diese Funktion ist entscheidend für die Aufrechterhaltung der Lebensdauer und Leistungsfähigkeit des Extruders.
 */
function GearboxOilLubricationFollowUpTimer() {
  // Protokollierung in der Konsole, dass die Funktion ausgeführt wird.
  console.log("In der Funktion GearboxOilLubricationFollowUpTimer");

  // Importieren der Variablendefinitionen aus einer externen Datei.
  var werte = require('./profiles/simulation/variables/Variablen');

  // Abrufen des Startwerts für den FollowUp-Timer aus den Konfigurationseinstellungen.
  let currentValue = serverValues[werte.data.SU3111_ZeExtruder_Config_udtEmGearOilLubExt_udFollowUpTime_Set.nodeId.value];

  // Innere Funktion 'startOilLubWatchFollowUp', die die Zeit für die Nachlaufzeit überwacht.
  function startOilLubWatchFollowUp() {
    // Verringerung des aktuellen Timer-Werts um 1.
    currentValue--;

    // Aktualisierung des verringerten Werts im 'serverValues'-Objekt.
    serverValues[werte.data.SU3111_ZeExtruder_Hmi_udtEmGearOilLubExt_udActRemainTimeFollowUp.nodeId.value] = currentValue;

    // Überprüfung, ob der Timer-Wert 0 oder kleiner erreicht hat.
    if (currentValue <= 0) {
      // Beenden des Timers, wenn der Wert 0 oder kleiner erreicht wird.
      clearInterval(intervalId);

      // Setzen des Zustands, dass die FollowUp-Zeit abgelaufen ist.
      sharedState.GearOilRemainTimeFollowUpExpired = true;

      // Kurze Verzögerung nach dem Ablauf des Timers, um den Zustand zurückzusetzen.
      setTimeout(function () {
        sharedState.GearOilRemainTimeFollowUpExpired = false;
      }, 150);
    }
  }
  // Starten des Timers, der die 'startOilLubWatchFollowUp'-Funktion jede Sekunde ausführt.
  let intervalId = setInterval(startOilLubWatchFollowUp, 1000); // Speichern der Interval-ID zur späteren Referenz.
}



/**
 * Verwaltet einen PreRun-Timer für die Getriebeölschmierung eines Extrudersystems.
 * 
 * Diese Funktion initialisiert und startet einen Countdown-Timer, der für die Getriebeölschmierung vor dem Start des Extruders benötigt wird.
 * Der Timer beginnt mit einem voreingestellten Wert und zählt jede Sekunde herunter. Der aktuelle Wert des Timers wird kontinuierlich
 * in den Serverdaten aktualisiert. Sobald der Timer den Wert 0 erreicht, wird er gestoppt, und ein entsprechender Zustand im System
 * wird gesetzt, um anzuzeigen, dass die Getriebeölschmierung abgeschlossen ist und der Extruder startbereit ist.
 */
function GearboxOilLubricationTimerPreRun() {

  // Importieren der Variablendefinitionen aus einer externen Datei.
  var werte = require('./profiles/simulation/variables/Variablen');

  // Abrufen des Startwerts für den PreRun-Timer aus dem 'serverValues'-Objekt.
  let currentValue = serverValues[werte.data.SU3111_ZeExtruder_Config_udtEmGearOilLubExt_udPreRunTime_Set.nodeId.value];

  // Definition der inneren Funktion 'startOilLubUhr' zur Verringerung des Timer-Werts.
  function startOilLubUhr() {
    // Verringerung des aktuellen Timer-Werts um 1.
    currentValue--;

    // Aktualisierung des verringerten Werts im 'serverValues'-Objekt.
    serverValues[werte.data.SU3111_ZeExtruder_Hmi_udtEmGearOilLubExt_udActRemainPreRunTime.nodeId.value] = currentValue;

    // Überprüfung, ob der Timer-Wert 0 oder kleiner erreicht hat.
    if (currentValue <= 0) {
      // Wenn ja, wird das Interval gestoppt und der Zustand entsprechend aktualisiert.
      clearInterval(intervalId);
      sharedState.GearOilRemainPreRunTimeExpired = true;
    }
  }
  // Starten des Timers, der die 'startOilLubUhr'-Funktion alle 1000 Millisekunden (1 Sekunde) ausführt.
  let intervalId = setInterval(startOilLubUhr, 1000);
}





// Initialisiere Objekte zur Speicherung von früheren Werten und Zählern.
let previousRAct = {};
let consecutiveCounter = {};

/**
 * Aktualisiert die Statusanzeigen in der HMI basierend auf aktuellen Werten und Toleranzbereichen.
 * 
 * Diese Funktion liest die aktuellen Werte und Toleranzbereiche für verschiedene Parameter des Extrudersystems aus den Serverdaten.
 * Sie überprüft die Toleranzbereiche und aktualisiert die visuellen Anzeigen in der HMI entsprechend.
 * Die Funktion berücksichtigt sowohl absolute als auch relative Toleranzen und verändert die Anzeigen für Tendenzen
 * und Toleranzüberschreitungen. Sie speichert den aktuellen Wert für zukünftige Vergleiche und passt die Statusbits (`dwStat`)
 * basierend auf den gelesenen und berechneten Werten an.
 * 
 * @param {number} i - Der Index des zu aktualisierenden Elements.
 * @param {string} NameVariabel - Der Name der zu überwachenden Variablen.
 */
/*Beispielaufruf der Funktion
funktionen.updatedwstat(undefined, "SU3111_ZeExtruder_Hmi_udtEmExtruderDriveCtrl_rScrewSpeed");
funktionen.updatedwstat(i, "SU3111_ZeExtruder_Hmi_udtCmMeltPress_rPress")
*/

function updatedwstat(i, NameVariabel) {
  // Importiere erforderliche Werte aus einer externen Datei.
  var werte = require('./profiles/simulation/variables/Variablen');
  var rActKey; // Schlüssel für den Zugriff auf den aktuellen Wert.
  var data; // Variable für die Speicherung der Daten.

  // Erstelle den Schlüssel basierend auf dem Präfix, falls 'i' definiert ist.
  if (typeof i !== "undefined") {

    rActKey = i + "_" + "." + NameVariabel; // Schlüssel basierend auf dem Präfix erstellen
    data = werte.data[i];
  } else {
    rActKey = "." + NameVariabel;
    data = werte.data;
  }
  // Lese aktuelle Werte und Toleranzwerte aus den Serverdaten.
  var rAct = serverValues[data[NameVariabel + "_rAct"].nodeId.value];
  let rSetTolMin = serverValues[data[NameVariabel + "_rSetTolMin"].nodeId.value];
  let rSetTolMinMin = serverValues[data[NameVariabel + "_rSetTolMinMin"].nodeId.value];
  let rSetTolMax = serverValues[data[NameVariabel + "_rSetTolMax"].nodeId.value];
  let rSetTolMaxMax = serverValues[data[NameVariabel + "_rSetTolMaxMax"].nodeId.value];
  let set = serverValues[data[NameVariabel + "_rSet"].nodeId.value];
  let dwStat = serverValues[data[NameVariabel + "_dwStat"].nodeId.value];

  // Überprüfe und bearbeite dwStat, wenn die Toleranzüberwachung inaktiv ist.
  if (!(dwStat & (1 << sharedState.dwStat.Tolerance_monitoring_is_active))) { // Wenn das Bit für Tolerance Monitoring aus,  dann werden die Farben rot und orange "gelöscht"
    // Setze die Bits für MaxMax und Max Toleranzüberschreitungen zurück.
    dwStat &= ~(1 << sharedState.dwStat.Out_of_tolerance_MaxMax);
    dwStat &= ~(1 << sharedState.dwStat.Out_of_tolerance_Max);
  }

  // Behandelt den Fall, wenn der aktuelle Wert (rAct) gleich 0 ist.
  if (rAct === 0) {
    // Setzt verschiedene Bits zurück, die Tendenz und Toleranzüberschreitungen anzeigen.
    dwStat &= ~(1 << sharedState.dwStat.Actual_value_tendence_is_down); // Pfeil runter wird gelöscht
    dwStat &= ~(1 << sharedState.dwStat.Actual_value_tendence_is_up); // Pfeil hoch wird gelöscht
    dwStat &= ~(1 << sharedState.dwStat.Out_of_tolerance_MaxMax); // Löschen der Toleranzzonen MaxMax 
    dwStat &= ~(1 << sharedState.dwStat.Out_of_tolerance_Max); // Löschen der Toleranzzonen Max
  } else {
    // Prüft und aktualisiert Tendenzinformationen basierend auf früheren Werten.
    if (typeof previousRAct[rActKey] !== 'undefined') {
      // Vergleicht aktuellen Wert mit dem vorherigen und aktualisiert dwStat und Zähler.
      if (rAct > previousRAct[rActKey]) {
        consecutiveCounter[rActKey] = 0; // Setzt Zähler zurück.
        dwStat |= (1 << sharedState.dwStat.Actual_value_tendence_is_up);// Setzt Bit für aufsteigende Tendenz.
        dwStat &= ~(1 << sharedState.dwStat.Actual_value_tendence_is_down);// Löscht Bit für absteigende Tendenz.
      } else if (rAct < previousRAct[rActKey]) {
        consecutiveCounter[rActKey] = 0;// Setzt Zähler zurück.
        dwStat |= (1 << sharedState.dwStat.Actual_value_tendence_is_down);// Setzt Bit für absteigende Tendenz.
        dwStat &= ~(1 << sharedState.dwStat.Actual_value_tendence_is_up);// Löscht Bit für aufsteigende Tendenz.
      } else {
        consecutiveCounter[rActKey] = (consecutiveCounter[rActKey] || 0) + 1;// Erhöht Zähler bei gleichbleibendem Wert.
        // Wenn der Wert für mehr als 20 Iterationen gleich bleibt, werden die Tendenzbits zurückgesetzt.
        if (consecutiveCounter[rActKey] > 20) {
          dwStat &= ~(1 << sharedState.dwStat.Actual_value_tendence_is_down);  // Löscht das Bit für absteigende Tendenz.
          dwStat &= ~(1 << sharedState.dwStat.Actual_value_tendence_is_up); // Löscht das Bit für aufsteigende Tendenz.
        }
      }
    }
  }
  // Behandlung von absoluten Toleranzen: Setzt entsprechende Bits basierend auf Toleranzüberschreitungen.
  if ((dwStat & (1 << sharedState.dwStat.Tolerance_monitoring_is_active)) && (dwStat & (1 << sharedState.dwStat.Tolreances_are_absolute))) {
    // Prüft und setzt Bits für unterschiedliche Toleranzüberschreitungen.
    if (rSetTolMin === 0 && rAct < rSetTolMinMin && rAct < rSetTolMax && rAct < rSetTolMaxMax) {
      dwStat &= ~(1 << sharedState.dwStat.Out_of_tolerance_Max);
      dwStat |= (1 << sharedState.dwStat.Out_of_tolerance_MaxMax);
    }
    if (rAct === 0) {
      dwStat &= ~(1 << sharedState.dwStat.Actual_value_tendence_is_down);
      dwStat &= ~(1 << sharedState.dwStat.Actual_value_tendence_is_up);
      dwStat &= ~(1 << sharedState.dwStat.Out_of_tolerance_MaxMax);
      dwStat &= ~(1 << sharedState.dwStat.Out_of_tolerance_Max);
    }
    if (rAct < rSetTolMin && rAct < rSetTolMinMin && rAct < rSetTolMax && rAct < rSetTolMaxMax) {
      dwStat &= ~(1 << sharedState.dwStat.Out_of_tolerance_Max);
      dwStat |= (1 << sharedState.dwStat.Out_of_tolerance_MaxMax);
    }
    if (rAct > rSetTolMin && rSetTolMin > 0 && rAct < rSetTolMinMin && rAct < rSetTolMax && rAct < rSetTolMaxMax) {
      dwStat &= ~(1 << sharedState.dwStat.Out_of_tolerance_MaxMax);
      dwStat |= (1 << sharedState.dwStat.Out_of_tolerance_Max);
    }

    if (rAct > rSetTolMinMin && rAct < rSetTolMax && rAct < rSetTolMaxMax) {
      dwStat &= ~(1 << sharedState.dwStat.Out_of_tolerance_MaxMax);
      dwStat &= ~(1 << sharedState.dwStat.Out_of_tolerance_Max);
    }

    if (rAct > rSetTolMin && rAct > rSetTolMinMin && rAct < rSetTolMaxMax && rAct > rSetTolMax) {
      dwStat &= ~(1 << sharedState.dwStat.Out_of_tolerance_MaxMax);
      dwStat |= (1 << sharedState.dwStat.Out_of_tolerance_Max);
    }
    if (rAct > rSetTolMin && rAct > rSetTolMinMin && rAct > rSetTolMaxMax && rAct > rSetTolMax) {
      dwStat &= ~(1 << sharedState.dwStat.Out_of_tolerance_Max);
      dwStat |= (1 << sharedState.dwStat.Out_of_tolerance_MaxMax);

    }
  }

  // Behandlung von relativen Toleranzen
  if ((dwStat & (1 << sharedState.dwStat.Tolerance_monitoring_is_active)) && !(dwStat & (1 << sharedState.dwStat.Tolreances_are_absolute))) {
    // Behandelt den Fall relativer Toleranzen und setzt entsprechende Bits in Relation zum Set-Wert.
    if (rAct < set - rSetTolMinMin) {
      dwStat |= (1 << sharedState.dwStat.Out_of_tolerance_MaxMax);
    }
    if (rAct < set - rSetTolMin && rAct > set - rSetTolMinMin) {
      dwStat &= ~(1 << sharedState.dwStat.Out_of_tolerance_MaxMax);
      dwStat |= (1 << sharedState.dwStat.Out_of_tolerance_Max);
    }
    if (rAct > set - rSetTolMin) {
      dwStat &= ~((1 << sharedState.dwStat.Out_of_tolerance_MaxMax) | (1 << sharedState.dwStat.Out_of_tolerance_Max));
    }
    if (rAct > set + rSetTolMinMin) {
      dwStat |= (1 << sharedState.dwStat.Out_of_tolerance_MaxMax);
    }

    if (rAct > set + rSetTolMin) {
      dwStat |= (1 << sharedState.dwStat.Out_of_tolerance_Max);
    }

  }
  // Speichert den aktuellen Wert von rAct für zukünftige Vergleiche.
  previousRAct[rActKey] = rAct;
  // Aktualisiert den dwStat-Wert im Server.
  serverValues[data[NameVariabel + "_dwStat"].nodeId.value] = dwStat
};


/**
 * Verwaltet die Zustände eines Systems und ermöglicht deren Aktualisierung.
 * 
 * Diese Klasse repräsentiert eine Zustandsmaschine mit verschiedenen Zuständen wie 'IDLE', 'RUNNING', 'STOPPED' usw.
 * Jeder Zustand ist durch einen Namen und einen Bitwert gekennzeichnet. Die Klasse bietet eine Methode `setState`,
 * um den Zustand eines bestimmten Elements im System zu aktualisieren. Die Aktualisierung erfolgt durch das Setzen
 * des entsprechenden Bitwerts in einem serverbasierten Wertespeicher.
 * 
 * Methoden:
 *  - setState(variableName, stateName): Aktualisiert den Zustand eines Elements im System. Die Methode nimmt den
 *    Namen der Variablen und den Namen des Zielzustands entgegen und setzt den entsprechenden Bitwert im Serverwert.
 */

class StateMachine {
  constructor() {
    this.states = {
      IDLE: { name: "IDLE", bit: (1 << sharedState.dwStat.statemachine.Idle) },
      RUNNING: { name: "RUNNING", bit: (1 << sharedState.dwStat.statemachine.Running) },
      STOPPED: { name: "STOPPED", bit: (1 << sharedState.dwStat.statemachine.Stopped) },
      E_STOP_PRESSED: { name: "E-STOP-PRESSED", bit: (1 << sharedState.dwStat.statemachine.E_Stop_Pressed) },
      E_STOP_RELEASED: { name: "E-STOP-RELEASED", bit: (1 << sharedState.dwStat.statemachine.E_Stop_Released) },
      PREHEATING: { name: "PREHEATING", bit: (1 << sharedState.dwStat.statemachine.Preheating) }
    };
  }
  setState(variableName, stateName) {
    var werte = require('./profiles/simulation/variables/Variablen');
    const state = this.states[stateName];

    const variableKey = werte.data[variableName].nodeId.value;

    if (typeof serverValues[variableKey] !== 'undefined') {
      serverValues[variableKey] = state.bit;
    } else {
      console.error(`serverValues enthält keinen Schlüssel namens ${variableKey}`);
    }
  }
}


/**
 * Verwaltet die Zustände einer Navigationsleiste in einem System.
 * 
 * Diese Klasse repräsentiert eine Zustandsmaschine speziell für die Navigationsleiste eines Systems, mit Zuständen wie 'STOPPED', 
 * 'RUNNING', 'WARNING', 'ERROR' und 'CRITICAL'. Jeder Zustand ist durch einen Namen und einen Bitwert gekennzeichnet. Die Klasse
 * bietet eine Methode `setState`, um den Zustand der Navigationsleiste zu aktualisieren. Die Aktualisierung erfolgt durch das
 * Setzen des entsprechenden Bitwerts in einem serverbasierten Wertespeicher.
 * 
 * Methoden:
 *  - setState(variableName, stateName): Aktualisiert den Zustand der Navigationsleiste. Die Methode nimmt den Namen der Variablen
 *    und den Namen des Zielzustands entgegen und setzt den entsprechenden Bitwert im Serverwert.
 */
class StateMachineNavigationBar {
  constructor() {
    this.states = {
      STOPPED: { name: "STOPPED", bit: (1 << sharedState.dwStat.statemachine_navigationbar.Stopped) },
      RUNNING: { name: "RUNNING", bit: (1 << sharedState.dwStat.statemachine_navigationbar.Running) },
      WARNING: { name: "WARNING", bit: (1 << sharedState.dwStat.statemachine_navigationbar.Warning) },
      ERROR: { name: "ERROR", bit: (1 << sharedState.dwStat.statemachine_navigationbar.Error) },
      CRITICAL: { name: "CRITICAL", bit: (1 << sharedState.dwStat.statemachine_navigationbar.Critical) }
    };
  }

  setState(variableName, stateName) {
    var werte = require('./profiles/simulation/variables/Variablen');
    const state = this.states[stateName];

    const variableKey = werte.data[variableName].nodeId.value;

    if (typeof serverValues[variableKey] !== 'undefined') {
      serverValues[variableKey] = state.bit;
    } else {
      console.error(`serverValues enthält keinen Schlüssel namens ${variableKey}`);
    }
  }
}


module.exports = {
  createCustomVariableFloat: createCustomVariableFloat,
  initial: initial,
  createObject: createObject,
  createVariableforTime: createVariableforTime,
  createCustomVariableUint32: createCustomVariableUint32,
  createCustomVariableUint64: createCustomVariableUint64,
  createCustomVariableUint16: createCustomVariableUint16,
  createCustomVariableInt32: createCustomVariableInt32,
  initialSingleValue: initialSingleValue,
  PIDUP: PIDUP,
  PIDCOOLDOWN: PIDCOOLDOWN,
  simulateScrewSpeed: simulateScrewSpeed,
  PIDSHUTDOWN: PIDSHUTDOWN,
  createCustomVariableString: createCustomVariableString,
  simulateFeederSingleMode: simulateFeederSingleMode,
  simulateFeederFillLevel: simulateFeederFillLevel,
  GearboxOilLubricationTimerPreRun: GearboxOilLubricationTimerPreRun,
  GearboxOilLubricationFollowUpTimer: GearboxOilLubricationFollowUpTimer,
  simulateFeederLineMode: simulateFeederLineMode,
  updatedwstat: updatedwstat,
  simulateFeederLineModeRamp: simulateFeederLineModeRamp,
  dwStatStartWizzard: dwStatStartWizzard,
  PercentagedistributionFeederLineMode: PercentagedistributionFeederLineMode,
  StateMachine: StateMachine,
  StateMachineNavigationBar: StateMachineNavigationBar
}

