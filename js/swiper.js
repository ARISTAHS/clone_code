// swiper js 
window.onload = function(){
  let swiper = new Swiper(".mySwiper", {
    scrollbar: {
      el: ".swiper-scrollbar",
      hide: true,
    },
    effect : 'fade',
    loop : true,
    autoplay : {
      delay:5000
    },
    speed : 400,
  });
};
