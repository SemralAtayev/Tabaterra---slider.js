"use strict";

document.addEventListener("DOMContentLoaded", function (event) {
  let slidersParent = document.querySelector(".team-items");
  let sliderChildrens = document.querySelectorAll(".single-item");

  console.clear();

  $(".team-items").slick({
    slidesToShow: 4,
    infinite: false,
    slidesToScroll: 1,
    autoplay: false,
    dots: true,
    arrows: true,
    sliding: true,
    draggable: false,
  });

  sliderChildrens.forEach((e) => {
    let num = e.getAttribute("data-slick-index");
    let next = document.querySelector(".slick-next");
    let prev = document.querySelector(".slick-prev");

    e.addEventListener("click", () => {
      sliderChildrens.forEach((n) => {
        n.classList.add("full");
      });
      slidersParent.classList.remove("clicked-outside");
      slidersParent.classList.add("clicked");

      function getSliderSettings() {
        return {
          slidesToShow: 1,
          infinite: true,
          slidesToScroll: 1,
          autoplay: false,
          dots: true,
          arrows: true,
          initialSlide: num,
          draggable: false,
        };
      }

      $(".team-items")
        .slick("unslick")
        .slick(getSliderSettings())
        .slick("slickGoTo", e.getAttribute("data-slick-index"));

      window.addEventListener("click", function (e) {
        function getSliderSettingsDefault() {
          return {
            slidesToShow: 4,
            infinite: false,
            slidesToScroll: 1,
            autoplay: false,
            dots: true,
            arrows: true,
            sliding: true,
            draggable: false,
          };
        }

        if (
          slidersParent.contains(e.target) &&
          slidersParent.contains(!prev) &&
          slidersParent.contains(!next) &&
          slidersParent.classList.contains("clicked")
        ) {
        } else {
          console.log("ss");
          $(".team-items").slick("unslick").slick(getSliderSettingsDefault());
          slidersParent.classList.remove("clicked");
          slidersParent.classList.add("clicked-outside");
        }
      });
    });
  });
});
