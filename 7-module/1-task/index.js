import createElement from '../../assets/lib/create-element.js';

export default class RibbonMenu {
  elem = null;

  constructor(categories) {
    this.categories = categories;
    this.elem = this.#render();
  }

  #template(){
    return `
        <div class="ribbon">
          <button class="ribbon__arrow ribbon__arrow_left ribbon__arrow_visible">
            <img src="/assets/images/icons/angle-icon.svg" alt="icon">
          </button>

          <nav class="ribbon__inner">
            ${this.#generateCategories(this.categories)}
          </nav>
          
          <button class="ribbon__arrow ribbon__arrow_right ribbon__arrow_visible">
            <img src="/assets/images/icons/angle-icon.svg" alt="icon">
          </button>
        </div>
    `
  }

  #generateCategories(categories){
    let template = ``

    for(let category of categories){
      template += template === ``
                ? `<a href="#" class="ribbon__item ribbon__item_active" data-id="${category.id}">${category.name}</a>\n`
                : `<a href="#" class="ribbon__item" data-id="${category.id}">${category.name}</a>\n`;
    }

    return template;
  }

  #render(){
    this.elem = createElement(this.#template());

    let leftArrow = this.elem.querySelector('.ribbon__arrow_left');
    leftArrow.classList.remove('ribbon__arrow_visible');

    this.#arrowEvents();
    this.#selectRibbon(this.categories);

    return this.elem;
  }

  #arrowEvents(){
    let leftArrow = this.elem.querySelector('.ribbon__arrow_left');
    let rightArrow = this.elem.querySelector('.ribbon__arrow_right');

    let ribbonInner = this.elem.querySelector('.ribbon__inner');

    leftArrow.addEventListener('click', () => {
      ribbonInner.scrollBy(-350, 0);
      ribbonInner.addEventListener('scroll', () => {
        if(ribbonInner.scrollLeft > 0){
          leftArrow.classList.add('ribbon__arrow_visible');
          rightArrow.classList.add('ribbon__arrow_visible');
        }
        else if(ribbonInner.scrollLeft === 0){
          leftArrow.classList.remove('ribbon__arrow_visible');
        }
      });
    });

    rightArrow.addEventListener('click', () => {
      ribbonInner.scrollBy(350, 0);
      ribbonInner.addEventListener('scroll', () => {
        let scrollWidth = ribbonInner.scrollWidth;
        let clientWidth = ribbonInner.clientWidth;
        let scrollLeft = ribbonInner.scrollLeft;
        let scrollRight = scrollWidth - scrollLeft - clientWidth;
        
        if(scrollRight > 0){
          rightArrow.classList.add('ribbon__arrow_visible');
          leftArrow.classList.add('ribbon__arrow_visible');
        } else if(scrollRight === 0){
          rightArrow.classList.remove('ribbon__arrow_visible');
        } 
      })
    });

  }

  #selectRibbon(categories) {
    for(let category of categories){
      category.addEventListener('click', (event) => {
        event.preventDefault();
        
        let previousActive = category.closest('.ribbon__item_active');
        previousActive.classList.remove('ribbon__item_active');
        category.classList.add('ribbon__item_active');
      });
    }
  }

}

document.body.addEventListener('select-ribbon', (customEvent) => {
  console.log(customEvent);
})