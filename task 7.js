// Задание №7 Дан массив. Нужно вывести в консоль количество чётных и нечётных элементов в массиве. Если в массиве есть нулевой элемент, то он учитывается и выводится отдельно. 
// При выполнении задания необходимо учесть, что массив может содержать не только числа, но и, например, знаки, null и так далее.

let array7 = [0,5,126,7,534,NaN, undefined, null, "123", false, Infinity, -Infinity, []];
let odd = 0;
let even = 0;
let zero = 0;
array7.map((val)=>{
    if (typeof val == "number"){
        switch (val){
            case 0:
                console.log(`${val} : zero`);
                zero++;
                break;
            case NaN:
            case Infinity:
            case -Infinity:
                console.log(`${val} : ${val}`); 
                break;
            default:
                if (val%2){
                    console.log(`${val} : odd`);
                    odd++;
                }
                else{
                    console.log(`${val} : even`);
                    even++;
                }
        }
    }
    else{
        console.log(`${val} : ${typeof val}`)
    }
})

console.log(`zero: ${zero}`);
console.log(`even: ${even}`);
console.log(`odd: ${odd}`);