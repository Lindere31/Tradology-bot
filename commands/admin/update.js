const { Guild } = require("../../models/index");

module.exports = {
    name: 'update',
    category: 'admin',
    permissions: ['SEND_MESSAGES'],
    ownerOnly: true,
    usage: 'update ou /update',
    examples: ['update ou /update'],
    description: 'Mettre à jour les nouvelles données!',
    async run(client, message, args) {
        await Guild.updateMany({}, { "$set": { "test2Channel": "971791302926696619" }, upsert: true });
        message.reply('Nouvelles données ajoutées!');
    },

    async runInteraction(client, interaction) {
        await Guild.updateMany({}, { "$set": { "test2Channel": "971791302926696619" }, upsert: true });
        interaction.reply('Nouvelles données ajoutées!');
    }
};