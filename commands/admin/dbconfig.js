module.exports = {
    name: 'dbconfig',
    category: 'admin',
    permissions: ['SEND_MESSAGES'],
    ownerOnly: true,
    usage: 'dbconfig [key] <value> ou /dbconfig [key] <value>',
    examples: ['dbconfig', '!dbconfig prefix ?','!dbconfig prefix', 'ou', '/dbconfig', '/dbconfig prefix ?','/dbconfig prefix'],
    description: 'Configurer les données de la base de données',
    async run(client, message, args, guildSettings) {
        if (!args[0] || !args[0].match(/^(prefix|logChannel|testChannel)$/)) 
            return message.reply('Merci d\'entrer une clé valide (\'prefix\'/\'logChannel\'/\'testChannel\')');
        
        if (args[0] == 'prefix') {
            if (value) {
                await client.updateGuild(message.guild, { prefix: value });
                return message.reply({ content: `Nouvelle valeur de préfix: ${value}` })
            }
            message.reply({ content: `Valeur de préfix: ${guildSettings.prefix}` });
        } else if (args[0] == 'logChannel') {
            if (value) {
                await client.updateGuild(message.guild, { logChannel: value });
                return message.reply({ content: `Nouvelle valeur de logChannel: ${value}` })
            }
            message.reply({ content: `Valeur de logChannel: ${guildSettings.logChannel}` });
        } else if (args[0] == 'outChannel') {
            if (value) {
                await client.updateGuild(message.guild, { outChannel: value });
                return message.reply({ content: `Nouvelle valeur de outChannel: ${value}` })
            }
            message.reply({ content: `Valeur de outChannel: ${guildSettings.outChannel}` });
        } else if (args[0] == 'testChannel') {
            if (value) {
                await client.updateGuild(message.guild, { testChannel: value });
                return message.reply({ content: `Nouvelle valeur de testChannel: ${value}` })
            }
            message.reply({ content: `Valeur de testChannel: ${guildSettings.testChannel}` });
        } else if (args[0] == 'test2Channel') {
            if (value) {
                await client.updateGuild(message.guild, { test2Channel: value });
                return message.reply({ content: `Nouvelle valeur de test2Channel: ${value}` })
            }
            message.reply({ content: `Valeur de test2Channel: ${guildSettings.test2Channel}` });
        }
    },
    options: [
        {
            name: 'key',
            description: 'Choisir une clé à modifier ou afficher',
            type: 'STRING',
            required: true,
            choices: [
                {
                    name: 'prefix',
                    value: 'prefix', 
                },
                {
                    name: 'logChannel',
                    value: 'logChannel',
                },
                {
                    name: 'outChannel',
                    value: 'outChannel',
                },
                {
                    name: 'testChannel',
                    value: 'testChannel',
                },
                {
                    name: 'test2Channel',
                    value: 'test2Channel',
                },
            ],
        },
        {
            name: 'value',
            description: 'Choisir la nouvelle valeur pour votre clé',
            type: 'STRING',
        },       
    ],
    async runInteraction(client, interaction, guildSettings) {
        const key = interaction.options.getString('key');
        const value = interaction.options.getString('value');

        if (key == 'prefix') {
            if (value) {
                await client.updateGuild(interaction.guild, { prefix: value });
                return interaction.reply({ content: `Nouvelle valeur de préfix: ${value}` })
            }
            interaction.reply({ content: `Valeur de préfix: ${guildSettings.prefix}` });
        } else if (key == 'logChannel') {
            if (value) {
                await client.updateGuild(interaction.guild, { logChannel: value });
                return interaction.reply({ content: `Nouvelle valeur de logChannel: ${value}` })
            }
            interaction.reply({ content: `Valeur de logChannel: ${guildSettings.logChannel}` });
        } else if (key == 'outChannel') {
            if (value) {
                await client.updateGuild(interaction.guild, { outChannel: value });
                return interaction.reply({ content: `Nouvelle valeur de outChannel: ${value}` })
            }
            interaction.reply({ content: `Valeur de outChannel: ${guildSettings.outChannel}` });
        } else if (key == 'testChannel') {
            if (value) {
                await client.updateGuild(interaction.guild, { testChannel: value });
                return interaction.reply({ content: `Nouvelle valeur de testChannel: ${value}` })
            }
            interaction.reply({ content: `Valeur de testChannel: ${guildSettings.testChannel}` });
        } else if (key == 'test2Channel') {
            if (value) {
                await client.updateGuild(interaction.guild, { test2Channel: value });
                return interaction.reply({ content: `Nouvelle valeur de test2Channel: ${value}` })
            }
            interaction.reply({ content: `Valeur de test2Channel: ${guildSettings.test2Channel}` });
        }
    }
};