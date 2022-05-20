module.exports = {
    name: 'emoji',
    category: 'utils',
    permissions: ['SEND_MESSAGES'],
    ownerOnly: false,
    usage: 'emoji [question] ou /emoji [titre] [contenu]',
    examples: ['emoji'],
    description: 'Poster vos emoji!',
    async run(client, message, args) {
        if (message.author.bot) return;
        const emoji = await message.reply('Emoji');
        await emoji.react(`🟥`);
        await emoji.react(`🟩`);
        await emoji.react(`🟦`);
        await emoji.react(`🟪`);
    },
    async runInteraction(client, interaction) {
        const emoji = await interaction.reply({ content: 'Emoji', fetchReply: true });
        await emoji.react(`🟥`);
        await emoji.react(`🟩`);
        await emoji.react(`🟦`);
        await emoji.react(`🟪`);
        
    },
};