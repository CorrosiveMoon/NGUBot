
module.exports = async(client, message ) => {

        const user = await client.users.fetch('228476493347553280');
        message.channel.send('Your suggestion has been saved.')
        user.send(message.content)

       
}