// swiper js 
window.onload = function(){
  let swiper = new Swiper(".mySwiper", {
    scrollbar: {
      el: ".swiper-scrollbar",
      hide: false,
    },
    effect : 'fade',
    loop : true,
    autoplay : {
      delay:5000,
      disableOnInteraction : true
    },
    speed : 400,
  });
};
