function urlDecoder(url) {
  const stringKeys = ["contains", "starts", "ends"];
  const numberKeys = ["<", "<=", "=", ">", ">="];
  const objectKeys = ["name", "price", "quantity", "description"];

  const infoArr = url.split("&").map(item => item.split("-"));
  const productObj = {};

  infoArr.map(arr => objectKeys.map(item => {
    if(arr[0] === item){
      productObj[arr[0]] = {};  // создаем из ключей objectKeys объекты
    }
  }));

  infoArr.map(arr => stringKeys.map(value => {
      if(arr[1] === value) {
        productObj[arr[0]][value] = arr[2];       // добавляем значения для строковых ключей
      }
  }));

  infoArr.map(arr => arr.map(string => numberKeys.map(key => {  // добавляем значения для числовых
    if(string.includes(key)){
      productObj[arr[0]].value = string.replace(key, "");       // само значение
      productObj[arr[0]].operation = key;                       // операция над ней
    }
  })));

  objectKeys.map(item => this[item] = productObj[item]);
  return productObj;
}

console.log(urlDecoder("name-starts-fd&quantity-=5"));
console.log(urlDecoder("name-contains-fd&price-=2&quantity->5&description-ends-abc"));

export default urlDecoder;