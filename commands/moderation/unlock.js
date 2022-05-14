module.exports = {
    name: 'unlock',
    category: 'moderation',
    permissions: ['MANAGE_CHANNELS'],
    ownerOnly: false,
    usage: 'unlock ou /unlock',
    examples: ['unlock ou /unlock'],
    description: 'Dévérouiller un salon',
    async run(client, message, args) {
        await message.channel.permissionOverwrites.edit(message.guild.id, { SEND_MESSAGES: true });
        await message.reply('Le salon est dévérouillé');
    },
    async runInteraction(client, interaction) {
        await interaction.channel.permissionOverwrites.edit(interaction.guild.id, { SEND_MESSAGES: true });
        await interaction.reply({ content: 'Le salon est dévérouillé', ephemeral: true });
    },
};