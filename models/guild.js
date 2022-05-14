const mongoose = require('mongoose');

const guildSchema = mongoose.Schema({
    id: String,
    prefix: { 'type': String, 'default': '!' },
                                        //ID Channel (relié a dbconfig)\\
    logChannel: { 'type': String, 'default': '973617515450204180' },
    outChannel: { 'type': String, 'default': '973707879255277599' },
    testChannel: { 'type': String, 'default': '971791302926696619' },
    test2Channel: { 'type': String, 'default': '839914719028707359' },
});

module.exports = mongoose.model('Guild', guildSchema);