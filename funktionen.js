//*****InitialStatus****/

function initialstartrOpMax(i, nodeId, serverValues) {
  var rOpMaxNodeIdInitial = [];
  rOpMaxNodeIdInitial[i] = nodeId;
  // console.log(`Derzeitige NodeId ${i}: ${rOpMaxNodeIdInitial[i]}`);

  if (!(nodeId in serverValues)) {
    serverValues[rOpMaxNodeIdInitial[0]] = 0
    serverValues[rOpMaxNodeIdInitial[1]] = 100;
    serverValues[rOpMaxNodeIdInitial[2]] = 300;
    serverValues[rOpMaxNodeIdInitial[3]] = 305;
    serverValues[rOpMaxNodeIdInitial[4]] = 310;
    serverValues[rOpMaxNodeIdInitial[5]] = 320;
    serverValues[rOpMaxNodeIdInitial[6]] = 330;
    serverValues[rOpMaxNodeIdInitial[7]] = 340;
    serverValues[rOpMaxNodeIdInitial[8]] = 350;
    serverValues[rOpMaxNodeIdInitial[9]] = 360;
    serverValues[rOpMaxNodeIdInitial[10]] = 370;
    serverValues[rOpMaxNodeIdInitial[11]] = 380;
    serverValues[rOpMaxNodeIdInitial[12]] = 390;
    serverValues[rOpMaxNodeIdInitial[12]] = 391;
    serverValues[rOpMaxNodeIdInitial[13]] = 392;
    serverValues[nodeId] = serverValues[rOpMaxNodeIdInitial[i]];
  }
}
  

function initialstartrAct(i, nodeId, serverValues) {
  var rActNodeIdInitial = [];
  rActNodeIdInitial[i] = nodeId;
  // console.log(`Derzeitige NodeId ${i}: ${rActNodeIdInitial[i]}`);

  if (!(nodeId in serverValues)) {
    serverValues[rActNodeIdInitial[0]] = 0
    serverValues[rActNodeIdInitial[1]] = 20;
    serverValues[rActNodeIdInitial[2]] = 20;
    serverValues[rActNodeIdInitial[3]] = 21;
    serverValues[rActNodeIdInitial[4]] = 22;
    serverValues[rActNodeIdInitial[5]] = 20;
    serverValues[rActNodeIdInitial[6]] = 19;
    serverValues[rActNodeIdInitial[7]] = 20;
    serverValues[rActNodeIdInitial[8]] = 20;
    serverValues[rActNodeIdInitial[9]] = 21;
    serverValues[rActNodeIdInitial[10]] = 22;
    serverValues[rActNodeIdInitial[11]] = 20;
    serverValues[rActNodeIdInitial[12]] = 20;
    serverValues[rActNodeIdInitial[12]] = 20;
    serverValues[rActNodeIdInitial[13]] = 21;
    serverValues[nodeId] = serverValues[rActNodeIdInitial[i]];
  }
}

function initialstartWarningH(i, nodeId, serverValues) {
  var WarningHNodeIdInitial = [];
  WarningHNodeIdInitial[i] = nodeId;
  // console.log(`Derzeitige NodeId ${i}: ${WarningHNodeIdInitial[i]}`);

  if (!(nodeId in serverValues)) {
    serverValues[WarningHNodeIdInitial[0]] = 0
    serverValues[WarningHNodeIdInitial[1]] = 100;
    serverValues[WarningHNodeIdInitial[2]] = 300;
    serverValues[WarningHNodeIdInitial[3]] = 305;
    serverValues[WarningHNodeIdInitial[4]] = 310;
    serverValues[WarningHNodeIdInitial[5]] = 320;
    serverValues[WarningHNodeIdInitial[6]] = 330;
    serverValues[WarningHNodeIdInitial[7]] = 340;
    serverValues[WarningHNodeIdInitial[8]] = 350;
    serverValues[WarningHNodeIdInitial[9]] = 360;
    serverValues[WarningHNodeIdInitial[10]] = 370;
    serverValues[WarningHNodeIdInitial[11]] = 380;
    serverValues[WarningHNodeIdInitial[12]] = 390;
    serverValues[WarningHNodeIdInitial[12]] = 391;
    serverValues[WarningHNodeIdInitial[13]] = 392;
    serverValues[nodeId] = serverValues[WarningHNodeIdInitial[i]];
  }
}

