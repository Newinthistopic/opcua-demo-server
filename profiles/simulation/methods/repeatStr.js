// @see https://github.com/node-opcua/node-opcua/blob/master/documentation/server_with_method.md
module.exports = {

    run: function (namespace, device, opcua, verbose) {
        const method = namespace.addMethod(device, {
            browseName     : "repeatStr",
            nodeId         : "ns=1;s=repeatStr",
            inputArguments : [
                {
                    name       : "NumberOfRepetitions",
                    description: {text: "How many times the string shall be repeated"},
                    dataType   : opcua.DataType.UInt32
                }, {
                    name       : "StringToRepeat",
                    description: {text: "The string to repeat"},
                    dataType   : opcua.DataType.String
                }
            ],
            outputArguments: [{
                name       : "ConcatenatedString",
                description: {text: "the result string"},
                dataType   : opcua.DataType.String,
                valueRank  : 1
            }]
        });

        // optionally, we can adjust userAccessLevel attribute
        method.outputArguments.userAccessLevel = opcua.makeAccessLevelFlag("CurrentRead");
        method.inputArguments.userAccessLevel  = opcua.makeAccessLevelFlag("CurrentRead");

        method.bindMethod((inputArguments, context, callback) => {

            const count = inputArguments[0].value;
            const str   = inputArguments[1].value;

            if (verbose) console.log("The string '" + str + "' will be repeated " + count + " times!");

            const results = [];
            for (let i = 0; i < count; i++) {
                results.push(str);
            }

            const callMethodResult = {
                statusCode     : opcua.StatusCodes.Good,
                outputArguments: [{
                    dataType : opcua.DataType.String,
                    arrayType: opcua.VariantArrayType.Array,
                    value    : results
                }]
            };
            callback(null, callMethodResult);
        });
    }
};