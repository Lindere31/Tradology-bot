const { MessageActionRow, MessageButton } = require("discord.js");

const buttons = new MessageActionRow()
    .addComponents(
        new MessageButton()
         .setCustomId('primary-button')
         .setLabel('Primary')
         .setStyle('PRIMARY'),

        new MessageButton()
         .setCustomId('secondary-button')
         .setLabel('Secondary')
         .setStyle('SECONDARY'),

        new MessageButton()
         .setCustomId('success-button')
         .setLabel('Success')
         .setStyle('SUCCESS'),
        
        new MessageButton()
         .setCustomId('danger-button')
         .setLabel('Danger')
         .setStyle('DANGER'),
        
        new MessageButton()
          .setURL('https://google.fr')
          .setLabel('Link')
          .setStyle('LINK'), 
    )


module.exports = {
    name: 'foo',
    category: 'utils',
    permissions: ['SEND_MESSAGES'],
    ownerOnly: true,
    usage: 'foo ou /foo',
    examples: ['foo ou /foo'],
    description: 'foo',
    async run(client, message, args) {
        await message.channel.send({ content: 'Cliquer les boutons', components: [buttons] });
    },
    async runInteraction(client, interaction) {
        await interaction.reply({ content: 'Cliquer les boutons', components: [buttons] });
    },
};