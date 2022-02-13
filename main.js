const { Client, Collection, Intents } = require('discord.js');

const { wordFilter} = require("./filter.json");

const {clientId, guildId, token, prefix} = require('./config.json');

const Discord = require('discord.js')

const client = new Client({ intents: [
    Intents.FLAGS.GUILDS, 
    Intents.FLAGS.GUILD_MESSAGES, 
    Intents.FLAGS.GUILD_MEMBERS, 
    Intents.FLAGS.GUILD_BANS, 
    Intents.FLAGS.GUILD_MESSAGE_REACTIONS, 
    Intents.FLAGS.GUILD_MESSAGES,
    Intents.FLAGS.DIRECT_MESSAGES,
    
], partials: [
    'CHANNEL', // Required to receive DMs
]});


const fs = require('fs');

const giveMeaJoke = require('discord-jokes');

const { sensitiveHeaders } = require('http2');

client.commands = new Discord.Collection();    

const commandFiles = fs.readdirSync("./Commands/").filter(file => file.endsWith(".js"));

const kickcmd = require('./Commands/kick.js')

const privateMsg = require('./Commands/privatemsg.js')

for(const file of commandFiles){
    const command = require(`./Commands/${file}`);

    client.commands.set(command.name, command);
}



 
client.once('ready', () => {
    console.log('Bot is now available!');
});



client.on('messageCreate', async(message) => {



    const command = message.content;

//Profanity Filter

    if(message.author.id == "909209531811242044"){
        return
    }
    


    for(word of wordFilter){
        if(message.content.toLowerCase().includes(word.toLowerCase())) {
            message.delete();
        message.channel.send('Be Polite, no swearing please')
        
        }
        
    }
    
//End of Profanity Filter

    if(message.channel.type === 'DM'){
        privateMsg(client, message)

}


    if(message.content == 'Hello')message.reply("Hello!");

    if(command == prefix + 'Ping'){
        client.commands.get('Ping').execute(message, command);


    }

    if(command == prefix + 'ReactionRoles'){
        client.commands.get('ReactionRoles').execute(message, Discord, client);
    }


    if(!message.content.startsWith(prefix)) return;
    
    if(message.content.toLowerCase()==  prefix + 'hello'){
        message.reply('Hello!');

    }if(command == prefix + 'Website'){
        client.commands.get('Website').execute(message, command);
    }

    if(message.content.toLowerCase()== prefix + 'joke'){
        giveMeaJoke.getRandomDadJoke(function(joke){!
            message.reply(joke);
        });
   
    }

    if(command.includes(prefix + 'kick')){
        let target = command.replace(`${prefix}kick `, ``)
        let guild = client.guilds.cache.get('901200391205687346')
        target = guild.members.cache.get(target)
        console.log(target)
        // target = client.members.cache.find(user => user.id === 'USER-ID')
        client.commands.get('kick').run({
            target: target, 
             member: message.member
            })
        // client.commands.get('kick').run()
       
        
       
        
    }
   


});

client.on('guildMemberAdd', member => {
    member.guild.channels.cache.get('901200391205687350').send(`**Welcome to the server, <@${member.user.id}>!**`);
});






client.login(token);