window.onload = function(){

  // swiper js 
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

  // 카카오 map API 
  kakao.maps.load(function() {
    let container = document.getElementById(`club_map`);
    let option = {
      center : new kakao.maps.LatLng(37.502047 , 127.107505),
      level : 3
    };
    let club_map = new kakao.maps.Map(container, option);

    // 지도에 마커 표시
    let markerPoint = new kakao.maps.LatLng(37.502047 , 127.107505);
    let marker = new kakao.maps.Marker({
      // 마커 생성 
      position : markerPoint
    });
    // 마커 지도 위 표시.
    marker.setMap(club_map);
  });




};
