module.exports = {
    name: 'ban',
    execute(message, client) {
        // Get the user to ban and the reason
        const user = message.mentions.users.first();
        const reason = message.content.split(' ').slice(2).join(' ');

        // Check if a user and reason were provided
        if (!user || !reason){
            return message.channel.send('Please provide a user and a reason.');
        }

        // Check if the user has the ban members permission
        if (!message.member.permissions.has('BAN_MEMBERS')){
            return message.channel.send('You do not have the permission to ban members.');
        }

        // Try to ban the user
        try{
            message.guild.members.ban(user, { reason: reason })
                .then(() =>{
                    // Send a message to the channel that the user was banned
                    user.send(`You were banned from ${message.guild.name} for the following reason: ${reason}`)
                        .catch(error => console.error(error));
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