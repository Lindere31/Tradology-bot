const { Guild } = require("../../models/index");

module.exports = {
    name: 'reload',
    category: 'admin',
    permissions: ['SEND_MESSAGES'],
    ownerOnly: true,
    usage: 'reload ou /reload',
    examples: ['reload ou /reload'],
    description: 'Relance le bot!',
    async run(client, message, args) {
                                                           //ID Serveur
        //const devGuild = await client.guilds.cache.get('817431077387370507');
        //devGuild.commands.set([]);
        await message.reply('Bot relancé avec succès!');
        return process.exit();
    },

    async runInteraction(client, interaction) {
                                                           //ID Serveur
        //const devGuild = await client.guilds.cache.get('817431077387370507');
        //devGuild.commands.set([]);
        await interaction.reply('Bot relancé avec succès!');
        return process.exit();
    }
};