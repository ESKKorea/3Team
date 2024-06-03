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

  // 공지사항 클릭 이벤트 리스너 추가
  const noticeLinks = document.querySelectorAll('.notice-link');
  noticeLinks.forEach(link => {
    link.addEventListener('click', (event) => {
      event.preventDefault(); // 기본 동작 방지
      const noticeFile = link.getAttribute('data-notice');
      loadNotice(noticeFile);
    });
  });
});