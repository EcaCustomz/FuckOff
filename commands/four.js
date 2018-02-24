exports.run = (client, message) => {
  message.channel.send('He has a 3.4 Batting average!')
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'four',
  description: 'Displays four\'s count',
  usage: 'four'
};
