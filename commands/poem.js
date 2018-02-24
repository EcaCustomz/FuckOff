exports.run = (client, message) => {
  message.channel.send(`Monkeys can climb
Crickets can leap
Horses can race
Owls can seek
Cheetahs can run
Eagles can fly
People can try
But that's about it.`, {code:'asciidoc'} );
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'poem',
  description: 'Shows all emote in the prism server',
  usage: 'emotes'
};
