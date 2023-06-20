
let balanceAmount = 0;
const transactionHistoryLimit = 5;

function updateBalance() {
  const balanceElement = document.getElementById("balanceAmount");
  balanceElement.innerText = balanceAmount;
}

function handleEarnings(event) {
  event.preventDefault();
  const amountInput = document.getElementById("amountInput");
  const descInput = document.getElementById("descInput");
  const amount = parseFloat(amountInput.value);
  const desc = descInput.value.trim();

    balanceAmount += amount;
    updateBalance();
    amountInput.value = "";
    descInput.value = "";

    if (desc !== "") {
      displayTransaction(amount, desc);
    }
  
}

function handleExpenses(event) {
  event.preventDefault();
  const amountInput = document.getElementById("amountInput");
  const descInput = document.getElementById("descInput");
  const amount = parseFloat(amountInput.value);
  const desc = descInput.value.trim();

    balanceAmount -= amount;
    updateBalance();
    amountInput.value = "";
    descInput.value = "";

    if (desc !== "") {
      displayTransaction(amount, desc);
    }
}

function displayTransaction(amount, desc) {
    const transactionsList = document.getElementById("transactionsList");
  
    if (transactionsList.children.length >= transactionHistoryLimit) {
      transactionsList.removeChild(transactionsList.firstChild);
    }
  
    const transactionItem = document.createElement("div");
    transactionItem.classList.add("transaction-item");
  
    const transactionText = document.createElement("span");
    transactionText.innerText = desc;
  
    const transactionAmount = document.createElement("span");
    transactionAmount.innerText = amount;
    transactionAmount.style.marginRight = "0";
  
    transactionItem.appendChild(transactionText);
    transactionItem.appendChild(transactionAmount);
    transactionsList.appendChild(transactionItem);
  }
  

document.getElementById("earningsBtn").addEventListener("click", handleEarnings);
document.getElementById("expensesBtn").addEventListener("click", handleExpenses);

updateBalance();
