// console.log('HAFIZA');
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
  }
  alert('rrr')
});



