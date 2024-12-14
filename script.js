// Function for smooth scrolling to Services section
function scrollToServices() {
    document.getElementById('services').scrollIntoView({ behavior: 'smooth' });
  }
  
  // Function to handle scroll effect for navigation menu visibility
  window.onscroll = function() {
    toggleNavbar();
  };
  
  function toggleNavbar() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  }
  
  // Function to toggle a popup/modal window
  function openModal() {
    document.getElementById('modal').style.display = 'block';
  }
  
  function closeModal() {
    document.getElementById('modal').style.display = 'none';
  }
  
  // Function for active links highlight in the navbar
  const navLinks = document.querySelectorAll('.navbar nav ul li a');
  
  navLinks.forEach(link => {
    link.addEventListener('click', function() {
      navLinks.forEach(link => link.classList.remove('active'));
      this.classList.add('active');
    });
  });
  
  // Adding a hover effect on the service cards
  const serviceCards = document.querySelectorAll('.card');
  serviceCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
      this.style.transform = 'scale(1.05)';
    });
    card.addEventListener('mouseleave', function() {
      this.style.transform = 'scale(1)';
    });
  });
  