module.exports = {
    name : "kick",
    async execute(message, client){
        if(!message.member._roles.includes('923632025058025493')){
            message.reply('You do not have permission')
            return
        }
    

        let command = message.content.split(' ')
        let kickedmember = await message.guild.fetchMember(command[1]);
        console.log(kickedmember)
    }
}
