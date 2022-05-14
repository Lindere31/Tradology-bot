const { Client, Collection } = require("discord.js");
const dotenv = require('dotenv'); dotenv.config();
const mongoose = require('mongoose');
const client = new Client({ intents: 98303, partials: ['USER', 'CHANNEL', 'GUILD_MEMBER', 'MESSAGE, REACTION', 'GUILD_SCHEDULED_EVENT'] });
const Logger = require('./utils/Logger');

['commands', 'buttons', 'selects'].forEach(x => client[x] = new Collection());
['CommandUtil', 'EventUtil', 'ButtonUtil', 'SelectUtil'].forEach(handler => { require(`./utils/handlers/${handler}`)(client) });
require('./utils/Functions')(client);   //Base de donnée

process.on('exit', code => { Logger.client(`Le processus s'est arrêté avec le code: ${code}!`) });

process.on('uncaughtException', (err, origin) => { 
    Logger.error(`UNCAUGHT_EXCEPTION: ${err}`);
    console.error(`Origine: ${origin}`);
});

process.on('unhandledRejection', (reason, promise) => { 
    Logger.warn(`UNHANDLED_REJECTION: ${reason}`);
    console.log(promise);
});

process.on('warning', (...args) => Logger.warn(...args));

mongoose.connect(process.env.DATABASE_URI, {
    autoIndex: false, 
    maxPoolSize: 10, 
    serverSelectionTimeoutMS: 5000, 
    socketTimeoutMS: 45000, 
    family: 4 
}).then(() => { Logger.client('+ connecté à la base de données') })
.catch(err => { Logger.error(err); });

client.login(process.env.DISCORD_TOKEN); 

//Lancer le bot (pm2 start .\index.js (/reload pour relancer))
//Lancer le bot pour dev (pm2 start .\index.js --watch(relance le bot a chaque changement dans le script))
//Voir les log du bot (pm2 log [numero app, ex: 0])

//Heroku & gitHub:
//Mettre a jour gitHub:
//git add .
//git commit -m "Nom du changement"
//git Push
//Mettre a jour heroku:
//git push heroku main

//Voir le nombre d'heure restante sur heroku:
//heroku ps

//https://kaffeine.herokuapp.com/ pour ping l'app toute les 30min pour ne pas quell se mette en veille