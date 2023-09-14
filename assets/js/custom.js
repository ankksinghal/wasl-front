$(document).ready(function() {
  var owl = $('#owl-residential');
  owl.owlCarousel({
      items: 3,
      loop: true,
      margin: 39,
      nav:true,
      autoplay: true,
      autoplayTimeout: 3000,
      autoplayHoverPause: true,
      responsive: {
          0: {
            items: 1
          },
          600: {
            items: 2
          },
          1000: {
            items: 3
          }
      }
  });
  var owl = $('#owl-commercial');
  owl.owlCarousel({
      items: 3,
      loop: true,
      margin: 39,
      nav:true,
      autoplay: true,
      autoplayTimeout: 3000,
      autoplayHoverPause: true,
      responsive: {
          0: {
            items: 1
          },
          600: {
            items: 2
          },
          1000: {
            items: 3
          }
      }  
  });
  
  
  $("#advanced-filters").click(function(){
      $("#advanced-filters-box").toggleClass("view");
      $("#advanced-filters").toggleClass("rotate");
  });
});