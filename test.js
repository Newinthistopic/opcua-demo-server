





var data = {};
var SU3111_ZeExtruder_Hmi_udtUm = functions.createCustomVariableFloat(undefined, "SU3111_ZeExtruder_Hmi_udtUm", SU3111_ZeExtruder_Hmi, "udtUm", "SU3111_ZeExtruder.Hmi", "udtUm", undefined, undefined, undefined, SetGetlogic.SU3111_ZeExtruder_Hmi_udtUmGet, SetGetlogic.SU3111_ZeExtruder_Hmi_udtUmSet)
data.SU3111_ZeExtruder_Hmi_udtUm_dwStat = functions.createCustomVariableUint32(undefined, "SU3111_ZeExtruder_Hmi_udtUm_dwStat", SU3111_ZeExtruder_Hmi_udtUm, "dwStat", "SU3111_ZeExtruder.Hmi", "udtUm", "dwStat", undefined, undefined, SetGetlogic.SU3111_ZeExtruder_Hmi_udtUm_dwStatGet, SetGetlogic.SU3111_ZeExtruder_Hmi_udtUm_dwStatSet)
data.SU3111_ZeExtruder_Hmi_udtUm_dwCtrl = functions.createCustomVariableFloat(undefined, "SU3111_ZeExtruder_Hmi_udtUm_dwCtrl", SU3111_ZeExtruder_Hmi_udtUm, "dwCtrl", "SU3111_ZeExtruder.Hmi", "udtUm", "dwCtrl", undefined, undefined, SetGetlogic.SU3111_ZeExtruder_Hmi_udtUm_dwCtrlGet, SetGetlogic.SU3111_ZeExtruder_Hmi_udtUm_dwCtrlSet)
data.SU3111_ZeExtruder_Hmi_udtUm_wMessage = functions.createCustomVariableUint16(undefined, "SU3111_ZeExtruder_Hmi_udtUm_wMessage", SU3111_ZeExtruder_Hmi_udtUm, "wMessage", "SU3111_ZeExtruder.Hmi", "udtUm", "wMessage", undefined, undefined, SetGetlogic.SU3111_ZeExtruder_Hmi_udtUm_wMessageGet, SetGetlogic.SU3111_ZeExtruder_Hmi_udtUm_wMessageSet)

for (var i = 0; i < 14; i++) {
  data[i] = {};


  data[i].SU3111_ZeExtruder_Hmi_udtCmMeltPressLoop = functions.createCustomVariableFloat(i, "SU3111_ZeExtruder_Hmi_udtCmMeltPressLoop", SU3111_ZeExtruder_Hmi_udtCmMeltPress, i.toString(), "SU3111_ZeExtruder.Hmi", "udtCmMeltPress", undefined, undefined, undefined, SetGetlogic.SU3111_ZeExtruder_Hmi_udtCmMeltPressLoopGet, SetGetlogic.SU3111_ZeExtruder_Hmi_udtCmMeltPressLoopSet)
  data[i].SU3111_ZeExtruder_Hmi_udtCmMeltPress_dwCtrl = functions.createCustomVariableFloat(i, "SU3111_ZeExtruder_Hmi_udtCmMeltPress_dwCtrl", data[i].SU3111_ZeExtruder_Hmi_udtCmMeltPressLoop, "dwCtrl", "SU3111_ZeExtruder.Hmi", "udtCmMeltPress", "dwCtrl", undefined, undefined, SetGetlogic.SU3111_ZeExtruder_Hmi_udtCmMeltPress_dwCtrlGet, SetGetlogic.SU3111_ZeExtruder_Hmi_udtCmMeltPress_dwCtrlSet)
  data[i].SU3111_ZeExtruder_Hmi_udtCmMeltPress_dwStat = functions.createCustomVariableUint32(i, "SU3111_ZeExtruder_Hmi_udtCmMeltPress_dwStat", data[i].SU3111_ZeExtruder_Hmi_udtCmMeltPressLoop, "dwStat", "SU3111_ZeExtruder.Hmi", "udtCmMeltPress", "dwStat", undefined, undefined, SetGetlogic.SU3111_ZeExtruder_Hmi_udtCmMeltPress_dwStatGet, SetGetlogic.SU3111_ZeExtruder_Hmi_udtCmMeltPress_dwStatSet)
  data[i].SU3111_ZeExtruder_Hmi_udtCmMeltPress_rPresValueX1 = functions.createCustomVariableFloat(i, "SU3111_ZeExtruder_Hmi_udtCmMeltPress_rPresValueX1", data[i].SU3111_ZeExtruder_Hmi_udtCmMeltPressLoop, "rPresValueX1", "SU3111_ZeExtruder.Hmi", "udtCmMeltPress", "rPresValueX1", undefined, undefined, SetGetlogic.SU3111_ZeExtruder_Hmi_udtCmMeltPress_rPresValueX1Get, SetGetlogic.SU3111_ZeExtruder_Hmi_udtCmMeltPress_rPresValueX1Set)
}

