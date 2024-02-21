
const allBtn = document.getElementsByClassName('btn buy btn-active');

let count=0;
for (const btn of allBtn) {
   btn.addEventListener('click', function (e) {
      count = count + 1;

      const cartItem = e.target.parentNode.childNodes[5].childNodes[1].innerText;
      const cartPrice = e.target.parentNode.childNodes[5].childNodes[3].innerText
      const cartMainPrice = e.target.parentNode.childNodes[5].childNodes[3].childNodes[0].innerText;
      setInnerText('cart-count', count);

      const cartText = document.getElementById('cart-text-one');
      const cartText2= document.getElementById('cart-text-two');
      const p = document.createElement('p');
      p.innerText = cartItem;
      const p2 = document.createElement('p');
      p2.innerText = cartPrice;
     
   
      cartText.appendChild(p);
      cartText2.appendChild(p2);

      totalCost('sub-total', parseInt(cartMainPrice) )
      totalCost('total', parseInt(cartMainPrice) )

      const againTotal = document.getElementById('sub-total').innerText;
   const perAgainTo = parseInt(againTotal)
   const applyBtnAgain = document.getElementById('discount-btn');
   if (perAgainTo >=200) {
      applyBtnAgain.removeAttribute('disabled');
      
   }
   else{
      applyBtnAgain.setAttribute('disabled', true);
   }

     
      
      

   
   })
   
}


function totalCost(id, value) {
   const cartInitial = document.getElementById(id).innerText;
   const cartSub = parseInt(cartInitial);
   const sum = cartSub+parseInt(value);

   setInnerText(id, sum);
   
}





const applyBtn = document.getElementById('discount-btn');
applyBtn.addEventListener('click', function () {
   const applyField = document.getElementById('input-field').value;
   
   const total = document.getElementById('sub-total').innerText;
   const perTo = parseInt(total)
   
   if ( perTo >= 200 &&  applyField == 'SELL 200') {
      const disTotal = document.getElementById('discount-total');
   const disPrice = perTo*0.2;
   disTotal.innerText = disPrice;
   const fiTo = document.getElementById('total');
   const totalFi = perTo - disPrice;
   fiTo.innerText = totalFi;
      
   }
   else{
      alert('invalid coupon')
   }
    
   
})

function finalTotal(category){
   const finalTotal = document.getElementById('total').innerText;
   const finalTotalPrice = parseInt(finalTotal);

   if (category == 'inside') {
      setInnerText('total', finalTotalPrice+10);  
   }
   else if(category = 'outside'){
      setInnerText('total', finalTotalPrice+50);
   }
   else{
      setInnerText('total', finalTotalPrice);
   }

   const orderBtn = document.getElementById('order');
   

    if (finalTotalPrice >=100) {
       orderBtn.removeAttribute('disabled');  
    }
    else{
       orderBtn.setAttribute('disabled',true)
    }
}






function hiddenSection() {
   const homeSection = document.getElementById('one');
   homeSection.classList.add('hidden')
   const formSection = document.getElementById('two');
   formSection.classList.remove('hidden')
}






function setInnerText(id, value) {

   document.getElementById(id).innerText = value;
   
}