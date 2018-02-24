exports.run = (client, message) => {
message.channel.send(`http://i0.kym-cdn.com/entries/icons/original/000/018/859/image.jpg`);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'woomy',
  description: 'Woomy?',
  usage: 'woomy'
};
