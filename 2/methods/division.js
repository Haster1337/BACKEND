function division (firstNum, secondNum) {
  // if(/[^a-zа-яё\s]/gi.test(firstNum) && /\d/.test(firstNum)){
  //   firstNum = firstNum.replace(/[^.\d]/g, "");  можно сделать такую проверку при надобности
  // }
  firstNum = +firstNum;
  secondNum = +secondNum;
  let result = firstNum / secondNum;
  let strResult = result.toString();
  if(strResult.includes(".")){
    let index = strResult.indexOf(".");
    return (strResult - index) > 10 ? Math.round(result) : result.toFixed(10)
  }
  return result; // возможно это не лучший способ, но во всяком случае сохраним точность
}

console.log(division("0.524625", "0.000000001"));  // в данном методе все равно остается неточность

export default division;