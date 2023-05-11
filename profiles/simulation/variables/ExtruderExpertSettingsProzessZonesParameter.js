const { adjustNamespaceArray } = require('node-opcua');
const initial = require('./../../../funktionen');
module.exports = {

    run: function (addressSpace, device, opcua, verbose, serverValues,) {
        var namespace3 = addressSpace.getNamespace('http://mynamespace-3/UA/');
        const ZEEX_3111_Parameter = addressSpace.findNode("ns=3;s=\"ZEEX_3111_Parameter\"");

        var udtEmPz = namespace3.addVariable({
            componentOf: ZEEX_3111_Parameter,
            browseName: "udtEmPz",
            dataType: opcua.DataType.Double,
            nodeId: "s=" + "\"ZEEX_3111_Parameter\".\"udtEmPz\"",
        });




        for (let i = 0; i < 14; i++) {

            const rPzTemp = addressSpace.findNode("ns=3;s=\"ZEEX_3111_Hmi\".\"udtEmPz\"" + "[" + i + "]." + "\"rPzTemp\"");
            //  const nr = addressSpace.findNode("s=" + "\"ZEEX_3111_Parameter\".\"udtCmPzPid\"" + "[" + i + "]",);
            // const ZEEX_3111_Parameter = addressSpace.findNode("ns=3;s=\"ZEEX_3111_Parameter\".\"udtCmPzPid\"" + "[" + i + "]",);

            var nr = namespace3.addVariable({
                componentOf: udtEmPz,
                browseName: i.toString(),
                dataType: opcua.DataType.Double,
                nodeId: "s=" + "\"ZEEX_3111_Parameter\".\"udtEmPz\"" + "[" + i + "]",
            })


            var rTempH = namespace3.addVariable({
                componentOf: nr,
                browseName: "rTempH (Warning H)",
                dataType: opcua.DataType.Float,
                nodeId: "ns=3;s=" + "\"ZEEX_3111_Parameter\".\"udtEmPz\"" + "[" + i + "]" + ".\"rTempH\"",

            })




            //***********************************************************************************************************/
            //***********************************************************************************************************/
            //***********************************************************************************************************/
            //***********************************************************************************************************/

            //Extruder ==> Expert Settings ==> Prozess Zones/Parameter ==> Limits:"Warning H-Set" //
            // Warning H setten beeinflusst den max numpad Wert von op max, den Max Wert beim Numpad Setten Bereich Plastification
            var rTempHSet = namespace3.addVariable({
                componentOf: rTempH,
                browseName: "Set",
                dataType: opcua.DataType.Float,
                nodeId: "ns=3;s=" + "\"ZEEX_3111_Parameter\".\"udtEmPz\"" + "[" + i + "]" + ".\"rTempH\".\"Set\"",
                value: {
                    get: function () {
                        const WarningHNodeId = this.nodeId.value;
                        initial.rTempHSet(i, WarningHNodeId, serverValues);
                        return new opcua.Variant({ dataType: opcua.DataType.Float, value: serverValues[WarningHNodeId] });
                    },
                    set: function (variant) {
                        const WarningHNodeId = this.nodeId.value;

                        serverValues[WarningHNodeId] = parseFloat(variant.value);

                        console.log(`Setter-Funktion aufgerufen für WarningH mit nodeId "${WarningHNodeId}": ${serverValues[WarningHNodeId]}`);
                        console.log(`------------------------------------`);
                        const neueNodeIdAlarmHHMin = WarningHNodeId.replace("Set", "Min");
                        //Replace Funktion wurde hier zwei mal angewendet, zuerst Set durch min tauschen und dann rTempTolH auf rTempTolHH
                        const AlarmHHMinNodeId = neueNodeIdAlarmHHMin.replace("rTempH", "rTempHH");
                        serverValues[AlarmHHMinNodeId] = serverValues[WarningHNodeId];

                        console.log(`AlarmHHMin nodeId:${AlarmHHMinNodeId}\nAlarmHHMin Wert: ${serverValues[AlarmHHMinNodeId]}\n`);
                        // serverValues[rActNodeId] = serverValues[rSetNodeId];

                        const rOpMaxNodeId = WarningHNodeId.replace("ZEEX_3111_Parameter", "ZEEX_3111_Hmi")
                            .replace("rTempH", "rPzTemp")
                            .replace("Set", "rOpMax");

                        serverValues[rOpMaxNodeId] = serverValues[WarningHNodeId];

                        console.log(`rOpMax nodeId: ${rOpMaxNodeId}`);
                        console.log(`serverValues[${rOpMaxNodeId}]: ${serverValues[rOpMaxNodeId]}`);
                        return opcua.StatusCodes.Good;
                    }
                }
            })
            //Extruder ==> Expert Settings ==> Prozess Zones/Parameter ==> Limits:"Warning H-Max" //
            var rTempHMax = namespace3.addVariable({
                componentOf: rTempH,
                browseName: "Max",
                dataType: opcua.DataType.Float,
                nodeId: "ns=3;s=" + "\"ZEEX_3111_Parameter\".\"udtEmPz\"" + "[" + i + "]" + ".\"rTempH\".\"Max\"",
                value: {
                    get: function () {
                        const WarningHMaxNodeId = this.nodeId.value;
                        return new opcua.Variant({ dataType: opcua.DataType.Float, value: serverValues[WarningHMaxNodeId] = 1000 });
                        // Der Wert für Warning H max im numpad ist konstant und liegt bei 1000
                    },
                    set: function (variant) {
                        return opcua.StatusCodes.Good;
                    }
                }
            })
            //Extruder ==> Expert Settings ==> Prozess Zones/Parameter ==> Limits:"Warning H-Min" //
            var rTempHMin = namespace3.addVariable({
                componentOf: rTempH,
                browseName: "Min",
                dataType: opcua.DataType.Float,
                nodeId: "ns=3;s=" + "\"ZEEX_3111_Parameter\".\"udtEmPz\"" + "[" + i + "]" + ".\"rTempH\".\"Min\"",
                value: {
                    get: function () {
                        const WarningHMinNodeId = this.nodeId.value;
                        return new opcua.Variant({ dataType: opcua.DataType.Float, value: serverValues[WarningHMinNodeId] = 0 });
                        // Der Wert für Warning H min im numpad ist konstant und liegt bei 0
                    },
                    set: function (variant) {
                        return opcua.StatusCodes.Good;
                    }
                }
            })
            //***********************************************************************************************************/
            //Extruder ==> Expert Settings ==> Prozess Zones/Parameter ==> Limits:"Alarm HH" //
            var rTempHH = namespace3.addVariable({
                componentOf: nr,
                browseName: "rTempHH (AlarmHH)",
                dataType: opcua.DataType.Float,
                nodeId: "ns=3;s=" + "\"ZEEX_3111_Parameter\".\"udtEmPz\"" + "[" + i + "]" + "\"rTempHH\"",

            })
            //Extruder ==> Expert Settings ==> Prozess Zones/Parameter ==> Limits:"Alarm HH-Set" //
            var rTempHHSet = namespace3.addVariable({
                componentOf: rTempHH,
                browseName: "Set",
                dataType: opcua.DataType.Float,
                nodeId: "ns=3;s=" + "\"ZEEX_3111_Parameter\".\"udtEmPz\"" + "[" + i + "]" + ".\"rTempHH\".\"Set\"",
                value: {
                    get: function () {
                        const AlarmHHNodeId = this.nodeId.value;
                        initial.rTempHHSet(i, AlarmHHNodeId, serverValues);

                        const AlarmHHValue = serverValues[AlarmHHNodeId];
                        const WarningHNodeId = AlarmHHNodeId.replace(".\"Set\"", ".\"Min\"");
                        const WarningHValue = serverValues[WarningHNodeId];

                        if (AlarmHHValue < WarningHValue) {
                            serverValues[AlarmHHNodeId] = WarningHValue;
                            console.log(`Setter-Funktion aufgerufen für AlarmHH mit nodeId "${AlarmHHNodeId}": ${serverValues[AlarmHHNodeId]}`);
                            console.log(`------------------------------------`);
                            console.log(`AlarmHH wurde automatisch auf den Wert von Warning gesetzt: ${serverValues[WarningHNodeId]}\n`);
                        }
                        return new opcua.Variant({ dataType: opcua.DataType.Float, value: serverValues[AlarmHHNodeId] });
                    },
                    set: function (variant) {

                        const AlarmHHNodeId = this.nodeId.value;
                        serverValues[AlarmHHNodeId] = parseFloat(variant.value);
                        return opcua.StatusCodes.Good;
                    }
                }
            })
            //Extruder ==> Expert Settings ==> Prozess Zones/Parameter ==> Limits:"Alarm HH-Max" //
            var rTempHHMax = namespace3.addVariable({
                componentOf: rTempHH,
                browseName: "Max",
                dataType: opcua.DataType.Float,
                nodeId: "ns=3;s=" + "\"ZEEX_3111_Parameter\".\"udtEmPz\"" + "[" + i + "]" + ".\"rTempHH\".\"Max\"",
                value: {
                    get: function () {
                        const AlarmHHMaxNodeId = this.nodeId.value;

                        return new opcua.Variant({ dataType: opcua.DataType.Float, value: serverValues[AlarmHHMaxNodeId] = 1000 });
                        // Der Wert für AlarmHH max im numpad ist konstant und liegt bei 1000
                    },
                    set: function (variant) {
                        return opcua.StatusCodes.Good;
                    }
                }
            })
            //Extruder ==> Expert Settings ==> Prozess Zones/Parameter ==> Limits:"Alarm HH-Min" //
            var AlarmHHMin = namespace3.addVariable({
                componentOf: rTempHH,
                browseName: "Min",
                dataType: opcua.DataType.Float,
                nodeId: "ns=3;s=" + "\"ZEEX_3111_Parameter\".\"udtEmPz\"" + "[" + i + "]" + ".\"rTempHH\".\"Min\"",
                value: {
                    get: function () {
                        const AlarmHHMinNodeId = this.nodeId.value;
                        return new opcua.Variant({ dataType: opcua.DataType.Float, value: serverValues[AlarmHHMinNodeId] });
                    },
                    set: function (variant) {
                        return opcua.StatusCodes.Good;
                    }
                }
            })
            //***********************************************************************************************************/
            //Extruder ==> Expert Settings ==> Prozess Zones/Parameter ==> Limits:"Tolerance H" //
            var rSetTolH = namespace3.addVariable({
                componentOf: nr,
                browseName: "rSetTolH",
                dataType: opcua.DataType.Float,
                nodeId: "ns=3;s=" + "\"ZEEX_3111_Parameter\".\"udtEmPz\"" + "[" + i + "]" + ".\"rTempTolH\"",
            })
            //Extruder ==> Expert Settings ==> Prozess Zones/Parameter ==> Limits:"Tolerance H-Set" //
            var rSetTolHSet = namespace3.addVariable({
                componentOf: rSetTolH,
                browseName: "Set",
                dataType: opcua.DataType.Float,
                nodeId: "ns=3;s=" + "\"ZEEX_3111_Parameter\".\"udtEmPz\"" + "[" + i + "]" + ".\"rTempTolH\".\"Set\"",
                value: {
                    get: function () {
                        const rSetTolHSetNodeId = this.nodeId.value;
                        initial.rSetTolHSet(i, rSetTolHSetNodeId, serverValues);
                        return new opcua.Variant({ dataType: opcua.DataType.Float, value: serverValues[rSetTolHSetNodeId] });
                    },
                    set: function (variant) {
                        const rSetTolHNodeId = this.nodeId.value;

                        serverValues[rSetTolHNodeId] = parseFloat(variant.value);

                        console.log(`Setter-Funktion aufgerufen für rSetTolH (Tolerance) mit nodeId "${rSetTolHNodeId}": ${serverValues[rSetTolHNodeId]}`);
                        console.log(`------------------------------------`);
                        const neueNodeId = rSetTolHNodeId.replace("Set", "Min");
                        //Replace Funktion wurde hier zwei mal angewendet, zuerst Set durch min tauschen und dann rTempTolH auf rTempTolHH
                        const rSetTolHHMinNodeId = neueNodeId.replace("rTempTolH", "rTempTolHH");
                        serverValues[rSetTolHHMinNodeId] = serverValues[rSetTolHNodeId]
                        console.log(`rSetTolHHMin nodeId:${rSetTolHHMinNodeId}\nrSetTolHHMin Wert: ${serverValues[rSetTolHHMinNodeId]}\n`);

                        // serverValues[rActNodeId] = serverValues[rSetNodeId];


                        return opcua.StatusCodes.Good;

                    }
                }
            })
            //Extruder ==> Expert Settings ==> Prozess Zones/Parameter ==> Limits:"Tolerance H-Max" //
            var rSetTolHMax = namespace3.addVariable({
                componentOf: rSetTolH,
                browseName: "Max",
                dataType: opcua.DataType.Float,
                nodeId: "ns=3;s=" + "\"ZEEX_3111_Parameter\".\"udtEmPz\"" + "[" + i + "]" + ".\"rTempTolH\".\"Max\"",
                value: {
                    get: function () {
                        const rSetTolHMaxNodeId = this.nodeId.value;
                        initial.rSetTolHMax(i, rSetTolHMaxNodeId, serverValues);
                        return new opcua.Variant({ dataType: opcua.DataType.Float, value: serverValues[rSetTolHMaxNodeId] });
                        //Der Wert für H max numpad ist konstant bei 10
                    },
                    set: function (variant) {
                        return opcua.StatusCodes.Good;
                    }
                }
            })
            //Extruder ==> Expert Settings ==> Prozess Zones/Parameter ==> Limits:"Tolerance H-Min" //
            var rSetTolHMin = namespace3.addVariable({
                componentOf: rSetTolH,
                browseName: "Min",
                dataType: opcua.DataType.Float,
                nodeId: "ns=3;s=" + "\"ZEEX_3111_Parameter\".\"udtEmPz\"" + "[" + i + "]" + ".\"rTempTolH\".\"Min\"",
                value: {
                    get: function () {
                        const rSetTolHMinNodeId = this.nodeId.value;
                        initial.rSetTolHMin(i, rSetTolHMinNodeId, serverValues);
                        return new opcua.Variant({ dataType: opcua.DataType.Float, value: serverValues[rSetTolHMinNodeId] });
                    },
                    set: function (variant) {
                        return opcua.StatusCodes.Good;
                    }
                }
            })
            //***********************************************************************************************************/
            //Extruder ==> Expert Settings ==> Prozess Zones/Parameter ==> Limits:"Tolerance HH" //
            var rSetTolHH = namespace3.addVariable({
                componentOf: nr,
                browseName: "rSetTolHH",
                dataType: opcua.DataType.Float,
                nodeId: "ns=3;s=" + "\"ZEEX_3111_Parameter\".\"udtEmPz\"" + "[" + i + "]" + ".\"rTempTolHH\"",
            })
            //Extruder ==> Expert Settings ==> Prozess Zones/Parameter ==> Limits:"Tolerance HH-Set" //



            var rSetTolHHSet = namespace3.addVariable({
                componentOf: rSetTolHH,
                browseName: "Set",
                dataType: opcua.DataType.Float,
                nodeId: "ns=3;s=" + "\"ZEEX_3111_Parameter\".\"udtEmPz\"" + "[" + i + "]" + ".\"rTempTolHH\".\"Set\"",
                value: {
                    get: function () {
                        const rSetTolHHNodeId = this.nodeId.value;

                        initial.rSetTolHHSet(i, rSetTolHHNodeId, serverValues);

                        const rSetTolHHValue = serverValues[rSetTolHHNodeId];
                        const rSetTolHNodeId = rSetTolHHNodeId.replace(".\"Set\"", ".\"Min\"");
                        const rSetTolHValue = serverValues[rSetTolHNodeId];

                        if (rSetTolHHValue < rSetTolHValue) {
                            serverValues[rSetTolHHNodeId] = rSetTolHValue;
                            console.log(`Setter-Funktion aufgerufen für rSetTolHH (Tolerance) mit nodeId "${rSetTolHHNodeId}": ${serverValues[rSetTolHHNodeId]}`);
                            console.log(`------------------------------------`);
                            console.log(`rSetTolHH wurde automatisch auf den Wert von rSetTolH gesetzt: ${serverValues[rSetTolHHNodeId]}\n`);
                        }
                        return new opcua.Variant({ dataType: opcua.DataType.Float, value: serverValues[rSetTolHHNodeId] });
                    },
                    set: function (variant) {

                        const rSetTolHHNodeId = this.nodeId.value;
                        serverValues[rSetTolHHNodeId] = parseFloat(variant.value);
                        console.log(`Setter-Funktion aufgerufen für rSetTolHH (Tolerance) mit nodeId "${rSetTolHHNodeId}": ${serverValues[rSetTolHHNodeId]}`);
                        console.log(`------------------------------------`);

                        return opcua.StatusCodes.Good;
                    }
                }
            })
            //Extruder ==> Expert Settings ==> Prozess Zones/Parameter ==> Limits:"Tolerance HH-Max" //
            var rSetTolHHMax = namespace3.addVariable({
                componentOf: rSetTolHH,
                browseName: "Max",
                dataType: opcua.DataType.Float,
                nodeId: "ns=3;s=" + "\"ZEEX_3111_Parameter\".\"udtEmPz\"" + "[" + i + "]" + ".\"rTempTolHH\".\"Max\"",
                value: {
                    get: function () {
                        const rSetTolHHMaxNodeId = this.nodeId.value;
                        initial.rSetTolHHMax(i, rSetTolHHMax, serverValues);
                        return new opcua.Variant({ dataType: opcua.DataType.Float, value: serverValues[rSetTolHHMaxNodeId] });
                        //Der Wert für HH max numpad ist konstant und liegt bei 20
                    },
                    set: function (variant) {
                        return opcua.StatusCodes.Good;
                    }
                }
            })
            //Extruder ==> Expert Settings ==> Prozess Zones/Parameter ==> Limits:"Tolerance HH-Max" //
            var rSetTolHHMin = namespace3.addVariable({
                componentOf: rSetTolHH,
                browseName: "Min",
                dataType: opcua.DataType.Float,
                nodeId: "ns=3;s=" + "\"ZEEX_3111_Parameter\".\"udtEmPz\"" + "[" + i + "]" + ".\"rTempTolHH\".\"Min\"",
                value: {
                    get: function () {
                        const rSetTolHNodeId = this.nodeId.value;
                        initial.rSetTolHHMin(i, rSetTolHHMin, serverValues);
                        return new opcua.Variant({ dataType: opcua.DataType.Float, value: serverValues[rSetTolHNodeId] });
                    },
                    set: function (variant) {
                        return opcua.StatusCodes.Good;
                    }
                }
            })
            //***********************************************************************************************************/
            //Extruder ==> Expert Settings ==> Prozess Zones/Parameter ==> Parameter:"Temp. Cool Down" //
            var rTempCooldown = namespace3.addVariable({
                componentOf: nr,
                browseName: "rTempCooldown",
                dataType: opcua.DataType.Float,
                nodeId: "ns=3;s=" + "\"ZEEX_3111_Parameter\".\"udtEmPz\"" + "[" + i + "]" + ".\"rTempCooldown\"",
            })




            //Extruder ==> Expert Settings ==> Prozess Zones/Parameter ==> Parameter:"Temp. Cool Down-Set" //
            var rTempCooldownSet = namespace3.addVariable({
                componentOf: rTempCooldown,
                browseName: "Set",
                dataType: opcua.DataType.Float,
                nodeId: "ns=3;s=" + "\"ZEEX_3111_Parameter\".\"udtEmPz\"" + "[" + i + "]" + ".\"rTempCooldown\".\"Set\"",
                value: {
                    get: function () {
                        const rTempCooldownNodeId = this.nodeId.value;
                        initial.rTempCooldownSet(i, rTempCooldownNodeId, serverValues);
                        return new opcua.Variant({ dataType: opcua.DataType.Float, value: serverValues[rTempCooldownNodeId] });
                    },
                    set: function (variant) {
                        return opcua.StatusCodes.Good;
                    }
                }
            })
            //Extruder ==> Expert Settings ==> Prozess Zones/Parameter ==> Parameter:"Temp. Cool Down-Max" //
            var rTempCooldownMax = namespace3.addVariable({
                componentOf: rTempCooldown,
                browseName: "Max",
                dataType: opcua.DataType.Float,
                nodeId: "ns=3;s=" + "\"ZEEX_3111_Parameter\".\"udtEmPz\"" + "[" + i + "]" + ".\"rTempCooldown\".\"Max\"",
                value: {
                    get: function () {
                        const rTempCooldownMaxNodeId = this.nodeId.value;
                        initial.rTempCooldownMax(i, rTempCooldownMaxNodeId, serverValues);
                        return new opcua.Variant({ dataType: opcua.DataType.Float, value: serverValues[rTempCooldownMaxNodeId] });
                    },
                    set: function (variant) {
                        return opcua.StatusCodes.Good;
                    }
                }
            })
            //Extruder ==> Expert Settings ==> Prozess Zones/Parameter ==> Parameter:"Temp. Cool Down-Min" //
            var rTempCooldownMin = namespace3.addVariable({
                componentOf: rTempCooldown,
                browseName: "Min",
                dataType: opcua.DataType.Float,
                nodeId: "ns=3;s=" + "\"ZEEX_3111_Parameter\".\"udtEmPz\"" + "[" + i + "]" + ".\"rTempCooldown\".\"Min\"",
                value: {
                    get: function () {
                        const rTempCooldownMinNodeId = this.nodeId.value;
                        initial.rTempCooldownMin(i, rTempCooldownMinNodeId, serverValues);
                        return new opcua.Variant({ dataType: opcua.DataType.Float, value: serverValues[rTempCooldownMinNodeId] });
                    },
                    set: function (variant) {
                        return opcua.StatusCodes.Good;
                    }
                }
            })
            //*******************************************************************************************
            //Extruder ==> Expert Settings ==> Prozess Zones/Parameter ==> Parameter:"Temp. Ramp Factor" //
            var rTempRampFactor = namespace3.addVariable({
                componentOf: nr,
                browseName: "rTempRampFactor",
                dataType: opcua.DataType.Float,
                nodeId: "ns=3;s=" + "\"ZEEX_3111_Parameter\".\"udtEmPz\"" + "[" + i + "]" + ".\"rTempRampFactor\"",

            })
            //Extruder ==> Expert Settings ==> Prozess Zones/Parameter ==> Parameter:"Temp. Ramp Factor-Set" //
            var rTempRampFactorSet = namespace3.addVariable({
                componentOf: rTempRampFactor,
                browseName: "Set",
                dataType: opcua.DataType.Float,
                nodeId: "ns=3;s=" + "\"ZEEX_3111_Parameter\".\"udtEmPz\"" + "[" + i + "]" + ".\"rTempRampFactor\".\"Set\"",
                value: {
                    get: function () {
                        const rTempRampFactorSetNodeId = this.nodeId.value;
                        initial.rTempRampFactorSet(i, rTempRampFactorSetNodeId, serverValues);
                        return new opcua.Variant({ dataType: opcua.DataType.Float, value: serverValues[rTempRampFactorSetNodeId] });
                    },
                    set: function (variant) {
                        return opcua.StatusCodes.Good;
                    }
                }
            })
            //Extruder ==> Expert Settings ==> Prozess Zones/Parameter ==> Parameter:"Temp. Ramp Factor-Max" //
            var rTempRampFactorMax = namespace3.addVariable({
                componentOf: rTempRampFactor,
                browseName: "Max",
                dataType: opcua.DataType.Float,
                nodeId: "ns=3;s=" + "\"ZEEX_3111_Parameter\".\"udtEmPz\"" + "[" + i + "]" + ".\"rTempRampFactor\".\"Max\"",
                value: {
                    get: function () {
                        const rTempRampFactorMaxNodeId = this.nodeId.value;
                        initial.rTempRampFactorMax(i, rTempRampFactorMaxNodeId, serverValues);
                        return new opcua.Variant({ dataType: opcua.DataType.Float, value: serverValues[rTempRampFactorMaxNodeId] });
                    },
                    set: function (variant) {
                        return opcua.StatusCodes.Good;
                    }
                }
            })
            //Extruder ==> Expert Settings ==> Prozess Zones/Parameter ==> Parameter:"Temp. Ramp Factor-Min" //
            var rTempRampFactorMin = namespace3.addVariable({
                componentOf: rTempRampFactor,
                browseName: "Min",
                dataType: opcua.DataType.Float,
                nodeId: "ns=3;s=" + "\"ZEEX_3111_Parameter\".\"udtEmPz\"" + "[" + i + "]" + ".\"rTempRampFactor\".\"Min\"",
                value: {
                    get: function () {
                        const rTempRampFactorMinNodeId = this.nodeId.value;
                        initial.rTempRampFactorMin(i, rTempRampFactorMinNodeId, serverValues);
                        return new opcua.Variant({ dataType: opcua.DataType.Float, value: serverValues[rTempRampFactorMinNodeId] });
                    },
                    set: function (variant) {
                        return opcua.StatusCodes.Good;
                    }
                }
            })
            //*******************************************************************************************
            //Extruder ==> Expert Settings ==> Prozess Zones/Parameter ==> Parameter:"Temp. Heatup" //
            var rTempHeatup = namespace3.addVariable({
                componentOf: nr,
                browseName: "rTempHeatup",
                dataType: opcua.DataType.Float,
                nodeId: "ns=3;s=" + "\"ZEEX_3111_Parameter\".\"udtEmPz\"" + "[" + i + "]" + ".\"rTempHeatup\"",
            })




            //Extruder ==> Expert Settings ==> Prozess Zones/Parameter ==> Parameter:"Temp. Heatup-Set" //
            var rTempHeatupSet = namespace3.addVariable({
                componentOf: rTempHeatup,
                browseName: "Set",
                dataType: opcua.DataType.Float,
                nodeId: "ns=3;s=" + "\"ZEEX_3111_Parameter\".\"udtEmPz\"" + "[" + i + "]" + ".\"rTempHeatup\".\"Set\"",
                value: {
                    get: function () {
                        const rTempHeatupSetNodeId = this.nodeId.value;
                        initial.rTempHeatupSet(i, rTempHeatupSetNodeId, serverValues);
                        return new opcua.Variant({ dataType: opcua.DataType.Float, value: serverValues[rTempHeatupSetNodeId] });
                    },
                    set: function (variant) {


                        const rTempHeatupSetNodeId = parseFloat(variant.value);


                        return opcua.StatusCodes.Good;
                    }
                }
            })
            //Extruder ==> Expert Settings ==> Prozess Zones/Parameter ==> Parameter:"Temp. Heatup-Max" //
            var rTempHeatupMax = namespace3.addVariable({
                componentOf: rTempHeatup,
                browseName: "Max",
                dataType: opcua.DataType.Float,
                nodeId: "ns=3;s=" + "\"ZEEX_3111_Parameter\".\"udtEmPz\"" + "[" + i + "]" + ".\"rTempHeatup\".\"Max\"",
                value: {
                    get: function () {
                        const rTempHeatupMaxNodeId = this.nodeId.value;
                        initial.rTempHeatupMax(i, rTempHeatupMaxNodeId, serverValues);
                        return new opcua.Variant({ dataType: opcua.DataType.Float, value: serverValues[rTempHeatupMaxNodeId] });
                    },
                    set: function (variant) {
                        return opcua.StatusCodes.Good;
                    }
                }
            })
            //Extruder ==> Expert Settings ==> Prozess Zones/Parameter ==> Parameter:"Temp. Heatup-Min" //
            var rTempHeatupMin = namespace3.addVariable({
                componentOf: rTempHeatup,
                browseName: "Min",
                dataType: opcua.DataType.Float,
                nodeId: "ns=3;s=" + "\"ZEEX_3111_Parameter\".\"udtEmPz\"" + "[" + i + "]" + ".\"rTempHeatup\".\"Min\"",
                value: {
                    get: function () {
                        const rTempHeatupMinNodeId = this.nodeId.value;
                        //initial.initialstartrTempHeatupMinNodeId(i, rTempHeatupMinNodeId, serverValues);
                        return new opcua.Variant({ dataType: opcua.DataType.Float, value: serverValues[rTempHeatupMinNodeId] });
                    },
                    set: function (variant) {

                        return opcua.StatusCodes.Good;
                    }
                }
            })
            //*******************************************************************************************
            //Extruder ==> Expert Settings ==> Prozess Zones/Parameter ==> Parameter:"Temp.Release" /
            var rTempRelease = namespace3.addVariable({
                componentOf: nr,
                browseName: "rTempRel",
                dataType: opcua.DataType.Float,
                nodeId: "ns=3;s=" + "\"ZEEX_3111_Parameter\".\"udtEmPz\"" + "[" + i + "]" + ".\"rTempRel\"",
            })


            function createCustomVariable(variableName, componentOf, browseName, part1, part2, part3, part4, customGetLogic) {
                const nodeId = `"ns=3;s=\"${part1}\".\"${part2}\"[${i}].\"${part3}\".\"${part4}\"`;

                var newVariable = {};
                newVariable[variableName] = namespace3.addVariable({
                    componentOf: componentOf,
                    browseName: browseName,
                    dataType: opcua.DataType.Float,
                    nodeId: nodeId,
                    value: {
                        get: function () {
                            var nameNodeId = {};
                            var test = variableName + "NodeId";
                            console.log(test);
                            nameNodeId[variableName + "NodeId"] = this.nodeId.value;
                            //console.log(test);
                            var index = i; // Sie können hier 'i' verwenden, wenn es im richtigen Scope verfügbar ist, ansonsten müssen Sie es als zusätzlichen Parameter übergeben.

                            if (customGetLogic) {
                               customGetLogic(index, nameNodeId, serverValues);
                             }


                            return new opcua.Variant({ dataType: opcua.DataType.Float, value: serverValues[nameNodeId] });
                        },
                        set: function (variant) {
                            var nameNodeId = {};
                            var oldNameNodeId = variableName + "NodeId";
                            nameNodeId[oldNameNodeId] = this.nodeId.value;
                            serverValues[oldNameNodeId] = parseFloat(variant.value);
                            var newVariableName = variableName.replace("Set", "Min");
                            var newVariableNodeId = newVariableName + "NodeId"
                            nameNodeId[newVariableNodeId] = this.nodeId.value.replace("Set", "Min");
                            serverValues[nameNodeId[newVariableNodeId]] = serverValues[oldNameNodeId];

                           
                            return opcua.StatusCodes.Good;
                        }
                    }
                });

                return newVariable;
            }
            
            /*if (customGetLogic) {
                customGetLogic(index, nameNodeId, serverValues);
              }*/

            function customGetLogic_rTempReleaseSet222(i, nameNodeId, serverValues) {
                initial.rTempReleaseSet(i, nameNodeId, serverValues);
                console.log("Custom logic for rTempReleaseSet");


                var newVariableName = initial.rTempReleaseSet.name.replace("Set", "Min"); //Änderung des Variablen Namen
                nameNodeId[newVariableName + "NodeId"] = nameNodeId[newVariableName + "NodeId"].replace("Set", "Min"); //Änderung der NodeID
                serverValues[newVariableName + "NodeId"] = serverValues[rTempReleaseSetNodeId]

            }



            var rTempReleaseSet = createCustomVariable(
                "rTempReleaseSet",
                rTempRelease,
                "Set",
                "ZEEX_3111_Parameter",
                "udtEmPz",
                "rTempRel",
                "Set",
                customGetLogic_rTempReleaseSet222
            );

            var rTempReleasemin = createCustomVariable(
                "rTempReleaseMin",
                rTempRelease,
                "Min",
                "ZEEX_3111_Parameter",
                "udtEmPz",
                "rTempRel",
                "Min",
                
            );


            function customGetLogic_rTempReleaseSet222(i, nameNodeId, serverValues) {
                initial.rTempReleaseSet(i, nameNodeId, serverValues);
                console.log("Custom logic for rTempReleaseSet");

                             
            }


            //Extruder ==> Expert Settings ==> Prozess Zones/Parameter ==> Parameter:"Temp.Release-Max" //
            var rTempReleaseMax = namespace3.addVariable({
                componentOf: rTempRelease,
                browseName: "Max",
                dataType: opcua.DataType.Float,
                nodeId: "ns=3;s=" + "\"ZEEX_3111_Parameter\".\"udtEmPz\"" + "[" + i + "]" + ".\"rTempRel\".\"Max\"",
                value: {
                    get: function () {
                        const rTempReleaseMaxNodeId = this.nodeId.value;

                        initial.rTempReleaseMax(i, rTempReleaseMaxNodeId, serverValues);

                        return new opcua.Variant({ dataType: opcua.DataType.Float, value: serverValues[rTempReleaseMaxNodeId] });
                    },
                    set: function (variant) {
                        return opcua.StatusCodes.Good;
                    }
                }
            })


            //Extruder ==> Expert Settings ==> Prozess Zones/Parameter ==> Parameter:"Temp.Release-Min" //
         
            //*******************************************************************************************
            //Extruder ==> Expert Settings ==> Prozess Zones/Parameter ==> Parameter:"Time.Release" /
            var udTimeRel = namespace3.addVariable({
                componentOf: nr,
                browseName: "udTimeRel",
                dataType: opcua.DataType.Float,
                nodeId: "ns=3;s=" + "\"ZEEX_3111_Parameter\".\"udtEmPz\"" + "[" + i + "]" + ".\"udTimeRel\"",
            })
            //Extruder ==> Expert Settings ==> Prozess Zones/Parameter ==> Parameter:"Time.Release-Set" /
            var udTimeRelSet = namespace3.addVariable({
                componentOf: udTimeRel,
                browseName: "Set",
                dataType: opcua.DataType.Float,
                nodeId: "ns=3;s=" + "\"ZEEX_3111_Parameter\".\"udtEmPz\"" + "[" + i + "]" + ".\"udTimeRel\".\"Set\"",
                value: {
                    get: function () {
                        const udTimeRelSetNodeId = this.nodeId.value;
                        initial.udTimeRelSet(i, udTimeRelSetNodeId, serverValues);
                        return new opcua.Variant({ dataType: opcua.DataType.Float, value: serverValues[udTimeRelSetNodeId] });
                    },
                    set: function (variant) {
                        const udTimeRelSetNodeId = this.nodeId.value;
                        serverValues[udTimeRelSetNodeId] = parseFloat(variant.value);
                        return opcua.StatusCodes.Good;

                    }
                }
            })
            //Extruder ==> Expert Settings ==> Prozess Zones/Parameter ==> Parameter:"Time.Release-Max" /
            var udTimeRelMax = namespace3.addVariable({
                componentOf: udTimeRel,
                browseName: "Max",
                dataType: opcua.DataType.Float,
                nodeId: "ns=3;s=" + "\"ZEEX_3111_Parameter\".\"udtEmPz\"" + "[" + i + "]" + ".\"udTimeRel\".\"Max\"",
                value: {
                    get: function () {
                        const udTimeRelMaxNodeId = this.nodeId.value;
                        initial.udTimeRelMax(i, udTimeRelMaxNodeId, serverValues);
                        return new opcua.Variant({ dataType: opcua.DataType.Float, value: serverValues[udTimeRelMaxNodeId] });
                    },
                    set: function (variant) {
                        return opcua.StatusCodes.Good;
                    }
                }
            })
            //Extruder ==> Expert Settings ==> Prozess Zones/Parameter ==> Parameter:"Temp.Release-Min" //
            var udTimeRelMin = namespace3.addVariable({
                componentOf: udTimeRel,
                browseName: "Min",
                dataType: opcua.DataType.Float,
                nodeId: "ns=3;s=" + "\"ZEEX_3111_Parameter\".\"udtEmPz\"" + "[" + i + "]" + ".\"udTimeRel\".\"Min\"",
                value: {
                    get: function () {
                        const udTimeRelMinNodeId = this.nodeId.value;
                        initial.udTimeRelMin(i, udTimeRelMinNodeId, serverValues);
                        return new opcua.Variant({ dataType: opcua.DataType.Float, value: serverValues[udTimeRelMinNodeId] });
                    },
                    set: function (variant) {
                        return opcua.StatusCodes.Good;
                    }
                }
            })
            //*******************************************************************************************
            //*******************************************************************************************
            //*******************************************************************************************
            //*******************************************************************************************



























            //***********************************************************************************************************/
            //***********************************************************************************************************/
            //***********************************************************************************************************/
            //***********************************************************************************************************/


        }
    }



}




