
// Funzione per calcolare la dimensione del font basata sulla larghezza del contenitore
function updateFontSize() {
    const textContainer = document.getElementById('text-resize');
    const containerWidth = textContainer.offsetWidth;
  
    // Utilizza media query CSS per adattare la dimensione del font in base alla larghezza del display
    let fontSize;
    if (window.matchMedia("(max-width: 1200px)").matches) {
      fontSize = containerWidth / 18;
    } else {
      fontSize = containerWidth / 25; 
    }
  
    textContainer.style.fontSize = fontSize + 'px';
  }
  
  // Chiama la funzione updateFontSize() quando la finestra viene ridimensionata
  window.addEventListener('resize', updateFontSize);
  
  // Chiama updateFontSize() anche all'avvio della pagina per impostare la dimensione del font iniziale
  window.addEventListener('load', updateFontSize);
  



document.addEventListener("DOMContentLoaded", () => {
    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        nav: false,
        navElement:true,
        autoplay:true,
        autoplayTimeout:2000,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 5
            }
        }
    })




    const sidebarLinks = document.querySelectorAll(".menu-item a");

    sidebarLinks.forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault();

            const targetId = this.getAttribute("href").substring(1); // Rimuovi il carattere #

            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop,
                    behavior: "smooth" // Abilita la transizione dello scroll
                });
            }
        });
    });
});


//  pulsante e al modal
var menuButton = document.getElementById("hamburger-menu-button");
var modal = document.getElementById("modal");
var closeButton = document.querySelector(".close-button");
var links = document.querySelectorAll("a"); // Seleziona tutti gli elementi <a> desiderati

//   clic al pulsante per aprire il modal
menuButton.addEventListener("click", function() {
    modal.style.display = "block";
});

//  clic al pulsante di chiusura per chiudere il modal
closeButton.addEventListener("click", function() {
    modal.style.display = "none";
});


window.addEventListener("click", function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
});

// Aggiungi un evento di clic a tutti gli elementi <a> desiderati per chiudere il modal
for (var i = 0; i < links.length; i++) {
    links[i].addEventListener("click", function() {
        modal.style.display = "none";
    });
}


//validazione form
const acceptTermsCheckbox = document.getElementById('acceptTermsCheckbox');
const submitButton = document.getElementById('submitButton');
const emailInput = document.getElementById('emailInput');
const emailError = document.getElementById('emailError');

// Funzione per verificare la validità dell'indirizzo email
function isValidEmail(email) {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailPattern.test(email);
}

emailInput.addEventListener('input', function () {
    if (emailInput.value.trim() === '' || !isValidEmail(emailInput.value)) {
        emailError.textContent = 'Enter a valid email address.';
        submitButton.disabled = true;
    } else {
        emailError.textContent = ''; // Rimuovi il messaggio di errore
        submitButton.disabled = !acceptTermsCheckbox.checked; // Controlla anche il checkbox
    }
});

emailInput.addEventListener('blur', function () {
    if (emailInput.value.trim() === '' || !isValidEmail(emailInput.value)) {
        emailError.textContent = 'Enter a valid email address.';
    } 
});

acceptTermsCheckbox.addEventListener('change', function () {
    submitButton.disabled = !emailInput.value || !isValidEmail(emailInput.value) || !this.checked;
});

// Funzione per la validazione completa prima dell'invio
function validateForm(event) {
    if (!isValidEmail(emailInput.value) || !acceptTermsCheckbox.checked) {
        event.preventDefault(); // Evita l'invio del modulo
        emailError.textContent = 'Enter a valid email address.';
    }
}

const subscribeForm = document.getElementById('subscribeForm');
subscribeForm.addEventListener('submit', validateForm);
