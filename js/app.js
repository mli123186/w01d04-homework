// console.log("hw6-20");

//  Verbal questions
// What is the difference between a parameter and an argument?
// parameter is more like a variable that applay in the function;
//argument is more like a true or false question.
// Within a function, what is the difference between return and console.log?
//return don't show in the console, it only tells if it is undined or not
//console.log, present the result on the console.
// What are the implications of the ability of a function to return a value?
//to make sure the vaule on console is displayed.

// 2. Palindrome again.

// const checkPlindrome = (string) => {
// 	const word = string;
// 	const split = string.split("");
// 	const reverse = split.reverse("");
// 	const join = reverse.join("");
// 	if (word == join) {
// 		return true;
// 	} else {
// 		return false;
// 	}
// }
//make it to array , friend helped with this problem.

// console.log(checkPlindrome("radar"));
// console.log(checkPlindrome("borscht"));

//3. Digit Sum
//Write a function sumDigits that accepts a number and returns the sum of its digits.

const sumDigits = (number) => {

	let sumNumber = 0;
	while (number > 0) {
		
		sumNumber += (number % 10);
		number = Math.floor(number/10);
		

	} 
	console.log(sumNumber);
}
sumDigits(12);//friednd helped with this problem
//make it to array!

//4. Pythagoras
 
// Write a function calculateSide that takes two arguments: sideA and sideB, and returns 
// the solution for sideC using the Pythagorean theorem.

const calculateSide = (sideA, sideB) => {
	let sideC;
	sideC = Math.sqrt(Math.pow(sideA, 2) + Math.pow(sideB, 2));
	return sideC;
}

console.log(calculateSide(8, 6));

// 5. Sum Array
//Write a function sumArray that takes an array as an argument. The array should contain numbers. 
//The function should return the sum of the numbers in the array.
const sumArray = (array) => {
	const newArray = array;
	let sum = 0;
	for (let i = 0; i < newArray.length; i++) {
		sum += newArray[i];
		
	}
		console.log(sum);
}

sumArray([1, 2, 3, 4, 5, 6]);

//6. Prime Numbers
//Step One 
//Write a function called checkPrime that will test whether a number is Prime. 
//The function will return true (Boolean) if Prime, false if not. 
//Hint: Check every number up to the square root. To do this, try a for loop.

// const checkPrime = (number) => {
// 	let input = number;
// 	for (let i = 1; i < input; i++) {
// 		if (input === 1){
// 			return false;
// 		} else if (input === 2 || input ===3) {
// 			return true;
// 		} else if (input % i === 0) {
// 			return false;
// 		} else
// 	}
// }









