onst Discord = require('discord.js');
const client = new Discord.Client();
const token = require('./settings.json').token;
const ddiff = require('return-deep-diff');
client.on('ready',() => {
  console.log('Let\'s get cracking, Master Bruce!');
});

// client.on('',''=>{});

// generic replies
client.on('message', message => {
  if (message.content === 'Alfred!') {
    message.channel.send(`Yes, ${message.author}?`);
  }
});

client.on('message', message => {
  if (message.content === 'Good morning, Alfred') {
    message.channel.send(`Good morning, ${message.author}`);
  }
})

// Guild Events
client.on('guildDelete', guild => {
    console.log(`I have left ${guild.name} at ${new Date()}`);
});

client.on('guildCreate', guild => {
  client.channels.get(`356326539287330818`).send(`I have joined The Wayne Manor`);
});

client.on('guildMemberAdd', member =>{
  let guild = member.guild;
  client.channels.get(`356326539287330818`).send(`Please welcome ${member.user} to the Wayne Manor`);
});

client.on('guildMemberRemove', member =>{
  let guild = member.guild;
  client.channels.get(`356326539287330818`).send(`Please say goodbye to ${member.user}`);
});

client.on('guildMemberUpdate',(oMember, nMember)=>{
  console.log(ddiff(oMember, nMember));
});

client.on('guildUpdate',(oGuild, nGuild)=>{
  console.log(ddiff(oGuild, nGuild));
});

client.on('guildBanAdd',(guild, user)=>{
  client.channels.get(`356326539287330818`).send(`${user.username} was just banned.`);
});

client.on('guildBanRemove',(guild, user)=>{
  client.channels.get(`356326539287330818`).send(`${user.username} was just unbanned.`);
});


// Client Events
client.on('channelCreate', channel => {
  console.log(`A ${channel.type} channel by the name of ${channel.name} was created ${channel.createdAt}`);
});

client.on('channelDelete', channel =>{
  console.log(`A ${channel.type} channel by the name of ${channel.name} was successfully deleted.`);
  client.channels.get(`358857029105745920`).send(`A channel was deleted.`);
});

client.on('messagesDeleteBulk',message => {
  client.channels.get(`358857029105745920`).send(`${messages.size} was deleted.`);
});


var prefix = ">"
client.on('message', message => {
  let args = message.content.split(' ').slice(1);
  var argresult = args.join(' ');
  if (!message.content.startsWith(prefix)) return;
  if (message.author.bot) return;

  if (message.content.startsWith(prefix + 'purge')) {
    let messagecount = parseInt(args[0]);
    message.channel.fetchMessages({limit:messagecount}).then(messages => messages.channel.bulkDelete(messages));
  } else

  if (message.content.startsWith(prefix + 'send')) {
  client.channels.get('356326539287330818').send('Hello from The Wayne Manor')
  } else

  if (message.content.startsWith(prefix + 'setgame')) {
  if (!argresult) argresult = null;
  client.user.setGame(argresult);
  } else

  if (message.content.startsWith(prefix + 'setstatus')) {
  client.user.setStatus(argresult);
  } else

  if (message.content.startsWith(prefix + 'Good morning, Alfred')) {
      message.channel.send(`Good Morning, ${message.author}`);
    }
  });

client.login(token);
