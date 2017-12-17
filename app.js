const Discord = require('discord.js');
const client = new Discord.Client();
const token = require('./settings.json').token;
//https://discordapp.com/oauth2/authorize/?permissions=1341643969&scope=bot&client_id=391417314354135050
client.on('ready', () => {
	console.log('Im online');
})
//client.on('',''=>{});

client.on('guildDelete', guild => {
	console.log(`I have left ${guild.name} at ${new Date()}`);
});

client.on('guildCreate', guild => {
	console.log(`I have joined ${guild.name}`)
});

client.on('guildMemberAdd', member =>{
	let guild = member.guild;
	console.log(`${member.user} joined ${guild.name}`)
});

client.on('guildMemberRemove', member =>{
	let guild = member.guild;
	console.log(`${member.user.username} left ${guild.name}`)
});

client.on('guildBanAdd', (member, user) =>{
	console.log(`${member.user} was banned`)
});

client.on('guildBanRemove', (member, user) =>{
	console.log(`${user} was unbanned`)
});
//client Events
client.on('channelCreate', channel => {
  console.log(`A ${channel.type} channel by the name of ${channel.name} was created ${channel.createdAt} with the ID of ${channel.id}`);
  if (channel.type === 'text') return channel.sendMessage('You were successful in creating this channel.');
});

client.on('channelDelete', channel => {
  console.log(`A ${channel.type} by the name of ${channel.name} was successfully deleted.`);
});

var prefix = "~"
client.on('message', message => {
	let args = message.content.split(' ').slice(1);
	var result = args.join(' ');

		if (message.content.startsWith(prefix + 'ping')) {
		message.channel.sendMessage(`Pong! \`${Date.now() - message.createdTimestamp} ms\``);
	} else

	if (message.content.startsWith(prefix + 'war')) {
		client.channels.get('358646596142891009').sendMessage('TIME TO START A WAR!')
} else

	if (message.content.startsWith(prefix + 'setgame')) {
		if (!result) {
			result = null;
		}
		client.user.setGame(result);
} else


	if (message.content.startsWith(prefix + 'setstatus')) {
		if (!result) {
			result = 'Online';
		}
		client.user.setStatus(result);
	} else

	if (message.content.startsWith(prefix + 'foo')) {
		message.channel.sendMessage('bar')
	}
});


client.login(token);
