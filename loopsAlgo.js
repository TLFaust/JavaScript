// Loops Algo

function printOdds(num) {
  for (var i = 0; i <= num; i++) {
    if (i % 2 == 1) {
      console.log(i);
    }
  }
}
printOdds(20);

// 1, 3, 5, 7, 9, 11, 13, 15, 17, 19

// ===============================================================
var sum = 0;
for (var num = 1; num <= 5; num++) {
  sum = sum + num;
  console.log("Num:", num);
  console.log("Sum:", sum);
}

// Num: 1, Sum: 1, Num: 2, Sum: 3, Num: 3, Sum: 6, Num: 4, Sum: 10, Num: 5, Sum: 15
