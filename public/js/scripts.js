document.addEventListener("DOMContentLoaded", function () {

  const hasSeenPopup = sessionStorage.getItem("hasSeenPopup");
  const popup = document.getElementById("popup");
  const closePopupBtn = document.getElementById("closePopupBtn");

  if (!hasSeenPopup) {
    popup.style.display = "flex";
    closePopupBtn.addEventListener("click", function () {
      popup.style.display = "none";
      sessionStorage.setItem("hasSeenPopup", "true");
      document.body.style.overflow = "auto";
    });
  } else {
    popup.style.display = "none";
  }

  const gameOverPopup = document.getElementById("gameOverPopup");
  const tryAgainBtn = document.getElementById("tryAgainBtn");
  const wasCorrect = document.body.dataset.wasCorrect === "false";

  if (wasCorrect) {
    gameOverPopup.style.display = "flex";
  } else {
    gameOverPopup.style.display = "none";
  }

  tryAgainBtn.addEventListener("click", function () {
    gameOverPopup.style.display = "none";
    window.location.href = "/";
  });
});