// Задание №5
let inputArray = prompt("Введите числа через пробел").split(" ");
console.log(`Количество элементов: ${inputArray.length}`);
inputArray.map((val, ind) => {
    console.log(`${ind} : ${val}`)
});