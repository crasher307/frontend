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
for (let i = 0; i < COUNT; i++) {
    numbers[i] = Number(prompt(`Введите ${i + 1}-е число:`));
}

max(...numbers);

function max(...args) {
    let invalid = false;
    for (let i = 0; i < numbers.length; i++) {
        if (!Number.isFinite(numbers[i])) {
            invalid = true;
            break;
        }
    }
    console.log(invalid
        ? `Одно из значений введено некорректно`
        : `Максимальное значение среди чисел ${args.join(', ')} равно ${Math.max(...args)}.`);
}