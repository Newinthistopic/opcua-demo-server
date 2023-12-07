var { serverValues, opcua, namespace3 } = require('./../opcua-demo-server/server');

var sharedState = require('./states');



function createObjectDouble(organizedByValue, browseName) {
  return namespace3.addObject({
    organizedBy: organizedByValue,
    browseName: browseName,
    dataType: opcua.DataType.Double,
    nodeId: "ns=3;s=\"" + browseName + "\""
  });
}

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

// Definition der Funktion 'initial' mit Parametern für den Variablennamen, 
// einen Initialwert, benutzerdefinierte Werte, Index, Node-ID und Serverwerte
function initial(variableName, initialValue, customValues, i, nameNodeId, serverValues) {

  // Initialisieren eines Arrays zum Speichern der Node-IDs
  var nodeIdInitial = [];

  // Überprüfen, ob die Node-ID der Variable im nameNodeId-Objekt existiert
  if (nameNodeId[variableName + "NodeId"] !== undefined) {
    // Speichern der Node-ID im nodeIdInitial-Array an der Position i
    // Dies wird verwendet, um später auf die spezifische Node-ID zuzugreifen
    nodeIdInitial[i] = nameNodeId[variableName + "NodeId"];
  } else {
    // Beenden der Funktion, falls die Node-ID nicht definiert ist
    // Dies verhindert, dass die Funktion mit ungültigen Daten arbeitet
    return;
  }
  // Prüfung, ob die Node-ID bereits in serverValues vorhanden ist
  if (!(nameNodeId[variableName + "NodeId"] in serverValues)) {
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



// Definition der Funktion 'initialSingleValue'.
// Diese Funktion wird verwendet, um einen Anfangswert für eine spezifische Node-ID zu setzen.
function initialSingleValue(variableName, initialValue, nameNodeId, serverValues) {

  // Variable zur Speicherung der Node-ID.
  var nodeIdInitial;

  // Überprüfung, ob eine Node-ID für den angegebenen Variablennamen existiert.
  // Hier wird der Variablenname dynamisch aus dem Parameter 'variableName' und dem String 'NodeId' zusammengesetzt.
  // Beispiel: Wenn 'variableName' = "Temperatur" ist, wird nach 'nameNodeId["TemperaturNodeId"]' gesucht.
  if (nameNodeId[variableName + "NodeId"] !== undefined) {
    // Wenn die Node-ID existiert (nicht 'undefined'), wird sie in 'nodeIdInitial' gespeichert.
    // Dies ist der Schlüssel, der später verwendet wird, um den Wert in 'serverValues' zu setzen.
    nodeIdInitial = nameNodeId[variableName + "NodeId"];
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



var wasBelowTempRelease = Array(13).fill(true);  // Am Anfang, außerhalb der Funktion
const checkedItemsReady = Array(13).fill(false); // Alle Prozesszonen sind auf Ready
const checkedItemsOff = Array(13).fill(false); // Alle Prozesszonen sind auf Off
function dwStatStartWizzard(i, nameNodeId, serverValues) {
  var werte = require('./profiles/simulation/variables/Variablen');

  let rSetTolMaxMax = serverValues[werte.data[i].SU3111_ZeExtruder_Hmi_udtEmPz_rPzTemp_rSetTolMaxMax.nodeId.value];
  let rAct = serverValues[werte.data[i].SU3111_ZeExtruder_Hmi_udtEmPz_rPzTemp_rAct.nodeId.value];
  let rSet = serverValues[werte.data[i].SU3111_ZeExtruder_Parameter_udtEmPz_rTempHeatup_Set.nodeId.value];
  let rTempCooldown = serverValues[werte.data[i].SU3111_ZeExtruder_Parameter_udtEmPz_rTempCooldown_Set.nodeId.value];
  let rTempRelease = serverValues[werte.data[i].SU3111_ZeExtruder_Parameter_udtEmPz_rTempRel_Set.nodeId.value];

  const EierUhrEinstellZeit = serverValues[werte.data[i].SU3111_ZeExtruder_Parameter_udtEmPz_udTimeRel.nodeId.value];
  let EierUhrStartWert = EierUhrEinstellZeit

  //********************************************************************************************************************************** */
  // Prüft, ob das System im Heizmodus ist.
  if (sharedState.HeatingisOn) {

    sharedState.ProzesszonesAreOff = false;
    if (rAct < rTempRelease) {
      wasBelowTempRelease[i] = true;
    }
     // Wenn die aktuelle Temperatur überhalb des Freigabewerts liegt und nicht einmal drunter war.
    if (rAct > rTempRelease && !wasBelowTempRelease[i]) {
       // Aktualisiere verschiedene Statuswerte entsprechend
      serverValues[werte.data[i].SU3111_ZeExtruder_Hmi_udtEmPz_dwStat.nodeId.value] |= (1 << sharedState.BIT_POSITIONS.startWizzard.Temp_release_Temp_reached_and_soaktime_expired) // BIT 6 stellt auf Ready
      serverValues[werte.data[i].SU3111_ZeExtruder_Hmi_udtEmPz_dwStat.nodeId.value] &= ~(1 << sharedState.BIT_POSITIONS.startWizzard.Temp_controller_on) // BIT 9
      serverValues[werte.data[i].SU3111_ZeExtruder_Hmi_udtEmPz_dwStat.nodeId.value] &= ~(1 << sharedState.BIT_POSITIONS.startWizzard.Cool_down_is_running); // Bit 7 Cool Down is running
    }

    // Weitere überprüfungen
    if (rAct < rSet && rAct < (rSet - rSetTolMaxMax) && wasBelowTempRelease[i]) {

      serverValues[werte.data[i].SU3111_ZeExtruder_Hmi_udtEmPz_dwStat.nodeId.value] |= (1 << sharedState.BIT_POSITIONS.startWizzard.Temp_controller_on) // BIT 9 stellt auf Active
      serverValues[werte.data[i].SU3111_ZeExtruder_Hmi_udtEmPz_dwStat.nodeId.value] &= ~(1 << sharedState.BIT_POSITIONS.startWizzard.Temp_release_Temp_reached_and_soaktime_expired)
      serverValues[werte.data[i].SU3111_ZeExtruder_Hmi_udtEmPz_dwStat.nodeId.value] &= ~(1 << sharedState.BIT_POSITIONS.startWizzard.Cool_down_is_running); // Bit 7 Cool Down is running
    }

    // Beindung , damit die EierUhr gestartet wird 
    if (rAct > (rSet - rSetTolMaxMax) && wasBelowTempRelease[i] && !hasEierUhrFinished[i]) {

      serverValues[werte.data[i].SU3111_ZeExtruder_Hmi_udtEmPz_dwStat.nodeId.value] |= (1 << sharedState.BIT_POSITIONS.startWizzard.Show_remain_time_on_hmi)  // BIT 15 Show remain time on hmi
      serverValues[werte.data[i].SU3111_ZeExtruder_Hmi_udtEmPz_dwStat.nodeId.value] &= ~(1 << sharedState.BIT_POSITIONS.startWizzard.Temp_release_Temp_reached_and_soaktime_expired) // BIT 6
      serverValues[werte.data[i].SU3111_ZeExtruder_Hmi_udtEmPz_dwStat.nodeId.value] &= ~(1 << sharedState.BIT_POSITIONS.startWizzard.Temp_controller_on) // BIT 9
      serverValues[werte.data[i].SU3111_ZeExtruder_Hmi_udtEmPz_dwStat.nodeId.value] &= ~(1 << sharedState.BIT_POSITIONS.startWizzard.Cool_down_is_running); // Bit 7 Cool Down is running
      startTimerIconStartWizzard(i, function (index) {
        serverValues[werte.data[index].SU3111_ZeExtruder_Hmi_udtEmPz_dwStat.nodeId.value] |= (1 << sharedState.BIT_POSITIONS.startWizzard.Temp_release_Temp_reached_and_soaktime_expired)  // Bit 6 stellt Icon auf Ready
        serverValues[werte.data[i].SU3111_ZeExtruder_Hmi_udtEmPz_dwStat.nodeId.value] &= ~(1 << sharedState.BIT_POSITIONS.startWizzard.Temp_controller_on) //BIT 9
        serverValues[werte.data[i].SU3111_ZeExtruder_Hmi_udtEmPz_dwStat.nodeId.value] &= ~(1 << sharedState.BIT_POSITIONS.startWizzard.Show_remain_time_on_hmi) // BIT 15
        serverValues[werte.data[i].SU3111_ZeExtruder_Hmi_udtEmPz_dwStat.nodeId.value] &= ~(1 << sharedState.BIT_POSITIONS.startWizzard.Cool_down_is_running); // Bit 7 Cool Down is running
      });
    }

    // Es wird geprüft, ob alle Icons, also alle Zonen auf Ready stehen, wenn ja, dann wird er Zustand gesetzt
    for (let i = 1; i < 14; i++) {
      if (serverValues[werte.data[i].SU3111_ZeExtruder_Hmi_udtEmPz_dwStat.nodeId.value] & (1 << sharedState.BIT_POSITIONS.startWizzard.Temp_release_Temp_reached_and_soaktime_expired)) { // Prüft ob das 6 Bit gesetzt ist, unabhängig davon ob die anderen gesetzt sind
        checkedItemsReady[i] = true;
      }
    }
    // Prüfung des Arrays, ob alle Einträge im Array True sind, dann setze Zustand ProzesszonesAreReady
    if (checkedItemsReady.slice(1, 14).every(Boolean)) {
      sharedState.ProzesszonesAreReady = true
    }
  }
  //********************************************************************************************************************************** */
  //********************************************************************************************************************************** */
  // Prüft, ob das System im Shutdown Modus ist.
  if (sharedState.ShutdownisOn) {
    //Prüft, ob die Icons nicht mehr auf Ready stehen
    for (let i = 1; i < 14; i++) {
      if (!(serverValues[werte.data[i].SU3111_ZeExtruder_Hmi_udtEmPz_dwStat.nodeId.value] & (1 << sharedState.BIT_POSITIONS.startWizzard.Temp_release_Temp_reached_and_soaktime_expired))) {
        checkedItemsOff[i] = true;
      }
    }
    //Prüft das Array, ob alle Icons nicht mehr auf Ready, wenn ja, dann wird der Zustand gesetzt, das die Prozesszones aus sind.
    if (checkedItemsOff.slice(1, 14).every(Boolean)) {
      sharedState.ProzesszonesAreOff = true;
    }

    sharedState.ProzesszonesAreReady = false;
    // Prüfung ob, der ActWert unter TempRelease gefallen ist,also unter der Freigabetemperatur, wenn ja, dann werden einige Zustände gesetzt. Das Icon ist dann auf "Off"
    if (rAct < rTempRelease) {
      wasBelowTempRelease[i] = true;
      hasEierUhrFinished = false
      checkedItemsReady[i] = false;

      serverValues[werte.data[i].SU3111_ZeExtruder_Hmi_udtEmPz_dwStat.nodeId.value] &= ~(1 << sharedState.BIT_POSITIONS.startWizzard.Temp_release_Temp_reached_and_soaktime_expired) // BIT 6
      serverValues[werte.data[i].SU3111_ZeExtruder_Hmi_udtEmPz_dwStat.nodeId.value] &= ~(1 << sharedState.BIT_POSITIONS.startWizzard.Temp_controller_on) // BIT 9
      serverValues[werte.data[i].SU3111_ZeExtruder_Hmi_udtEmPz_dwStat.nodeId.value] &= ~(1 << sharedState.BIT_POSITIONS.startWizzard.Cool_down_is_running); // Bit 7 Cool Down is running
      serverValues[werte.data[i].SU3111_ZeExtruder_Hmi_udtEmPz_dwStat.nodeId.value] &= ~(1 << sharedState.BIT_POSITIONS.startWizzard.Show_remain_time_on_hmi)  // BIT 15 Show remain time on hmi
    }
    serverValues[werte.data[i].SU3111_ZeExtruder_Hmi_udtEmPz_rPzTemp_dwStat.nodeId.value] &= ~(1 << sharedState.BIT_POSITIONS.startWizzard.Show_remain_time_on_hmi);

    serverValues[werte.data[i].SU3111_ZeExtruder_Hmi_udtEmPz_diActRemainTime.nodeId.value] = EierUhrEinstellZeit;
    EierUhrStartWert = EierUhrEinstellZeit;

    // Löscht das Intervall der EierUhr, falls noch einer Aktiv ist.
    if (isEierUhrRunning[i]) {
      clearInterval(intervalEieruhrIds[i]);
      isEierUhrRunning[i] = false;
    }
  }
  //********************************************************************************************************************************** */
  //********************************************************************************************************************************** */
  // Prüft, ob das System im Kühl Modus ist.
  if (sharedState.CoolingisOn) {
//Prüft, ob die Icons nicht mehr auf Ready stehen
    for (let i = 1; i < 14; i++) {
      if (!(serverValues[werte.data[i].SU3111_ZeExtruder_Hmi_udtEmPz_dwStat.nodeId.value] & (1 << sharedState.BIT_POSITIONS.startWizzard.Temp_release_Temp_reached_and_soaktime_expired))) {
        checkedItemsOff[i] = true;
      }
    }
    // Prüfung, ob alle Zonen nicht mehr Ready stehen, wenn ja dann wird der Zustand gesetzt.
    if (checkedItemsOff.slice(1, 14).every(Boolean)) {
      sharedState.ProzesszonesAreOff = true;
    }

    // In dem Moment, wo der CoolDown Button gedrückt, sind die Zonen nicht mehr Ready, daher wird der Zustand gesetzt
    sharedState.ProzesszonesAreReady = false;


    // Wenn die Temperatur unter dem Freigabewert fällt, werden eingie Zustände gesetzt
    if (rAct < rTempRelease) {
      wasBelowTempRelease[i] = true;
      hasEierUhrFinished = false
      checkedItemsReady[i] = false;

      serverValues[werte.data[i].SU3111_ZeExtruder_Hmi_udtEmPz_dwStat.nodeId.value] &= ~(1 << sharedState.BIT_POSITIONS.startWizzard.Temp_release_Temp_reached_and_soaktime_expired);
      serverValues[werte.data[i].SU3111_ZeExtruder_Hmi_udtEmPz_dwStat.nodeId.value] |= (1 << sharedState.BIT_POSITIONS.startWizzard.Cool_down_is_running);
      serverValues[werte.data[i].SU3111_ZeExtruder_Hmi_udtEmPz_dwStat.nodeId.value] &= ~(1 << sharedState.BIT_POSITIONS.startWizzard.Temp_controller_on)
    }

    serverValues[werte.data[i].SU3111_ZeExtruder_Hmi_udtEmPz_rPzTemp_dwStat.nodeId.value] &= ~(1 << sharedState.BIT_POSITIONS.startWizzard.Show_remain_time_on_hmi);

    // Prüfung ob Temperatur über TempRelease ist, dann werden einige Zustände gesetzt
    if (rAct > rTempRelease) {
      serverValues[werte.data[i].SU3111_ZeExtruder_Hmi_udtEmPz_dwStat.nodeId.value] |= (1 << sharedState.BIT_POSITIONS.startWizzard.Temp_release_Temp_reached_and_soaktime_expired);
      serverValues[werte.data[i].SU3111_ZeExtruder_Hmi_udtEmPz_dwStat.nodeId.value] |= (1 << sharedState.BIT_POSITIONS.startWizzard.Cool_down_is_running); // Bit 7 Cool Down is running
      serverValues[werte.data[i].SU3111_ZeExtruder_Hmi_udtEmPz_dwStat.nodeId.value] &= ~(1 << sharedState.BIT_POSITIONS.startWizzard.Temp_controller_on)
    }

    
    serverValues[werte.data[i].SU3111_ZeExtruder_Hmi_udtEmPz_diActRemainTime.nodeId.value] = EierUhrEinstellZeit;
    EierUhrStartWert = EierUhrEinstellZeit;

   

    if (isEierUhrRunning[i]) {
      clearInterval(intervalEieruhrIds[i]);
      isEierUhrRunning[i] = false;  // Setzen Sie den Status für den spezifischen Index zurück
    }

    // Wenn die aktuelle Temperatur unter dem Freigabewert fallen, dann werden Zustände gesetzt
    if (rAct < rTempCooldown) {
      serverValues[werte.data[i].SU3111_ZeExtruder_Hmi_udtEmPz_dwStat.nodeId.value] &= ~(1 << sharedState.BIT_POSITIONS.startWizzard.Temp_release_Temp_reached_and_soaktime_expired);
      serverValues[werte.data[i].SU3111_ZeExtruder_Hmi_udtEmPz_dwStat.nodeId.value] &= ~(1 << sharedState.BIT_POSITIONS.startWizzard.Cool_down_is_running); // Bit 7 Cool Down is running
      serverValues[werte.data[i].SU3111_ZeExtruder_Hmi_udtEmPz_dwStat.nodeId.value] &= ~(1 << sharedState.BIT_POSITIONS.startWizzard.Temp_controller_on)
    }
  }
}


let intervalEieruhrIds = [];
let isEierUhrRunning = Array(14).fill(false);  // Neue Variable als Array
let hasEierUhrFinished = Array(14).fill(false);  // Array, um den abgeschlossenen Status der Eieruhr für jeden Index zu verfolgen

function startTimerIconStartWizzard(i, callback) {
  var werte = require('./profiles/simulation/variables/Variablen');

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
      wasBelowTempRelease[i] = false
      if (callback) {
        callback(i);
      }
    }
  }, 800);
}


let pidTimerIddown = [] // Array für die Id des Setintervalls 
let pidTimerIdup = []//  Array für die Id des Setintervalls 
let pidTimerIdshutdown = [] // Array für die Id des Setintervalls 

const MAX_INDEX = 13;  // Index von 1 bis 13
const savedValues = {};  // Objekt zur Speicherung von rAct1 und integral

function getSaveKey(rAct2, index) {
  return `${Math.round(rAct2)}-${index}`;
}

function PIDUP(i, nameNodeId, serverValues, source) {
  var werte = require('./profiles/simulation/variables/Variablen');
  if (pidTimerIddown[i]) clearTimeout(pidTimerIddown[i]); // löscht alle Timer von pidDown, falls ein Timer noch läuft
  if (pidTimerIdshutdown[i]) clearTimeout(pidTimerIdshutdown[i]); // löscht alle Timer von shutDown fals ein Timer noch läuft

  const Kp = serverValues[werte.data[i].SU3111_ZeExtruder_Parameter_udtCmPzPid_udtHeat_udtPid_rGain.nodeId.value];
  const Ki = serverValues[werte.data[i].SU3111_ZeExtruder_Parameter_udtCmPzPid_udtHeat_udtPid_rTi.nodeId.value];
  const Kd = serverValues[werte.data[i].SU3111_ZeExtruder_Parameter_udtCmPzPid_udtHeat_udtPid_rTd.nodeId.value];
  const dt = 0.01
  const T1 = 105
  const T2 = 100
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
    var werte = require('./profiles/simulation/variables/Variablen');
    if (rSet - rAct2 > 0.1) {

      let error = rSet - rAct2;

      integral += error * dt;

      let derivative = (error - lastError) / dt;
      let pTerm = Kp * error;  // Proportional-Anteil
      let iTerm = Ki * integral;  // Integral-Anteil
      let dTerm = Kd * derivative;  // Derivative-Anteil

      let u = pTerm + iTerm + dTerm;

      lastError = error;

      // Begrenzung des Wertes von u zwischen -100 und 100
      u_begrenzt = Math.max(-100, Math.min(u, 100));

      // Wert wird der HMI zugewiesen
      serverValues[werte.data[i].SU3111_ZeExtruder_Hmi_udtEmPz_rPzCv_rAct.nodeId.value] = u_begrenzt

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
  var werte = require('./profiles/simulation/variables/Variablen');
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

      // Begrenzung des Wertes von u zwischen -100 und 100
      u_begrenzt = Math.max(-100, Math.min(u, 100));

      // Wert wird der HMI zugewiesen
      serverValues[werte.data[i].SU3111_ZeExtruder_Hmi_udtEmPz_rPzCv_rAct.nodeId.value] = u_begrenzt



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
  var werte = require('./profiles/simulation/variables/Variablen');
  if (pidTimerIdup[i]) clearTimeout(pidTimerIdup[i]); //löscht alle Timer von PidUp
  if (pidTimerIddown[i]) clearTimeout(pidTimerIddown[i]); //löscht alle Timer von PidDown

  intervalEieruhrIds.forEach(intervalEieruhr => clearInterval(intervalEieruhr));


  const Kp = serverValues[werte.data[i].SU3111_ZeExtruder_Parameter_udtCmPzPid_udtHeat_udtPid_rGain.nodeId.value];
  const Ki = serverValues[werte.data[i].SU3111_ZeExtruder_Parameter_udtCmPzPid_udtHeat_udtPid_rTi.nodeId.value];
  const Kd = serverValues[werte.data[i].SU3111_ZeExtruder_Parameter_udtCmPzPid_udtHeat_udtPid_rTd.nodeId.value];
  const dt = 0.01
  const T1 = 50
  const T2 = 50
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

      // Begrenzung des Wertes von u zwischen -100 und 100
      u_begrenzt = Math.max(-100, Math.min(u, 100));

      // Wert wird der HMI zugewiesen
      serverValues[werte.data[i].SU3111_ZeExtruder_Hmi_udtEmPz_rPzCv_rAct.nodeId.value] = u_begrenzt

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

// Definition der Funktion 'simulateScrewSpeed', die zur Simulation der Drehzahl eines Extruders dient.
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
    if (sharedState.SpeedCalculationSpecRateisOn) {
      if (Durchsatzgesamt === 0 && sharedState.ExtruderisOn) {
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

// Definition der Funktion simulateFeederSingleMode für einen einzelnen Feeder.
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
    if (sharedState.intervalIds.stopSimulateFeederSingle) {
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


// Definition der Funktion 'simulateFeederLineMode' für den Line Mode eines Feeders.
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
  let currentFeederThroughput = serverValues[werte.data[i].SU2110_Feeding_Hmi_udtEmFeeder_rThroughputPerc_rAct.nodeId.value];
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
    if (sharedState.intervalIds.stopsimulateLineMode) {
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



// Diese Funktion aktualisiert kontinuierlich das Füllniveau eines Feeders in der Simulation.
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
    // Loggt den Aufruf für Debugging und Überwachungszwecke.
    console.log("Aufruf von updateFeederWeight für Feeder " + i);
    // Berechnet den neuen Füllstand basierend auf der aktuellen Durchsatzrate.
    let ratePerInterval = serverValues[werte.data[i].SU2110_Feeding_Hmi_udtEmFeeder_rThroughput_rAct.nodeId.value];
    let currentLevel = serverValues[werte.data[i].SU2110_Feeding_Hmi_udtEmFeeder_rLevel_rAct.nodeId.value];
    currentLevel -= ratePerInterval;
    // Aktualisiert die Gesamtmenge und den Füllstand in der HMI.
    serverValues[werte.data[i].SU2110_Feeding_Hmi_udtEmFeeder_rTotal_rAct.nodeId.value] += ratePerInterval;
    serverValues[werte.data[i].SU2110_Feeding_Hmi_udtEmFeeder_rLevel_rAct.nodeId.value] = currentLevel;
    // Erste Abbruchbedingung: Wenn der Stop-Button in der HMI gedrückt wird.
    if (sharedState.intervalIds.stopSimulateFeederWeight) {
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
  let intervalId = setInterval(updateFeederWeight, 600);
  // Speichert die ID des Intervalls, damit es später gestoppt werden kann.
  intervalIds.updateFeederWeight[i] = intervalId;
}


// Funktion zur Simulation der Durchsatzrampensteuerung für einen Feeder
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
    if (sharedState.intervalIds.stopSimulateThroughputRampLine) {
      // Stoppen aller Intervalle der Rampensteuerung
      for (let id of intervalIds.startsimulateLineModeRamp) {
        clearInterval(id);
      }
      // Leeren des Intervall-Arrays
      intervalIds.startsimulateLineModeRamp = [];
      return;  // Frühzeitiger Abbruch der Funktion
    }
    // Zweite Abbruchbedingung: Globales Signal zum Stoppen der Rampensteuerung
    if (sharedState.FeederRampModeisOff) {
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
        sharedState.FeederRampModeisOff = true;
        sharedState.FeederRampModeisOn = false;
      }
    }
  }
  // Starten der Rampensteuerungsfunktion in regelmäßigen Intervallen
  let intervalId = setInterval(startsimulateLineModeRamp, 300);
  // Speichern der Interval-ID im globalen Objekt für spätere Referenzierung
  intervalIds.startsimulateLineModeRamp[i] = intervalId;
}


// Diese Funktion verteilt den gesamten Durchsatz auf die im Line Mode aktiven Feeder.
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






// Definition der Funktion 'GearboxOilLubricationFollowUpTimer' für die Nachlaufzeit der Getriebeölschmierung.
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



// Definition der Funktion 'GearboxOilLubricationTimerPreRun' zur Verwaltung des PreRun-Timers für die Getriebeölschmierung.
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






let previousRAct = {};
let consecutiveCounter = {};

function updatedwstat(i, NameVariabel) {

  var werte = require('./profiles/simulation/variables/Variablen');
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

  if (!(dwStat & (1 << sharedState.BIT_POSITIONS.Tolerance_monitoring_is_active))) { // Wenn das Bit für Tolerance Monitoring aus,  dann werden die Farben rot und orange "gelöscht"
    dwStat &= ~(1 << sharedState.BIT_POSITIONS.Out_of_tolerance_MaxMax);
    dwStat &= ~(1 << sharedState.BIT_POSITIONS.Out_of_tolerance_Max);
  }


  if (rAct === 0) {
    dwStat &= ~(1 << sharedState.BIT_POSITIONS.Actual_value_tendence_is_down);
    dwStat &= ~(1 << sharedState.BIT_POSITIONS.Actual_value_tendence_is_up);
    dwStat &= ~(1 << sharedState.BIT_POSITIONS.Out_of_tolerance_MaxMax);
    dwStat &= ~(1 << sharedState.BIT_POSITIONS.Out_of_tolerance_Max);
  } else {
    if (typeof previousRAct[rActKey] !== 'undefined') {
      if (rAct > previousRAct[rActKey]) {
        consecutiveCounter[rActKey] = 0;
        dwStat |= (1 << sharedState.BIT_POSITIONS.Actual_value_tendence_is_up);
        dwStat &= ~(1 << sharedState.BIT_POSITIONS.Actual_value_tendence_is_down);
      } else if (rAct < previousRAct[rActKey]) {
        consecutiveCounter[rActKey] = 0;
        dwStat |= (1 << sharedState.BIT_POSITIONS.Actual_value_tendence_is_down);
        dwStat &= ~(1 << sharedState.BIT_POSITIONS.Actual_value_tendence_is_up);
      } else {
        consecutiveCounter[rActKey] = (consecutiveCounter[rActKey] || 0) + 1;
        if (consecutiveCounter[rActKey] > 20) {
          dwStat &= ~(1 << sharedState.BIT_POSITIONS.Actual_value_tendence_is_down);
          dwStat &= ~(1 << sharedState.BIT_POSITIONS.Actual_value_tendence_is_up);
        }
      }
    }
  }

  if ((dwStat & (1 << sharedState.BIT_POSITIONS.Tolerance_monitoring_is_active)) && (dwStat & (1 << sharedState.BIT_POSITIONS.Tolreances_are_absolute))) {


    if (rSetTolMin === 0 && rAct < rSetTolMinMin && rAct < rSetTolMax && rAct < rSetTolMaxMax) {
      dwStat &= ~(1 << sharedState.BIT_POSITIONS.Out_of_tolerance_Max);
      dwStat |= (1 << sharedState.BIT_POSITIONS.Out_of_tolerance_MaxMax); // ROT
      //console.log("erste Stufe")
    }

    if (rAct === 0) {
      dwStat &= ~(1 << sharedState.BIT_POSITIONS.Actual_value_tendence_is_down);
      dwStat &= ~(1 << sharedState.BIT_POSITIONS.Actual_value_tendence_is_up);
      dwStat &= ~(1 << sharedState.BIT_POSITIONS.Out_of_tolerance_MaxMax);
      dwStat &= ~(1 << sharedState.BIT_POSITIONS.Out_of_tolerance_Max);
    }

    if (rAct < rSetTolMin && rAct < rSetTolMinMin && rAct < rSetTolMax && rAct < rSetTolMaxMax) {
      dwStat &= ~(1 << sharedState.BIT_POSITIONS.Out_of_tolerance_Max);
      dwStat |= (1 << sharedState.BIT_POSITIONS.Out_of_tolerance_MaxMax); // ROT
      //  console.log("erste Stude 1 B")
    }
    if (rAct > rSetTolMin && rSetTolMin > 0 && rAct < rSetTolMinMin && rAct < rSetTolMax && rAct < rSetTolMaxMax) {
      dwStat &= ~(1 << sharedState.BIT_POSITIONS.Out_of_tolerance_MaxMax);
      dwStat |= (1 << sharedState.BIT_POSITIONS.Out_of_tolerance_Max);
      //console.log("zweite Stufe")
    }

    if (rAct > rSetTolMinMin && rAct < rSetTolMax && rAct < rSetTolMaxMax) {
      dwStat &= ~(1 << sharedState.BIT_POSITIONS.Out_of_tolerance_MaxMax);
      dwStat &= ~(1 << sharedState.BIT_POSITIONS.Out_of_tolerance_Max);
      // console.log("dritte Stufe")
    }

    if (rAct > rSetTolMin && rAct > rSetTolMinMin && rAct < rSetTolMaxMax && rAct > rSetTolMax) {
      dwStat &= ~(1 << sharedState.BIT_POSITIONS.Out_of_tolerance_MaxMax);
      dwStat |= (1 << sharedState.BIT_POSITIONS.Out_of_tolerance_Max);
      // console.log("vierte Stufe")
    }
    if (rAct > rSetTolMin && rAct > rSetTolMinMin && rAct > rSetTolMaxMax && rAct > rSetTolMax) {
      dwStat &= ~(1 << sharedState.BIT_POSITIONS.Out_of_tolerance_Max);
      dwStat |= (1 << sharedState.BIT_POSITIONS.Out_of_tolerance_MaxMax);
      // console.log("fünfte Stufe")
    }
  }


  if ((dwStat & (1 << sharedState.BIT_POSITIONS.Tolerance_monitoring_is_active)) && !(dwStat & (1 << sharedState.BIT_POSITIONS.Tolreances_are_absolute))) {
    // BIT15 ist gesetzt und BIT14 ist nicht gesetzt

    // Relativ zum Set-Wert
    if (rAct < set - rSetTolMinMin) {
      dwStat |= (1 << sharedState.BIT_POSITIONS.Out_of_tolerance_MaxMax);
    }
    if (rAct < set - rSetTolMin && rAct > set - rSetTolMinMin) {
      dwStat &= ~(1 << sharedState.BIT_POSITIONS.Out_of_tolerance_MaxMax);
      dwStat |= (1 << sharedState.BIT_POSITIONS.Out_of_tolerance_Max);
    }
    if (rAct > set - rSetTolMin) {
      dwStat &= ~((1 << sharedState.BIT_POSITIONS.Out_of_tolerance_MaxMax) | (1 << sharedState.BIT_POSITIONS.Out_of_tolerance_Max));
    }
    if (rAct > set + rSetTolMinMin) {
      dwStat |= (1 << sharedState.BIT_POSITIONS.Out_of_tolerance_MaxMax);
    }

    if (rAct > set + rSetTolMin) {
      dwStat |= (1 << sharedState.BIT_POSITIONS.Out_of_tolerance_Max);
    }

  }


  // Am Ende der Logik speichern wir den aktuellen Wert von rAct
  previousRAct[rActKey] = rAct;
  serverValues[data[NameVariabel + "_dwStat"].nodeId.value] = dwStat
};

class StateMachine {
  constructor() {
    this.states = {
      IDLE: { name: "IDLE", bit: (1 << sharedState.BIT_POSITIONS.statemachine.Idle) },
      RUNNING: { name: "RUNNING", bit: (1 << sharedState.BIT_POSITIONS.statemachine.Running) },
      STOPPED: { name: "STOPPED", bit: (1 << sharedState.BIT_POSITIONS.statemachine.Stopped) },
      E_STOP_PRESSED: { name: "E-STOP-PRESSED", bit: (1 << sharedState.BIT_POSITIONS.statemachine.E_Stop_Pressed) },
      E_STOP_RELEASED: { name: "E-STOP-RELEASED", bit: (1 << sharedState.BIT_POSITIONS.statemachine.E_Stop_Released) },
      PREHEATING: { name: "PREHEATING", bit: (1 << sharedState.BIT_POSITIONS.statemachine.Preheating) }
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

class StateMachineNavigationBar {
  constructor() {
    this.states = {
      STOPPED: { name: "STOPPED", bit: (1 << sharedState.BIT_POSITIONS.statemachine_navigationbar.Stopped) },
      RUNNING: { name: "RUNNING", bit: (1 << sharedState.BIT_POSITIONS.statemachine_navigationbar.Running) },
      WARNING: { name: "WARNING", bit: (1 << sharedState.BIT_POSITIONS.statemachine_navigationbar.Warning) },
      ERROR: { name: "ERROR", bit: (1 << sharedState.BIT_POSITIONS.statemachine_navigationbar.Error) },
      CRITICAL: { name: "CRITICAL", bit: (1 << sharedState.BIT_POSITIONS.statemachine_navigationbar.Critical) }
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
  createObjectDouble: createObjectDouble,
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
