// console.log('HAFIZA');
document.getElementById('btn-add-money').addEventListener('click',function(event){
  event.preventDefault();
  // value from input field 
  const addMoney = document.getElementById("input-add-money").value;
  const addMoneyNumber = parseFloat(addMoney);
  console.log(addMoney);
  if(addMoneyNumber > 0 ) {
    const balance = document.getElementById('account-balance').innerText;
  console.log(balance);
  const balanceNUmber = parseFloat(balance);

  const newBalance =  addMoneyNumber + balanceNUmber;

  document.getElementById('account-balance').innerText = newBalance;
  }
  
})



