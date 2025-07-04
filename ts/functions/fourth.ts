// Задача 4.
// Реализуйте функцию classifyNumber, которая принимает число и возвращает:
// "positive" — если больше 0
// "negative" — если меньше 0
// "zero" — если равно 0

const classifyNumber = function (number: number): string {
  if (number === 0) {
    return "zero"
  }
  return number>0 ? "poitive" : "negative"
}

console.log(classifyNumber(1));
