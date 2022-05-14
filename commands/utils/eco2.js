const { MessageAttachment, MessageEmbed } = require('discord.js')
const captureWebsite = require('capture-website');

module.exports = {
    name: 'eco2',
    category: 'utils',
    permissions: ['SEND_MESSAGES'],
    ownerOnly: false,
    usage: 'eco2 ou /eco2',
    examples: ['eco2 ou /eco2'],
    description: 'La commande eco2 envoie les annonces economique',
    async run(client, message, args) {
        await captureWebsite.file('https://sslecal2.investing.com', 'economicCalendar.png');
        const image = new MessageAttachment('././economicCalendar.png');

        const tryEco = await message.channel.send('Les annonce arrive... un instant!');

        const embed = new MessageEmbed()
        .setTitle('Calendrier économique')
        .setURL('https://fr.investing.com/economic-calendar/')
        .setThumbnail('https://play-lh.googleusercontent.com/uNHZPzlEIW80CqUWsw9r-7gCBIeMRQWjNeLFVO8ulZakOH8FcUjgDj3wagQZGxMvu0s=w240-h480')
        .setImage('attachment://economicCalendar.png')
        .addFields(
            {name: 'Uptime', value: `<t:${parseInt(client.readyTimestamp / 1000)}:R>`},
            {name: 'Latence API', value: `\`\`\`${client.ws.ping}ms\`\`\``, inline: true},
            {name: 'Latence BOT', value: `\`\`\`${tryEco.createdTimestamp - message.createdTimestamp}ms\`\`\``, inline: true},
        )
        .setTimestamp()
        .setFooter({ text: message.author.username, iconURL: message.author.displayAvatarURL() })

        await tryEco.edit({ embeds: [embed], files: [image] });

        //await file.delete('../../economicCalendar.png');
    },
    async runInteraction(client, interaction) {},
};