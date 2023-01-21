
// module.exports = async(client, message ) => {

//         const user = await client.users.fetch('228476493347553280');
//         message.channel.send('Your suggestion has been saved.')
//         user.send(message.content)

       
// }

// module.exports = async(client, message)=>{
//         try{
//                 const owner = await client.users.fetch('228476493347553280');
//                 const dmChannel = await owner.createDM();
//                 await dmChannel.send(`New message from ${message.author.tag}: ${message.content}`);
//         }
//         catch(error){
//                 console.error(error)
//         }
// };

module.exports = async(client, message)=>{
        try{
                const owner = await client.users.fetch('228476493347553280');
                message.channel.send('Your suggestion has been saved.')
                owner.send(message.content).catch(console.error)
        }
        catch(error){
                console.error(error)
        }
};