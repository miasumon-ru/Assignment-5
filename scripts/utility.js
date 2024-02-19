
function getAElementById(elementId){
    const element = document.getElementById(elementId);
    return element;
}

function getElementsByQuerySelectorAll(selector){
    const elements = document.querySelectorAll(selector);
    return elements;
}


function getAInnerTextById (elementId){

    const element = document.getElementById(elementId);
    const innerTextValue = element.innerText;

    return innerTextValue;

}

function setInnerTextById(elementId, value){
    const element = getAElementById(elementId);
    element.innerText = value;
}



function handleSeatButton(event){
   

    // color add for each button

     const targetedButton =  event.target;

     targetedButton.classList.add("bg-[#1DD100]");
     targetedButton.classList.add("text-white");

    //  left seats

    const leftSeats = getAElementById('seats-left')

     remainingSeats =  parseInt(leftSeats.innerText) -1;
     console.log(remainingSeats);

     leftSeats.innerText = remainingSeats;

    //  selected seat number 

    const selectedSeatNumberText = getAInnerTextById('selected-seat-number');

    const seatNumber = parseInt(selectedSeatNumberText) + 1;

    setInnerTextById('selected-seat-number', seatNumber);

    //  selected seat Information add

     const buttonInfo =  targetedButton.innerText;

     const tr = document.createElement('tr');
     const td = document.createElement('td');
     const td2 = document.createElement('td');
     const td3 = document.createElement('td');

     td.innerText = buttonInfo;
     td2.innerText = 'Economy';
     td3.innerText = 550;

     tr.appendChild(td);
     tr.appendChild(td2);
     tr.appendChild(td3);

     const tdBody = getAElementById('td-body');
     tdBody.appendChild(tr);

    //  total price add 

    const seatNumbers = parseInt(getAInnerTextById('selected-seat-number'));

    const totalPriceElementText = getAInnerTextById('total-price');

    const totalPrice = 550*seatNumbers ;

    setInnerTextById('total-price', totalPrice);


    // coupon apply


    const applyButton = getAElementById('apply-btn');
    applyButton.addEventListener('click', function(){
    
    const couponInput = getAElementById('coupon-input');
    const couponInputValue = couponInput.value;

    


    if(couponInputValue === 'New15' && seatNumbers === 4){

        const discount = totalPrice*15/100

       const p = document.createElement('p');
       const p2 = document.createElement('p');
       p.innerText = 'Discount';
       p2.innerText = discount;
       p.classList.add('font-extrabold');

       const discountDiv = getAElementById('discount-div')
       discountDiv.appendChild(p);
       discountDiv.appendChild(p2);

    }


        
    })





    
}
