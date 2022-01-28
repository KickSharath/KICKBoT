// require('dotenv').config();
// const { Client, WebhookClient } = require('discord.js');

// const client = new Client({
//   partials: ['MESSAGE', 'REACTION']
// });

// const webhookClient = new WebhookClient(
//   process.env.WEBHOOK_ID,
//   process.env.WEBHOOK_TOKEN,
// );

// const PREFIX = "!";

// client.on('ready', () => {
//   console.log(`${client.user.tag} has logged in.`);
// });

// client.on('message', async (message) => {
//   if (message.author.bot) return;
//   if (message.content.startsWith(PREFIX)) {
//     const [CMD_NAME, ...args] = message.content
//       .trim()
//       .substring(PREFIX.length)
//       .split(/\s+/);

//     // Happy Birthday
//     if (CMD_NAME === 'wish'){
//       if (args.length === 0) return message.channel.send("Happy Birthday TO You  :partying_face:  :birthday: :100: :smiling_face_with_tear: ");
//       else return message.channel.send("Happy Birthday To "+ args + " :partying_face:  :birthday: :100: ");
//     }

    
    
//     //WEBHOOK MESSAGE
//     else if (CMD_NAME === 'announce') {
//       console.log(args);
//       const msg = args.join(' ');
//       console.log(msg);
//       console.log(webhookClient);
//       // webhookClient.send(msg);
//     }
//   }
// });

// // client.on('messageReactionAdd', (reaction, user) => {
// //   const { name } = reaction.emoji;
// //   const member = reaction.message.guild.members.cache.get(user.id);
// //   if (reaction.message.id === '738666523408990258') {
// //     switch (name) {
// //       case '🍎':
// //         member.roles.add('738664659103776818');
// //         break;
// //       case '🍌':
// //         member.roles.add('738664632838782998');
// //         break;
// //       case '🍇':
// //         member.roles.add('738664618511171634');
// //         break;
// //       case '🍑':
// //         member.roles.add('738664590178779167');
// //         break;
// //     }
// //   }
// // });

// // client.on('messageReactionRemove', (reaction, user) => {
// //   const { name } = reaction.emoji;
// //   const member = reaction.message.guild.members.cache.get(user.id);
// //   if (reaction.message.id === '738666523408990258') {
// //     switch (name) {
// //       case '🍎':
// //         member.roles.remove('738664659103776818');
// //         break;
// //       case '🍌':
// //         member.roles.remove('738664632838782998');
// //         break;
// //       case '🍇':
// //         member.roles.remove('738664618511171634');
// //         break;
// //       case '🍑':
// //         member.roles.remove('738664590178779167');
// //         break;
// //     }
// //   }
// // });

// client.login(process.env.DISCORD_TOKEN);


var colors = ["red","blue","green","yellow"];
var randColor = colors[Math.floor(Math.random() * colors.length)];

console.log(randColor)