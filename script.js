function showContact() {
  document.getElementById("contactInfo").innerText =
    " +91 98765 43210 |  info@rhythmdance.com";
}
//  Smooth Scroll for Navbar Links 
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

//Search Box Handler 
const searchBox = document.querySelector('.search-box');
searchBox.addEventListener('keypress', function(e) {
  if (e.key === 'Enter') {
    e.preventDefault();
    alert(`You searched for: ${searchBox.value}`);
    // Future: implement actual search/filter logic here
  }
});

//  Fade In Sections on Scroll 
const faders = document.querySelectorAll('section');

window.addEventListener('scroll', () => {
  faders.forEach(section => {
    const rect = section.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      section.style.opacity = 1;
      section.style.transform = 'translateY(0)';
    }
  });
});

