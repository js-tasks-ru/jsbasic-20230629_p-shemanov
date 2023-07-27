function initCarousel() {
  let rightArrow = document.querySelector('.carousel__arrow_right');
  let leftArrow = document.querySelector('.carousel__arrow_left');
  let arrows = document.querySelectorAll('.carousel__arrow');
  let carouselInner = document.querySelector('.carousel__inner');
  let counter = 0;
  let slideWidth = document.querySelector('.carousel__inner').offsetWidth;

  leftArrow.style.display = 'none';

  rightArrow.addEventListener('click', function(){
    counter++;
    let shift = 'translateX(-' + counter * slideWidth + 'px)';
    carouselInner.style.transform = shift;
  });

  leftArrow.addEventListener('click', function(){
    --counter;
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
