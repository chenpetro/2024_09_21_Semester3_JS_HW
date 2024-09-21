// const myNumber = 5;
// const userNumber = prompt('Enter your number');
// if (myNumber == userNumber){
//     alert('You won')
// }
// else if (userNumber == 10){
//     alert('You wrote number 10')
// }

// else{
//     alert('You lost')
// }

// const firstThing = prompt('What is the name of your first item in the buggage')
// const secondThing = prompt('What is the name of your second item in the buggage')
// const thirdThing = prompt('What is the name of your third item in the buggage')

// if (firstThing == 'weapon' || secondThing == 'cigarettes' || thirdThing == 'animal')
//     {alert ('You are arrested')

//     } else {
//     alert ('Come in')
// }

// if (firstThing == 'weapon' && secondThing == 'cigarettes' && thirdThing == 'animal')
//     {alert ('You are arrested')

//     } else {
//     alert ('Come in')
// }

// const firstNumber = Number(prompt("Enter first number from 1 to 9"));
// const symbol = prompt("symbol from the list: +, -, /, *");
// const secondNumber = Number(prompt("Enter second number from 1 to 9"));
// if (firstNumber && secondNumber && symbol){
// if (firstNumber > 9 || secondNumber > 9) {
//   alert("you selected wrong number, this is not allowed");
// } else if (firstNumber == 0 || secondNumber == 0) {
//   alert("you typed number smaller than 1, this is not allowed");
// } else {
//   if (symbol == "+") {
//     alert(firstNumber + secondNumber);
//   } else if (symbol == "-") {
//     alert(firstNumber - secondNumber);
//   } else if (symbol == "*") {
//     alert(firstNumber * secondNumber);
//   }
//   else if (symbol == "/") {
//     alert(firstNumber / secondNumber);
//   }
// }
// } else {
//     alert ('Wrong input')
// }

// 5 == 5 ? console.log('equal') : console.log('unequal')

// Напиши скрит підрахунку суми покупки зі знижкою в залежності від витраченої суми за весь час (партнерська програма).
// Користувач вводить в інпут сумму витрачену в даному магазині і отримує розмір знижки як результат.
//  - Загальна сума витрачених коштів зберігається в змінній totalSpent
//  - Сума поточного платежа зберігається в змінній payment
//  - Знижка зберігається в змінній discount

//  - Якщо витрачено від [100 до 1000) - бронзовий партнер, знижка 2%
//  - Якщо витрачено від [1000 до 5000) - срібний партнер, знижка 5%
//  - Якщо витрачено більше [5000 - золотий партнер, знижка 10%
//  - Якщо витрачено менше 100) - не партнер, знижка 0%

//  - В результаті вивести повідомлення
//  «Оформляемо замовлення на суму [сума] зі знижкою [знижка]%»

// 'Бронзовий партнер, знижка 2%'
// 'Срібний партнер, знижка 5%'
// 'Золотий партнер, знижка 10%'
// 'У вас ще немає партнерської знижки'

let totalSpend = Number(prompt("Enter total spendings in this shop"));
let payment = Number(prompt("How much did you spend today?"));
if (totalSpend && payment) {
  if (totalSpend >= 100 && totalSpend <= 1000) {
    let discount = 2;
    alert(
      `Placing on order for the amount of ${payment} with the discount ${discount}%`)
    alert(`bronze partner, discount ${discount}%`)
  }
  else if (totalSpend > 1000 && totalSpend <= 5000) {
    let discount =5;
    alert(
      `Placing on order for the amount of ${payment} with the discount ${discount}%`)
    alert(`silver partner, discount ${discount}%`)
  }
else if (totalSpend > 5000 ) {
    let discount = 10;
    alert(
      `Placing on order for the amount of ${payment} with the discount ${discount}%`)
    alert(`gold partner, discount ${discount}%`)
  }
  else {
    alert(`you do not have yet a partner discount`)
  }



} else {
  alert("Wrong input");
}
