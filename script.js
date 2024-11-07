//! Assignment 1
//! 1- Write a program that allow to user enter number then printit
// Example
// Input: 5
// Output: 5
//* solutaion
/*
      var num1 = +prompt("Enter the number");
      console.log(num1);
      */
//! 2- Write a program that take number from user then print yes if that number can divide by 3
// and 4 otherwise print no
// Example1
// Input: 12 Output Yes
// Example 2
// Input: 9 Output No
//* solutaion
/*
      var num1 = +prompt("Enter the number");
      num1 % 3 === 0 && num1 % 4 === 0 ? console.log("Yes") : console.log("No");
      */
//! 3- Write a program that allows the user to insert 2 integers then print the max
// Example1
// Input: 3 5
// Output: 5
// Example 2
// Input: 10 7
// Output: 10
//* solutaion

// var num1 = +prompt("Enter the 1'st number");
// var num2 = +prompt("Enter the 2'nd number");
// num1 > num2 ? console.log(num1) : console.log(num2);

//! 4- Write a program that allows the user to insert an integer then print negative if it is
// negative number otherwise print positive.
// Example 1
// Input: -5
// Output negative
// Example2
// Input: 10
// Output positive
//* solutaion
// var num1 = +prompt("Enter the number");
// num1 < 0 ? console.log("negative") : console.log("positive");

//! 5- Write a program that take 3 integers from user then print the max element
// and the min element.
// Example 1
//  Input:7,8,5
// Output:
// max element = 8
// min element = 5
// Example2
// Input: 3 6 9
// Outputs:
// Max element = 9
// Min element = 3
//* solutaion
// var num1 = +prompt("Enter 1st number");
// var num2 = +prompt("Enter 2nd number");
// var num3 = +prompt("Enter 3rd number");

// var max = num1;
// var min = num1;

// if (num2 > max) {
//   max = num2;
// }
// if (num3 > max) {
//   max = num3;
// }

// if (num2 < min) {
//   min = num2;
// }
// if (num3 < min) {
//   min = num3;
// }

// console.log(`Max element = ${max}`);
// console.log(`Min element = ${min}`);

// 6- Write a program that allows the user to insert integer number then
// check If a number is oven or odd
// 7- Example 1
// Input: 8
// Output: even
// Example 2
// Input: 7
// Output: odd
//* solutaion
// var num1 = +prompt("Enter 1st number");
// num1 % 2 == 0 ? console.log(`even`) : console.log(`odd`);
/////////////////////////////////////////////////////////////////////////////////////////////
// 8- Write a program that take character from user then if it is vowel chars (a,e,I,o,u)
// then print vowel otherwise print consonant
// Example1
// Input: O
// Output: vowel
// Example 2
// Input: b
// Output:
// Consonant
//* solutaion
// var char = prompt(`inter your character`);
// if (
//   char === `a` ||
//   char === `e` ||
//   char === `I` ||
//   char === `o` ||
//   char === `u`
// ) {
//   console.log(`vowel`);
// } else {
//   console.log(`Consonant`);
// }
/////////////////////////////////////////////////////////////////////////////////////////////////
// 9- Write aprogram that allows user to insert integer then print all numbers between 1 to
// that’s number
// Example Input 5
// Output 1, 2, 3, 4, 5
// var num = +prompt("Enter the number here:");
// var result = "";
// for (var index = 1; index <= num; index++) {
//   result += index;
//   if (index < num) {
//     result += ", ";
//   }
// }
// console.log(result);

///////////////////////////////////////////////////////////////////////////////////////////////////////
// 10- Write a program that allows user to insert integer then print a multiplication table up to 12.
// Example
// Input: 5
// Outputs:
// 5 10 15 20 25 30 35 40 45 50 55 60
// ?solution
// var num = +prompt("Enter a number:");
// var result = "";

// for (var i = 1; i <= 12; i++) {
//   result += num * i;
//   if (i < 12) {
//     result += " "; // Add a space after each number except the last one
//   }
// }

// console.log(result);
//////////////////////////////////////////////////////////////////////////////////////////
// 11- Writeaprogramthatallowstousertoinsertnumberthenprintallevennumbers
// between 1 to this number
// Example:
// Input: 15
// Output: 2 4 6 8 10 12 14
// ? solution
// var num = +prompt("Enter a number:");
// var result = "";

// for (var i = 1; i <= num; i++) {
//   if (i % 2 === 0) {
//     result += i + " ";
//   }
// }
// console.log(result);
//////////////////////////////////////////////////////////////////////////////////////////////////
// 12- Writeaprogramthattaketwointegersthenprintthepower
// Example:
// Input: 4 3
// Output: 64
// ? solution
// var num1 = +prompt("Enter the base number:");
// var num2 = +prompt("Enter the exponent:");
// var result = 1; // Start from 1 to handle cases where exponent is 0

// for (var i = 0; i < num2; i++) {
//   result *= num1;
// }

// console.log(result);

// Hint how to calculate 4^3 = 4 * 4 * 4 =64
////////////////////////////////////////////////////////////////////////////////////////////////
// 12- Write a program to enter marks of five subjects and calculate total, average and
// percentage.
//  Example
// Input: - Enter Marks of five subjects:
// 95
// 76
// 58
// 90
// 89
// Output:-.Total marks = 435
//  Average Marks =87
// Percentage =87
// ? solution
// var num1 = +prompt("Enter marks for 1st subject:");
// var num2 = +prompt("Enter marks for 2nd subject:");
// var num3 = +prompt("Enter marks for 3rd subject:");
// var num4 = +prompt("Enter marks for 4th subject:");
// var num5 = +prompt("Enter marks for 5th subject:");

