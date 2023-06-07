

function run1(addressSpace, device, opcua, verbose, serverValues) {

    for (let i = 0; i < 14; i++) {

        var rAct = functions.createCustomVariable(i, "rAct", rPzTemp, "rAct", "ZEEX_3111_Hmi", "udtEmPz", "rPzTemp", "rAct", undefined, functions.rActGet, undefined);

        var rSet = functions.createCustomVariable(i, "rSet", rPzTemp, "rSet", "ZEEX_3111_Hmi", "udtEmPz", "rPzTemp", "rSet", undefined, undefined, functions.rSetSet);

        var rOpMin = functions.createCustomVariable(i, "rOpMin", rPzTemp, "rOpMin", "ZEEX_3111_Hmi", "udtEmPz", "rPzTemp", "rOpMin", undefined, functions.rOpMinGet, undefined);
        //console.log(serverValues[rOpMin.rOpMinNodeId]);
        //Plastification ==> Heating Zones: "Set-Max (rOpMax)" //
        var rOpMax = functions.createCustomVariable(i, "rOpMax", rPzTemp, "rOpMax", "ZEEX_3111_Hmi", "udtEmPz", "rPzTemp", "rOpMax", undefined, functions.rOpMaxGet, undefined);

       
        
    }


}

module.exports = {
    run1: run1,

}






