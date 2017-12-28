const Discord = require('discord.js')
const weather = require('weather-js');

exports.run = (bot, message, args, func) => {
    weather.find({search: args.join(" "), degreeType: 'C'}, function(err, result) { 
        if (err) message.channel.send(err);

        if (result.length === 0) {
            message.channel.send('**Please enter a valid location.**'); 
            return; 
        }

        var current = result[0].current;
        var location = result[0].location

        const embed = new Discord.MessageEmbed()
            .setDescription(`**${current.skytext}**`)
            .setAuthor(`Weather for ${current.observationpoint}`)
            .setThumbnail(current.imageUrl)
            .setColor(0x367DC1)
            .addField('Timezone',`UTC${location.timezone}`, true)
            .addField('Degree Type',location.degreetype, true)
            .addField('Temperature',`${current.temperature} Celsius`, true)
            .addField('Feels Like', `${current.feelslike} Celsius`, true)
            .addField('Winds',current.winddisplay, true)
            .addField('Humidity', `${current.humidity}%`, true)

            message.channel.send(embed);
    });
}