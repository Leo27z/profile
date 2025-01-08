// 1
let slideIndex = 1;
showSlide(slideIndex);

function openLightbox() {
  document.getElementById("Lightbox").style.display = "block";
}

function closeLightbox() {
  document.getElementById("Lightbox").style.display = "none";
}

function changeSlide(n) {
  showSlide((slideIndex += n));
}

function toSlide(n) {
  showSlide((slideIndex = n));
}

function showSlide(n) {
  const slides = document.getElementsByClassName("slide");
  let modalPreviews = document.getElementsByClassName("modal-preview");

  if (n > slides.length) {
    slideIndex = 1;
  }

  if (n < 1) {
    slideIndex = slides.length;
  }

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  for (let i = 0; i < modalPreviews.length; i++) {
    modalPreviews[i].className = modalPreviews[i].className.replace(
      " active",
      ""
    );
  }

  slides[slideIndex - 1].style.display = "block";
  modalPreviews[slideIndex - 1].className += " active";
}

// end of 1

// 2
let slideIndex2 = 1;
showSlide(slideIndex2);

function openLightbox2() {
  document.getElementById("Lightbox2").style.display = "block";
}

function closeLightbox2() {
  document.getElementById("Lightbox2").style.display = "none";
}

function changeSlide2(n) {
  showSlide2((slideIndex2 += n));
}

function toSlide2(n) {
  showSlide2((slideIndex2 = n));
}

function showSlide2(n) {
  const slides = document.getElementsByClassName("slide2");
  let modalPreviews = document.getElementsByClassName("modal-preview2");

  if (n > slides.length) {
    slideIndex2 = 1;
  }

  if (n < 1) {
    slideIndex2 = slides.length;
  }

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  for (let i = 0; i < modalPreviews.length; i++) {
    modalPreviews[i].className = modalPreviews[i].className.replace(
      " active",
      ""
    );
  }

  slides[slideIndex2 - 1].style.display = "block";
  modalPreviews[slideIndex2 - 1].className += " active";
}

// end of 2

// 3
let slideIndex3 = 1;
showSlide(slideIndex3);

function openLightbox3() {
  document.getElementById("Lightbox3").style.display = "block";
}

function closeLightbox3() {
  document.getElementById("Lightbox3").style.display = "none";
}

function changeSlide3(n) {
  showSlide3((slideIndex3 += n));
}

function toSlide3(n) {
  showSlide3((slideIndex3 = n));
}

function showSlide3(n) {
  const slides = document.getElementsByClassName("slide3");
  let modalPreviews = document.getElementsByClassName("modal-preview3");

  if (n > slides.length) {
    slideIndex3 = 1;
  }

  if (n < 1) {
    slideIndex3 = slides.length;
  }

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  for (let i = 0; i < modalPreviews.length; i++) {
    modalPreviews[i].className = modalPreviews[i].className.replace(
      " active",
      ""
    );
  }

  slides[slideIndex3 - 1].style.display = "block";
  modalPreviews[slideIndex3 - 1].className += " active";
}

// end of 3
