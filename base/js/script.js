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
const num = 50;

if (num < 50) {
    console.log("Error");
} else if (num > 50) {
    console.log("Много");
} else {
    console.log("OK!");
}

// тернарный оператор
const num = 50;
(num === 50) ? console.log("OK!") : console.log("Error");

// SWITCH
const num = 51;
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
let num = 50;
while ( num < 55) {
    console.log(num);
    num++;
}

let num = 50;
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