function initialstartAlarmHH(i, nodeId, serverValues) {
  var AlarmHHNodeIdInitial = [];
  AlarmHHNodeIdInitial[i] = nodeId;
  // console.log(`Derzeitige NodeId ${i}: ${AlarmHHNodeIdInitial[i]}`);

  if (!(nodeId in serverValues)) {
    serverValues[AlarmHHNodeIdInitial[0]] = 0
    serverValues[AlarmHHNodeIdInitial[1]] = 200;
    serverValues[AlarmHHNodeIdInitial[2]] = 450;
    serverValues[AlarmHHNodeIdInitial[3]] = 450;
    serverValues[AlarmHHNodeIdInitial[4]] = 450;
    serverValues[AlarmHHNodeIdInitial[5]] = 390;
    serverValues[AlarmHHNodeIdInitial[6]] = 399;
    serverValues[AlarmHHNodeIdInitial[7]] = 399;
    serverValues[AlarmHHNodeIdInitial[8]] = 399;
    serverValues[AlarmHHNodeIdInitial[9]] = 400;
    serverValues[AlarmHHNodeIdInitial[10]] = 450;
    serverValues[AlarmHHNodeIdInitial[11]] = 784;
    serverValues[AlarmHHNodeIdInitial[12]] = 698;
    serverValues[AlarmHHNodeIdInitial[12]] = 599;
    serverValues[AlarmHHNodeIdInitial[13]] = 640;
    serverValues[nodeId] = serverValues[AlarmHHNodeIdInitial[i]];
  }
}

function initialstartrSetTolHNodeId(i, nodeId, serverValues) {

  var rSetTolHNodeIdInitial = [];
  rSetTolHNodeIdInitial[i] = nodeId;
  //console.log(`Derzeitige NodeId ${i}: ${rSetTolHNodeIdInitial[i]}`);

  if (!(nodeId in serverValues)) {

    serverValues[rSetTolHNodeIdInitial[0]] = 0
    serverValues[rSetTolHNodeIdInitial[1]] = 5
    serverValues[rSetTolHNodeIdInitial[2]] = 6
    serverValues[rSetTolHNodeIdInitial[3]] = 5
    serverValues[rSetTolHNodeIdInitial[4]] = 6
    serverValues[rSetTolHNodeIdInitial[5]] = 6
    serverValues[rSetTolHNodeIdInitial[6]] = 5
    serverValues[rSetTolHNodeIdInitial[7]] = 6
    serverValues[rSetTolHNodeIdInitial[8]] = 7
    serverValues[rSetTolHNodeIdInitial[9]] = 8
    serverValues[rSetTolHNodeIdInitial[10]] = 7
    serverValues[rSetTolHNodeIdInitial[11]] = 5
    serverValues[rSetTolHNodeIdInitial[12]] = 5
    serverValues[rSetTolHNodeIdInitial[13]] = 8
    serverValues[nodeId] = serverValues[rSetTolHNodeIdInitial[i]];

  }
}




function initialstartrSetTolHMaxNodeId(i, nodeId, serverValues) {

  var rSetTolHMaxNodeIdInitial = [];
  rSetTolHMaxNodeIdInitial[i] = nodeId;
  //console.log(`Derzeitige NodeId ${i}: ${rSetTolHMaxNodeIdInitial[i]}`);

  

    serverValues[rSetTolHMaxNodeIdInitial[0]] = 10
    serverValues[rSetTolHMaxNodeIdInitial[1]] = 10
    serverValues[rSetTolHMaxNodeIdInitial[2]] = 10
    serverValues[rSetTolHMaxNodeIdInitial[3]] = 10
    serverValues[rSetTolHMaxNodeIdInitial[4]] = 10
    serverValues[rSetTolHMaxNodeIdInitial[5]] = 11
    serverValues[rSetTolHMaxNodeIdInitial[6]] = 12
    serverValues[rSetTolHMaxNodeIdInitial[7]] = 13
    serverValues[rSetTolHMaxNodeIdInitial[8]] = 14
    serverValues[rSetTolHMaxNodeIdInitial[9]] = 10
    serverValues[rSetTolHMaxNodeIdInitial[10]] = 10
    serverValues[rSetTolHMaxNodeIdInitial[11]] = 10
    serverValues[rSetTolHMaxNodeIdInitial[12]] = 11
    serverValues[rSetTolHMaxNodeIdInitial[13]] = 12
    serverValues[nodeId] = serverValues[rSetTolHMaxNodeIdInitial[i]];
  
}

