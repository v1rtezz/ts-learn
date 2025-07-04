// Задача 3.
// Реализуйте функцию combine, которая принимает два значения — либо числа, либо строки.
// Если оба аргумента числа — вернуть их сумму.
// Если оба строки — вернуть их конкатенацию.
// Если типы разные — выбросить ошибку.

const combine = function (
  a: number | string,
  b: number | string
): number | string {
  if (typeof a === "number" && typeof b === "number") {
    return a + b
  }
  if (typeof a === "string" && typeof b === "string") {
    return a + b
  }
  throw new Error("Еблан, ты че творишь, типы разные!!!")
}

console.log(combine(1, 1))
