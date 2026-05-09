// ================= SMOOTH SCROLL =================

// Select all navigation links
const navLinks = document.querySelectorAll('.nav-link');

// Loop through each link
navLinks.forEach(link => {

  // Add click event
  link.addEventListener('click', function(e) {

    e.preventDefault();

    // Get target section id
    const targetId = this.getAttribute('href');

// Find target section
    const targetSection = document.querySelector(targetId);

   // Scroll smoothly
    targetSection.scrollIntoView({
      behavior: 'smooth'
    });

  });

});

const serviceBoxes = document.querySelectorAll(".box");

serviceBoxes.forEach(box => {

    box.addEventListener("click", () => {

        box.classList.toggle("active");

    });

});