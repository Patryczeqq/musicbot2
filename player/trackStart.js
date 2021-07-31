module.exports = (client, message, track) => {
    message.channel.send(`${client.emotes.music} - Odtwarzam ${track.title} na :${message.member.voice.channel.name} ...`);
};
