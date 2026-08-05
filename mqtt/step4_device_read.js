const mqtt = require('mqtt');


const DEVICE_ID = "555212";


const topic =
`astls/instrument/apc/${DEVICE_ID}`;


const client = mqtt.connect({

    host:'122.175.46.149',
    port:3005,
    username:'phizzle',
    password:'phizzle2022'

});


client.on('connect',()=>{


    console.log("Connected");


    client.subscribe(topic,()=>{

        console.log("Listening:");

        console.log(topic);

    });


});


client.on('message',(topic,message)=>{


    console.log("\nDevice Topic:");

    console.log(topic);


    console.log("\nData:");

    console.log(message.toString());


});