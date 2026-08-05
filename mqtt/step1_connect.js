const mqtt = require('mqtt');

const client = mqtt.connect({
    host: '122.175.46.149',
    port: 3005,
    username: 'phizzle',
    password: 'phizzle2022'
});


client.on('connect', () => {

    console.log("MQTT Connected");

});