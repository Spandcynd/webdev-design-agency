// function testWebP(callback) {
//   var webP = new Image();
//   webP.onload = webP.onerror = function () {
//     callback(webP.height === 2);
//   };
//   webP.src =
//     'data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA';
// }

// testWebP(function (support) {
//   if (support === true) {
//     document.querySelector('body').classList.add('webp');
//   } else {
//     document.querySelector('body').classList.add('no-webp');
//   }
// });

const bodyNode = document.querySelector('body');
const toggleBordersNode = document.getElementById('toggle-borders');

toggleBordersNode.addEventListener('click', e => {
  bodyNode.classList.toggle('borders');
});

const button = document.querySelector('.header__toggle-burger');
const burgerNav = document.querySelector('.header__burger-nav');

button.addEventListener('click', () => {
  burgerNav.classList.toggle('header__burger-nav_unfolded');
});

burgerNav.addEventListener('click', e => {
  if (e.target.closest('.header__burger-li')) {
    console.log('True');
  } else {
    burgerNav.classList.toggle('header__burger-nav_unfolded');
  }
});

$('.slick').slick({
  slidesToShow: 3,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 770,
      setting: {
        slidesToShow: 1,
      },
    },
  ],
});
