function wordsCount(str){
  const arr = str.replace(/[^a-zа-яё\s]/gi, '').split(" ").filter(item => item !== "");
  console.log(arr);
  return arr.length;
}

export default wordsCount;