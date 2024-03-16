// function debounce(clbk, interval) {
//   let prevCall = Date.now();
//   return function () {
//     const currentCall = Date.now();
//     if (currentCall - prevCall > interval) {
//       clbk();
//     }
//     prevCall = currentCall;
//   };
// }

function debounce(clbk, timeout) {
  let timer;
  return function () {
    clearTimeout(timer);
    timer = setTimeout(clbk, timeout);
  };
}

$(document).ready(function () {
  $(window)
    .on(
      'resize',
      debounce(function () {
        const slick = $('.slick');
        if ($(window).width() <= 1200) {
          if (!slick.hasClass('slick-initialized')) {
            slick.slick({
              infinite: false,
              slidesToShow: 1,
              dots: true,
              draggable: false,
            });
          }
        } else {
          if (slick.hasClass('slick-initialized')) {
            slick.slick('unslick');
          }
        }
      }, 100),
    )
    .trigger('resize');
});
