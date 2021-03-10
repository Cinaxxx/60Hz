const Discord = require('discord.js');


exports.run = async (client, message, args) => {
    message.react("<:yes:817468910567161926>")

  if(!message.member.roles.cache.has("817468245362999306")) return message.channel.send(`Bu komutu kullanabilmek için yeterli yetkiye sahip olmasınız.`);
    let kullanıcı = message.mentions.users.first()
    if (!kullanıcı) return message.channel.send('Kullanıcıyı etiketlemeyi unuttun kanka.')
    let rol = message.mentions.roles.first()
    let member = message.guild.member(kullanıcı)
        if(!member) return message.channel.send(`Bir üye etiketle`)
member.roles.add("817468251025440778")
return message.channel.send(new Discord.MessageEmbed()
.setColor('GREEN')
 .setDescription(`${member} Adlı üye başarıyla kayıt edildi`)
 .setFooter(`Komutu kullanan yetkili : ${message.author.username}`))
  



};
exports.conf = {
    enabled: true,     
    guildOnly: true,
    aliases: []
  };
  
  exports.help = {
    name: 'kayıt',
    description: '',
    usage: ''
  };