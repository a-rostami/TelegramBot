const {MAIN_BUTTONS_TEXT} = require("../utils/ButtonManager")
const {CATEGORY_LIST_MESSAGE} = require("../utils/MessageHandler");
const categoryList = require("../data/category.json");
const {categoryList: categoryListButtons} = require("../utils/ButtonManager")

module.exports = (ctx, next) => {
    if (!ctx.message)
        return next();
    const text = ctx.message.text;
    if (text)
        if (Object.values(MAIN_BUTTONS_TEXT).includes(text) && EventListener[text])
            return EventListener[text](ctx);
    next();
}

const EventListener = {
    [MAIN_BUTTONS_TEXT.ONLINE_BUY]: (ctx) => {
        ctx.reply(CATEGORY_LIST_MESSAGE, categoryListButtons(categoryList))
    },
    [MAIN_BUTTONS_TEXT.FAV]: (ctx) => {

    }
}

module.exports.KeyboardEventListener=EventListener;
