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