const billValue = document.querySelector('.bill');
     const serviceValue = document.querySelector('#service');
     const peoples = document.querySelector('.people-nums');

     let tipamount = document.querySelector('.tip-amount');

     function Calculator() {
         let valueBill = billValue.value;
         let serviceValueBill = serviceValue.value;
         let people = peoples.value;
         
         if (valueBill == "" || serviceValueBill == 0) {
          // alert('Please select a bill');
          return;
         }
         if (people == "" || people <= 1) {
          people = 1;
         }
         else {
          tipamount.style.display = "block";
         }
         
         let total = (valueBill * serviceValueBill) / people;

         total = Math.round(total * 100) / 100;

         total = total.toFixed(2);

         tipamount.innerHTML = `
               <p>TIP AMOUNT</p>
               <p class="each">$ ${total}</p>
         `; 

     }
     document.querySelector('.result').onclick = function () {

          Calculator()
     }