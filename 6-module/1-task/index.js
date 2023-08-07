/**
 * Компонент, который реализует таблицу
 * с возможностью удаления строк
 *
 * Пример одного элемента, описывающего строку таблицы
 *
 *      {
 *          name: 'Ilia',
 *          age: 25,
 *          salary: '1000',
 *          city: 'Petrozavodsk'
 *      }
 *
 */

function createElement(template) {
  const tmp = document.createElement('div');
  tmp.innerHTML = template;
  return tmp.firstElementChild;
}

export default class UserTable {
  elem = null;

  #list = [];

  constructor(rows) {
    this.#list = Array.from(rows) || this.#list;
    this.elem = this.#render();
  }

  #template(){
    return `
          <table>
            <thead>
              <tr>
                <th>Имя</th>
                <th>Возраст</th>
                <th>Зарплата</th>
                <th>Город</th>
                <th></th>
              </tr>
            </thead>
            <tbody> 
              ${
                this.#buildRows(this.#list)
              }
            </tbody>
          </table>
          `
  }

  #buildRows(rows){
    let rowsTemplate = ``;

    for(let row of rows){
      rowsTemplate += `<tr>`;

      for(let key in row){
        rowsTemplate += `<td>${row[key]}</td>`;
      }

      rowsTemplate += `<td><button>X</button></td>`;
      rowsTemplate += `</tr>`;
    }

    return rowsTemplate;
  }

  #render(){
    this.elem = createElement(this.#template());
    
    let rows = Array.from(this.elem.querySelectorAll('tr'));

    for(let row of rows){
      row.addEventListener('click', function(event) {
        let target = event.target;
        if(target.tagName === 'BUTTON'){
          row.remove();
        }
      })
    }

    return this.elem;
  }
}
