document.addEventListener('DOMContentLoaded', function() {
    const seatsContainer = document.querySelector('.seats-container');
    const selectedSeats = document.getElementById('selected-seats');
    const totalCost = document.getElementById('total');
  
    let selectedSeatsCount = 0;
    let total = 0;
  
    const rows = 5;
    const seatsPerRow = 10;
  
    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < seatsPerRow; j++) {
        const seat = document.createElement('div');
        seat.classList.add('seat');
        seat.dataset.row = i;
        seat.dataset.seat = j;
        seatsContainer.appendChild(seat);
  
        seat.addEventListener('click', function() {
          if (!seat.classList.contains('selected')) {
            seat.classList.add('selected');
            selectedSeatsCount++;
            total += 10; 
          } else {
            seat.classList.remove('selected');
            selectedSeatsCount--;
            total -= 10;
          }
  
          updateSelectedSeats();
        });
      }
    }
  
    function updateSelectedSeats() {
      selectedSeats.textContent = selectedSeatsCount;
      totalCost.textContent = total;
    }
  });
  