function ucFirst(str) {
  if(str){
    const firstLetter = str[0].toUpperCase();
    let secondPart = str.slice(1);
    return firstLetter + secondPart;
  }

  return '';
}
