const { MessageEmbed } = require("discord.js");
const { description } = require("./ping");

module.exports = {
    name : 'ReactionRoles',
    description: "Sets up reaction role msgs",
     async execute(message, args, Discord, client){
        const Rolechannel = '934641159739949106';

        const SOMrole = message.guild.roles.cache.find(role => role.name === 'School Of Medicine');
        const SODrole = message.guild.roles.cache.find(role => role.name === 'School of Dentistry');
        const SOProle = message.guild.roles.cache.find(role => role.name === 'School Of Pharmacy');
        const SOBFrole = message.guild.roles.cache.find(role => role.name === 'School of Business & Finance');
        const SOEProle = message.guild.roles.cache.find(role => role.name === 'School of Economics & Politics');
        const SOIT = message.guild.roles.cache.find(role => role.name === 'School of Information Technology');
        const SOE = message.guild.roles.cache.find(role => role.name === 'School of Engineering');

        const SOMemoji = '🥼';
        const SODemoji = '🦷';
        const SOPemoji = '🧪';
        const SOBFemoji = '📈';
        const SOEPemoji = '📃';
        const SOITemoji = '🖥️';
        const SOEemoji = '👷‍♀️';

        let RoleEmbed = new MessageEmbed()
            .setColor('BLUE')
            .setTitle('Choose your school accordingly.')
            .setDescription('Choosing your role wil let you have access to the server.')

        let messageEmbeded = await message.channel.send(RoleEmbed);
        messageEmbeded.react(SOMemoji);
        messageEmbeded.react(SODemoji);
        messageEmbeded.react(SOPemoji);
        messageEmbeded.react(SOBFemoji);
        messageEmbeded.react(SOEPemoji);
        messageEmbeded.react(SOITemoji);
        messageEmbeded.react(SOEemoji);

    }
}