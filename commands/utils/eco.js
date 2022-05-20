const { MessageAttachment, MessageEmbed } = require('discord.js')
const captureWebsite = require('capture-website');
const fs = require('fs')

const options = {
	width: 600,
	height: 600
};

const items = [
	['https://www.financialjuice.com/widgets/ecocal.aspx?wtype=ECOCAL&mode=table&container=financialjuice-eco-widget-container&width=600px&height=600px&backC=1e222d&fontC=b2b5be&preview=true', 'economicCalendar'],
	//['https://github.com', 'github'],    //Plusieurs captures d'écran possible.
];

module.exports = {
    name: 'eco',
    category: 'utils',
    permissions: ['SEND_MESSAGES'],
    ownerOnly: false,
    usage: 'eco ou /eco',
    examples: ['eco ou /eco'],
    description: 'La commande eco envoie les annonces economique',
    async run(client, message) {
      const tryEco = await message.channel.send('Les annonce arrive... un instant!');

      await Promise.all(items.map(([url, filename]) => {
        return captureWebsite.file(url, `${filename}.png`, options);
      })); 
        const image = new MessageAttachment('././economicCalendar.png');

        const embed = new MessageEmbed()
        .setTitle('Calendrier économique')
        .setURL('https://www.financialjuice.com/home')
        .setThumbnail('https://i.ibb.co/kBTFVL2/financialjuice-logo.png')
        .setImage('attachment://economicCalendar.png')
        .addFields(
            {name: 'Uptime', value: `<t:${parseInt(client.readyTimestamp / 1000)}:R>`},
            //{name: 'Latence API', value: `\`\`\`${client.ws.ping}ms\`\`\``, inline: true},
            //{name: 'Latence BOT', value: `\`\`\`${tryEco.createdTimestamp - message.createdTimestamp}ms\`\`\``, inline: true},
        )
        .setTimestamp()
        .setFooter({ text: message.author.username, iconURL: message.author.displayAvatarURL() })

        await tryEco.edit({ content: ' ', embeds: [embed], files: [image] });

        const path = '././economicCalendar.png'
        try {
            fs.unlinkSync(path)
            //file removed
          } catch(err) {
            console.error(err)
          };
    },
    async runInteraction(client, interaction) {
      const tryEco = await interaction.reply('Les annonce arrive... un instant!');

      await Promise.all(items.map(([url, filename]) => {
        return captureWebsite.file(url, `${filename}.png`, options);
      }));
        const image = new MessageAttachment('././economicCalendar.png');

        const embed = new MessageEmbed()
        .setTitle('Calendrier économique')
        .setURL('https://www.financialjuice.com/home')
        .setThumbnail('https://i.ibb.co/kBTFVL2/financialjuice-logo.png')
        .setImage('attachment://economicCalendar.png')
        .addFields(
            {name: 'Uptime', value: `<t:${parseInt(client.readyTimestamp / 1000)}:R>`},
            //{name: 'Latence API', value: `\`\`\`${client.ws.ping}ms\`\`\``, inline: true},
            //{name: 'Latence BOT', value: `\`\`\`${tryEco.createdTimestamp - interaction.createdTimestamp}ms\`\`\``, inline: true},
        )
        .setTimestamp()
        .setFooter({ text: interaction.user.username, iconURL: interaction.user.displayAvatarURL() })

        await interaction.editReply({ content: ' ', embeds: [embed], files: [image] });

        const path = '././economicCalendar.png'
        try {
            fs.unlinkSync(path)
            //file removed
          } catch(err) {
            console.error(err)
          };
    }
};