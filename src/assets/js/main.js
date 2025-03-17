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
  
  // Add active class to navigation links based on current page
  highlightCurrentPage();
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
 * Highlight current page in navigation
 */
function highlightCurrentPage() {
  // Get current page path
  const currentPath = window.location.pathname;
  
  // Find all nav links
  const navLinks = document.querySelectorAll('.nav-link');
  
  // Loop through links and add active class to the current page
  navLinks.forEach(link => {
    const linkPath = link.getAttribute('href');
    
    // If the link's href matches the current path or
    // if we're on the homepage and the link points to index.html
    if (linkPath === currentPath || 
        (currentPath.endsWith('/') && linkPath === 'index.html') ||
        (currentPath.endsWith('/index.html') && linkPath === 'index.html')) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
} 