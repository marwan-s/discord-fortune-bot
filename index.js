const { Client, GatewayIntentBits } = require('discord.js');
const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent
  ]
});

const fortunes = [
  "You will have a great day!",
  "Something unexpected will happen.",
  "Your code will run perfectly!",
  "Don't forget to drink water.",
  "A surprise is coming your way!"
];

client.once('ready', () => {
  console.log(`Logged in as ${client.user.tag}`);
});

client.on('messageCreate', message => {
  if (message.author.bot) return;
  if (message.content === '--fortune') {
    const random = fortunes[Math.floor(Math.random() * fortunes.length)];
    message.channel.send(random);
  }
});

client.login(process.env.DISCORD_TOKEN);
