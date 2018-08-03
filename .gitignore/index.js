const Discord = require('discord.js');
const bot = new Discord.Client();
var prefix = '/';
bot.login('NDY0MTc3MDIyODYwNTI1NTk5.DiCohg.A92zWk8owPViJuEp-sqXcsktgSU');

bot.on('guildMemberAdd', async member => {
    const channel = member.guild.channels.find('name', 'bienvenue_les_nouveaux_');
    if (!channel) return;
    channel.send(`Bienvenue sur le serveur ${member}`);
    member.addRole(member.guild.roles.find('name', 'Nouveaux'))
    var newmember_embed = new Discord.RichEmbed()
        .setColor('#ffff00')
        .setTitle("Ecris le message correspondant à ton rôle :")
        .addField("-Si vous êtes un furry : Bonjour @Modérateur, je suis un furry !", ":regional_indicator_f:")
        .addField("-Si vous êtes un modéliste : Bonjour @Modérateurs, je suis un modéliste !", ":regional_indicator_m:")
        .addField("-Si vous êtes un geek : Bonjour @Modérateur, je suis un geek !", ":regional_indicator_g:")
        .setFooter("Menu de l'attribution -Bot d'AIE V0.1-2018-08-01")
        channel.send(newmember_embed);
        await message.react('🇫');
        await message.react('🇲');
        await message.react('🇬');
        console.log('Un nouvel utilisateur est arrivé !')
    }
);

bot.on('message', message => {

    //politesse_Bonjour
    if(message.content === 'Bonjour'){
        message.reply('Bonjour à toi !');
        console.log('Le bot dit bonjour.');
    };

    //politesse_De rien 
    if(message.content === 'Merci'){
        message.reply('De rien !');
        console.log('Le bot dit de rien.');
    };

    //politesse_Au revoir
    if(message.content === 'Au revoir'){
        message.reply('A la prochaine !');
        console.log('Le bot dit au revoir.');
    };

    //easter_egg
    if(message.content === 'Qui est le plus beau ?'){
        message.channel.send("C'est évidament @AIE, le Furry Modéliste Joueur#5260 le plus beau !");
        console.log("Quelqu'un a trouvé la commande secrète.");
    };

    //commande_help
    if(message.content === prefix + 'help'){ 
        var help_embed = new Discord.RichEmbed()
        .setColor('#0367fd')
        .setTitle("Voici la liste des commandes du serveur.")
        .setDescription("Nous sommes à vos côtés pour vous aider.")
        .addField("/help", "Donne la liste des commandes.")
        .addField("/godwin points", "Savoir le nombre de points GodWin actuels de la chaîne.")
        .addField("/sponsorship wargaming", "Avoir les liens de parrainages sur les jeux WarGaming.")
        .setFooter("Menu d'aide-Bot d'AIE V0.1-2018-08-01")
        message.channel.send(help_embed);
        console.log('Un utilisateur a effectué la commande /help.');
    };

    //commande_godwin points
    if(message.content === prefix + 'godwin points'){
        message.channel.send("La chaîne est à 1 point godwin.");
        console.log('Un utilisateur a effectué la commande /godwin points.');
    };

    //commande_sponsorship wargaming
    if(message.content === prefix + 'sponsorship wargaming'){ 
        var spwg_embed = new Discord.RichEmbed()
        .setColor('#0367fd')
        .setTitle("Voici la liste des parrainages disponibles :")
        .setDescription("Nous sommes à vos côtés pour vous aider.")
        .addField("World Of Tanks :", "N'est pas encore disponibles.")
        .addField("World Of Warships :", "https://playtogether.worldofwarships.eu/invite/ODVELO9")
        .setFooter("Menu des parrainages WG-Bot d'AIE V0.1-2018-08-01")
        message.channel.send(spwg_embed);
        console.log('Un utilisateur a effectué la commande /sponsorship wargaming.');
    };

}); 

bot.on('ready', () => {
    console.log('Je suis prêt !');
    bot.user.setActivity("/help pour de l'aide");
});
