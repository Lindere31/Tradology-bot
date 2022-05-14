const { MessageAttachment, MessageEmbed } = require('discord.js')
const captureWebsite = require('capture-website');
const fs = require('fs')

module.exports = {
    name: 'eco',
    category: 'utils',
    permissions: ['SEND_MESSAGES'],
    ownerOnly: false,
    usage: 'eco ou /eco',
    examples: ['eco ou /eco'],
    description: 'La commande eco envoie les annonces economique',
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

        const path = '././economicCalendar.png'
        try {
            fs.unlinkSync(path)
            //file removed
          } catch(err) {
            console.error(err)
          };
    },
    async runInteraction(client, interaction) {
        await captureWebsite.file('https://sslecal2.investing.com', 'economicCalendar.png');
        const image = new MessageAttachment('././economicCalendar.png');

        const tryEco = await interaction.channel.send('Les annonce arrive... un instant!');

        const embed = new MessageEmbed()
        .setTitle('Calendrier économique')
        .setURL('https://fr.investing.com/economic-calendar/')
        .setThumbnail('https://play-lh.googleusercontent.com/uNHZPzlEIW80CqUWsw9r-7gCBIeMRQWjNeLFVO8ulZakOH8FcUjgDj3wagQZGxMvu0s=w240-h480')
        .setImage('attachment://economicCalendar.png')
        .addFields(
            {name: 'Uptime', value: `<t:${parseInt(client.readyTimestamp / 1000)}:R>`},
            {name: 'Latence API', value: `\`\`\`${client.ws.ping}ms\`\`\``, inline: true},
            {name: 'Latence BOT', value: `\`\`\`${tryEco.createdTimestamp - interaction.createdTimestamp}ms\`\`\``, inline: true},
        )
        .setTimestamp()
        .setFooter({ text: interaction.user.username, iconURL: interaction.user.displayAvatarURL() })

        await tryEco.edit({ embeds: [embed], files: [image] });

        const path = '././economicCalendar.png'
        try {
            fs.unlinkSync(path)
            //file removed
          } catch(err) {
            console.error(err)
          };
    }
};