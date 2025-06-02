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
    "Your code will run on the first try!",
    "A surprise is coming your way.",
    "Don't forget to take breaks!",
    "Your coffee might spill today—be careful!",
    "An old bug may return to haunt you.",
    "You’ll receive good news before the day ends.",
    "Someone is thinking of you right now.",
    "You might forget something important—double check!",
    "Your next idea could change everything.",
    "Your phone battery is probably lower than you think.",
    "You're doing better than you realize.",
    "An awkward moment may become a funny memory.",
    "A minor inconvenience will test your patience.",
    "Today is the day you make progress.",
    "You might laugh at the wrong moment—oops.",
    "A small victory is coming your way.",
    "You may get distracted, but you'll recover fast.",
    "An update might break something—save your work!",
    "You’ll have a random moment of inspiration.",
    "Something you've been avoiding will appear.",
    "You're going to crush your next task.",
    "There may be delays—don’t let them ruin your vibe.",
    "You’ll overhear something funny today.",
    "One tab too many might crash your browser.",
    "Today’s mood: cautiously optimistic.",
    "You may accidentally say what you're thinking.",
    "Someone will compliment your work.",
    "You might get blamed for something you didn’t do.",
    "You’ll discover something surprisingly useful.",
    "A challenge will reveal your strength.",
    "333",
    "You will lose",
    "You may step on something wet with socks on."
];

client.once('ready', () => {
  console.log(`Logged in as ${client.user.tag}`);
});

client.on('messageCreate', message => {
  if (message.author.bot) return;
  if (message.content === '---333') {
    const random = fortunes[Math.floor(Math.random() * fortunes.length)];
    message.channel.send(random);
  }
});

client.login(process.env.DISCORD_TOKEN);
