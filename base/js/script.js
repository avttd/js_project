// const obj = {
//     name: "John",
//     age: 25,
//     isMarried: false
// };

// console.log(obj.name);

// const myObj = {
//     0: "test",
//     1: 11,
//     2: 17
// };
// console.log(myObj[1]);

//alert("Hello");
// const result = confirm("Are you here?");

// const answer = +prompt("Вам есть 18?", "18");
// console.log(answer+5);

const answers = [];
answers[0] = prompt("Вопрос 1?", ""); console.log(answers[0]);
answers[1] = prompt("Вопрос 2?", ""); console.log(answers[1]);
answers[2] = prompt("Вопрос 3?", ""); console.log(answers[2]);

// IF
let num = 50;

if (num < 50) {
    console.log("Error");
} else if (num > 50) {
    console.log("Много");
} else {
    console.log("OK!");
}

// тернарный оператор
num = 50;
(num === 50) ? console.log("OK!") : console.log("Error");

// SWITCH
num = 51;
switch (num) {
    case 49: 
        console.log("Error");
        break; //прерывание дальнейших проверок
    case 100:
        console.log("Error");
        break; //прерывание дальнейших проверок
    case 50: 
        console.log("OK");
        break; //прерывание дальнейших проверок
    default:
        console.log("Ничего не подошло");
        break; //прерывание дальнейших проверок
}

// ЦИКЛЫ
num = 50;
while ( num < 55) {
    console.log(num);
    num++;
}

num = 50;
do {
    console.log(num);
    num++;
}
while (num < 55);


for (let i = 1; i < 8; i++) {
    if (i === 6) {
        continue; //пропуск 6-го шага
    }
    console.log(i);
}

// Функции
// FUNCTION DECLARATION
function showFirstMessage() {     //имя функции - глагол с припиской, что функция делает
    console.log("Hello World!");
}
showFirstMessage();


function showFirstMessage(text) {     //имя функции - глагол с припиской, что функция делает
    console.log(text);
}
showFirstMessage("Hello World!");

// замыкание функции - это сама функция вместе со всеми внешними переменными, которые их доступны

// function calc(a, b) {
//     return(a + b);      //возврат значения функции
// }

// console.log(calc(4, 3));


function ret() {
    let num = 100;
    return(num);
}

const anotherNum = ret();
console.log(anotherNum);

// FUNCTION EXPRESSION
const logger = function() {
    console.log("Hello!");
};

logger();

//Стрелочная функция
const calc = (a, b) => a + b;  // const calc = (a, b) => { return a + b };

// МЕТОДЫ И СВОЙСТВА
// Методы - это вспомогательные функции
// Свойства - это вспомогательные значения

const str = "teSt";
console.log(str.length);        // это свойство

const arr = [1, 2, 3];
console.log(arr.length);        // это свойство

console.log(str.toUpperCase());     //это метод
console.log(str.toLowerCase());

let fruit = "some fruits";
// console.log(fruit.indexOf("fruit"));    // подстрока
console.log(fruit.indexOf("s"));

const logg = "Hello world";
console.log(logg.slice(6, 11));         // взять кусок строки -> world
console.log(logg.slice(-5, -1));        //с 5-го до 1-го символа справа 

console.log(logg.substring(6, 11));     // аналог slice, но без -
console.log(logg.substr(6, 2));         //  сколько символов берем

const newNum = 12.4;
console.log(Math.round(newNum));        //округление

const test = "12.2px";
console.log(parseInt(test));        //фишка 1
console.log(parseFloat(test));      //фишка 2

