exports.run = (bot, message, args, func) => {
    async function purge() {
        if (!message.member.hasPermission("MANAGE_MESSAGES")) {
          message.reply("You don't have  the valid permission: " + "**MANAGE_MESSAGES**");
          return;
        } else
        message.delete();

        if (isNaN(args[0])) {
          message.channel.send("Please use a number for the arguments!");
          return;
        }

        const fetched = await message.channel.messages.fetch({limit: args[0]});

        message.reply("Purged " + fetched.size + " messages!")
        setInterval(function(){ console.log("test") }, 3000);

        message.channel.bulkDelete(fetched)
            .catch(error => message.channel.send(`Error: ${error}`));

    }
    purge();
}