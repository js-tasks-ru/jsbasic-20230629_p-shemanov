function checkSpam(str) {
  let result = false;
  let capsedString = str.toUpperCase();

  if(capsedString.indexOf("1XBET") !== -1 
    || capsedString.indexOf("XXX") !== -1){
    result = true;
  }

  return result;
}
