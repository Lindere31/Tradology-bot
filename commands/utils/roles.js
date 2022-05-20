const { MessageActionRow, MessageSelectMenu } = require("discord.js");

const selectMenu = new MessageActionRow()
    .addComponents(
        new MessageSelectMenu()
         .setCustomId('roles-menu')
         .setPlaceholder('Choisir un ou plusieurs rôles dans la liste')
         .setMinValues(1)
         .setMaxValues(3)
         .setOptions([
             {
                 label: 'Vert',
                 description: 'Choisir la couleur verte',
                           //ID du rôle
                 value: '973652490341990460'
             },
             {
                label: 'Bleu',
                description: 'Choisir la couleur bleue',
                           //ID du rôle
                value: '973652577801633933'
            },
            {
                label: 'Rose',
                description: 'Choisir la couleur rose',
                           //ID du rôle
                value: '973653241768341564'
            }
         ]),
     )


module.exports = {
    name: 'roles',
    category: 'utils',
    permissions: ['SEND_MESSAGES'],
    ownerOnly: false,
    usage: 'roles ou /roles',
    examples: ['roles ou /roles'],
    description: 'Choisir un roles',
    async run(client, message, args) {
        if (message.author.bot) return;
        await message.channel.send({ content: 'Choisir un ou plusieurs rôles', components: [selectMenu] });
    },
    async runInteraction(client, interaction) {
        await interaction.reply({ content: 'Choisir un ou plusieurs rôles', components: [selectMenu] });
    },
};