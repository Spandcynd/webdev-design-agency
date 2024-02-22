(function () {
  $('.slick').slick({
    slidesToShow: 5,
    infinite: true,
    responsive: [
      {
        breakpoint: 992 + 1,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 770 + 1,
        settings: {
          centerMode: true,
          centerPadding: '50px',
          slidesToShow: 2,
        },
      },
    ],
  });
})();
