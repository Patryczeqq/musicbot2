module.exports = {
    name: 'stop',
    aliases: [],
    category: 'Music',
    utilisation: '{prefix}stop',

    execute(client, message) {
        if (!message.member.voice.channel) return message.channel.send(`${client.emotes.error} - Nie jestes na kanale glosowym !`);

        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(`${client.emotes.error} - You are not in the same voice channel !`);

        if (!client.player.getQueue(message)) return message.channel.send(`${client.emotes.error} - Zaden utwor nie jest odtwarzany na tym serwerze !`);

        client.player.setRepeatMode(message, false);
        client.player.stop(message);

        message.channel.send(`${client.emotes.success} - Zatrzymano odtwarzanie na tym serwerze!`);
    },
};