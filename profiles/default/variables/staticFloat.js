// @see https://github.com/node-opcua/node-opcua/blob/master/documentation/creating_a_server.md
module.exports = {
    run: function (namespace, device, opcua, verbose, serverValues) {
        var name           = 'staticFloat';
        serverValues[name] = 17.17867834;
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
    }
};
