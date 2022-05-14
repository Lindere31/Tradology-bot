const { MessageEmbed } = require("discord.js");

module.exports = {
    name: 'userinfo',
    category: 'contextuel',
    permissions: ['SEND_MESSAGES'],
    ownerOnly: false,
    usage: 'Utiliser le menu contextuel de Discord!',
    examples: ['Clic droit sur le pseudo -> Applications -> userinfo'],
    type: 'USER',
    async runInteraction(client, interaction) {
        const member = await interaction.guild.members.fetch(interaction.targetId);
        
        const embed = new MessageEmbed()
        .setAuthor({ name: `${member.user.tag} (${member.id})`, iconURL: member.user.bot ? 'https://img.icons8.com/nolan/452/chatbot.png' : 'https://i.postimg.cc/br9mszG6/pngegg-3.png' })
        .setColor('#8e48f7')
        .setImage(member.user.displayAvatarURL())          
        .addFields(
            { name: 'Nom', value: `${member.displayName}`, inline: true },
            { name: 'Modérateur', value: `${member.kickable ? '🔴' : '🟢'}`, inline: true },
            { name: 'Bot', value: `${member.user.bot ? '🟢' : '🔴'}`, inline: true },
            { name: 'Roles', value: `${member.roles.cache.map(role => role).join(', ')}` },
            { name: 'A crée son compte le', value: `<t:${parseInt(member.user.createdTimestamp / 1000)}:f> (<t:${parseInt(member.user.createdTimestamp / 1000)}:R>)` },
            { name: 'A rejoint le serveur le', value: `<t:${parseInt(member.joinedTimestamp / 1000)}:f> (<t:${parseInt(member.joinedTimestamp / 1000)}:R>)` },
        )
        
        interaction.reply({ embeds: [embed], ephemeral: true });
    },
};