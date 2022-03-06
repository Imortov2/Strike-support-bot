const Discord = require ("discord.js")
require("dotenv").config()

const generateImage = require("./generateImage")

const client = new Discord.Client({
    intents: [
        "GUILDS",
        "GUILD_MESSAGES",
        "GUILD_MEMBERS"
    ]
})

client.on("ready,", () => {
    console.log(`Logged in as ${client.user.tag}`)
})

client.on("messageCreate", (message) => {
    if (message.content == "salut"){
        message.reply("Salut!")
    }
})

const WelcomeChannelId = "949845477568958514"

client.on("guildMemberAdd", async (member) => {
    const Image = await generateImage(member)
    member.guild.channels.cache.get(WelcomeChannelId).send({
        content:`<@${member.id}> Bienvenue dans strike RP!`,
        files: [img]
    })
})

client.login(process.env.TOKEN)