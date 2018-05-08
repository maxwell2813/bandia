const discord = require("discord.js");
const client = new discord.Client();

function commandIs(str, msg){
    return msg.content.toLowerCase().startsWith("!" + str)
}

client.on('ready', () => {
    console.log('The bot is online!');
});

client.on('message', message => {
    var args = message.content.split(/[ ]+/);
	
    if(commandIs("bandia", message)){
        message.channel.sendMessage('Dios Mios!');
    }

    if(commandIs("Bandia", message)){
        message.channel.sendMessage('Dios Mios!');
    }
    
    if(commandIs("BanDia", message)){
        message.channel.sendMessage('Dios Mios!');
    }    
})

client.login(process.env.BOT_TOKEN);
