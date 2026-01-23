document.addEventListener("DOMContentLoaded", () => {
  const banner = document.getElementById("cookie-banner");
  const acceptBtn = document.getElementById("accept-cookies");
  const rejectBtn = document.getElementById("reject-cookies");

  // Si ya aceptó o rechazó, no mostramos el banner
  if (localStorage.getItem("cookies-choice")) {
    banner.style.display = "none";
    return;
  }

  // Aceptar cookies
  acceptBtn.addEventListener("click", () => {
    localStorage.setItem("cookies-choice", "accepted");
    banner.style.display = "none";
  });

  // Rechazar cookies
  rejectBtn.addEventListener("click", () => {
    localStorage.setItem("cookies-choice", "rejected");
    banner.style.display = "none";
  });
});
