// Задача 2.
// Создайте interface для объекта order, который будет содержать следующие поля:
// {
// 	orderId: 1,
// 	products: [
// 		{
// 			productId: 57,
// 			productName: "Блокнот A5",
// 			quantity: 3,
// 			price: 1200,
// 		},
// 		{
// 			productId: 12,
// 			productName: "Городской рюкзак 20L",
// 			quantity: 1,
// 			price: 4500,
// 		},
// 	],
// }

interface IProduct {
  productId: number
  productName: string
  quantity: number
  price: number
}

interface IOrder {
  orderId: number
  products: IProduct[]
}

const order: IOrder = {
  orderId: 57,
  products: [
    {
      productId: 12,
      productName: "Городской рюкзак 20L",
      quantity: 1,
      price: 4500,
    },
    {
      productId: 12,
      productName: "Городской рюкзак 20L",
      quantity: 1,
      price: 4500,
    },
  ],
}

console.log(order);
