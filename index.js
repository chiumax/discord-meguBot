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
	let prefix, messageArray, cmd, args, send, msg;

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
			message.channel.send('pong');

			break;

		case 'quote':
			message.channel.send(
				meguminQuotes[Math.floor(Math.random() * 403)]
			);

			break;
		case 'hello':
			message.channel.send('Hello!');

			break;
		case 'help':
			message.channel.send({
				embed: {
					color: 3447003,
					author: {
						name: bot.user.username,
						icon_url: bot.user.avatarURL
					},
					title: 'This is an embed',
					url: 'http://google.com',
					description:
						'This is a test embed to showcase what they look like and what they can do.',
					fields: [
						{
							name: 'Fields',
							value:
								'They can have different fields with small headlines.'
						},
						{
							name: 'Masked links',
							value:
								'You can put [masked links](http://google.com) inside of rich embeds.'
						},
						{
							name: 'Markdown',
							value:
								'You can put all the *usual* **__Markdown__** inside of them.'
						}
					],
					timestamp: new Date(),
					footer: {
						icon_url: bot.user.avatarURL,
						text: '| made by dumblole'
					}
				}
			});
			break;
		default:
	}
	// if (msg == 'ping') {
	// 	message.channel.send('pong');
	// 	return;
	// }
	//
	// if (msg === `${prefix}quote`) {
	// 	send(meguminQuotes[Math.floor(Math.random() * 403)]);
	// 	return;
	// }
	// if (msg === `${prefix}hello`) {
	// 	send('Hello!');
	// 	return;
	// }
});

bot.login(tokenFile.token);

// https://discordapp.com/oauth2/authorize?client_id=468530564689952798&scope=bot
