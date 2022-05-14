const { MessageEmbed } = require("discord.js");

module.exports = {
    name: 'ping',
    category: 'utils',
    permissions: ['SEND_MESSAGES'],
    ownerOnly: false,
    usage: 'ping ou /ping',
    examples: ['ping ou /ping'],
    description: 'La commande ping affiche la latence du bot est de l\'API',
    async run(client, message, args) {
        const tryEco = await message.channel.send('Le ping arrive... un instant!');

        const embed = new MessageEmbed()
        .setTitle('🏓 Pong')
        .setThumbnail(client.user.displayAvatarURL())
        .addFields(
            {name: 'Uptime', value: `<t:${parseInt(client.readyTimestamp / 1000)}:R>`},
            {name: 'Latence API', value: `\`\`\`${client.ws.ping}ms\`\`\``, inline: true},
            {name: 'Latence BOT', value: `\`\`\`${tryEco.createdTimestamp - message.createdTimestamp}ms\`\`\``, inline: true},
        )
        .setTimestamp()
        .setFooter({ text: message.author.username, iconURL: message.author.displayAvatarURL() })

        tryEco.edit({ content: ' ', embeds: [embed] });
    },
    async runInteraction(client, interaction) {
        const tryEco = await interaction.reply({ content: 'Les annonce arrive... un instant!', fetchReply: true });

        const embed = new MessageEmbed()
        .setTitle('🏓 Pong')
        .setThumbnail(client.user.displayAvatarURL())
        .addFields(
            {name: 'Uptime', value: `<t:${parseInt(client.readyTimestamp / 1000)}:R>`},
            {name: 'Latence API', value: `\`\`\`${client.ws.ping}ms\`\`\``, inline: true},
            {name: 'Latence BOT', value: `\`\`\`${tryEco.createdTimestamp - interaction.createdTimestamp}ms\`\`\``, inline: true},
        )
        .setTimestamp()
        .setFooter({ text: interaction.user.username, iconURL: interaction.user.displayAvatarURL() })

        interaction.editReply({ content: ' ', embeds: [embed] })
    },
};