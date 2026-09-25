const swiper = new Swiper('.reviews-swiper', {
    loop: true,
    spaceBetween: 24,
     direction: 'horizontal',

    slidesPerView: 3,
    pagination: { el: '.swiper-pagination', clickable: true },
   
    breakpoints: {
      210: { slidesPerView: 1 },
      760: { slidesPerView: 2 },
      1080: { slidesPerView: 3 }
    }
  });
  (function () {
    var burger = document.querySelector('.burger');
    var menu = document.querySelector('.mobile-menu');
    if (!burger || !menu) return;
    function closeMenu() {
      menu.classList.remove('open');
      burger.classList.remove('active');
      burger.setAttribute('aria-expanded', 'false');
    }
    burger.addEventListener('click', function () {
      var open = menu.classList.toggle('open');
      burger.classList.toggle('active', open);
      burger.setAttribute('aria-expanded', String(open));
    });
    menu.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', closeMenu);
    });
  })();