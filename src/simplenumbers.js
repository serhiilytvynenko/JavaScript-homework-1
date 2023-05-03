"use srtict";
for (let i = 2; i <= 100; i++) {
  let simpleNumber = true;

  for (let j = 2; j < i; j++) {
    if (i % j == 0) {
      simpleNumber = false;
      break;
    }
  }

  if (simpleNumber) {
    console.log(i);
  }
}
