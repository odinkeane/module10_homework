// Задание №6 Дан массив. Проверить, одинаковые ли элементы в массиве и вывести результат true или false в консоль. Речь идёт не о двух рядом стоящих одинаковых элементах, а обо всех. Проверить, все ли элементы в массиве одинаковые.
let array6 = [10,"10",10];
let i = 0;
while (i < array6.length && array6[0] === array6[i]) {i++;}
console.log(i === array6.length);