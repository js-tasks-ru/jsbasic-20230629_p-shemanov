import createElement from '../../assets/lib/create-element.js';

export default class Modal {
  constructor() {
    this.elem = this.#render();
  }

  #template(){
    return `
      <div class="container">
        <div class="modal">
          <div class="modal__overlay"></div>
  
          <div class="modal__inner">
            <div class="modal__header">
              <button type="button" class="modal__close">
                <img src="/assets/images/icons/cross-icon.svg" alt="close-icon" />
              </button>
  
              <h3 class="modal__title"></h3>
            </div>
  
            <div class="modal__body"></div>
          </div>
        </div>
      </div>
    `
  }

  #render(){
    this.elem = createElement(this.#template());
    this.#buttonsClose();

    return this.elem;
  }
  
  open(){
    document.body.classList.add('is-modal-open');
    document.body.append(this.elem); 
  }

  setTitle(header){
    let title = this.elem.querySelector('.modal__title');
    title.innerHTML = header;
  }

  setBody(node){
    let body = this.elem.querySelector('.modal__body');
    body.innerHTML = node;
  }

  #escapeFunction = (event) =>{
    if(event.code === 'Escape'){
      document.body.classList.remove('is-modal-open');
    }
  }

  #buttonsClose(){
    document.body.addEventListener('keydown', this.#escapeFunction(), {once: true});

    let button = this.elem.querySelector('.modal__close');
    button.addEventListener('click', () => {
      document.body.classList.remove('is-modal-open');
      document.body.removeEventListener('keydown', this.#escapeFunction());
    });
  }

  close(){
    document.body.classList.remove('is-modal-open');
    document.body.removeEventListener('keydown', this.#escapeFunction());
  }
}
