rTempHSetSet: function (i, nameNodeId, serverValues) {
    //initial("rTempHSet", 300, { 2: 305, 4: 356, 6: 366 }, i, nameNodeId, serverValues);
    var werte = require('./../opcua-demo-server/profiles/simulation/variables/Variabeln')
    serverValues[werte.data[i].rTempHHMin.nodeId.value] = serverValues[werte.data[i].rTempHSet.nodeId.value];
    if (serverValues[werte.data[i].rTempHHSet.nodeId.value] < serverValues[werte.data[i].rTempHSet.nodeId.value]) {
      serverValues[werte.data[i].rTempHHSet.nodeId.value] = serverValues[werte.data[i].rTempHSet.nodeId.value];
    }

    
    data[i].SU3111_ZeExtruder_Parameter_udtCmPzPid_udtHeat_udtPid_rGain 
        data[i].SU3111_ZeExtruder_Parameter_udtCmPzPid_udtHeat_udtPid_rTd
        data[i].SU3111_ZeExtruder_Parameter_udtCmPzPid_udtHeat_udtPid_rTdFiltRatio 
        data[i].SU3111_ZeExtruder_Parameter_udtCmPzPid_udtHeat_udtPid_rTi

        serverValues[data[i].SU3111_ZeExtruder_Hmi_udtEmPz_rPzTemp_rSet.nodeId.value]
        data[i].SU3111_ZeExtruder_Hmi_udtEmPz_rPzTemp_rAct

        data[i].SU3111_ZeExtruder_Parameter_udtCmPzPid_udtHeat_udtPid_rPWeighting