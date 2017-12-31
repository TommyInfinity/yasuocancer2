const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('LvL7 Megszerezve!');
});

client.on('message', message => {
    if (message.content === 'buzi') {
    	message.channel.send('Buzi a ku*va anyád, az!');
  	}
});

client.on('message', message => {
    if (message.content === 'true_damage') {
    	message.reply('Azt a trú dimidzses kurva anyádat, azt!');
  	}
});

client.on('message', message => {
    if (message.content === 'Tommy') {
    	message.reply('Tommy jelenleg Yasuoval:');
        message.reply('TommyDay: lvl7, 300k+ Mesterségpont');
        message.reply('Nordiin: lvl7, 250k+ Mesterségpont');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
