exports.run = (client, message) => {
message.channel.send(`you are now boned https://youtu.be/Kp7eSUU9oy8`);
  message.react('416759932805709824');
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['b', 'bone'],
  permLevel: 0
};
exports.help = {
  name: 'boned',
  description: 'Which the bones are red',
  usage: 'boned'
};
