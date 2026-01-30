// Add intersection observer to toggle 'show' class on elements with 'hidden' class

document.addEventListener('DOMContentLoaded', function () {
  const hiddenSections = document.querySelectorAll('.hidden');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
      }
    });
  }, {
    threshold: 0.02 // Adjust as needed
  });

  hiddenSections.forEach(section => {
    observer.observe(section);
  });
});
