var { SetGetlogic } = require('./../../../Setter_Getter_Logiken')
const functions = require('./../../../funktionen');


//function run1(addressSpace, device, opcua, verbose, serverValues,) {
 

    var data = {};
    for (var i = 0; i < 10; i++) {

           data[i].SU2110_Feeding_Hmi_udtEmFeeder_rSpeed_dwStat = functions.Uint32createCustomVariable(i, "SU2110_Feeding_Hmi_udtEmFeeder_rSpeed_dwStat", data[i].SU2110_Feeding_Hmi_udtEmFeeder_rSpeed, "dwStat", "SU2110_Feeding.Hmi", "udtEmFeeder", "rSpeed", "dwStat", undefined, SetGetlogic.SU2110_Feeding_Hmi_udtEmFeeder_rSpeed_dwStatGet, SetGetlogic.SU2110_Feeding_Hmi_udtEmFeeder_rSpeed_dwStatSet)
    }

    module.exports = {
        data: data
    }

}