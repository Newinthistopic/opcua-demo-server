// @see https://github.com/node-opcua/node-opcua/blob/master/documentation/creating_a_server.md
module.exports = {
    run: function (namespace, device, opcua, verbose, serverValues) {
        var name           = 'randFloat';
        serverValues[name] = 0;
        namespace.addVariable(
            {
                componentOf: device,
                nodeId     : "ns=1;s=" + name,
                browseName : name,
                dataType   : opcua.DataType.Double,
                value      : {
                    get: function () {
                        return new opcua.Variant({dataType: opcua.DataType.Double, value: serverValues[name]});
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
