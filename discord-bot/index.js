const { Client, GatewayIntentBits } = require("discord.js");
const config = require("./config.json");
const fs = require("fs");

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent
  ]
});

const commands = new Map();

const files = fs.readdirSync("./commands");

for (const file of files) {
  const cmd = require(`./commands/${file}`);
  commands.set(cmd.name, cmd);
}

client.on("messageCreate", (message) => {
  if (message.author.bot) return;
  if (!message.content.startsWith(config.prefix)) return;

  const args = message.content.slice(config.prefix.length).split(/ +/);
  const name = args.shift().toLowerCase();

  const command = commands.get(name);
  if (!command) return;

  command.execute(message, args);
});

client.login(config.token);
