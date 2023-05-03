function initialstartrSetTolnNodeId(i, nodeId, serverValues) {
   
    var rSetTolHNodeIdInitial = [];
    rSetTolHNodeIdInitial[i] = nodeId;
    console.log(`Derzeitige NodeId ${i}: ${rSetTolHNodeIdInitial[i]}`);
    
    if (!(nodeId in serverValues)) {
        serverValues[rSetTolHNodeIdInitial[0]] = serverValues[rSetTolHMinNodeIdInitial[0]];
        serverValues[rSetTolHNodeIdInitial[1]] = serverValues[rSetTolHMinNodeIdInitial[1]];
        serverValues[rSetTolHNodeIdInitial[2]] = serverValues[rSetTolHMinNodeIdInitial[2]];
        serverValues[rSetTolHNodeIdInitial[3]] = serverValues[rSetTolHMinNodeIdInitial[3]];
        serverValues[rSetTolHNodeIdInitial[4]] = serverValues[rSetTolHMinNodeIdInitial[4]];
        serverValues[rSetTolHNodeIdInitial[5]] = serverValues[rSetTolHMinNodeIdInitial[5]];
        serverValues[rSetTolHNodeIdInitial[6]] = serverValues[rSetTolHMinNodeIdInitial[6]];
        serverValues[rSetTolHNodeIdInitial[7]] = serverValues[rSetTolHMinNodeIdInitial[7]];
        serverValues[rSetTolHNodeIdInitial[8]] = serverValues[rSetTolHMinNodeIdInitial[8]];
        serverValues[rSetTolHNodeIdInitial[9]] = serverValues[rSetTolHMinNodeIdInitial[9]];
        serverValues[rSetTolHNodeIdInitial[10]] = serverValues[rSetTolHMinNodeIdInitial[10]];
        serverValues[rSetTolHNodeIdInitial[11]] = serverValues[rSetTolHMinNodeIdInitial[11]];
        serverValues[rSetTolHNodeIdInitial[12]] = serverValues[rSetTolHMinNodeIdInitial[12]];
        
        serverValues[rSetTolHNodeIdInitial[13]] = serverValues[rSetTolHMinNodeIdInitial[13]];
        serverValues[nodeId] = serverValues[rSetTolHNodeIdInitial[i]];
    }
}



function initialstartrSetTolHMinNodeId(i, nodeId, serverValues) {
    var rSetTolHMinNodeIdInitial = [];
    rSetTolHMinNodeIdInitial[i] = nodeId;
   console.log(`Derzeitige NodeId ${i}: ${rSetTolHMinNodeIdInitial[i]}`);

  //  if (!(nodeId in serverValues)) {
        serverValues[rSetTolHMinNodeIdInitial[0]] = 
        serverValues[rSetTolHMinNodeIdInitial[1]] = 
        serverValues[rSetTolHMinNodeIdInitial[2]] = 
        serverValues[rSetTolHMinNodeIdInitial[3]] =
        serverValues[rSetTolHMinNodeIdInitial[4]] = 
        serverValues[rSetTolHMinNodeIdInitial[5]] = 
        serverValues[rSetTolHMinNodeIdInitial[6]] = 
        serverValues[rSetTolHMinNodeIdInitial[7]] = 
        serverValues[rSetTolHMinNodeIdInitial[8]] = 
        serverValues[rSetTolHMinNodeIdInitial[9]] = 
        serverValues[rSetTolHMinNodeIdInitial[10]] = 
        serverValues[rSetTolHMinNodeIdInitial[11]] = 
        serverValues[rSetTolHMinNodeIdInitial[12]] = 
        serverValues[rSetTolHMinNodeIdInitial[13]] = 

        serverValues[nodeId] = serverValues[rSetTolHMinNodeIdInitial[i]];
        const initialstartrSetTolHNodeIdValues = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 12, 13];
const initialstartrSetTolHMinNodeIdValues = [0, 5, 5, 5, 6, 6, 6, 6, 4, 4, 4, 3, 4, 7, 6];

var rSetTolHNodeIdInitial = [];
var rSetTolHMinNodeIdInitial = [];
  //  }
}
