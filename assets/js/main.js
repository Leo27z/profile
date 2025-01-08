/* ----- NAVIGATION BAR FUNCTION ----- */
function myMenuFunction() {
  var menuBtn = document.getElementById("myNavMenu");

  if (menuBtn.className === "nav-menu") {
    menuBtn.className += " responsive";
  } else {
    menuBtn.className = "nav-menu";
  }
}

/* ----- ADD SHADOW ON NAVIGATION BAR WHILE SCROLLING ----- */
window.onscroll = function () {
  headerShadow();
};

function headerShadow() {
  const navHeader = document.getElementById("header");

  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    navHeader.style.boxShadow = "0 1px 6px rgba(0, 0, 0, 0.1)";
    navHeader.style.height = "70px";
    navHeader.style.lineHeight = "70px";
  } else {
    navHeader.style.boxShadow = "none";
    navHeader.style.height = "90px";
    navHeader.style.lineHeight = "90px";
  }
}

/* ----- TYPING EFFECT ----- */
var typingEffect = new Typed(".typedText", {
  strings: ["Programmer"],
  loop: true,
  typeSpeed: 100,
  backSpeed: 80,
  backDelay: 2000,
});

/* ----- ## -- SCROLL REVEAL ANIMATION -- ## ----- */
const sr = ScrollReveal({
  origin: "top",
  distance: "80px",
  duration: 2000,
  reset: true,
});

/* -- HOME -- */
sr.reveal(".featured-text-card", {});
sr.reveal(".featured-name", { delay: 100 });
sr.reveal(".featured-text-info", { delay: 200 });
sr.reveal(".featured-text-btn", { delay: 200 });
sr.reveal(".social_icons", { delay: 200 });
sr.reveal(".featured-image", { delay: 300 });

/* -- PROJECT BOX -- */
sr.reveal(".project-box", { interval: 200 });

/* -- HEADINGS -- */
sr.reveal(".top-header", {});

/* ----- ## -- SCROLL REVEAL LEFT_RIGHT ANIMATION -- ## ----- */

/* -- ABOUT INFO & CONTACT INFO -- */
const srLeft = ScrollReveal({
  origin: "left",
  distance: "80px",
  duration: 2000,
  reset: true,
});

srLeft.reveal(".about-info", { delay: 100 });
srLeft.reveal(".contact-info", { delay: 100 });

/* -- ABOUT SKILLS & FORM BOX -- */
const srRight = ScrollReveal({
  origin: "right",
  distance: "80px",
  duration: 2000,
  reset: true,
});

srRight.reveal(".skills-box", { delay: 100 });
srRight.reveal(".form-control", { delay: 100 });

/* ----- CHANGE ACTIVE LINK ----- */

const sections = document.querySelectorAll("section[id]");

function scrollActive() {
  const scrollY = window.scrollY;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop - 50,
      sectionId = current.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector(".nav-menu a[href*=" + sectionId + "]")
        .classList.add("active-link");
    } else {
      document
        .querySelector(".nav-menu a[href*=" + sectionId + "]")
        .classList.remove("active-link");
    }
  });
}

window.addEventListener("scroll", scrollActive);

function handleFormSubmit() {
  const form = document.getElementById("form");
  const result = document.getElementById("result");

  form.addEventListener("submit", function (e) {
    const swalWithBootstrapButtons = Swal.mixin({});

    e.preventDefault();
    const formData = new FormData(form);
    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    swalWithBootstrapButtons
      .fire({
        title: "Could you verify that?",
        text: "I am genuinely thankful for each offer provided",
        icon: "question",
        allowOutsideClick: false,
        // confirmButtonColor: "#3085d6",
        // cancelButtonColor: "#d33",
        showCancelButton: true,
        confirmButtonText: "All good, send it in!",
        cancelButtonText: "No, cancel!",
        reverseButtons: true,
      })
      .then((result) => {
        if (result.isConfirmed) {
          // Show loading spinner
          Swal.fire({
            title: "Sending out...",
            html: '<div class="spinner-border text-primary" role="status"><span class="sr-only">Loading...</span></div>',
            // Prevent clicking outside the modal
            allowOutsideClick: false,
            showConfirmButton: false,
            willOpen: () => {
              Swal.showLoading();
            },
          });

          // Do the fetch call here after confirmation
          fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
            },
            body: json,
          })
            .then(async (response) => {
              let json = await response.json();
              if (response.status === 200) {
                swalWithBootstrapButtons.fire({
                  title: "It's been broadcasted.",
                  text: "Thanks for giving me this opportunity.",
                  icon: "success",
                });
              } else {
                console.log(response);
                swalWithBootstrapButtons.fire({
                  title: "Error!",
                  text: "There was a problem.",
                  icon: "error",
                });
              }
            })
            .catch((error) => {
              console.log(error);
              swalWithBootstrapButtons.fire({
                title: "Error!",
                text: "There was a problem.",
                icon: "error",
              });
            })
            .finally(() => {
              form.reset();
              setTimeout(() => {
                result.style.display = "none";
              }, 3000);
            });
        } else if (result.dismiss === Swal.DismissReason.cancel) {
          swalWithBootstrapButtons.fire({
            title: "Cancelled",
            text: "The message has been cancelled",
            icon: "info",
          });
        }
      });
  });
}
document.addEventListener("DOMContentLoaded", (event) => {
  handleFormSubmit();
});
