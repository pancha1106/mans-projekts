const { loadDB, saveDB } = require("../utils/db");
const { isNewDay } = require("../utils/cooldown");

const rewards = [
  { text: "💰 +100 coins", coins: 100 },
  { text: "💰 +300 coins", coins: 300 },
  { text: "💰 +500 coins", coins: 500 },
  { text: "💎 +1 dimants", diamonds: 1 },
  { text: "💎 +2 dimanti", diamonds: 2 },
  { text: "😢 tukšs spins" }
];

module.exports = {
  name: "spin",

  execute(message) {
    const db = loadDB();
    const id = message.author.id;

    if (!db[id]) db[id] = { coins: 0, diamonds: 0, tickets: 0 };

    if (!isNewDay(db[id].lastSpin)) {
      return message.reply("⛔ Tu jau šodien griezi ratu!");
    }

    const reward = rewards[Math.floor(Math.random() * rewards.length)];

    db[id].coins += reward.coins || 0;
    db[id].diamonds += reward.diamonds || 0;
    db[id].lastSpin = new Date().toISOString();

    saveDB(db);

    message.reply(`🎡 Tu izgriezi: **${reward.text}**`);
  }
};
