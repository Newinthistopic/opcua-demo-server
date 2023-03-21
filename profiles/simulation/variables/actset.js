


module.exports = {
    run: function (addressSpace, device, opcua, verbose, serverValues) {

        // create ppC_Compound_V3 object

        var namespace3 = addressSpace.getNamespace('http://mynamespace-3/UA/');


        var ppC_Compound_V3 = namespace3.addObject({
            organizedBy: device,
            browseName: "ppC_Compound_V3",
            nodeId: "s=ppC_Compound_V3",
            description: "The PLC instance which supports you with OPC UA functionality"
        })

        // create DatablocksGlobal object
        var datablocksGlobal = namespace3.addObject({
            organizedBy: ppC_Compound_V3,
            browseName: "DatablocksGlobal",
            nodeId: "s=DatablocksGlobal"
        });

        // create ZEEX_3111_Hmi object
        var prefix = namespace3.addObject({
            organizedBy: datablocksGlobal,
            browseName: "ZEEX_3111_Hmi",
            nodeId: "s=" + "\"ZEEX_3111_Hmi\""
        });

        // create udtEmPz variable undefined Datatype Equipment Module Process Zone
        var udtEmPz = namespace3.addVariable({
            componentOf: prefix,
            browseName: "udtEmPz",
            dataType: opcua.DataType.Double,
            nodeId: "s=" + "\"ZEEX_3111_Hmi\".\"udtEmPz\"",
        });

        for (let i = 0; i < 14; i++) {
            var dwStatNodeId;
            var nr = namespace3.addVariable({
                componentOf: udtEmPz,
                browseName: i.toString(),
                dataType: opcua.DataType.Double,
                nodeId: "s=" + "\"ZEEX_3111_Hmi\".\"udtEmPz\"" + "[" + i + "]",


            }
            )

            var rPzTemp = namespace3.addVariable({
                componentOf: nr,
                browseName: "rPzTemp",
                dataType: opcua.DataType.String,
                nodeId: "s=" + "\"ZEEX_3111_Hmi\".\"udtEmPz\"" + "[" + i + "]." + "\"rPzTemp\""

            }
            )

            var initialStart = 20;
            var rActNodeId;

            var rAct = namespace3.addVariable({
                componentOf: rPzTemp,
                browseName: "rAct",
                dataType: opcua.DataType.Float,
                nodeId: "ns=3;s=" + "\"ZEEX_3111_Hmi\".\"udtEmPz\"" + "[" + i + "]." + "\"rPzTemp\".\"rAct\"",
                value: {
                    get: function () {
                        const rActNodeId = this.nodeId.value;
                        if (!(rActNodeId in serverValues)) {
                            // Initialisiere rAct mit initialStart, wenn es noch keinen Wert gibt
                            serverValues[rActNodeId] = initialStart;
                        }
                        return new opcua.Variant({ dataType: opcua.DataType.Float, value: serverValues[rActNodeId] });
                    },
                    set: function (variant) {

                        return opcua.StatusCodes.Good;
                    }
                }
            });


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
                        if (serverValues[rSetNodeId] > serverValues[rActNodeId]) {
                            rampUpToSetPoint(rActNodeId, rSetNodeId, 1000);
                        } else {
                            rampDownToSetPoint(rActNodeId, rSetNodeId, 1000);
                        }


                        return opcua.StatusCodes.Good;
                    }
                }

            });

            function rampUpToSetPoint(rActNodeId, rSetNodeId, time) {
                console.log("Starte die Funktion rampUpToSetPoint");
                const T = time;
                const startValue = serverValues[rActNodeId];
                const endValue = serverValues[rSetNodeId];
                const step = (endValue - startValue) / (T / 88);
                let currentValue = startValue;
                var dwStatNodeId = rSetNodeId.replace("rSet", "dwStat");
                serverValues[dwStatNodeId] = 4194304;
                const interval = setInterval(() => {
                    currentValue += step;
                    if (currentValue >= endValue) {

                        currentValue = endValue;
                        serverValues[dwStatNodeId] = 0
                        clearInterval(interval);
                    }
                    if (currentValue < 20) { // Verhindern, dass der Wert unter 20 fällt
                        currentValue = 20;
                        clearInterval(interval);
                    }
                    serverValues[rActNodeId] = currentValue;

                    console.log("Current Value:", currentValue);
                }, 1200);
            }

            function rampDownToSetPoint(rActNodeId, rSetNodeId, time) {
                console.log("Starte die Funktion rampDownToSetPoint");
                const T = time;
                const startValue = serverValues[rActNodeId];
                const endValue = serverValues[rSetNodeId];
                const step = (startValue - endValue) / (T / 100);
                let currentValue = startValue;


                const interval = setInterval(() => {
                    currentValue -= step;
                    if (currentValue <= endValue) {

                        currentValue = endValue;
                        clearInterval(interval);
                    }
                    if (currentValue < 20) { // Verhindern, dass der Wert unter 20 fällt
                        currentValue = 20;
                        clearInterval(interval);
                    }
                    serverValues[rActNodeId] = currentValue;
                    console.log("Current Value:", currentValue);
                }, 1500);
            }




            var rOpMin = namespace3.addVariable({
                componentOf: rPzTemp,
                browseName: "rOpMin",
                dataType: opcua.DataType.Float,
                nodeId: "ns=3;s=" + "\"ZEEX_3111_Hmi\".\"udtEmPz\"" + "[" + i + "]." + "\"rPzTemp\".\"rOpMin\"",
                value: {
                    get: function () {
                        return new opcua.Variant({ dataType: opcua.DataType.Float, value: 0 });
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
                        return new opcua.Variant({ dataType: opcua.DataType.Float, value: 311 });
                    },

                    set: function (variant) {



                    }
                }

            })
            /*
            
            [0]  - Module exists
               [1]  - Module inactive
               [2]  - (not used)
               [3]  - HMI control of module enabled
               [4]  - (not used)
               [5]  - (not used)
               [6]  - Tolerance monitoring max max limit active
               [7]  - Tolerance monitoring max  limit active
               [8]  - Tolerance monitoring min limit active
               [9]  - Tolerance monitoring min min limit active
               [10] - Actual Value exists
              *[11] - Set point value exists
               [12] - Recipe value exists
              *[13] - Change of set point enabled
              *[14] - Tolerance values are relative
               [15] - Tolerance monitoring active
              *[16] - Out of tolerance max max
              *[17] - Out of tolerance max
              *[18] - Out of tolerance min
              *[19] - Out of tolerance min min
               [20] - Module simulation mode active
               [21] - (not used)
              *[22] - Value increasing
              *[23] - Value decreasing
               [24] - (not used)
               [25] - (not used)
               [26] - (not used)
               [27] - Module interlock active
               [28] - Module info active
               [29] - Module warning active
               [30] - Module alarm active
               [31] - Module hardware fault active*/

            var dwStat = namespace3.addVariable({
                componentOf: nr,
                browseName: "dwStat",
                dataType: opcua.DataType.Float,
                nodeId: "ns=3;s=" + "\"ZEEX_3111_Hmi\".\"udtEmPz\"" + "[" + i + "]." + "\"rPzTemp\".\"dwStat\"",
                value: {
                    get: function () {
                        const dwStatNodeId = this.nodeId.value;
                        return new opcua.Variant({ dataType: opcua.DataType.Float, value: serverValues[dwStatNodeId] });
                    },

                    set: function (variant) {
                        // do nothing
                    }
                }
            })

            /************************* */
            //Experts Settings//

            //In der HMI Tolerance H //
            /*  var rSetTolMax = namespace3.addVariable({
                  componentOf: rPzTemp,
                  browseName: "rSetTolMax",
                  dataType: opcua.DataType.Float,
                  nodeId: "ns=3;s=" + "\"ZEEX_3111_Hmi\".\"udtEmPz\"" + "[" + i + "]\".rTempH.Set\"",
                  get: function () {
                      //  const  rSetTo|MaxMaxNodeId = this.nodeId.value;
                          return new opcua.Variant({ dataType: opcua.DataType.Float, value: serverValues[rSetTolMax]   });
                      },
  
                      set: function (variant) {
                         
                      serverValues[rSetTolMax] = parseFloat(variant.value);
                          
                      }
              })*/



            /*  var rSetTolMaxMax = namespace3.addVariable({
                  componentOf: rPzTemp,
                  browseName: "rSetTolMaxMax",
                  dataType: opcua.DataType.Float,
                  nodeId: "ns=3;s=" + "\"ZEEX_3111_Parameter\".\"udtEmPz\"" + "[" + i + "]."+ "\"rTempHH.Set\"",
                  value: {
                      get: function () {
                          const nodeIdValue = this.nodeId.value;
  
                          return new opcua.Variant({ dataType: opcua.DataType.Float, value: serverValues[nodeIdValue] });
                      },
                      set: function (variant) {
  
                          const rSetTolMaxMaxtNodeId = this.nodeId.value;
                          serverValues[rSetTolMaxMaxtNodeId] = parseFloat(variant.value);
                          
                      }
                  }
              })*/
            //Tolerance H
            var rSetTolH = namespace3.addVariable({
                componentOf: rPzTemp,
                browseName: "rSetTolH",
                dataType: opcua.DataType.Float,
                nodeId: "ns=3;s=" + "\"ZEEX_3111_Parameter\".\"udtEmPz\"" + "[" + i + "]" + ".\"rTempTolH\".\"Set\"",
                value: {
                    get: function () {
                        const rSetTolHNodeId = this.nodeId.value;

                        return new opcua.Variant({ dataType: opcua.DataType.Float, value: serverValues[rSetTolHNodeId] });
                    },
                    set: function (variant) {

                        const rSetTolHNodeId = this.nodeId.value;
                        serverValues[rSetTolHNodeId] = parseFloat(variant.value);
                        return opcua.StatusCodes.Good;

                    }
                }
            })
            //Tolerance HH
            var rSetTolHH = namespace3.addVariable({
                componentOf: rPzTemp,
                browseName: "rSetTolHH",
                dataType: opcua.DataType.Float,
                nodeId: "ns=3;s=" + "\"ZEEX_3111_Parameter\".\"udtEmPz\"" + "[" + i + "]" + ".\"rTempTolHH\".\"Set\"",
                value: {
                    get: function () {
                        const rSetTolHHNodeId = this.nodeId.value;

                        return new opcua.Variant({ dataType: opcua.DataType.Float, value: serverValues[rSetTolHHNodeId] });
                    },
                    set: function (variant) {

                        const rSetTolHHNodeId = this.nodeId.value;
                        serverValues[rSetTolHHNodeId] = parseFloat(variant.value);
                        return opcua.StatusCodes.Good;

                    }
                }
            })
            //Tolerance H min
            var rSetTolHMin = namespace3.addVariable({
                componentOf: rPzTemp,
                browseName: "rSetTolHMin",
                dataType: opcua.DataType.Float,
                nodeId: "ns=3;s=" + "\"ZEEX_3111_Parameter\".\"udtEmPz\"" + "[" + i + "]" + ".\"rTempTolH\".\"Min\"",
                value: {
                    get: function () {
                        const rSetTolHMinNodeId = this.nodeId.value;

                        return new opcua.Variant({ dataType: opcua.DataType.Float, value: serverValues[rSetTolHMinNodeId] = 11 });
                    },
                    set: function (variant) {

                        //do nothing

                    }
                }
            })

            //Tolerance  H max
            var rSetTolHMax = namespace3.addVariable({
                componentOf: rPzTemp,
                browseName: "rSetTolHMax",
                dataType: opcua.DataType.Float,
                nodeId: "ns=3;s=" + "\"ZEEX_3111_Parameter\".\"udtEmPz\"" + "[" + i + "]" + ".\"rTempTolH\".\"Max\"",
                value: {
                    get: function () {
                        const rSetTolHMaxNodeId = this.nodeId.value;

                        return new opcua.Variant({ dataType: opcua.DataType.Float, value: serverValues[rSetTolHMaxNodeId] = 22 });
                    },
                    set: function (variant) {

                        //do nothing

                    }
                }
            })


            //Tolerance HH min Numpad
            var rSetTolHHMin = namespace3.addVariable({
                componentOf: nr,
                browseName: "rSetTolHHMin",
                dataType: opcua.DataType.Float,
                nodeId: "ns=3;s=" + "\"ZEEX_3111_Parameter\".\"udtEmPz\"" + "[" + i + "]" + ".\"rTempTolHH\".\"Min\"",
                value: {
                    get: function () {
                        const rSetTolHHMinNodeId = this.nodeId.value;

                        return new opcua.Variant({ dataType: opcua.DataType.Float, value: serverValues[rSetTolHHMinNodeId] = 45 });
                    },
                    set: function (variant) {

                        //do nothing

                    }
                }
            })

            //Tolerance  HH max fürs Numpad
            var rSetTolHHMax = namespace3.addVariable({
                componentOf: nr,
                browseName: "rSetTolHHMax",
                dataType: opcua.DataType.Float,
                nodeId: "ns=3;s=" + "\"ZEEX_3111_Parameter\".\"udtEmPz\"" + "[" + i + "]" + ".\"rTempTolHH\".\"Max\"",
                value: {
                    get: function () {
                        const rSetTolHHMaxNodeId = this.nodeId.value;

                        return new opcua.Variant({ dataType: opcua.DataType.Float, value: serverValues[rSetTolHHMaxNodeId] = 78 });
                    },
                    set: function (variant) {

                        //do nothing

                    }
                }
            })

            //Warning H
            var WarningH = namespace3.addVariable({
                componentOf: nr,
                browseName: "WarningH",
                dataType: opcua.DataType.Float,
                nodeId: "ns=3;s=" + "\"ZEEX_3111_Parameter\".\"udtEmPz\"" + "[" + i + "]" + ".\"rTempH\".\"Set\"",
                value: {
                    get: function () {
                        const WarningHNodeId = this.nodeId.value;

                        return new opcua.Variant({ dataType: opcua.DataType.Float, value: serverValues[WarningHNodeId] });
                    },
                    set: function (variant) {

                        const WarningHNodeId = this.nodeId.value;
                        serverValues[WarningHNodeId] = parseFloat(variant.value);
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

                        return new opcua.Variant({ dataType: opcua.DataType.Float, value: serverValues[WarningHMinNodeId]=1 });
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

                        return new opcua.Variant({ dataType: opcua.DataType.Float, value: serverValues[WarningHMaxNodeId]=3 });
                    },
                    set: function (variant) {

                        //do nothing

                    }
                }
            })




            var AlarmHH = namespace3.addVariable({
                componentOf: nr,
                browseName: "AlarmHH",
                dataType: opcua.DataType.Float,
                nodeId: "ns=3;s=" + "\"ZEEX_3111_Parameter\".\"udtEmPz\"" + "[" + i + "]" + ".\"rTempHH\".\"Set\"",
                value: {
                    get: function () {
                        const AlarmHHNodeId = this.nodeId.value;

                        return new opcua.Variant({ dataType: opcua.DataType.Float, value: serverValues[AlarmHHNodeId] });
                    },
                    set: function (variant) {

                        const AlarmHHNodeId = this.nodeId.value;
                        serverValues[AlarmHHNodeId] = parseFloat(variant.value);
                        return opcua.StatusCodes.Good;

                    }
                }
            })

           

            // AlarmHH min fürs Numpad
            var AlarmHHMin = namespace3.addVariable({
                componentOf: nr,
                browseName: "AlarmHHMin",
                dataType: opcua.DataType.Float,
                nodeId: "ns=3;s=" + "\"ZEEX_3111_Parameter\".\"udtEmPz\"" + "[" + i + "]" + ".\"rTempHH\".\"Min\"",
                value: {
                    get: function () {
                        const AlarmHHMinNodeId = this.nodeId.value;

                        return new opcua.Variant({ dataType: opcua.DataType.Float, value: serverValues[AlarmHHMinNodeId]=21 });
                    },
                    set: function (variant) {

                      //do nothing

                    }
                }
            })


 // AlarmHH max fürs Numpad
            var AlarmHHMax = namespace3.addVariable({
                componentOf: nr,
                browseName: "AlarmHHMax",
                dataType: opcua.DataType.Float,
                nodeId: "ns=3;s=" + "\"ZEEX_3111_Parameter\".\"udtEmPz\"" + "[" + i + "]" + ".\"rTempHH\".\"Max\"",
                value: {
                    get: function () {
                        const AlarmHHMaxNodeId = this.nodeId.value;

                        return new opcua.Variant({ dataType: opcua.DataType.Float, value: serverValues[AlarmHHMaxNodeId ]=26 });
                    },
                    set: function (variant) {
//do nothing
                        

                    }
                }
            })

        }

    }
}



