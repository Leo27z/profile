document.addEventListener("DOMContentLoaded", function () {
  const inputs = Array.from(
    document.querySelectorAll("input[name=email], input[name=phone]")
  );

  const inputListener = (e) => {
    inputs
      .filter((i) => i !== e.target)
      .forEach((i) => (i.required = !e.target.value.length));
  };

  inputs.forEach((i) => i.addEventListener("input", inputListener));
});

//  content filter

const categoryTitle = document.querySelectorAll(".category-title");
const allCategoryPosts = document.querySelectorAll(".all");

for (let i = 0; i < categoryTitle.length; i++) {
  categoryTitle[i].addEventListener(
    "click",
    filterPosts.bind(this, categoryTitle[i])
  );
}

function filterPosts(item) {
  changeActivePosition(item);
  for (let i = 0; i < allCategoryPosts.length; i++) {
    if (allCategoryPosts[i].classList.contains(item.attributes.id.value)) {
      allCategoryPosts[i].style.display = "block";
    } else {
      allCategoryPosts[i].style.display = "none";
    }
  }
}

function changeActivePosition(activeItem) {
  for (let i = 0; i < categoryTitle.length; i++) {
    categoryTitle[i].classList.remove("active");
  }
  activeItem.classList.add("active");
}

// end contenct filter
