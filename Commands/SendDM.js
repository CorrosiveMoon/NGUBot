const { MessageEmbed } = require('discord.js');
const { execute } = require('./kick');

module.exports = {
    name: 'SendDM',
    execute(message, client){
        const user = message.mentions.users.first();
        const msg = message.content.split(' ').slice(2).join(' ');

        //check if a user and message were provided
        if (!user || !msg) {
            return message.channel.send('Please provide a user and a message.');
        }

        //try to send the DM
        try{
            user.send(msg);
            message.channel.send(`Successfully sent a DM to ${user.tag} with the message: "${msg}"`);
        }
    catch(error){
        console.error(error);
        message.channel.send(`An error occured: ${error}`);
        }
    }
}