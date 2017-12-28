exports.run = (bot, message, args, func) => {
    async function kick() {
        if(!message.member.hasPermission("KICK_MEMBERS"))
          return message.reply("Sorry, you don't have permissions to use this!");
        let member = message.mentions.members.first();
        if(!member)
          return message.reply("Please mention a valid member of this server");
        if(!member.bannable) 
          return message.reply("I cannot ban this user! Do they have a higher role? Do I have ban permissions?");
  
        let reason = args.slice(1).join(' ');
        if(!reason)
          return message.reply("Please indicate a reason for the kick!");
        
        await member.kick(reason)
          .catch(error => message.reply(`Sorry ${message.author} I couldn't ban because of : ${error}`));
        message.reply(`${member.user.tag} has been kicked by ${message.author.tag} because: ${reason}`);
      }
      kick();
}