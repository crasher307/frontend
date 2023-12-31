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

const arrNum = [];
for (let i = 0; i < 5; i++) {
    arrNum.push(Math.round(Math.random() * 9));
}

const arr3 = arrNum.reduce((data, val, idx) => {
    if (val === 3) {
        data.push(idx);
    }
    return data;
}, []);

console.log('Начальный массив [0,9]', arrNum);
console.log('Сумма эл-ов массива', arrNum.reduce((a, b) => a + b, 0));
console.log('Мин. знач. в массиве', Math.min(...arrNum));
console.log('Индексы массива, содержащие значение 3', arr3);