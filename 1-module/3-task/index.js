function ucFirst(str) {
  let result = '';

  if(str && str !== ''){
    const firstLetter = str[0].toUpperCase();
    let secondPart = str.slice(1);
    result = firstLetter + secondPart;
  }

  return result;
}
