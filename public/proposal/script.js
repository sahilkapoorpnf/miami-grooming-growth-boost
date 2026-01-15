// Miami's Pet Grooming - Proposal Presentation Script

document.addEventListener('DOMContentLoaded', () => {
  const slidesContainer = document.getElementById('slidesContainer');
  const navDots = document.querySelectorAll('.nav-dot');
  const slides = document.querySelectorAll('.slide');
  const navUp = document.getElementById('navUp');
  const navDown = document.getElementById('navDown');
  let currentSlide = 0;
  let isScrolling = false;

  // Update navigation state
  function updateNavigation() {
    // Update dots
    navDots.forEach((dot, index) => {
      dot.classList.toggle('active', index === currentSlide);
    });
    
    // Update arrows
    navUp.disabled = currentSlide === 0;
    navDown.disabled = currentSlide === slides.length - 1;
  }

  // Navigate to specific slide
  function navigateToSlide(index) {
    if (index >= 0 && index < slides.length && !isScrolling) {
      isScrolling = true;
      currentSlide = index;
      
      const targetSlide = document.getElementById(`slide-${index}`);
      if (targetSlide) {
        targetSlide.scrollIntoView({ behavior: 'smooth' });
      }
      
      updateNavigation();
      
      setTimeout(() => {
        isScrolling = false;
      }, 800);
    }
  }

  // Update active slide based on scroll position
  function handleScroll() {
    if (isScrolling) return;
    
    const scrollPosition = slidesContainer.scrollTop;
    const slideHeight = window.innerHeight;
    const newSlide = Math.round(scrollPosition / slideHeight);
    
    if (newSlide !== currentSlide && newSlide >= 0 && newSlide < slides.length) {
      currentSlide = newSlide;
      updateNavigation();
    }
  }

  // Navigate to slide when dot is clicked
  navDots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
      navigateToSlide(index);
    });
  });

  // Arrow navigation
  navUp.addEventListener('click', () => {
    navigateToSlide(currentSlide - 1);
  });

  navDown.addEventListener('click', () => {
    navigateToSlide(currentSlide + 1);
  });

  // Listen for scroll events
  slidesContainer.addEventListener('scroll', handleScroll);

  // Keyboard navigation
  document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowDown' || e.key === 'PageDown' || e.key === ' ') {
      e.preventDefault();
      navigateToSlide(currentSlide + 1);
    } else if (e.key === 'ArrowUp' || e.key === 'PageUp') {
      e.preventDefault();
      navigateToSlide(currentSlide - 1);
    } else if (e.key === 'Home') {
      e.preventDefault();
      navigateToSlide(0);
    } else if (e.key === 'End') {
      e.preventDefault();
      navigateToSlide(slides.length - 1);
    }
  });

  // Intersection Observer for slide animations
  const observerOptions = {
    root: slidesContainer,
    rootMargin: '0px',
    threshold: 0.5
  };

  const slideObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('slide-active');
        
        // Trigger animations for elements in this slide
        const animatedElements = entry.target.querySelectorAll('.animate-slide-up, .animate-fade-in, .animate-scale-in');
        animatedElements.forEach((el) => {
          el.style.opacity = '1';
        });
      }
    });
  }, observerOptions);

  slides.forEach(slide => {
    slideObserver.observe(slide);
  });

  // Add hover effects to cards
  const cards = document.querySelectorAll('.glass, .solution-card, .problem-card, .future-feature, .feature-card, .impact-card');
  cards.forEach(card => {
    card.addEventListener('mouseenter', () => {
      card.style.transform = 'translateY(-5px)';
      card.style.transition = 'transform 0.3s ease';
    });
    card.addEventListener('mouseleave', () => {
      card.style.transform = 'translateY(0)';
    });
  });

  // Confetti effect on investment slide
  function createConfetti() {
    const confettiContainer = document.getElementById('confetti');
    if (!confettiContainer) return;

    const colors = ['hsl(330, 85%, 55%)', 'hsl(185, 65%, 45%)', 'hsl(35, 90%, 60%)', 'hsl(280, 70%, 50%)'];
    
    for (let i = 0; i < 50; i++) {
      const confetti = document.createElement('div');
      confetti.style.cssText = `
        position: absolute;
        width: ${Math.random() * 10 + 5}px;
        height: ${Math.random() * 10 + 5}px;
        background: ${colors[Math.floor(Math.random() * colors.length)]};
        left: ${Math.random() * 100}%;
        top: -20px;
        opacity: ${Math.random() * 0.7 + 0.3};
        border-radius: ${Math.random() > 0.5 ? '50%' : '0'};
        animation: confetti-fall ${Math.random() * 3 + 2}s linear forwards;
      `;
      confettiContainer.appendChild(confetti);
      
      setTimeout(() => confetti.remove(), 5000);
    }
  }

  // Trigger confetti when investment slide is visible (now slide-9)
  const investmentSlide = document.getElementById('slide-9');
  let confettiTriggered = false;
  
  const investmentObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !confettiTriggered) {
        confettiTriggered = true;
        setTimeout(createConfetti, 500);
      }
    });
  }, { threshold: 0.5 });

  if (investmentSlide) {
    investmentObserver.observe(investmentSlide);
  }

  // Add confetti animation styles dynamically
  const style = document.createElement('style');
  style.textContent = `
    @keyframes confetti-fall {
      0% {
        transform: translateY(0) rotate(0deg);
        opacity: 1;
      }
      100% {
        transform: translateY(100vh) rotate(720deg);
        opacity: 0;
      }
    }
  `;
  document.head.appendChild(style);

  // Touch/swipe support for mobile
  let touchStartY = 0;
  let touchEndY = 0;

  slidesContainer.addEventListener('touchstart', (e) => {
    touchStartY = e.changedTouches[0].screenY;
  }, { passive: true });

  slidesContainer.addEventListener('touchend', (e) => {
    touchEndY = e.changedTouches[0].screenY;
    handleSwipe();
  }, { passive: true });

  function handleSwipe() {
    const swipeThreshold = 50;
    const diff = touchStartY - touchEndY;
    
    if (Math.abs(diff) > swipeThreshold) {
      if (diff > 0) {
        // Swipe up - next slide
        navigateToSlide(currentSlide + 1);
      } else {
        // Swipe down - previous slide
        navigateToSlide(currentSlide - 1);
      }
    }
  }

  // Initialize first slide animations
  setTimeout(() => {
    const firstSlide = document.getElementById('slide-0');
    if (firstSlide) {
      const animatedElements = firstSlide.querySelectorAll('.animate-slide-up, .animate-fade-in, .animate-scale-in');
      animatedElements.forEach((el) => {
        el.style.opacity = '1';
      });
    }
  }, 100);

  console.log('🐾 Miami\'s Pet Grooming Proposal loaded successfully!');
});
