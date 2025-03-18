/**
 * Deepti Mahesh Portfolio - Main JavaScript
 */

// Wait for document to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
  // Hide loader when page is loaded
  window.addEventListener('load', function() {
    const loader = document.querySelector('.loader');
    if (loader) {
      loader.style.opacity = 0;
      setTimeout(() => {
        loader.style.display = 'none';
      }, 500);
    }
  });

  // Initialize animations for elements
  animateElements();
  
  // Add smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
  
  // Update active navigation link on scroll
  window.addEventListener('scroll', updateActiveNavOnScroll);
  
  // Set the initial active link
  updateActiveNavOnScroll();
});

/**
 * Animate elements when they come into view
 */
function animateElements() {
  // Add animation to project cards
  const projectCards = document.querySelectorAll('.project-card');
  if (projectCards.length > 0) {
    projectCards.forEach((card, index) => {
      // Add a slight delay to each card for a staggered effect
      setTimeout(() => {
        card.style.opacity = 1;
        card.style.transform = 'translateY(0)';
      }, 100 * index);
    });
  }
}

/**
 * Update active navigation link on scroll
 */
function updateActiveNavOnScroll() {
  // Get all sections
  const sections = document.querySelectorAll('section[id]');
  
  // Current scroll position
  const scrollPosition = window.scrollY;
  
  // Check each section to see if it's in view
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 100;
    const sectionHeight = section.offsetHeight;
    const sectionId = section.getAttribute('id');
    
    if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
      // Remove active class from all links
      document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
      });
      
      // Add active class to the current section link
      const activeLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);
      if (activeLink) {
        activeLink.classList.add('active');
      }
    }
  });
} 