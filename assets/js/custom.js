$(document).ready(function () {
  var owl = $("#home-slider");
  owl.owlCarousel({
    items: 1,
    loop: true,
    margin: 39,
    nav: false,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    animateOut: "fadeOut",
    animateIn: "fadeIn",
  });

  var owl = $("#buy-slider");
  owl.owlCarousel({
    items: 1,
    loop: true,
    margin: 39,
    nav: false,
    autoplay: true,
    dots: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    animateOut: "fadeOut",
    animateIn: "fadeIn",
  });

  $(".show-password, .hide-password").on("click", function () {
    var passwordId = $(this).parents("div:first").find("input").attr("id");
    if ($(this).hasClass("show-password")) {
      $("#" + passwordId).attr("type", "text");
      $(this).parent().find(".show-password").hide();
      $(this).parent().find(".hide-password").show();
    } else {
      $("#" + passwordId).attr("type", "password");
      $(this).parent().find(".hide-password").hide();
      $(this).parent().find(".show-password").show();
    }
  });

  // Search Filter
  $(".search-filter").click(function () {
    $(".left-side-bar-filters, body").addClass("modal");
  });

  $(".close-icon").click(function () {
    $(".left-side-bar-filters, body").removeClass("modal");
  });

  $('#radio-switch input[type="radio"]').click(function () {
    var inputValue = $(this).attr("value");
    var targetBox = $("." + inputValue);
    $(".inputBox").not(targetBox).hide();
    $(targetBox).show();
  });

  $(".search-icon").click(function () {
    $(this).hide();
    $(".search-input-section").toggle();
    $(".search-input-section input").focus();
  });

  // Close search input when clicking outside
  $(document).on("click", function (event) {
    if (!$(event.target).closest(".test").length) {
      $(".search-input-section").hide();
      $(".search-icon").show();
    }
  });

  var owl = $("#owl-residential");
  owl.owlCarousel({
    items: 3,
    loop: true,
    margin: 39,
    nav: true,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 3,
      },
    },
  });
  var owl = $("#owl-commercial");
  owl.owlCarousel({
    items: 3,
    loop: true,
    margin: 39,
    nav: true,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 3,
      },
    },
  });

  var owl = $("#owl-buying-thumb");
  owl.owlCarousel({
    items: 6,
    loop: true,
    margin: 39,
    nav: false,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    dots:true,
    responsive: {
      0: {
        items: 2,
      },
      600: {
        items: 3,
      },
      1000: {
        items: 6,
      },
    },
  });

  var owl = $("#owl-near-thumb");
  owl.owlCarousel({
    items: 7,
    loop: false,
    margin: 39,
    nav: false,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    dots:true,
    responsive: {
      0: {
        items: 2,
      },
      600: {
        items: 3,
      },
      1000: {
        items: 7,
      },
    },
  });

  var owl = $("#owl-prtoj-thumb");
  owl.owlCarousel({
    items: 3,
    loop: true,
    margin: 22,
    center: true,
    nav: false,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    dots:true,
    responsive: {
      0: {
        items: 2,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 3,
      },
    },
  });

  // Toggle the mobile menu when the menu button is clicked

  $(".mobile-menu").click(function () {
    $("#responsive-nav").addClass("slide");
    $(".overlay").addClass("slide");
    $("body").addClass("slide");
  });
  $(".close-nav").click(function () {
    $("#responsive-nav").removeClass("slide");
    $(".overlay").removeClass("slide");
    $("body").removeClass("slide");
  });

  $(".overlay").click(function () {
    $("#responsive-nav").removeClass("slide");
    $(".overlay").removeClass("slide");
    $("body").removeClass("slide");
  });

  $("#advanced-filters").click(function () {
    $(".advanced-filters-box").toggleClass("view");
    $("#advanced-filters").toggleClass("rotate");
  });

  $("#quicklinks").click(function () {
    $("#footer-below-section").toggleClass("view");
    $("#quicklinks").toggleClass("rotate");
  });

  $("#pointsTo").click(function () {
    $("#lable-list").toggleClass("view");
    $("#pointsTo img").toggleClass("rotate");
  });

  $(function () {
    var tab = $(".tab-list .tabButton"),
      content = $(".tabsContent .tabContent");
    tab.filter(":first").addClass("active");
    content.filter(":first").addClass("active").show();
    tab.click(function () {
      var indis = $(this).index();
      tab.removeClass("active").eq(indis).addClass("active");
      content.removeClass("active").hide().eq(indis).addClass("active").show();
      return false;
    });
  });

  // Seach filter
  $("#type .without-label li").on("click", function (e) {
    var tagValue = $(this).text();
    $("#type label").text(tagValue);
  });
  $("#community .without-label li").on("click", function (e) {
    var tagValue = $(this).text();
    $("#community label").text(tagValue);
  });
  $("#areaselect .without-label li").on("click", function (e) {
    var tagValue = $(this).text();
    $("#areaselect label").text(tagValue);
  }); 
  $("#areaselectmax .without-label li").on("click", function (e) {
    var tagValue = $(this).text();
    $("#areaselectmax label").text(tagValue);
  }); 
  $("#prage-max .without-label li").on("click", function (e) {
    var tagValue = $(this).text();
    $("#prage-max label").text(tagValue);
  }); 
  $("#prage-min .without-label li").on("click", function (e) {
    var tagValue = $(this).text();
    $("#prage-min label").text(tagValue);
  }); 
  // $(".customSelectBox .without-label li").on("click", function (e) { 
  //   var tagValue = $(this).text();
  //   $(this).closest('.customSelectBox').find("label").text(tagValue); 
  // });

  // Search page tab
  $(".tab-content").hide();
  $(".tab-content:first").show();
  // $(".tab-links li:first").addClass("active");

  $(".tab-links a").on("click", function (e) {
    e.preventDefault();
    var target = $(this).attr("href");

    $(".tab-content").hide();
    $(target).show();

    $(".tab-links li").removeClass("active");
    $(this).parent("li").addClass("active");
  });



  // Search page tab
  $(".tab-content-plans").hide();
  $(".tab-content-plans:first").show();
  // $(".tab-links li:first").addClass("active");

  $(".tab-links-plans a").on("click", function (e) {
    e.preventDefault();
    var target = $(this).attr("href");

    $(".tab-content-plans").hide();
    $(target).show();

    $(".tab-links-plans li").removeClass("active");
    $(this).parent("li").addClass("active");
  });


  // Search page tab
  $(".tab-content-offering").hide();
  $(".tab-content-offering:first").show();
  // $(".tab-links li:first").addClass("active");

  $(".tab-links-offering a").on("click", function (e) {
    e.preventDefault();
    var target = $(this).attr("href");

    $(".tab-content-offering").hide();
    $(target).show();

    $(".tab-links-offering li").removeClass("active");
    $(this).parent("li").addClass("active");
  });

  // Modal script

  $("[data-csModal]").on("click", function () {
    let modalId = $(this).attr("data-csModal");
    $("#" + modalId + "").addClass("show");
  });
  $(".cs_modal_close").on("click", function () {
    $(".cs_modal").removeClass("show");
  });



  // =========About us===============
  $('.multipleSelect').fastselect();

});
// ========About Page Slider==============
 


