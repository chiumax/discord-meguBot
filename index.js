'use strict';
const fs = require('fs');
const botconfig = require('./botconfig.json');
const meguminQuotes = require('./megumin-quotes.json');
const Discord = require('discord.js');
const tokenFile = require('./token.json');
const explosionQuotes = require('./explosion.json');

const bot = new Discord.Client({ disableEveryone: true });

bot.on('ready', async () => {
	console.log(`
███╗   ███╗███████╗ ██████╗ ██╗   ██╗    ██████╗  ██████╗ ████████╗
████╗ ████║██╔════╝██╔════╝ ██║   ██║    ██╔══██╗██╔═══██╗╚══██╔══╝
██╔████╔██║█████╗  ██║  ███╗██║   ██║    ██████╔╝██║   ██║   ██║
██║╚██╔╝██║██╔══╝  ██║   ██║██║   ██║    ██╔══██╗██║   ██║   ██║
██║ ╚═╝ ██║███████╗╚██████╔╝╚██████╔╝    ██████╔╝╚██████╔╝   ██║
╚═╝     ╚═╝╚══════╝ ╚═════╝  ╚═════╝     ╚═════╝  ╚═════╝    ╚═╝

`);
	console.log(`${bot.user.username} is online!`);
	bot.user.setGame('with Kazuma || ' + botconfig.prefix + ' help');
});

bot.on('message', message => {
	let prefix, messageArray, cmd, args, send, msg, msgEmbed, testObj;

	testObj = { nog: 'what' };

	msg = message.content;
	prefix = botconfig.prefix;
	messageArray = message.content.substring(prefix.length).split(' ');

	console.log(messageArray[0].toLowerCase());

	// Talking to the bot in dm's won't work, also it prevents the bot from
	// potentially activating itself
	if (
		message.author.bot ||
		message.channel.type === 'dm' ||
		!message.content.startsWith(prefix)
	) {
		return;
	}

	switch (messageArray[0].toLowerCase()) {
		case 'ping':
			message.channel.send('pong!');

			break;

		case 'quote':
			message.channel.send(
				meguminQuotes[Math.floor(Math.random() * 403)]
			);

			break;
		case 'hello':
			message.channel.send('I am Megumin!');

			break;
		case 'help':
			message.channel.send({
				embed: {
					title: ':question:__COMMAND LIST__:question:',
					description: `This is a list of currently available commands. Make sure you use the command prefix '**${prefix}**' before typing in any of these commands`,
					color: 16077395,
					footer: {
						icon_url: bot.user.avatarURL,
						text: '-= Made by dumblole =-'
					},

					fields: [
						{
							name: 'help',
							value: 'HEEEEEELLLPPP'
						},
						{
							name: 'ping',
							value: 'pong!'
						},
						{
							name: 'hello',
							value: 'Say hello to Megumin <3'
						},
						{
							name: 'quote',
							value:
								'Megumin says a random line from her entire script in the anime Konosuba.\n*(There are 403 lines)*'
						},
						{
							name: 'explosion',
							value:
								'Megumin readies her explosion spell by chanting... \nAnd when you least expec-***BOOOOOM***'
						}
					]
				}
			});
			break;
		case 'explosion':
			msgEmbed = new Discord.RichEmbed()
				.setTitle('hi')
				.setImage('./megumin-explosion.gif');
			message.channel.send(
				`*${explosionQuotes[Math.floor(Math.random() * 6)]}*`
			);
			message.channel.send({ files: ['./megumin-explosion.gif'] });

			break;

		default:
	}
});

bot.login(tokenFile.token);

// https://discordapp.com/oauth2/authorize?client_id=468530564689952798&scope=bot
// https://discordapp.com/oauth2/authorize?client_id=468530564689952798&scope=bot&permissions=2146958591
