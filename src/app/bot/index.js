const {Telegraf} = require("telegraf");
const LocalSession = require('telegraf-session-local')
const {mainButtons} = require("./utils/ButtonManager")
const KeyboardMiddleware =require("./middleware/KeyboardMiddleware")
const ActionMiddleware =require("./middleware/ActionMiddleware")
const SessionMiddleware =require("./middleware/SessionMiddleware")
const {START_MESSAGE} = require("./data/category.json");

let bot;

async function startBot() {
    bot = new Telegraf(process.env.BOT_TOKEN)
    await bot.launch();
    bot.use(new LocalSession({database : "session.json"}))
    bot.use(KeyboardMiddleware)
    bot.use(SessionMiddleware)
    bot.use(ActionMiddleware)
    bot.start(ctx => {
        ctx.reply(START_MESSAGE, mainButtons)
    })

}

module.exports.startBot = startBot;
