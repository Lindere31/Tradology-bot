const { MessageAttachment, MessageEmbed } = require('discord.js')
const captureWebsite = require('capture-website');
const fs = require('fs')

const option = {
	width: 600,
	height: 600
};

const items = [
	['https://www.financialjuice.com/widgets/ecocal.aspx?wtype=ECOCAL&mode=table&container=financialjuice-eco-widget-container&width=600px&height=600px&backC=1e222d&fontC=b2b5be&preview=true', 'economicCalendar'],
	//['https://github.com', 'github'],    //Plusieurs captures d'écran possible.
];

module.exports = {
  name: 'test',
  category: 'test',
  permissions: ['SEND_MESSAGES'],
  ownerOnly: true,
  usage: 'test ou /test',
  examples: ['test ou /test'],
  description: 'La commande test envoie une commande test',
  
  options: [
    {
        name: 'event',
        description: 'Choisir un événement à émettre',
        type: 'STRING',
        required: true,
        choices: [
            {
                name: 'On',
                value: 'On', 
            },
            {
                name: 'Off',
                value: 'Off',
            },
        ],
    },
  ],
  async runInteraction(client, interaction) {
    const evtChoices = interaction.options.getString('event');
    const checkminutes = 30, checkthe_interval = checkminutes * 60 * 1000; //Ceci vérifie toutes les X minutes, changez le numero de 'checkminutes' par la minute que vous voulez.
    const Auto = setInterval;
                                                      //ID Channel
    const testChannel = client.channels.cache.get('976983656474243092');

    if (evtChoices == 'On') {
      Auto(async function() {
        await Promise.all(items.map(([url, filename]) => {
          return captureWebsite.file(url, `${filename}.png`, option);
        }));
          const image = new MessageAttachment('././economicCalendar.png');
  
          const embed = new MessageEmbed()
          .setTitle('Calendrier économique')
          .setURL('https://www.financialjuice.com/home')
          .setThumbnail('https://i.ibb.co/kBTFVL2/financialjuice-logo.png')
          .setImage('attachment://economicCalendar.png')
          .setTimestamp()
          .setFooter({ text: interaction.user.username, iconURL: interaction.user.displayAvatarURL() })
         await testChannel.send({ content: ' ', embeds: [embed], files: [image] });
         const path = '././economicCalendar.png'
        try {
            fs.unlinkSync(path)
            //file removed
          } catch(err) {
            console.error(err)
          };
        }, checkthe_interval);
        await testChannel.send({ content: 'Le mode auto de la commande eco est activé' });
        
    } else if (evtChoices == 'Off') {
      clearInterval(Auto);
      await testChannel.send({ content: 'Le mode auto de la commande eco est désactivé' });
    }
  }
};