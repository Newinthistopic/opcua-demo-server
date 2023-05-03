const initial = require('./../../../funktionen');


module.exports = {

    run: function (addressSpace, device, opcua, verbose, serverValues) {


        // create ppC_Compound_V3 object
        var namespace2 = addressSpace.getNamespace('http://mynamespace-2/UA/');
        var namespace3 = addressSpace.getNamespace('http://mynamespace-3/UA/');


        var ppC_Compound_V3 = namespace3.addObject({
            organizedBy: device,
            browseName: "ppC_Compound_V3",
            nodeId: "s=PLC",
            description: "The PLC instance which supports you with OPC UA functionality"
        })

        // create DatablocksGlobal object
        var dataBlocksGlobal = namespace3.addObject({
            organizedBy: ppC_Compound_V3,
            browseName: "DataBlocksGlobal",
            nodeId: "s=DatablocksGlobal"
        });



        var ZEEX_3111_Hmi = namespace3.addObject({
            organizedBy: dataBlocksGlobal,
            browseName: "ZEEX_3111_Hmi",
            nodeId: "s=" + "\"ZEEX_3111_Hmi\""
        });






        //   nodeId: "s=" + "\"ZEEX_3111_Hmi\""



        // create udtEmPz variable undefined Datatype Equipment Module Process Zone
        var udtEmPz = namespace3.addVariable({
            componentOf: ZEEX_3111_Hmi,
            browseName: "udtEmPz",
            dataType: opcua.DataType.Double,
            nodeId: "s=" + "\"ZEEX_3111_Hmi\".\"udtEmPz\"",
        });

        for (let i = 0; i < 14; i++) {

            var nr = namespace3.addVariable({
                componentOf: udtEmPz,
                browseName: i.toString(),
                dataType: opcua.DataType.Double,
                nodeId: "s=" + "\"ZEEX_3111_Hmi\".\"udtEmPz\"" + "[" + i + "]",
            })

            var rPzTemp = namespace3.addVariable({
                componentOf: nr,
                browseName: "rPzTemp",
                dataType: opcua.DataType.Float,
                nodeId: "s=" + "\"ZEEX_3111_Hmi\".\"udtEmPz\"" + "[" + i + "]." + "\"rPzTemp\"",

            })

            var rAct = namespace3.addVariable({
                componentOf: rPzTemp,
                browseName: "rAct",
                dataType: opcua.DataType.Float,
                nodeId: "ns=3;s=" + "\"ZEEX_3111_Hmi\".\"udtEmPz\"" + "[" + i + "]." + "\"rPzTemp\".\"rAct\"",
                value: {
                    get: function () {
                        const rActNodeId = this.nodeId.value;
                        initial.initialstartrAct(i, rActNodeId, serverValues);
                        return new opcua.Variant({ dataType: opcua.DataType.Float, value: serverValues[rActNodeId] });
                    },
                    set: function (variant) {
                        return opcua.StatusCodes.Good;
                    }
                }
            })


            function get_rActValue() {
                const rActNodeId = this.nodeId.value;
                initial.initialstartrAct(i, rActNodeId, serverValues);

                return new opcua.Variant({ dataType: opcua.DataType.Float, value: serverValues[rActNodeId] });
            }

            // Definieren Sie die set-Funktion separat
            function set_rActValue(variant) {
                return opcua.StatusCodes.Good;
            }



            var rSet = namespace3.addVariable({
                componentOf: rPzTemp,
                browseName: "rSet",
                dataType: opcua.DataType.Float,
                nodeId: "ns=3;s=" + "\"ZEEX_3111_Hmi\".\"udtEmPz\"" + "[" + i + "]." + "\"rPzTemp\".\"rSet\"",
                value: {
                    get: function () {
                        const nodeIdValue = this.nodeId.value;

                        return new opcua.Variant({ dataType: opcua.DataType.Float, value: serverValues[nodeIdValue] });
                    },
                    set: function (variant) {

                        const rSetNodeId = this.nodeId.value;
                        serverValues[rSetNodeId] = parseFloat(variant.value);


                        const rActNodeId = rSetNodeId.replace("rSet", "rAct");


                        // serverValues[rActNodeId] = serverValues[rSetNodeId];
                        console.log(`Setter-Funktion aufgerufen für rSet mit nodeId "${rSetNodeId}": ${serverValues[rSetNodeId]}`);
                        console.log(`------------------------------------`);
                        console.log(`rAct nodeId:${rActNodeId}\nrAct Wert: ${serverValues[rActNodeId]}\n`);
                        console.log(`********************************************\n`);


                        return opcua.StatusCodes.Good;
                    }
                }

            });


            var rOpMin = namespace3.addVariable({
                componentOf: rPzTemp,
                browseName: "rOpMin",
                dataType: opcua.DataType.Float,
                nodeId: "ns=3;s=" + "\"ZEEX_3111_Hmi\".\"udtEmPz\"" + "[" + i + "]." + "\"rPzTemp\".\"rOpMin\"",
                value: {
                    get: function () {
                        return new opcua.Variant({ dataType: opcua.DataType.Float, value: 0 });
                        // 

                    },

                    set: function (variant) {
                        // do nothing
                    }
                }

            })

            var rOpMax = namespace3.addVariable({
                componentOf: rPzTemp,
                browseName: "rOpMax",
                dataType: opcua.DataType.Float,
                nodeId: "ns=3;s=" + "\"ZEEX_3111_Hmi\".\"udtEmPz\"" + "[" + i + "]." + "\"rPzTemp\".\"rOpMax\"",
                value: {
                    get: function () {
                        const rOpMaxNodeId = this.nodeId.value;
                        initial.initialstartrOpMax(i, rOpMaxNodeId, serverValues);
                        //  console.log(`Node-ID von rOpMax: ${rOpMaxNodeId}`);
                        return new opcua.Variant({ dataType: opcua.DataType.Float, value: serverValues[rOpMaxNodeId] });
                    },

                    set: function (variant) {



                    }
                }

            })


            /******************************************************************* */
            /*********************************************************************/
            // Extruder ==> More ==> Experts Settings ==> Prozess Zones / Parameter //

            //Tolerance H Setten
            var rSetTolH = namespace3.addVariable({
                componentOf: rPzTemp,
                browseName: "rSetTolH",
                dataType: opcua.DataType.Float,
                nodeId: "ns=3;s=" + "\"ZEEX_3111_Parameter\".\"udtEmPz\"" + "[" + i + "]" + ".\"rTempTolH\".\"Set\"",
                value: {
                    get: function () {
                        const rSetTolNodeId = this.nodeId.value;
                        initial.initialstartrSetTolHNodeId(i, rSetTolNodeId, serverValues);
                        return new opcua.Variant({ dataType: opcua.DataType.Float, value: serverValues[rSetTolNodeId] });
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
            //Tolerance HH Setten
            var rSetTolHH = namespace3.addVariable({
                componentOf: rPzTemp,
                browseName: "rSetTolHH",
                dataType: opcua.DataType.Float,
                nodeId: "ns=3;s=" + "\"ZEEX_3111_Parameter\".\"udtEmPz\"" + "[" + i + "]" + ".\"rTempTolHH\".\"Set\"",
                value: {
                    get: function () {
                        const rSetTolHHNodeId = this.nodeId.value;

                        initial.initialstartrSetTolHHNodeId(i, rSetTolHHNodeId, serverValues);


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

            //Tolerance H min numpad
            var rSetTolHMin = namespace3.addVariable({
                componentOf: rPzTemp,
                browseName: "rSetTolHMin",
                dataType: opcua.DataType.Float,
                nodeId: "ns=3;s=" + "\"ZEEX_3111_Parameter\".\"udtEmPz\"" + "[" + i + "]" + ".\"rTempTolH\".\"Min\"",
                value: {
                    get: function () {
                        const rSetTolHMinNodeId = this.nodeId.value;
                        initial.initialstartrSetTolHMinNodeId(i, rSetTolHMinNodeId, serverValues);
                        return new opcua.Variant({ dataType: opcua.DataType.Float, value: serverValues[rSetTolHMinNodeId] });
                    },
                    set: function (variant) {

                        //do nothing

                    }
                }
            })

            //Tolerance  H max numpad
            var rSetTolHMax = namespace3.addVariable({
                componentOf: rPzTemp,
                browseName: "rSetTolHMax",
                dataType: opcua.DataType.Float,
                nodeId: "ns=3;s=" + "\"ZEEX_3111_Parameter\".\"udtEmPz\"" + "[" + i + "]" + ".\"rTempTolH\".\"Max\"",
                value: {
                    get: function () {
                        const rSetTolHMaxNodeId = this.nodeId.value;
                        initial.initialstartrSetTolHMaxNodeId(i, rSetTolHMaxNodeId, serverValues);
                        return new opcua.Variant({ dataType: opcua.DataType.Float, value: serverValues[rSetTolHMaxNodeId] });
                        //Der Wert für H max numpad ist konstant bei 10
                    },
                    set: function (variant) {
                        // do nothing

                    }
                }
            })


            //Tolerance HH min numpad
            var rSetTolHHMin = namespace3.addVariable({
                componentOf: nr,
                browseName: "rSetTolHHMin",
                dataType: opcua.DataType.Float,
                nodeId: "ns=3;s=" + "\"ZEEX_3111_Parameter\".\"udtEmPz\"" + "[" + i + "]" + ".\"rTempTolHH\".\"Min\"",
                value: {
                    get: function () {
                        const rSetTolHNodeId = this.nodeId.value;
                        initial.initialstartrSetTolHHMinNodeId(i, rSetTolHHMin, serverValues);
                        return new opcua.Variant({ dataType: opcua.DataType.Float, value: serverValues[rSetTolHNodeId] });
                    },
                    set: function (variant) {

                        //do nothing

                    }
                }
            })

            //Tolerance  HH max numpad
            var rSetTolHHMax = namespace3.addVariable({
                componentOf: nr,
                browseName: "rSetTolHHMax",
                dataType: opcua.DataType.Float,
                nodeId: "ns=3;s=" + "\"ZEEX_3111_Parameter\".\"udtEmPz\"" + "[" + i + "]" + ".\"rTempTolHH\".\"Max\"",
                value: {
                    get: function () {
                        const rSetTolHHMaxNodeId = this.nodeId.value;
                        return new opcua.Variant({ dataType: opcua.DataType.Float, value: serverValues[rSetTolHHMaxNodeId] = 20 });
                        //Der Wert für HH max numpad ist konstant und liegt bei 20
                    },
                    set: function (variant) {
                        //do nothing
                    }
                }
            })

            //Warning H setten
            // Warning H setten beeinflusst den max numpad Wert von op max, den Max Wert beim Numpad Setten Bereucg Plastification
            var WarningH = namespace3.addVariable({
                componentOf: nr,
                browseName: "WarningH",
                dataType: opcua.DataType.Float,
                nodeId: "ns=3;s=" + "\"ZEEX_3111_Parameter\".\"udtEmPz\"" + "[" + i + "]" + ".\"rTempH\".\"Set\"",
                value: {
                    get: function () {
                        const WarningHNodeId = this.nodeId.value;
                        initial.initialstartWarningH(i, WarningHNodeId, serverValues);
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


            //Alarm HH Setten
            var AlarmHH = namespace3.addVariable({
                componentOf: nr,
                browseName: "AlarmHH",
                dataType: opcua.DataType.Float,
                nodeId: "ns=3;s=" + "\"ZEEX_3111_Parameter\".\"udtEmPz\"" + "[" + i + "]" + ".\"rTempHH\".\"Set\"",
                value: {
                    get: function () {
                        const AlarmHHNodeId = this.nodeId.value;

                        initial.initialstartAlarmHH(i, AlarmHHNodeId, serverValues);


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


            //Warning H min im Numpad
            var WarningHMin = namespace3.addVariable({
                componentOf: nr,
                browseName: "WarningHMin",
                dataType: opcua.DataType.Float,
                nodeId: "ns=3;s=" + "\"ZEEX_3111_Parameter\".\"udtEmPz\"" + "[" + i + "]" + ".\"rTempH\".\"Min\"",
                value: {
                    get: function () {
                        const WarningHMinNodeId = this.nodeId.value;
                        return new opcua.Variant({ dataType: opcua.DataType.Float, value: serverValues[WarningHMinNodeId] = 0 });
                        // Der Wert für Warning H min im numpad ist konstant und liegt bei 0
                    },
                    set: function (variant) {
                        //do nothing
                    }
                }
            })

            //Warning H max im Numpad
            var WarningHMax = namespace3.addVariable({
                componentOf: nr,
                browseName: "WarningHMax",
                dataType: opcua.DataType.Float,
                nodeId: "ns=3;s=" + "\"ZEEX_3111_Parameter\".\"udtEmPz\"" + "[" + i + "]" + ".\"rTempH\".\"Max\"",
                value: {
                    get: function () {
                        const WarningHMaxNodeId = this.nodeId.value;
                        return new opcua.Variant({ dataType: opcua.DataType.Float, value: serverValues[WarningHMaxNodeId] = 1000 });
                        // Der Wert für Warning H max im numpad ist konstant und liegt bei 1000
                    },
                    set: function (variant) {
                        //do nothing
                    }
                }
            })

            // AlarmHH min  Numpad
            var AlarmHHMin = namespace3.addVariable({
                componentOf: nr,
                browseName: "AlarmHHMin",
                dataType: opcua.DataType.Float,
                nodeId: "ns=3;s=" + "\"ZEEX_3111_Parameter\".\"udtEmPz\"" + "[" + i + "]" + ".\"rTempHH\".\"Min\"",
                value: {
                    get: function () {
                        const AlarmHHMinNodeId = this.nodeId.value;

                        return new opcua.Variant({ dataType: opcua.DataType.Float, value: serverValues[AlarmHHMinNodeId] });
                    },
                    set: function (variant) {

                        //do nothing
                    }
                }
            })

            // AlarmHH max numpad
            var AlarmHHMax = namespace3.addVariable({
                componentOf: nr,
                browseName: "AlarmHHMax",
                dataType: opcua.DataType.Float,
                nodeId: "ns=3;s=" + "\"ZEEX_3111_Parameter\".\"udtEmPz\"" + "[" + i + "]" + ".\"rTempHH\".\"Max\"",
                value: {
                    get: function () {
                        const AlarmHHMaxNodeId = this.nodeId.value;

                        return new opcua.Variant({ dataType: opcua.DataType.Float, value: serverValues[AlarmHHMaxNodeId] = 1000 });
                        // Der Wert für AlarmHH max im numpad ist konstant und liegt bei 1000
                    },
                    set: function (variant) {
                        //do nothing
                    }
                }
            })

        }


    }

}