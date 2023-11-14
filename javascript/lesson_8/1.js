"use strict";

/*
Необходимо с помощью цикла for вывести следующие 11 строк в консоль:
0 – это ноль
1 – нечетное число
2 – четное число
3 – нечетное число
…
10 – четное число
*/

const check = (num) => {
    if (num === 0) {
        return 'это ноль';
    } else if (num % 2 === 0) {
        return 'четное число';
    } else {
        return 'нечетное число';
    }
};

for (let i = 0; i <= 10; i++) {
    console.log(`${i} - ${check(i)}`);
}