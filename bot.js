const Discord = require('discord.js');
 const client = new Discord.Client();

client.on('ready', () => {
 console.log(`Logged in as ${client.user.tag}!`);
 });

client.on('message', msg => {
 if (msg.content === 'ip') {
 msg.reply('Minecraft (Survival) [ play.mcpohoda.eu ]');
 }
 });

client.login('NTA0MzE2NDA3MjUzNjk2NTIy.DrDRKw.pJAdAaJJev9GwXElm985pH25H18');
