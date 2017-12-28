var db = require('quick.db')

exports.run = (bot, message, args, func) => {

    if (!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send('This requires you to have a role with `Administrator`');
    if(!args.join(" ")) return message.reply('`Please set arguments. `setPrefix <prefix>` ');

    db.updateText(`guildPrefix_${message.guild.id}`, args.join().trim()).then(i => { // Update the text field in that ID. .trim() removes the whitespaces on both side.

        message.channel.send('Prefix changed to ' + i.text); // Post in chat with the new prefix!

    });


}