exports.run = (client, message) => {
  message.channel.send('https://cdn.discordapp.com/attachments/255551086713241600/414667598962360320/image.jpg')
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'funny',
  description: 'I SPOT IT!',
  usage: 'funny'
};
