function truncate(str, maxlength) {
  let result = str;
  
  if(str.length > maxlength){
    result = str.slice(0, maxlength - str.length - 1) + "…";
  }

  return result;
}
