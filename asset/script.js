window.addEventListener("load", function () {
  /* const variables */
  const toggle = document.querySelector(".toggle");
  const menu = document.querySelector(".menu");
  const progressBar = document.querySelector(".progress-bar");
  const header = document.querySelector(".header");

  const headerHeight = header.offsetHeight;
  window.addEventListener("scroll", function (e) {
    const scrollHeight = document.documentElement.scrollHeight;
    const scrollTop = document.documentElement.scrollTop;
    const clientHeight = document.documentElement.clientHeight;
    const distanceHeight = scrollHeight - clientHeight;
    const percentage = Math.floor((scrollTop / distanceHeight) * 100);
    progressBar.style.width = `${percentage}%`;

    if (window.pageYOffset > headerHeight) {
      header.classList.add("active");
    } else {
      header.classList.remove("active");
    }
  });

  /* toggle menu */
  toggle.addEventListener("click", handleMenu);
  function handleMenu() {
    menu.classList.add("active");
  }
  document.addEventListener("click", clickOutSide);
  function clickOutSide(e) {
    if (!e.target.matches(".toggle") && !e.target.matches(".menu")) {
      menu.classList.remove("active");
    }
  }
});
