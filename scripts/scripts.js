const sliderEl = document.querySelector(".slider");
const sliderEl2 = document.querySelector(".slider-2");
const slider = new A11YSlider(sliderEl);
const slider2 = new A11YSlider(sliderEl2);

sliderEl.addEventListener("beforeChange", function(e) {
  // Get next element
  const nextSlide = e.detail.nextSlide;
  // Get index of the next element
  const nextSlideIndex = Array.from(nextSlide.parentNode.children).indexOf(
    nextSlide
  );
  // Tell 2nd slider to move to slide element based off index
  slider2.scrollToSlide(nextSlideIndex);
});