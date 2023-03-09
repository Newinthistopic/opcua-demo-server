// @see https://github.com/node-opcua/node-opcua/blob/master/documentation/creating_a_server.md
module.exports = {
    run: function (namespace, device, opcua, verbose, serverValues) {
        var name           = 'staticString';
        serverValues[name] = '(staticStringItem)';
        namespace.addVariable(
            {
                componentOf: device,
                nodeId     : "ns=1;s=" + name,
                browseName : name,
                dataType   : opcua.DataType.String,
                value      : {
                    get: function () {
                        return new opcua.Variant({dataType: opcua.DataType.String, value: serverValues[name]});
                    },
                    set: function (variant) {
                        serverValues[name] = variant.value;
                        return opcua.StatusCodes.Good;
                    }
                }
            }
        );
    }
};
