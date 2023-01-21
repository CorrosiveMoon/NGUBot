
const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'kick',
    execute(message, client) {
        // Get the user to kick and the reason
        const user = message.mentions.users.first();
        const reason = message.content.split(' ').slice(2).join(' ');

        // Check if a user and reason were provided
        if (!user || !reason) {
            return message.channel.send('Please provide a user or a reason.');
        }

        // Check if the user has the kick members permission
        if (!message.member.permissions.has('KICK_MEMBERS')) {
            return message.channel.send('You do not have the permission to kick members.');
        }

        // Try to kick the user
        try{
            const member = message.guild.members.cache.get(user.id);
            member.kick(reason)
                .then(() => {
                    // Send a message to the user that they were kicked
                    try {
                        user.send(`You were kicked from ${message.guild.name} for the following reason: ${reason}`);
                    } catch (error) {
                        console.error(error);
                        message.channel.send(`An error occured when trying to send a DM to the user: ${error}`);
                    }
                })
                .catch(error => {
                    console.error(error);
                    message.channel.send(`An error occured: ${error}`);
                });
        }
        catch(error){
            console.error(error);
            message.channel.send(`An error occured: ${error}`);
        }
    }
};