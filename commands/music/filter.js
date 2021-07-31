module.exports = {
    name: 'filter',
    aliases: [],
    category: 'Music',
    utilisation: '{prefix}filter [filter name]',

    execute(client, message, args) {
        if (!message.member.voice.channel) return message.channel.send(`${client.emotes.error} - Nie jesteś na kanale glosowym !`);

        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(`${client.emotes.error} -Nie jesteś na tym samym kanale głosowym !`);

        if (!client.player.getQueue(message)) return message.channel.send(`${client.emotes.error} - W tym momencie nic nie odtwarzam! !`);

        if (!args[0]) return message.channel.send(`${client.emotes.error} - Określ prawidłowy filtr, aby go włączyć lub wyłączyć !`);

        const filterToUpdate = Object.values(client.filters).find((f) => f.toLowerCase() === args[0].toLowerCase());

        if (!filterToUpdate) return message.channel.send(`${client.emotes.error} - Ten filtr nie istnieje !`);

        const filterRealName = Object.keys(client.filters).find((f) => client.filters[f] === filterToUpdate);

        const queueFilters = client.player.getQueue(message).filters;
        const filtersUpdated = {};
        filtersUpdated[filterRealName] = queueFilters[filterRealName] ? false : true;
        client.player.setFilters(message, filtersUpdated);

        if (filtersUpdated[filterRealName]) message.channel.send(`${client.emotes.music} - Wlaśnie trwa **dodawanie** wybranego filtru do piosenki!`);
        else message.channel.send(`${client.emotes.music} - Wlaśnie trwa **wyłączanie** wybranego filtru do piosenki!`);
    },
};
