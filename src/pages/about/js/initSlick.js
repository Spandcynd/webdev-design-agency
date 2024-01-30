$('.slick').slick({
  slidesToShow: 3,
  infinite: false,
  responsive: [
    {
      breakpoint: 992 + 1,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 770 + 1,
      settings: {
        centerMode: true,
        centerPadding: '50px',
        slidesToShow: 1,
      },
    },
  ],
});
