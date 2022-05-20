module.exports = {
    name: 'test',
    category: 'admin',
    permissions: ['SEND_MESSAGES'],
    ownerOnly: true,
    usage: 'test ou /test',
    examples: ['test ou /test'],
    description: 'La commande test envoie une commande test',
    async run(client, message) {
      const checkminutes = 30, checkthe_interval = checkminutes * 60 * 1000; //Ceci vérifie toutes les X minutes, changez le numero de 'checkminutes' par la minute que vous voulez.
        setInterval(async function() {
                                                            //ID Channel
            const testChannel = client.channels.cache.get('976983656474243092');
            await testChannel.send('!eco');
          }, checkthe_interval);
    },
    async runInteraction(client, interaction) { }
};