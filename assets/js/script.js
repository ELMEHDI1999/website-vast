/**add active link */
let allLink = Array.from(document.querySelectorAll(".link"));
let header = document.querySelector("header");
allLink.forEach((link) => {
  link.addEventListener("click", (e) => {
    allLink.forEach((item) => {
      item.classList.remove("active");
    });
    e.target.classList.add("active");
  });
});
/**fin active link */

/**toggle list */
let listmenu = document.querySelector(".headerItem .list");
let nav = document.querySelector(".headerItem nav");
console.log(nav);
listmenu.addEventListener("click", () => {
  nav.classList.toggle("show");
});

/**slide to top */
let hero = 125;
let back = document.querySelector(".back");
window.addEventListener("scroll", (e) => {
  console.log(hero, window.pageYOffset);
  if (hero <= window.pageYOffset) {
    back.style.right = "5%";
  } else {
    back.style.right = "-5%";
  }
});

back.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
