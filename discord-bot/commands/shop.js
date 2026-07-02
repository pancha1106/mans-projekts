module.exports = {
  name: "shop",

  execute(message) {
    message.reply(`
🛒 **SHOP**

💰 COINS:
🎟️ Ticket - 200 coins
🎡 Extra Spin - 1000 coins
👑 VIP (24h) - 3000 coins
🎁 Mystery Box - 1500 coins

💎 DIMANTI:
👑 VIP (7 dienas) - 20 💎
💰 1000 coins - 10 💎
🎡 Lucky Boost - 5 💎
🎟️ 2 Tickets - 5 💎

👉 lieto: !buy <item>
`);
  }
};
