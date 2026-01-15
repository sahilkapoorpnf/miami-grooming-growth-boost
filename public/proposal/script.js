// Miami's Pet Grooming - Proposal Presentation Script

document.addEventListener('DOMContentLoaded', () => {
  const slidesContainer = document.getElementById('slidesContainer');
  const navDots = document.querySelectorAll('.nav-dot');
  const slides = document.querySelectorAll('.slide');
  let currentSlide = 0;

  // Update active nav dot based on scroll position
  function updateNavDots() {
    const scrollPosition = slidesContainer.scrollTop;
    const slideHeight = window.innerHeight;
    const newSlide = Math.round(scrollPosition / slideHeight);
    
    if (newSlide !== currentSlide) {
      currentSlide = newSlide;
      navDots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentSlide);
      });
    }
  }

  // Navigate to slide when dot is clicked
  navDots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
      const targetSlide = document.getElementById(`slide-${index}`);
      if (targetSlide) {
        targetSlide.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  // Listen for scroll events
  slidesContainer.addEventListener('scroll', updateNavDots);

  // Keyboard navigation
  document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowDown' || e.key === 'PageDown') {
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

  function navigateToSlide(index) {
    if (index >= 0 && index < slides.length) {
      const targetSlide = document.getElementById(`slide-${index}`);
      if (targetSlide) {
        targetSlide.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }

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
        
        // Add entrance animations to child elements
        const animatedElements = entry.target.querySelectorAll('.animate-on-enter');
        animatedElements.forEach((el, index) => {
          el.style.animationDelay = `${index * 0.1}s`;
          el.classList.add('animated');
        });
      }
    });
  }, observerOptions);

  slides.forEach(slide => {
    slideObserver.observe(slide);
  });

  // Add hover effects to cards
  const cards = document.querySelectorAll('.glass, .stat-card, .solution-card, .future-card');
  cards.forEach(card => {
    card.addEventListener('mouseenter', () => {
      card.style.transform = 'translateY(-5px)';
    });
    card.addEventListener('mouseleave', () => {
      card.style.transform = 'translateY(0)';
    });
  });

  // Confetti effect on investment slide
  function createConfetti() {
    const confettiContainer = document.getElementById('confetti');
    if (!confettiContainer) return;

    const colors = ['#E91E8C', '#0891B2', '#F472B6', '#22D3EE'];
    
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
        animation: fall ${Math.random() * 3 + 2}s linear forwards;
      `;
      confettiContainer.appendChild(confetti);
      
      setTimeout(() => confetti.remove(), 5000);
    }
  }

  // Trigger confetti when investment slide is visible
  const investmentSlide = document.getElementById('slide-6');
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
    @keyframes fall {
      0% {
        transform: translateY(0) rotate(0deg);
        opacity: 1;
      }
      100% {
        transform: translateY(100vh) rotate(720deg);
        opacity: 0;
      }
    }
    
    #confetti {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      pointer-events: none;
      overflow: hidden;
      z-index: 1000;
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

  console.log('🐾 Miami\'s Pet Grooming Proposal loaded successfully!');
});
