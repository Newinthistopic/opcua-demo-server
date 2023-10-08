
var { SetGetlogic } = require('./../../../Setter_Getter_Logiken')
const functions = require('./../../../funktionen');

function run1(addressSpace, device, opcua, verbose, serverValues,) {
  var data = {};
  for (var i = 0; i < 5; i++) {
    data[i].SU2110_Feeding_Hmi_udtEmFeeder_udtButtonStartStop_dwCtrl = functions.createCustomVariable(i, "SU2110_Feeding_Hmi_udtEmFeeder_udtButtonStartStop_dwCtrl", data[i].SU2110_Feeding_Hmi_udtEmFeeder_udtButtonStartStop, "dwCtrl", "SU2110_Feeding.Hmi", "udtEmFeeder", "udtButtonStartStop", "dwCtrl", undefined, SetGetlogic.SU2110_Feeding_Hmi_udtEmFeeder_udtButtonStartStop_dwCtrlGet, SetGetlogic.SU2110_Feeding_Hmi_udtEmFeeder_udtButtonStartStop_dwCtrlSet)
  }
  data.SU2110_Feeding_Hmi_udtUm_dwCtrl = functions.createCustomVariable(undefined, "SU2110_Feeding_Hmi_udtUm_dwCtrl", SU2110_Feeding_Hmi_udtUm, "dwCtrl", "SU2110_Feeding.Hmi", "udtUm", "dwCtrl", undefined, undefined, SetGetlogic.SU2110_Feeding_Hmi_udtUm_dwCtrlGet, SetGetlogic.SU2110_Feeding_Hmi_udtUm_dwCtrlSet)
  module.exports = {
    data: data
  }
}
module.exports = {
  run1: run1,
}

