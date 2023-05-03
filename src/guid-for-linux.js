"use srtict";
let accessRights = prompt('Введите цифру от 0 до 7');
switch (+accessRights) {
  case 0:
    console.log('нет прав');
    break;
  case 1:
    console.log('право на выполнение');
    break;
  case 2:
    console.log('право на запись');
    break;
  case 3:
    console.log('право на запись и выполнение');
    break;
  case 4:
    console.log('право на чтение');
    break;
  case 5:
    console.log('право на чтение и выполнение');
    break;
  case 6:
    console.log('право на чтение и запись');
    break;
  case 7:
    console.log('право на чтение, запись и выполнение');
    break;
  default:
    console.log('нет таких значений');
}