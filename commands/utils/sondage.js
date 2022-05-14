const { MessageEmbed } = require("discord.js");

module.exports = {
    name: 'sondage',
    category: 'utils',
    permissions: ['ADMINISTRATOR'],
    ownerOnly: false,
    usage: 'sondage [question] ou /sondage [titre] [contenu]',
    examples: ['sondage', 'sondage Live se soir ? ou /sondage [titre] Live se soir ? [contenu] oui ou non'],
    description: 'Poster votre propre sondage!',
    async run(client, message, args) {
        if (!args[0]) return message.reply("Merci d'entrer une question pour votre sondage!");

        const embed = new MessageEmbed()
        .setTitle('Sondage')
        .setColor('#00a3b5')
        .addFields(
            {name: 'Uptime', value: `<t:${parseInt(client.readyTimestamp / 1000)}:R>`},
        )
        .setDescription(args.slice(0).join(', '))
        .setTimestamp()
        .setFooter({ text: `Sondage généré par ${message.author.tag}!` });

        const sondage = await message.reply({ embeds: [embed] });
        sondage.react(`👍`);
        sondage.react(`👎`);
    },
    options: [
        {
            name: 'title',
            description: 'Taper le titre de votre sondage',
            type: 'STRING',
            required: true,
        },
        {
            name: 'content',
            description: 'Taper la question de votre sondage',
            type: 'STRING',
            required: true,
        },
    ],
    async runInteraction(client, interaction) {
        const pollTilte = interaction.options.getString('title');
        const pollContent = interaction.options.getString('content');

        const embed = new MessageEmbed()
        .setTitle(pollTilte)
        .setColor('#00a3b5')
        .addFields(
            {name: 'Uptime', value: `<t:${parseInt(client.readyTimestamp / 1000)}:R>`},
        )
        .setDescription(pollContent)
        .setTimestamp()
        .setFooter({ text: `Nouveau sondage généré par ${interaction.user.tag}!`});

        const sondage = await interaction.reply({embeds: [embed], fetchReply: true});
        sondage.react(`👍`);
        sondage.react(`👎`);
    },
};