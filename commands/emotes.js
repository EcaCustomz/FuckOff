exports.run = (client, message) => {
  const emojiList = message.guild.emojis.map(e=>e.toString()).join(" ");
  const phanta = client.emojis.find("name", "phanta");
  message.channel.send(emojiList)
    .then(msg => {
      msg.react(phanta);
    });
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'emotes',
  description: 'Shows all emote in the prism server',
  usage: 'emotes'
};
