// login button event handler

document.getElementById("loginbtn").addEventListener("click", function (event) {
  document.getElementById("login-area").style.display = "none";
  document.getElementById("transaction-area").style.display = "block";
});

//common code function

function updateSpan(id, addMoney) {
  const current = document.getElementById(id).innerText;
  const existing = parseFloat(current);
  const newCurrent = addMoney + existing;
  document.getElementById(id).innerText = newCurrent;
}

function inputAmount(id) {
  const addAmount = document.getElementById(id).value;
  const updateAddMoney = parseFloat(addAmount);
  return updateAddMoney;
}
// deposit button event handler

document.getElementById("deposit").addEventListener("click", function (event) {
  const depositMoney = inputAmount("depositAmount");

  updateSpan("currentDeposit", depositMoney);
  updateSpan("currentBalance", depositMoney);

  document.getElementById("depositAmount").value = "";
});

// withdraw button event handler

document.getElementById("withdraw").addEventListener("click", function (event) {
  const withdrawMoney = inputAmount("withdrawAmount");

  updateSpan("currentWithdraw", withdrawMoney);
  updateSpan("currentBalance", withdrawMoney * -1);

  document.getElementById("withdrawAmount").value = "";
});
