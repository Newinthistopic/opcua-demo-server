module.exports = {
    // Custom function for dynamic creation of MQTT messages upon OPC UA SET call
    setAirVentPercentage: function (variant, topic, mqttClient) {
        var payload = {
            'setValue': Math.round(variant.value),
            'src'     : 'opcua'
        };
        if (mqttClient) {
            mqttClient.publish(topic, JSON.stringify(payload));
        }

        return true;
    }
};
