$(".package-slider").owlCarousel({
  loop: true,
  margin: 10,
  nav: true,
  navContainer: ["#package-carousel-nav"],
  navText: [$("#package-nav-left"), $("#package-nav-right")],
  dots: false,
  autoplay: true,
  autoplayTimeout: 3000,
  autoplaySpeed: 1500,
  autoplayHoverPause: true,
  responsive: {
    0: {
      items: 1,
    },
    769: {
      items: 2,
    },
    992: {
      items: 3,
    },
    1441: {
      items: 4,
    },
  },
});
