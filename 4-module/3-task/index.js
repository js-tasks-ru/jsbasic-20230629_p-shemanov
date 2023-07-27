function highlight(table) {
  let tableLines = table.querySelectorAll('tbody tr');

  for (let line of tableLines){

    if(line.children[3].dataset.available === undefined){
      line.hidden = true;
    } 
    else if(line.children[3].dataset.available === "true"){
        line.classList.add('available')
    } 
    else if(line.children[3].dataset.available === "false"){
        line.classList.add('unavailable');
    }

    if(line.children[2].textContent === 'm'){
        line.classList.add('male');
    }
    else if(line.children[2].textContent === 'f'){
        line.classList.add('female');
    }

    if(+line.children[1].textContent < 18){
      line.style.textDecoration = 'line-through';
    }
  }
}
