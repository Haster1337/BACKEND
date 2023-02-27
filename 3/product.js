import urlDecoder from "./methods/urlDecoder.js"

class Product {
  constructor(name, price, quantity, description, object) {
    this.name = name;
    this.price = price;
    this.quantity = quantity;
    this.description = description;
  }
  decode = urlDecoder;
}

// создаем элементы класса Product и заполняем ими массив
function addProduct(name, price, quantity, description){
  return new Product(name, price, quantity, description);
}
const decoder = new Product();

const products = [
  addProduct({contains: "toothbrush"}, {value: 2, operation: "<="},
    {value: 3, operation: "<"}, {ends: "abc"}),

  addProduct({contains: "soap"}, {value: 2, operation: "<"},
    {value: 5, operation: ">="}, {ends: "opk"})
];

decoder.decode("name-contains-redBull&price-=10&quantity->150&description-ends-death")

console.log(...products, decoder);
