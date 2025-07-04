// Задача 3.
// Создайте interface OrderResponse для ответа сервера при заказе, который будет содержать следующие поля в случае успешного выполнения:
// {
//   status: "success",
//   data: Order,
// }
// И в случае ошибки:
// {
//   status: "error",
//   data: null,
// }

interface ISuccesFetch {
  status: string
  data: {}
}
interface INotSuccesFetch {
  status: string
  data: null
}

const fakeFetch = function (): ISuccesFetch | INotSuccesFetch {
  const isFetchSucces: boolean = Math.floor(Math.random() * (100 - 1 + 1)) + 1 > 50
  // Успешный ответ
  const successResponse: ISuccesFetch = {
    status: "success",
    data: {
      orderId: 1,
      products: [
        {
          productId: 57,
          productName: "Блокнот A5",
          quantity: 3,
          price: 1200,
        },
        {
          productId: 12,
          productName: "Городской рюкзак 20L",
          quantity: 1,
          price: 4500,
        },
      ],
    },
  }

  // Ошибочный ответ
  const errorResponse: INotSuccesFetch = {
    status: "error",
    data: null,
  }

  if (isFetchSucces) {
    return successResponse
  } else {
    return errorResponse
  }
}

console.log(fakeFetch());