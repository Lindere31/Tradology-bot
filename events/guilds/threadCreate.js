module.exports = {
    name: 'threadCreate',
    once: false,
    async execute(client, thread) {
        if (thread.isText()) thread.join();
                                                         //ID Channel
        const logChannel = client.channels.cache.get('971791302926696619');
        logChannel.send(`Le thread '${thread.name}' a était rejoint par le bot`);
    }
};