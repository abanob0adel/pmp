$(document).ready(function () {
  var divId;

  $("#navbar a").click(function () {
    divId = $(this).attr("href");

    $("html, body").animate(
      {
        scrollTop: $(divId).offset().top - 54,
      },

      800
    );
  });

  //  gallery

  var owl = $("#owl-projects");

  owl.owlCarousel({
    autoplay: true,

    loop: true,

    items: 5,

    center: true,

    dots: true,

    responsiveClass: true,

    responsive: {
      0: {
        items: 1,

        margin: 30,

        stagePadding: 6,
      },

      481: {
        items: 2,

        margin: 30,

        stagePadding: 6,
      },

      768: {
        items: 2,

        margin: 20,
      },

      992: {
        items: 2,

        margin: 35,
      },

      1440: {
        items: 3,

        margin: 35,
      },
    },

    // itemsMobile disabled - inherit from itemsTablet option
  });

  var owl = $("#owl-careers");

  owl.owlCarousel({
    autoplay: true,

    loop: true,

    items: 5,

    center: false,

    dots: true,

    responsiveClass: true,

    responsive: {
      0: {
        items: 1,

        margin: 30,

        stagePadding: 6,
      },

      481: {
        items: 1,

        margin: 30,

        stagePadding: 6,
      },

      768: {
        items: 2,

        margin: 20,
      },

      992: {
        items: 1,

        margin: 35,
      },

      1440: {
        items: 2,

        margin: 35,
      },
    },

    // itemsMobile disabled - inherit from itemsTablet option
  });

  var owl = $("#owl-slider");

  owl.owlCarousel({
    autoplay: true,

    autoplayTimeout: 6000, // Set autoplay to 3 seconds (3000ms)

    loop: true,

    items: 5,

    center: false,

    dots: true,

    nav: true, // Show navigation buttons (next and prev)

    navText: [
      '<i class="fa fa-angle-left"></i>',

      '<i class="fa fa-angle-right"></i>',
    ], // Customize navigation button icons

    responsiveClass: true,

    responsive: {
      0: {
        items: 1,

        margin: 30,

        stagePadding: 6,
      },

      481: {
        items: 1,

        margin: 30,

        stagePadding: 6,
      },

      768: {
        items: 1,

        margin: 20,
      },

      992: {
        items: 1,

        margin: 35,
      },

      1440: {
        items: 1,

        margin: 35,
      },
    },

    // itemsMobile disabled - inherit from itemsTablet option
  });
  var owl = $("#owl-slider-ar");

  owl.owlCarousel({
    autoplay: true,

    autoplayTimeout: 6000, // Set autoplay to 3 seconds (3000ms)

    loop: true,

    items: 5,

    center: false,

    dots: true,
    rtl: true,
    nav: true, // Show navigation buttons (next and prev)

    navText: [
      '<i class="fa fa-angle-left"></i>',

      '<i class="fa fa-angle-right"></i>',
    ], // Customize navigation button icons

    responsiveClass: true,

    responsive: {
      0: {
        items: 1,

        margin: 30,

        stagePadding: 6,
      },

      481: {
        items: 1,

        margin: 30,

        stagePadding: 6,
      },

      768: {
        items: 1,

        margin: 20,
      },

      992: {
        items: 1,

        margin: 35,
      },

      1440: {
        items: 1,

        margin: 35,
      },
    },

    // itemsMobile disabled - inherit from itemsTablet option
  });
  var owl = $("#owl-slider3");

  owl.owlCarousel({
    autoplay: true,

    loop: true,

    items: 5,

    center: false,

    dots: false,

    nav: true,

    responsiveClass: true,

    responsive: {
      0: {
        items: 1,

        margin: 30,

        stagePadding: 6,
      },

      481: {
        items: 1,

        margin: 30,

        stagePadding: 6,
      },

      768: {
        items: 1,

        margin: 20,
      },

      992: {
        items: 1,

        margin: 35,
      },

      1440: {
        items: 1,

        margin: 35,
      },
    },

    // itemsMobile disabled - inherit from itemsTablet option
  });
  var owl = $("#owl-slider3-ar");

  owl.owlCarousel({
    autoplay: true,

    loop: true,

    items: 5,
    rtl: true,
    center: false,

    dots: false,

    nav: true,

    responsiveClass: true,

    responsive: {
      0: {
        items: 1,

        margin: 30,

        stagePadding: 6,
      },

      481: {
        items: 1,

        margin: 30,

        stagePadding: 6,
      },

      768: {
        items: 1,

        margin: 20,
      },

      992: {
        items: 1,

        margin: 35,
      },

      1440: {
        items: 1,

        margin: 35,
      },
    },

    // itemsMobile disabled - inherit from itemsTablet option
  });
  var owl = $("#owl-slider4");

  owl.owlCarousel({
    autoplay: true,

    loop: true,

    items: 5,

    center: false,

    dots: false,

    nav: true,

    responsiveClass: true,

    responsive: {
      0: {
        items: 1,

        margin: 30,

        stagePadding: 6,
      },

      481: {
        items: 1,

        margin: 30,

        stagePadding: 6,
      },

      768: {
        items: 1,

        margin: 20,
      },

      992: {
        items: 2,

        margin: 35,
      },

      1440: {
        items: 2,

        margin: 35,
      },
    },

    // itemsMobile disabled - inherit from itemsTablet option
  });
  var owl = $("#owl-slider4-ar");

  owl.owlCarousel({
    autoplay: true,

    loop: true,
    rtl: true,
    items: 5,

    center: false,

    dots: false,

    nav: true,

    responsiveClass: true,

    responsive: {
      0: {
        items: 1,

        margin: 30,

        stagePadding: 6,
      },

      481: {
        items: 1,

        margin: 30,

        stagePadding: 6,
      },

      768: {
        items: 1,

        margin: 20,
      },

      992: {
        items: 2,

        margin: 35,
      },

      1440: {
        items: 2,

        margin: 35,
      },
    },

    // itemsMobile disabled - inherit from itemsTablet option
  });

  $(".popup-youtube").magnificPopup({
    type: "iframe",

    mainClass: "mfp-fade",

    removalDelay: 160,

    preloader: false,

    fixedContentPos: false,
  });

  $(window).on("scroll", function (event) {
    var scrollValue = $(window).scrollTop();

    if (scrollValue > 120) {
      $(".navbar").addClass("affix");
    } else {
      $(".navbar").removeClass("affix");
    }
  });

  $(".popup-gallery").magnificPopup({
    delegate: "a",

    type: "image",

    tLoading: "Loading image #%curr%...",

    mainClass: "mfp-img-mobile",

    gallery: {
      enabled: true,

      navigateByImgClick: true,

      preload: [0, 1], // Will preload 0 - before current, and 1 after the current image
    },

    image: {
      tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',

      titleSrc: function (item) {
        return item.el.attr("title");
      },
    },
  });

  var wow = new WOW({
    boxClass: "wow", // animated element css class (default is wow)

    animateClass: "animated", // animation css class (default is animated)

    offset: 50, // distance to the element when triggering the animation (default is 0)

    mobile: true, // trigger animations on mobile devices (default is true)

    live: true, // act on asynchronously loaded content (default is true)

    scrollContainer: null, // optional scroll container selector, otherwise use window
  });

  wow.init();

  $(window).scroll(function () {
    if ($(".timer").visible(true)) {
      $(".timer").countTo("start");
    } else {
      $(".timer").countTo("stop");
    }
  });
});

