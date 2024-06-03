jQuery(document).ready(function() {
  $('.navi>li').mouseover(function() {
    $('.submenu').stop().slideDown(500);
    $('#menu_bg').stop().slideDown(500);
  }).mouseout(function() {
    $('.submenu').stop().slideUp(500);
    $('#menu_bg').stop().slideUp(500);
  });

  setInterval(function() {
    $('.slidelist').delay(1000);
    $('.slidelist').animate({marginTop: -400});
    $('.slidelist').delay(2000);
    $('.slidelist').animate({marginTop: -800});
    $('.slidelist').delay(2000);
    $('.slidelist').animate({marginTop: 0});
    $('.slidelist').delay(2000);
  });

  $(".notice li:first").click(function() {
    $("#layer").addClass("active");
  });
  $(".btn").click(function() {
    $("#layer").removeClass("active");
  });
});

document.addEventListener('DOMContentLoaded', function() {
  // JSON 파일을 불러와 팝업으로 표시하는 함수
  function loadNotice(noticeFile) {
    // 기존 팝업이 있는지 확인
    if (document.querySelector('.popup')) {
      return; // 팝업이 이미 있으면 함수 종료
    }

    fetch(noticeFile)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        console.log(data); // 데이터 확인용
        const popup = document.createElement('div');
        popup.className = 'popup';
        popup.innerHTML = `
          <div class="popup-content">
            <h2>${data.title}</h2>
            <p>${data.content}</p>
            <p>${data.date}</p>
            <button onclick="closePopup()">닫기</button>
          </div>
        `;
        document.body.appendChild(popup);
      })
      .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
      });
  }

  // 팝업 닫기 함수
  window.closePopup = function() {
    const popup = document.querySelector('.popup');
    if (popup) {
      document.body.removeChild(popup);
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

