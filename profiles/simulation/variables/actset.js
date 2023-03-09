

module.exports = {
    run: function (addressSpace, device, opcua, verbose, serverValues) {
        
        
       
        // create ppC_Compound_V3 object

        const namespace3=addressSpace.getNamespace('http://mynamespace-3/UA/');


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
        
        
        for (var i = 0; i<14; i++){
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
      
     
        
        var rSet= namespace3.addVariable({
            componentOf: rPzTemp,
            browseName : "rSet",
            dataType   : opcua.DataType.Float,
            nodeId     : "ns=3;s=" + "\"ZEEX_3111_Hmi\".\"udtEmPz\""+ "[" + i + "]." + "\"rPzTemp\".\"rSet\"",
            value      : {
               get: function () {
              console.log(serverValues);
                   return new opcua.Variant({dataType: opcua.DataType.Float, value: serverValues[i]});
                   
              },
                set: function (variant) {
                    serverValues[i] = parseFloat(variant.value);
                    
                    console.log(serverValues);
                                        return opcua.StatusCodes.Good;
                    }
                                     
                }
                        }
        )
        var rAct= namespace3.addVariable({
            componentOf: rPzTemp,
            browseName : "rAct",
            dataType   : opcua.DataType.Float,
            nodeId     : "ns=3;s=" + "\"ZEEX_3111_Hmi\".\"udtEmPz\""+ "[" + i + "]." + "\"rPzTemp\".\"rAct\"",
            value      : {
                get: function () {
                    serverValues[rAct] = 20;
                    return new opcua.Variant({dataType: opcua.DataType.Float, value: serverValues[i] });
                    
                },
                set: function (variant) {
                    
                    serverValues[i] = parseFloat(variant.value);
                    return opcua.StatusCodes.Good;
                    }
                }

                }
        )

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