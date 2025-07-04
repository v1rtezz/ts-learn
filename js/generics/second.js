"use strict";
// Задача 2.
// Напишите функцию transformArray,
// которая принимает:
// - массив значений
// - функцию трансформации
// и возвращает новый массив с изменёнными значениями.
//
// Функция должна быть обобщённой, то есть принимать массив любого типа и возвращать массив того же типа.
// Нельзя использовать .map
//
// Пример использования:
// const arr = [1, 2, 3, 4, 5];
// const transformedArr = transformArray(arr, (item) => item * 2);
// console.log(transformedArr); // [2, 4, 6, 8, 10]
const transformArray = (array, fn) => {
    const newArray = [];
    array.forEach(element => {
        newArray.push(fn(element));
    });
    return newArray;
};
const arr = [1, 2, 3, 4, 5];
const transformedArr = transformArray(arr, (item) => item * 2);
console.log(transformedArr); // [2, 4, 6, 8, 10]