module.exports = {
  data: data
}


const SetGetlogic = {
  SU3111_ZeExtruder_Hmi_udtUmGet: function (i, nameNodeId, serverValues) { funktionen.initialSingleValue("SU3111_ZeExtruder_Hmi_udtUm", undefined, nameNodeId, serverValues); },
  SU3111_ZeExtruder_Hmi_udtUmSet: function (i, nameNodeId, serverValues) { funktionen.initialSingleValue("SU3111_ZeExtruder_Hmi_udtUm", undefined, nameNodeId, serverValues); },
  SU3111_ZeExtruder_Hmi_udtUm_dwStatGet: function (i, nameNodeId, serverValues) { funktionen.initialSingleValue("SU3111_ZeExtruder_Hmi_udtUm_dwStat", 1048589, nameNodeId, serverValues); },
  SU3111_ZeExtruder_Hmi_udtUm_dwStatSet: function (i, nameNodeId, serverValues) { funktionen.initialSingleValue("SU3111_ZeExtruder_Hmi_udtUm_dwStat", undefined, nameNodeId, serverValues); },
  SU3111_ZeExtruder_Hmi_udtUm_dwCtrlGet: function (i, nameNodeId, serverValues) { funktionen.initialSingleValue("SU3111_ZeExtruder_Hmi_udtUm_dwCtrl", 0, nameNodeId, serverValues); },
  SU3111_ZeExtruder_Hmi_udtUm_dwCtrlSet: function (i, nameNodeId, serverValues) { funktionen.initialSingleValue("SU3111_ZeExtruder_Hmi_udtUm_dwCtrl", undefined, {}, i, nameNodeId, serverValues); },
  SU3111_ZeExtruder_Hmi_udtUm_wMessageGet: function (i, nameNodeId, serverValues) { funktionen.initial("SU3111_ZeExtruder_Hmi_udtUm_wMessage", undefined, {}, i, nameNodeId, serverValues); },

}
module.exports = {
  SetGetlogic: SetGetlogic,
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



// Erstellen eines neuen Objekts und Zuweisung einer Variable mit dem Namen "Hallo"
var newVariable = {};
newVariable["Hallo"] = namespace3.addVariable({
    componentOf: componentOf, // Ein Beispielwert oder Objekt
    browseName: "MeinBrowseName", // Beispiel Browse-Name
    dataType: opcua.DataType.Float,
    nodeId: "Tschüss", // Node-ID ist direkt "Tschüss"
    value: {
        get: function () {
            var nameNodeId = {};
            nameNodeId["HalloNodeId"] = this.nodeId.value; // Der Schlüssel "HalloNodeId" wird hier genutzt

            // Benutzerdefinierte Get-Logik, falls vorhanden
            if (customGetLogic) {
                customGetLogic(i, nameNodeId, serverValues);
            }
            return new opcua.Variant({ dataType: opcua.DataType.Float, value: serverValues["HalloNodeId"] });
        },
        set: function (variant) {
            var nameNodeId = {};
            nameNodeId["HalloNodeId"] = this.nodeId.value; // Der Schlüssel "HalloNodeId" wird hier genutzt
            serverValues["HalloNodeId"] = parseFloat(variant.value);

            // Benutzerdefinierte Set-Logik, falls vorhanden
            if (customSetLogic) {
                customSetLogic(i, nameNodeId, serverValues);
            }
            return opcua.StatusCodes.Good;
        }
    },
});

// Rückgabe der erstellten Variable "Hallo"
var erstellteVariable = newVariable["Hallo"];

newVariable[variableName] = namespace3.addVariable({
 
  nodeId: nodeId,
  value: {
    get: function () {
      var nameNodeId = {};
      nameNodeId[variableName] = this.nodeId.value;
  
            return new opcua.Variant({ dataType: opcua.DataType.Float, value: serverValues[nameNodeId[variableName]] });
    }.
  },
});


nnamespace3.addVariable({
 
    nodeId: noeId,

  value: {
       lol:true            
    }.
  },
});