exports.run = (client, message) => {
  message.channel.send('?')
    .then(msg => {
      msg.edit(`DID YOU MEAN THE FUCKING HOKAGE?!?!`);
    });
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'peeper',
  description: 'HOKAGE',
  usage: 'peeper'
};
