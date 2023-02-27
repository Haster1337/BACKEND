function sum (firstNum, secondNum) {
  // if(/[^a-zа-яё\s]/gi.test(firstNum) && /\d/.test(firstNum)){
  //   firstNum = firstNum.replace(/[^.\d]/g, "");  можно сделать такую проверку при надобности
  // }
  let exp = Math.floor((firstNum.length - 1 + secondNum.length - 1) / 2);
  firstNum = +firstNum;
  secondNum = +secondNum;
  return (firstNum + secondNum).toFixed(exp); // возможно это не лучший способ, но во всяком случае сохраним точность
}

console.log(sum("0.0000001", "0.000000001"));

export default sum;