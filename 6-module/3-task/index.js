import createElement from '../../assets/lib/create-element.js';

export default class Carousel {
  elem = null;

  constructor(slides) {
    this.slides = slides;

    this.elem = this.#render();
  }

  #template(){
    return `
      <div class="carousel">
        <div class="carousel__arrow carousel__arrow_right">
          <img src="/assets/images/icons/angle-icon.svg" alt="icon">
        </div>
        <div class="carousel__arrow carousel__arrow_left">
          <img src="/assets/images/icons/angle-left-icon.svg" alt="icon">
        </div>
        <div class="carousel__inner">
          ${this.#buildSlides()}
        </div>
      </div>
    `
  }

  #render(){
    this.elem = createElement(this.#template());

    let target;

    for(let slide of this.slides){
      this.elem.addEventListener('click', (event) => {
        target = event.target;
  
        if(target.tagName === "BUTTON"){
          const customEvent = new CustomEvent("product-add", {
            detail: slide.id,
            bubbles: true
          });

          target.dispatchEvent(customEvent);
        }
      });

      this.#buildSlides();
    }

    this.#countSliderMoves(this.elem);
    
    return this.elem;
  }

  #buildSlides(){
    let template = '';

    for(let slide of this.slides){
      template += `<div class="carousel__slide" data-id="${slide.id}">\n`;
      template += `<img src="/assets/images/carousel/${slide.image}"
                    <div class="carousel__caption">
                      <span class="carousel__price">€${slide.price.toFixed(2)}</span>
                      <div class="carousel__title">${slide.name}</div>
                      <button type="button" class="carousel__button">
                        <img src="/assets/images/icons/plus-icon.svg" alt="icon">
                      </button>
                    </div>
                    </div>\n
      `;

    }

    return template;
  }

  #countSliderMoves(elem){
    let rightArrow = elem.querySelector('.carousel__arrow_right');
    let leftArrow = elem.querySelector('.carousel__arrow_left');
    let arrows = elem.querySelectorAll('.carousel__arrow');
    let carouselInner = elem.querySelector('.carousel__inner');
    let counter = 0;
    let slideWidth = carouselInner.offsetWidth;
  
    leftArrow.style.display = 'none';
  
  rightArrow.addEventListener('click', function(){
    counter++;
    let shift = 'translateX(-' + counter * slideWidth + 'px)';
    carouselInner.style.transform = shift;
  });
  
  leftArrow.addEventListener('click', function(){
    counter--;
    let shift = 'translateX(-' + counter * slideWidth + 'px)';
    carouselInner.style.transform = shift;
  });
  
  arrows.forEach((arrow) => {
    arrow.addEventListener('click', function(){
      if(counter === 0){
        leftArrow.style.display = 'none';
      } else if(counter < carouselInner.children.length - 1){
        rightArrow.style.display = 'flex';
        leftArrow.style.display = 'flex';
      }
      else{
        rightArrow.style.display = 'none'
      }
    })
  });
  }
}

  document.body.addEventListener('product-add', (customEvent) => {
    console.log(customEvent);
  })