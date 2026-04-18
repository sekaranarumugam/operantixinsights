// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href'))
      .scrollIntoView({ behavior: 'smooth' });
  });
});

// Read More toggle
function toggleRead(id, btn) {
  const text = document.getElementById(id);

  if (text.style.display === "inline") {
    text.style.display = "none";
    btn.innerText = "Read More";
  } else {
    text.style.display = "inline";
    btn.innerText = "Read Less";
  }
}
