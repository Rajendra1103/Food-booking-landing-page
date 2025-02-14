document.addEventListener("DOMContentLoaded", function () {
    const foodGrid = document.querySelector('.food__grid');
    let currentIndex = 0;
    const foodCards = document.querySelectorAll('.food__card');
    const totalCards = foodCards.length;
    
    // Function to set uniform height for all food cards
    function setUniformHeight() {
      let maxHeight = 0;
  
      // Reset heights to auto before calculating
      foodCards.forEach(card => {
        card.style.height = 'auto';
      });
  
      // Find the tallest card
      foodCards.forEach(card => {
        maxHeight = Math.max(maxHeight, card.offsetHeight);
      });
  
      // Set all cards to the tallest height
      foodCards.forEach(card => {
        card.style.height = `${maxHeight}px`;
      });
    }
  
    // Function to show the next 3 items
    function showNextFood() {
      // Hide current set of 3 food cards
      for (let i = 0; i < 3; i++) {
        foodCards[(currentIndex + i) % totalCards].style.display = 'none';
      }
  
      // Move to the next set of 3 cards
      currentIndex = (currentIndex + 3) % totalCards;
  
      // Show next set of 3 food cards
      for (let i = 0; i < 3; i++) {
        foodCards[(currentIndex + i) % totalCards].style.display = 'block';
      }
  
      // Adjust the heights after showing new cards
      setUniformHeight();
    }
  
    // Initially, show the first set of 3 items
    foodCards.forEach((card, index) => {
      if (index >= 3) {
        card.style.display = 'none';
      }
    });
  
    // Adjust heights initially
    setUniformHeight();
  
    // Change the set of 3 food cards every 5 seconds (Auto Slide)
    setInterval(showNextFood, 5000);
  
    // Handle the slider buttons (Next/Previous) functionality (optional)
    const nextButton = document.querySelector('.next-btn');
    const prevButton = document.querySelector('.prev-btn');
  
    if (nextButton) {
      nextButton.addEventListener('click', showNextFood);
    }
  
    // Previous functionality to go back
    function showPrevFood() {
      // Hide current set of 3 food cards
      for (let i = 0; i < 3; i++) {
        foodCards[(currentIndex + i) % totalCards].style.display = 'none';
      }
  
      // Move to the previous set of 3 cards
      currentIndex = (currentIndex - 3 + totalCards) % totalCards;
  
      // Show previous set of 3 food cards
      for (let i = 0; i < 3; i++) {
        foodCards[(currentIndex + i) % totalCards].style.display = 'block';
      }
  
      // Adjust the heights after showing new cards
      setUniformHeight();
    }
  
    if (prevButton) {
      prevButton.addEventListener('click', showPrevFood);
    }
  });
  