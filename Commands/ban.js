const { MessageEmbed } = require('discord.js');

module.exports = {
    name : "ban",
    async execute(message, client){
        let args = message.content.split(" ").slice(1);
        let user_id = args[0];
        let reason = args.slice(1).join(" ");
        const user = await client.users.fetch(user_id);
        user.send(`You were banned from the server for "${reason}"`)
        .then(()=>{
            const exampleEmbed = new MessageEmbed()
            .setColor('#0099ff')
            // .setTitle('Some title')
            // .setURL('https://discord.js.org/')
            .setAuthor({ name: 'NGU Bot', iconURL: 'https://i.imgur.com/AfFp7pu.png'})
            // .setDescription('Some description here')
            // .setThumbnail('https://i.imgur.com/AfFp7pu.png')
            // .addFields(
            //     { name: 'Regular field title', value: 'Some value here' },
            //     { name: '\u200B', value: '\u200B' },
            //     { name: 'Inline field title', value: 'Some value here', inline: true },
            //     { name: 'Inline field title', value: 'Some value here', inline: true },
            // )
            // .addField('Inline field title', 'Some value here', true)
            .addField('Member Banned', `${user.username + '#' + user.discriminator} was banned from the server for: '${reason}'`)
            // .setImage('https://i.imgur.com/AfFp7pu.png')
            .setTimestamp()
            // .setFooter({ text: 'Some footer text here', iconURL: 'https://i.imgur.com/AfFp7pu.png' });
		    message.channel.send({embeds: [exampleEmbed]})
            .then(()=>{
                message.guild.members.ban(user_id);
            })
        })
    }
}
