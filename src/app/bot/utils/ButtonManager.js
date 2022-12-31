const {convertArrayToNColumn} = require("./DataUtil");

const MAIN_BUTTONS_TEXT = {
    CATALOG: "کاتالوگ",
    COMMENT: "پیشنهادات انتقادات",
    ONLINE_BUY: "خرید آنلاین",
    MY_BUYS: "خرید های من",
    CART: "سبد خرید",
    FAV: "علاقمندی های من",
}


const mainButtons = {
    reply_markup: {
        resize_keyboard: true,
        keyboard: [
            [
                {text: MAIN_BUTTONS_TEXT.CATALOG},
                {text: MAIN_BUTTONS_TEXT.COMMENT},
                {text: MAIN_BUTTONS_TEXT.ONLINE_BUY},
            ], [
                {text: MAIN_BUTTONS_TEXT.MY_BUYS},
                {text: MAIN_BUTTONS_TEXT.CART},
                {text: MAIN_BUTTONS_TEXT.FAV},
            ],
        ]
    },
}

const categoryList = (data) => {
    return {
        reply_markup: {
            resize_keyboard: true,
            inline_keyboard: [...convertArrayToNColumn(data, 2).map(item => item.map(item => ({
                text: item.title,
                callback_data: `CAT_${item.id}`
            }))), [{text: "جستجو", callback_data: "SEARCH"}]],
        },
    }
}

const productListButtons = (data) => {
    return {
        reply_markup: {
            resize_keyboard: true,
            inline_keyboard: [...convertArrayToNColumn(data, 2).map(item => item.map(item => ({
                text: item.name,
                callback_data: `PRODUCT_${item.id}`
            }))), [{text: "بازگشت", callback_data: "BACK_CAT"}]],
        },
    }
}

const productDetailButtons = (product) => {
    return {
        reply_markup: {
            resize_keyboard: true,
            inline_keyboard: [[{
                text: "افزودن به سبد خرید",
                callback_data: `CART_${product.id}`
            }], [{text: "افزودن به لیست علاقمندی ها", callback_data: `FAV_${product.id}`}], [{
                text: "بازگشت↪️",
                callback_data: `BACK_PRODUCT_${product.cat}`
            }]],
        },
    }
}

module.exports = {
    MAIN_BUTTONS_TEXT,
    mainButtons,
    categoryList,
    productListButtons,
    productDetailButtons
}
