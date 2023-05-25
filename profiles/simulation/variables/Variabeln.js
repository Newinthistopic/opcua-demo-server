const opcua = require("node-opcua");
const functions = require('./../../../funktionen');

module.exports = {

    run1: function (addressSpace, device, opcua, verbose, serverValues) {
        var namespace2 = addressSpace.getNamespace('http://mynamespace-2/UA/');
        var namespace3 = addressSpace.getNamespace('http://mynamespace-3/UA/');

        function createCustomVariable(i, variableName, componentOf, browseName, part1, part2, part3, part4, part5, customGetLogic, customSetLogic) {
            var nodeId;
            if (part3 || part4 || part5 || i !== undefined) {
                nodeId = `"ns=3;s=\"${part1}\".\"${part2}\"[${i}]`;
                if (part3) {
                    nodeId += `.\"${part3}\"`;
                }
                if (part4) {
                    nodeId += `.\"${part4}\"`;
                }
                if (part5) {
                    nodeId += `.\"${part5}\"`;
                }
            } else {
                nodeId = `"ns=3;s=\"${part1}\".\"${part2}\"`;
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
                        // console.log(nameNodeId);

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
                            customSetLogic(nameNodeId, serverValues);
                        }
                        return opcua.StatusCodes.Good;
                    }
                },
            });
            return newVariable[variableName];
        }

        //First Level//
        var ppC_Compound_V3 = namespace3.addObject({
            organizedBy: device,
            browseName: "ppC_Compound_V3",
            nodeId: "s=PLC",
            description: "The PLC instance which supports you with OPC UA functionality"
        })
        var datablocksGlobal = namespace3.addObject({
            organizedBy: ppC_Compound_V3,
            browseName: "DatablocksGlobal",
            nodeId: "s=DatablocksGlobal"
        });
        //Second Level//
        var ZEEX_3111_Hmi = namespace3.addObject({
            organizedBy: datablocksGlobal,
            browseName: "ZEEX_3111_Hmi",
            nodeId: "ns=3;s=" + "\"ZEEX_3111_Hmi\"",
        });
        var ZEEX_3111_Parameter = namespace3.addObject({
            organizedBy: datablocksGlobal,
            browseName: "ZEEX_3111_Parameter",
            nodeId: "ns=3;s=" + "\"ZEEX_3111_Parameter\"",
        });
        var ZEEX_3111_Config = namespace3.addObject({
            componentOf: datablocksGlobal,
            browseName: "ZEEX_3111_Config",
            dataType: opcua.DataType.Double,
            nodeId: "s=" + "\"ZEEX_3111_Config\""
        });
        //Third Level//

        var udtCmPzPid_HMI = createCustomVariable(undefined, "udtCmPzPid_HMI", ZEEX_3111_Hmi, "udtCmPzPid", "ZEEX_3111_Hmi", "udtCmPzPid", undefined, undefined, undefined, undefined, undefined);

        var udtCmPzPid_Parameter = createCustomVariable(undefined, "udtCmPzPid_Parameter", ZEEX_3111_Parameter, "udtCmPzPid", "ZEEX_3111_Parameter", "udtCmPzPid", undefined, undefined, undefined, undefined, undefined);

        var udtCmPzPid_Config = createCustomVariable(undefined, "udtCmPzPid_Config", ZEEX_3111_Config, "udtCmPzPid", "ZEEX_3111_Config", "udtCmPzPid", undefined, undefined, undefined, undefined, undefined);

        var udtEmPz = createCustomVariable(undefined, "udtEmPz", ZEEX_3111_Hmi, "udtEmPz", "ZEEX_3111_Hmi", "udtEmPz", undefined, undefined, undefined, undefined, undefined);
        var udtEmPz_Parameter = createCustomVariable(undefined, "udtEmPz_Parameter", ZEEX_3111_Parameter, "udtEmPz", "ZEEX_3111_Parameter", "udtEmPz", undefined, undefined, undefined, undefined, undefined);

        for (let i = 0; i < 14; i++) {

            var nr = createCustomVariable(i, "nr", udtCmPzPid_Parameter, i.toString(), "ZEEX_3111_Parameter", "udtCmPzPid", undefined, undefined, undefined, undefined, undefined);
            var nr2 = createCustomVariable(i, "nr", udtCmPzPid_Config, i.toString(), "ZEEX_3111_Config", "udtCmPzPid", undefined, undefined, undefined, undefined, undefined);
            var nr3 = createCustomVariable(i, "nr", udtCmPzPid_HMI, i.toString(), "ZZEEX_3111_Hmi", "udtCmPzPid", undefined, undefined, undefined, undefined, undefined);
            var nr4 = createCustomVariable(i, "nr", udtEmPz, i.toString(), undefined, undefined, undefined, undefined, undefined, undefined, undefined,);
            var nr5 = createCustomVariable(i, "nr", udtEmPz_Parameter, i.toString(), "ZEEX_3111_Parameter", "udtEmPz", undefined, undefined, undefined, undefined);

           
            var udtCool = createCustomVariable(i, "udtCool", nr, "udtCool", "ZZEEX_3111_Parameter", "udtCmPzPid", "udtCool", undefined, undefined, undefined, undefined);
            var udtHeat = createCustomVariable(i, "udtHeat", nr, "udtHeat", "ZEEX_3111_Parameter", "udtCmPzPid", "udtHeat", undefined, undefined, undefined, undefined);
            var udtCoolPid = createCustomVariable(i, "udtCoolPid", udtCool, "udtPid", "ZEEX_3111_Config", "udtCool", "udtPid", undefined, undefined, undefined);
            var udtHeatPid = createCustomVariable(i, "udtHeatPid", udtHeat, "udtPid", "ZEEX_3111_Parameter", "udtCmPzPid", "udtHeat", "udtPid", undefined, undefined);

            //PLASTIFICATION//
            //***********************************************************************************************************/
            //***********************************************************************************************************/
            //***********************************************************************************************************/
            //***********************************************************************************************************/
            var rPzTemp = createCustomVariable(i, "rPzTemp", nr4, "rPzTemp", "ZEEX_3111_Hmi", "udtEmPz", "rPzTemp", undefined, undefined, undefined,);
            //***********************************************************************************************************/
            //Plastification ==> Heating Zones: "Act" //
            var rAct = createCustomVariable(i, "rAct", rPzTemp, "rAct", "ZEEX_3111_Hmi", "udtEmPz", "rPzTemp", "rAct", undefined, functions.rActGet, undefined);
            //***********************************************************************************************************/
            //Plastification ==> Heating Zones: "Set" //
            var rSet = createCustomVariable(i, "rSet", rPzTemp, "rSet", "ZEEX_3111_Hmi", "udtEmPz", "rPzTemp", "rSet", undefined, undefined, functions.rSetSet);
           

            console.log("serverValues[rAct.nodeId] = " + rAct.nodeId);
            console.log("Value of rAct in serverValues: " + serverValues[rAct.nodeId.value]);




            //Plastification ==> Heating Zones: "Set-Min (rOpMin)" //
            var rOpMin = createCustomVariable(i, "rOpMin", rPzTemp, "rOpMin", "ZEEX_3111_Hmi", "udtEmPz", "rPzTemp", "rOpMin", undefined, functions.rOpMinGet, undefined);
            //console.log(serverValues[rOpMin.rOpMinNodeId]);
            //Plastification ==> Heating Zones: "Set-Max (rOpMax)" //
            var rOpMax = createCustomVariable(i, "rOpMax", rPzTemp, "rOpMax", "ZEEX_3111_Hmi", "udtEmPz", "rPzTemp", "rOpMax", undefined, functions.rOpMaxGet, undefined);
            //***********************************************************************************************************/
            //***********************************************************************************************************/
            //***********************************************************************************************************/
            //***********************************************************************************************************/

            //EXTRUDER EXPERT SETTING PID Parameters//
            //***********************************************************************************************************/
            //***********************************************************************************************************/
            //***********************************************************************************************************/
            //***********************************************************************************************************/
            //Extruder ==> Expert Settings ==> PID Parameters : "Lenght" //
            var rInjPulseTime = createCustomVariable(i, "rInjPulseTime ", udtCool, "rInjPulseTime ", "ZEEX_3111_Parameter", "udtCmPzPid", "udtCool", "rInjPulseTime", undefined, undefined, undefined);
            //Extruder ==> Expert Settings ==> PID Parameters : "Lenght-Set" //
            var rInjPulseTimeSet = createCustomVariable(i, "rInjPulseTimeSet", rInjPulseTime, "Set", "ZEEX_3111_Parameter", "udtCmPzPid", "udtCool", "rInjPulseTime", "Set", undefined, undefined, undefined);
            //Extruder ==> Expert Settings ==> PID Parameters : "Lenght-Max" //
            var rInjPulseTimeMax = createCustomVariable(i, "rInjPulseTimeMax", rInjPulseTime, "Max", "ZEEX_3111_Parameter", "udtCmPzPid", "udtCool", "rInjPulseTime", "Max", undefined, undefined, undefined);
            //Extruder ==> Expert Settings ==> PID Parameters : "Lenght-Min" //
            var rInjPulseTimeMin = createCustomVariable(i, "rInjPulseTimeMin", rInjPulseTime, "Min", "ZEEX_3111_Parameter", "udtCmPzPid", "udtCool", "rInjPulseTime", "Min", undefined, undefined, undefined);
            //***********************************************************************************************************/
            //Extruder ==> Expert Settings ==> PID Parameters ==> Cooling Control : "Pause" //
            var rInjMinPauseTime = createCustomVariable(i, "rInjMinPauseTime", udtCool, "rInjMinPauseTime", "ZEEX_3111_Parameter", "udtCmPzPid", "udtCool", "rInjMinPauseTime", undefined, undefined, undefined);
            //Extruder ==> Expert Settings ==> PID Parameters ==> Cooling Control : "Pause-Set" //
            var rInjMinPauseTimeSet = createCustomVariable(i, "rInjMinPauseTimeSet", rInjMinPauseTime, "Set", "ZEEX_3111_Parameter", "udtCmPzPid", "udtCool", "rInjMinPauseTime", "Set", undefined, undefined, undefined, undefined);
            //Extruder ==> Expert Settings ==> PID Parameters ==> Cooling Control : "Pause-Max" //
            var rInjMinPauseTimeMax = createCustomVariable(i, "rInjMinPauseTimeMax", rInjMinPauseTime, "Max", "ZEEX_3111_Parameter", "udtCmPzPid", "udtCool", "rInjMinPauseTime", "Max", undefined, undefined, undefined);
            //***********************************************************************************************************/
            //Extruder ==> Expert Settings ==> PID Parameters ==> Cooling Control : "Pause-Min" //
            var rInjMinPauseTimeMin = createCustomVariable(i, "rInjMinPauseTimeMin", rInjMinPauseTime, "Min", "ZEEX_3111_Parameter", "udtCmPzPid", "rInjMinPauseTime", "Min", undefined, undefined, undefined);
            //***********************************************************************************************************/
            //Extruder ==> Expert Settings ==> PID Parameters ==> Cooling Control : "Min OnTime //
            var rPwmMinOnTimeCool = createCustomVariable(i, "rPwmMinOnTimeCool", udtCool, "rPwmMinOnTime", "ZEEX_3111_Parameter", "udtCmPzPid", "udtCool", "rPwmMinOnTime", undefined, undefined, undefined);
            //Extruder ==> Expert Settings ==> PID Parameters ==> Cooling Control : "Min OnTime-Set" //
            var rPwmMinOnTimeCoolSet = createCustomVariable(i, "rPwmMinOnTimeCoolSet", rPwmMinOnTimeCool, "Set", "ZEEX_3111_Parameter", "udtCmPzPid", "udtCool", "rPwmMinOnTime", "Set", undefined, undefined);
            //Extruder ==> Expert Settings ==> PID Parameters ==> Cooling Control : "Min OnTime-Max" //
            var rPwmMinOnTimeCoolMax = createCustomVariable(i, "rPwmMinOnTimeCoolMax", rPwmMinOnTimeCool, "Max", "ZEEX_3111_Parameter", "udtCmPzPid", "udtCool", "rPwmMinOnTime", "Max", undefined, undefined);
            //Extruder ==> Expert Settings ==> PID Parameters ==> Cooling Control : "Min OnTime-Min" //
            var rPwmMinOnTimeCoolMin = createCustomVariable(i, "rPwmMinOnTimeCoolMin", rPwmMinOnTimeCool, "Min", "ZEEX_3111_Parameter", "udtCmPzPid", "udtCool", "rPwmMinOnTime", "Min", undefined, undefined);
            //***********************************************************************************************************/
            //Extruder ==> Expert Settings ==> PID Parameters ==> Cooling Controll : "Min OffTime" //
            var rPwmMinOffTimeCool = createCustomVariable(i, "rPwmMinOffTime", udtCool, "rPwmMinOffTime", "ZEEX_3111_Parameter", "udtCmPzPid", "udtCool", "rPwmMinOffTime", undefined, undefined, undefined);
            //Extruder ==> Expert Settings ==> PID Parameters ==> Cooling Controll : "Min OffTime-Set" //
            var rPwmMinOffTimeCoolSet = createCustomVariable(i, "rPwmMinOffTimeSet", rPwmMinOffTimeCool, "Set", "ZEEX_3111_Parameter", "udtCmPzPid", "udtCool", "rPwmMinOffTime", "Set", undefined, undefined);
            //Extruder ==> Expert Settings ==> PID Parameters ==> Cooling Control : "Min OffTime-Max" //
            var rPwmMinOffTimeCoolMax = createCustomVariable(i, "rPwmMinOffTimeMax", rPwmMinOffTimeCool, "Max", "ZEEX_3111_Parameter", "udtCmPzPid", "udtCool", "rPwmMinOffTime", "Max", undefined, undefined);
            //Extruder ==> Expert Settings ==> PID Parameters ==> Cooling Control : "Min OffTime-Min" //
            var rPwmMinOffTimeCoolMin = createCustomVariable(i, "rPwmMinOffTimeMin", rPwmMinOffTimeCool, "Min", "ZEEX_3111_Parameter", "udtCmPzPid", "udtCool", "rPwmMinOffTime", "Min", undefined, undefined);
            //***********************************************************************************************************/
            //Extruder ==> Expert Settings ==> PID Parameters ==> Parameter Cool : "rGain-Set" //
            var rGainCool = createCustomVariable(i, "rGainCool", udtCoolPid, "rGain", "ZEEX_3111_Parameter", "udtCmPzPid", "udtCool", "udtPid", "rGain", undefined, undefined);
            //***********************************************************************************************************/
            //Extruder ==> Expert Settings ==> PID Parameters ==> Parameter Cool : "rTi-Set" //
            var rTiCool = createCustomVariable(i, "rTiCool", udtCoolPid, "rTi", "ZEEX_3111_Parameter", "udtCmPzPid", "udtCool", "udtPid", "rTi", undefined, undefined);
            //***********************************************************************************************************/
            //Extruder ==> Expert Settings ==> PID Parameters ==> Parameter Cool : "rTd-Set" //
            var rTdCool = createCustomVariable(i, "rTdCool", udtCoolPid, "rTd", "ZEEX_3111_Parameter", "udtCmPzPid", "udtCool", "udtPid", "rTd", undefined, undefined);
            //***********************************************************************************************************/
            //Extruder ==> Expert Settings ==> PID Parameters ==> Parameter Cool : "rTdFiltRatio-Set" //
            var rTdFiltRatioCool = createCustomVariable(i, "rTdFiltRatioCool", udtCoolPid, "rTdFiltRatio", "ZEEX_3111_Parameter", "udtCmPzPid", "udtCool", "udtPid", "rTdFiltRatio", undefined, undefined);
            //***********************************************************************************************************/
            //Extruder ==> Expert Settings ==> PID Parameters ==> Parameter Cool : "rPWeighting-Set" //
            var rPWeightingCool = createCustomVariable(i, "rPWeightingCool", udtCoolPid, "rPWeighting", "ZEEX_3111_Parameter", "udtCmPzPid", "udtCool", "udtPid", "rPWeighting", undefined, undefined);
            //***********************************************************************************************************/
            //Extruder ==> Expert Settings ==> PID Parameters ==> Parameter Cool : "rDWeighting-Set" //
            var rDWeightingCool = createCustomVariable(i, "rDWeightingCool", udtCoolPid, "rDWeighting", "ZEEX_3111_Parameter", "udtCmPzPid", "udtCool", "udtPid", "rDWeighting", undefined, undefined);
            //***********************************************************************************************************/
            //Extruder ==> Expert Settings ==> PID Parameters ==> Parameter Cool : "rCycle-Set" //
            var rCycleCool = createCustomVariable(i, "rCycleCool", udtCoolPid, "rCycle", "ZEEX_3111_Parameter", "udtCmPzPid", "udtCool", "udtPid", "rCycle", undefined, undefined);
            //***********************************************************************************************************/
            //Extruder ==> Expert Settings ==> PID Parameters ==> Parameter Cool : "rControllZone-Set" //
            var rControlZone = createCustomVariable(i, "rControlZone", udtCoolPid, "rControlZone", "ZEEX_3111_Parameter", "udtCmPzPid", "udtCool", "udtPid", "rControlZone", undefined, undefined);
            //***********************************************************************************************************/
            //Extruder ==> Expert Settings ==> PID Parameters ==> Parameter Cool : "rDeadZone-Set" //
            var rDeadZone = createCustomVariable(i, "rDeadZone", udtCoolPid, "rDeadZone", "ZEEX_3111_Parameter", "udtCmPzPid", "udtCool", "udtPid", "rDeadZone", undefined, undefined);
            //***********************************************************************************************************/
            //Extruder ==> Expert Settings ==> PID Parameters ==> Heating Control : "Min OnTime" //
            var rPwmMinOnTimeHeat = createCustomVariable(i, "rPwmMinOnTimeHeat", udtHeat, "rPwmMinOnTimeHeat", "ZEEX_3111_Parameter", "udtCmPzPid", "udtHeat", "rPwmMinOnTime", undefined, undefined);
            //Extruder ==> Expert Settings ==> PID Parameters ==> Heating Control : "Min OnTime-Set" //
            var rPwmMinOnTimeHeatSet = createCustomVariable(i, "rPwmMinOnTimeHeatSet", rPwmMinOnTimeHeat, "Set", "ZEEX_3111_Parameter", "udtCmPzPid", "udtHeat", "rPwmMinOnTime", "Set", undefined, undefined, undefined);
            //Extruder ==> Expert Settings ==> PID Parameters ==> Heating Control : "Min OnTime-Max" //
            var rPwmMinOnTimeHeatMax = createCustomVariable(i, "rPwmMinOnTimeHeatMax", rPwmMinOnTimeHeat, "Max", "ZEEX_3111_Parameter", "udtCmPzPid", "udtHeat", "rPwmMinOnTime", "Max", undefined, undefined, undefined);
            //Extruder ==> Expert Settings ==> PID Parameters ==> Heating Control : "Min OnTime-Min" //
            var rPwmMinOnTimeHeatMin = createCustomVariable(i, "rPwmMinOnTimeHeatMin", rPwmMinOnTimeHeat, "Max", "ZEEX_3111_Parameter", "udtCmPzPid", "udtHeat", "rPwmMinOnTime", "Min", undefined, undefined, undefined);
            //***********************************************************************************************************/
            //Extruder ==> Expert Settings ==> PID Parameters ==> Heating Control : "Min OffTime" //
            var rPwmMinOffTimeHeat = createCustomVariable(i, "rPwmMinOffTimeHeat", udtHeat, "rPwmMinOffTimeHeat", "ZEEX_3111_Parameter", "udtCmPzPid", "udtHeat", "rPwmMinOffTime", undefined, undefined, undefined)
            //Extruder ==> Expert Settings ==> PID Parameters ==> Heating Control : "Min OffTime-Set" //
            var rPwmMinOffTimeHeatSet = createCustomVariable(i, "rPwmMinOffTimeHeatSet", rPwmMinOffTimeHeat, "Set", "ZEEX_3111_Parameter", "udtCmPzPid", "udtHeat", "rPwmMinOffTime", "Set", undefined, undefined)
            //Extruder ==> Expert Settings ==> PID Parameters ==> Heating Control : "Min OffTime-Max" //
            var rPwmMinOffTimeHeatMax = createCustomVariable(i, "rPwmMinOffTimeHeatMax", rPwmMinOffTimeHeat, "Max", "ZEEX_3111_Parameter", "udtCmPzPid", "udtHeat", "rPwmMinOffTime", "Max", undefined, undefined)
            //Extruder ==> Expert Settings ==> PID Parameters ==> Heating Control : "Min OffTime-Min" //
            var rPwmMinOffTimeHeatMin = createCustomVariable(i, "rPwmMinOffTimeHeatMin", rPwmMinOffTimeHeat, "Min", "ZEEX_3111_Parameter", "udtCmPzPid", "udtHeat", "rPwmMinOffTime", "Min", undefined, undefined)
            //***********************************************************************************************************/
            //Extruder ==> Expert Settings ==> PID Parameters ==> Parameter Heat : "rGain-Set" //
            var rGainHeatSet = createCustomVariable(i, "rGainHeatSet", udtHeatPid, "rGain", "ZEEX_3111_Parameter", "udtCmPzPid", "udtHeat", "udtPid", "rGain", undefined, undefined);
            //***********************************************************************************************************/
            //Extruder ==> Expert Settings ==> PID Parameters ==> Parameter Heat : "rTi-Set" //
            var rTiHeatSet = createCustomVariable(i, "rTiHeatSet", udtHeatPid, "rTi", "ZEEX_3111_Parameter", "udtCmPzPid", "udtHeat", "udtPid", "rTi", undefined, undefined);
            //***********************************************************************************************************/
            //Extruder ==> Expert Settings ==> PID Parameters ==> Parameter Heat : "rTd-Set" //
            var rTdHeatSet = createCustomVariable(i, "rTdHeatSet", udtHeatPid, "rTd", "ZEEX_3111_Parameter", "udtCmPzPid", "udtHeat", "udtPid", "rTd", undefined, undefined);
            //***********************************************************************************************************/
            //Extruder ==> Expert Settings ==> PID Parameters ==> Parameter Heat : "rTdFiltRatio-Set" //
            var rTdFiltRatioHeatSet = createCustomVariable(i, "rTdFiltRatioHeatSet", udtHeatPid, "rTdFiltRatio", "ZEEX_3111_Parameter", "udtCmPzPid", "udtHeat", "udtPid", "rTdFiltRatio", undefined, undefined);
            //***********************************************************************************************************/
            //Extruder ==> Expert Settings ==> PID Parameters ==> Parameter Heat : "rPWeighting-Set" //
            var rPWeightingHeatSet = createCustomVariable(i, "rPWeightingHeatSet", udtHeatPid, "rPWeighting", "ZEEX_3111_Parameter", "udtCmPzPid", "udtHeat", "udtPid", "rPWeighting", undefined, undefined);
            //***********************************************************************************************************/
            //Extruder ==> Expert Settings ==> PID Parameters ==> Parameter Heat : "rDWeighting-Set" //
            var rDWeightingHeatSet = createCustomVariable(i, "rDWeightingHeatSet", udtHeatPid, "rDWeighting", "ZEEX_3111_Parameter", "udtCmPzPid", "udtHeat", "udtPid", "rDWeighting", undefined, undefined);
            //***********************************************************************************************************/
            //Extruder ==> Expert Settings ==> PID Parameters ==> Parameter Heat : "rCycle-Set" //
            var rCycleHeatSet = createCustomVariable(i, "rCycleHeatSet", udtHeatPid, "rCycle", "ZEEX_3111_Parameter", "udtCmPzPid", "udtHeat", "udtPid", "rCycle", undefined, undefined);
            //***********************************************************************************************************/
            //Extruder ==> Expert Settings ==> PID Parameters ==> Parameter Heat : "rControlZone-Set" //
            var rControlZoneHeatSet = createCustomVariable(i, "rControlZoneHeatSet", udtHeatPid, "rControlZone", "ZEEX_3111_Parameter", "udtCmPzPid", "udtHeat", "udtPid", "rControlZone", undefined, undefined);
            //***********************************************************************************************************/
            //Extruder ==> Expert Settings ==> PID Parameters ==> Parameter Heat : "rDeadZone-Set" //
            var rDeadZoneHeatSet = createCustomVariable(i, "rDeadZoneHeatSet", udtHeatPid, "rDeadZone", "ZEEX_3111_Parameter", "udtCmPzPid", "udtHeat", "udtPid", "rDeadZone", undefined, undefined);
            //***********************************************************************************************************/
            //Extruder ==> Expert Settings ==> PID Parameters ==> Curent Heat : "Windings//
            var udWindOfCoil = createCustomVariable(i, "udWindOfCoil", nr2, "udWindOfCoil", "ZEEX_3111_Config", "udWindOfCoil", undefined, undefined, undefined, undefined);
            //Extruder ==> Expert Settings ==> PID Parameters ==> Curent Heat : "Windings-Set" //
            var udWindOfCoilSet = createCustomVariable(i, "udWindOfCoilSet", udWindOfCoil, "Set", "ZEEX_3111_Config", "udWindOfCoil", "Set", undefined, undefined, undefined);
            //Extruder ==> Expert Settings ==> PID Parameters ==> Curent Heat : "Windings-Max" //
            var udWindOfCoilMax = createCustomVariable(i, "udWindOfCoilMax", udWindOfCoil, "Max", "ZEEX_3111_Config", "udWindOfCoil", "Max", undefined, undefined, undefined);
            //Extruder ==> Expert Settings ==> PID Parameters ==> Curent Heat : "Windings-Min" //
            var udWindOfCoilMin = createCustomVariable(i, "udWindOfCoilMin", udWindOfCoil, "Min", "ZEEX_3111_Config", "udWindOfCoil", "Min", undefined, undefined, undefined);
            //***********************************************************************************************************/
            //Extruder ==> Expert Settings ==> PID Parameters ==> Current Heat: "Nominal" //
            var rCurr = createCustomVariable(i, "rCurrSet", udtHeat, "rCurrSet (Nominal)", "ZEEX_3111_Parameter", "udtCmPzPid", "udtHeat", "rCurrSet", undefined, undefined, undefined);
            //Extruder ==> Expert Settings ==> PID Parameters ==> Current Heat: "Nominal-Set" //
            var rCurrSet = createCustomVariable(i, "rCurrSet", rCurr, "Set", "ZEEX_3111_Parameter", "udtCmPzPid", "udtHeat", "rCurrSet", "Set", undefined);
            //Extruder ==> Expert Settings ==> PID Parameters ==> Current Heat: "Nominal-Max" //
            var rCurrMax = createCustomVariable(i, "rCurrMax", rCurr, "Max", "ZEEX_3111_Parameter", "udtCmPzPid", "udtHeat", "rCurrSet", "Max", undefined, undefined);
            //Extruder ==> Expert Settings ==> PID Parameters ==> Current Heat: "Nominal-Min" //
            var rCurrMin = createCustomVariable(i, "rCurrMin", rCurr, "Min", "ZEEX_3111_Parameter", "udtCmPzPid", "udtHeat", "rCurrSet", "Min", undefined, undefined);
            //***********************************************************************************************************/
            var rCurrTol = createCustomVariable(i, "rCurrSet", udtHeat, "rCurrTolSet (Tolerance)", "ZEEX_3111_Parameter", "udtCmPzPid", "udtHeat", "rCurrTol", undefined, undefined);
            //Extruder ==> Expert Settings ==> PID Parameters ==> Current Heat: "Tolerance-Set" //
            var rCurrTolSet = createCustomVariable(i, "rCurrSet", rCurrTol, "Set", "ZEEX_3111_Parameter", "udtCmPzPid", "udtHeat", "rCurrTol", "Set", undefined, undefined);
            //Extruder ==> Expert Settings ==> PID Parameters ==> Current Heat: "Tolerance-Max" //
            var rCurrTolMax = createCustomVariable(i, "rCurrSet", rCurrTol, "Max", "ZEEX_3111_Parameter", "udtCmPzPid", "udtHeat", "rCurrTol", "Max", undefined, undefined);
            //Extruder ==> Expert Settings ==> PID Parameters ==> Current Heat: "Tolerance-Min" //
            var rCurrTolMin = createCustomVariable(i, "rCurrSet", rCurrTol, "Min", "ZEEX_3111_Parameter", "udtCmPzPid", "udtHeat", "rCurrTol", "Min", undefined, undefined);









            //EXTRUDER EXPERT SETTING PID ProzessZonesParameters//
            //***********************************************************************************************************/
            //***********************************************************************************************************/
            //***********************************************************************************************************/
            //***********************************************************************************************************/

            //Extruder ==> Expert Settings ==> Prozess Zones/Parameter ==> Limits:"Warning H" //
            var rTempH = createCustomVariable(i, "rTempH", nr5, "rTempH (Warning H)", "ZEEX_3111_Parameter", "udtEmPz", "rTempH", undefined, undefined, undefined);
            //Extruder ==> Expert Settings ==> Prozess Zones/Parameter ==> Limits:"Warning H-Set" //
            var rTempHSet = createCustomVariable(i, "rTempHSet", rTempH, "Set", "ZEEX_3111_Parameter", "udtEmPz", "rTempH", "Set", undefined, undefined);
            //Extruder ==> Expert Settings ==> Prozess Zones/Parameter ==> Limits:"Warning H-Max" //
            var rTempHMax = createCustomVariable(i, "rTempH", rTempH, "Max", "ZEEX_3111_Parameter", "udtEmPz", "rTempH", "Max", undefined, undefined);
            //Extruder ==> Expert Settings ==> Prozess Zones/Parameter ==> Limits:"Warning H-Min" //
            var rTempHMin = createCustomVariable(i, "rTempH", rTempH, "Min", "ZEEX_3111_Parameter", "udtEmPz", "rTempH", "Min", undefined, undefined);
            //***********************************************************************************************************/
            //Extruder ==> Expert Settings ==> Prozess Zones/Parameter ==> Limits:"Alarm HH" //
            var rTempHH = createCustomVariable(i, "rTempHH", nr5, "rTempHH (AlarmHH)", "ZEEX_3111_Parameter", "udtEmPz", "rTempHH", undefined, undefined, undefined);
            //Extruder ==> Expert Settings ==> Prozess Zones/Parameter ==> Limits:"Alarm HH-Set" //
            var rTempHHSet = createCustomVariable(i, "rTempHHSet", rTempHH, "Set", "ZEEX_3111_Parameter", "udtEmPz", "rTempHH", "Set", undefined, undefined);
            //Extruder ==> Expert Settings ==> Prozess Zones/Parameter ==> Limits:"Alarm HH-Max" //
            var rTempHHmax = createCustomVariable(i, "rTempHHMax", rTempHH, "Max", "ZEEX_3111_Parameter", "udtEmPz", "rTempHH", "Max", undefined, undefined);
            //Extruder ==> Expert Settings ==> Prozess Zones/Parameter ==> Limits:"Alarm HH-Min" //
            var rTempHHMin = createCustomVariable(i, "rTempHHMin", rTempHH, "Min", "ZEEX_3111_Parameter", "udtEmPz", "rTempHH", "Min", undefined, undefined);
            //***********************************************************************************************************/
            //Extruder ==> Expert Settings ==> Prozess Zones/Parameter ==> Limits:"Tolerance H" //
            var rSetTolH = createCustomVariable(i, "rSetTolH", nr5, "rSetTolH", "ZEEX_3111_Parameter", "udtEmPz", "rTempTolH", undefined, undefined, undefined);
            //Extruder ==> Expert Settings ==> Prozess Zones/Parameter ==> Limits:"Tolerance H-Set" //
            var rSetTolHSet = createCustomVariable(i, "rSetTolHSet", rSetTolH, "Set", "ZEEX_3111_Parameter", "udtEmPz", "rTempTolH", "Set", undefined, undefined);
            //Extruder ==> Expert Settings ==> Prozess Zones/Parameter ==> Limits:"Tolerance H-Max" //
            var rSetTolHMax = createCustomVariable(i, "rSetTolHMax", rSetTolH, "Max", "ZEEX_3111_Parameter", "udtEmPz", "rTempTolH", "Max", undefined, undefined);
            //Extruder ==> Expert Settings ==> Prozess Zones/Parameter ==> Limits:"Tolerance H-Min" //
            var rSetTolHMin = createCustomVariable(i, "rSetTolHMin", rSetTolH, "Min", "ZEEX_3111_Parameter", "udtEmPz", "rTempTolH", "Min", undefined, undefined);
            //***********************************************************************************************************/
            //Extruder ==> Expert Settings ==> Prozess Zones/Parameter ==> Limits:"Tolerance HH" //
            var rSetTolHH = createCustomVariable(i, "rSetTolHH", nr5, "rSetTolHH", "ZEEX_3111_Parameter", "udtEmPz", "rTempTolHH", undefined, undefined, undefined);
            //Extruder ==> Expert Settings ==> Prozess Zones/Parameter ==> Limits:"Tolerance HH-Set" //
            var rSetTolHHSet = createCustomVariable(i, "rSetTolHHSet", rSetTolHH, "Set", "ZEEX_3111_Parameter", "udtEmPz", "rTempTolHH", "Set", undefined, undefined);
            //Extruder ==> Expert Settings ==> Prozess Zones/Parameter ==> Limits:"Tolerance HH-Max" //
            var rSetTolHHMax = createCustomVariable(i, "rSetTolHHMax", rSetTolHH, "Max", "ZEEX_3111_Parameter", "udtEmPz", "rTempTolHH", "Max", undefined, undefined);
            //Extruder ==> Expert Settings ==> Prozess Zones/Parameter ==> Limits:"Tolerance HH-Min" //
            var rSetTolHHMin = createCustomVariable(i, "rSetTolHHMin", rSetTolHH, "Min", "ZEEX_3111_Parameter", "udtEmPz", "rTempTolHH", "Min", undefined, undefined);
            //***********************************************************************************************************/
            //Extruder ==> Expert Settings ==> Prozess Zones/Parameter ==> Limits:"Tolerance HH" //
            var rTempCooldown = createCustomVariable(i, "rTempCooldown", nr5, "rTempCooldown", "ZEEX_3111_Parameter", "udtEmPz", "rTempCooldown", undefined, undefined, undefined);
            //Extruder ==> Expert Settings ==> Prozess Zones/Parameter ==> Limits:"Tolerance HH-Set" //
            var rTempCooldownSet = createCustomVariable(i, "rTempCooldownSet", rTempCooldown, "Set", "ZEEX_3111_Parameter", "udtEmPz", "rTempCooldown", "Set", undefined, undefined);
            //Extruder ==> Expert Settings ==> Prozess Zones/Parameter ==> Limits:"Tolerance HH-Max" //
            var rTempCooldownHMax = createCustomVariable(i, "rTempCooldownMax", rTempCooldown, "Max", "ZEEX_3111_Parameter", "udtEmPz", "rTempCooldown", "Max", undefined, undefined);
            //Extruder ==> Expert Settings ==> Prozess Zones/Parameter ==> Limits:"Tolerance HH-Min" //
            var rTempCooldownHMin = createCustomVariable(i, "rTempCooldownMin", rTempCooldown, "Min", "ZEEX_3111_Parameter", "udtEmPz", "rTempCooldown", "Min", undefined, undefined);
            //***********************************************************************************************************/
            //Extruder ==> Expert Settings ==> Prozess Zones/Parameter ==> Limits:"Temp. Ramp Factor" //
            var rTempRampFactor = createCustomVariable(i, "rTempRampFactor", nr5, "rTempRampFactor", "ZEEX_3111_Parameter", "udtEmPz", "rTempRampFactor", undefined, undefined, undefined);
            //Extruder ==> Expert Settings ==> Prozess Zones/Parameter ==> Limits:"Temp. Ramp Factor-Set" //
            var rTempRampFactorSet = createCustomVariable(i, "rTempCooldownSet", rTempRampFactor, "Set", "ZEEX_3111_Parameter", "udtEmPz", "rTempRampFactor", "Set", undefined, undefined);
            //Extruder ==> Expert Settings ==> Prozess Zones/Parameter ==> Limits:"Temp. Ramp Factor-Max" //
            var rTempRampFactorMax = createCustomVariable(i, "rTempCooldownMax", rTempRampFactor, "Max", "ZEEX_3111_Parameter", "udtEmPz", "rTempRampFactor", "Max", undefined, undefined);
            //Extruder ==> Expert Settings ==> Prozess Zones/Parameter ==> Limits:"Temp. Ramp Factor-Min" //
            var rTempRampFactorMin = createCustomVariable(i, "rTempCooldownMin", rTempRampFactor, "Min", "ZEEX_3111_Parameter", "udtEmPz", "rTempRampFactor", "Min", undefined, undefined);
            //******************************************************************************************* 
            //Extruder ==> Expert Settings ==> Prozess Zones/Parameter ==> Limits:"Temp. Heatup" //
            var rTempHeatup = createCustomVariable(i, "rTempHeatup", nr5, "rTempHeatup", "ZEEX_3111_Parameter", "udtEmPz", "rTempHeatup", undefined, undefined, undefined);
            //Extruder ==> Expert Settings ==> Prozess Zones/Parameter ==> Limits:"Temp. Heatup-Set" //
            var rTempHeatupSet = createCustomVariable(i, "rTempCooldownSet", rTempHeatup, "Set", "ZEEX_3111_Parameter", "udtEmPz", "rTempHeatup", "Set", undefined, undefined);
            //Extruder ==> Expert Settings ==> Prozess Zones/Parameter ==> Limits:"Temp. Heatup-Max" //
            var rTempHeatupMax = createCustomVariable(i, "rTempHeatupMax", rTempHeatup, "Max", "ZEEX_3111_Parameter", "udtEmPz", "rTempHeatup", "Max", undefined, undefined);
            //Extruder ==> Expert Settings ==> Prozess Zones/Parameter ==> Limits:"Temp. Heatup-Min" //
            var rTempHeatupMin = createCustomVariable(i, "rTempHeatupMin", rTempHeatup, "Min", "ZEEX_3111_Parameter", "udtEmPz", "rTempHeatup", "Min", undefined, undefined);
            //*******************************************************************************************
            //Extruder ==> Expert Settings ==> Prozess Zones/Parameter ==> Limits:"Temp.Release" //
            var rTempRelease = createCustomVariable(i, "rTempHeatup", nr5, "rTempRel", "ZEEX_3111_Parameter", "udtEmPz", "rTempRel", undefined, undefined, undefined);
            //Extruder ==> Expert Settings ==> Prozess Zones/Parameter ==> Limits:"Temp.Release-Set" //
            var rTempReleaseSet = createCustomVariable(i, "rTempReleaseSet", rTempRelease, "Set", "ZEEX_3111_Parameter", "udtEmPz", "rTempRel", "Set", undefined, undefined);
            //Extruder ==> Expert Settings ==> Prozess Zones/Parameter ==> Limits:"Temp.Release-Max" //
            var rTempReleaseMax = createCustomVariable(i, "rTempReleaseMax", rTempRelease, "Max", "ZEEX_3111_Parameter", "udtEmPz", "rTempRel", "Max", undefined, undefined);
            //Extruder ==> Expert Settings ==> Prozess Zones/Parameter ==> Limits:"Temp.Release-Min" //
            var rTempReleaseMin = createCustomVariable(i, "rTempReleaseMin", rTempRelease, "Min", "ZEEX_3111_Parameter", "udtEmPz", "rTempRel", "Min", undefined, undefined);
            //*******************************************************************************************
            //Extruder ==> Expert Settings ==> Prozess Zones/Parameter ==> Parameter:"Time.Release" /
            var udTimeRel = createCustomVariable(i, "rTempHeatup", nr5, "udTimeRel", "ZEEX_3111_Parameter", "udtEmPz", "udTimeRel", undefined, undefined, undefined);
            //Extruder ==> Expert Settings ==> Prozess Zones/Parameter ==> Limits:"Time.Release-Set" //
            var udTimeRelSet = createCustomVariable(i, "rudTimeRelSet", udTimeRel, "Set", "ZEEX_3111_Parameter", "udtEmPz", "udTimeRel", "Set", undefined, undefined);
            //Extruder ==> Expert Settings ==> Prozess Zones/Parameter ==> Limits:"Time.Release-Max" //
            var udTimeRelMax = createCustomVariable(i, "udTimeRelMax", udTimeRel, "Max", "ZEEX_3111_Parameter", "udtEmPz", "udTimeRel", "Max", undefined, undefined);
            //Extruder ==> Expert Settings ==> Prozess Zones/Parameter ==> Limits:"Time.Release-Min" //
            var udTimeRelMin = createCustomVariable(i, "udTimeRelMin", udTimeRel, "Min", "ZEEX_3111_Parameter", "udtEmPz", "udTimeRel", "Min", undefined, undefined);

        }
    }
}
