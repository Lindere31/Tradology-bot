const { Interaction } = require("discord.js");

module.exports = {
    name: 'clear',
    category: 'moderation',
    permissions: ['MANAGE_MESSAGES'],
    ownerOnly: false,
    usage: 'clear [amount] <@target> ou /clear [amount] <@target>',
    examples: ['clear 50 ou /clear 50', 'clear 50 @nom_utilisateur ou /clear 50 @nom_utilisateur'],
    description: 'Supprimer un nombre de message spécifié sur un salon ou un utilisateur',
    async run(client, message, args) {
        const amountToDelete = args[0];
        if ((isNaN(amountToDelete)) || args[0] || amountToDelete > 100 || amountToDelete < 2) return message.reply('Le \`NOMBRE\` doit être inférieur à 100 et supérieur à 1');
        const target = message.mentions.users.find(u => u.id);
        await message.delete();

        const messagesToDelete = await message.channel.messages.fetch();

        if(target) {
            let i = 0;
            const filteredTargetMessages = [];
            (await messagesToDelete).filter(msg => {
                if (msg.author.id == target.id && amountToDelete > i) {
                    filteredTargetMessages.push(msg); i++;
                }
            });

            await message.channel.bulkDelete(filteredTargetMessages, true).then(messages => {
                message.channel.send(`j'ai supprimé ${messages.size} messages sur l'utilisateur ${target}!`)
            });
        } else {
            await message.channel.bulkDelete(amountToDelete, true).then(messages => {
                message.channel.send(`j'ai supprimé ${messages.size} messages sur se salon!`)
            });
        } 
    },
    options: [
        {
            name: 'message',
            description: 'Le nombre de message a supprimer (Min =2, Max = 100)',
            type: 'NUMBER',
            minValue: 2,
            maxValue : 100,
            required: true,
        },
        {
            name: 'target',
            description: 'Choisir un utilisateur',
            type: 'STRING',
            required: false,
        },
    ],
    async runInteraction(client, interaction) {
        const amountToDelete = interaction.options.getNumber('message');
        if (amountToDelete > 100 || amountToDelete < 2) return interaction.reply('Le \`NOMBRE\` doit être inférieur à 100 et supérieur à 1');
        const target = interaction.options.getMember('target');

        const messagesToDelete = await interaction.channel.messages.fetch();

        if(target) {
            let i = 0;
            const filteredTargetMessages = [];
            (await messagesToDelete).filter(msg => {
                if (msg.author.id == target.id && amountToDelete > i) {
                    filteredTargetMessages.push(msg); i++;
                }
            });

            await interaction.channel.bulkDelete(filteredTargetMessages, true).then(messages => {
                interaction.reply(`j'ai supprimé ${messages.size} messages de l'utilisateur ${target}!`)
            });
        } else {
            await interaction.channel.bulkDelete(amountToDelete, true).then(messages => {
                interaction.reply(`j'ai supprimé ${messages.size} messages dans se salon!`)
            });
        } 
    },
};