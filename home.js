const validPin = 1234;
const transactionData = [];

// Function to get Input values
function getInputValueNumber(id) {
  const inputFiled = document.getElementById(id);
  const inputFieldValue = inputFiled.value;
  const inputFieldValueNumber = parseInt(inputFieldValue);
  return inputFieldValueNumber;
}

// Function to get innerTEXT
function getInnerText(id) {
  const element = document.getElementById(id);
  const elementValue = element.innerText;
  const elementValueNumber = parseInt(elementValue);

  return elementValueNumber;
}

// Function to set innerText
function setInnerText(value) {
  const availableBalanceElement = document.getElementById("available-balance");
  availableBalanceElement.innerText = value;
}

//Function to Toggle
function handleToggle(id) {
  const forms = document.getElementsByClassName("form");

  for (const form of forms) {
    form.style.display = "none";
  }
  document.getElementById(id).style.display = "block";
}

//Function to Toggle Buttons
function handleButtonToggle(id) {
  const formBtns = document.getElementsByClassName("form-btn");

  for (const btn of formBtns) {
    btn.classList.remove("border-3", "border-[#0874f2]", "bg-[#0874f20d]");
    btn.classList.add("border-[#08080860]");
  }

  document.getElementById(id).classList.remove("border-[#08080860]");

  document
    .getElementById(id)
    .classList.add("border-3", "border-[#0874f2]", "bg-[#0874f20d]");
}
// Add Money Feature
document
  .getElementById("btn-add-money")
  .addEventListener("click", function (e) {
    e.preventDefault();
    const bank = document.getElementById("bank").value;
    const acountNumber = document.getElementById("bank-account-number").value;

    const amount = getInputValueNumber("add-amount");

    if (amount <= 0) {
      alert("Invalid Amount");
      return;
    }

    const pinNumber = getInputValueNumber("pin-number-card");

    const availableBalance = getInnerText("available-balance");

    if (acountNumber.length < 11) {
      alert("Please Provide a Valid Account Number");
      return;
    } else if (pinNumber != validPin) {
      alert("Please Provide a Valid Pin Number");
      return;
    }
    const totalNewAvailableBalance = amount + availableBalance;

    setInnerText(totalNewAvailableBalance);

    const data = {
      name: "Add Money",
      date: new Date().toLocaleTimeString(),
    };

    transactionData.push(data);
  });

//CashOut Money feature
document
  .getElementById("btn-withdraw-money")
  .addEventListener("click", function (e) {
    e.preventDefault();

    const amount = getInputValueNumber("withdraw-amount");

    const availableBalance = getInnerText("available-balance");

    if (amount <= 0 || amount > availableBalance) {
      alert("Invalid amount");
      return;
    }

    const totalNewAvailableBalance = availableBalance - amount;

    console.log(totalNewAvailableBalance);

    setInnerText(totalNewAvailableBalance);
    const data = {
      name: "Cash Out",
      date: new Date().toLocaleTimeString(),
    };

    transactionData.push(data);
  });

//Transfer Money Features
document
  .getElementById("btn-transfer-money")
  .addEventListener("click", function (e) {
    e.preventDefault();

    const amount = getInputValueNumber("transfer-amount");

    const availableBalance = getInnerText("available-balance");

    if (amount <= 0 || amount > availableBalance) {
      alert("Invalid amount");
      return;
    }

    const totalNewAvailableBalance = availableBalance - amount;

    console.log(totalNewAvailableBalance);

    setInnerText(totalNewAvailableBalance);
    const data = {
      name: "Transfer",
      date: new Date().toLocaleTimeString(),
    };

    transactionData.push(data);
  });

// Transaction Features
document
  .getElementById("transaction-btn")
  .addEventListener("click", function (e) {
    e.preventDefault();
    const transactionContainer = document.getElementById(
      "transaction-container"
    );
    transactionContainer.innerText = "";
    for (const data of transactionData) {
      const div = document.createElement("div");
      div.innerHTML = `
      <div class="flex justify-between  p-3 bg-white rounded-2xl items-center mt-5">
          <div class="flex items-center gap-4">

            <div class="rounded-full bg-[#08080810] p-3" >
              <img src="./assets/wallet1.png" class="mx-auto" alt="">
            </div>
            <div>
              <h1 class="font-bold">${data.name}</h1>
              <p>${data.date}</p>
            </div>

          </div>
            <div>
              <div><i class="fa-solid text-2xl fa-ellipsis-vertical"></i></div>
          </div>
        </div>
        
        `;

      transactionContainer.appendChild(div);
    }
  });

//   toggling feature
document.getElementById("add-button").addEventListener("click", function (e) {
  handleToggle("add-money-parent");
  handleButtonToggle("add-button");
});

document
  .getElementById("cash-out-button")
  .addEventListener("click", function (e) {
    handleToggle("cash-out-parent");
    handleButtonToggle("cash-out-button");
  });

document.getElementById("transfer-btn").addEventListener("click", function (e) {
  handleToggle("transfer-money-parent");
  handleButtonToggle("transfer-btn");
});

document.getElementById("bonus-btn").addEventListener("click", function (e) {
  handleToggle("get-bonus-parent");
  handleButtonToggle("bonus-btn");
});

document.getElementById("pay-btn").addEventListener("click", function () {
  handleToggle("pay-bill-parent");
  handleButtonToggle("pay-btn");
});

document
  .getElementById("transaction-btn")
  .addEventListener("click", function (e) {
    handleToggle("transaction-parent");
    handleButtonToggle("transaction-btn");
  });