// Remove class

$(function () {
  $(".form-cols-out").on("click", function (e) {
    $(this).children().toggleClass("show");
    $(this).siblings().children().removeClass("show");
    e.stopPropagation();
  });
  $(document).on("click", function (e) {
    if ($(e.target).is(".custom-dropdown") === false) {
      $(".custom-dropdown").removeClass("show");
    }
  });
});

$("#checkall:checkbox").change(function () {
  if ($(this).prop("checked")) {
    $(".custom-dropdown.show input:checkbox").prop("checked", true);
  } else {
    $(".custom-dropdown.show input:checkbox").prop("checked", false);
  }
});

// Search page
$(".search-content").hide();
$(".search-content:first").show();
// $('.search-filter-view a:first').addClass('active');
$(".search-filter-view a").on("click", function (e) {
  e.preventDefault();
  var target = $(this).attr("href");
  $(".search-content").hide();
  $(target).show();
  $(".search-filter-view a").removeClass("active");
  $(this).addClass("active");
});

// Enquiry forms
$(function () {
  $("#selectHere").on("click", function (e) {
    $(this).toggleClass("show");
    e.stopPropagation();
  });
  $(document).on("click", function (e) {
    if ($(e.target).is("#selectHere") === false) {
      $("#selectHere").removeClass("show");
    }
  });
});
$("#selectHere .without-label li").on("click", function (e) {
  var tagValue = $(this).text();
  $("#selectHere label").text(tagValue);
});

