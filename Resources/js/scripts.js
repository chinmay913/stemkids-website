$(document).ready(function () {
  /* For the sticky navigation */
  $(".js--sticky-nav").waypoint(
    function (direction) {
      if (direction == "down") {
        $("nav").addClass("sticky");
      } else {
        $("nav").removeClass("sticky");
      }
    },
    {
      offset: "60px",
    }
  );
  $(".navbar-toggler").click(function () {
    let element = document.querySelector("nav");

    if (element.classList) {
      element.classList.toggle("nav-header-toggle");
    } else {
      // For IE9
      var classes = element.className.split(" ");
      var i = classes.indexOf("nav-header-toggle");

      if (i >= 0) classes.splice(i, 1);
      else classes.push("nav-header-toggle");
      element.className = classes.join(" ");
    }
  });

  /* Scroll on buttons */
  $(".js--scroll-to-courses").click(function () {
    $("html, body").animate(
      {
        scrollTop: $(".section-courses").offset().top,
      },
      1000
    );
  });

  $(".js--scroll-to-offer").click(function () {
    $("html, body").animate(
      {
        scrollTop: $(".section-offer").offset().top,
      },
      1000
    );
  });

  //   nav about option
  $(".js--nav-about").click(function () {
    $("html, body").animate(
      {
        scrollTop: $(".section-offer").offset().top,
      },
      1000
    );
  });

  //   nav courses option
  $(".js--nav-courses").click(function () {
    $("html, body").animate(
      {
        scrollTop: $(".section-courses").offset().top,
      },
      1000
    );
  });

  //   nav contact option
  $(".js--nav-contact").click(function () {
    $("html, body").animate(
      {
        scrollTop: $(".section-contact").offset().top,
      },
      1000
    );
  });

  //   nav home option
  $(".js--nav-home").click(function () {
    $("html, body").animate(
      {
        scrollTop: $(".section-header").offset().top,
      },
      1000
    );
  });

  /* Animations on scroll */
  $(".js--wp-1").waypoint(
    function (direction) {
      if (direction == "down") {
        $(".js--wp-1").addClass("animated fadeInUp");
      } else {
        $(".js--wp-1").removeClass("animated fadeInUp");
      }
    },
    {
      offset: "80%",
    }
  );

  $(".js--wp-code-img").waypoint(
    function (direction) {
      if (direction == "down") {
        $(".js--wp-code-img").addClass("animated fadeInLeft");
      } else {
        $(".js--wp-code-img").removeClass("animated fadeInLeft");
      }
    },
    {
      offset: "80%",
    }
  );
  $(".js--wp-code-text").waypoint(
    function (direction) {
      if (direction == "down") {
        $(".js--wp-code-text").addClass("animated fadeInRight");
      } else {
        $(".js--wp-code-text").removeClass("animated fadeInRight");
      }
    },
    {
      offset: "80%",
    }
  );

  $(".js--wp-robo-img").waypoint(
    function (direction) {
      if (direction == "down") {
        $(".js--wp-robo-img").addClass("animated fadeInRight");
      } else {
        $(".js--wp-robo-img").removeClass("animated fadeInRight");
      }
    },
    {
      offset: "80%",
    }
  );
  $(".js--wp-robo-text").waypoint(
    function (direction) {
      if (direction == "down") {
        $(".js--wp-robo-text").addClass("animated fadeInLeft");
      } else {
        $(".js--wp-robo-text").removeClass("animated fadeInLeft");
      }
    },
    {
      offset: "80%",
    }
  );
});
