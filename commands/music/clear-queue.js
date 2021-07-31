module.exports = {
    name: 'clear-queue',
    aliases: ['cq'],
    category: 'Music',
    utilisation: '{prefix}clear-queue',

    execute(client, message) {
        if (!message.member.voice.channel) return message.channel.send(`${client.emotes.error} - Nie jestes na kanale glosowym !`);

        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(`${client.emotes.error} - You are not in the same voice channel !`);

        if (!client.player.getQueue(message)) return message.channel.send(`${client.emotes.error} - Zaden utwor nie jest odtwarzany na tym serwerze !`);

        client.player.clearQueue(message);

        message.channel.send(`${client.emotes.success} - Kolejka została właśnie ** usunięta ** !`);
    },
};