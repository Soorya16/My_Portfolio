// Toggle mobile menu
function toggleMenu() {
    const menu = document.querySelector(".nav-links");
    const icon = document.querySelector(".hamburger-menu");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
  }
  
  // Toggle theme
  const themeToggleBtn = document.getElementById('theme-toggle-btn');
  const body = document.body;
  
  function toggleTheme() {
    body.classList.toggle('dark-mode');
    const isDarkMode = body.classList.contains('dark-mode');
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
    updateThemeToggleIcon(isDarkMode);
  }
  
  function updateThemeToggleIcon(isDarkMode) {
    const moonIcon = document.querySelector('.fa-moon');
    const sunIcon = document.querySelector('.fa-sun');
    moonIcon.style.display = isDarkMode ? 'none' : 'inline';
    sunIcon.style.display = isDarkMode ? 'inline' : 'none';
  }
  
  themeToggleBtn.addEventListener('click', toggleTheme);
  
  const userPrefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  const savedTheme = localStorage.getItem('theme');
  
  if (savedTheme) {
    body.classList.toggle(savedTheme);
    updateThemeToggleIcon(savedTheme === 'dark');
  } else if (userPrefersDark) {
    body.classList.add('dark-mode');
    updateThemeToggleIcon(true);
  }
  document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission
  
    // Simulate form submission and display message
    const responseMessage = document.getElementById('responseMessage');
    
    // Clear any previous message
    responseMessage.textContent = '';
  
    // Basic form validation
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
  
    if (name && email && message) {
      responseMessage.textContent = 'Thank you for your message. We will get back to you soon!';
      responseMessage.style.color = 'green';
    } else {
      responseMessage.textContent = 'Please fill out all fields.';
      responseMessage.style.color = 'red';
    }
  });
    