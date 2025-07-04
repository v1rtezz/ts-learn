"use strict";
{
    // Задача 1.
    // Напишите функцию getFirstName, которая принимает массив объектов, у каждого из которых есть поле `name`.
    // Функция должна вернуть значение поля `name` первого объекта в массиве.
    //
    // Используй дженерики и ограничьте тип так, чтобы было обязательно наличие свойства `name` типа string.
    //
    // Пример использования:
    // const users = [{ name: "Bob" }, { name: "Alice" }];
    // getFirstName(users); // "Bob"
    const getFirstName = (array) => {
        console.log(array[0].name);
    };
    const users = [{ name: "Bob" }, { name: "Alice" }];
    getFirstName(users);
}
