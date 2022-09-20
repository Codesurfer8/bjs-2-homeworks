"use strict"

function solveEquation(a, b, c) {
  let arr = [];
  let discriminant = b**2-4*a*c;
  let root = -b/(2*a);
  let roorOne = (-b + Math.sqrt(discriminant) )/(2*a);
  let rootTwo = (-b - Math.sqrt(discriminant) )/(2*a);
  
   if (discriminant == 0) {
    arr.push(root)
  } else if (discriminant > 0) {
    arr.push(roorOne, rootTwo)
  }
  return arr;
};

function calculateTotalMortgage(percent, contribution, amount, date) {
  if (isNaN(percent)) {
    return `Параметр "Процентная ставка" содержит неправильное значение "${percent}"`;
  } else if (isNaN(contribution)) {
    return `Параметр "Начальный взнос" содержит неправильное значение "${contribution}"`;
  } else if (isNaN(amount)) {
    return `Параметр "Общая стоймость" содержит неправильное значение "${amount}"`;
  };
  
  let S = amount - contribution;
  let P = percent / 100 / 12;
  
  let currentMonth = new Date().getMonth();
  let currentYear = new Date().getFullYear();
  let yearDiferent = date.getFullYear() - currentYear;
  let n = yearDiferent * 12 - currentMonth + date.getMonth();
  
  //  / 1000 / 60 / 60 / 24 / 30; 
  
  let monthlyPayment = S * (P + (P / (((1 + P)**n) - 1)));
  let totalAmount = monthlyPayment * n;

  
  

  return totalAmount.toFixed(2);
}
