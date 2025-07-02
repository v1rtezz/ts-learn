"use strict";
// Задача 4.
// Реализуйте функцию classifyNumber, которая принимает число и возвращает:
// "positive" — если больше 0
// "negative" — если меньше 0
// "zero" — если равно 0
const classifyNumber = function (number) {
    if (number === 0) {
        return "zero";
    }
    return number > 0 ? "positive" : "negative";
};
console.log(classifyNumber(-2));
