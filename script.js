/* ================================
   MOBILE MENU TOGGLE
================================ */

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");
const menuIcon = menuBtn ? menuBtn.querySelector("i") : null;

if (menuBtn && navLinks) {
    menuBtn.addEventListener("click", () => {
        navLinks.classList.toggle("active");
        if (menuIcon) {
            menuIcon.classList.toggle("fa-bars");
            menuIcon.classList.toggle("fa-xmark");
        }
    });

    /* Close menu after clicking any navigation link */
    document.querySelectorAll(".nav-links a").forEach(link => {
        link.addEventListener("click", () => {
            navLinks.classList.remove("active");
            if (menuIcon) {
                menuIcon.classList.add("fa-bars");
                menuIcon.classList.remove("fa-xmark");
            }
        });
    });
}


/* ================================
   ACTIVE NAV LINK ON SCROLL (SCROLL SPY)
================================ */

const sections = document.querySelectorAll("section");
const navItems = document.querySelectorAll(".nav-links a");

function updateActiveNavLink() {
    let currentSectionId = "";
    const scrollPosition = window.pageYOffset + 120;

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            currentSectionId = section.getAttribute("id");
        }
    });

    navItems.forEach(link => {
        link.classList.remove("active");
        if (currentSectionId && link.getAttribute("href") === `#${currentSectionId}`) {
            link.classList.add("active");
        }
    });
}

window.addEventListener("scroll", updateActiveNavLink);


/* ================================
   BACK TO TOP BUTTON
================================ */

const backToTopBtn = document.getElementById("backToTop");

if (backToTopBtn) {
    window.addEventListener("scroll", () => {
        if (window.pageYOffset > 300) {
            backToTopBtn.classList.add("show");
        } else {
            backToTopBtn.classList.remove("show");
        }
    });

    backToTopBtn.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
}


/* ================================
   CONTACT FORM SUBMISSION
================================ */

const contactForm = document.getElementById("contactForm");
const formStatus = document.getElementById("formStatus");

if (contactForm) {
    contactForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const subject = document.getElementById("subject").value.trim();
        const message = document.getElementById("message").value.trim();

        if (!name || !email || !subject || !message) {
            if (formStatus) {
                formStatus.className = "form-status error";
                formStatus.textContent = "Please fill in all required fields.";
            }
            return;
        }

        const mailBody = `Name: ${name}\r\nEmail: ${email}\r\n\r\nMessage:\r\n${message}`;

        const mailto = `mailto:ruchapatil262@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(mailBody)}`;

        if (formStatus) {
            formStatus.className = "form-status success";
            formStatus.innerHTML = '<i class="fa-solid fa-circle-check"></i> Preparing your message... Opening your email client!';
        }

        /* Open mail client */
        window.location.href = mailto;

        /* Reset the form */
        contactForm.reset();

        /* Clear status after 6 seconds */
        setTimeout(() => {
            if (formStatus) {
                formStatus.className = "form-status";
                formStatus.textContent = "";
            }
        }, 6000);
    });
}