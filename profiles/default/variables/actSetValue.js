// @see https://github.com/node-opcua/node-opcua/blob/master/documentation/creating_a_server.md
module.exports = {
    run: function (namespace, device, opcua, verbose, serverValues) {
        var actSetValue = namespace.addObject({
                                                  componentOf: device,
                                                  browseName : "actSetValue",
                                                  nodeId     : "ns=1;s=" + "actSetValue"
                                              });

        var act = namespace.addVariable({
                                            componentOf: actSetValue,
                                            browseName : "actValue",
                                            dataType   : opcua.DataType.Double,
                                            value      : new opcua.Variant({dataType: opcua.DataType.Double, value: 0}),
                                            nodeId     : "ns=1;s=" + "actSetValue.actValue"
                                        });

        var set = namespace.addVariable({
                                            componentOf: actSetValue,
                                            browseName : "setValue",
                                            dataType   : opcua.DataType.Int32,
                                            value      : new opcua.Variant({dataType: opcua.DataType.Int32, value: 0}),
                                            nodeId     : "ns=1;s=" + "actSetValue.setValue"
                                        });

        var status = namespace.addVariable({
                                               componentOf: actSetValue,
                                               browseName : "status",
                                               dataType   : opcua.DataType.Boolean,
                                               value      : new opcua.Variant({dataType: opcua.DataType.Boolean, value: false}),
                                               nodeId     : "ns=1;s=" + "actSetValue.status"
                                           });
    }
};