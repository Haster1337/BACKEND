import sum from "./methods/sum";
import subtraction from "./methods/subtraction";
import multiply from "./methods/multiply";
import division from "./methods/division";

const sumOfNum = sum("100", "100");
const subtract = subtraction("100", "120");
const multiplying = multiply("250", "4520");
const div = division("3000", "60")

//конечно, можно было использовать везде eval, но тоже неплохо :)

console.log(sumOfNum, subtract, multiplying, div);