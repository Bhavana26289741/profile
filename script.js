// Adding Glowing Effect to Profile Image and Button Hover

// Function to add glowing effect
function addGlowEffect(element, glowClass) {
    element.classList.add(glowClass);
  }
  
  // Function to remove glowing effect
  function removeGlowEffect(element, glowClass) {
    element.classList.remove(glowClass);
  }
  
  // Profile Image Hover Effect
  const profileImage = document.querySelector('.profile-img');
  profileImage.addEventListener('mouseenter', () => {
    addGlowEffect(profileImage, 'glow');
  });
  
  profileImage.addEventListener('mouseleave', () => {
    removeGlowEffect(profileImage, 'glow');
  });
  
  // Button Hover Effect (for the submit button)
  const submitButton = document.querySelector('.submit-btn');
  submitButton.addEventListener('mouseenter', () => {
    addGlowEffect(submitButton, 'glow-btn');
  });
  
  submitButton.addEventListener('mouseleave', () => {
    removeGlowEffect(submitButton, 'glow-btn');
  });
  
  // Social Media Icons Glowing Effect
  const socialIcons = document.querySelectorAll('.social-icon');
  socialIcons.forEach(icon => {
    icon.addEventListener('mouseenter', () => {
      icon.classList.add('glow-social');
    });
  
    icon.addEventListener('mouseleave', () => {
      icon.classList.remove('glow-social');
    });
  });
  