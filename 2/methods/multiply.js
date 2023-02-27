function multiply (firstNum, secondNum) {
  // if(/[^a-zа-яё\s]/gi.test(firstNum) && /\d/.test(firstNum)){
  //   firstNum = firstNum.replace(/[^.\d]/g, "");  можно сделать такую проверку при надобности
  // }
  let exp = 0;
  if(firstNum.includes(".") || secondNum.includes(".")){
    exp = 20;
  }
  firstNum = +firstNum;
  secondNum = +secondNum;
  return (firstNum * secondNum).toFixed(exp); // возможно это не лучший способ, но во всяком случае сохраним точность
}

console.log(multiply("0.0000001", "0.000000001"));

export default multiply;