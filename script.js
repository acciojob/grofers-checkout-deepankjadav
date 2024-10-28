const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
//Add your code here
	let priceElements = document.querySelectorAll(".price");
  
  // Calculate the total sum by iterating over the price elements
  let total = 0;
  priceElements.forEach((priceElement) => {
    total += parseFloat(priceElement.textContent);
  });
  
  // Create a new row and cell for the total price
  let totalRow = document.createElement("tr");
  let totalCell = document.createElement("td");
  
  // Set attributes for the total cell to span both columns
  totalCell.colSpan = 2;
  totalCell.textContent = `Total Price: Rs ${total}`;
  totalRow.appendChild(totalCell);
  
  // Append the new row to the table
  document.querySelector("table").appendChild(totalRow);
  
};

getSumBtn.addEventListener("click", getSum);

