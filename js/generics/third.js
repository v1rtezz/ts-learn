"use strict";
// Задача 3.
// Напишите функцию filterByField, которая принимает:
// - массив объектов
// - имя поля
// - значение поля
// Возвращает отфильтрованные элементы, у которых значение совпадает с переданным значением поля.
//
// Функция должна быть обобщённой, то есть принимать массив объектов любого типа и возвращать массив отфильтрованных объектов того же типа.
// Можно использовать .filter
//
// Пример использования:
// const users = [
//   { id: 1, name: 'Alice', role: 'admin' },
//   { id: 2, name: 'Bob', role: 'user' },
//   { id: 3, name: 'Charlie', role: 'user' },
// ];
// const filteredUsers = filterByField(users, 'role', 'user');
// console.log(filteredUsers); // [{ id: 2, name: 'Bob', role: 'user' }, { id: 3, name: 'Charlie', role: 'user' }]
const filterByField = (array, fieldName, fieldValue) => {
    return array.filter((element) => {
        return element[fieldName] === fieldValue;
    });
};
const users = [
    { id: 1, name: "Alice", role: "admin" },
    { id: 2, name: "Bob", role: "user" },
    { id: 3, name: "Charlie", role: "user" },
];
const filteredUsers = filterByField(users, "role", "user");
console.log(filteredUsers); // [{ id: 2, name: 'Bob', role: 'user' }, { id: 3, name: 'Charlie', role: 'user' }]
