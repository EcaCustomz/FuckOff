exports.run = (client, message) => {
  message.channel.send('.')
    .then(msg => {
      msg.edit(`Under Construction`);
    });
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['temmie'],
  permLevel: 0
};

exports.help = {
  name: 'tem',
  description: '?',
  usage: 'terror'
};
