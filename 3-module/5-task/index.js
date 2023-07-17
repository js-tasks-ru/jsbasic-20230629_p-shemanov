function getMinMax(str) {
  let arr = str.split(' ');

  for(let i = 0; i < arr.length; i++){
    if(+arr[i] != arr[i]){
      arr.splice(i, 1);
      i--;
    }
  }

  arr.sort( (a, b) => a - b );

  return {
    min: +arr[0],
    max: +arr.at(-1)
  }
}