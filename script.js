"use strict";



const numbers = [ 1, 2, 3, 4, 5 ,6 ,7 ,8 ,9 ,10 ];
console.log( "Nubmers in the array: " + numbers );


// map method with a callback function to modify each element of the array
const squaredNumbers = numbers.map( num => num ** 2 );

console.log( "Array numbers squared: " + squaredNumbers );

const MultipliedNumbers = numbers.map( num => num * 2 );

console.log( "Array Multiplied by 2: " + MultipliedNumbers );



// Filtering an array with callback function for even numbers only

const evenNumbers = numbers.filter( num => num % 2 === 0 );
console.log ( "Even numbers are: " + evenNumbers );

// Utilize the forEach method on the numbers array to log each number to the console.

function onCount ( num ) {
    console.log( num );
}
numbers.forEach( onCount );