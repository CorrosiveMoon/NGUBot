module.exports = {
    name: 'Website',
    description: "Sends a link to the univeristy's website",
    execute(message, command){
        message.reply('https://ngu.edu.eg/');
    }

}