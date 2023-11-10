"use strict";

/*
Дан массив arr (ниже).
Необходимо внести такие изменения в массив, лежащий в const arr, чтобы
его значения после изменений стали: 
[1, 2, 100, 6, 7]
*/

const ITEM_START_VALUE = 2;
const ITEM_END_VALUE = 6;
const ITEM_VALUE = 100;
const arr = [1, 2, 3, 4, 5, 6, 7];

const start = arr.find(el => el === ITEM_START_VALUE);
const end = arr.find(el => el === ITEM_END_VALUE) - start - 1;
arr.splice(start, end, ITEM_VALUE);
console.log(arr);