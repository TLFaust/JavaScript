// Function predict

// predict 1

function greeting() {
  return "Hello";
  console.log("World");
}
var word = greeting();
console.log(word);

// this would log "Hello".var word is set equal to greeting, so console.log(word) would be the same as calling on the function greeting which would return "Hello".
// =========================================================
// predict 2

function add(num1, num2) {
  console.log("Summing Numbers!");
  console.log("num1 is: " + num1);
  console.log("num2 is: " + num2);
  var sum = num1 + num2;
  return sum;
}
var result1 = add(3, 5);
var result2 = add(4, 7);
console.log(result1);
console.log(result2);

// Summing numbers!, num1 is:3, num2 is:5, 8
// Summing numbers!, num1 is:4, num2 is:7, 11
// ============================================================
// predict 3

function highFive(num) {
  for (var i = 0; i < num; i++) {
    if (i == 5) {
      console.log("High Five!");
    } else {
      console.log(i);
    }
  }
}

// I dont think this would log anything because the function was never called and the variable i was never given a value.
