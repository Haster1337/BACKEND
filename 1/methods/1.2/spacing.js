const REGEXP = /[^a-zа-яё\s]/gi;

function spacing(str){
  let arr = str.trim().split(" ").filter(item => item !== "");
  let newArr = filterArray(arr);
  let newStr = "";
  for(let i = 0; i < newArr.length; i++){
    if(REGEXP.test(newArr[i])){
      newStr = newStr.trimEnd();
      newStr += newArr[i] + " ";
    } else {
      newStr += newArr[i] + " ";
    }
  }
  return newStr;
}
// простая фильтрация, разделяем слова от знаков препинания
function filterArray(arr){
  for(let i = 0; i < arr.length; i++){
    if(REGEXP.test(arr[i])){  // если в элементе массива присутствует знак препинания(любой символ кроме букв)
      let test = arr[i].match(REGEXP).join("");
      let tempArr = arr[i].split(REGEXP);
      tempArr.splice(1, 0, test);
      arr.splice(i, 1, tempArr);
    }
  }
  let newArr = [];
  // из-за того, что массив принял вид ['Вот', 'пример', Array(3), 'которой', 'используются', 'знаки' ...]
  // мы создаем новый массив и перезаписываем значения в него и, если встречается вложенный массив, то
  // раскрываем его и его значения добавляем в новый.
  for(let i = 0; i < arr.length; i++){
    if(typeof arr[i] !== "string"){
      for(let j = 0; j < arr[i].length; j++){
        if(arr[i][j] !== ""){
          newArr.push(arr[i][j]);
        }
      }
    } else {
      newArr.push(arr[i]);
    }
  }
  return newArr.filter(item => item !== ""); // убираем лишние пробелы, которые заменились ""
}

console.log(spacing(`Вот пример строки,в которой     используются знаки препинания.После знаков должны стоять пробелы , 
а перед знаками их быть не должно .    Если есть лишние подряд идущие пробелы, они должны быть устранены.`))

export default spacing;