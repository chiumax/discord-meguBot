const botconfig = require('./botconfig.json');
const meguminQuotes = require('./megumin-quotes.json');
const Discord = require('discord.js');
const tokenFile = require('./token.json');

const bot = new Discord.Client({ disableEveryone: true });

bot.on('ready', async () => {
	console.log(`${bot.user.username} is online!`);
	bot.user.setGame('with Kazuma || ' + botconfig.prefix + ' help');
});

bot.on('message', message => {
	let prefix, messageArray, cmd, args;

	prefix = botconfig.prefix;
	messageArray = message.content.split(' ');
	cmd = messageArray[0];
	args = messageArray.slice(1);
	console.log(cmd + prefix);

	// Talking to the bot in dm's won't work, also it prevents the bot from
	// potentially activating itself
	if (message.author.bot || message.channel.type === 'dm') {
		return;
	}

	if (message.content == 'ping') {
		message.channel.sendMessage('pong');
	}

	if (message.content === `${prefix} quote`) {
		message.channel.sendMessage(
			meguminQuotes[Math.floor(Math.random() * 403)]
		);
	}
	if (message.content === `${prefix} hello`) {
		return message.channel.send('Hello!');
	}
	if (message.content === `${prefix} help`) {
		message.channel.send('ahg!');
	}
});

bot.login(tokenFile.token);

// https://discordapp.com/oauth2/authorize?client_id=468530564689952798&scope=bot
