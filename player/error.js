module.exports = (client, error, message) => {
    switch (error) {
        case 'NotPlaying':
            message.channel.send(`${client.emotes.error} - Na tym serwerze nie jest odtwarzana żadna muzyka!`);
            break;
        case 'NotConnected':
            message.channel.send(`${client.emotes.error} - Nie posiadasz połączenia z żadnym kanałem głosowym!`);
            break;
        case 'UnableToJoin':
            message.channel.send(`${client.emotes.error} - Nie mogę dołączyć do Twojego kanału głosowego, sprawdź moje uprawnienia!`);
            break;
        default:
            message.channel.send(`${client.emotes.error} - Coś poszło nie tak ... Error : ${error}`);
    };
};
