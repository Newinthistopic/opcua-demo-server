const initial = require('../../../funktionen');

module.exports = {

    run: function (addressSpace, device, opcua, verbose, serverValues,) {

        var namespace3 = addressSpace.getNamespace('http://mynamespace-3/UA/');
        const ZEEX_3111_Hmi = addressSpace.findNode("ns=3;s=\"ZEEX_3111_Hmi\"");
        const DataBlocksGlobal = addressSpace.findNode("ns=3;s=DatablocksGlobal");


       
        var ZEEX_3111_Parameter = namespace3.addObject({
            organizedBy: DataBlocksGlobal, 
            browseName: "ZEEX_3111_Parameter",
            nodeId: "s=" + "\"ZEEX_3111_Parameter\""
        });

        var ZEEX_3111_Parameter = namespace3.addVariable({
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
            componentOf: DataBlocksGlobal,
            browseName: "ZEEX_3111_Config",
            dataType: opcua.DataType.Double,
            nodeId: "s=" + "\"ZEEX_3111_Config\""

        });

        var ZEEX_3111_Config = namespace3.addVariable({
            componentOf: ZEEX_3111_Config, 
            browseName: "udtCmPzPid",
            dataType: opcua.DataType.Double,
            nodeId: "s=" + "\"ZEEX_3111_Config\".\"udtCmPzPid\"",

        });

        for (let i = 0; i < 14; i++) {

            var nr = namespace3.addVariable({
                componentOf: ZEEX_3111_Parameter,
                browseName: i.toString(),
                dataType: opcua.DataType.Double,
                nodeId: "s=" + "\"ZEEX_3111_Parameter\".\"udtCmPzPid\"" + "[" + i + "]",
            })
            var nr2 = namespace3.addVariable({
                componentOf: ZEEX_3111_Config,
                browseName: i.toString(),
                dataType: opcua.DataType.Double,
                nodeId: "s=" + "\"ZEEX_3111_Config\".\"udtCmPzPid\"" + "[" + i + "]",
            })

            var nr3 = namespace3.addVariable({
                componentOf: udtCmPzPid_HMI,
                browseName: i.toString(),
                dataType: opcua.DataType.Double,
                nodeId: "s=" + "\"ZEEX_3111_Hmi\".\"udtCmPzPid\"" + "[" + i + "]",
            })

            var udtCool = namespace3.addVariable({
                componentOf: nr,
                browseName: "udtCool",
                dataType: opcua.DataType.Float,
                nodeId: "s=" + "\"ZEEX_3111_Parameter\".\"udtCmPzPid\"" + "[" + i + "]." + "\"udtCool\"",
            })

            var udWindOfCoil = namespace3.addVariable({
                componentOf: nr2,
                browseName: "udWindOfCoil",
                dataType: opcua.DataType.Float,
                nodeId: "s=" + "\"ZEEX_3111_Config\".\"udtCmPzPid\"" + "[" + i + "]." + "\"udWindOfCoil\"",

            })

            var udtHeat = namespace3.addVariable({
                componentOf: nr,
                browseName: "udtHeat",
                dataType: opcua.DataType.Float,
                nodeId: "s=" + "\"ZEEX_3111_Parameter\".\"udtCmPzPid\"" + "[" + i + "]." + "\"udtHeat\"",
            })

            var udtCoolPid = namespace3.addVariable({
                componentOf: udtCool,
                browseName: "udtPid",
                dataType: opcua.DataType.Float,
                nodeId: "s=" + "\"ZEEX_3111_Parameter\".\"udtCmPzPid\"" + "[" + i + "]." + "\"udtCool\".\"udtPid\"",

            })

            var rInjMinPauseTime = namespace3.addVariable({
                componentOf: udtCool,
                browseName: "rInjMinPauseTime",
                dataType: opcua.DataType.Float,
                nodeId: "s=" + "\"ZEEX_3111_Parameter\".\"udtCmPzPid\"" + "[" + i + "]." + "\"udtCool\".\"rInjMinPauseTime\"",

            })

            var rPwmMinOffTimeCool = namespace3.addVariable({
                componentOf: udtCool,
                browseName: "rPwmMinOffTime",
                dataType: opcua.DataType.Float,
                nodeId: "s=" + "\"ZEEX_3111_Parameter\".\"udtCmPzPid\"" + "[" + i + "]." + "\"udtCool\".\"rPwmMinOffTime\"",
            })

            var rPwmMinOnTimeCool = namespace3.addVariable({
                componentOf: udtCool,
                browseName: "rPwmMinOnTime",
                dataType: opcua.DataType.Float,
                nodeId: "s=" + "\"ZEEX_3111_Parameter\".\"udtCmPzPid\"" + "[" + i + "]." + "\"udtCool\".\"rPwmMinOnTime\"",
            })

            var rPwmMinOffTimeHeat = namespace3.addVariable({
                componentOf: udtHeat,
                browseName: "rPwmMinOffTime",
                dataType: opcua.DataType.Float,
                nodeId: "s=" + "\"ZEEX_3111_Parameter\".\"udtCmPzPid\"" + "[" + i + "]." + "\"udtHeat\".\"rPwmMinOffTime\"",
            })

            var rPwmMinOnTimeHeat = namespace3.addVariable({
                componentOf: udtHeat,
                browseName: "rPwmMinOnTime",
                dataType: opcua.DataType.Float,
                nodeId: "s=" + "\"ZEEX_3111_Parameter\".\"udtCmPzPid\"" + "[" + i + "]." + "\"udtHeat\".\"rPwmMinOnTime\"",
            })

            var rInjPulseTime = namespace3.addVariable({
                componentOf: udtCool,
                browseName: "rInjPulseTime",
                dataType: opcua.DataType.Float,
                nodeId: "s=" + "\"ZEEX_3111_Parameter\".\"udtCmPzPid\"" + "[" + i + "]." + "\"udtCool\".\"rInjPulseTime\"",
            })

            var rCurrSet = namespace3.addVariable({
                componentOf: udtHeat,
                browseName: "rCurrSet",
                dataType: opcua.DataType.Float,
                nodeId: "s=" + "\"ZEEX_3111_Parameter\".\"udtCmPzPid\"" + "[" + i + "]." + "\"udtHeat\".\"rCurrSet\"",
            })

            var udtHeatPid = namespace3.addVariable({
                componentOf: udtHeat,
                browseName: "udtPid",
                dataType: opcua.DataType.Float,
                nodeId: "s=" + "\"ZEEX_3111_Parameter\".\"udtCmPzPid\"" + "[" + i + "]." + "\"udtHeat\".\"udtPid\"",

            })












            //***********************************************************************************************************/
            //***********************************************************************************************************/
            //***********************************************************************************************************/
            //***********************************************************************************************************/
            //Extruder ==> Expert Settings ==> PID Parameters : "Lenght-Set" //
            var rInjPulseTimeSet = namespace3.addVariable({
                componentOf: rInjPulseTime,
                browseName: "Set",
                dataType: opcua.DataType.Float,
                nodeId: "s=" + "\"ZEEX_3111_Parameter\".\"udtCmPzPid\"" + "[" + i + "]." + "\"udtCool\".\"rInjPulseTime\".\"Set\"",
                value: {
                    get: function () {
                        const InjPulseTimeSetNodeId = this.nodeId.value;
                        return new opcua.Variant({ dataType: opcua.DataType.Float, value: serverValues[InjPulseTimeSetNodeId] = 11111 });
                    },
                    set: function (variant) {
                        return opcua.StatusCodes.Good;
                    }
                }
            })
            //Extruder ==> Expert Settings ==> PID Parameters : "Lenght-Max" //
            var rInjPulseTimeMax = namespace3.addVariable({
                componentOf: rInjPulseTime,
                browseName: "Max",
                dataType: opcua.DataType.Float,
                nodeId: "s=" + "\"ZEEX_3111_Parameter\".\"udtCmPzPid\"" + "[" + i + "]." + "\"udtCool\".\"rInjPulseTime\".\"Max\"",
                value: {
                    get: function () {
                        const InjPulseTimeSMaxNodeId = this.nodeId.value;
                        return new opcua.Variant({ dataType: opcua.DataType.Float, value: serverValues[InjPulseTimeSMaxNodeId] = 22 });
                    },
                    set: function (variant) {
                        return opcua.StatusCodes.Good;
                    }
                }
            })
            //Extruder ==> Expert Settings ==> PID Parameters : "Lenght-Min" //
            var rInjPulseTimeMin = namespace3.addVariable({
                componentOf: rInjPulseTime,
                browseName: "Min",
                dataType: opcua.DataType.Float,
                nodeId: "s=" + "\"ZEEX_3111_Parameter\".\"udtCmPzPid\"" + "[" + i + "]." + "\"udtCool\".\"rInjPulseTime\".\"Min\"",
                value: {
                    get: function () {
                        const InjPulseTimeMinNodeId = this.nodeId.value;
                        return new opcua.Variant({ dataType: opcua.DataType.Float, value: serverValues[InjPulseTimeMinNodeId] = 11 });
                    },
                    set: function (variant) {
                        return opcua.StatusCodes.Good;
                    }
                }
            })
            //***********************************************************************************************************/
            //Extruder ==> Expert Settings ==> PID Parameters ==> Cooling Control : "Pause-Set" //
            var rInjMinPauseTimeSet = namespace3.addVariable({
                componentOf: rInjMinPauseTime,
                browseName: "Set",
                dataType: opcua.DataType.Float,
                nodeId: "s=" + "\"ZEEX_3111_Parameter\".\"udtCmPzPid\"" + "[" + i + "]." + "\"udtCool\".\"rInjMinPauseTime\".\"Set\"",
                value: {
                    get: function () {
                        const rInjMinPauseTimeSetNodeId = this.nodeId.value;
                        return new opcua.Variant({ dataType: opcua.DataType.Float, value: serverValues[rInjMinPauseTimeSetNodeId] = 222 });
                    },
                    set: function (variant) {
                        return opcua.StatusCodes.Good;
                    }
                }
            })

            //Extruder ==> Expert Settings ==> PID Parameters ==> Cooling Control : "Pause-max" //
            var rInjMinPauseTimeMax = namespace3.addVariable({
                componentOf: rInjMinPauseTime,
                browseName: "Max",
                dataType: opcua.DataType.Float,
                nodeId: "s=" + "\"ZEEX_3111_Parameter\".\"udtCmPzPid\"" + "[" + i + "]." + "\"udtCool\".\"rInjMinPauseTime\".\"Max\"",
                value: {
                    get: function () {
                        const rInjMinPauseTimeMaxNodeId = this.nodeId.value;
                        return new opcua.Variant({ dataType: opcua.DataType.Float, value: serverValues[rInjMinPauseTimeMaxNodeId] = 7878787 });
                    },
                    set: function (variant) {
                        return opcua.StatusCodes.Good;
                    }
                }
            })

            //***********************************************************************************************************/
            //Extruder ==> Expert Settings ==> PID Parameters ==> Cooling Control : "Pause-Min" //
            var rInjMinPauseTimeMin = namespace3.addVariable({
                componentOf: rInjMinPauseTime,
                browseName: "Min",
                dataType: opcua.DataType.Float,
                nodeId: "s=" + "\"ZEEX_3111_Parameter\".\"udtCmPzPid\"" + "[" + i + "]." + "\"udtCool\".\"rInjMinPauseTime\".\"Min\"",
                value: {
                    get: function () {
                        const rInjMinPauseTimeMinNodeId = this.nodeId.value;
                        return new opcua.Variant({ dataType: opcua.DataType.Float, value: serverValues[rInjMinPauseTimeMinNodeId] = 2323 });
                    },
                    set: function (variant) {
                        return opcua.StatusCodes.Good;
                    }
                }
            })

            //***********************************************************************************************************/
            //Extruder ==> Expert Settings ==> PID Parameters ==> Cooling Control : "Min OnTime-Set" //
            var rPwmMinOnTimeSet = namespace3.addVariable({
                componentOf: rPwmMinOnTimeCool,
                browseName: "Set",
                dataType: opcua.DataType.Float,
                nodeId: "s=" + "\"ZEEX_3111_Parameter\".\"udtCmPzPid\"" + "[" + i + "]." + "\"udtCool\".\"rPwmMinOnTime\".\"Set\"",
                value: {
                    get: function () {
                        const rPwmMinOnTimeSetNodeId = this.nodeId.value;
                        return new opcua.Variant({ dataType: opcua.DataType.Float, value: serverValues[rPwmMinOnTimeSetNodeId] = 3333 });
                    },
                    set: function (variant) {
                        return opcua.StatusCodes.Good;
                    }
                }
            })
            //Extruder ==> Expert Settings ==> PID Parameters ==> Cooling Control : "Min OnTime-Max" //
            var rPwmMinOnTimeMax = namespace3.addVariable({
                componentOf: rPwmMinOnTimeCool,
                browseName: "Max",
                dataType: opcua.DataType.Float,
                nodeId: "s=" + "\"ZEEX_3111_Parameter\".\"udtCmPzPid\"" + "[" + i + "]." + "\"udtCool\".\"rPwmMinOnTime\".\"Max\"",
                value: {
                    get: function () {
                        const rPwmMinOnTimeMaxNodeId = this.nodeId.value;
                        return new opcua.Variant({ dataType: opcua.DataType.Float, value: serverValues[rPwmMinOnTimeMaxNodeId] = 123 });
                    },
                    set: function (variant) {
                        return opcua.StatusCodes.Good;
                    }
                }
            })
            //Extruder ==> Expert Settings ==> PID Parameters ==> Cooling Control : "Min OnTime-Min" //
            var rPwmMinOnTimeMin = namespace3.addVariable({
                componentOf: rPwmMinOnTimeCool,
                browseName: "Min",
                dataType: opcua.DataType.Float,
                nodeId: "s=" + "\"ZEEX_3111_Parameter\".\"udtCmPzPid\"" + "[" + i + "]." + "\"udtCool\".\"rPwmMinOnTime\".\"Min\"",
                value: {
                    get: function () {
                        const rPwmMinOnTimeMinNodeId = this.nodeId.value;
                        return new opcua.Variant({ dataType: opcua.DataType.Float, value: serverValues[rPwmMinOnTimeMinNodeId] = 44 });
                    },
                    set: function (variant) {
                        return opcua.StatusCodes.Good;
                    }
                }
            })
            //***********************************************************************************************************/
            //Extruder ==> Expert Settings ==> PID Parameters ==> Cooling Controll : "Min OffTime-Set" //
            var rPwmMinOffTimeSet = namespace3.addVariable({
                componentOf: rPwmMinOffTimeCool,
                browseName: "Set",
                dataType: opcua.DataType.Float,
                nodeId: "s=" + "\"ZEEX_3111_Parameter\".\"udtCmPzPid\"" + "[" + i + "]." + "\"udtCool\".\"rPwmMinOffTime\".\"Set\"",
                value: {
                    get: function () {
                        const rPwmMinOffTimeSetNodeId = this.nodeId.value;

                        return new opcua.Variant({ dataType: opcua.DataType.Float, value: serverValues[rPwmMinOffTimeSetNodeId] = 65 });
                    },
                    set: function (variant) {

                        return opcua.StatusCodes.Good;
                    }
                }
            })
            //Extruder ==> Expert Settings ==> PID Parameters ==> Cooling Control : "Min OffTime-Max" //
            var rPwmMinOffTimeMax = namespace3.addVariable({
                componentOf: rPwmMinOffTimeCool,
                browseName: "Max",
                dataType: opcua.DataType.Float,
                nodeId: "s=" + "\"ZEEX_3111_Parameter\".\"udtCmPzPid\"" + "[" + i + "]." + "\"udtCool\".\"rPwmMinOffTime\".\"Max\"",
                value: {
                    get: function () {
                        const rPwmMinOffTimeMaxNodeId = this.nodeId.value;
                        return new opcua.Variant({ dataType: opcua.DataType.Float, value: serverValues[rPwmMinOffTimeMaxNodeId] = 8888 });
                    },
                    set: function (variant) {
                        return opcua.StatusCodes.Good;
                    }
                }
            })
            //Extruder ==> Expert Settings ==> PID Parameters ==> Cooling Control : "Min OffTime-Min" //
            var rPwmMinOffTimeMin = namespace3.addVariable({
                componentOf: rPwmMinOffTimeCool,
                browseName: "Min",
                dataType: opcua.DataType.Float,
                nodeId: "s=" + "\"ZEEX_3111_Parameter\".\"udtCmPzPid\"" + "[" + i + "]." + "\"udtCool\".\"rPwmMinOffTime\".\"Min\"",
                value: {
                    get: function () {
                        const rPwmMinOffTimeMinNodeId = this.nodeId.value;
                        return new opcua.Variant({ dataType: opcua.DataType.Float, value: serverValues[rPwmMinOffTimeMinNodeId] = 12 });
                    },
                    set: function (variant) {
                        return opcua.StatusCodes.Good;
                    }
                }
            })
            //***********************************************************************************************************/
            //Extruder ==> Expert Settings ==> PID Parameters ==> Parameter Cool : "rGain-Set" //
            var udtCoolPidrGain = namespace3.addVariable({
                componentOf: udtCoolPid,
                browseName: "rGain",
                dataType: opcua.DataType.Float,
                nodeId: "s=" + "\"ZEEX_3111_Parameter\".\"udtCmPzPid\"" + "[" + i + "]." + "\"udtCool\".\"udtPid\".\"rGain\"",
                value: {
                    get: function () {
                        const udtCoolPidrGainNodeId = this.nodeId.value;
                        return new opcua.Variant({ dataType: opcua.DataType.Float, value: serverValues[udtCoolPidrGainNodeId] = 111111 });
                    },
                    set: function (variant) {
                        return opcua.StatusCodes.Good;
                    }
                }
            })
            //***********************************************************************************************************/
            //Extruder ==> Expert Settings ==> PID Parameters ==> Parameter Cool : "rTi-Set" //
            var udtCoolPidrTi = namespace3.addVariable({
                componentOf: udtCoolPid,
                browseName: "rTi",
                dataType: opcua.DataType.Float,
                nodeId: "s=" + "\"ZEEX_3111_Parameter\".\"udtCmPzPid\"" + "[" + i + "]." + "\"udtCool\".\"udtPid\".\"rTi\"",
                value: {
                    get: function () {
                        const udtCoolPidrTiNodeId = this.nodeId.value;
                        return new opcua.Variant({ dataType: opcua.DataType.Float, value: serverValues[udtCoolPidrTiNodeId] = 1222222222 });
                    },
                    set: function (variant) {
                        return opcua.StatusCodes.Good;
                    }
                }
            })
            //***********************************************************************************************************/
            //Extruder ==> Expert Settings ==> PID Parameters ==> Parameter Cool : "rTd-Set" //
            var udtCoolPidrTd = namespace3.addVariable({
                componentOf: udtCoolPid,
                browseName: "rTd",
                dataType: opcua.DataType.Float,
                nodeId: "s=" + "\"ZEEX_3111_Parameter\".\"udtCmPzPid\"" + "[" + i + "]." + "\"udtCool\".\"udtPid\".\"rTd\"",
                value: {
                    get: function () {
                        const udtCoolPidrTdNodeId = this.nodeId.value;
                        return new opcua.Variant({ dataType: opcua.DataType.Float, value: serverValues[udtCoolPidrTdNodeId] = 1444444 });
                    },
                    set: function (variant) {
                        return opcua.StatusCodes.Good;
                    }
                }
            })
            //***********************************************************************************************************/
            //Extruder ==> Expert Settings ==> PID Parameters ==> Parameter Cool : "rTdFiltRatio-Set" //
            var udtCoolPidrTdFiltRatio = namespace3.addVariable({
                componentOf: udtCoolPid,
                browseName: "rTdFiltRatio",
                dataType: opcua.DataType.Float,
                nodeId: "s=" + "\"ZEEX_3111_Parameter\".\"udtCmPzPid\"" + "[" + i + "]." + "\"udtCool\".\"udtPid\".\"rTdFiltRatio\"",
                value: {
                    get: function () {
                        const udtCoolPidrTdFiltRatioNodeId = this.nodeId.value;
                        return new opcua.Variant({ dataType: opcua.DataType.Float, value: serverValues[udtCoolPidrTdFiltRatioNodeId] = 1555 });
                    },
                    set: function (variant) {
                        return opcua.StatusCodes.Good;
                    }
                }
            })
            //***********************************************************************************************************/
            //Extruder ==> Expert Settings ==> PID Parameters ==> Parameter Cool : "rPWeighting-Set" //
            var udtCoolPidrPWeighting = namespace3.addVariable({
                componentOf: udtCoolPid,
                browseName: "rPWeightingrTdFiltRatio",
                dataType: opcua.DataType.Float,
                nodeId: "s=" + "\"ZEEX_3111_Parameter\".\"udtCmPzPid\"" + "[" + i + "]." + "\"udtCool\".\"udtPid\".\"rPWeighting\"",
                value: {
                    get: function () {
                        const udtCoolPidrPWeightingNodeId = this.nodeId.value;
                        return new opcua.Variant({ dataType: opcua.DataType.Float, value: serverValues[udtCoolPidrPWeightingNodeId] = 1666 });
                    },
                    set: function (variant) {
                        return opcua.StatusCodes.Good;
                    }
                }
            })
            //***********************************************************************************************************/
            //Extruder ==> Expert Settings ==> PID Parameters ==> Parameter Cool : "rDWeighting-Set" //
            var udtCoolPidrDWeighting = namespace3.addVariable({
                componentOf: udtCoolPid,
                browseName: "rDWeighting",
                dataType: opcua.DataType.Float,
                nodeId: "s=" + "\"ZEEX_3111_Parameter\".\"udtCmPzPid\"" + "[" + i + "]." + "\"udtCool\".\"udtPid\".\"rDWeighting\"",
                value: {
                    get: function () {
                        const udtCoolPidrDWeightingNodeId = this.nodeId.value;
                        return new opcua.Variant({ dataType: opcua.DataType.Float, value: serverValues[udtCoolPidrDWeightingNodeId] = 17777 });
                    },
                    set: function (variant) {
                        return opcua.StatusCodes.Good;
                    }
                }
            })
            //***********************************************************************************************************/
            //Extruder ==> Expert Settings ==> PID Parameters ==> Parameter Cool : "rCycle-Set" //
            var udtCoolPidrCycle = namespace3.addVariable({
                componentOf: udtCoolPid,
                browseName: "rCycle",
                dataType: opcua.DataType.Float,
                nodeId: "s=" + "\"ZEEX_3111_Parameter\".\"udtCmPzPid\"" + "[" + i + "]." + "\"udtCool\".\"udtPid\".\"rCycle\"",
                value: {
                    get: function () {
                        const udtCoolPidrCycleNodeId = this.nodeId.value;
                        return new opcua.Variant({ dataType: opcua.DataType.Float, value: serverValues[udtCoolPidrCycleNodeId] = 18888 });
                    },
                    set: function (variant) {
                        return opcua.StatusCodes.Good;
                    }
                }
            })
            //***********************************************************************************************************/
            //Extruder ==> Expert Settings ==> PID Parameters ==> Parameter Cool : "rControllZone-Set" //
            var udtCoolPidrControlZone = namespace3.addVariable({
                componentOf: udtCoolPid,
                browseName: "rControlZone",
                dataType: opcua.DataType.Float,
                nodeId: "s=" + "\"ZEEX_3111_Parameter\".\"udtCmPzPid\"" + "[" + i + "]." + "\"udtCool\".\"udtPid\".\"rControlZone\"",
                value: {
                    get: function () {
                        const udtCoolPidrControlZoneNodeId = this.nodeId.value;
                        return new opcua.Variant({ dataType: opcua.DataType.Float, value: serverValues[udtCoolPidrControlZoneNodeId] = 199999 });
                    },
                    set: function (variant) {
                        return opcua.StatusCodes.Good;
                    }
                }
            })
            //***********************************************************************************************************/
            //Extruder ==> Expert Settings ==> PID Parameters ==> Parameter Cool : "rDeadZone-Set" //
            var udtCoolPidrDeadZone = namespace3.addVariable({
                componentOf: udtCoolPid,
                browseName: "rDeadZone",
                dataType: opcua.DataType.Float,
                nodeId: "s=" + "\"ZEEX_3111_Parameter\".\"udtCmPzPid\"" + "[" + i + "]." + "\"udtCool\".\"udtPid\".\"rDeadZone\"",
                value: {
                    get: function () {
                        const udtCoolPidrDeadZoneNodeId = this.nodeId.value;
                        return new opcua.Variant({ dataType: opcua.DataType.Float, value: serverValues[udtCoolPidrDeadZoneNodeId] = 21111 });
                    },
                    set: function (variant) {
                        return opcua.StatusCodes.Good;
                    }
                }
            })
            //***********************************************************************************************************/
            //Extruder ==> Expert Settings ==> PID Parameters ==> Heating Control : "Min OnTime-Set" //
            var rPwmMinOnTimeSet_heat = namespace3.addVariable({
                componentOf: rPwmMinOnTimeHeat,
                browseName: "Set",
                dataType: opcua.DataType.Float,
                nodeId: "s=" + "\"ZEEX_3111_Parameter\".\"udtCmPzPid\"" + "[" + i + "]." + "\"udtHeat\".\"rPwmMinOnTime\".\"Set\"",
                value: {
                    get: function () {
                        const rPwmMinOnTimeSet_heatNodeId = this.nodeId.value;
                        return new opcua.Variant({ dataType: opcua.DataType.Float, value: serverValues[rPwmMinOnTimeSet_heatNodeId] = 1234 });
                    },
                    set: function (variant) {
                        return opcua.StatusCodes.Good;
                    }
                }
            })
            //Extruder ==> Expert Settings ==> PID Parameters ==> Heating Control : "Min OnTime-Max" //
            var rPwmMinOnTimeMax_heat = namespace3.addVariable({
                componentOf: rPwmMinOnTimeHeat,
                browseName: "Max",
                dataType: opcua.DataType.Float,
                nodeId: "s=" + "\"ZEEX_3111_Parameter\".\"udtCmPzPid\"" + "[" + i + "]." + "\"udtHeat\".\"rPwmMinOnTime\".\"Max\"",
                value: {
                    get: function () {
                        const rPwmMinOnTimeMax_heatNodeId = this.nodeId.value;
                        return new opcua.Variant({ dataType: opcua.DataType.Float, value: serverValues[rPwmMinOnTimeMax_heatNodeId] = 898989 });
                    },
                    set: function (variant) {
                        return opcua.StatusCodes.Good;
                    }
                }
            })
            //Extruder ==> Expert Settings ==> PID Parameters ==> Heating Control : "Min OnTime-Min" //
            var rPwmMinOnTimeMin_heat = namespace3.addVariable({
                componentOf: rPwmMinOnTimeHeat,
                browseName: "Min",
                dataType: opcua.DataType.Float,
                nodeId: "s=" + "\"ZEEX_3111_Parameter\".\"udtCmPzPid\"" + "[" + i + "]." + "\"udtHeat\".\"rPwmMinOnTime\".\"Min\"",
                value: {
                    get: function () {
                        const rPwmMinOnTimeMin_heatNodeId = this.nodeId.value;
                        return new opcua.Variant({ dataType: opcua.DataType.Float, value: serverValues[rPwmMinOnTimeMin_heatNodeId] = 3 });
                    },
                    set: function (variant) {
                        return opcua.StatusCodes.Good;
                    }
                }
            })
            //***********************************************************************************************************/
            //Extruder ==> Expert Settings ==> PID Parameters ==> Heating Control : "Min OffTime-Set" //
            var rPwmMinOffTimeSet_heat = namespace3.addVariable({
                componentOf: rPwmMinOffTimeHeat,
                browseName: "Set",
                dataType: opcua.DataType.Float,
                nodeId: "s=" + "\"ZEEX_3111_Parameter\".\"udtCmPzPid\"" + "[" + i + "]." + "\"udtHeat\".\"rPwmMinOffTime\".\"Set\"",
                value: {
                    get: function () {
                        const rPwmMinOffTimeSet_heatNodeId = this.nodeId.value;
                        return new opcua.Variant({ dataType: opcua.DataType.Float, value: serverValues[rPwmMinOffTimeSet_heatNodeId] = 31111 });
                    },
                    set: function (variant) {
                        return opcua.StatusCodes.Good;
                    }
                }
            })
            //Extruder ==> Expert Settings ==> PID Parameters ==> Heating Control : "Min OffTime-Max" //
            var rPwmMinOffTimeMax_heat = namespace3.addVariable({
                componentOf: rPwmMinOffTimeHeat,
                browseName: "Max",
                dataType: opcua.DataType.Float,
                nodeId: "s=" + "\"ZEEX_3111_Parameter\".\"udtCmPzPid\"" + "[" + i + "]." + "\"udtHeat\".\"rPwmMinOffTime\".\"Max\"",
                value: {
                    get: function () {
                        const rPwmMinOffTimeMax_heatNodeId = this.nodeId.value;
                        return new opcua.Variant({ dataType: opcua.DataType.Float, value: serverValues[rPwmMinOffTimeMax_heatNodeId] = 7777777 });
                    },
                    set: function (variant) {
                        return opcua.StatusCodes.Good;
                    }
                }
            })
            //Extruder ==> Expert Settings ==> PID Parameters ==> Heating Control : "Min OffTime-Min" //
            var rPwmMinOffTimeMin_heat = namespace3.addVariable({
                componentOf: rPwmMinOffTimeHeat,
                browseName: "Min",
                dataType: opcua.DataType.Float,
                nodeId: "s=" + "\"ZEEX_3111_Parameter\".\"udtCmPzPid\"" + "[" + i + "]." + "\"udtHeat\".\"rPwmMinOffTime\".\"Min\"",
                value: {
                    get: function () {
                        const rPwmMinOffTimeMin_heatNodeId = this.nodeId.value;
                        return new opcua.Variant({ dataType: opcua.DataType.Float, value: serverValues[rPwmMinOffTimeMin_heatNodeId] = 456 });
                    },
                    set: function (variant) {
                        return opcua.StatusCodes.Good;
                    }
                }
            })
            //***********************************************************************************************************/
            //Extruder ==> Expert Settings ==> PID Parameters ==> Parameter Heat : "rGain-Set" //
            var udtHeatPidrGain = namespace3.addVariable({
                componentOf: udtHeatPid,
                browseName: "rGain",
                dataType: opcua.DataType.Float,
                nodeId: "s=" + "\"ZEEX_3111_Parameter\".\"udtCmPzPid\"" + "[" + i + "]." + "\"udtHeat\".\"udtPid\".\"rGain\"",
                value: {
                    get: function () {
                        const udtHeatPidrGainNodeId = this.nodeId.value;
                        return new opcua.Variant({ dataType: opcua.DataType.Float, value: serverValues[udtHeatPidrGainNodeId] = 456456456456 });
                    },
                    set: function (variant) {
                        return opcua.StatusCodes.Good;
                    }
                }
            })
            //***********************************************************************************************************/
            //Extruder ==> Expert Settings ==> PID Parameters ==> Parameter Heat : "rTi-Set" //
            var udtHeatPidrTi = namespace3.addVariable({
                componentOf: udtHeatPid,
                browseName: "rTi",
                dataType: opcua.DataType.Float,
                nodeId: "s=" + "\"ZEEX_3111_Parameter\".\"udtCmPzPid\"" + "[" + i + "]." + "\"udtHeat\".\"udtPid\".\"rTi\"",
                value: {
                    get: function () {
                        const udtHeatPidrTiNodeId = this.nodeId.value;
                        return new opcua.Variant({ dataType: opcua.DataType.Float, value: serverValues[udtHeatPidrTiNodeId] = 6666 });
                    },
                    set: function (variant) {
                        return opcua.StatusCodes.Good;
                    }
                }
            })
            //***********************************************************************************************************/
            //Extruder ==> Expert Settings ==> PID Parameters ==> Parameter Heat : "rTd-Set" //
            var udtHeatPidrTd = namespace3.addVariable({
                componentOf: udtHeatPid,
                browseName: "rTd",
                dataType: opcua.DataType.Float,
                nodeId: "s=" + "\"ZEEX_3111_Parameter\".\"udtCmPzPid\"" + "[" + i + "]." + "\"udtHeat\".\"udtPid\".\"rTd\"",
                value: {
                    get: function () {
                        const udtHeatPidrTdNodeId = this.nodeId.value;
                        return new opcua.Variant({ dataType: opcua.DataType.Float, value: serverValues[udtHeatPidrTdNodeId] = 9777 });
                    },
                    set: function (variant) {
                        return opcua.StatusCodes.Good;
                    }
                }
            })
            //***********************************************************************************************************/
            //Extruder ==> Expert Settings ==> PID Parameters ==> Parameter Heat : "rTdFiltRatio-Set" //
            var udtHeatPidrTdFiltRatio = namespace3.addVariable({
                componentOf: udtHeatPid,
                browseName: "rTdFiltRatio",
                dataType: opcua.DataType.Float,
                nodeId: "s=" + "\"ZEEX_3111_Parameter\".\"udtCmPzPid\"" + "[" + i + "]." + "\"udtHeat\".\"udtPid\".\"rTdFiltRatio\"",
                value: {
                    get: function () {
                        const udtHeatPidrTdFiltRatioNodeId = this.nodeId.value;
                        return new opcua.Variant({ dataType: opcua.DataType.Float, value: serverValues[udtHeatPidrTdFiltRatioNodeId] = 3333333 });
                    },
                    set: function (variant) {
                        return opcua.StatusCodes.Good;
                    }
                }
            })
            //***********************************************************************************************************/
            //Extruder ==> Expert Settings ==> PID Parameters ==> Parameter Heat : "rPWeighting-Set" //
            var udtHeatPidrPWeighting = namespace3.addVariable({
                componentOf: udtHeatPid,
                browseName: "rPWeighting",
                dataType: opcua.DataType.Float,
                nodeId: "s=" + "\"ZEEX_3111_Parameter\".\"udtCmPzPid\"" + "[" + i + "]." + "\"udtHeat\".\"udtPid\".\"rPWeighting\"",
                value: {
                    get: function () {
                        const udtHeatPidrPWeightingNodeId = this.nodeId.value;
                        return new opcua.Variant({ dataType: opcua.DataType.Float, value: serverValues[udtHeatPidrPWeightingNodeId] = 45454545 });
                    },
                    set: function (variant) {
                        return opcua.StatusCodes.Good;
                    }
                }
            })
            //***********************************************************************************************************/
            //Extruder ==> Expert Settings ==> PID Parameters ==> Parameter Heat : "rDWeighting-Set" //
            var udtHeatPidrDWeighting = namespace3.addVariable({
                componentOf: udtHeatPid,
                browseName: "rDWeighting",
                dataType: opcua.DataType.Float,
                nodeId: "s=" + "\"ZEEX_3111_Parameter\".\"udtCmPzPid\"" + "[" + i + "]." + "\"udtHeat\".\"udtPid\".\"rDWeighting\"",
                value: {
                    get: function () {
                        const udtHeatPidrDWeightingNodeId = this.nodeId.value;
                        return new opcua.Variant({ dataType: opcua.DataType.Float, value: serverValues[udtHeatPidrDWeightingNodeId] = 66663 });
                    },
                    set: function (variant) {
                        return opcua.StatusCodes.Good;
                    }
                }
            })
            //***********************************************************************************************************/
            //Extruder ==> Expert Settings ==> PID Parameters ==> Parameter Heat : "rCycle-Set" //
            var udtHeatPidrCycle = namespace3.addVariable({
                componentOf: udtHeatPid,
                browseName: "rCycle",
                dataType: opcua.DataType.Float,
                nodeId: "s=" + "\"ZEEX_3111_Parameter\".\"udtCmPzPid\"" + "[" + i + "]." + "\"udtHeat\".\"udtPid\".\"rCycle\"",
                value: {
                    get: function () {
                        const udtHeatPidrCycleNodeId = this.nodeId.value;
                        return new opcua.Variant({ dataType: opcua.DataType.Float, value: serverValues[udtHeatPidrCycleNodeId] = 454875487 });
                    },
                    set: function (variant) {
                        return opcua.StatusCodes.Good;
                    }
                }
            })
            //***********************************************************************************************************/
            //Extruder ==> Expert Settings ==> PID Parameters ==> Parameter Heat : "rControlZone-Set" //
            var udtHeatPidrControlZone = namespace3.addVariable({
                componentOf: udtHeatPid,
                browseName: "rControlZone",
                dataType: opcua.DataType.Float,
                nodeId: "s=" + "\"ZEEX_3111_Parameter\".\"udtCmPzPid\"" + "[" + i + "]." + "\"udtHeat\".\"udtPid\".\"rControlZone\"",
                value: {
                    get: function () {
                        const udtHeatPidrControlZoneNodeId = this.nodeId.value;
                        return new opcua.Variant({ dataType: opcua.DataType.Float, value: serverValues[udtHeatPidrControlZoneNodeId] = 44444777 });
                    },
                    set: function (variant) {
                        return opcua.StatusCodes.Good;
                    }
                }
            })
            //***********************************************************************************************************/
            //Extruder ==> Expert Settings ==> PID Parameters ==> Parameter Heat : "rDeadZone-Set" //
            var udtHeatPidrDeadZone = namespace3.addVariable({
                componentOf: udtHeatPid,
                browseName: "rDeadZone",
                dataType: opcua.DataType.Float,
                nodeId: "s=" + "\"ZEEX_3111_Parameter\".\"udtCmPzPid\"" + "[" + i + "]." + "\"udtHeat\".\"udtPid\".\"rDeadZone\"",
                value: {
                    get: function () {
                        const udtHeatPidrDeadZoneNodeId = this.nodeId.value;
                        return new opcua.Variant({ dataType: opcua.DataType.Float, value: serverValues[udtHeatPidrDeadZoneNodeId] = 555555556 });
                    },
                    set: function (variant) {
                        return opcua.StatusCodes.Good;
                    }
                }
            })
            //***********************************************************************************************************/
            //Extruder ==> Expert Settings ==> PID Parameters ==> Curent Heat : "Windings-Set" //
            var udWindOfCoilSet = namespace3.addVariable({
                componentOf: udWindOfCoil,
                browseName: "Set",
                dataType: opcua.DataType.Float,
                nodeId: "s=" + "\"ZEEX_3111_Config\".\"udtCmPzPid\"" + "[" + i + "]." + "\"udWindOfCoil\".\"Set\"",
                value: {
                    get: function () {
                        const udWindOfCoilSetNodeId = this.nodeId.value;
                        return new opcua.Variant({ dataType: opcua.DataType.Float, value: serverValues[udWindOfCoilSetNodeId] = 2 });
                    },
                    set: function (variant) {
                        return opcua.StatusCodes.Good;
                    }
                }
            })
            //Extruder ==> Expert Settings ==> PID Parameters ==> Curent Heat : "Windings-Max" //
            var udWindOfCoilMax = namespace3.addVariable({
                componentOf: udWindOfCoil,
                browseName: "Max",
                dataType: opcua.DataType.Float,
                nodeId: "s=" + "\"ZEEX_3111_Config\".\"udtCmPzPid\"" + "[" + i + "]." + "\"udWindOfCoil\".\"Max\"",
                value: {
                    get: function () {
                        const udWindOfCoilMaxNodeId = this.nodeId.value;
                        return new opcua.Variant({ dataType: opcua.DataType.Float, value: serverValues[udWindOfCoilMaxNodeId] = 10 });
                    },
                    set: function (variant) {
                        return opcua.StatusCodes.Good;
                    }
                }
            })
            //Extruder ==> Expert Settings ==> PID Parameters ==> Curent Heat : "Windings-Min" //
            var udWindOfCoilMin = namespace3.addVariable({
                componentOf: udWindOfCoil,
                browseName: "Min",
                dataType: opcua.DataType.Float,
                nodeId: "s=" + "\"ZEEX_3111_Config\".\"udtCmPzPid\"" + "[" + i + "]." + "\"udWindOfCoil\".\"Min\"",
                value: {
                    get: function () {
                        const udWindOfCoilMinNodeId = this.nodeId.value;
                        return new opcua.Variant({ dataType: opcua.DataType.Float, value: serverValues[udWindOfCoilMinNodeId] = 1 });
                    },
                    set: function (variant) {
                        return opcua.StatusCodes.Good;
                    }
                }
            })
            //***********************************************************************************************************/
            //Extruder ==> Expert Settings ==> PID Parameters ==> Curent Heat : "Act" //
            var rActHeatCurrent = namespace3.addVariable({
                componentOf: nr3,
                browseName: "rActHeatCurrent",
                dataType: opcua.DataType.Float,
                nodeId: "s=" + "\"ZEEX_3111_Hmi\".\"udtCmPzPid\"" + "[" + i + "]." + "\"rActHeatCurrent\"",
                value: {
                    get: function () {
                        const rActCurrentNodeId = this.nodeId.value;
                        return new opcua.Variant({ dataType: opcua.DataType.Float, value: serverValues[rActCurrentNodeId] = 1.5 });
                    },
                    set: function (variant) {
                        return opcua.StatusCodes.Good;
                    }
                }
            })
            //***********************************************************************************************************/
            //Extruder ==> Expert Settings ==> PID Parameters ==> Curent Heat : "Min" //
            var rMinCurrent = namespace3.addVariable({
                componentOf: nr3,
                browseName: "rActMaxHeatCurrent",
                dataType: opcua.DataType.Float,
                nodeId: "s=" + "\"ZEEX_3111_Hmi\".\"udtCmPzPid\"" + "[" + i + "]." + "\"rMinHeatCurrent\"",
                value: {
                    get: function () {
                        const rMinCurrentNodeId = this.nodeId.value;
                        return new opcua.Variant({ dataType: opcua.DataType.Float, value: serverValues[rMinCurrentNodeId] = 1 });
                    },
                    set: function (variant) {
                        return opcua.StatusCodes.Good;
                    }
                }
            })
            //***********************************************************************************************************/
            //Extruder ==> Expert Settings ==> PID Parameters ==> Curent Heat : "Max" //
            var rMaxCurrent = namespace3.addVariable({
                componentOf: nr3,
                browseName: "rActMaxHeatCurrent",
                dataType: opcua.DataType.Float,
                nodeId: "s=" + "\"ZEEX_3111_Hmi\".\"udtCmPzPid\"" + "[" + i + "]." + "\"rMaxHeatCurrent\"",
                value: {
                    get: function () {
                        const rMaxCurrentNodeId = this.nodeId.value;
                        return new opcua.Variant({ dataType: opcua.DataType.Float, value: serverValues[rMaxCurrentNodeId] = 2 });
                    },
                    set: function (variant) {
                        return opcua.StatusCodes.Good;
                    }
                }
            })
            //***********************************************************************************************************/
            //Extruder ==> Expert Settings ==> PID Parameters ==> Current Heat: "Nominal-Set" //
            var rCurrSetSet = namespace3.addVariable({
                componentOf: rCurrSet,
                browseName: "Set",
                dataType: opcua.DataType.Double,
                nodeId: "s=" + "\"ZEEX_3111_Parameter\".\"udtCmPzPid\"" + "[" + i + "]." + "\"udtHeat\".\"rCurrSet\".\"Set\"",
                value: {
                    get: function () {
                        const rCurrSetSetNodeId = this.nodeId.value;
                        return new opcua.Variant({ dataType: opcua.DataType.Double, value: serverValues[rCurrSetSetNodeId] = 1.2 });
                    },
                    set: function (variant) {
                        return opcua.StatusCodes.Good;
                    }
                }
            })
            //Extruder ==> Expert Settings ==> PID Parameters ==> Current Heat: "Nominal-Max" //
            var rCurrSetSetMax = namespace3.addVariable({
                componentOf: rCurrSet,
                browseName: "Max",
                dataType: opcua.DataType.Double,
                nodeId: "s=" + "\"ZEEX_3111_Parameter\".\"udtCmPzPid\"" + "[" + i + "]." + "\"udtHeat\".\"rCurrSet\".\"Max\"",
                value: {
                    get: function () {
                        const rCurrSetSetMaxNodeId = this.nodeId.value;
                        return new opcua.Variant({ dataType: opcua.DataType.Double, value: serverValues[rCurrSetSetMaxNodeId] = 1.2 });
                    },
                    set: function (variant) {
                        return opcua.StatusCodes.Good;
                    }
                }
            })
            //Extruder ==> Expert Settings ==> PID Parameters ==> Current Heat: "Nominal-Min" //
            var rCurrSetSetMin = namespace3.addVariable({
                componentOf: rCurrSet,
                browseName: "Min",
                dataType: opcua.DataType.Double,
                nodeId: "s=" + "\"ZEEX_3111_Parameter\".\"udtCmPzPid\"" + "[" + i + "]." + "\"udtHeat\".\"rCurrSet\".\"Min\"",
                value: {
                    get: function () {
                        const rCurrSetSetMinNodeId = this.nodeId.value;
                        return new opcua.Variant({ dataType: opcua.DataType.Double, value: serverValues[rCurrSetSetMinNodeId] = 1.2 });
                    },
                    set: function (variant) {
                        return opcua.StatusCodes.Good;
                    }
                }
            })
            //***********************************************************************************************************/
            //Extruder ==> Expert Settings ==> PID Parameters ==> Current Heat: "Tolerance-Set" //
            var rCurrTolSet = namespace3.addVariable({
                componentOf: rCurrSet,
                browseName: "Set",
                dataType: opcua.DataType.Double,
                nodeId: "s=" + "\"ZEEX_3111_Parameter\".\"udtCmPzPid\"" + "[" + i + "]." + "\"udtHeat\".\"rCurrTol\".\"Set\"",
                value: {
                    get: function () {
                        const rCurrTolSetNodeId = this.nodeId.value;
                        return new opcua.Variant({ dataType: opcua.DataType.Double, value: serverValues[rCurrTolSetNodeId] = 1.2 });
                    },
                    set: function (variant) {
                        return opcua.StatusCodes.Good;
                    }
                }
            })
            //Extruder ==> Expert Settings ==> PID Parameters ==> Current Heat: "Tolerance-Max" //
            var rCurrTolSetMax = namespace3.addVariable({
                componentOf: rCurrSet,
                browseName: "Max",
                dataType: opcua.DataType.Double,
                nodeId: "s=" + "\"ZEEX_3111_Parameter\".\"udtCmPzPid\"" + "[" + i + "]." + "\"udtHeat\".\"rCurrTol\".\"Max\"",
                value: {
                    get: function () {
                        const rCurrSetSetMaxNodeId = this.nodeId.value;
                        return new opcua.Variant({ dataType: opcua.DataType.Double, value: serverValues[rCurrSetSetMaxNodeId] = 1.2 });
                    },
                    set: function (variant) {
                        return opcua.StatusCodes.Good;
                    }
                }
            })
            //Extruder ==> Expert Settings ==> PID Parameters ==> Current Heat: "Tolerance-Min" //
            var rCurrTolSetMin = namespace3.addVariable({
                componentOf: rCurrSet,
                browseName: "Min",
                dataType: opcua.DataType.Double,
                nodeId: "s=" + "\"ZEEX_3111_Parameter\".\"udtCmPzPid\"" + "[" + i + "]." + "\"udtHeat\".\"rCurrTol\".\"Min\"",
                value: {
                    get: function () {
                        const rCurrTolSetMinNodeId = this.nodeId.value;
                        return new opcua.Variant({ dataType: opcua.DataType.Double, value: serverValues[rCurrTolSetMinNodeId] = 1.2 });
                    },
                    set: function (variant) {
                        return opcua.StatusCodes.Good;
                    }
                }
            })
            //***********************************************************************************************************/
            //***********************************************************************************************************/
            //***********************************************************************************************************/
            //***********************************************************************************************************/
        }
    }
}