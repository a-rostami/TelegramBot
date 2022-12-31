module.exports.START_MESSAGE = "سلام ، خوش اومدی!"
module.exports.CATEGORY_LIST_MESSAGE = "لطفا یکی از دسته های زیر را انتخاب نمایید .👇👇"
module.exports.PRODUCT_LIST_MESSAGE = "لطفا یکی از محصولات زیر را جهت نمایش اطلاعات بیشتر و افزودن به سبد خرید انتخاب نمایید.👇👇"
module.exports.PRODUCT_NOT_FOUND_MESSAGE = "محصول مورد نظر پیدا نشد."
module.exports.SEARCH_MESSAGE = "اون محصولی ک دنبالش میگردی رو بنویس."
module.exports.getProductDetailMessage = (product) => `🌸${product.name}🌸

${product.meta ? product.meta.map(item => (`${item.key}:${item.value}`)).join("\n") : ""}

وضعیت : ${product.exist ? "موجود":"ناموجود"}
قیمت مقطوع : ${product.price} تومان

`
