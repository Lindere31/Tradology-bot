module.exports = {
    name: 'lock',
    category: 'moderation',
    permissions: ['MANAGE_CHANNELS'],
    ownerOnly: false,
    usage: 'lock ou /lock',
    examples: ['lock ou /lock'],
    description: 'Vérouiller un salon',
    async run(client, message, args) {
        await message.channel.permissionOverwrites.edit(message.guild.id, { SEND_MESSAGES: false });
        await message.reply('Le salon est vérouillé');
    },
    async runInteraction(client, interaction) {
        await interaction.channel.permissionOverwrites.edit(interaction.guild.id, { SEND_MESSAGES: false });
        await interaction.reply({ content: 'Le salon est vérouillé', ephemeral: true });
    },
};