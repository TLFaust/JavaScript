// Loops predict

// Predict 1:

newFunction();

function newFunction() {
  for (var num = 0; num < 15; num++) {
    console.log(num);
  }
}
// 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14
// // ======================================

// // Predict 2:

for (var i = 1; i < 10; i += 2) {
  if (i % 3 == 0) {
    console.log(i);
  }
}

// // 3,9
// ======================================

// Predict 3:

for (var j = 1; j <= 15; j++) {
  if (j % 2 == 0) {
    j += 2;
  } else if (j % 3 == 0) {
    j++;
  }
  console.log(j);
}

// I used the console to figure this one out but I don't understand how it came up with the outputs. I'm pretty sure thats not good seeing how we worked on these ones together.
