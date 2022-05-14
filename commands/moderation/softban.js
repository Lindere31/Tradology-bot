module.exports = {
    name: 'softban',
    category: 'moderation',
    permissions: ['BAN_MEMBERS'],
    ownerOnly: false,
    usage: 'softban [@member] [duration] [reason] ou /softban [@member] [duration] [reason]',
    examples: ['softban @nom_utilisateur 4 raison /softban @nom_utilisateur 4 raison'],
    description: 'Bannir un utilisateur temporairement avec une raison',
    async run(client, message, args) {
        if (!args[0]) return message.reply('Spécifier un membre à ban!');
        if (isNaN(args[1]) || !args[1] || args[1] > 7 || args[1] < 1) return message.reply('Spécifier une durée pour votre ban **(entre 1 et 7 jours)**');
        if (!args[2]) return message.reply('Spécifier un raison à votre ban!');

        const target = message.mentions.members.find(m => m.id);
        const duration = args[1];
        const reason = args.slice(2).join(' ');

        if (!target.bannable) return message.reply('Ce membre ne peut pas être ban par le bot!')

        target.ban({ days: duration, reason: reason });
        message.channel.send(`Le membre ${target} à été banni pour ${duration} jours!`);
    },
    options: [
        {
            name: 'target',
            description: 'L\'utilisateur a ban',
            type: 'USER',
            required: true,
        },
        {
            name: 'duration',
            description: 'La durée du ban',
            type: 'NUMBER',
            minValue: 1,
            maxValue : 7,
            required: true,
        },
        {
            name: 'reason',
            description: 'La raison du ban',
            type: 'STRING',
            required: true,
        },
    ],
    async runInteraction(client, interaction) {
        const target = interaction.options.getMember('target');
        const duration = interaction.options.getMember('duration');
        const reason = interaction.options.getString('reason');

        if (!target.bannable) return interaction.reply('Ce membre ne peut pas être ban par le bot!')

        target.ban({ days: duration, reason: reason });
        interaction.reply(`Le membre ${target} à été banni pour ${duration} jours!`);
    
    },
};