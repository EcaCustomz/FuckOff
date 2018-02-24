exports.run = (client, message) => {
message.channel.send(`YAY I WON :D`);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'win',
  description: 'I wont :D',
  usage: 'win'
};
