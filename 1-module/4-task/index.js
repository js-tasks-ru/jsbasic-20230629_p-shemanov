function checkSpam(str) {
  let capsedString = str.toUpperCase();

  return capsedString.indexOf("1XBET") !== -1 || capsedString.indexOf("XXX") !== -1;
}
