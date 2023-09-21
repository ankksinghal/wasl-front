$(document).ready(function() {

  var owl = $('#home-slider');
  owl.owlCarousel({
      items: 1,
      loop: true,
      margin: 39,
      nav:false,
      autoplay: true,
      autoplayTimeout: 3000,
      autoplayHoverPause: true,
      animateOut: 'fadeOut', 
      animateIn: 'fadeIn',
  });

  $('.search-icon').click(function () {
    $(this).hide();
    $('.search-input-section').toggle();
    $('.search-input-section input').focus(); // Focus on the input field when shown
  });
  // Close search input when clicking outside
  $(document).on('click', function (event) {
    if (!$(event.target).closest('.test').length) {
        $('.search-input-section').hide();
        $('.search-icon').show();
    }
  });

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
   // Toggle the mobile menu when the menu button is clicked
   $(".mobile-menu").click(function () {
    $("#responsive-nav").slideToggle();
  });
  
  $("#advanced-filters").click(function(){
    $(".advanced-filters-box").toggleClass("view");
    $("#advanced-filters").toggleClass("rotate");
  });

  $("#quicklinks").click(function(){
    $("#footer-below-section").toggleClass("view");
    $("#quicklinks").toggleClass("rotate");
  });

  $(function(){  
    var tab = $('.tab-list .tabButton'),
    content= $('.tabsContent .tabContent');
    tab.filter(':first').addClass("active");
    content.filter(':first').addClass("active").show();
    tab.click(function () { 
        var indis = $(this).index();
        tab.removeClass('active').eq(indis).addClass("active");
        content.removeClass("active").hide().eq(indis).addClass("active").show();
        return false;
    })
  });

  // Search page tab

  $('.tab-content').hide(); // Hide all tab content initially
  $('.tab-content:first').show(); // Show the first tab content by default
  $('.tab-links li:first').addClass('active'); // Make the first tab active by default

  $('.tab-links a').on('click', function(e) {
    e.preventDefault();
    var target = $(this).attr('href');

    $('.tab-content').hide();
    $(target).show();

    $('.tab-links li').removeClass('active');
    $(this).parent('li').addClass('active');
  });

});