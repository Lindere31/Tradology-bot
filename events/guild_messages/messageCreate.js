                   //ID ADMIN BOT
const ownerId = '326043045613142017';

module.exports = {
    name: 'messageCreate',
    once: false,
    async execute(client, message) {

        let guildSettings = await client.getGuild(message.guild);                                                      //Base de donnée

        if (!guildSettings) {                                                                                          //Base de donnée
            await client.createGuild(message.guild);                                                                   //Base de donnée
            guildSettings = await client.getGuild(message.guild);                                                      //Base de donnée
            return message.reply('Le bot a mis a jour la base de données pour votre serveur, retapez la commande!')    //Base de donnée
        }

        const prefix = guildSettings.prefix;
        //if (message.author.bot) return;
        if (!message.content.startsWith(prefix)) return;
        
        const args = message.content.slice(prefix.length).trim().split(/ +/g);
        const cmdName = args.shift().toLowerCase();
        if (cmdName.length == 0) return;

        let cmd = client.commands.get(cmdName);
        if (!cmd) return message.reply('Cette commande n\'existe pas!');

        if (cmd.ownerOnly) {
            if (message.author.id != ownerId) return message.reply('La seule personne pouvant taper cette commande est l\'owner du bot!')
        };

        if (!message.member.permissions.has([cmd.permissions])) return message.reply(`Vous n'avez pas la/les permission(s) requise(s) (\`${cmd.permissions.join(', ')}\`) pour taper cette commande!`);

        if (cmd) cmd.run(client, message, args, guildSettings);
    },
};