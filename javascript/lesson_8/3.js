"use strict";

/*
Используя Math.random() необходимо сгенерировать массив, содержащий 5 цифр в 
диапазоне [0, 9].
После создания массива необходимо вывести в консоль следующие значения:
1. Сумму элементов массива
2. Минимальное значение в массиве
3. Новый массив, содержащий индексы сгенерированного выше массива, в которых 
значение равно 3.
Пример: Если у нас сгенерировался массив [2, 3, 5, 7, 3], то мы должны вывести 
в консоль массив [1, 4]. Такой массив получился потому что в сгенерированном
массиве тройки лежат под индексами 1 и 4. Если троек в сгенерированном массиве
не окажется, значит нужно будет вывести пустой массив.
*/

const COUNT_NUM = 5;
const arrNum = [];
for (let i = 0; i < COUNT_NUM; i++) {
    arrNum.push(Math.abs(Math.ceil((Math.random() - 0.1) * 10)));
}

const sum = arrNum.reduce((a, b) => a + b, 0);
const min = Math.min(...arrNum);
const arr3 = [];
arrNum.forEach((val, idx) => val !== 3 ? null : arr3.push(idx));

console.log({
    'Начальный массив [0,9]': arrNum,
    'Сумма эл-ов массива': sum,
    'Мин. знач. в массиве': min,
    'Индексы массива, содержащие значение 3': arr3,
});