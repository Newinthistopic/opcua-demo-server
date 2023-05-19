const initial = require('./../../../funktionen');
module.exports = {

    run: function (addressSpace, device, opcua, verbose, serverValues,) {
        var namespace3 = addressSpace.getNamespace('http://mynamespace-3/UA/');
        const ZEEX_3111_Parameter = addressSpace.findNode("ns=3;s=\"ZEEX_3111_Parameter\"");

        var udtEmPz = namespace3.addVariable({
            componentOf: ZEEX_3111_Parameter,
            browseName: "udtEmPz",
            dataType: opcua.DataType.Double,
            nodeId: "ns=3;s=\"ZEEX_3111_Parameter\".\"udtEmPz\"",
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


            var nr = createCustomVariable(i, "nr", udtEmPz, i.toString(), "ZEEX_3111_Parameter", "udtEmPz", undefined, undefined, undefined, undefined);



            //***********************************************************************************************************/
            //***********************************************************************************************************/
            //***********************************************************************************************************/
            //***********************************************************************************************************/

            const rPzTemp = addressSpace.findNode("ns=3;s=\"ZEEX_3111_Hmi\".\"udtEmPz\"" + "[" + i + "]." + "\"rPzTemp\"");



            //Extruder ==> Expert Settings ==> Prozess Zones/Parameter ==> Limits:"Warning H" //
            var rTempH = createCustomVariable(i, "rTempH", nr, "rTempH (Warning H)", "ZEEX_3111_Parameter", "udtEmPz", "rTempH", undefined, undefined, undefined);


            //Extruder ==> Expert Settings ==> Prozess Zones/Parameter ==> Limits:"Warning H-Set" //
            var rTempHSet = createCustomVariable(i, "rTempHSet", rTempH, "Set", "ZEEX_3111_Parameter", "udtEmPz", "rTempH", "Set", rTempHSetGet, rTempHSetSet);

            function rTempHSetGet(x,nameNodeId, serverValues) {
                initial.rTempHSet(i, nameNodeId, serverValues);
            }

            function rTempHSetSet(nameNodeId, serverValues) {
                const rTempHHMinNodeId = nameNodeId["rTempHSetNodeId"].replace("rTempH", "rTempHH").replace("Set", "Min");
                serverValues[rTempHHMinNodeId] = serverValues[nameNodeId["rTempHSetNodeId"]];

                const rTempHMinNodeId = nameNodeId["rTempHSetNodeId"].replace("Set", "Min");
                serverValues[rTempHMinNodeId] = serverValues[nameNodeId["rTempHSetNodeId"]];

                const rOpMaxNodeId = nameNodeId["rTempHSetNodeId"].replace("rTempH", "rPzTemp").replace("Set", "rOpMax").replace("ZEEX_3111_Parameter", "ZEEX_3111_Hmi")
                serverValues[rOpMaxNodeId] = serverValues[nameNodeId["rTempHSetNodeId"]];
                return opcua.StatusCodes.Good;
            }

            //Extruder ==> Expert Settings ==> Prozess Zones/Parameter ==> Limits:"Warning H-Max" //
            var rTempHMax = createCustomVariable(i, "rTempH", rTempH, "Max", "ZEEX_3111_Parameter", "udtEmPz", "rTempH", "Max", rTempHMaxGet, undefined);
            //Extruder ==> Expert Settings ==> Prozess Zones/Parameter ==> Limits:"Warning H-Min" //
            function rTempHMaxGet() { }
            
            var rTempHMin = createCustomVariable(i, "rTempH", rTempH, "Min", "ZEEX_3111_Parameter", "udtEmPz", "rTempH", "Min", rTempHMinGet, undefined);
            function rTempHMinGet(nameNodeId, serverValues) {
                initial.rTempHMin(i, nameNodeId, serverValues);
            }

            //***********************************************************************************************************/
            //Extruder ==> Expert Settings ==> Prozess Zones/Parameter ==> Limits:"Alarm HH" //
            var rTempHH = createCustomVariable(i, "rTempHH", nr, "rTempHH (AlarmHH)", "ZEEX_3111_Parameter", "udtEmPz", "rTempHH", undefined, undefined, undefined);
            //Extruder ==> Expert Settings ==> Prozess Zones/Parameter ==> Limits:"Alarm HH-Set" //
            var rTempHHSet = createCustomVariable(i, "rTempHHSet", rTempHH, "Set", "ZEEX_3111_Parameter", "udtEmPz", "rTempHH", "Set", rTempHHSetGet, undefined);
            function rTempHHSetGet() { }
            //Extruder ==> Expert Settings ==> Prozess Zones/Parameter ==> Limits:"Alarm HH-Max" //
            var rTempHHmax = createCustomVariable(i, "rTempHHMax", rTempHH, "Max", "ZEEX_3111_Parameter", "udtEmPz", "rTempHH", "Max", rTempHHMaxGet, undefined);
            function rTempHHMaxGet() { }
            //Extruder ==> Expert Settings ==> Prozess Zones/Parameter ==> Limits:"Alarm HH-Min" //
            var rTempHHMin = createCustomVariable(i, "rTempHHMin", rTempHH, "Min", "ZEEX_3111_Parameter", "udtEmPz", "rTempHH", "Min", rTempHHMinGet, undefined);
            function rTempHHMinGet() { }

            //***********************************************************************************************************/
            //Extruder ==> Expert Settings ==> Prozess Zones/Parameter ==> Limits:"Tolerance H" //
            var rSetTolH = createCustomVariable(i, "rSetTolH", nr, "rSetTolH", "ZEEX_3111_Parameter", "udtEmPz", "rTempTolH", undefined, undefined, undefined);
            //Extruder ==> Expert Settings ==> Prozess Zones/Parameter ==> Limits:"Tolerance H-Set" //
            var rSetTolHSet = createCustomVariable(i, "rSetTolHSet", rSetTolH, "Set", "ZEEX_3111_Parameter", "udtEmPz", "rTempTolH", "Set", rSetTolHSetGet, undefined);
            function rSetTolHSetGet() { }
            //Extruder ==> Expert Settings ==> Prozess Zones/Parameter ==> Limits:"Tolerance H-Max" //
            var rSetTolHMax = createCustomVariable(i, "rSetTolHMax", rSetTolH, "Max", "ZEEX_3111_Parameter", "udtEmPz", "rTempTolH", "Max", rSetTolHMaxGet, undefined);
            function rSetTolHMaxGet() { }
            //Extruder ==> Expert Settings ==> Prozess Zones/Parameter ==> Limits:"Tolerance H-Min" //
            var rSetTolHMin = createCustomVariable(i, "rSetTolHMin", rSetTolH, "Min", "ZEEX_3111_Parameter", "udtEmPz", "rTempTolH", "Min", rSetTolHMinGet, undefined);
            function rSetTolHMinGet() { }
            //***********************************************************************************************************/
            //Extruder ==> Expert Settings ==> Prozess Zones/Parameter ==> Limits:"Tolerance HH" //
            var rSetTolHH = createCustomVariable(i, "rSetTolHH", nr, "rSetTolHH", "ZEEX_3111_Parameter", "udtEmPz", "rTempTolHH", undefined, undefined, undefined);
            //Extruder ==> Expert Settings ==> Prozess Zones/Parameter ==> Limits:"Tolerance HH-Set" //
            var rSetTolHHSet = createCustomVariable(i, "rSetTolHHSet", rSetTolHH, "Set", "ZEEX_3111_Parameter", "udtEmPz", "rTempTolHH", "Set", rSetTolHHGet, undefined);
            function rSetTolHHGet() { }
            //Extruder ==> Expert Settings ==> Prozess Zones/Parameter ==> Limits:"Tolerance HH-Max" //
            var rSetTolHHMax = createCustomVariable(i, "rSetTolHHMax", rSetTolHH, "Max", "ZEEX_3111_Parameter", "udtEmPz", "rTempTolHH", "Max", rSetTolHHMaxGet, undefined);
            function rSetTolHHMaxGet() { }
            //Extruder ==> Expert Settings ==> Prozess Zones/Parameter ==> Limits:"Tolerance HH-Min" //
            var rSetTolHHMin = createCustomVariable(i, "rSetTolHHMin", rSetTolHH, "Min", "ZEEX_3111_Parameter", "udtEmPz", "rTempTolHH", "Min", rSetTolHHMinGet, undefined);
            function rSetTolHHMinGet() { }
            //***********************************************************************************************************/
            //Extruder ==> Expert Settings ==> Prozess Zones/Parameter ==> Limits:"Tolerance HH" //
            var rTempCooldown = createCustomVariable(i, "rTempCooldown", nr, "rTempCooldown", "ZEEX_3111_Parameter", "udtEmPz", "rTempCooldown", undefined, undefined, undefined);
            //Extruder ==> Expert Settings ==> Prozess Zones/Parameter ==> Limits:"Tolerance HH-Set" //
            var rTempCooldownSet = createCustomVariable(i, "rTempCooldownSet", rTempCooldown, "Set", "ZEEX_3111_Parameter", "udtEmPz", "rTempCooldown", "Set", rTempCooldownGet, undefined);
            function rTempCooldownGet() { }
            //Extruder ==> Expert Settings ==> Prozess Zones/Parameter ==> Limits:"Tolerance HH-Max" //
            var rTempCooldownHMax = createCustomVariable(i, "rTempCooldownMax", rTempCooldown, "Max", "ZEEX_3111_Parameter", "udtEmPz", "rTempCooldown", "Max", rTempCooldownMax, undefined);
            function rTempCooldownMax() { }
            //Extruder ==> Expert Settings ==> Prozess Zones/Parameter ==> Limits:"Tolerance HH-Min" //
            var rTempCooldownHMin = createCustomVariable(i, "rTempCooldownMin", rTempCooldown, "Min", "ZEEX_3111_Parameter", "udtEmPz", "rTempCooldown", "Min", rTempCooldownMin, undefined);
            function rTempCooldownMin() { }
            //***********************************************************************************************************/
            //Extruder ==> Expert Settings ==> Prozess Zones/Parameter ==> Limits:"Temp. Ramp Factor" //
            var rTempRampFactor = createCustomVariable(i, "rTempRampFactor", nr, "rTempRampFactor", "ZEEX_3111_Parameter", "udtEmPz", "rTempRampFactor", undefined, undefined, undefined);
            //Extruder ==> Expert Settings ==> Prozess Zones/Parameter ==> Limits:"Temp. Ramp Factor-Set" //
            var rTempRampFactorSet = createCustomVariable(i, "rTempCooldownSet", rTempRampFactor, "Set", "ZEEX_3111_Parameter", "udtEmPz", "rTempRampFactor", "Set", rTempRampFactorGet, undefined);
            function rTempRampFactorGet() { }
            //Extruder ==> Expert Settings ==> Prozess Zones/Parameter ==> Limits:"Temp. Ramp Factor-Max" //
            var rTempRampFactorMax = createCustomVariable(i, "rTempCooldownMax", rTempRampFactor, "Max", "ZEEX_3111_Parameter", "udtEmPz", "rTempRampFactor", "Max", rTempRampFactorMaxGet, undefined);
            function rTempRampFactorMaxGet() { }
            //Extruder ==> Expert Settings ==> Prozess Zones/Parameter ==> Limits:"Temp. Ramp Factor-Min" //
            var rTempRampFactorMin = createCustomVariable(i, "rTempCooldownMin", rTempRampFactor, "Min", "ZEEX_3111_Parameter", "udtEmPz", "rTempRampFactor", "Min", rTempRampFactorMinGet, undefined);
            function rTempRampFactorMinGet() { }
            //******************************************************************************************* 
            //Extruder ==> Expert Settings ==> Prozess Zones/Parameter ==> Limits:"Temp. Heatup" //
            var rTempHeatup = createCustomVariable(i, "rTempHeatup", nr, "rTempHeatup", "ZEEX_3111_Parameter", "udtEmPz", "rTempHeatup", undefined, undefined, undefined);
            //Extruder ==> Expert Settings ==> Prozess Zones/Parameter ==> Limits:"Temp. Heatup-Set" //
            var rTempHeatupSet = createCustomVariable(i, "rTempCooldownSet", rTempHeatup, "Set", "ZEEX_3111_Parameter", "udtEmPz", "rTempHeatup", "Set", rTempHeatupGet, undefined);
            function rTempHeatupGet() { }
            //Extruder ==> Expert Settings ==> Prozess Zones/Parameter ==> Limits:"Temp. Heatup-Max" //
            var rTempHeatupMax = createCustomVariable(i, "rTempHeatupMax", rTempHeatup, "Max", "ZEEX_3111_Parameter", "udtEmPz", "rTempHeatup", "Max", rTempHeatupMaxGet, undefined);
            function rTempHeatupMaxGet() { }
            //Extruder ==> Expert Settings ==> Prozess Zones/Parameter ==> Limits:"Temp. Heatup-Min" //
            var rTempHeatupMin = createCustomVariable(i, "rTempHeatupMin", rTempHeatup, "Min", "ZEEX_3111_Parameter", "udtEmPz", "rTempHeatup", "Min", rTempHeatupMinGet, undefined);
            function rTempHeatupMinGet() { }
            //*******************************************************************************************
            //Extruder ==> Expert Settings ==> Prozess Zones/Parameter ==> Limits:"Temp.Release" //
            var rTempRelease = createCustomVariable(i, "rTempHeatup", nr, "rTempRel", "ZEEX_3111_Parameter", "udtEmPz", "rTempRel", undefined, undefined, undefined);
            //Extruder ==> Expert Settings ==> Prozess Zones/Parameter ==> Limits:"Temp.Release-Set" //
            var rTempReleaseSet = createCustomVariable(i, "rTempReleaseSet", rTempRelease, "Set", "ZEEX_3111_Parameter", "udtEmPz", "rTempRel", "Set", rTempReleaseGet, undefined);
            function rTempReleaseGet() { }
            //Extruder ==> Expert Settings ==> Prozess Zones/Parameter ==> Limits:"Temp.Release-Max" //
            var rTempReleaseMax = createCustomVariable(i, "rTempReleaseMax", rTempRelease, "Max", "ZEEX_3111_Parameter", "udtEmPz", "rTempRel", "Max", rTempReleaseMaxGet, undefined);
            function rTempReleaseMaxGet() { }
            //Extruder ==> Expert Settings ==> Prozess Zones/Parameter ==> Limits:"Temp.Release-Min" //
            var rTempReleaseMin = createCustomVariable(i, "rTempReleaseMin", rTempRelease, "Min", "ZEEX_3111_Parameter", "udtEmPz", "rTempRel", "Min", rTempReleaseMinGet, undefined);
            function rTempReleaseMinGet() { }
            //*******************************************************************************************
            //Extruder ==> Expert Settings ==> Prozess Zones/Parameter ==> Parameter:"Time.Release" /
            var udTimeRel = createCustomVariable(i, "rTempHeatup", nr, "udTimeRel", "ZEEX_3111_Parameter", "udtEmPz", "udTimeRel", undefined, undefined, undefined);
            //Extruder ==> Expert Settings ==> Prozess Zones/Parameter ==> Limits:"Time.Release-Set" //
            var udTimeRelSet = createCustomVariable(i, "rudTimeRelSet", udTimeRel, "Set", "ZEEX_3111_Parameter", "udtEmPz", "udTimeRel", "Set", udTimeRelGet, undefined);
            function udTimeRelGet() { }
            //Extruder ==> Expert Settings ==> Prozess Zones/Parameter ==> Limits:"Time.Release-Max" //
            var udTimeRelMax = createCustomVariable(i, "udTimeRelMax", udTimeRel, "Max", "ZEEX_3111_Parameter", "udtEmPz", "udTimeRel", "Max", udTimeRelMaxGet, undefined);
            function udTimeRelMaxGet() { }
            //Extruder ==> Expert Settings ==> Prozess Zones/Parameter ==> Limits:"Time.Release-Min" //
            var udTimeRelMin = createCustomVariable(i, "udTimeRelMin", udTimeRel, "Min", "ZEEX_3111_Parameter", "udtEmPz", "udTimeRel", "Min", udTimeRelMinGet, undefined);
            function udTimeRelMinGet() { }




        }

    }
}
