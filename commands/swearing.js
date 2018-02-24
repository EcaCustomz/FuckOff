exports.run = (client, message) => {
message.channel.send(`No Hecks, No Fricks, No Double Deckered Dicks!`);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'swear',
  description: '?',
  usage: 'swear'
};
