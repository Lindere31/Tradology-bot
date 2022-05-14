const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'guildMemberAdd',
    once: false,
    async execute(client, member) {
        const fetchGuild = await client.getGuild(member.guild);

        const embed = new MessageEmbed()
          .setAuthor({ name: `${member.user.tag} (${member.id})`, iconURL: member.user.displayAvatarURL() })
          .setColor('#21ff81')
          .addFields(
              {name: 'Uptime', value: `<t:${parseInt(client.readyTimestamp / 1000)}:R>`},
          )
          .setDescription(`± Nom d'utilisateur: ${member}
          ± Crée le: <t:${parseInt(member.user.createdTimestamp / 1000)}:f> (<t:${parseInt(member.user.createdTimestamp / 1000)}:R>)
          ± Rejoint le: <t:${parseInt(member.joinedTimestamp / 1000)}:f> (<t:${parseInt(member.joinedTimestamp / 1000)}:R>)
          ± Bot ?: ${member.user.bot ? '🟢' : '🔴'}
          `)
          .setTimestamp()
          .setFooter({ text: 'L\'utilisateur a rejoint!' });

                                                        //ID Channel
        const logChannel = client.channels.cache.get(fetchGuild.logChannel);
        logChannel.send({ embeds: [embed] });
     },
};