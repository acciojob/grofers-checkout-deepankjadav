const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
	let priceElements = document.querySelectorAll(".price");
  let total = 0;
  priceElements.forEach((priceElement) => {
    total += parseFloat(priceElement.textContent);
  });
  
  // Display total in #ans element
  const ansElement = document.getElementById("ans");
  if (ansElement) {
    ansElement.textContent = `Total Price: Rs ${total}`;
  }
  
};

getSumBtn.addEventListener("click", getSum);

