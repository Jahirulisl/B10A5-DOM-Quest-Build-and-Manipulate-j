
document.getElementById('btn-add-money').addEventListener('click',function(event){
  event.preventDefault();
  // value from input field 
  const addMoney = document.getElementById("input-add-money").value;
  const addMoneyNumber = parseFloat(addMoney);

  //cash out from total blance...
  const cashOut = document.getElementById("show-btn-cash-out").innerText;
  console.log(cashOut);
  const cashOutNumber = parseFloat(cashOut);

  if(addMoneyNumber > 0 ) {
    const balance = document.getElementById('account-balance').innerText;
   const balanceNUmber = parseFloat(balance);
    
  const newBalance =  addMoneyNumber + balanceNUmber;

  document.getElementById('account-balance').innerText = newBalance;

  const timeBalance =  cashOutNumber -  addMoneyNumber;

   document.getElementById('show-btn-cash-out').innerText = timeBalance;


     // bahir thaka html ar vitor html likhkam....
  const div = document.createElement('div');
  div.classList.add('bg-gray-50');
   div.innerHTML= `<h4 class ="text-2xl font-bold py-8 text-center"></h4>
   <p>${ addMoneyNumber} Taka is Donatefor flood at noakhali,Bangladesh. </p>
   <div> </div>
    `
   document.getElementById('Transaction-section').appendChild(div);









   //add to transaction history start..
  //  const p = document.createElement('p');
  //  p.innerText = `Added: ${addMoneyNumber} Tk.New Balance: ${timeBalance}`;
  // //  console.log(p);
  //  //add to transaction history end..

  //  //should be a common function
  //  document.getElementById('Transaction-container').appendChild(p);




    alert('you have a donated for humankind sucessfully')
  }
  else{
    alert('INVAILD NUMBER')
  }
 
});



