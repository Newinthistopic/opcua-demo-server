// @see https://github.com/node-opcua/node-opcua/blob/master/documentation/server_with_method.md
module.exports = {
    run: function (namespace, device, opcua, verbose) {
        const method_sqrt = namespace.addMethod(device, {
            browseName     : "sqrt(x)",
            nodeId         : "ns=1;s=sqrt(x)",
            inputArguments : [
                {
                    name       : "x",
                    description: {text: "Input value x for the square root"},
                    dataType   : opcua.DataType.Double
                }
            ],
            outputArguments: [{
                name       : "sqrt_x",
                description: {text: "Result of the square root operation on x"},
                dataType   : opcua.DataType.Double,
                valueRank  : 1
            }]
        });

        // optionally, we can adjust userAccessLevel attribute
        method_sqrt.outputArguments.userAccessLevel = opcua.makeAccessLevelFlag("CurrentRead");
        method_sqrt.inputArguments.userAccessLevel  = opcua.makeAccessLevelFlag("CurrentRead");

        method_sqrt.bindMethod((inputArguments, context, callback) => {

            const x = inputArguments[0].value;

            if (verbose) console.log("We will calculate the square root of " + x);

            const callMethodResult = {
                statusCode     : opcua.StatusCodes.Good,
                outputArguments: [{
                    dataType: opcua.DataType.Double,
                    value   : Math.sqrt(parseFloat(x))
                }]
            };
            callback(null, callMethodResult);
        });

        // optionally, we can adjust userAccessLevel attribute
        method_sqrt.outputArguments.userAccessLevel = opcua.makeAccessLevelFlag("CurrentRead");
        method_sqrt.inputArguments.userAccessLevel  = opcua.makeAccessLevelFlag("CurrentRead");

    }
};