"use strict";

/*
Необходимо создать переменную dayNumber, в которую пользователь должен ввести 
целое число в интервале [1, 32).
Если пользователь ввел иное значение, необходимо вывести в консоль 
"Неверное значение".
Если пользователь ввел верное значение, в нужном диапазоне, то необходимо 
определить, в какую декаду месяца попадает это число и вывести сообщение в 
консоль: "Число N1 попадает в N2 декаду месяца.", где вместо N1 и N2 будут 
подставлены подходящие значения, которые мы получили.

Примечание: выражение [1, 32) означает от 1 включительно, до 32, не включая 
число 32.
*/

// Записано тернарными выражениями, тк. код небольшой и так меньше места занимает
const dayNumber = Number(prompt('Введите число от 1 до 31 включительно:'));
const invalid2 = Number.isNaN(dayNumber) || dayNumber < 1 || dayNumber > 31;
let dec = !invalid2 ? Math.ceil(dayNumber / 10) : 0;
dec = dec > 3 ? 3 : dec;
console.log(invalid2 ? 'Неверное значение' : `Число ${dayNumber} попадает в ${dec} декаду месяца.`);