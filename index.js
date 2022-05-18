var mineflayer = require('mineflayer')

var bot = mineflayer.createBot({
  host: "bestserver.net", //your server ip
  username: "iam7/24bot", //bot name
  version: "1.18" //server version
})


bot.on('login', async () => {
    console.log(' bot online ')
})

