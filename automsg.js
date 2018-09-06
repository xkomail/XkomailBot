const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
	console.log('Chipsy Auto Message Başarıyla Başlatıldı!');
	console.log('AutoMSG\'yi Kullandığınız İçin Teşekkürler.');
	console.log('Web Site: http://evils.pw');
});

client.on("guildMemberAdd", member => {
	setTimeout(() => {member.send("Merhaba :heart: \n**Golden Army** Krallığı açılmıştır, Sunucu 500+ kişiye ulaştığında çeşitli çekilişler olacaktır aktifliğinize ve rankınıza göre roller verilecektir, Sende ailemize katılmaya ne dersin? :relaxed: https://discord.gg/SBTUjQ7")}, 30000);
});

client.login("NDc4MTA0NjkzOTI3NTc1NTUz.DlF1cg.lMGMHdpCAaaNBKHsG0Y-f8JAQHY");