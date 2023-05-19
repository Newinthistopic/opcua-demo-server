const initial = require('../../../funktionen');

module.exports = {

    run: function (addressSpace, device, opcua, verbose, serverValues) {


        var namespace3 = addressSpace.getNamespace('http://mynamespace-3/UA/');
        const ZEEX_3111_Hmi = addressSpace.findNode("ns=3;s=\"ZEEX_3111_Hmi\"");
        const datablocksGlobal1 = addressSpace.findNode("ns=3;s=DatablocksGlobal");
       
        

        var ZEEX_3111_Parameter = namespace3.addObject({
            organizedBy: datablocksGlobal1, 
            browseName: "ZEEX_3111_Parameter",
            nodeId: "ns=3;s=" + "\"ZEEX_3111_Parameter\"",
        });

        var udtCmPzPid_Parameter = namespace3.addVariable({
            componentOf: ZEEX_3111_Parameter,
            browseName: "udtCmPzPid",
            dataType: opcua.DataType.Double,
            nodeId: "s=" + "\"ZEEX_3111_Parameter\".\"udtCmPzPid\"",

        });

        var udtCmPzPid_HMI = namespace3.addVariable({
            componentOf: ZEEX_3111_Hmi,
            browseName: "udtCmPzPid",
            dataType: opcua.DataType.Double,
            nodeId: "s=" + "\"ZEEX_3111_Hmi\".\"udtCmPzPid\"",

        });

        var ZEEX_3111_Config = namespace3.addObject({
            componentOf: datablocksGlobal1,
            browseName: "ZEEX_3111_Config",
            dataType: opcua.DataType.Double,
            nodeId: "s=" + "\"ZEEX_3111_Config\""

        });

        var udtCmPzPid_Config = namespace3.addVariable({
            componentOf: ZEEX_3111_Config,
            browseName: "udtCmPzPid",
            dataType: opcua.DataType.Double,
            nodeId: "s=" + "\"ZEEX_3111_Config\".\"udtCmPzPid\"",

        });

        function createCustomVariable(i, variableName, componentOf, browseName, part1, part2, part3, part4, part5, customGetLogic, customSetLogic) {
            var nodeId = `"ns=3;s=\"${part1}\".\"${part2}\"[${i}]`;
            // Nur hinzufügen, wenn part3 definiert ist
            if (part3) {
                nodeId += `.\"${part3}\"`;
            }
            // Nur hinzufügen, wenn part4 definiert ist
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
                        // console.log("nameNodeId:", nameNodeId);

                        if (customGetLogic) {
                            customGetLogic(nameNodeId, serverValues);

                                                       //return new opcua.Variant({ dataType: opcua.DataType.Float, value: serverValues[nameNodeId[variableName + "NodeId"]] });
                        }

                        //initial.rTempHSet1(i,  nameNodeId, serverValues);

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
                }
            });

            return newVariable[variableName]; // Rückgabe der neu erstellten Variable
        }


        for (let i = 0; i < 14; i++) {

            var nr = createCustomVariable(i, "nr", udtCmPzPid_Parameter, i.toString(), "ZEEX_3111_Parameter", "udtCmPzPid", undefined, undefined, undefined, undefined, undefined);

            var nr2 = createCustomVariable(i, "nr", udtCmPzPid_Config, i.toString(), "ZEEX_3111_Config", "udtCmPzPid", undefined, undefined, undefined, undefined, undefined);

            var nr3 = createCustomVariable(i, "nr", udtCmPzPid_HMI, i.toString(), "ZZEEX_3111_Hmi", "udtCmPzPid", undefined, undefined, undefined, undefined, undefined);
        

            var udtCool = createCustomVariable(i, "udtCool", nr, "udtCool", "ZZEEX_3111_Parameter", "udtCmPzPid", "udtCool", undefined, undefined, undefined, undefined);
            var udtCoolPid = createCustomVariable(i, "udtCoolPid", udtCool, "udtPid", "ZEEX_3111_Config", "udtCool", "udtPid", undefined, undefined, undefined);


            var udtHeat = createCustomVariable(i, "udtHeat", nr, "udtHeat", "ZEEX_3111_Parameter", "udtHeat", undefined, undefined, undefined, undefined);
            var udtHeatPid = createCustomVariable(i, "udtHeatPid", udtHeat, "udtHeatPid", "ZEEX_3111_Parameter", "udtCmPzPid", "udtHeat", "udtPid", undefined, undefined);


            //***********************************************************************************************************/
            //***********************************************************************************************************/
            //***********************************************************************************************************/
            //***********************************************************************************************************/
            //Extruder ==> Expert Settings ==> PID Parameters : "Lenght" //
            var rInjPulseTime = createCustomVariable(i, "rInjPulseTime ", udtCool, "rInjPulseTime ", "ZEEX_3111_Parameter", "udtCmPzPid", "udtCool", "rInjPulseTime", undefined, undefined, undefined);
            //Extruder ==> Expert Settings ==> PID Parameters : "Lenght-Set" //
            var rInjPulseTimeSet = createCustomVariable(i, "rInjPulseTimeSet", rInjPulseTime, "Set", "ZEEX_3111_Parameter", "udtCmPzPid", "udtCool", "rInjPulseTime", "Set", undefined, rInjPulseTimeSetGet, rInjPulseTimeSetSet);
            function rInjPulseTimeSetGet() { }
            function rInjPulseTimeSetSet() { }
            //Extruder ==> Expert Settings ==> PID Parameters : "Lenght-Max" //
            var rInjPulseTimeMax = createCustomVariable(i, "rInjPulseTimeMax", rInjPulseTime, "Max", "ZEEX_3111_Parameter", "udtCmPzPid", "udtCool", "rInjPulseTime", "Max", undefined, rInjPulseTimeMaxGet, rInjPulseTimeMaxSet);
            function rInjPulseTimeMaxGet() { }
            function rInjPulseTimeMaxSet() { }
            //Extruder ==> Expert Settings ==> PID Parameters : "Lenght-Min" //
            var rInjPulseTimeMin = createCustomVariable(i, "rInjPulseTimeMin", rInjPulseTime, "Min", "ZEEX_3111_Parameter", "udtCmPzPid", "udtCool", "rInjPulseTime", "Min", undefined, rInjPulseTimeMinGet, rInjPulseTimeMinSet);
            function rInjPulseTimeMinGet() { }
            function rInjPulseTimeMinSet() { }
            //***********************************************************************************************************/
            //Extruder ==> Expert Settings ==> PID Parameters ==> Cooling Control : "Pause" //
            var rInjMinPauseTime = createCustomVariable(i, "rInjMinPauseTime", udtCool, "rInjMinPauseTime", "ZEEX_3111_Parameter", "udtCmPzPid", "rInjMinPauseTime", undefined, undefined, undefined, undefined);
            //Extruder ==> Expert Settings ==> PID Parameters ==> Cooling Control : "Pause-Set" //
            var rInjMinPauseTimeSet = createCustomVariable(i, "rInjMinPauseTimeSet", rInjMinPauseTime, "Set", "ZEEX_3111_Parameter", "udtCmPzPid", "rInjMinPauseTime", "Set", undefined, undefined, rInjMinPauseTimeSetGet, rInjMinPauseTimeSetSet);
            function rInjMinPauseTimeSetGet() { }
            function rInjMinPauseTimeSetSet() { }
            //Extruder ==> Expert Settings ==> PID Parameters ==> Cooling Control : "Pause-Max" //
            var rInjMinPauseTimeMax = createCustomVariable(i, "rInjMinPauseTimeMax", rInjMinPauseTime, "Max", "ZEEX_3111_Parameter", "udtCmPzPid", "rInjMinPauseTime", "Max", undefined, rInjMinPauseTimeMaxGet, rInjMinPauseTimeMaxSet);
            function rInjMinPauseTimeMaxGet() { }
            function rInjMinPauseTimeMaxSet() { }
            //***********************************************************************************************************/
            //Extruder ==> Expert Settings ==> PID Parameters ==> Cooling Control : "Pause-Min" //
            var rInjMinPauseTimeMin = createCustomVariable(i, "rInjMinPauseTimeMin", rInjMinPauseTime, "Min", "ZEEX_3111_Parameter", "udtCmPzPid", "rInjMinPauseTime", "Min", undefined, rInjMinPauseTimeMinGet, rInjMinPauseTimeMinSet);
            function rInjMinPauseTimeMinGet() { }
            function rInjMinPauseTimeMinSet() { }
            //***********************************************************************************************************/
            //Extruder ==> Expert Settings ==> PID Parameters ==> Cooling Control : "Min OnTime //
            var rPwmMinOnTimeCool = createCustomVariable(i, "rPwmMinOnTimeCool", udtCool, "rPwmMinOnTime", "ZEEX_3111_Parameter", "udtCmPzPid", "udtCool", "rPwmMinOnTimeCool", undefined, undefined, undefined);
            //Extruder ==> Expert Settings ==> PID Parameters ==> Cooling Control : "Min OnTime-Set" //
            var rPwmMinOnTimeCoolSet = createCustomVariable(i, "rPwmMinOnTimeCoolSet", rPwmMinOnTimeCool, "Set", "ZEEX_3111_Parameter", "udtCmPzPid", "udtCool", "rPwmMinOnTimeCool", "Set", rPwmMinOnTimeCoolSetGet, rPwmMinOnTimeCoolSetSet);
            function rPwmMinOnTimeCoolSetGet() { }
            function rPwmMinOnTimeCoolSetSet() { }
            //Extruder ==> Expert Settings ==> PID Parameters ==> Cooling Control : "Min OnTime-Max" //
            var rPwmMinOnTimeCoolMax = createCustomVariable(i, "rPwmMinOnTimeCoolMax", rPwmMinOnTimeCool, "Max", "ZEEX_3111_Parameter", "udtCmPzPid", "udtCool", "rPwmMinOnTimeCool", "Max", rPwmMinOnTimeCoolMaxGet, rPwmMinOnTimeCoolMaxSet);
            function rPwmMinOnTimeCoolMaxGet() { }
            function rPwmMinOnTimeCoolMaxSet() { }
            //Extruder ==> Expert Settings ==> PID Parameters ==> Cooling Control : "Min OnTime-Min" //
            var rPwmMinOnTimeCoolMin = createCustomVariable(i, "rPwmMinOnTimeCoolMin", rPwmMinOnTimeCool, "Min", "ZEEX_3111_Parameter", "udtCmPzPid", "udtCool", "rPwmMinOnTimeCool", "Min", rPwmMinOnTimeCoolMinGet, rPwmMinOnTimeCoolMinSet);
            function rPwmMinOnTimeCoolMinGet() { }
            function rPwmMinOnTimeCoolMinSet() { }
            //***********************************************************************************************************/
            //Extruder ==> Expert Settings ==> PID Parameters ==> Cooling Controll : "Min OffTime" //
            var rPwmMinOffTimeCool = createCustomVariable(i, "rPwmMinOffTime", udtCool, "rPwmMinOffTime", "ZEEX_3111_Parameter", "udtCmPzPid", "udtCool", "rPwmMinOffTime", undefined, undefined, undefined);
            //Extruder ==> Expert Settings ==> PID Parameters ==> Cooling Controll : "Min OffTime-Set" //
            var rPwmMinOffTimeCoolSet = createCustomVariable(i, "rPwmMinOffTimeSet", rPwmMinOffTimeCool, "Set", "ZEEX_3111_Parameter", "udtCmPzPid", "udtCool", "rPwmMinOffTime", "Set", rPwmMinOffTimeCoolSetGet, rPwmMinOffTimeCoolSetSet);
            function rPwmMinOffTimeCoolSetGet() { }
            function rPwmMinOffTimeCoolSetSet() { }
            //Extruder ==> Expert Settings ==> PID Parameters ==> Cooling Control : "Min OffTime-Max" //
            var rPwmMinOffTimeCoolMax = createCustomVariable(i, "rPwmMinOffTimeMax", rPwmMinOffTimeCool, "Max", "ZEEX_3111_Parameter", "udtCmPzPid", "udtCool", "rPwmMinOffTime", "Max", rPwmMinOffTimeCoolMaxGet, rPwmMinOffTimeCoolMaxSet);
            function rPwmMinOffTimeCoolMaxGet() { }
            function rPwmMinOffTimeCoolMaxSet() { }
            //Extruder ==> Expert Settings ==> PID Parameters ==> Cooling Control : "Min OffTime-Min" //
            var rPwmMinOffTimeCoolMin = createCustomVariable(i, "rPwmMinOffTimeMin", rPwmMinOffTimeCool, "Min", "ZEEX_3111_Parameter", "udtCmPzPid", "udtCool", "rPwmMinOffTime", "Min", rPwmMinOffTimeCoolMinGet, rPwmMinOffTimeCoolMinSet);
            function rPwmMinOffTimeCoolMinGet() { }
            function rPwmMinOffTimeCoolMinSet() { }
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
            var rPwmMinOnTimeHeatSet = createCustomVariable(i, "rPwmMinOnTimeHeatSet", rPwmMinOnTimeHeat, "Set", "ZEEX_3111_Parameter", "udtCmPzPid", "udtHeat","rPwmMinOnTime", "Set", undefined, rPwmMinOnTimeHeatSetGet, rPwmMinOnTimeHeatSetSet);
            function rPwmMinOnTimeHeatSetGet() { }
            function rPwmMinOnTimeHeatSetSet() { }
            //Extruder ==> Expert Settings ==> PID Parameters ==> Heating Control : "Min OnTime-Max" //
            var rPwmMinOnTimeHeatMax = createCustomVariable(i, "rPwmMinOnTimeHeatMax", rPwmMinOnTimeHeat, "Max", "ZEEX_3111_Parameter", "udtCmPzPid", "udtHeat","rPwmMinOnTime", "Max", undefined, rPwmMinOnTimeHeatMaxGet, rPwmMinOnTimeHeatMaxSet);
            function rPwmMinOnTimeHeatMaxGet() { }
            function rPwmMinOnTimeHeatMaxSet() { }
            //Extruder ==> Expert Settings ==> PID Parameters ==> Heating Control : "Min OnTime-Min" //
            var rPwmMinOnTimeHeatMin = createCustomVariable(i, "rPwmMinOnTimeHeatMin", rPwmMinOnTimeHeat, "Max", "ZEEX_3111_Parameter", "udtCmPzPid", "udtHeat","rPwmMinOnTime", "Min", undefined, rPwmMinOnTimeHeatMinGet, rPwmMinOnTimeHeatMinSet);
            function rPwmMinOnTimeHeatMinGet() { }
            function rPwmMinOnTimeHeatMinSet() { }
            //***********************************************************************************************************/
            //Extruder ==> Expert Settings ==> PID Parameters ==> Heating Control : "Min OffTime" //
            var rPwmMinOffTimeHeat = createCustomVariable(i, "rPwmMinOffTimeHeat", udtHeat, "rPwmMinOffTimeHeat", "ZEEX_3111_Parameter", "udtCmPzPid", "udtHeat", "rPwmMinOffTime", undefined, undefined, undefined)
            //Extruder ==> Expert Settings ==> PID Parameters ==> Heating Control : "Min OffTime-Set" //
            var rPwmMinOffTimeHeatSet = createCustomVariable(i, "rPwmMinOffTimeHeatSet", rPwmMinOffTimeHeat, "Set", "ZEEX_3111_Parameter", "udtCmPzPid", "udtHeat", "rPwmMinOffTime", "Set", rPwmMinOffTimeHeatSetGet, rPwmMinOffTimeHeatSetSet)
            function rPwmMinOffTimeHeatSetGet() { };
            function rPwmMinOffTimeHeatSetSet() { };
            //Extruder ==> Expert Settings ==> PID Parameters ==> Heating Control : "Min OffTime-Max" //
            var rPwmMinOffTimeHeatMax = createCustomVariable(i, "rPwmMinOffTimeHeatMax", rPwmMinOffTimeHeat, "Max", "ZEEX_3111_Parameter", "udtCmPzPid", "udtHeat", "rPwmMinOffTime", "Max", rPwmMinOffTimeHeatMaxGet, rPwmMinOffTimeHeatMaxSet)
            function rPwmMinOffTimeHeatMaxGet() { };
            function rPwmMinOffTimeHeatMaxSet() { };
            //Extruder ==> Expert Settings ==> PID Parameters ==> Heating Control : "Min OffTime-Min" //
            var rPwmMinOffTimeHeatMin = createCustomVariable(i, "rPwmMinOffTimeHeatMin", rPwmMinOffTimeHeat, "Min", "ZEEX_3111_Parameter", "udtCmPzPid", "udtHeat", "rPwmMinOffTime", "Min", rPwmMinOffTimeHeatMinGet, rPwmMinOffTimeHeatMinSet)
            function rPwmMinOffTimeHeatMinGet() { };
            function rPwmMinOffTimeHeatMinSet() { };
            //***********************************************************************************************************/
            //Extruder ==> Expert Settings ==> PID Parameters ==> Parameter Heat : "rGain-Set" //
            var rGainHeat = createCustomVariable(i, "rGainHeat", udtHeatPid, "rGain", "ZEEX_3111_Parameter", "udtCmPzPid", "udtHeat", "udtPid", "rGain", undefined, undefined);
            //***********************************************************************************************************/
            //Extruder ==> Expert Settings ==> PID Parameters ==> Parameter Heat : "rTi-Set" //
            var rTiHeat = createCustomVariable(i, "rGainHeat", udtHeatPid, "rTi", "ZEEX_3111_Parameter", "udtCmPzPid", "udtHeat", "udtPid", "rTi", undefined, undefined);
            //***********************************************************************************************************/
            //Extruder ==> Expert Settings ==> PID Parameters ==> Parameter Heat : "rTd-Set" //
            var rTdHeat = createCustomVariable(i, "rTdHeat", udtHeatPid, "rTd", "ZEEX_3111_Parameter", "udtCmPzPid", "udtHeat", "udtPid", "rTd", undefined, undefined);
            //***********************************************************************************************************/
            //Extruder ==> Expert Settings ==> PID Parameters ==> Parameter Heat : "rTdFiltRatio-Set" //
            var rTdFiltRatioHeat = createCustomVariable(i, "rTdFiltRatio", udtHeatPid, "rTdFiltRatio", "ZEEX_3111_Parameter", "udtCmPzPid", "udtHeat", "udtPid", "rTdFiltRatio", undefined, undefined);
            //***********************************************************************************************************/
            //Extruder ==> Expert Settings ==> PID Parameters ==> Parameter Heat : "rPWeighting-Set" //
            var rPWeightingHeat = createCustomVariable(i, "rPWeighting", udtHeatPid, "rPWeighting", "ZEEX_3111_Parameter", "udtCmPzPid", "udtHeat", "udtPid", "rPWeighting", undefined, undefined);
            //***********************************************************************************************************/
            //Extruder ==> Expert Settings ==> PID Parameters ==> Parameter Heat : "rDWeighting-Set" //
            var rDWeightingHeat = createCustomVariable(i, "rDWeighting", udtHeatPid, "rDWeighting", "ZEEX_3111_Parameter", "udtCmPzPid", "udtHeat", "udtPid", "rDWeighting", undefined, undefined);
            //***********************************************************************************************************/
            //Extruder ==> Expert Settings ==> PID Parameters ==> Parameter Heat : "rCycle-Set" //
            var rCycleHeat = createCustomVariable(i, "rCycleHeat", udtHeatPid, "rCycle", "ZEEX_3111_Parameter", "udtCmPzPid", "udtHeat", "udtPid", "rCycle", undefined, undefined);
            //***********************************************************************************************************/
            //Extruder ==> Expert Settings ==> PID Parameters ==> Parameter Heat : "rControlZone-Set" //
            var rControlZoneHeat = createCustomVariable(i, "rControlZoneHeat", udtHeatPid, "rControlZone", "ZEEX_3111_Parameter", "udtCmPzPid", "udtHeat", "udtPid", "rControlZone", undefined, undefined);
            //***********************************************************************************************************/
            //Extruder ==> Expert Settings ==> PID Parameters ==> Parameter Heat : "rDeadZone-Set" //
            var rDeadZoneHeat = createCustomVariable(i, "rDeadZoneHeat", udtHeatPid, "rDeadZone", "ZEEX_3111_Parameter", "udtCmPzPid", "udtHeat", "udtPid", "rDeadZone", undefined, undefined);
            //***********************************************************************************************************/
            //Extruder ==> Expert Settings ==> PID Parameters ==> Curent Heat : "Windings-Set" //
            var udWindOfCoilSet = createCustomVariable(i, "udWindOfCoilSet", nr2, "Set", "ZEEX_3111_Config", "udWindOfCoil", "Set", undefined, undefined, undefined);
            //Extruder ==> Expert Settings ==> PID Parameters ==> Curent Heat : "Windings-Max" //
            var udWindOfCoilMax = createCustomVariable(i, "udWindOfCoilMax", nr2, "Max", "ZEEX_3111_Config", "udWindOfCoil", "Max", undefined, undefined, undefined);
            //Extruder ==> Expert Settings ==> PID Parameters ==> Curent Heat : "Windings-Min" //
            var udWindOfCoilMin = createCustomVariable(i, "udWindOfCoilMin", nr2, "Min", "ZEEX_3111_Config", "udWindOfCoil", "Min", undefined, undefined, undefined);
            //***********************************************************************************************************/
            //Extruder ==> Expert Settings ==> PID Parameters ==> Current Heat: "Nominal" //
            var rCurr = createCustomVariable(i, "rCurrSet", udtHeat, "rCurrSet (Nominal)", "ZEEX_3111_Parameter", "udtCmPzPid", "udtHeat", "rCurrSet", undefined,undefined, undefined);
            //Extruder ==> Expert Settings ==> PID Parameters ==> Current Heat: "Nominal-Set" //
            var rCurrSet = createCustomVariable(i, "rCurrSet", rCurr, "Set", "ZEEX_3111_Parameter", "udtCmPzPid", "udtHeat", "rCurrSet", "Set", undefined);
            //Extruder ==> Expert Settings ==> PID Parameters ==> Current Heat: "Nominal-Max" //
            var rCurrMax = createCustomVariable(i, "rCurrMax", rCurr, "Max", "ZEEX_3111_Parameter", "udtCmPzPid", "udtHeat", "rCurrSet", "Max", undefined, undefined);
            //Extruder ==> Expert Settings ==> PID Parameters ==> Current Heat: "Nominal-Min" //
            var rCurrMin = createCustomVariable(i, "rCurrMin", rCurr, "Min", "ZEEX_3111_Parameter", "udtCmPzPid", "udtHeat", "rCurrSet", "Min", undefined, undefined);
            //***********************************************************************************************************/

            var rCurrTol = createCustomVariable(i, "rCurrSet", udtHeat, "rCurrTolSet (Tolerance)", "ZEEX_3111_Parameter", "udtCmPzPid", "udtHeat", "rCurrTol",  undefined, undefined);
            //Extruder ==> Expert Settings ==> PID Parameters ==> Current Heat: "Tolerance-Set" //
            var rCurrTolSet = createCustomVariable(i, "rCurrSet", rCurrTol, "Set", "ZEEX_3111_Parameter", "udtCmPzPid", "udtHeat", "rCurrTol", "Set", undefined, undefined);
            //Extruder ==> Expert Settings ==> PID Parameters ==> Current Heat: "Tolerance-Max" //
            var rCurrTolMax = createCustomVariable(i, "rCurrSet", rCurrTol, "Max", "ZEEX_3111_Parameter", "udtCmPzPid", "udtHeat", "rCurrTol", "Max", undefined, undefined);
            //Extruder ==> Expert Settings ==> PID Parameters ==> Current Heat: "Tolerance-Min" //
            var rCurrTolMin = createCustomVariable(i, "rCurrSet", rCurrTol, "Min", "ZEEX_3111_Parameter", "udtCmPzPid", "udtHeat", "rCurrTol", "Min", undefined, undefined);
            //***********************************************************************************************************/
            //***********************************************************************************************************/
            //***********************************************************************************************************/
            //***********************************************************************************************************/
        }
    }
}