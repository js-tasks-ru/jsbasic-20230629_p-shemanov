function makeFriendsList(friends) {
  let listTemplate = document.createElement('ul');

  for(let obj of friends){
    let listElementTemplate = document.createElement('li');
    listElementTemplate.textContent = `${obj.firstName} ${obj.lastName}`;
    listTemplate.append(listElementTemplate);
  }

  return listTemplate;
}
