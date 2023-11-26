module.exports = {
  run: function (namespace, device, opcua, verbose, serverValues) {
    var name = 'randFloat';
    serverValues[name] = 0;
    namespace.addVariable(
      {
        componentOf: device,
        nodeId: "ns=1;s=" + name,
        browseName: name,
        dataType: opcua.DataType.Double,
        value: {
          get: function () {
            return new opcua.Variant({ dataType: opcua.DataType.Double, value: serverValues[name] });
          },
          set: function (variant) {
            serverValues[name] = parseFloat(variant.value);
            return opcua.StatusCodes.Good;
          }
        }
      }
    );
    // Change value every 100ms
    setInterval(function () {
      serverValues[name] = Math.random() + (Math.random() * 100);
    }, 1000);
  }
};



/*****************/
/*** VARIABLES ***/
/*****************/
if (varFiles.length) {
  if (verbose) console.log("[..] OPC UA: Creating variables from " + varFiles.length + ' external files');
  varFiles.forEach(function (file) {
    var module = require(profileDir + '/variables/' + file);
    var varName = file.replace(/\.js$/);
    serverValues[varName] = module.run(namespace, device, opcua, verbose, serverValues);
  });
  if (verbose) console.log("[OK] OPC UA: Variables created");
}