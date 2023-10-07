/**
 * 1) Write a function named isEven using  for loop that
 * -  iterate from x to y.
 * -  return array contain the even values,
 * ex:  isEven(1,10) => [2,4,6,8,10]
 */
 function isEven(x, y) {
  let result = [];

  for (let index = x; index <= y; index++) {
    if (index % 2 === 0) result.push(index);
  }
  console.log(result);
}
isEven(1,50)

function sum(v,w) {

    let result = 0;
    let i = v;

    while( i<=w ){
        result= result + i;
        i++
}
    console.log(result);
}

sum(2,15)

/**
 *
 * 2) Write a function named factorial that
 * -  Use Recursion to calculate the factorial of a number
 * -  the factorial of a non-negative integer n, denoted by n!, is the product of all positive integers less than or equal to n
 * - 5! = 5*4*3*2*1 = 120
 * ex : factorial(5) => 120
 *
 */


function factoriel (z){
    let res = 1;
    let i = 1;
    while (i<=z){
    res= res*i;
    i++
}
console.log(res);
}
factoriel (5)

/**
 * 3) write a function to Reverse an array without use array.reverse() method:
 * ex: reverseArray([1,2,3]) ==> [3,2,1]
 *
 * @function reverseArray
 * @param {Array<number>} array
 * @return {Array<number>}
 */

 function reverse (input){
 let array =[];

 for (let index = input.length-1; index >=0; index--) {

    array.push (input[index])
  
    
 }

console.log(array);

 }
 reverse ([2,5,6,4,8]) 


 /**
 *
 * 4) write a function called (multipleEvenIndexes) that takes an array of numbers, as an argument and returns an array of numbers, multiplied by two for even indexes.
 *
 * @param {Array<number>} array
 * @return {Array<number>}
 */

 function multipleEvenindex (input1){

    let array1 = [];

    for (let index = 0; index < input1.length; index++) {
        if (input1[index] %2 ===0) array1.push (input1[index]*2)
        else 
         array1.push (input1[index])
        
    }

console.log(array1);
 }

 multipleEvenindex([1,2,5,6])

 /**
 * 5) Given an array of integers and an integer n.
 * find all occurrences of n in the given array and return another array containing all the index positions of n in the given array.
 * If n is not in the given array, return an empty array [].
 * Assume that n and all values in the given array will always be integers.
 * Example:
 * findAll([6, 9, 3, 4, 3, 82, 11], 3) => [2, 4]
 */

 function findindexN (input2,n){

    let array2 = [];

    for (let index = 0; index < input2.length; index++) {
      if (input2[index]===n) array2.push(index)
     
    }
console.log(array2); }

findindexN ([1,5,6,2,8,5,4,6,5,2,4,5], 20)


/** 
 * 6) Write a function named helloWorld that:
 * takes 1 argument, a language code (e.g. "fr", "es", "en")
 * returns "Hello, World" for the given language, for at least 3 languages. It should default to returning English.
 * ex: helloWorld('fr') ==> 'Bonjour tout le monde'
 *    helloWorld('es') ==> 'Hola, Mundo'
 *    helloWorld('') ==> 'Hello, World'
 *
 * @function helloWorld
 * @param {string} str
 * @return {string}
 */


function helloWorld(str) {

  if (str==='fr') {
    return "Bonjour tout le monde"
    
  }
  if (str==='es') {
    return "Hola, Mundo"
    
  }
  else {
    return 'Hello, World'
  }
  
}
helloWorld ('es')



 


