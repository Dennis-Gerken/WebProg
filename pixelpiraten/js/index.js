function saveLoginDataAndRedirect(event) {
  event.preventDefault();
  const email = document.getElementById('email').value;
  sessionStorage.setItem('email', email);
  window.location.href = 'benutzer.html';
}



document.addEventListener("DOMContentLoaded", function () {
  const loginForm = document.getElementById("loginForm");
  if (loginForm) {
    loginForm.addEventListener("submit", saveLoginDataAndRedirect);
  }
});
document.addEventListener("DOMContentLoaded", function () {
  const email = sessionStorage.getItem('email');
  const loginBtn = document.getElementById("login-btn");
  const registerBtn = document.getElementById("register-btn");
  const profileSection = document.getElementById("profile-section");

  if (email) {

    loginBtn.style.display = "none";
    registerBtn.style.display = "none";
    profileSection.style.display = "block";
  } else {

    loginBtn.style.display = "block";
    registerBtn.style.display = "block";
    profileSection.style.display = "none";
  }
});

const counters = document.querySelectorAll('.circle');

counters.forEach(counter => {
  const updateCounter = () => {
    const target = +counter.getAttribute('data-target');
    const current = +counter.innerText;


    const increment = target / 100;

    if (current < target) {
      counter.innerText = Math.ceil(current + increment);
      setTimeout(updateCounter, 20);
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
          entry.target.classList.add("show");
        }
      });
    },
    {
      threshold: 0.1,
    }
  );

  boxes.forEach((box) => {
    observer.observe(box);
  });
});

function closePopup() {
  document.getElementById("newsletterPopup").classList.add("hidden");
}

document.addEventListener("DOMContentLoaded", function () {

  const anmeldenButton = document.querySelector(".navbar-right button:nth-child(1)");
  const registrierenButton = document.querySelector(".navbar-right button:nth-child(2)");


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

