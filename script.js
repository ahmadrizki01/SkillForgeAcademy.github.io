  // index page 
  document.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', () => {
        alert('Thank you for your interest! Enrollment details will be sent to your email.');
    });
});

// aboutpage 
 document.querySelectorAll('.team-member').forEach(member => {
  member.addEventListener('mouseover', () => {
      member.style.transform = 'scale(1.1)';
  });
  member.addEventListener('mouseout', () => {
      member.style.transform = 'scale(1)';
  });
});

const timelineItems = document.querySelectorAll('.timeline-item');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
      if (entry.isIntersecting) {
          entry.target.style.opacity = 1;
          entry.target.style.transform = 'translateY(0)';
      }
  });
}, { threshold: 0.5 });

timelineItems.forEach(item => {
  item.style.opacity = 0;
  item.style.transform = 'translateY(20px)';
  item.style.transition = 'opacity 0.5s, transform 0.5s';
  observer.observe(item);
});


// Contactpage

const contactForm = document.getElementById('contactForm');
        
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(contactForm);
    const formObject = Object.fromEntries(formData.entries());
    console.log('Form data:', formObject);
    alert('Thank you for your message! We will get back to you soon.');
    contactForm.reset();
});
const formInputs = document.querySelectorAll('input, textarea');

formInputs.forEach(input => {
    input.addEventListener('focus', () => {
        input.style.boxShadow = '0 0 5px #007bff';
        input.style.transform = 'scale(1.02)';
    });
    
    input.addEventListener('blur', () => {
        input.style.boxShadow = 'none';
        input.style.transform = 'scale(1)';
    });
});


// logout

localStorage.clear();
sessionStorage.clear();