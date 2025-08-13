import { expenses } from "./expenseManager.js";
import { budget } from "./budgetManager.js";
import { updateChart } from "./chartManager.js";
import { categoryLabels } from "./chartManager.js";
let categoryColor = "";

export function updateDisplay() {
  let total = 0;
  let htmlTotal = "";
  let categoryObject = {};

  console.log(typeof categoryObject);
  // pushing each category to the categoryObject with it's respective amount.
  expenses.forEach((expense) => {
    if (categoryObject[expense.category]) {
      categoryObject[expense.category] += expense.amount;
    } else {
      categoryObject[expense.category] = expense.amount;
    }
  });
  updateChart();
  // total variable, will store the total amount, adding all the amounts of each of the products that are there in the cart.
  total = Object.values(categoryObject).reduce(
    (sum, amount) => sum + amount,
    0,
  );
  // looping over the categoryObject object and doing a bunch of things.
  // 1. defining and calculating the amount variable
  // 2. defining and calculating the percentage taken by each category.
  // 3. generating the HTML -- the right-container section.
  Object.keys(categoryObject).forEach((category) => {
    const amount = categoryObject[category];
    const categoryPercentage = (amount / total) * 100;

    categoryColor = categoryLabels[category];
    htmlTotal += `
      <div  class="expense-item" data-category="${category}">
         <div class="color-dot" style="background-color: ${categoryColor}"></div>
        <div class="category-info">
      <div class="category-section">
        <span class="category-name">${category}</span>
        <span class="percentage">(${categoryPercentage.toFixed(1)}%)</span>
      </div>
        </div>

     <div class="category-amount">$${amount}</div>
      <button class="js-delete-button">Delete</button>
      </div>
    `;
  });

  /*
  if (total > 0) {
    htmlTotal += `<div class="total-display">Total Spent: $${total}</div>`;
  }
*/
  // conditional statements to check if both the budget and total variables are valid.
  // and if they are, we're generating the HTML for the budget status.
  if (total > 0) {
    htmlTotal += `
      <div class="total-display">
        <div class="total-label">Total:</div>
        <div class="total-amount">$${total.toFixed(2)}</div>
      </div>
    `;
  }
  if (budget > 0 && total > 0) {
    if (total > budget) {
      htmlTotal += `<div class="budget-status over-budget">⚠️ Over budget by $${total - budget}</div>`;
    } else {
      htmlTotal += `<div class="budget-status under-budget">✅ Under budget by $${budget - total}</div>`;
    }
  }

  document.querySelector(".js-div").innerHTML = htmlTotal;
  document.querySelector(".js-div").addEventListener("click", (event) => {
    if (event.target.classList.contains("js-delete-button")) {
      const expenseItemToRemove = event.target.parentElement;
      expenseItemToRemove.remove();

      const categoryName =
        expenseItemToRemove.querySelector("span").textContent;
      if (categoryName) {
        delete categoryObject[categoryName];
      }
    }
  });
}

//delete function: the not-so-efficient method
/*
function deleteButtonCategory(category) {
  const buttonToBeDeleted = document.querySelectorAll(".js-delete-button");
  buttonToBeDeleted.forEach((button) => {
    button.addEventListener("click", (event) => {
      const expenseItemToBeDeleted = event.target.parentElement;
      expenseItemToBeDeleted.remove();
    });
  });
}
*/
