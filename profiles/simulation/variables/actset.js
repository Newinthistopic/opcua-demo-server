const { Interval } = require("node-opcua");


module.exports = {
    run: function (addressSpace, device, opcua, verbose, serverValues) {
        
        
       
        // create ppC_Compound_V3 object

        var namespace3=addressSpace.getNamespace('http://mynamespace-3/UA/');


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
            browseName : "udtEmPz",
            dataType   : opcua.DataType.Double,
            nodeId     : "s=" + "\"ZEEX_3111_Hmi\".\"udtEmPz\""  ,         
        });
        
        
        for (let i = 0; i<14; i++){
            var nr = namespace3.addVariable({
            componentOf: udtEmPz,
            browseName : i.toString(),
            dataType   : opcua.DataType.Double,
            nodeId     : "s=" + "\"ZEEX_3111_Hmi\".\"udtEmPz\""+ "[" + i + "]",
             
            
        }
        ) 
        
        var rPzTemp = namespace3.addVariable({
            componentOf: nr,
            browseName : "rPzTemp",
            dataType   : opcua.DataType.String,
            nodeId     : "s=" + "\"ZEEX_3111_Hmi\".\"udtEmPz\""+ "[" + i + "]." + "\"rPzTemp\""
           
        }
        ) 
  



       
        var initialStart=20;
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
                    const SetPoint = parseFloat(variant.value);
                    if (SetPoint >= 20) {
                      serverValues[rSetNodeId] = SetPoint;
                    } else {
                      console.log("Set-point must be greater than 20.");
                      return opcua.StatusCodes.Good;
                    }
                  
                
          
                        // Find the corresponding rAct node and update its value
                        rActNodeId = rSetNodeId.replace("rSet", "rAct");
                       // serverValues[rActNodeId] = serverValues[rSetNodeId];
                        
    
                        console.log(`Setter-Funktion aufgerufen für rSet mit nodeId "${rSetNodeId}": ${serverValues[rSetNodeId]}`);
console.log(`------------------------------------`);
console.log(`rAct nodeId:${rActNodeId}\nrAct Wert: ${serverValues[rActNodeId]}\n`);
console.log(`********************************************\n`);


function pt1Loop(startValue, targetValue, deltaTime, k, tau, startSlope = null) {
    let currentValue = startValue;
    let previousValue = startValue;
    let previousTime = Date.now();
    let slope = startSlope;
    const pt1Gain = k * deltaTime / tau;
    const pt1TimeConstant = tau / deltaTime;
    
    if (!slope) {
      slope = pt1Gain * (targetValue - startValue);
    }
    
    const intervalId = setInterval(() => {
      previousValue = currentValue;
      currentValue += slope * deltaTime / 1000;
      serverValues[rActNodeId] = currentValue;
    
      console.log(`Current value: ${currentValue.toFixed(2)}`);
    
      if (Math.abs(currentValue - targetValue) < 0.01) {
        clearInterval(intervalId);
        return;
      }
    
      const newSetPoint = serverValues[rSetNodeId];
      if (newSetPoint !== targetValue) {
        targetValue = newSetPoint;
        const currentTime = Date.now();
        const timeDelta = currentTime - previousTime;
        const valueDelta = currentValue - previousValue;
        slope = valueDelta / timeDelta * 1000 / deltaTime;
        console.log(`Slope: ${slope.toFixed(2)}`);
        previousTime = currentTime;
        clearInterval(intervalId);
        pt1Loop(currentValue, targetValue, deltaTime, k, tau, 0);
      }
      
    }, deltaTime);
  }
 // Hier wird eine neue Variable previousValue verwendet, um den vorherigen Messwert zu speichern, und eine Variable previousTime, um die Zeit der vorherigen Messung zu speichern. Am Ende jeder Iteration wird die Steigung der Kurve berechnet, indem die Änderung des Messwerts durch die Änderung der Zeit dividiert wird. Die Steigung wird dann in der Konsole ausgegeben.
  
  
  
  
  
  
  
  const deltaTime = 160; // Intervallzeit in Millisekunden
  const k = 0.2; // PT1-Gain
  const tau = 1500; // PT1-Zeitkonstante in Millisekunden

  pt1Loop(serverValues[rActNodeId], serverValues[rSetNodeId], deltaTime, k, tau);


                       
                        
                        return opcua.StatusCodes.Good;
                        

                       
                    }

              
            }
        });

        
     
          
          
          
        
        

    

 

     /*  var rMaLimMax=namespace3.addVariable({
          componentOf: rPzTemp,
          browseName : "rMaLimMax",
          dataType   : opcua.DataType.Double,
          nodeId     : "ns=3;s=" + "\"ZEEX_3111_Hmi\".\"udtEmPz\""+ "[" + i + "]." + "\"rPzTemp\".\"rMaLimMax\"",
          value      : {
            get: function () {
                return new opcua.Variant({dataType: opcua.DataType.Double, value: serverValues[rMaLimMax]=300});
           },
           set: function (variant) {
            serverValues[rMaLimMax]= parseFloat(variant.value);
            return opcua.StatusCodes.Good;
                                  
             }
            }
        }
        )
        var rMaLimMin=namespace3.addVariable({
          componentOf: rPzTemp,
          browseName : "rMaLimMin",
          dataType   : opcua.DataType.Double,
          nodeId     : "ns=3;s=" + "\"ZEEX_3111_Hmi\".\"udtEmPz\""+ "[" + i + "]." + "\"rPzTemp\".\"rMaLimMin\"",
          value      : {
            get: function () {
                return new opcua.Variant({dataType: opcua.DataType.Double, value: serverValues[rMaLimMin]=5});
           },
             
           set: function (variant) {
            serverValues[rMaLimMin] = parseFloat(variant.value);
            return opcua.StatusCodes.Good;                     
             }
        }

    }*/

        
       


     /*   var rOpMin=namespace3.addVariable({
            componentOf: rPzTemp,
            browseName : "rOpMin",
            dataType   : opcua.DataType.Float,
            nodeId     : "ns=3;s=" + "\"ZEEX_3111_Hmi\".\"udtEmPz\""+ "[" + i + "]." + "\"rPzTemp\".\"rOpMin\"",
                       value      : {
              get: function () {
                  return new opcua.Variant({dataType: opcua.DataType.Float, value: serverValues[rOpMin]=5});
             },
               
           set: function (variant) {
            serverValues[rOpMin]= parseFloat(variant.value);
              return opcua.StatusCodes.Good;     
             }

    }*/

        
        
    }
}
}
