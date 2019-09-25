const Discord = require('discord.js');
const bot = new Discord.Client();
const botsettings = require('./botsettings.json');

const fs = require('fs')

const token = config.token;

const BOT_VERSION = "1.0.0";

const commandPrefix = botsettings.prefix;

bot.on('ready', async () => {
    console.log('\nStarting Bot...\nNode version: ' + process.version + '\nDiscord.js version: ' + Discord.version + '\n')
    console.log('\nThis Bot is online! Running on version: ' + BOT_VERSION + '\n')
    bot.user.setActivity('Chaos', {
        type: 'Playing',
        url: 'https://www.hackthebox.eu/home/machines/profile/167',
        image: 'https://www.hackthebox.eu/storage/avatars/7bbafb1fe25f39671329aa6758b68da6.png'
    });
    bot.user.setStatus('dnd');
})
