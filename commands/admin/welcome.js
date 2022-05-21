const { MessageEmbed, MessageActionRow, MessageButton } = require("discord.js");

const buttons = new MessageActionRow()
    .addComponents(
        new MessageButton()
         .setCustomId('accept-button')
         .setLabel('Accepter')
         .setStyle('SUCCESS'),
        
        new MessageButton()
         .setCustomId('refuse-button')
         .setLabel('Refuser')
         .setStyle('DANGER'),
        )


const welcomeEmbed = new MessageEmbed()
    .setTitle('__*Règlement du serveur*__')
    .setDescription("***En utilisant ce serveur, vous acceptez les règles suivantes*** :\n\n***\`\`\`1. Le respect, Aucun harcèlement: sexisme, racisme ou discours de haine ne sera toléré.\`\`\`***\n***\`\`\`2. Pas de spam ou d'auto-promotion (invitations de serveur, publicités, etc.) sans l'autorisation d'un membre du personnel. Cela inclut les autres membres . Aucune photo ou images d'humain dénudé ( gif, photo..).\`\`\`***\n***\`\`\`3. Utilisez les canaux à leur bonne usage.\`\`\`***\n***\`\`\`4. Respectez les conditions d'utilisation de Discord.\`\`\`***\n***\`\`\`5. Ne diffusez pas de fausses informations.\`\`\`***\n***\`\`\`6. En situation de problèmes, conflit, aide,... informer le personnel.\`\`\`***\n***\`\`\`7. La violation de ces règles entraînera à des conséquences.\`\`\`***\n***\`\`\`8. Le respect est un échange mutuel.\`\`\`***")
    .setFooter({ text: 'Bienvenue sur le serveur!' })
    .setTimestamp()

module.exports = {
    name: 'welcome',
    category: 'admin',
    permissions: ['SEND_MESSAGES'],
    ownerOnly: true,
    usage: 'welcome ou /welcome',
    examples: ['welcome ou /welcome'],
    description: 'La commande welcome permet d\'envoyer l\'embed des règles',
    async run(client, message, args) {
        if (message.author.bot) return;
        await message.channel.send({ embeds: [welcomeEmbed], components: [buttons] });
    },
    async runInteraction(client, interaction) {
        await interaction.reply({ embeds: [welcomeEmbed], components: [buttons] });
    },
};