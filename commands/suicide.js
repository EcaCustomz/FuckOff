exports.run = (client, message) => {
  message.channel.send('**THAT SHITS BAD ASS!**')
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['dead'],
  permLevel: 0
};

exports.help = {
  name: 'suicide',
  description: 'Danny Devito is god',
  usage: 'suicide'
};
