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

document.addEventListener("DOMContentLoaded", function() {
  // 할인상품 링크 클릭 시 팝업 열기
  document.getElementById("discount-link").addEventListener("click", function(event) {
    event.preventDefault();
    openPopup("discount-popup");
  });
});

function openPopup(popupId) {
  var popup = document.getElementById(popupId);
  if (popup) {
    popup.style.display = "block";
  }
}

function closePopup(popupId) {
  var popup = document.getElementById(popupId);
  if (popup) {
    popup.style.display = "none";
  }
}
