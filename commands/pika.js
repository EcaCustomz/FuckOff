exports.run = (client, message) => {
message.channel.send(`who is that? `);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'pika',
  description: 'who?',
  usage: 'pika'
};
