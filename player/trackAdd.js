module.exports = (client, message, queue, track) => {
    message.channel.send(`${client.emotes.music} - ${track.title} pomyślnie dodano wybrany utwór do kolejki!`);
};
