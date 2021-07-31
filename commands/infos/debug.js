module.exports = {
    name: 'debug',
    aliases: [],
    category: 'Infos',
    utilisation: '{prefix}debug',

    execute(client, message) {
        message.channel.send(`${client.emotes.success} - Jestem na  **${client.voice.connections.size}** kanałach głosowych!`);
    },
};
