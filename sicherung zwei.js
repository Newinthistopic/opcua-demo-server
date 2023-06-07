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

       

        function createCustomVariable(i,variableName, componentOf, browseName, part1, part2, part3, part4, customGetLogic, customSetLogic) {
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
                        customGetLogic(nameNodeId);
                        
                        console.log("customGetLogic wird aufgerufen...");
                        return new opcua.Variant({ dataType: opcua.DataType.Float, value: serverValues[nameNodeId[variableName + "NodeId"]] });
                    }
                    
                    
                    
                        //initial.rTempHSet1(i,  nameNodeId, serverValues);

                        return new opcua.Variant({ dataType: opcua.DataType.Float, value: serverValues[nameNodeId[variableName + "NodeId"]] });
                    },
                    set: function (variant) {
                        var nameNodeId = {};
                        nameNodeId[variableName + "NodeId"] = this.nodeId.value;
                        serverValues[nameNodeId[variableName + "NodeId"]] = parseFloat(variant.value);
                        if (customSetLogic) {
                            customSetLogic(nameNodeId)
                            console.log("customSetLogic wird aufgerufen...");

                        }
                        return opcua.StatusCodes.Good;
                    }
                }
            });

            return newVariable[variableName]; // Rückgabe der neu erstellten Variable
        }





        for (let i = 0; i < 14; i++) {

            



            var nr = createCustomVariable(i,"nr", udtEmPz, i.toString(), "ZEEX_3111_Parameter", "udtEmPz", undefined, undefined, undefined, undefined);


            
            //***********************************************************************************************************/
            //***********************************************************************************************************/
            //***********************************************************************************************************/
            //***********************************************************************************************************/

            const rPzTemp = addressSpace.findNode("ns=3;s=\"ZEEX_3111_Hmi\".\"udtEmPz\"" + "[" + i + "]." + "\"rPzTemp\"");



            //Extruder ==> Expert Settings ==> Prozess Zones/Parameter ==> Limits:"Warning H" //
            var rTempH = createCustomVariable("rTempH", nr, "rTempH (Warning H)", "ZEEX_3111_Parameter", "udtEmPz", "rTempH", undefined, undefined, undefined);

            function rTempHSetGet(nameNodeId) {
                initial.rTempHSet(i,  nameNodeId, serverValues);
                        }
            //Extruder ==> Expert Settings ==> Prozess Zones/Parameter ==> Limits:"Warning H-Set" //
            var rTempHSet = createCustomVariable("rTempH", rTempH, "Set", "ZEEX_3111_Parameter", "udtEmPz", "rTempH", "Set", rTempHSetGet, undefined);
            //var rTempHSet = createCustomVariable("rTempH", rTempH, "Set", "ZEEX_3111_Parameter", "udtEmPz", "rTempH", "Set", rTempHSetGet, undefined);
            //var rTempHSet = createCustomVariable("rTempH", rTempH, "Set", "ZEEX_3111_Parameter", "udtEmPz", "rTempH", "Set", rTempHSetGet, rTempHSetSet);
            
        
            /*function rTempHSetSet(nameNodeId) {
                const rTempHHMinNodeId = nameNodeId["rTempHSetNodeId"].replace("rTempH", "rTempHH").replace("Set", "Min");
                serverValues[rTempHHMinNodeId] = serverValues[nameNodeId["rTempHSetNodeId"]];

                const rTempHMinNodeId = nameNodeId["rTempHSetNodeId"].replace("Set", "Min");
                serverValues[rTempHMinNodeId] = serverValues[nameNodeId["rTempHSetNodeId"]];

                const rOpMaxNodeId = nameNodeId["rTempHSetNodeId"].replace("rTempH", "rPzTemp").replace("Set", "rOpMax").replace("ZEEX_3111_Parameter", "ZEEX_3111_Hmi")
                serverValues[rOpMaxNodeId] = serverValues[nameNodeId["rTempHSetNodeId"]];
                return opcua.StatusCodes.Good;
            }*/

            //Extruder ==> Expert Settings ==> Prozess Zones/Parameter ==> Limits:"Warning H-Max" //
            var rTempHMax = createCustomVariable("rTempH", rTempH, "Max", "ZEEX_3111_Parameter", "udtEmPz", "rTempH", "Max", rTempHMaxGet, undefined);
            //Extruder ==> Expert Settings ==> Prozess Zones/Parameter ==> Limits:"Warning H-Min" //
            function rTempHMaxGet() { }
            var rTempHMin = createCustomVariable("rTempH", rTempH, "Min", "ZEEX_3111_Parameter", "udtEmPz", "rTempH", "Min", rTempHMinGet, undefined);
            function rTempHMinGet() { }
            //***********************************************************************************************************/
            //Extruder ==> Expert Settings ==> Prozess Zones/Parameter ==> Limits:"Alarm HH" //
            var rTempHH = createCustomVariable("rTempHH", nr, "rTempHH (AlarmHH)", "ZEEX_3111_Parameter", "udtEmPz", "rTempHH", undefined, undefined, undefined);
            //Extruder ==> Expert Settings ==> Prozess Zones/Parameter ==> Limits:"Alarm HH-Set" //
            var rTempHHSet = createCustomVariable("rTempHHSet", rTempHH, "Set", "ZEEX_3111_Parameter", "udtEmPz", "rTempHH", "Set", rTempHHSetGet, undefined);
            function rTempHHSetGet() { }
            //Extruder ==> Expert Settings ==> Prozess Zones/Parameter ==> Limits:"Alarm HH-Max" //
            var rTempHHmax = createCustomVariable("rTempHHMax", rTempHH, "Max", "ZEEX_3111_Parameter", "udtEmPz", "rTempHH", "Max", rTempHHMaxGet, undefined);
            function rTempHHMaxGet() { }
            //Extruder ==> Expert Settings ==> Prozess Zones/Parameter ==> Limits:"Alarm HH-Min" //
            var rTempHHMin = createCustomVariable("rTempHHMin", rTempHH, "Min", "ZEEX_3111_Parameter", "udtEmPz", "rTempHH", "Min", rTempHHMinGet, undefined);
            function rTempHHMinGet() { }

            //***********************************************************************************************************/
            //Extruder ==> Expert Settings ==> Prozess Zones/Parameter ==> Limits:"Tolerance H" //
            var rSetTolH = createCustomVariable("rSetTolH", nr, "rSetTolH", "ZEEX_3111_Parameter", "udtEmPz", "rTempTolH", undefined, undefined, undefined);
            //Extruder ==> Expert Settings ==> Prozess Zones/Parameter ==> Limits:"Tolerance H-Set" //
            var rSetTolHSet = createCustomVariable("rSetTolHSet", rSetTolH, "Set", "ZEEX_3111_Parameter", "udtEmPz", "rTempTolH", "Set", rSetTolHSetGet, undefined);
            function rSetTolHSetGet() { }
            //Extruder ==> Expert Settings ==> Prozess Zones/Parameter ==> Limits:"Tolerance H-Max" //
            var rSetTolHMax = createCustomVariable("rSetTolHMax", rSetTolH, "Max", "ZEEX_3111_Parameter", "udtEmPz", "rTempTolH", "Max", rSetTolHMaxGet, undefined);
            function rSetTolHMaxGet() { }
            //Extruder ==> Expert Settings ==> Prozess Zones/Parameter ==> Limits:"Tolerance H-Min" //
            var rSetTolHMin = createCustomVariable("rSetTolHMin", rSetTolH, "Min", "ZEEX_3111_Parameter", "udtEmPz", "rTempTolH", "Min", rSetTolHMinGet, undefined);
            function rSetTolHMinGet() { }
            //***********************************************************************************************************/
            //Extruder ==> Expert Settings ==> Prozess Zones/Parameter ==> Limits:"Tolerance HH" //
            var rSetTolHH = createCustomVariable("rSetTolHH", nr, "rSetTolHH", "ZEEX_3111_Parameter", "udtEmPz", "rTempTolHH", undefined, undefined, undefined);
            //Extruder ==> Expert Settings ==> Prozess Zones/Parameter ==> Limits:"Tolerance HH-Set" //
            var rSetTolHHSet = createCustomVariable("rSetTolHHSet", rSetTolHH, "Set", "ZEEX_3111_Parameter", "udtEmPz", "rTempTolHH", "Set", rSetTolHHGet, undefined);
            function rSetTolHHGet() { }
            //Extruder ==> Expert Settings ==> Prozess Zones/Parameter ==> Limits:"Tolerance HH-Max" //
            var rSetTolHHMax = createCustomVariable("rSetTolHHMax", rSetTolHH, "Max", "ZEEX_3111_Parameter", "udtEmPz", "rTempTolHH", "Max", rSetTolHHMaxGet, undefined);
            function rSetTolHHMaxGet() { }
            //Extruder ==> Expert Settings ==> Prozess Zones/Parameter ==> Limits:"Tolerance HH-Min" //
            var rSetTolHHMin = createCustomVariable("rSetTolHHMin", rSetTolHH, "Min", "ZEEX_3111_Parameter", "udtEmPz", "rTempTolHH", "Min", rSetTolHHMinGet, undefined);
            function rSetTolHHMinGet() { }
            //***********************************************************************************************************/
            //Extruder ==> Expert Settings ==> Prozess Zones/Parameter ==> Limits:"Tolerance HH" //
            var rTempCooldown = createCustomVariable("rTempCooldown", nr, "rTempCooldown", "ZEEX_3111_Parameter", "udtEmPz", "rTempCooldown", undefined, undefined, undefined);
            //Extruder ==> Expert Settings ==> Prozess Zones/Parameter ==> Limits:"Tolerance HH-Set" //
            var rTempCooldownSet = createCustomVariable("rTempCooldownSet", rTempCooldown, "Set", "ZEEX_3111_Parameter", "udtEmPz", "rTempCooldown", "Set", rTempCooldownGet, undefined);
            function rTempCooldownGet() { }
            //Extruder ==> Expert Settings ==> Prozess Zones/Parameter ==> Limits:"Tolerance HH-Max" //
            var rTempCooldownHMax = createCustomVariable("rTempCooldownMax", rTempCooldown, "Max", "ZEEX_3111_Parameter", "udtEmPz", "rTempCooldown", "Max", rTempCooldownMax, undefined);
            function rTempCooldownMax() { }
            //Extruder ==> Expert Settings ==> Prozess Zones/Parameter ==> Limits:"Tolerance HH-Min" //
            var rTempCooldownHMin = createCustomVariable("rTempCooldownMin", rTempCooldown, "Min", "ZEEX_3111_Parameter", "udtEmPz", "rTempCooldown", "Min", rTempCooldownMin, undefined);
            function rTempCooldownMin() { }
            //***********************************************************************************************************/
            //Extruder ==> Expert Settings ==> Prozess Zones/Parameter ==> Limits:"Temp. Ramp Factor" //
            var rTempRampFactor = createCustomVariable("rTempRampFactor", nr, "rTempRampFactor", "ZEEX_3111_Parameter", "udtEmPz", "rTempRampFactor", undefined, undefined, undefined);
            //Extruder ==> Expert Settings ==> Prozess Zones/Parameter ==> Limits:"Temp. Ramp Factor-Set" //
            var rTempRampFactorSet = createCustomVariable("rTempCooldownSet", rTempRampFactor, "Set", "ZEEX_3111_Parameter", "udtEmPz", "rTempRampFactor", "Set", rTempRampFactorGet, undefined);
            function rTempRampFactorGet() { }
            //Extruder ==> Expert Settings ==> Prozess Zones/Parameter ==> Limits:"Temp. Ramp Factor-Max" //
            var rTempRampFactorMax = createCustomVariable("rTempCooldownMax", rTempRampFactor, "Max", "ZEEX_3111_Parameter", "udtEmPz", "rTempRampFactor", "Max", rTempRampFactorMaxGet, undefined);
            function rTempRampFactorMaxGet() { }
            //Extruder ==> Expert Settings ==> Prozess Zones/Parameter ==> Limits:"Temp. Ramp Factor-Min" //
            var rTempRampFactorMin = createCustomVariable("rTempCooldownMin", rTempRampFactor, "Min", "ZEEX_3111_Parameter", "udtEmPz", "rTempRampFactor", "Min", rTempRampFactorMinGet, undefined);
            function rTempRampFactorMinGet() { }
            //******************************************************************************************* 
            //Extruder ==> Expert Settings ==> Prozess Zones/Parameter ==> Limits:"Temp. Heatup" //
            var rTempHeatup = createCustomVariable("rTempHeatup", nr, "rTempHeatup", "ZEEX_3111_Parameter", "udtEmPz", "rTempHeatup", undefined, undefined, undefined);
            //Extruder ==> Expert Settings ==> Prozess Zones/Parameter ==> Limits:"Temp. Heatup-Set" //
            var rTempHeatupSet = createCustomVariable("rTempCooldownSet", rTempHeatup, "Set", "ZEEX_3111_Parameter", "udtEmPz", "rTempHeatup", "Set", rTempHeatupGet, undefined);
            function rTempHeatupGet() { }
            //Extruder ==> Expert Settings ==> Prozess Zones/Parameter ==> Limits:"Temp. Heatup-Max" //
            var rTempHeatupMax = createCustomVariable("rTempHeatupMax", rTempHeatup, "Max", "ZEEX_3111_Parameter", "udtEmPz", "rTempHeatup", "Max", rTempHeatupMaxGet, undefined);
            function rTempHeatupMaxGet() { }
            //Extruder ==> Expert Settings ==> Prozess Zones/Parameter ==> Limits:"Temp. Heatup-Min" //
            var rTempHeatupMin = createCustomVariable("rTempHeatupMin", rTempHeatup, "Min", "ZEEX_3111_Parameter", "udtEmPz", "rTempHeatup", "Min", rTempHeatupMinGet, undefined);
            function rTempHeatupMinGet() { }
            //*******************************************************************************************
            //Extruder ==> Expert Settings ==> Prozess Zones/Parameter ==> Limits:"Temp.Release" //
            var rTempRelease = createCustomVariable("rTempHeatup", nr, "rTempRel", "ZEEX_3111_Parameter", "udtEmPz", "rTempRel", undefined, undefined, undefined);
            //Extruder ==> Expert Settings ==> Prozess Zones/Parameter ==> Limits:"Temp.Release-Set" //
            var rTempReleaseSet = createCustomVariable("rTempReleaseSet", rTempRelease, "Set", "ZEEX_3111_Parameter", "udtEmPz", "rTempRel", "Set", rTempReleaseGet, undefined);
            function rTempReleaseGet() { }
            //Extruder ==> Expert Settings ==> Prozess Zones/Parameter ==> Limits:"Temp.Release-Max" //
            var rTempReleaseMax = createCustomVariable("rTempReleaseMax", rTempRelease, "Max", "ZEEX_3111_Parameter", "udtEmPz", "rTempRel", "Max", rTempReleaseMaxGet, undefined);
            function rTempReleaseMaxGet() { }
            //Extruder ==> Expert Settings ==> Prozess Zones/Parameter ==> Limits:"Temp.Release-Min" //
            var rTempReleaseMin = createCustomVariable("rTempReleaseMin", rTempRelease, "Min", "ZEEX_3111_Parameter", "udtEmPz", "rTempRel", "Min", rTempReleaseMinGet, undefined);
            function rTempReleaseMinGet() { }
            //*******************************************************************************************
            //Extruder ==> Expert Settings ==> Prozess Zones/Parameter ==> Parameter:"Time.Release" /
            var udTimeRel = createCustomVariable("rTempHeatup", nr, "udTimeRel", "ZEEX_3111_Parameter", "udtEmPz", "udTimeRel", undefined, undefined, undefined);
            //Extruder ==> Expert Settings ==> Prozess Zones/Parameter ==> Limits:"Time.Release-Set" //
            var udTimeRelSet = createCustomVariable("rudTimeRelSet", udTimeRel, "Set", "ZEEX_3111_Parameter", "udtEmPz", "udTimeRel", "Set", udTimeRelGet, undefined);
            function udTimeRelGet() { }
            //Extruder ==> Expert Settings ==> Prozess Zones/Parameter ==> Limits:"Time.Release-Max" //
            var udTimeRelMax = createCustomVariable("udTimeRelMax", udTimeRel, "Max", "ZEEX_3111_Parameter", "udtEmPz", "udTimeRel", "Max", udTimeRelMaxGet, undefined);
            function udTimeRelMaxGet() { }
            //Extruder ==> Expert Settings ==> Prozess Zones/Parameter ==> Limits:"Time.Release-Min" //
            var udTimeRelMin = createCustomVariable("udTimeRelMin", udTimeRel, "Min", "ZEEX_3111_Parameter", "udtEmPz", "udTimeRel", "Min", udTimeRelMinGet, undefined);
            function udTimeRelMinGet() { }





        }

    }
}
