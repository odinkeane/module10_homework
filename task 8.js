// Задание №8
// Создайте произвольный массив Map. Получите его ключи и выведите в консоль все значения в виде «Ключ — Х, значение — Y».
let inputMap = new Map([
    ["first", 1],
    ["second", 2],
    ["third" , 3]
]);
for (let m of inputMap.keys()){
    console.log(`${m} : ${inputMap.get(m)}`);
}