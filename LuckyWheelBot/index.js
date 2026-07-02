const { Client, GatewayIntentBits } = require("discord.js");
require("dotenv").config();

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent
  ],
});

const prizes = [
  "💰 10 coins",
  "💰 50 coins",
  "💰 100 coins",
  "🎁 Dāvana",
  "❌ Nekas",
  "🔥 JACKPOT",
  "🍀 Veiksme"
];

client.on("ready", () => {
  console.log(`Bot online kā ${client.user.tag}`);
});

client.on("messageCreate", (message) => {
  if (message.author.bot) return;

  if (message.content === "!spin") {
    const result = prizes[Math.floor(Math.random() * prizes.length)];
    message.reply(`🎡 Tu pagriezi laimes ratu: **${result}**`);
  }
});

client.login(process.env.TOKEN);
