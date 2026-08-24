/* ================================
   MOBILE MENU
================================ */

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {

    navLinks.classList.toggle("active");

});


/* Close menu after clicking a link */

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("active");

    });

});


/* ================================
   CONTACT FORM
================================ */

const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const name =
        document.getElementById("name").value;

    const email =
        document.getElementById("email").value;

    const subject =
        document.getElementById("subject").value;

    const message =
        document.getElementById("message").value;


    const mailBody =
        `Name: ${name}%0A` +
        `Email: ${email}%0A%0A` +
        `${message}`;


    const mailto =
        `mailto:your.email@example.com` +
        `?subject=${encodeURIComponent(subject)}` +
        `&body=${mailBody}`;


    window.location.href = mailto;

});