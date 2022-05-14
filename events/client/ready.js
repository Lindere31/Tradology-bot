const Logger = require('../../utils/Logger');

module.exports = {
    name: 'ready',
    once: true,
    async execute(client) {
        let guildsCount = await client.guilds.fetch();
        let usersCount = client.guilds.cache.reduce((a, g) => a + g.memberCount, 0);

        Logger.client(`+ Bot Opérationnel par ${usersCount} utilisateurs sur ${guildsCount.size} serveurs!`);

        client.user.setPresence({ activities: [{ name: 'to TRADOLOGY', type: 'LISTENING' }], status: 'online' });

        // /commands Local (Modification = instantané)       (ID Serveur)
        const devGuild = await client.guilds.cache.get('817431077387370507');
        devGuild.commands.set(client.commands.map(cmd => cmd));

        // /commands Global (Modification = 1h)
        //client.application.commands.set(client.commands.map(cmd => cmd));
     },
};