var swiper = new Swiper(".mySwiper", {
  navigation: {
    nextEl: ".swiper-button-next",

    prevEl: ".swiper-button-prev",
  },
});

var swiper = new Swiper(".success-board", {
  slidesPerView: 1.2,

  spaceBetween: 30,

  breakpoints: {
    769: {
      slidesPerView: 3,
    },
  },

  navigation: {
    nextEl: ".swiper-button-next",

    prevEl: ".swiper-button-prev",
  },
});

var swiper = new Swiper(".tiktok", {
  slidesPerView: 1.2,

  spaceBetween: 30,

  breakpoints: {
    769: {
      slidesPerView: 3,
    },
  },

  navigation: {
    nextEl: ".swiper-button-next",

    prevEl: ".swiper-button-prev",
  },
});
var swiper = new Swiper(".testimonials", {
  slidesPerView: 1.2,

  spaceBetween: 30,

  breakpoints: {
    769: {
      slidesPerView: 3,
    },
  },

  navigation: {
    nextEl: ".swiper-button-next",

    prevEl: ".swiper-button-prev",
  },
});
var swiper = new Swiper(".partner", {
  slidesPerView: 3.2,

  spaceBetween: 30,

  breakpoints: {
    769: {
      slidesPerView: 10,
    },
  },
});

$(document).ready(function () {
  // Assign some jquery elements we'll need
  var $swiper = $(".videoCenter");
  var $bottomSlide = null; // Slide whose content gets 'extracted' and placed
  // into a fixed position for animation purposes
  var $bottomSlideContent = null; // Slide content that gets passed between the
  // panning slide stack and the position 'behind'
  // the stack, needed for correct animation style

  var swiper = new Swiper(".videoCenter", {
    slidesPerView: 2,
    centeredSlides: true,
    roundLengths: true,
    loop: true,
    spaceBetween: 30,
    loopAdditionalSlides: 30,
    breakpoints: {
      769: {
        slidesPerView: 4,
      },
    },
  });
});
document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll(".nav-link");

  function setActiveLink() {
    const scrollPosition = window.scrollY;

    navLinks.forEach((link) => {
      const sectionId = link.getAttribute("href");
      const section = document.querySelector(sectionId);

      if (
        section.offsetTop <= scrollPosition &&
        section.offsetTop + section.offsetHeight > scrollPosition
      ) {
        navLinks.forEach((link) => link.classList.remove("active"));
        link.classList.add("active");
      } else {
        link.classList.remove("active");
      }
    });
  }

  window.addEventListener("scroll", setActiveLink);
  window.addEventListener("resize", setActiveLink);
});
document.addEventListener("DOMContentLoaded", function () {
  var form = document.querySelector(".contact-form form");
  var successMessage = document.getElementById("success-message");
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  form.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevents the default form submission behavior

    var fullName = form.querySelector('input[type="text"]').value;
    var email = form.querySelector('input[type="email"]').value;
    var phone = form.querySelector('input[type="tel"]').value;

    if (fullName === "" || email === "" || phone === "") {
      alert("Please fill in all fields");
      return false;
    } else if (!email.match(emailRegex)) {
      alert("Please enter a valid email address");
      return false;
    } else {
      successMessage.style.display = "block";
      form.reset(); // Reset the form to clear input fields
      return true;
    }
  });
});

const childrenWithClass = document.querySelectorAll(".btn-link");

// Loop through each child element with the specified class
childrenWithClass.forEach((child) => {
  // Add an event listener to each child element
  child.addEventListener("click", () => {
    // Get the parent element
    const parent = child.closest(".card-header");
    // Add or remove the 'highlight' class from the parent based on child's class
    if (child.classList.contains("collapsed")) {
      parent.classList.add("highlight");
    } else {
      parent.classList.remove("highlight");
    }
  });
});
