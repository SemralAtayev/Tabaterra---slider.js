"use strict";

document.addEventListener("DOMContentLoaded", function (event) {
  let slidersParent = document.querySelector(".team-items");
  let sliderChildrens = document.querySelectorAll(".single-item");

  console.clear();

  
  $(".team-items").slick({ // first init of slider
    slidesToShow: 4,
    infinite: true,
    slidesToScroll: 1,
    autoplay: false,
    dots: true,
    arrows: true,
    sliding: true,
    draggable: false,
  });

  // go thrue nodelist sliderChildren and awaiting for click or something else

  sliderChildrens.forEach((e) => {
    let num = e.getAttribute("data-slick-index"); // index of slide element
    let next = document.querySelector(".slick-next"); // next button
    let prev = document.querySelector(".slick-prev");// prev button

    //add event listener to one of slides

    e.addEventListener("click", () => {
      sliderChildrens.forEach((n) => {
        n.classList.add("full"); // adding full class on click on each element of slider
      });
      slidersParent.classList.remove("clicked-outside"); // remove clicked-outside class to parent if exist
      slidersParent.classList.add("clicked"); // adding clicked class to parent

      // this is some settings for slider after regeneration on click
      // for ex. here slides to show is 1

      function getSliderSettings() {
        return {
          slidesToShow: 1,
          infinite: true,
          slidesToScroll: 1,
          autoplay: false,
          dots: true,
          arrows: true,
          initialSlide: num, // start from index number of slide that has been clicked
          draggable: false,
        };
      }

      // this is settings afte client clicked on elsewhere but content with sliders
      // this is default slider setings

      function getSliderSettingsDefault() {
        return {
          slidesToShow: 4,
          infinite: true,
          slidesToScroll: 1,
          autoplay: false,
          dots: true,
          arrows: true,
          sliding: true,
          draggable: false,
        };
      }

      // main function after click on one slide. First we delete slider, then regenerate with first 
      // settings - getSliderSettings
      $(".team-items")
        .slick("unslick")
        .slick(getSliderSettings())
        .slick("slickGoTo", e.getAttribute("data-slick-index")); // if i disable this one then 
        // then after click on one slide slide slides dissapeare. initialSlide: num and  .slick("slickGoTo", e.getAttribute("data-slick-index")); should pare each other


      // on click to other place rather than div that contains slider or next or prev  button, we destroy and regenerate slider again with default settings getSliderSettingsDefault
      window.addEventListener("click", function (e) { 
        if (
          slidersParent.contains(e.target) &&
          slidersParent.contains(!prev) &&
          slidersParent.contains(!next) &&
          slidersParent.classList.contains("clicked")
        ) {
        } else {          
          $(".team-items").slick("unslick").slick(getSliderSettingsDefault());
          slidersParent.classList.remove("clicked");
          slidersParent.classList.add("clicked-outside");
        }
      });
    });
  });
});
