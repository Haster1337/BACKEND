function capitalize(str){
  let newStr = str.toLowerCase().split("");
  newStr[0] = newStr[0].toUpperCase();
  return newStr.join("");
}

export default capitalize;