// var total = num1 + num2 + num3 + num4 + num5;
// var average = total / 5;
// var percentage = (total / 500) * 100; // Assuming each subject is out of 100

// console.log(`Total marks = ${total}`);
// console.log(`Average marks = ${average}`);
// console.log(`Percentage = ${percentage}%`); /////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////
// 13-Write a program to input month number and print number of days in that
// month.
// Example:
// Input: - Month Number: 1
//  Output:-. Days in Month: 31
// ? solution
// var num1 = +prompt("Enter month number:");
// if (
//   num1 === 1 ||
//   num1 === 3 ||
//   num1 === 5 ||
//   num1 === 7 ||
//   num1 === 8 ||
//   num1 === 10 ||
//   num1 === 12
// ) {
//   console.log(`Days in Month: 31`);
// } else if (num1 === 4 || num1 === 6 || num1 === 9 || num1 === 11) {
//   console.log(`Days in Month: 30`);
// } else if (num1 === 2) {
//   console.log(`Days in Month: 28`);
// }
//////////////////////////////////////////////////////////////////////
// 14- Write a program to input marks of five subjects
// Physics, Chemistry, Biology, Mathematics and Computer
// , Find percentage and grade
// Percentage >= 90%: Grad A
// Percentage >= 80%: Grad B
// Percentage >= 70%: Grad C
// Percentage >= 60%: Grad D
// Percentage >= 40%: Grad E
// Percentage < 40%: Grad F
// Example:
// Input: Enter marks of five subjects:
// 95
// 76
// 58
// 90
// 89
// Output:-
// Percentage =87
// Grade =87
// ? solution solved using if else
// var num1 = +prompt("Enter marks for 1st subject:");
// var num2 = +prompt("Enter marks for 2nd subject:");
// var num3 = +prompt("Enter marks for 3rd subject:");
// var num4 = +prompt("Enter marks for 4th subject:");
// var num5 = +prompt("Enter marks for 5th subject:");

// var total = num1 + num2 + num3 + num4 + num5;
// var average = total / 5;
// var percentage = (total / 500) * 100; // Assuming each subject is out of 100

// console.log(`Total marks = ${total}`);
// console.log(`Average marks = ${average}`);
// console.log(`Percentage = ${percentage}%`);
// if (percentage >= 90) {
//   console.log(`Grade = A`);
// } else if (percentage >= 80) {
//   console.log(`Grade = B`);
// } else if (percentage >= 70) {
//   console.log(`Grade = C`);
// } else if (percentage >= 60) {
//   console.log(`Grade = D`);
// } else if (percentage >= 40) {
//   console.log(`Grade = E`);
// } else {
//   console.log(`Grade = F`);
// }
// ******************************** Using switch case*******************************
// 15- Write a program to print total number of days in month
// Example:
// Input: - Month Number: 1
//  Output:-. Days in Month: 31
// var monthNumber=+prompt("Enter month number:");
// switch(monthNumber){
//     case 1:
//     case 3:
//     case 5:
//     case 7:
//     case 8:
//     case 10:
//     case 12:
//         console.log(`Days in Month: 31`);
//         break;
//     case 4:
//     case 6:
//     case 9:
//     case 11:
//         console.log(`Days in Month: 30`);
//         break;
//     case 2:
//         console.log(`Days in Month: 28`);
//         break;
//     default:
//         console.log(`Invalid month number`);
// }
// 16- Write a program to check whether an alphabet is vowel or consonant
// var char = prompt("Enter a character:");
// switch (char) {
//   case "a":
//   case "e":
//   case "i":
//   case "o":
//   case "u":
//     console.log(`${char} is a vowel`);
//     break;
//   default:
//     console.log(`${char} is a consonant`);
// }
// 17- Write a program to find maximum between two numbers
// Example:
// Input: 5 10
// Output: 10
// var num1 = +prompt("Enter 1st number:");
// var num2 = +prompt("Enter 2nd number");
// switch (true) {
//   case num1 > num2:
//     console.log(num1);
//     break;
//   default:
//     console.log(num2);
// }
// 18- Write a program to check whether a number is even or odd
// var num = +prompt("Enter a number:");
// switch (true) {
//   case num % 2 === 0:
//     console.log(`${num} is even`);
//     break;
//   default:
//     console.log(`${num} is odd`);
// }
// 19- Write a program to check whether a number is positive or negative or zero
// var num = +prompt("Enter a number:");
// switch (true) {
//   case num > 0:
//     console.log(`${num} is positive`);
//     break;
//   case num < 0:
//     console.log(`${num} is negative`);
//     break;
//   default:
//     console.log(`${num} is zero`);
// }
// 20- Write a program to create Simple Calculator
// var num1 = +prompt("Enter 1st number:");
// var num2 = +prompt("Enter 2nd number:");
// var operator = prompt("Enter operator:");
// switch (operator) {
//   case "+":
//     console.log(`${num1} + ${num2} = ${num1 + num2}`);
//     break;
//   case "-":
//     console.log(`${num1} - ${num2} = ${num1 - num2}`);
//     break;
//   case "*":
//     console.log(`${num1} * ${num2} = ${num1 * num2}`);
//     break;
//   case "/":
//     console.log(`${num1} / ${num2} = ${num1 / num2}`);
//     break;
//   default:
//     console.log("Invalid operator");
// }
