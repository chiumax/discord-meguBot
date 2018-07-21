'use strict';
const fs = require('fs');
const meguminQuotes = require('../data/megumin-quotes.json');
const Discord = require('discord.js');
const tokenFile = require('../config/token.json');
const explosionQuotes = require('../data/explosion.json');
const bot = new Discord.Client({ disableEveryone: true });
const fetch = require('node-fetch');

// Apparently I shouldn't use require to 'import' json files. Too lazy to do the rest :c
let botconfigRaw = fs.readFileSync('../config/botconfig.json');
let botconfig = JSON.parse(botconfigRaw);

// Lete the person hosting the bot know when the bot is online
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
	// Megumin is playing...
	bot.user.setGame('with Kazuma || ' + botconfig.prefix + ' help');
});

// Basically an event listener for any message that appears in the discord server
// Regardless of whether it comes from a bot or a person
bot.on('message', async message => {
	let prefix, messageArray, cmd, args, send, msg, msgEmbed, testObj;

	// Make my life easier, substitute some commonly used variables for shorter names
	msg = message.content;
	prefix = botconfig.prefix;

	// Splits the message into a list so commands with values can be carried out
	// Also gets the length of the bot command prefix and removes it from the list
	messageArray = message.content.substring(prefix.length).split(' ');

	// Sets all characters
	messageArray = messageArray.map(text => text.toLowerCase());
	console.log(message.content);

	// Talking to the bot in dm's won't work, also it prevents the bot from
	// potentially activating itself
	// Also, if the message doesn't start with the bot prefix, then it won't check
	// for command keyword
	if (
		message.author.bot ||
		message.channel.type === 'dm' ||
		!message.content.startsWith(prefix)
	) {
		return;
	}

	// Came across a lot of formatting issues and I found out that a backslash in discord
	// Overrode github markdown
	prefix === '*' ? (prefix = '\\*') : (prefix = prefix);
	// Checks the command the user requests
	switch (messageArray[0]) {
		// ping the bot
		case 'ping':
			message.channel.send(
				'pong! ' +
					`\`${(Date.now() - message.createdTimestamp) * -1} ms\``
			);
			break;

		// requests a random quote from megumin-quotes.json
		case 'quote':
			message.channel.send(
				meguminQuotes[Math.floor(Math.random() * 403)]
			);
			break;

		// greeting the bot
		case 'hello':
			message.channel.send('I am Megumin!');
			break;

		// foobar
		case 'foo':
			message.channel.send('bar!');
			break;

		case 'img':
			fetch('https://www.reddit.com/r/megumin.json?limit=50')
				.then(res => res.json())
				.then(res => res.data.children)
				.then(res =>
					res.map(post => ({
						author: post.data.author,
						img: post.data.url,
						title: post.data.title,
						permlink: post.data.permalink
					}))
				)
				.then(res => {
					let temp = Math.floor(Math.random() * 46);
					message.channel.send({
						embed: {
							title: res[temp].title,
							url: 'https://www.reddit.com' + res[temp].permlink,
							description: `Post by: ${res[temp].author}`,
							color: 16077395,
							image: {
								url: res[temp].img
							}
						}
					});
				});
			break;

		// Requests the bot for a list of commands and how to use them
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
							name: 'foo',
							value: 'bar!'
						},
						{
							name: 'img',
							value:
								'Shows a random picture from the 40 most recent posts from r/Megumin! \nMay include **NSFW** pics :wink:.'
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
							name: 'prefix <custom_prefix>',
							value:
								`You can call me anything you'd like. :wink: \nUsage example: **` +
								prefix +
								`prefix megumin** or **` +
								prefix +
								`prefix !**`
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

		// requests a random spell chant from explosion.json and attaches a gif of megumin exploding some baddies. gif is megumin-explosion.gif
		case 'explosion':
			// random quote
			message.channel.send(
				`*${explosionQuotes[Math.floor(Math.random() * 6)]}*`
			);
			message.channel.send({ files: ['../media/megumin-explosion.gif'] });
			break;

		case 'prefix':
			if (!(messageArray[1] === undefined)) {
				botconfig.prefix = messageArray[1];
				message.channel.send(
					`New bot prefix has been set to ${botconfig.prefix}`
				);
				bot.user.setGame(
					'with Kazuma || ' + botconfig.prefix + ' help'
				);
			} else {
				message.channel.send(
					`Please refer to **${prefix}help** for proper usage of this command.`
				);
			}
			break;

		// If none of the commands match what is available, notify user of invalid command.
		default:
			message.channel.send(
				"That's not a valid request! \nI can only do so much..."
			);
	}

	fs.writeFileSync(
		'../config/botconfig.json',
		JSON.stringify(botconfig, null, 2)
	);
});

// Enables the bot to be online.
bot.login(tokenFile.token);

// https://discordapp.com/oauth2/authorize?client_id=468530564689952798&scope=bot
// https://discordapp.com/oauth2/authorize?client_id=468530564689952798&scope=bot&permissions=2146958591
