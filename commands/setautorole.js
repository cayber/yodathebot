var db = require('quick.db')

exports.run = (bot, message, args, func) => {

    if (!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send('This requires you to have a role with `Administrator`');

    if(!args.join(" ")) return message.reply('`Please set arguments. `setAutoRole <role>` ');

    db.updateText(`autoRole_${message.guild.id}`, args.join().trim()).then(i => {

        message.channel.send('Successfully changed auto-role to ' + i.text); 

    });
    
}