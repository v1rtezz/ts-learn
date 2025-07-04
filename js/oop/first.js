"use strict";
{
    /*
      Реализуйте систему заказа в кафе. Пользователь может заказывать напитки и еду, а система считает сумму и печатает чек.
      
      Класс Product (абстрактный)
          - title: string
          - price: number
          - Метод getInfo(): string — абстрактный
          - Метод getPrice(): number
          
      Классы-наследники от Product:
          Drink
          - Доп. свойство: volume: number (мл)
          - getInfo() → "Drink: Latte (250ml) - $3.5"
      
          Food
          - Доп. свойство: weight: number (грамм)
          - getInfo() → "Food: Burger (300g) - $5.9"
      
      Класс Order:
          - Приватное свойство: items: Product[]
          - Метод add(product: Product): void
          - Метод getTotal(): number
          - Метод printReceipt(): void — выводит информацию по каждому товару и итоговую сумму
      
      Пример использования:
          const order = new Order();
          
          order.add(new Drink("Latte", 3.5, 250));
          order.add(new Food("Burger", 5.9, 300));
          
          order.printReceipt();
          /*
          Drink: Latte (250ml) - $3.5
          Food: Burger (300g) - $5.9
          Total: $9.4
  */
    class Product {
        title;
        price;
        constructor(title, price) {
            this.title = title;
            this.price = price;
        }
        getPrice() {
            return this.price;
        }
    }
    class Drink extends Product {
        volume;
        constructor(title, price, volume) {
            super(title, price);
            this.volume = volume;
        }
        getInfo() {
            return `Drink: ${this.title} (${this.volume}ml) - ${this.price}`;
        }
    }
    class Food extends Product {
        weight;
        constructor(title, price, weight) {
            super(title, price);
            this.weight = weight;
        }
        getInfo() {
            return `Food: ${this.title} (${this.weight}g) - ${this.price}`;
        }
    }
    class Order {
        _items;
        constructor() {
            this._items = [];
        }
        add(product) {
            this._items.push(product);
        }
        getTotal() {
            return this._items.reduce((sum, element) => {
                return (sum += element.price);
            }, 0);
        }
        printReceipt() {
            this._items.forEach((element) => {
                console.log(element.getInfo());
            });
            console.log("Total:", this.getTotal());
        }
    }
    const order = new Order();
    order.add(new Drink("Latte", 3.5, 250));
    order.add(new Food("Burger", 5.9, 300));
    order.printReceipt();
}
