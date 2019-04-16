const Discord = require('discord.js');
const { prefix, token } = require('./config.json');
const client = new Discord.Client();

client.once('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`)
})

//Test Commit
client.on('message', message => {
    if (message.content === 'ping') {
        message.reply('pong');
    }
})

client.login(token);