$(document).ready(function () {
  /* For the sticky navigation */
  $(".section-offer").waypoint(
    function (direction) {
      if (direction == "down") {
        $("nav").addClass("sticky");
      } else {
        $("nav").removeClass("sticky");
      }
    },
    {
      offset: "60px;",
    }
  );

  $(".section-offer").waypoint(
    function (direction) {
      if (direction == "down") {
        $(".section-offer.row").addClass("animate__animated animate__fadeInUp");
      } else {
        $(".section-offer.row").removeClass(
          "animate__animated animate__fadeInUp"
        );
      }
    },
    {
      offset: "60px;",
    }
  );
});
