"use strict";
const testProduct = {
    name: "КРутой продукт еее",
    price: 150,
    available: false,
};
const logProductInfo = function (product) {
    console.log(`Имя товара: ${product.name}`);
    console.log(`Цена: ${product.price}`);
    console.log(`Наличие: ${product.available ? "В наличии" : "Нет в наличии"}`);
};
logProductInfo(testProduct);
