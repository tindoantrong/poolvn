const Lib       = require("./Lib.js")
const Config       = require("./Config.js")

const Telegraf = require('telegraf');
const app = new Telegraf(Config.tele_token);
const axios = require('axios'); // add axios

app.hears('hi', ctx => {
  return ctx.reply('Hey!');
});

app.command('pools', ctx => {
  const userId = ctx.message.from.id;
  let content_reply = "Danh sách các Pool ADA của Việt Nam (thứ tự random):\n";
  
  let pool_list = [];
  
  pool_list.push("\nPool AVN (@ThuanCapitalStaking)");
  pool_list.push("\nPool ADAVN (@adavn)");
  pool_list.push("\nPool FIMI - FIDA (@StakingADA)");
  pool_list.push("\nPool TIGER (@TigerPool)");
  pool_list.push("\nPool VADA (@vadasupport)");
  pool_list.push("\nPool ADPL (@ADPL_AdaPlus)");
    
  Lib.shuffle(pool_list);
  for(let i = 0; i < pool_list.length; i++)
  {
	  content_reply = content_reply + pool_list[i];
  }
  content_reply = content_reply + "\n\nLiên hệ để add Pool vào Bot (@LeoxDoan)";
  return ctx.reply(content_reply);
});


app.command('start', ctx => {
  const content_reply = "Chào mừng bạn đến với BOT Cardano (ADA)!\nGõ /pools để list các pool ở Việt Nam";
  return ctx.reply(content_reply);
  //ctx.replyWithMarkdown(Enter a subreddit name to get *top* posts.);
});


app.startPolling();