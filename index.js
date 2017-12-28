/* eslint consistent-return: 0, no-console: 0 */
const Discord = require('discord.js')
const bot = new Discord.Client()
const fs = require('fs');
var db = require('quick.db')
const commands = JSON.parse(fs.readFileSync('Storage/help.json', 'utf8'));
const func = require('./functions.js');

const config = require('./Storage/config.json')

bot.on("message", async message => {

    if (message.channel.type != 'text') return message.channel.send('Please use commands in the server!')

        db.fetchObject(`guildPrefix_${message.guild.id}`).then(i =>{

            let prefix;

            if (i.text) {
                prefix = i.text
            } else {
                prefix = '+'
            }

        let msg = message.content.toUpperCase();
        let sender = message.author; 
        let args = message.content.slice(prefix.length).trim().split(" ");
        let cmd = args.shift().toLowerCase();

        if (sender.bot) return;
        if (!message.content.startsWith(prefix)) return;

        try {
            let commandFile = require(`./commands/${cmd}.js`);
            commandFile.run(bot, message, args, func);
        } catch(e) {
            console.log(e.message);
        }
        
    });

});

bot.on("guildMemberAdd", guildMember => {
    db.fetchObject(`autoRole_${guildMember.guild.id}`).then(i =>{
        if (!i.text || i.text.toLowerCase() === 'none') return;

        
        else {

            try {
                if (!guild.roles.exists("name", i.text)) return message.reply("Invalid role");
                guildMember.addRole(guildMember.guild.role.find('name', i.text))
                message.channel.send(guildMember.tag + ", You have been given " + i.text + " role")
            } catch (e) {

            }

        }

    })
});

bot.on('ready', () => {
    console.log(`Logged in as ${bot.user.tag}!`)
});

bot.login(config.token)