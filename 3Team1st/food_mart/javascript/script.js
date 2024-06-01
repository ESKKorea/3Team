// JavaScript Document

jQuery(document).ready(function(){

  $('.navi>li').mouseover(function(){
    $('.submenu').stop().slideDown(500);
    $('#menu_bg').stop().slideDown(500);
  }).mouseout(function(){
    $('.submenu').stop().slideUp(500);
    $('#menu_bg').stop().slideUp(500);
  });
  
  setInterval(function(){ 
    $('.slidelist').delay(1000);
    $('.slidelist').animate({marginTop:-400});
    $('.slidelist').delay(2000);
    $('.slidelist').animate({marginTop:-800});
    $('.slidelist').delay(2000);
    $('.slidelist').animate({marginTop:0});
    $('.slidelist').delay(2000);
  });

  $(".notice li:first").click(function(){
    $("#layer").addClass("active");
  });
  $(".btn").click(function(){
    $("#layer").removeClass("active");
  });
  
});

document.addEventListener('DOMContentLoaded', function() {
  var isLoggedIn = false; // 로그인 상태를 false로 초기화

  var loginLink = document.querySelector('.login-link');

  function updateLoginStatus() {
      if (isLoggedIn) {
          loginLink.textContent = '반갑습니다, 고객님'; // 로그인 상태일 때 텍스트 변경
      } else {
          loginLink.textContent = '로그인'; // 로그아웃 상태일 때 텍스트 변경
      }
  }

  updateLoginStatus(); // 페이지 로드 시 로그인 상태에 따라 텍스트 업데이트

  function handleLoginClick() {
      if (isLoggedIn) {
          // 로그아웃 동작 수행
          isLoggedIn = false; // 로그아웃 상태로 변경
          updateLoginStatus(); // 텍스트 업데이트
          // 다른 로그아웃 관련 동작 수행
          // 예를 들어, 세션 정보 삭제 등
          alert('로그아웃 되었습니다.');
      } else {
          // 로그인 페이지로 이동 또는 로그인 창을 열어줄 수 있는 동작 수행
          window.location.href = 'login.html'; // 로그인 페이지로 이동
      }
  }

  // '반갑습니다, 고객님' 문구를 클릭했을 때 handleLoginClick 함수 실행
  loginLink.addEventListener('click', handleLoginClick);
});

const menu_fru = document.querySelector('#menu_fru');

const lists = [
  {
    name: '딸기',
    img: 'strawberry.jpg',
    price: 4500,
  },
  {
    name: '라임',
    img: 'lime.jpg',
    price: 4000,
  },
  {
    name: '망고',
    img: 'mango.jpg',
    price: 5000,
  },
  {
    name: '레몬',
    img: 'lemon.jpg',
    price: 4000,
  },
  {
    name: '무화과',
    img: 'fig.jpg',
    price: 5000,
  },
  {
    name: '사과',
    img: 'apple.jpg',
    price: 4000,
  },
];

for(let i = 0; i < lists.length; i++){
  const {name, img, price} = lists[i];
  const content = `<div><img src="images/${img}" alt=""><h2>${name}</h2><p>${price}원</p></div>`;
  menu_fru.insertAdjacentHTML('beforeend', content);
}

