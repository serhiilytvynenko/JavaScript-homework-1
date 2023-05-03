'use srtict';
let n = Number(prompt('Введите любое число', ''));
let count = 0;
if (Number.isNaN(n)) {
  console.log('Введено неправильное значение');
} else {
  for (let i = 1; i <= n; i++) {
    if (i % 5 === 0) {
      count++;
    }
  }
  console.log(`Количество положительных чисел, кратных 5 и меньше ${n}: ${count}`);
}
