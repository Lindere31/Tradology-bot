module.exports = {
    name: 'collector',
    category: 'test',
    permissions: ['SEND_MESSAGES'],
    ownerOnly: false,
    usage: 'collector ou /collector',
    examples: ['collector ou /collector'],
    description: 'collector',
    async run(client, message, args) {
        if (message.author.bot) return;
        const filter = (reaction, user) => {
            return reaction.emoji.name === '❌' && user.id === message.author.id;
        };

        await message.react('❌');

        const collector = message.createReactionCollector({ filter, time: 5000 });

        collector.on('collect', (react, user) => {
            message.channel.send(`${user.tag} a réagis avec ${react.emoji.name}:`)
        })

        collector.on('end', collected => {
            if (collected.size == 1) message.channel.send("L'auteur du message a réagis!");
            else message.channel.send("L'auteur du message n'a pas réagis!");
        })
    },
    async runInteraction(client, interaction) {
         interaction.reply("tapez le message \'discord\'!");
         const filter = msg => msg.content.includes("discord");
         const collector = interaction.channel.createMessageCollector({ filter, time: 5000 });

         collector.on('end', collected => {
         interaction.followUp(`${collected.size - 1} messages collectès!`)
         })
    },
};