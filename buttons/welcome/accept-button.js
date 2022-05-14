module.exports = {
    name: 'accept-button',
    async runInteraction(client, interaction) {
                                               //ID du role
        await interaction.member.roles.add('973616621430124565')
        await interaction.reply({ content: 'Vous avez accepté les règles! Vous pouvez maintenant accéder au serveur', ephemeral: true });
    },
};