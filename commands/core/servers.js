const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {

  

if(message.author.id != "660390189616726017") return message.channel.send("⛔| Nie posiadasz permisji")

  message.channel.send(`Serving ${client.guilds.size} servers`)

  message.channel.send(client.guilds.map(g=>g.name).join('\n'))

  }

module.exports.help = {

  name: "servers"

}


