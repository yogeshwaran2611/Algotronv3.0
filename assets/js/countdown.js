// Countdown function
function countdown(targetDate) {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;
  
      // Calculate days, hours, minutes, and seconds
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
      // Display the countdown
      document.getElementById("days").innerHTML=days;
      document.getElementById("hours").innerHTML=hours;
      document.getElementById("minutes").innerHTML=minutes;
      document.getElementById("seconds").innerHTML=seconds;
  
      // If the countdown is finished, display a message
      if (distance < 0) {
        clearInterval(interval);
        document.getElementById('countdown').innerHTML = 'EXPIRED';
      }
    }, 1000);
  }
  
  // Set the target date (modify this according to your needs)
  const targetDate = new Date('2024-02-29T08:59:59').getTime();
  
  // Start the countdown
  countdown(targetDate);
  