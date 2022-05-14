const { MessageEmbed } = require('discord.js');
const { readdirSync } = require('fs');
const commandFolder = readdirSync('./commands');

const contextDescription = {
    userinfo: 'Renvoie des information sur l\'utilisateur'
};

module.exports = {
    name: 'help',
    category: 'utils',
    permissions: ['SEND_MESSAGES'],
    ownerOnly: false,
    usage: 'help <command> ou /help <command>',
    examples: ['help, !help eco, !help sondage ou /help, /help eco, /help sondage'],
    description: "Renvoie une liste de commande filtrée par catégorie!",
    async run(client, message, args, guildSettings) {
        const prefix = guildSettings.prefix;

        if (!args.length) {
            const noArgsEmbed = new MessageEmbed()
             .setColor('#6e4aff')
             .addField('Liste des commande', `Une liste de toutes les catégories disponibles et leurs commandes.\nPour plus d'information sur une commande, tapez /help <command>`)
          .addFields(
              {name: 'Uptime', value: `<t:${parseInt(client.readyTimestamp / 1000)}:R>`},
          )

            for (const category of commandFolder) {
                noArgsEmbed.addField(
                    `- ${category.replace(/(^\w|\s\w)/g, firstLetter => firstLetter.toUpperCase())}`,
                    `\`${client.commands.filter(cmd => cmd.category == category.toLowerCase()).map(cmd => cmd.name).join(', ')}\``
                );
            }

            return message.channel.send({ embeds: [noArgsEmbed] });
        }

        const cmd = client.commands.get(args[0]);
        if (!cmd) return message.reply('Cette commande n\'existe pas!');

        return message.channel.send(`
\`\`\`makefile
[Help: commande -> ${cmd.name}] ${cmd.ownerOnly ? '/!\\ Pour les admins du bot uniquement /!\\' : ''}

${cmd.description ? cmd.description : contextDescription[`${cmd.name}`]}

Permissons: ${cmd.permissions.join(', ')}
Utilisation: ${prefix}${cmd.usage}
Exemple: ${prefix}${cmd.examples.join(` | ${prefix}`)}

---

${prefix} = prefix utiliser pour le bot (/commands sont aussi disponible)
{} = sous-commande(s) disponible(s) | [] = option(s) obligatoire(s) | <> = option(s) optionnel(s)
Ne pas inclure ces caractères -> {}, [] et <> dans vos commandes.
\`\`\``);
    },
    options: [
        {
            name: 'command',
            description: 'Taper le nom de votre commande',
            type: 'STRING',
            required: false,
        }
    ],
    async runInteraction(client, interaction, guildSettings) {
        const prefix = guildSettings.prefix;
        const cmdName = interaction.options.getString('command');

        if (!cmdName) {
            const noArgsEmbed = new MessageEmbed()
             .setColor('#6e4aff')
             .addField('Liste des commande', `Une liste de toutes les catégories disponibles et leurs commandes.\nPour plus d'information sur une commande, tapez /help <command>`)

            for (const category of commandFolder) {
                noArgsEmbed.addField(
                    `- ${category.replace(/(^\w|\s\w)/g, firstLetter => firstLetter.toUpperCase())}`,
                    `\`${client.commands.filter(cmd => cmd.category == category.toLowerCase()).map(cmd => cmd.name).join(', ')}\``
                );
            }

            return interaction.reply({ embeds: [noArgsEmbed], ephemeral: true });
        }

        const cmd = client.commands.get(cmdName);
        if (!cmd) return interaction.reply({ content: 'Cette commande n\'existe pas!', ephemeral: true });

        return interaction.reply({ content: `
\`\`\`makefile
[Help: commande -> ${cmd.name}] ${cmd.ownerOnly ? '/!\\ Pour les admins du bot uniquement /!\\' : ''}

${cmd.description ? cmd.description : contextDescription[`${cmd.name}`]}

Permissons: ${cmd.permissions.join(', ')}
Utilisation: ${prefix}${cmd.usage}
Exemple: ${prefix}${cmd.examples.join(` | ${prefix}`)}

---

${prefix} = prefix utiliser pour le bot (/commands sont aussi disponible)
{} = sous-commande(s) disponible(s) | [] = option(s) obligatoire(s) | <> = option(s) optionnel(s)
Ne pas inclure ces caractères -> {}, [] et <> dans vos commandes.
\`\`\``, ephemeral: true});
    }
};