function initialstartrSetTolHHNodeId(i, nodeId, serverValues) {

  var rSetTolHHNodeIdInitial = [];
  rSetTolHHNodeIdInitial[i] = nodeId;
  //console.log(`Derzeitige NodeId ${i}: ${rSetTolHNodeIdInitial[i]}`);

  if (!(nodeId in serverValues)) {

    serverValues[rSetTolHHNodeIdInitial[0]] = 0
    serverValues[rSetTolHHNodeIdInitial[1]] = 10
    serverValues[rSetTolHHNodeIdInitial[2]] = 10
    serverValues[rSetTolHHNodeIdInitial[3]] = 11
    serverValues[rSetTolHHNodeIdInitial[4]] = 15
    serverValues[rSetTolHHNodeIdInitial[5]] = 20
    serverValues[rSetTolHHNodeIdInitial[6]] = 13
    serverValues[rSetTolHHNodeIdInitial[7]] = 14
    serverValues[rSetTolHHNodeIdInitial[8]] = 15
    serverValues[rSetTolHHNodeIdInitial[9]] = 16
    serverValues[rSetTolHHNodeIdInitial[10]] = 17
    serverValues[rSetTolHHNodeIdInitial[11]] = 18
    serverValues[rSetTolHHNodeIdInitial[12]] = 17

    serverValues[rSetTolHHNodeIdInitial[13]] = 17
    serverValues[nodeId] = serverValues[rSetTolHHNodeIdInitial[i]];

  }
}

function initialstartrSetTolHMinNodeId(i, nodeId, serverValues) {
  var rSetTolHMinNodeIdInitial = [];
  rSetTolHMinNodeIdInitial[i] = nodeId;
  //console.log(`Derzeitige NodeId ${i}: ${rSetTolHMinNodeIdInitial[i]}`);

  //  if (!(nodeId in serverValues)) {
  serverValues[rSetTolHMinNodeIdInitial[0]] = 0;
  serverValues[rSetTolHMinNodeIdInitial[1]] = 5;
  serverValues[rSetTolHMinNodeIdInitial[2]] = 5;
  serverValues[rSetTolHMinNodeIdInitial[3]] = 5;
  serverValues[rSetTolHMinNodeIdInitial[4]] = 6;
  serverValues[rSetTolHMinNodeIdInitial[5]] = 6;
  serverValues[rSetTolHMinNodeIdInitial[6]] = 6;
  serverValues[rSetTolHMinNodeIdInitial[7]] = 6;
  serverValues[rSetTolHMinNodeIdInitial[8]] = 4;
  serverValues[rSetTolHMinNodeIdInitial[9]] = 4;
  serverValues[rSetTolHMinNodeIdInitial[10]] = 4;
  serverValues[rSetTolHMinNodeIdInitial[11]] = 3;
  serverValues[rSetTolHMinNodeIdInitial[12]] = 4;
  serverValues[rSetTolHMinNodeIdInitial[12]] = 7;
  serverValues[rSetTolHMinNodeIdInitial[13]] = 6;

  serverValues[nodeId] = serverValues[rSetTolHMinNodeIdInitial[i]];

  //  }
}

function initialstartrSetTolHHMinNodeId(i, nodeId, serverValues) {
  var rSetTolHHMinNodeIdInitial = [];
  rSetTolHHMinNodeIdInitial[i] = nodeId;
  //console.log(`Derzeitige NodeId ${i}: ${rSetTolHMinNodeIdInitial[i]}`);

  if (!(nodeId in serverValues)) {
    serverValues[rSetTolHHMinNodeIdInitial[0]] = 0;
    serverValues[rSetTolHHMinNodeIdInitial[1]] = 5;
    serverValues[rSetTolHHMinNodeIdInitial[2]] = 5;
    serverValues[rSetTolHHMinNodeIdInitial[3]] = 6;
    serverValues[rSetTolHHMinNodeIdInitial[4]] = 5;
    serverValues[rSetTolHHMinNodeIdInitial[5]] = 5;
    serverValues[rSetTolHHMinNodeIdInitial[6]] = 4;
    serverValues[rSetTolHHMinNodeIdInitial[7]] = 5;
    serverValues[rSetTolHHMinNodeIdInitial[8]] = 6;
    serverValues[rSetTolHHMinNodeIdInitial[9]] = 6;
    serverValues[rSetTolHHMinNodeIdInitial[10]] = 6;
    serverValues[rSetTolHHMinNodeIdInitial[11]] = 6;
    serverValues[rSetTolHHMinNodeIdInitial[12]] = 4;
    serverValues[rSetTolHHMinNodeIdInitial[12]] = 2;
    serverValues[rSetTolHHMinNodeIdInitial[13]] = 5;
    serverValues[nodeId] = serverValues[rSetTolHHMinNodeIdInitial[i]];

  }
}

module.exports = {
  initialstartWarningH: initialstartWarningH,
  initialstartAlarmHH: initialstartAlarmHH,
  initialstartrSetTolHMinNodeId: initialstartrSetTolHMinNodeId,
  initialstartrSetTolHNodeId: initialstartrSetTolHNodeId,
  initialstartrAct: initialstartrAct,
  initialstartrSetTolHHMinNodeId: initialstartrSetTolHHMinNodeId,
  initialstartrSetTolHHNodeId: initialstartrSetTolHHNodeId,
  initialstartrOpMax: initialstartrOpMax,
  initialstartrSetTolHMaxNodeId: initialstartrSetTolHMaxNodeId
}
