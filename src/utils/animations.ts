// Animation utility functions

// Observe and animate elements when they enter viewport
export const observeElements = (selector: string, className: string) => {
  const elements = document.querySelectorAll(selector);
  
  if (!elements.length) return;
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add(className);
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
  });
  
  elements.forEach((element) => {
    observer.observe(element);
  });
  
  return observer;
};

// Simple parallax effect for background elements
export const setupParallax = (selector: string) => {
  const elements = document.querySelectorAll(selector);
  
  if (!elements.length) return;
  
  const handleScroll = () => {
    const scrollY = window.scrollY;
    
    elements.forEach((element) => {
      const speed = element.getAttribute('data-speed') || '0.1';
      const yPos = -(scrollY * parseFloat(speed));
      element.setAttribute('style', `transform: translateY(${yPos}px)`);
    });
  };
  
  window.addEventListener('scroll', handleScroll);
  
  return () => {
    window.removeEventListener('scroll', handleScroll);
  };
};

// Create enhanced space-like particles
export const createParticles = (container: HTMLElement, count: number = 50) => {
  if (!container) return;
  
  // Clear existing particles
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }
  
  // Create new particles with varied sizes and animations
  for (let i = 0; i < count; i++) {
    const particle = document.createElement('span');
    const size = Math.random() * 4 + 1; // Smaller size range for space-like effect
    const floatDuration = Math.random() * 15 + 10; // Longer float duration
    const twinkleDuration = Math.random() * 3 + 2; // Twinkle effect duration
    
    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;
    particle.style.left = `${Math.random() * 100}%`;
    particle.style.top = `${Math.random() * 100}%`;
    particle.style.opacity = `${Math.random() * 0.5 + 0.1}`;
    particle.style.setProperty('--float-duration', `${floatDuration}s`);
    particle.style.setProperty('--twinkle-duration', `${twinkleDuration}s`);
    
    container.appendChild(particle);
  }
};