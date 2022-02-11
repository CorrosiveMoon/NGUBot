module.exports = {
    name : "Ping",
    description: "This is a ping command for testing purposes",
    execute(message, command){
        message.reply('Pong!');
    }
}
