window.onload = function(){

  // intro
  const int = document.getElementById('intro');
  console.log('Intro element:', int); // int 콘솔 확인

  setTimeout(function() {
    console.log('Timeout executed'); // 시간 체크 콘솔 확인
    int.classList.add('hidden');
  }, 3000); // 3초 유지 후 전환 


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

  // top 이동 버튼
  const Btn = document.querySelector(`footer .topBtn`);
  console.log('Btn 확인');
  Btn.onclick = () =>{
    window.scrollTo({
      top : 0,
      behavior : "smooth"
    });
  };


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
