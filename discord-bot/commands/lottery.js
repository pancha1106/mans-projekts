const { loadDB, saveDB } = require("../utils/db");

module.exports = {
  name: "lottery",

  execute(message) {
    const db = loadDB();
    const id = message.author.id;

    if (!db[id]) db[id] = { coins: 0, diamonds: 0, tickets: 0 };

    if (db[id].tickets < 1) {
      return message.reply("❌ Tev nav biļešu!");
    }

    db[id].tickets--;

    const roll = Math.random();

    let reward;

    if (roll < 0.7) reward = { text: "😢 nekas" };
    else if (roll < 0.9) reward = { text: "💰 +500 coins", coins: 500 };
    else if (roll < 0.98) reward = { text: "💎 +3 dimanti", diamonds: 3 };
    else reward = { text: "🔥 JACKPOT +5000 coins +10 dimanti", coins: 5000, diamonds: 10 };

    db[id].coins += reward.coins || 0;
    db[id].diamonds += reward.diamonds || 0;

    saveDB(db);

    message.reply(`🎟️ Loterija: **${reward.text}**`);
  }
};
