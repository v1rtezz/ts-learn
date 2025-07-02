// Задача 2.
// Напишите функцию logProductInfo, которая принимает объект `product` и выводит информацию в виде:
//  Имя товара: Продукт 1
//  Цена: 150
//  Наличие: В наличии || Нет в наличии
type SomeProductType = {
  name: string
  price: number
  available: boolean
}

const testProduct: SomeProductType = {
  name: "КРутой продукт еее",
  price: 150,
  available: false,
}

const logProductInfo = function (product: SomeProductType): void {
  console.log(`Имя товара: ${product.name}`)
  console.log(`Цена: ${product.price}`)
  console.log(`Наличие: ${product.available ? "В наличии" : "Нет в наличии"}`)
}

logProductInfo(testProduct)
