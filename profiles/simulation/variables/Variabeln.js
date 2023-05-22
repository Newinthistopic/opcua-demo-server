
const initial = require('./../../../funktionen');

module.exports = {

    run1: function (addressSpace, device, opcua, verbose, serverValues) {

        var namespace3 = addressSpace.getNamespace('http://mynamespace-3/UA/');
        var namespace2 = addressSpace.getNamespace('http://mynamespace-2/UA/');


        /*function createInitialStatusFunction(functionName, initialValue, variableName, customValues = {}) {
            return {
              [functionName]: function (i, nameNodeId, serverValues) {
                var nodeIdInitial = [];
                nodeIdInitial[i] = nameNodeId[variableName + "NodeId"];
          
               // if (!(nameNodeId[variableName + "NodeId"] in serverValues)) {
                  for (let index = 0; index <= 13; index++) {
                    serverValues[nodeIdInitial[index]] = initialValue;
                  }
          
                  // Setze benutzerdefinierte Werte für bestimmte Indizes
                  for (const [index, value] of Object.entries(customValues)) {
                    serverValues[nodeIdInitial[index]] = value;
                  }
          
                  serverValues[nameNodeId[variableName + "NodeId"]] = serverValues[nodeIdInitial[i]];
                }
          
              //},
            };
          }

          var rActObjekt = createInitialStatusFunction("rAct", 22, "rAct", { 1: 21, 2: 23, 6: 19 });*/

          let createInitialStatusFunction = function (variableName, initialValue, customValues, i, nameNodeId, serverValues) {
            var nodeIdInitial = [];
            nodeIdInitial[i] = nameNodeId[variableName + "NodeId"];
        
            if (!(nameNodeId[variableName + "NodeId"] in serverValues)) {
                for (let index = 0; index <= 13; index++) {
                  serverValues[nodeIdInitial[index]] = initialValue;
                }
            }
        
            // Setze benutzerdefinierte Werte für bestimmte Indizes
            for (const [index, value] of Object.entries(customValues)) {
                if(nodeIdInitial[index] !== undefined) { // Prevent setting undefined keys in serverValues
                    serverValues[nodeIdInitial[index]] = value;
                }
            }
        
            if(nameNodeId[variableName + "NodeId"] !== undefined) { // Prevent setting undefined keys in serverValues
                serverValues[nameNodeId[variableName + "NodeId"]] = serverValues[nodeIdInitial[i]];
            }
        };
        
        
        


        function createCustomVariable(i, variableName, componentOf, browseName, part1, part2, part3, part4, part5, customGetLogic, customSetLogic) {
            var nodeId;
        
            if(part3 || part4 || part5 || i !== undefined) {
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
                        
                        if (customGetLogic) {
                            customGetLogic(nameNodeId, serverValues);

                            

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
                }
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



             
        //Thid Level//
     

        var udtCmPzPid_HMI = createCustomVariable(undefined, "udtCmPzPid_HMI", ZEEX_3111_Hmi, "udtCmPzPid", "ZEEX_3111_Hmi", "udtCmPzPid", undefined, undefined, undefined, undefined, undefined);

        var udtCmPzPid_Parameter = createCustomVariable(undefined, "udtCmPzPid_Parameter", udtCmPzPid_Parameter, "udtCmPzPid", "ZEEX_3111_Parameter", "udtCmPzPid", undefined, undefined, undefined, undefined, undefined);

        var udtCmPzPid_Config = createCustomVariable(undefined, "udtCmPzPid_Config", ZEEX_3111_Config, "udtCmPzPid", "ZEEX_3111_Config", "udtCmPzPid", undefined, undefined, undefined, undefined, undefined);


        var udtEmPz = createCustomVariable(undefined, "udtEmPz", ZEEX_3111_Hmi, "udtEmPz", "ZEEX_3111_Hmi", "udtEmPz", undefined, undefined, undefined, undefined, undefined);
   

        for (let i = 0; i < 14; i++) {

            var nr = createCustomVariable(i, "nr", udtCmPzPid_Parameter, i.toString(), "ZEEX_3111_Parameter", "udtCmPzPid", undefined, undefined, undefined, undefined, undefined);
            var nr2 = createCustomVariable(i, "nr", udtCmPzPid_Config, i.toString(), "ZEEX_3111_Config", "udtCmPzPid", undefined, undefined, undefined, undefined, undefined);
            var nr3 = createCustomVariable(i, "nr", udtCmPzPid_HMI, i.toString(), "ZZEEX_3111_Hmi", "udtCmPzPid", undefined, undefined, undefined, undefined, undefined);
            var nr4 = createCustomVariable(i, "nr", udtEmPz, i.toString(), undefined, undefined, undefined, undefined, undefined, undefined, undefined,);

            var udtCool = createCustomVariable(i, "udtCool", nr, "udtCool", "ZZEEX_3111_Parameter", "udtCmPzPid", "udtCool", undefined, undefined, undefined, undefined);
            var udtCoolPid = createCustomVariable(i, "udtCoolPid", udtCool, "udtPid", "ZEEX_3111_Config", "udtCool", "udtPid", undefined, undefined, undefined);


            var udtHeat = createCustomVariable(i, "udtHeat", nr, "udtHeat", "ZEEX_3111_Parameter", "udtHeat", undefined, undefined, undefined, undefined);
            var udtHeatPid = createCustomVariable(i, "udtHeatPid", udtHeat, "udtHeatPid", "ZEEX_3111_Parameter", "udtCmPzPid", "udtHeat", "udtPid", undefined, undefined);

            //PLASTIFICATION//
            //***********************************************************************************************************/
            //***********************************************************************************************************/
            //***********************************************************************************************************/
            //***********************************************************************************************************/
         

            var rPzTemp = createCustomVariable(i, "rPzTemp", nr4, "rPzTemp", "ZEEX_3111_Hmi", "udtEmPz", "rPzTemp", undefined, undefined, undefined,);

            var rAct = createCustomVariable(i, "rAct", rPzTemp, "rAct", "ZEEX_3111_Hmi", "udtEmPz", "rPzTemp", "rAct", undefined, rActGet, rActSet);
        function rActGet(nameNodeId,serverValues){
            createInitialStatusFunction("rAct", 20, { 1: 100, 2: 305, 6: 306, 7: 355 }, i, nameNodeId, serverValues);

        }
            function rActSet() { }

            var rSet = createCustomVariable(i, "rSet", rPzTemp, "rSet", "ZEEX_3111_Hmi", "udtEmPz", "rPzTemp", "rSet", undefined, rSetGet, initial.rSetSet);
            function rSetGet() { }

            var rOpMin = createCustomVariable(i, "rOpMin", rPzTemp, "rOpMin", "ZEEX_3111_Hmi", "udtEmPz", "rPzTemp", "rOpMin", undefined, rOpMinGet, rOpMinSet);
            function rOpMinGet() { }
            function rOpMinSet() { }

            var rOpMax = createCustomVariable(i, "rOpMax", rPzTemp, "rOpMax", "ZEEX_3111_Hmi", "udtEmPz", "rPzTemp", "rOpMax", undefined, rOpMaxGet, rOpMaxSet);
            function rOpMaxGet(nameNodeId, serverValues) {
                initial.rOpMax(i, nameNodeId, serverValues)
            }
            function rOpMaxSet() { }

            //EXTRUDER EXPERT SETTING//
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
            var rInjMinPauseTime = createCustomVariable(i, "rInjMinPauseTime", udtCool, "rInjMinPauseTime", "ZEEX_3111_Parameter", "udtCmPzPid", "udtCool", "rInjMinPauseTime", undefined, undefined, undefined);
            //Extruder ==> Expert Settings ==> PID Parameters ==> Cooling Control : "Pause-Set" //
            var rInjMinPauseTimeSet = createCustomVariable(i, "rInjMinPauseTimeSet", rInjMinPauseTime, "Set", "ZEEX_3111_Parameter", "udtCmPzPid", "udtCool", "rInjMinPauseTime", "Set", undefined, undefined, rInjMinPauseTimeSetGet, rInjMinPauseTimeSetSet);
            function rInjMinPauseTimeSetGet() { }
            function rInjMinPauseTimeSetSet() { }
            //Extruder ==> Expert Settings ==> PID Parameters ==> Cooling Control : "Pause-Max" //
            var rInjMinPauseTimeMax = createCustomVariable(i, "rInjMinPauseTimeMax", rInjMinPauseTime, "Max", "ZEEX_3111_Parameter", "udtCmPzPid", "udtCool", "rInjMinPauseTime", "Max", undefined, rInjMinPauseTimeMaxGet, rInjMinPauseTimeMaxSet);
            function rInjMinPauseTimeMaxGet() { }
            function rInjMinPauseTimeMaxSet() { }
            //***********************************************************************************************************/
            //Extruder ==> Expert Settings ==> PID Parameters ==> Cooling Control : "Pause-Min" //
            var rInjMinPauseTimeMin = createCustomVariable(i, "rInjMinPauseTimeMin", rInjMinPauseTime, "Min", "ZEEX_3111_Parameter", "udtCmPzPid", "rInjMinPauseTime", "Min", undefined, rInjMinPauseTimeMinGet, rInjMinPauseTimeMinSet);
            function rInjMinPauseTimeMinGet() { }
            function rInjMinPauseTimeMinSet() { }
            //***********************************************************************************************************/
            //Extruder ==> Expert Settings ==> PID Parameters ==> Cooling Control : "Min OnTime //
            var rPwmMinOnTimeCool = createCustomVariable(i, "rPwmMinOnTimeCool", udtCool, "rPwmMinOnTime", "ZEEX_3111_Parameter", "udtCmPzPid", "udtCool", "rPwmMinOnTime", undefined, undefined, undefined);
            //Extruder ==> Expert Settings ==> PID Parameters ==> Cooling Control : "Min OnTime-Set" //
            var rPwmMinOnTimeCoolSet = createCustomVariable(i, "rPwmMinOnTimeCoolSet", rPwmMinOnTimeCool, "Set", "ZEEX_3111_Parameter", "udtCmPzPid", "udtCool", "rPwmMinOnTime", "Set", rPwmMinOnTimeCoolSetGet, rPwmMinOnTimeCoolSetSet);
            function rPwmMinOnTimeCoolSetGet() { }
            function rPwmMinOnTimeCoolSetSet() { }
            //Extruder ==> Expert Settings ==> PID Parameters ==> Cooling Control : "Min OnTime-Max" //
            var rPwmMinOnTimeCoolMax = createCustomVariable(i, "rPwmMinOnTimeCoolMax", rPwmMinOnTimeCool, "Max", "ZEEX_3111_Parameter", "udtCmPzPid", "udtCool", "rPwmMinOnTime", "Max", rPwmMinOnTimeCoolMaxGet, rPwmMinOnTimeCoolMaxSet);
            function rPwmMinOnTimeCoolMaxGet() { }
            function rPwmMinOnTimeCoolMaxSet() { }
            //Extruder ==> Expert Settings ==> PID Parameters ==> Cooling Control : "Min OnTime-Min" //
            var rPwmMinOnTimeCoolMin = createCustomVariable(i, "rPwmMinOnTimeCoolMin", rPwmMinOnTimeCool, "Min", "ZEEX_3111_Parameter", "udtCmPzPid", "udtCool", "rPwmMinOnTime", "Min", rPwmMinOnTimeCoolMinGet, rPwmMinOnTimeCoolMinSet);
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
            var rPwmMinOnTimeHeatSet = createCustomVariable(i, "rPwmMinOnTimeHeatSet", rPwmMinOnTimeHeat, "Set", "ZEEX_3111_Parameter", "udtCmPzPid", "udtHeat", "rPwmMinOnTime", "Set", undefined, rPwmMinOnTimeHeatSetGet, rPwmMinOnTimeHeatSetSet);
            function rPwmMinOnTimeHeatSetGet() { }
            function rPwmMinOnTimeHeatSetSet() { }
            //Extruder ==> Expert Settings ==> PID Parameters ==> Heating Control : "Min OnTime-Max" //
            var rPwmMinOnTimeHeatMax = createCustomVariable(i, "rPwmMinOnTimeHeatMax", rPwmMinOnTimeHeat, "Max", "ZEEX_3111_Parameter", "udtCmPzPid", "udtHeat", "rPwmMinOnTime", "Max", undefined, rPwmMinOnTimeHeatMaxGet, rPwmMinOnTimeHeatMaxSet);
            function rPwmMinOnTimeHeatMaxGet() { }
            function rPwmMinOnTimeHeatMaxSet() { }
            //Extruder ==> Expert Settings ==> PID Parameters ==> Heating Control : "Min OnTime-Min" //
            var rPwmMinOnTimeHeatMin = createCustomVariable(i, "rPwmMinOnTimeHeatMin", rPwmMinOnTimeHeat, "Max", "ZEEX_3111_Parameter", "udtCmPzPid", "udtHeat", "rPwmMinOnTime", "Min", undefined, rPwmMinOnTimeHeatMinGet, rPwmMinOnTimeHeatMinSet);
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
            var rGainHeatSet = createCustomVariable(i, "rGainHeatSet", udtHeatPid, "rGain", "ZEEX_3111_Parameter", "udtCmPzPid", "udtHeat", "udtPid", "rGain", rGainHeatSetGet, rGainHeatSetSet);
            function rGainHeatSetGet(nameNodeId, servervalues) {
                initial.rGainHeatSet(i, nameNodeId, servervalues)
            }
            function rGainHeatSetSet() {

            }
            //***********************************************************************************************************/
            //Extruder ==> Expert Settings ==> PID Parameters ==> Parameter Heat : "rTi-Set" //
            var rTiHeatSet = createCustomVariable(i, "rTiHeatSet", udtHeatPid, "rTi", "ZEEX_3111_Parameter", "udtCmPzPid", "udtHeat", "udtPid", "rTi", rTiHeatSetGet, undefined);
            function rTiHeatSetGet(nameNodeId, serverValues) {
                initial.rTiHeatSet(i, nameNodeId, serverValues)
            };
            //***********************************************************************************************************/
            //Extruder ==> Expert Settings ==> PID Parameters ==> Parameter Heat : "rTd-Set" //
            var rTdHeatSet = createCustomVariable(i, "rTdHeatSet", udtHeatPid, "rTd", "ZEEX_3111_Parameter", "udtCmPzPid", "udtHeat", "udtPid", "rTd", rTdHeatSetGet, undefined);
            function rTdHeatSetGet(nameNodeId, serverValues) {
                initial.rTdHeatSet(i, nameNodeId, serverValues)
            }
            //***********************************************************************************************************/
            //Extruder ==> Expert Settings ==> PID Parameters ==> Parameter Heat : "rTdFiltRatio-Set" //
            var rTdFiltRatioHeatSet = createCustomVariable(i, "rTdFiltRatioHeatSet", udtHeatPid, "rTdFiltRatio", "ZEEX_3111_Parameter", "udtCmPzPid", "udtHeat", "udtPid", "rTdFiltRatio", rTdFiltRatioHeatSetGet, undefined);
            function rTdFiltRatioHeatSetGet(nameNodeId, serverValues) {
                initial.rTdFiltRatioHeatSet(i, nameNodeId, serverValues)
            }
            //***********************************************************************************************************/
            //Extruder ==> Expert Settings ==> PID Parameters ==> Parameter Heat : "rPWeighting-Set" //
            var rPWeightingHeatSet = createCustomVariable(i, "rPWeightingHeatSet", udtHeatPid, "rPWeighting", "ZEEX_3111_Parameter", "udtCmPzPid", "udtHeat", "udtPid", "rPWeighting", rPWeightingHeatSetGet, undefined);
            function rPWeightingHeatSetGet(nameNodeId, serverValues) {
                initial.rPWeightingHeatSet(i, nameNodeId, serverValues)
            }
            //***********************************************************************************************************/
            //Extruder ==> Expert Settings ==> PID Parameters ==> Parameter Heat : "rDWeighting-Set" //
            var rDWeightingHeatSet = createCustomVariable(i, "rDWeightingHeatSet", udtHeatPid, "rDWeighting", "ZEEX_3111_Parameter", "udtCmPzPid", "udtHeat", "udtPid", "rDWeighting", rDWeightingHeatSetGet, undefined);
            function rDWeightingHeatSetGet(nameNodeId, serverValues) {
                initial.rDWeightingHeatSet(i, nameNodeId, serverValues)
            }
            //***********************************************************************************************************/
            //Extruder ==> Expert Settings ==> PID Parameters ==> Parameter Heat : "rCycle-Set" //
            var rCycleHeatSet = createCustomVariable(i, "rCycleHeatSet", udtHeatPid, "rCycle", "ZEEX_3111_Parameter", "udtCmPzPid", "udtHeat", "udtPid", "rCycle", rCycleHeatSetGet, undefined);
            function rCycleHeatSetGet(nameNodeId, serverValues) {
                initial.rCycleHeatSet(i, nameNodeId, serverValues)
            }
            //***********************************************************************************************************/
            //Extruder ==> Expert Settings ==> PID Parameters ==> Parameter Heat : "rControlZone-Set" //
            var rControlZoneHeatSet = createCustomVariable(i, "rControlZoneHeatSet", udtHeatPid, "rControlZone", "ZEEX_3111_Parameter", "udtCmPzPid", "udtHeat", "udtPid", "rControlZone", rControlZoneHeatSetGet, undefined);
            function rControlZoneHeatSetGet(nameNodeId, serverValues) {
                initial.rControlZoneHeatSet(i, nameNodeId, serverValues)
            }
            //***********************************************************************************************************/
            //Extruder ==> Expert Settings ==> PID Parameters ==> Parameter Heat : "rDeadZone-Set" //
            var rDeadZoneHeatSet = createCustomVariable(i, "rDeadZoneHeatSet", udtHeatPid, "rDeadZone", "ZEEX_3111_Parameter", "udtCmPzPid", "udtHeat", "udtPid", "rDeadZone", rDeadZoneHeatSetGet, undefined);
            function rDeadZoneHeatSetGet(nameNodeId, serverValues) {
                initial.rDeadZoneHeatSet(i, nameNodeId, serverValues)
            }
            //***********************************************************************************************************/
            //Extruder ==> Expert Settings ==> PID Parameters ==> Curent Heat : "Windings-Set" //
            var udWindOfCoilSet = createCustomVariable(i, "udWindOfCoilSet", nr2, "Set", "ZEEX_3111_Config", "udWindOfCoil", "Set", undefined, undefined, undefined);
            //Extruder ==> Expert Settings ==> PID Parameters ==> Curent Heat : "Windings-Max" //
            var udWindOfCoilMax = createCustomVariable(i, "udWindOfCoilMax", nr2, "Max", "ZEEX_3111_Config", "udWindOfCoil", "Max", undefined, undefined, undefined);
            //Extruder ==> Expert Settings ==> PID Parameters ==> Curent Heat : "Windings-Min" //
            var udWindOfCoilMin = createCustomVariable(i, "udWindOfCoilMin", nr2, "Min", "ZEEX_3111_Config", "udWindOfCoil", "Min", undefined, undefined, undefined);
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
            //***********************************************************************************************************/
            //***********************************************************************************************************/
            //***********************************************************************************************************/
            //***********************************************************************************************************/

         


        }
        
    }
}


