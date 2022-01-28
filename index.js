require('dotenv').config();
const  Discord = require('discord.js');

const client = new Discord.Client({intents: ["GUILDS", "GUILD_MESSAGES"]});

const webhookClient = new Discord.WebhookClient({ url: process.env.WEBHOOK_URL });

const prefix = "!";

client.on('ready',() => {
  console.log(`${client.user.tag} has Logged in...`)
});

client.on("message", (message) => {
// console.log(`[${message.author.tag}]: ${message.content}`)
  if (message.author.bot) return;

  if (message.content.startsWith(prefix)) {
    const [CMD_NAME, ...args] = message.content
    .trim()
    .substring(prefix.length)
    .split(/\s+/);
    // console.log(CMD_NAME);
    // console.log(args);

    // Happy Birthday
    if (CMD_NAME === 'wish'){
      if (args.length === 0) return message.channel.send("Happy Birthday TO You  :partying_face:  :birthday: :100: :smiling_face_with_tear: ");
       else return message.channel.send("Happy Birthday To "+ args + " :partying_face:  :birthday: :100: ");
    }

    //KICK USER
    // else if (CMD_NAME === 'kick') {
    //   if (!message.member.hasPermission('KICK_MEMBERS'))
    //     return message.reply('You do not have permissions to use that command');
    //   if (args.length === 0)
    //     return message.reply('Please provide an ID');
    //   const member = message.guild.members.cache.get(args[0]);
    //   if (member) {
    //     member
    //       .kick()
    //       .then((member) => message.channel.send(`${member} was kicked.`))
    //       .catch((err) => message.channel.send('I cannot kick that user :('));
    //   } else {
    //     message.channel.send('That member was not found');
    //   }
    // }

    //BAN USER
    // else if (CMD_NAME === 'ban') {
    //   if (!message.member.hasPermission('BAN_MEMBERS'))
    //     return message.reply("You do not have permissions to use that command");
    //   if (args.length === 0) return message.reply("Please provide an ID");
    //   try {
    //     const user = await message.guild.members.ban(args[0]);
    //     message.channel.send('User was banned successfully');
    //   } catch (err) {
    //     console.log(err);
    //     message.channel.send('An error occured. Either I do not have permissions or the user was not found');
    //   }
    // }
    
    //WEBHOOK MESSAGE
    else if (CMD_NAME === 'announce') {
      // console.log(args);
      const msg = args.join(' ');
      // console.log(msg);
      webhookClient.send(msg);
    }

    //HELP 
    else if (CMD_NAME === 'help') {
      message.channel.send('``` HELP COMMAND \n\t\t |- !wish - To wish your self. \n\t\t |- !wish <mention> - To wish mention member. \n\t\t |- !random - Random words from initiated Admin List. \n\t\t |- !random <mention> - Random words from initialized Admin List to Mention member```');
    }

    //random
    else if (CMD_NAME === 'random'){
      const Dhim = ["MG","F","D","S","Good","Remo","Cute","Love","Hate","Gay"];
      const ranDhim = Dhim[Math.floor(Math.random() * Dhim.length)];
      message.channel.send( ranDhim + args);
    }

    else{
      message.reply("Use `  !help  ` Command ")
    }
  }
});


client.login(process.env.DISCORD_TOKEN); 