const { MessageEmbed } = require('discord.js');

module.exports = {
    name: "kick",
    async execute(message, client) {
        if (!message.member.roles.cache.has("923632025058025493")) {
            return message.reply('You do not have the required role to use this command.');
        }
        let args = message.content.split(" ").slice(1);
        let user_id = args[0];
        let reason = args.slice(1).join(" ");

        if (!user_id) {
            return message.reply("Please provide a user to kick.");
        }
        try {
            user = await client.users.fetch(user_id);
            member = await message.guild.members.fetch(user_id);
        } catch (err) {
            return message.reply('That user does not exist.');
        }
        if (!reason) {
            return message.reply('You must supply a reason for the kick.');
        }
        if (user_id === message.author.id) {
            return message.reply('You cannot kick yourself.');
        }
        if (user_id === client.user.id) {
            return message.reply('I cannot kick myself.');
        }
        if (!user) {
            return message.reply("That user does not exist.");
        }
        if (member.roles.cache.has("923632025058025493")) {
            return message.reply("You cannot kick an admin.");
        }
        user.send(`You were kicked from the server for "${reason}"`)
            .then(() => {
                const exampleEmbed = new MessageEmbed()
                    .setColor('#0099ff')
                    // .setTitle('Some title')
                    // .setURL('https://discord.js.org/')
                    .setAuthor({ name: 'NGU Bot', iconURL: 'https://raw.githubusercontent.com/CorrosiveMoon/NGUBot/main/BotAvatar.png' })
                    // .setDescription('Some description here')
                    // .setThumbnail('https://i.imgur.com/AfFp7pu.png')
                    // .addFields(
                    //     { name: 'Regular field title', value: 'Some value here' },
                    //     { name: '\u200B', value: '\u200B' },
                    //     { name: 'Inline field title', value: 'Some value here', inline: true },
                    //     { name: 'Inline field title', value: 'Some value here', inline: true },
                    // )
                    // .addField('Inline field title', 'Some value here', true)
                    .addField('Member Kicked', `${user.username + '#' + user.discriminator} was kicked from the server for: '${reason}'`)
                    // .setImage('https://i.imgur.com/AfFp7pu.png')
                    .setTimestamp()
                    // .setFooter({ text: 'Some footer text here', iconURL: 'https://i.imgur.com/AfFp7pu.png' });
                message.channel.send({ embeds: [exampleEmbed] })
                    .then(() => {
                        message.guild.members.kick(user_id, reason);
                    })
            })
    }
}