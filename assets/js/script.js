document.addEventListener('DOMContentLoaded', () => {
    // Packages Section
    const cards = document.querySelectorAll('.card');
  
    cards.forEach(card => {
      let roomCount = 1;
      const roomText = card.querySelector('.room-count');
      const priceText = card.querySelector('.room-price');
      const signUpBtn = card.querySelector('.btn-signup');
      const pricePerRoom = card.classList.contains('card-basic') ? 199 : 249;
  
      const updateRoomInfo = () => {
        roomText.textContent = roomCount;
        priceText.textContent = `$${roomCount * pricePerRoom}`;
      };
  
      card.querySelector('.plus-btn').addEventListener('click', () => {
        roomCount++;
        updateRoomInfo();
      });
  
      card.querySelector('.minus-btn').addEventListener('click', () => {
        if (roomCount > 1) {
          roomCount--;
          updateRoomInfo();
        }
      });
  
      signUpBtn.addEventListener('click', () => {
        const thankYouText = document.querySelector('#thank-you-message');
        thankYouText.textContent = `Thank you for choosing ${roomCount} room${roomCount > 1 ? 's' : ''}`;
        thankYouText.style.display = 'block';
      });
    });
  });
  