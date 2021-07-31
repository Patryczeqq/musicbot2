module.exports = {
    name: 'resume',
    aliases: [],
    category: 'Music',
    utilisation: '{prefix}resume',

    execute(client, message) {
        if (!message.member.voice.channel) return message.channel.send(`${client.emotes.error} - Nie jestes na kanale glosowym !`);

        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(`${client.emotes.error} - You are not in the same voice channel !`);

        if (!client.player.getQueue(message)) return message.channel.send(`${client.emotes.error} - Zaden utwor nie jest odtwarzany na tym serwerze !`);

        if (!client.player.getQueue(message).paused) return message.channel.send(`${client.emotes.error} - The music is already playing !`);

        client.player.resume(message);

        message.channel.send(`${client.emotes.success} - Utwór  ${client.player.getQueue(message).playing.title} pomyslnie **wznowiony** !`);
    },
};