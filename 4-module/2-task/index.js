function makeDiagonalRed(table) {
  const tableLines = table.querySelectorAll('tr');

  for(let i = 0; i < tableLines.length; i++){
    tableLines[i].cells[i].style.backgroundColor = "red";
  }
}
