 
  const seatButtons = getElementsByQuerySelectorAll('#seat-button');

  let remainingSeats;

  let selectedSeatNumber;

  for(const seatButton of seatButtons){

    
    seatButton.addEventListener('click', handleSeatButton)
    
  }