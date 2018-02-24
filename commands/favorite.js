exports.run = (client, message) => {
message.channel.send(`Phantas is - ;woomy Peepers is - ;lenny`,  {code:'css'});
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['f', 'Fav'],
  permLevel: 0
};
exports.help = {
  name: 'favorite',
  description: 'The owners favorite commands',
  usage: 'favorite'
};
