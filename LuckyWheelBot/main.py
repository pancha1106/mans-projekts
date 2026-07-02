import discord
from discord.ext import commands
import random
import asyncio

TOKEN = "TAVS_BOTA_TOKEN"

intents = discord.Intents.default()
bot = commands.Bot(command_prefix="!", intents=intents)

rewards = [
    (" 500 monētas", 30),
    (" 1000 monētas", 20),
    (" 100 XP", 20),
    (" Parastais bokss", 15),
    (" Retais bokss", 8),
    (" Atslēga", 5),
    (" VIP 24h", 2),
]

@bot.event
async def on_ready():
    await bot.tree.sync()
    print(f" Ielogojies kā {bot.user}")

@bot.tree.command(name="spin", description=" Griezt laimes ratu")
async def spin(interaction: discord.Interaction):

    embed = discord.Embed(
        title=" LAIMES RATS",
        description=" Griežam ratu...",
        color=discord.Color.gold()
    )

    await interaction.response.send_message(embed=embed)
    msg = await interaction.originalresponse()

    frames = [
        "   ",
        "   ",
        "   ",
        "   ",
    ]

    for  in range(3):
        for frame in frames:
            embed.description = f" Griežam ratu...\n\n{frame}"
            await msg.edit(embed=embed)
            await asyncio.sleep(0.25)

    prize = random.choices(
        [r[0] for r in rewards],
        weights=[r[1] for r in rewards],
        k=1
    )[0]

    embed.title = " TU LAIMĒJI!"
    embed.description = f"## {prize}"
    embed.color = discord.Color.green()
    embed.set_footer(text=" Lucky Wheel Bot")

    await msg.edit(embed=embed)

bot.run(TOKEN)

