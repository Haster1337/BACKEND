function uniqueWords(str){
  const arr = str.replace(/[^a-zа-яё\s]/gi, '').toLowerCase().trim().split(" ").filter(item => item !== "");
  const obj = {};
  for(let key of arr){
    obj.hasOwnProperty(key) ? obj[key] += + 1 : obj[key] = 1;
  }
  return obj;
}

// функция не учитывает количество чисел, они не добавляются в массив для подсчета повторений

export default uniqueWords;