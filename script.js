
function printArray(array){
    for(let i = 0; i<array.length; i++){
        console.log(`Element ${i}: value ${array[i]}`);
    }
}

function printArray1(array){
    for(let i = 0; i<array.length; i++){
        console.log(`${i}: ${array[i]}`);
    }
}

myArray = [1,2,3,4,5];
printArray(myArray);
printArray1(myArray);



//1
/*
    Проходит по массиву и вызывает callback для каждого элемента.
    array - исходный массив
    callback - функция, которая выполняется для каждого элемента
    возвращает undefined
 */
function forEach(array, callback){
    for(let i = 0; i<array.length; i++){
        callback(array[i], i, array);
    }
    return;
}

const array = [1,2,3]

forEach(array, (element, index, array) => {
  console.log(`Element: ${element}, Index: ${index}`);
});

//2
/*
    Создает новый массив, применяя callback к каждому элементу исходного массива.
    array - исходный массив
    callback - функция, которая выполняется для каждого элемента
    возвращает новый массив с измененными значениями
 */
function map(array, callback){
    const newArr = [];
    for(let i = 0; i<array.length; i++){
        newArr.push(callback(array[i], i, array));
    }
    return newArr;
}

const numbers = [1, 2, 3];
const squared = map(numbers, (element) => element * element);
console.log(squared);

//3
/*
    Возвращает новый массив только с теми элементами, которые прошли проверку callback.
    array - исходный массив
    callback - функция, которая выполняется для каждого элемента
    новый отфильтрованный массив    
 */
function filter(array, callback){
    const newArr1 = [];
    for(let i = 0; i<array.length; i++){
        if(callback(array[i], i, array)){
            newArr1.push(array[i]);
        }
    }
    return newArr1;
}

const numbers1 = [1, 2, 3, 4, 5];
const evenNumbers = filter(numbers1, (element) => element % 2 === 0);
console.log(evenNumbers); 

//4
/*
    Возвращает первый элемент массива, который удовлетворяет условию callback.
    array - исходный массив
    callback - функция, которая выполняется для каждого элемента
    возвращает найденный элемент или undefined
 */
function find(array, callback){
    for(let i = 0; i<array.length; i++){
        if(callback(array[i], i, array)){
            return array[i];
        }
    }
}

const num = [1, 2, 3, 4, 5];
const firstEven = find(num, (element) => element % 2 === 0);
console.log(firstEven);

//5
/*
    Проверяет, есть ли хотя бы один элемент, который проходит условие callback.
    array - исходный массив
    callback - функция, которая выполняется для каждого элемента
    возвращает true если найден хотя бы один элемент, иначе false
 */
function some(array, callback){
    for(let i = 0; i<array.length; i++){
        if(callback(array[i], i, array)){
            return true;
        }
    }
    return false;
}

const n = [1, 2, 3, 4, 5];
const hasEven = some(n, (element) => element % 2 === 0);
console.log(hasEven);


//6
/*
    Проверяет, все ли элементы массива проходят условие callback.
    array - исходный массив
    callback - функция, которая выполняется для каждого элемента
    возвращает true если все элементы подходят, иначе false
 */
function every(array, callback){
    for(let i = 0; i<array.length; i++){
        if(!callback(array[i], i, array)){
            return false;
        }
    }
    return true;
}

const numb = [2, 4, 6];
const allEven = every(numb, (element) => element % 2 === 0);
console.log(allEven);


//7
/*
    Последовательно обрабатывает массив и накапливает результат.
    array - исходный массив
    callback - функция, которая выполняется для каждого элемента
    initialValue - начальное значение аккумулятора (необязательно)
    возвращает итоговое значение аккумулятора
 */
function reduce(array, callback, initialValue){
    let start;
    let accumulator;
    if(array.length === 0 && initialValue === undefined){
        return;
    }

    if(initialValue === undefined){
        start = 1;
        accumulator = array[0]
    }
    else{
        start = 0;
        accumulator = initialValue;
    }

    for(let i = start; i<array.length; i++){
        accumulator = callback(accumulator, array[i], i, array);
    }
    return accumulator;
}

const n1 = [1, 2, 3, 4, 5];

const sum = reduce(n1, (accumulator, element) => accumulator + element, 0);

console.log(sum);

