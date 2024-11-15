function saveLoginDataAndRedirect(event) {
  event.preventDefault(); // Verhindert Standardformular-Aktion
  const email = document.getElementById('email').value;
  sessionStorage.setItem('email', email);
  window.location.href = 'benutzer.html';
}

// Event-Listener für das Login-Formular
document.addEventListener("DOMContentLoaded", function () {
  const loginForm = document.getElementById("loginForm");
  if (loginForm) {
    loginForm.addEventListener("submit", saveLoginDataAndRedirect);
  }
});

const counters = document.querySelectorAll('.circle');

counters.forEach(counter => {
  const updateCounter = () => {
    const target = +counter.getAttribute('data-target');
    const current = +counter.innerText;

    // Geschwindigkeit des Zählens
    const increment = target / 100;

    if (current < target) {
      counter.innerText = Math.ceil(current + increment);
      setTimeout(updateCounter, 20); // Geschwindigkeit der Animation in Millisekunden
    } else {
      counter.innerText = target;
    }
  };

  updateCounter();
});

document.addEventListener("DOMContentLoaded", function () {
  const boxes = document.querySelectorAll(".box1");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show"); // Fügt die "show"-Klasse hinzu, wenn sichtbar
        }
      });
    },
    {
      threshold: 0.1, // Aktiviert die Animation, wenn 10% der Box sichtbar sind
    }
  );

  boxes.forEach((box) => {
    observer.observe(box); // Beobachtet jedes Element mit der Klasse "box"
  });
});

function closePopup() {
  document.getElementById("newsletterPopup").classList.add("hidden");
}

document.addEventListener("DOMContentLoaded", function () {
  // Anmelde- und Registrierungs-Buttons
  const anmeldenButton = document.querySelector(".navbar-right button:nth-child(1)");
  const registrierenButton = document.querySelector(".navbar-right button:nth-child(2)");

  // Weiterleiten zu den neuen Seiten
  if(anmeldenButton) {
    anmeldenButton.addEventListener("click", function () {
      window.location.href = "../pages/anmelden.html";
    });
  }
if(registrierenButton) {
  registrierenButton.addEventListener("click", function () {
    window.location.href = "../pages/registrieren.html";
  });
}
  // "MEHR"-Buttons für Gründung, Teams, Mitglieder und Sponsoren
  document.getElementById("mehrGruendung").addEventListener("click", function () {
    window.location.href = "../pages/überUns.html";
  });

  document.getElementById("mehrTeams").addEventListener("click", function () {
    document.querySelector(".team-gallery").scrollIntoView({ behavior: "smooth" });
  });

  document.getElementById("mehrMitglieder").addEventListener("click", function () {
    window.location.href = "../pages/kontakt.html";
  });

  document.getElementById("mehrSponsoren").addEventListener("click", function () {
    window.location.href = "https://club-mate.de";
  });

  document.getElementById("").addEventListener("click", function () {
    window.location.href = "../pages/kontakt.html";
  });
});

