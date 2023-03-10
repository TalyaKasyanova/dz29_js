// Створи об'єкт, що описує автомобіль (виробник, модель, рік випуску, середня швидкість,
// обсяг паливного баку, середня витрата палива на 100 км., водії), і наступні методи для роботи з цим об'єктом:
//    1 - Метод, який виводить на екран інформацію про автомобіль.
//    2 - Додавання ім’я водія у список
//    3 - Перевірка водія на наявність його ім’я у списку
//    4 - Підрахунок необхідного часу та кількості палива для подолання переданої відстані з середньою швидкістю.
//        Враховуй, що через кожні 4 години дороги водієві необхідно робити перерву на 1 годину.

let car = { // створила об'єкт
  maker: "Toyota",
  model: "Camry",
  year: 2020,
  mediumSpeed: 100,
  tankVolume: 50,
  fuelConsumption: 7,
  drivers: [],

  info: function () { // функція, яка виводить інформацію про автомобіль
    console.log(`Виробник: ${this.maker}`);
    console.log(`Модель: ${this.model}`);
    console.log(`Рік випуску: ${this.year}`);
    console.log(`Середня швидкість - ${this.mediumSpeed} км/год`);
    console.log(`Обсяг паливного баку - ${this.tankVolume} літрів`);
    console.log(`Середні витрати палива ${this.fuelConsumption} літрів на 100 км.`);
    console.log(`Водії: ${this.drivers.join(", ")}`);
  },

  addDriver: function (name) { // метод, що додає ім'я водія до списку
    if (!this.drivers.includes(name)) {
      this.drivers.push(name);
      console.log(`Водія ${name} додано до списку.`);
    } else {
      console.log(`Водій ${name} вже є у списку.`);
    }
  },

  hasDriver: function (name) { // метод для перевірки наявності водія у списку
    if (this.drivers.includes(name)) {
      console.log(`Водій з іменем ${name} є у списку.`);
    } else {
      console.log(`Водія з іменем ${name} не має у списку.`);
    }
  },

  calc: function (distance) { // метод, що розраховує час та кількість палива для подолання відстані зі середньою швидкістю
    let travelTime = distance / this.mediumSpeed;
    let restTime = Math.floor(travelTime / 4);
    let fuelNeeded = (distance / 100) * this.fuelConsumption;
    console.log(`Час дороги складає ${travelTime + restTime} годин`);
    console.log(`Необхідно палива ${fuelNeeded} літрів`);
  }
};

car.addDriver("Петро");
car.addDriver("Василь");

car.hasDriver("Петро");
car.hasDriver("Іван");

car.info();

car.calc(300);
car.calc(800);