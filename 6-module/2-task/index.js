function createElement(template) {
  const tmp = document.createElement('div');
  tmp.innerHTML = template;
  return tmp.firstElementChild;
}

export default class ProductCard {
  elem = null;

  constructor(product) {
    this.name = product.name;
    this.price = product.price;
    this.category = product.category;
    this.image = product.image;
    this.id = product.id;

    this.elem = this.#render();
  }

  #template(){
    return `
      <div class="card">
        <div class="card__top">
          <img src="/assets/images/products/${this.image}" class="card__image" alt="product">
          <span class="card__price">€${this.price.toFixed(2)}</span>
        </div>
        <div class="card__body">
          <div class="card__title">${this.name}</div>
          <button type="button" class="card__button">
            <img src="/assets/images/icons/plus-icon.svg" alt="icon">
          </button>
        </div>
      </div>
    `
  }

  #render(){
    this.elem = createElement(this.#template());
    this.elem.addEventListener('click', (event) => {
      let target = event.target;
      if(target.tagName === "BUTTON"){
        const customEvent = new CustomEvent('product-add', {
          detail: this.id,
          bubbles: true
        });

        this.elem.dispatchEvent(customEvent);
      }
    })

    return this.elem;
  }

}

document.body.addEventListener('product-add', (customEvent) => {
  console.log(customEvent);
})