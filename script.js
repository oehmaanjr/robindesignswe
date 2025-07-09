/*-------- SCRIPT-FIL -----------*/

/*----- INDEX - RECENTIONER ---------------------------------*/
/* Sektion - Rullande Recentioner */
/* const track = document.getElementById("review-track");
const reviews = Array.from(track.children);

// Dubblar korten för att skapa sömlös loop
reviews.forEach((card) => {
  const clone = card.cloneNode(true);
  track.appendChild(clone);
}); */
/*----- KONTAKTSIDA -----------------------------------------*/
/* const form = document.getElementById("contactForm");
const message = document.getElementById("formMessage");

form.addEventListener("submit", function (e) {
  e.preventDefault(); // Stoppar omdirigering

  const formData = new FormData(form);

  fetch(form.action, {
    method: form.method,
    body: formData,
    headers: {
      Accept: "application/json",
    },
  }).then((response) => {
    if (response.ok) {
      form.reset(); // Nollställer fälten
      message.classList.remove("d-none"); // Visar bekräftelsen
    } else {
      alert("Något gick fel. Vänligen försök igen senare.");
    }
  });
}); */
/*----- SKAPA DITT EGET KATTARMBAND -------------------------*/

/*----- RECENTIONER - JavaScript som hanterar formuläret ----*/
const reviewForm = document.getElementById("reviewForm");
const reviewMessage = document.getElementById("reviewMessage");

reviewForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const formData = new FormData(reviewForm);

  fetch(reviewForm.action, {
    method: reviewForm.method,
    body: formData,
    headers: {
      Accept: "application/json",
    },
  }).then((response) => {
    if (response.ok) {
      reviewForm.reset();
      reviewMessage.classList.remove("d-none");
    } else {
      alert("Något gick fel. Försök gärna igen senare.");
    }
  });
});
/*------------------------------*/
/*------------------------------*/
/*------------------------------*/
/*------------------------------*/
/*------------------------------*/
