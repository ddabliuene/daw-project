const slides = document.querySelectorAll(".slides img");
const indicators = document.querySelectorAll(".indicators span");
const filter = document.querySelector("#filter");
const products = document.querySelectorAll(".product-cards");

// FILTRO DE PRODUTOS
filter.addEventListener("change", () => {
  const selectedCategory = filter.value;

  products.forEach(product => {
    const productCategory = product.dataset.category;

    if (selectedCategory === "all") {
      product.style.display = "block";
    } else if (productCategory === selectedCategory) {
      product.style.display = "block";
    } else {
      product.style.display = "none";
    }
  });
});

// SLIDER
let index = 0;
setInterval(() => {
  slides[index].classList.remove("active");
  indicators[index].classList.remove("active");

  index = (index + 1) % slides.length;

  slides[index].classList.add("active");
  indicators[index].classList.add("active");
}, 5000);

// SCROLL HEADER
window.addEventListener("scroll", () => {
  const header = document.querySelector("header");

  if (window.scrollY > 50) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});