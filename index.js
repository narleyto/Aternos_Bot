var mineflayer = require('mineflayer')

var bot = mineflayer.createBot({
  host: "narpixel.tk",
  username: "Narpixel",
  version: "1.16"
})


bot.on('login', async () => {
    console.log(' bot aktif ')
})

