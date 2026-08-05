const mqtt = require('mqtt');

const PATH = 'astls/instrument/apc/#';

const client = mqtt.connect({
    host:'122.175.46.149',
    port:3005,
    username:'phizzle',
    password:'phizzle2022'
});


let topics = new Set();


client.on('connect',()=>{

    console.log("✅ MQTT Connected");

    client.subscribe(PATH,()=>{

        console.log("✅ Listening:");
        console.log(PATH);

    });

});


client.on('message',(topic,message)=>{

    topics.add(topic);

});


// Stop after 10 seconds
setTimeout(()=>{


    console.log("\n===== Topics Found =====");


    topics.forEach(topic=>{
        console.log(topic);
    });


    console.log("\nTotal Topics:", topics.size);


    client.end();


},10000);