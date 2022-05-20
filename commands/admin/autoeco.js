module.exports = {
    name: 'autoeco',
    category: 'admin',
    permissions: ['SEND_MESSAGES'],
    ownerOnly: true,
    usage: 'autoeco ou /autoeco',
    examples: ['autoeco ou /autoeco'],
    description: 'La commande autoeco declenche le mode auto de la commande !eco',
    async run(client, message) {
      const checkminutes = 30, checkthe_interval = checkminutes * 60 * 1000; //Ceci vérifie toutes les X minutes, changez le numero de 'checkminutes' par la minute que vous voulez.
        setInterval(async function() {
                                                            //ID Channel
            const testChannel = client.channels.cache.get('976983656474243092');
            await testChannel.send('!eco');
          }, checkthe_interval);
    },
    async runInteraction(client, interaction) {
        const checkminutes = 30, checkthe_interval = checkminutes * 60 * 1000; //Ceci vérifie toutes les X minutes, changez le numero de 'checkminutes' par la minute que vous voulez.
        setInterval(async function() {
                                                            //ID Channel
            const testChannel = client.channels.cache.get('976983656474243092');
            await testChannel.send('!eco');
          }, checkthe_interval);
    }
};