// Enquiry forms
$(function () {
  $("#area-code").on("click", function (e) {
    $(this).toggleClass("show");
    e.stopPropagation();
  });
  $(document).on("click", function (e) {
    if ($(e.target).is("#selectHere") === false) {
      $("#selectHere").removeClass("show");
    }
  });
});
$("#area-code .without-label li").on("click", function (e) {
  var tagValue = $(this).text();
  $("#area-code label").text(tagValue);
});

// =========Input Type File========
function displayFileName(input) {
  const fileInput = document.getElementById("fileInput");
  const uploadedFileName = document.getElementById("uploadedFileName");
  if (fileInput.files.length > 0) {
    const fileName = fileInput.files[0].name;
    uploadedFileName.textContent = `${fileName}`;
  } else {
    uploadedFileName.textContent = "";
  }
}
// =========About Us tabbing=============
// Show the first tab and hide the rest
$("#cs_tab_nav li:first-child").addClass("active");
$(".tab_card_box").hide();
$(".tab_card_box:first").show();

// Click function
$("#cs_tab_nav li").click(function () {
  $("#cs_tab_nav li").removeClass("active");
  $(this).addClass("active");
  $(".tab_card_box").hide();

  var activeTab = $(this).find("a").attr("href");
  $(activeTab).fadeIn();
  $(".about_slider").owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    items: 1,
  });
  return false;
});
// =========About us===============
 
  var bigimage = $("#about_sec_slider");
  var thumbs = $("#about_sec_slider_thumb"); 
  //var totalslides = 10;
  var syncedSecondary = true;

  bigimage
    .owlCarousel({
    items: 1,
    slideSpeed: 2000,
    nav: false,
    autoplay: true,
    dots: false, 
    loop: true,
    responsiveRefreshRate: 200,
    navText: [
      '<i class="fa fa-arrow-left" aria-hidden="true"></i>',
      '<i class="fa fa-arrow-right" aria-hidden="true"></i>'
    ]
  })
    .on("changed.owl.carousel", syncPosition);

  thumbs
    .on("initialized.owl.carousel", function() {
    thumbs
      .find(".owl-item")
      .eq(0)
      .addClass("current");
  })
    .owlCarousel({
    items: 4,
    dots: false, 
    nav: true,
    navText: [
      '<i class="fa fa-arrow-left" aria-hidden="true"></i>',
      '<i class="fa fa-arrow-right" aria-hidden="true"></i>'
    ],
    smartSpeed: 200,
    slideSpeed: 500,
    slideBy: 4,
    responsiveRefreshRate: 100
  })
    .on("changed.owl.carousel", syncPosition2);

  function syncPosition(el) {
    //if loop is set to false, then you have to uncomment the next line
    //var current = el.item.index;

    //to disable loop, comment this block
    var count = el.item.count - 1;
    var current = Math.round(el.item.index - el.item.count / 2 - 0.5);

    if (current < 0) {
      current = count;
    }
    if (current > count) {
      current = 0;
    }
    //to this
    thumbs
      .find(".owl-item")
      .removeClass("current")
      .eq(current)
      .addClass("current");
    var onscreen = thumbs.find(".owl-item.active").length - 1;
    var start = thumbs
    .find(".owl-item.active")
    .first()
    .index();
    var end = thumbs
    .find(".owl-item.active")
    .last()
    .index();

    if (current > end) {
      thumbs.data("owl.carousel").to(current, 100, true);
    }
    if (current < start) {
      thumbs.data("owl.carousel").to(current - onscreen, 100, true);
    }
  }

  function syncPosition2(el) {
    if (syncedSecondary) {
      var number = el.item.index;
      bigimage.data("owl.carousel").to(number, 100, true);
    }
  }

  thumbs.on("click", ".owl-item", function(e) {
    e.preventDefault();
    var number = $(this).index();
    bigimage.data("owl.carousel").to(number, 300, true);
  });
 


 // Faq accordian 
 $(".accordion-header").click(function () {
  $(this).toggleClass("active").next(".accordion-content").slideToggle().parent().siblings().
  find(".accordion-content").slideUp().prev().removeClass("active");
});
