console.log('***** Function Practice *****')

// Add the required code to complete the functions below
// After _each_ function, use a console log to call the function
// to test it and display the result

// 1. Function to return 'Hello World!'
function hello() {
  return 'Hello World!';
}
// Call the function to test
console.log('Test - should say "Hello World!"', hello());


// 2. Function to return an personalized hello, using the `name` argument.
//    for example 'Hello, Jo!', or 'Hello, Stacy!'
function helloName( name ) {
  return 'Hello, ' + name + '!';
}

// Remember to call the function to test
console.log('Test - should say "Hello, Jo!":', helloName('Jo'));

// 3. Function to add two numbers together & return the result
function addNumbers( firstNumber, secondNumber ) {
  let answer = firstNumber + secondNumber;
  return answer;
  // return firstNumber + secondNumber;
}
console.log('Test - should return 3:', addNumbers(1,2));

// 4. Function to multiply three numbers & return the result
function multiplyThree( firstNumber, secondNumber, thirdNumber ){
  let answer = firstNumber * secondNumber * thirdNumber;
  return answer;
}
console.log('Test - should return 6:', multiplyThree(1,2,3));

// 5. Function that will return true if a number is positive, 
//    or greater than zero, and false otherwise
function isPositive( number ) {
  if ( number > 0 ){
    return true;
  }
  else {
    return false;
  }
}

console.log('Test - should return true:', isPositive(2));
console.log('Test - should return false:', isPositive(-1));

// Call the function to test each outcome (true & false) 
// Write a separate console.log statement for each outcome
console.log( 'isPositive - should say true', isPositive(3) );
console.log( 'isPositive - should say false', isPositive(0) );
console.log( 'isPositive - should say false', isPositive(-3) );


// 6. Function to return the _last_ item in an array. If the 
//    array is empty, return `undefined`.

function getLast(array) {
  if (array.length > 0){
    return array[array.length-1];
  }
  else {
    return undefined;
  }
}

let catArray = ['Mischa', 'Zoya'];
console.log('Test - should read Zoya:', getLast(catArray));

let dinnerArray = ['Turkey', 'Gravy', 'Veggies']
console.log('Test - should read Veggies:', getLast(dinnerArray));

// 7. Function to find a value in an array. Return true if the 
//    value is found and false otherwise. Use a loop;
//    DO NOT use Array.includes, Array.indexOf, or Array.find 

function find( value, array ){
  for (i=0; i<array.length; i++) {
    if (value===array[i]) {
      return true;
    }
    else {
      return false;
    }
  }
  }
  
console.log('Test - should return true:', find('Mischa', catArray));

let numberArray = [1, 30, 85, -10, 0]
console.log('Test - should return false:', find(25, numberArray));

// ----------------------
// Stretch Goals
// ----------------------
// 8. Function to check if a letter is the first letter in a 
//    string. Return true if it is, and false otherwise
function isFirstLetter(letter, string) {
  for (i=0; i<string.length; i++) {
    if (letter===string[i]) {
      return true;
    }
    else {
      return false;
    }
  }
}
console.log( 'isFirstLetter - should say true', isFirstLetter('a', 'apple') );
console.log( 'isFirstLetter - should say false', isFirstLetter('z', 'apple') );

// 9. Function to return the sum of all numbers in an array
function sumAll(array) {
  let sum = 0
  for (value of array) {
    sum += value;
  }  
  // TODO: loop to add items
  return sum;
}

console.log ('Sum of the array - should say 106:', sumAll(numberArray))

// 10. Function to return a new array of all positive (greater than zero)
//     numbers contained in an input array. If there are no positive numbers
//     return an empty array. Note: The input array should not change.

function allPositive (array) {
  return array > 0;
}

console.log(numberArray.filter(allPositive));

// 11. Pick a problem from Edabit(https://edabit.com/) or 
//     CodeWars(https://www.codewars.com/). Then describe it 
//     here in a comment, write the function, and test it!
