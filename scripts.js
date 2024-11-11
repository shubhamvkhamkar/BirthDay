function calculateCountdown() {
    const now = new Date();
    const tomorrow = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);
    tomorrow.setHours(0, 0, 0, 0); // Set to midnight
  
    const timeDifference = tomorrow - now;
  
    const seconds = Math.floor((timeDifference / 1000) % 60);
    const minutes = Math.floor((timeDifference / 1000 / 60) % 60);
    const hours = Math.floor((timeDifference / 1000 / 60 / 60) % 24);
  
    document.getElementById('hours').innerText = hours;
    document.getElementById('minutes').innerText = minutes;
    document.getElementById('seconds').innerText = seconds;
  
    // Enable the button when countdown ends
    if (timeDifference <= 0) {
      clearInterval(interval);
      document.getElementById('celebrate-btn').disabled = false;
      document.getElementById('celebrate-btn').onclick = function () {
        window.location.href = 'celebrate.html';
      };
    }
  }
  
  const interval = setInterval(calculateCountdown, 1000);
  
  // Create firework elements for the celebration page
  if (window.location.pathname.endsWith('celebrate.html')) {
    for (let i = 0; i < 20; i++) {
      const firework = document.createElement('div');
      firework.classList.add('firework');
      document.body.appendChild(firework);
    }
  }
  