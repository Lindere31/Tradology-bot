const { MessageEmbed } = require("discord.js");

module.exports = {
    name: 'eco',
    category: 'utils',
    permissions: ['SEND_MESSAGES'],
    ownerOnly: false,
    usage: 'eco ou /eco',
    examples: ['eco ou /eco'],
    description: 'La commande eco envoie les annonces economique',
    async run(client, message, args) {
        const tryEco = await message.channel.send('Les annonce arrive... un instant!');

        const embed = new MessageEmbed()
        .setTitle('Calendrier économique')
        .setURL('https://fr.investing.com/economic-calendar/')
        .setThumbnail('https://play-lh.googleusercontent.com/uNHZPzlEIW80CqUWsw9r-7gCBIeMRQWjNeLFVO8ulZakOH8FcUjgDj3wagQZGxMvu0s=w240-h480')          //pour avoir l'image du bot = (client.user.displayAvatarURL())
        .setImage('https://i.pinimg.com/originals/0b/8c/08/0b8c081b7b05dcc0aad6238856ea87d2.gif')
        .addFields(
            {name: 'Uptime', value: `<t:${parseInt(client.readyTimestamp / 1000)}:R>`},
        )
        .setTimestamp()
        .setFooter({ text: message.author.username, iconURL: message.author.displayAvatarURL() })
        

        tryEco.edit({ content: ' ', embeds: [embed] });
    },
    async runInteraction(client, interaction) {
        const tryEco = await interaction.reply({ content: 'Les annonce arrive... un instant!', fetchReply: true });

        const embed = new MessageEmbed()
        .setTitle('Calendrier économique')
        .setURL('https://fr.investing.com/economic-calendar/')
        .setThumbnail('https://play-lh.googleusercontent.com/uNHZPzlEIW80CqUWsw9r-7gCBIeMRQWjNeLFVO8ulZakOH8FcUjgDj3wagQZGxMvu0s=w240-h480')          //pour avoir l'image du bot = (client.user.displayAvatarURL())
        .setImage('https://i.pinimg.com/originals/0b/8c/08/0b8c081b7b05dcc0aad6238856ea87d2.gif')
        .addFields(
            {name: 'Uptime', value: `<t:${parseInt(client.readyTimestamp / 1000)}:R>`},
        )
        .setTimestamp()
        .setFooter({ text: interaction.user.username, iconURL: interaction.user.displayAvatarURL() })

        interaction.editReply({ content: ' ', embeds: [embed] })
    },
};