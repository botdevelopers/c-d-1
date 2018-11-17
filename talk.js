const Disc = require('discord.js');
const client = new Disc.Client();
const token = 'NTEzMzM2NjgwODc1NTU2ODg0.DtGh0g.TKijuoiMVXWHpKloqu7ISrsYiro' //Make a bot and get it's token paste it here!!
const readline = require('readline');

var guildID = "513336325362024448";
var channelID = "513337760833077269";



//client.guilds.get(guildID).channels.get(channelID).send(embed);

client.on('ready', () => {
  //console.log(`${client.user.tag} Kullanıcı Adı İle Giriş Yapıldı!`);
  client.user.setGame(`Bota Yazılan Özel Mesajları Okuyor!`);
});

client.on('message', function(message){
    if(message.channel.type === 'dm'){
        console.log("[" + message.author.username + "]: " + message.content) //Message from : Message
        var K = message.author.tag;
		const embed = new Disc.RichEmbed()
			.setTitle("Canlı Destek")
			.setColor("RANDOM")
			.addField('Kullanıcı', K)
			.addField('Mesaj', message.content)
			client.guilds.get(guildID).channels.get(channelID).send(embed);
        const rl = readline.createInterface({
          input: process.stdin,
          output: process.stdout
        });
  
        rl.question('Cevap Ver ' + message.author.username + ': ', (answer) => {
        message.author.send(`${answer}`);
        rl.close();
     });
     }
});

client.login(token);
