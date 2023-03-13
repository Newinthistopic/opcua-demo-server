

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
        
        var rActNodeId;
        serverValues[rActNodeId] = 20;
        var rAct = namespace3.addVariable({
            componentOf: rPzTemp,
            browseName: "rAct",
            dataType: opcua.DataType.Float,
            nodeId: "ns=3;s=" + "\"ZEEX_3111_Hmi\".\"udtEmPz\"" + "[" + i + "]." + "\"rPzTemp\".\"rAct\"",
            value: {
            get: function () {
                //console.log(`Getting value for ${this.nodeId.value}`);
                const rActNodeId = this.nodeId.value;
                return new opcua.Variant({ dataType: opcua.DataType.Float, value: serverValues[rActNodeId] });
              },
              set: function (variant) {
                serverValues[rActNodeId] = parseFloat(variant.value);
                console.log(`Setter-Funktion aufgerufen für rAct mit nodeId ${this.nodeId.value}: ${rActValue}`);
                
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
      
                    // Find the corresponding rAct node and update its value
                    rActNodeId = rSetNodeId.replace("rSet", "rAct");
                    serverValues[rActNodeId] = serverValues[rSetNodeId];
                    console.log(`rAct nodeId: ${rActNodeId},\n rAct Wert: ${serverValues[rActNodeId]}`);

                    
                    console.log(`Setter-Funktion aufgerufen für rSet  mit nodeId ${rSetNodeId}: ${serverValues[rSetNodeId]}`);
      
                    // Hier kann die Methode aufgerufen werden, um den Wert von rAct zu aktualisieren
                    updateRActValue(serverValues[rActNodeId],rActNodeId);
                    return opcua.StatusCodes.Good;
                    
        
                   
                }

              
            }
        });


        
        function updateRActValue(newRSetValue,rActNodeId) {
            // Hier kann die Logik implementiert werden, um den Wert von rAct entsprechend zu aktualisieren
            serverValues[rActNodeId] = newRSetValue;
            //rActValue = newRSetValue;
            console.log(`Die Node-ID "${rActNodeId}" hat den Wert ${serverValues[rActNodeId]}.`);

         //   console.log(`rAct Wert aktualisiert: ${newRSetValue}`);
            //console.log(`rAct Wert aktualisiert: ${rActValue}`);
          }  


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

    }
        )
        var rOpMax=namespace3.addVariable({
            componentOf: rPzTemp,
            browseName : "rOpMax",
            dataType   : opcua.DataType.Double,
            nodeId     : "ns=3;s=" + "\"ZEEX_3111_Hmi\".\"udtEmPz\""+ "[" + i + "]." + "\"rPzTemp\".\"rOpMax\"",
                       value      : {
              get: function () {
                  return new opcua.Variant({dataType: opcua.DataType.Double, value: serverValues[rOpMax]=355});
             },
               
             set: function (variant) {
                serverValues[rOpMax] = parseFloat(variant.value);
              return opcua.StatusCodes.Good;                     
               }
          }
  
      }
        ) 


        var rOpMin=namespace3.addVariable({
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

    }

        }*/
        
    }
    }
        
}