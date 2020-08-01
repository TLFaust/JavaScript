// I commented out all of the Functions(obviously). Uncomment each function to run and test...(obviously)

// 1. Get 1 to 255 - Write a function that returns an array with all the numbers from 1 to 255.

// function createArray(num) {
//   var newArray = [];
//   for (var i = 1; i <= num; i++) {
//     newArray.push(i);
//   }
//   return newArray;
// }
// var arrCreated = createArray(255);
// console.log(arrCreated);

// 2. Get even 1000 - Write a function that would get the sum of all the even numbers from 1 to 1000.  You may use a modulus operator for this exercise.

// function sumEvenNums(num) {
//   var sum = 0;
//   for (var i = 0; i <= num; i++) {
//     if (i % 2 === 0) {
//       //         console.log(i);
//       sum += i;
//     }
//   }
//   return sum;
// }
// var arrEvenSum = sumEvenNums(1000);
// console.log(arrEvenSum);

// 3. Sum odd 5000 - Write a function that returns the sum of all the odd numbers from 1 to 5000.(e.g. 1 + 3 + 5 +...+4997 + 4999).

// function sumOddNums(num) {
//   var sum = 0;
//   for (var i = 0; i <= num; i++) {
//     if (i % 2 > 0) {
//       //         console.log(i);
//       sum += i;
//     }
//   }
//   return sum;
// }
// var arrOddSumm = sumOddNums(5000);
// console.log(arrOddSumm);

// 4. Iterate an array - Write a function that returns the sum of all the values within an array. (e.g. [1, 2, 5] returns 8.[-5, 2, 5, 12] returns 14).

// var arr = [1, 2, 5];

// function iterArr(arr) {
//   var sum = 0;
//   for (var i = 0; i < arr.length; i++) {
//     sum += arr[i];
//   }
//   return sum;
// }
// var arrSum = iterArr([-5, 2, 5, 12]);
// console.log(arrSum);

// 5. Find max - Given an array with multiple values, write a function that returns the maximum number in the array. (e.g.for[-3, 3, 5, 7] max is 7)

// function findMax(arr) {
//   var max = 0;
//   for (var i = 0; i < arr.length; i++) {
//     if (max < arr[i]) {
//       max = arr[i];
//     }
//   }
//   return max;
// }
// var arrMax = findMax([-3, 3, 5, 7]);
// console.log(arrMax);

// 6. Find average - Given an array with multiple values, write a function that returns the average of the values in the array. (e.g.for[1, 3, 5, 7, 20] average is 7.2)

// function findAvg(arr) {
//   var sum = 0;

//   for (var i = 0; i <= arr.length - 1; i++) {
//     sum = sum + arr[i];
//   }
//   var avg = sum / arr.length;

//   return avg;
// }
// var arrAvg = findAvg([1, 3, 5, 7, 20]);
// console.log(arrAvg);

// 7. Array odd - Write a function that would return an array of all the odd numbers between 1 to 50.(ex. [1, 3, 5, .... , 47, 49]).Hint: Use 'push' method.

// function createArray(num) {
//   var newArray = [];
//   for (var i = 1; i <= num; i++) {
//     if (i % 2 > 0) newArray.push(i);
//   }
//   return newArray;
// }
// var oddArrCreated = createArray(50);
// console.log(oddArrCreated);

// 8. Greater than Y - Given value of Y, write a function that takes an array and returns the number of values that are greater than Y.For example if arr = [1, 3, 5, 7] and Y = 3, your function will return 2.(There are two values in the array greater than 3, which are 5, 7).

// function greater(arr, num) {
//   var counter = 0;

//   for (var i = 0; i < arr.length; i++) {
//     if (arr[i] > num) {
//       counter++;
//     }
//   }
//   return counter;
// }
// var greatestNum = greater([1, 3, 5, 7], 3);
// console.log(greatestNum);

// 9. Squares - Given an array with multiple values, write a function that replaces each value in the array with the value squared by itself. (e.g. [1, 5, 10, -2] will become[1, 25, 100, 4])

// function squares(arr) {
//   for (i = 0; i < arr.length; i++) {
//     arr[i] = arr[i] ** 2;
//   }
//   return arr;
// }
// var arrSq = squares([1, 5, 10, -2]);
// console.log(arrSq);

// 10. Negatives - Given an array with multiple values, write a function that replaces any negative numbers within the array with the value of 0. When the program is done the array should contain no negative values. (e.g. [1, 5, 10, -2] will become[1, 5, 10, 0])

// function negatives(arr) {
//   for (i = 0; i < arr.length; i++) {
//     if (arr[i] < 0) {
//       arr[i] = 0;
//     }
//   }
//   return arr;
// }
// var arrSq = negatives([1, 5, 10, -2]);
// console.log(arrSq);

// 11. Max / Min / Avg - Given an array with multiple values, write a function that returns a new array that only contains the maximum, minimum, and average values of the original array. (e.g. [1, 5, 10, -2] will return [10, -2, 3.5])

// function maxMinAvg(arr) {
//   var max = 0;
//   var min = 0;
//   var sum = 0;
//   var avg = 0;
//   for (i = 0; i < arr.length; i++) {
//     if (max < arr[i]) {
//       max = arr[i];
//     } else if (min > arr[i]) {
//       min = arr[i];
//     }
//     sum += arr[i];
//     avg = sum / arr.length;
//   }
//   return [max, min, avg];
// }
// var newArr = maxMinAvg([1, 5, 10, -2,]);
// console.log(newArr);

// 12. Swap Values - Write a function that will swap the first and last values of any given array.The default minimum length of the array is 2.(e.g. [1, 5, 10, -2] will become[-2, 5, 10, 1]).

// function swapVal(arr) {
//   temp = 0;
//   var temp = arr[0];
//   arr[0] = arr[arr.length - 1];
//   arr[arr.length - 1] = temp;
//   // }
//   return arr;
// }
// var arrSwap = swapVal([1, 5, 10, -2]);
// console.log(arrSwap);

// 13. Number to String - Write a function that takes an array of numbers and replaces any negative values within the array with the string 'Dojo'.For example if array = [-1, -3, 2], your function will return ['Dojo', 'Dojo', 2].

// function numStr(arr) {
//   for (i = 0; i < arr.length; i++) {
//     if (arr[i] < 0) {
//       arr[i] = "Dojo";
//     }
//   }
//   return arr;
// }
// var strArr = numStr([-1, -3, 2]);
// console.log(strArr);
