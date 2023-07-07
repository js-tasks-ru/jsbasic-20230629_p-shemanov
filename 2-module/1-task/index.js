function sumSalary(salaries) {
  let sum = 0;

  for (key in salaries){
    if(!Number.isNaN(salaries[key])
      && salaries[key] !== Infinity
      && salaries[key] !== -Infinity
      && typeof salaries[key] === "number"){
      sum += salaries[key];
    }
  }

  return sum;
}
