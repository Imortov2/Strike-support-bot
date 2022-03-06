const Discord = require ("discord.js")
require("dotenv").config()

const TOKEN = "OTQ5ODU3MDc0NjY4NTMxNzYz.YiQdVg.3vuzPze0nJUD9mej7KtsHzaPu04"

const client = new Discord.Client({
    intents: [
        "GUILDS",
        "GUILD_MESSAGES"
    ]
})

client.on("ready,", () => {
    console.log('Logged in as ${client.user.tag}')
})

client.on("messageCreate", (message) => {
    if (message.content == "salut"){
        message.reply("Salut!")
    }
})

client.login(process.env.TOKEN)