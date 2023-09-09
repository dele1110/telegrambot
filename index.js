const TelegramBot = require('node-telegram-bot-api');


const token ='5855312724:AAGAzb57FEe2U2hGL1KO0QpEbD_FL5dPnC0'

const bot = new TelegramBot(token, {polling: true});

bot.on('message', (msg) => {
    const text =msg.text;
    const chatId = msg.chat.id;
     
    if (text =="/start"){
    return  bot.sendMessage(
      chatId , 
      'Assalomu Allaykum xurmatli ${msg.from?.first_name } , sizni bu yerdan korib turganimizdan juda xursandmiz'
      );
    }
    if (text =="/info"){
      return bot.sendMessage(
        chatId ,
        'Sizning telegram username bu  ${msg.from?.username} , sizning  ismingiz esa ${msg.from?.first_name} ${msg.from?.last_name}'
      );
    }
    if (text==="/newgame"){
      return bot.sendMessage(
        chatId , 
        'Men sizga qandey yordam beraman'
      );
    }
  });