const mqtt = require('mqtt');


const client = mqtt.connect({

    host:'122.175.46.149',
    port:3005,
    username:'phizzle',
    password:'phizzle2022'

});


client.on('connect',()=>{


    client.subscribe(
        'astls/instrument/apc/555212'
    );


});


client.on('message',(topic,message)=>{


    let data = JSON.parse(message.toString());


    console.log(data);



    // QA validations


    if(data.status)
    {
        console.log("✅ Status exists");
    }
    else
    {
        console.log("❌ Status missing");
    }



    if(typeof data.value === "number")
    {
        console.log("✅ Value is number");
    }
    else
    {
        console.log("❌ Value validation failed");
    }


});