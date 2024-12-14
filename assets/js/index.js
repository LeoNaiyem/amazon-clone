// owl carousel js code
$(".owl-carousel").owlCarousel({
  autoplayTimeout: 2000,
  autoplayHoverPause: true,
  autoplay: true,
  loop: true,
  margin: 10,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 2,
    },
    1000: {
      items: 6,
    },
  },
});
