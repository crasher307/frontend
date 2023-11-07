"use strict";

/*
Необходимо попросить пользователя ввести три числа.
Необходимо создать функцию, в которую мы должны передать эти три числа.
Функция должна определить максимальное, среди переданных ей значение и 
вывести сообщение: "Максимальное значение среди чисел N1, N2, N3 равно N."

Примечание: Условимся, что пользователь всегда вводит корректные значения, 
три числа. Проверять их не нужно.
*/

const COUNT = 3;

const numbers = [];
const invalid2 = [];
for (let i = 0; i < COUNT; i++) {
    numbers[i] = Number(prompt(`Введите ${i + 1}-е число:`));
    invalid2[i] = Number.isNaN(numbers[i]);
}

if (invalid2.includes(true)) {
    console.log(`Одно из значений введено некорректно`);
} else {
    // console.log(`Максимальное значение среди чисел ${numbers.join(', ')} равно ${Math.max(...numbers)}.`);
    max(...numbers);
}

function max(...args) {
    let max = null;
    for (let i = 0; i < args.length; i++) {
        if (max === null || max < args[i]) {
            max = args[i];
        }
    }
    console.log(`Максимальное значение среди чисел ${args.join(', ')} равно ${max}.`);
    return max;
}