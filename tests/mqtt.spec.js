// const mqtt = require('mqtt');

// const client = mqtt.connect({
//   host: '122.175.46.149',
//   port: 3005,
//   username: 'phizzle',
//   password: 'phizzle2022',
//   protocol: 'mqtt',
//   reconnectPeriod: 5000
// });

// client.on('connect', () => {
//   console.log('✅ MQTT Connected');

//   client.subscribe('#', (err) => {
//     if (err) {
//       console.log('Subscribe error:', err.message);
//     } else {
//       console.log('✅ Subscribed to all topics');
//     }
//   });
// });

// client.on('message', (topic, message) => {
//   console.log('Topic:', topic);
//   console.log('Message:', message.toString());
// });

// client.on('error', (err) => {
//   console.log('❌ MQTT Error:', err.message);
// });

// client.on('close', () => {
//   console.log('⚠️ MQTT Connection Closed');
// });



// 2. Second code 


const mqtt = require('mqtt');


const client = mqtt.connect({
    host:'122.175.46.149',
    port:3005,
    username:'phizzle',
    password:'phizzle2022'
});


let devices = new Set();



client.on('connect',()=>{

    console.log("✅ Connected");


    client.subscribe(
        'astls/instrument/apc/#',
        ()=>{
            console.log("Listening APC devices...");
        }
    );

});



client.on('message',(topic,message)=>{


    let parts = topic.split('/');


    /*
    Topic format:

    astls/instrument/apc/device/topic_type

    index:
    0 astls
    1 instrument
    2 apc
    3 device
    4 heartbeat
    5 basic

    */


    if(parts.length >= 4)
    {
        devices.add(parts[3]);
    }


});



setTimeout(()=>{


    console.log("\n========== DEVICE LIST ==========");


    devices.forEach(device=>{
        console.log(device);
    });


    client.end();


},30000);