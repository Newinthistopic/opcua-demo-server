// @see https://github.com/node-opcua/node-opcua/blob/master/documentation/creating_a_server.md
module.exports = {
    run: function (namespace, device, opcua, verbose, serverValues) {
        var name           = 'staticInt';
        serverValues[name] = 33;
        namespace.addVariable(
            {
                componentOf: device,
                nodeId     : "ns=1;s=" + name,
                browseName : name,
                dataType   : opcua.DataType.Int32,
                value      : {
                    get: function () {
                        return new opcua.Variant({dataType: opcua.DataType.Int32, value: serverValues[name]});
                    },
                    set: function (variant) {
                        serverValues[name] = parseInt(variant.value);
                        return opcua.StatusCodes.Good;
                    }
                }
            }
        );
    }
};
