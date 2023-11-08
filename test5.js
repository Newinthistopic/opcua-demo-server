if (serverValues[werte.data.SU2110_Feeding_Hmi_udtUm_dwCtrl.nodeId.value] === 256) { // Auto Start Feeder , das ist der "Haken" in der HMI (256)

  serverValues[werte.data.SU2110_Feeding_Hmi_udtUm_dwStat.nodeId.value] |= (1 << 8); // Setzt den "Haken"
  //serverValues[werte.data.SU2110_Feeding_Hmi_udtUm_dwStat.nodeId.value] |= (1 << 13); // macht den Button Auto Stop Blau
  serverValues[werte.data.SU2110_Feeding_Hmi_udtUm_dwStat.nodeId.value] |= (1 << 12) // Lock Condition von Auto Stop (Button wird anklickbar und gräulich)
  serverValues[werte.data.SU2110_Feeding_Hmi_udtUm_dwStat.nodeId.value] |= (1 << 9); // Lock Conditon von Auto Start (Button wird anklickbar und gräulich
}
if (serverValues[werte.data.SU2110_Feeding_Hmi_udtUm_dwCtrl.nodeId.value] === 0) { // Auto Start Feeder , das ist der "Haken" in der HMI (256)
  serverValues[werte.data.SU2110_Feeding_Hmi_udtUm_dwStat.nodeId.value] &= ~(1 << 8); // Setzt das "X"
  serverValues[werte.data.SU2110_Feeding_Hmi_udtUm_dwStat.nodeId.value] &= ~(1 << 13);
  serverValues[werte.data.SU2110_Feeding_Hmi_udtUm_dwStat.nodeId.value] &= ~(1 << 10);
  serverValues[werte.data.SU2110_Feeding_Hmi_udtUm_dwStat.nodeId.value] &= ~(1 << 12) // Lock Condition von Auto Stop (Button wird anklickbar und gräulich)
  serverValues[werte.data.SU2110_Feeding_Hmi_udtUm_dwStat.nodeId.value] &= ~(1 << 9); // Lock Conditon von Auto Start (Button wird anklickbar und gräulich
}