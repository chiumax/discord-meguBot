# Megumin Discord Bot :speech_balloon:

![megumin-discord](https://github.com/dumblole/discord-meguBot/blob/master/readme-imgs/a.png)

[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)
[![code style: pretty diff](https://img.shields.io/badge/code%20style-pretty%20diff-lightgrey.svg?style=flat-square)](https://github.com/prettydiff/prettydiff)
[![code style: PEP 8](https://img.shields.io/badge/code%20style-PEP%208-blue.svg?style=flat-square)](https://github.com/prettydiff/prettydiff)

A discord bot inspired by the amazing Arch Wizard of the Crimson Wizard Clan, Megumin! From the anime, Konosuba.

The bot was built off of discord.js.

Thanks for checking out my repo.

If you have any suggestions on making this project any better I'd appreciate it.

Please create an issue if something wrong happens.

## Current Features :statue_of_liberty:

-   Grab a recent post from the [r/Megumin](https://www.reddit.com/r/Megumin/) subreddit _NOTE: Randomly selected from the 50 most recent posts_
-   Using the selenium module for python to extract quotes from [animecharactersdatabase](https://www.animecharactersdatabase.com)
-   Being able to set up a custom prefix so it doesn't potentially interfere with other bots. _NOTE: Only works with select ASCII characters. The alphabet, punctuation, and numbers._
-   Custom prefix has character limit of 20
-   If you are hosting the bot, there is a log of all messages that go through the channel/guild
-   Other small stuff

## Languages :speech_balloon:

-   js
-   python

## Resources/Dependencies :books:

-   Node.JS (v8.11.3) [https://nodejs.org/en/]
-   discord.js v(11.3.2) [https://discord.js.org/#/]
-   node-fetch (v2.1.2) [https://www.npmjs.com/package/node-fetch]
-   bufferutil (v4.0.0) [https://www.npmjs.com/package/bufferutil]
-   µWS (v10.148.1) [https://www.npmjs.com/package/uuws]
-   ChromeDriver (v2.40) [http://chromedriver.chromium.org/downloads]
-   Selenium (v3.13.0) [https://www.seleniumhq.org/projects/webdriver/]
-   is-image-url (v1.1.8) [https://github.com/wzbg/is-image-url]

-   reddit [https://www.reddit.com/r/Megumin/]

-   Megumin explosions gif [https://gfycat.com/DaringUncommonGrosbeak]

-   Megumin profile image [https://www.deviantart.com/mrtapoz-kun/art/Minimalist-Wallpaper-Megumin-Konosuba-625673584]

## Installation

1.  Install Node.JS
2.  Clone/Download repository
3.  Inside directory, use ubuntu terminal. `sudo npm install` to install dependencies
4.  Go to https://discordapp.com/developers/applications
5.  Create an application
6.  Navigate to the `Bot` section located in the sidebar
7.  Copy your bot token
8.  Set a profile pic (The one I used is linked above under resources)
9.  Go to config folder and create a file with the name `token.json`

```
{
    'token': 'paste token here'
}
```

10. Paste the above into your `token.json` file.
11. Invite your bot to discord using this link: https://discordapi.com/permissions.html NOTE: Make sure you copy your client ID which can be found under `general information` where you got your token.
12. Navigate to the directory in your ubuntu terminal and run `node src/index.js`
13. If a season three of Konosuba does come out, make sure to run the python script to update the current list of Megumin quotes. A chrome window will open. Since I'm a beginner and I don't know much about webscraping, a chrome window will open and proceed to look through the website.  **Make sure you have chrome installed on your computer**

13.5. The owner of the anime character database recently hooked me up with this: https://www.animecharactersdatabase.com/api.php?srt_lines=1&cid=75490 . If anyone wants to, they can implement this to the script rather than web scraping.

## Screenshots

![](https://github.com/dumblole/discord-meguBot/blob/master/readme-imgs/terminal.PNG)
![](https://github.com/dumblole/discord-meguBot/blob/master/readme-imgs/help.PNG)
![](https://github.com/dumblole/discord-meguBot/blob/master/readme-imgs/rand.PNG)
![](https://github.com/dumblole/discord-meguBot/blob/master/readme-imgs/img.PNG)
![](https://github.com/dumblole/discord-meguBot/blob/master/readme-imgs/done.PNG)

## Code Style :art:

-   I use the [Prettier](https://prettier.io/) code formatter for js (default settings from [atom-beautify](https://github.com/Glavin001/atom-beautify)).

    [<img src ="https://prettier.io/icon.png" alt="prettier logo" width="100" height="100">](https://prettier.io/)

*   I use the [Pretty Diff](https://github.com/prettydiff/prettydiff) code formatter for html (default settings from [atom-beautify](https://github.com/Glavin001/atom-beautify)).

    [<img src ="https://avatars.githubusercontent.com/u/524902?v=3" alt="Pretty Diff logo" width="100" height="100">](https://github.com/prettydiff/prettydiff)

*   I use the [autoPEP 8](https://github.com/hhatto/autopep8) code formatter for python. It functions under [python.org's](https://www.python.org/dev/peps/pep-0008/?) PEP 8 rules. (default settings from [atom-beautify](https://github.com/Glavin001/atom-beautify)).

    [<img src ="https://github.com/dumblole/discord-meguBot/blob/master/readme-imgs/python-7be70baaac.png" alt="Pretty Diff logo" width="100" height="100">](https://github.com/hhatto/autopep8)
