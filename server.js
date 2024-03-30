const { Client, Intents} = require('discord.js');
const path = require('path')
const fs = require('fs');
const { oxmysql } = require('@overextended/oxmysql');
const config = require('./config/server_config.json');
let TOKEN_CONFIG = null
let TOKEN = null;

let tokenReady = null;

const ANNOUNCEMENTS_CHANNEL_ID = config.CHANNEL_ID;
const tokenPath = path.resolve(`${GetResourcePath(GetCurrentResourceName())}/config/token.json`)
const dataPath = path.resolve(`${GetResourcePath(GetCurrentResourceName())}/data/data.json`)

async function fetch_mysql () {
  const response = await oxmysql.query('SELECT `token` FROM `loadingscreen_bot`')
  
  if (response[0].token === 'empty_token') {
    TOKEN_CONFIG = require('./config/token.json');
    const success = await oxmysql.update('UPDATE `loadingscreen_bot` SET `token` = ? WHERE `token` = ?', [
      TOKEN_CONFIG.TOKEN, 'empty_token', 
    ])
    if (success) {
      TOKEN = TOKEN_CONFIG.TOKEN;
      fs.writeFile(tokenPath, '', (err) => {
        if (err) {
          console.error('Error clearing file:', err);
        } 
      });
    }
  } else {
    TOKEN = response[0].token
  }

}

fetch_mysql()

const client = new Client({
  intents: [
    Intents.FLAGS.GUILDS,
    Intents.FLAGS.GUILD_MESSAGES,
    Intents.FLAGS.MESSAGE_CONTENT,
    Intents.FLAGS.GUILD_MEMBERS
  ],
});

function checkToken() {
  if(TOKEN) { 
    client.login(TOKEN);
    clearInterval(tokenReady)
  }
}

async function fetchAnnouncements() {
  try {
    const channel = await client.channels.fetch(ANNOUNCEMENTS_CHANNEL_ID);
    const messages = await channel.messages.fetch();
    
    let data = [];

    messages.forEach(message => {
      data.push({
        channel: channel.name,
        name: message.author.username,
        url: message.author.displayAvatarURL(),
        msg: message.content
      });
    });

    fs.writeFile(dataPath, '', (err) => {
      if (err) {
        console.error('Error clearing file:', err);
      } 
    });

    fs.appendFile(dataPath, JSON.stringify(data, null, 2), (err) => {
      if (err) {
        console.error('Error writing discord channel data:', err);
      } 
    });

  } catch (error) {
    console.error('Error fetching announcements:', error);
  } 

  client.destroy()
}

client.once('ready', () => {
  fetchAnnouncements();
});

tokenReady = setInterval(() => {
  checkToken()
}, 10);
