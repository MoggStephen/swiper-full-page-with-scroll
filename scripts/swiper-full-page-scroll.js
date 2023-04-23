//SWIPER CONFIG
const swiper = new Swiper(".swiper", {
  direction: "vertical",
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  //allowTouchMove: false,
  
  //SPEED OF ANIMATION
  speed: 500,
  effect: "slide", //default animation
  //effect: "flip",
  //effect: "cube",
  //effect: "coverflow",
  //effect: "fade",
});
console.log(swiper);

//ADD SCROLL BEHAVIOR TO SWIPER!
let isScrolling = false;
window.addEventListener('wheel', (event) => {
  //Only allow scroll if timeout is finished.
  if(!isScrolling){
    isScrolling = true;

    //deltaY event object used to tell direction of scroll.
    //Returns negative number if downards scroll
    //Returns positive number if upwards scroll
    if(event.deltaY < 0) {
      swiper.slidePrev();
    }
    else if(event.deltaY > 0) {
      swiper.slideNext();
    } 
    
    //Set a timeout that limits the user from scrolling as much as they like.
    setTimeout(() => {isScrolling = false;}, 500);
  }
});