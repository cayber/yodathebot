module.exports = {

    ping: function(channel) {
        channel.send('Pong!');
    },
    eval: function clean(text) {
        if (typeof(text) === 'string')
            return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
        else
            return text;
      }

}