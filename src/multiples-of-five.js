"use srtict";
let n = prompt('Введите любое число', '');
let count = 0;
for (let i = 1; i <= n; i++) {
  if (i % 5 === 0 && i > 0) {
    count++;
  }
}
console.log(`Количество положительных чисел, кратных 5 и меньше ${n}: ${count}`);