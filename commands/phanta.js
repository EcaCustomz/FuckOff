exports.run = (client, message) => {
  message.channel.send('.')
    .then(msg => {
      msg.edit(`Why do you want my daddy?`);
    });
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'phanta',
  description: 'manta',
  usage: 'phanta'
};
