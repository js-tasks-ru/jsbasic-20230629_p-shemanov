function showSalary(users, age) {
  let resultStr = '';

  for(user of users){
    if(user.age <= age){
      resultStr += resultStr === '' 
                ? `${user.name}, ${user.balance}` 
                : `\n${user.name}, ${user.balance}`;
    }
  }

  return resultStr;
}
