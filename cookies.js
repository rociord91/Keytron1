document.addEventListener("DOMContentLoaded", () => {
  const banner = document.getElementById("cookie-banner");
  const btn = document.getElementById("accept-cookies");


  if (localStorage.getItem("cookies-accepted") === "true") {
    banner.style.display = "none";
  }


  btn.addEventListener("click", () => {
    localStorage.setItem("cookies-accepted", "true");
    banner.style.display = "none";
  });
});
