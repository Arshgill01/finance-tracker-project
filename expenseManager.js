import { budget, budgetSpent } from "./budgetManager.js";
import { updateDisplay } from "./finance-tracker.js";
import { updateChart } from "./chartManager.js";
export let expenses = [];
export let expense;
export let date;
export let category;

let totalAmount = 0;
loadLocalStorage();

updateHeaderButtons();

export const expenseDate = document.querySelector("#expense-date");
export const expenseCategory = document.querySelector("#expense-category");

export const addButtonElement2 = document.querySelector(".js-add-button-2");
// the input section, and the event listener function for the input section add function.
addButtonElement2.addEventListener("click", () => {
  expense = Number(budgetSpent.value);
  date = expenseDate.value;
  category = expenseCategory.value;
  const expensesObject = {
    amount: expense,
    date: date,
    category: category,
  };
  expenses.push(expensesObject);
  totalAmount += expensesObject.amount;

  updateHeaderButtons();
  updateDisplay();
  updateChart();
  setLocalStorage();
  console.log(expenses);
});

// function to generate the three headerbuttons -- income, balance and budget.
export function setLocalStorage() {
  localStorage.setItem("expense", JSON.stringify(expenses));
}
export function loadLocalStorage() {
  expenses = JSON.parse(localStorage.getItem("expense"));
  if (!expenses) {
    expenses = [];
  }
  expenses.forEach((expense) => {
    totalAmount += expense.amount;
  });
}

export function updateHeaderButtons() {
  let headerButtonsHTML = "";

  headerButtonsHTML += `
    <div class="income-button">Income </div>
    <div class="expense-button">Expense </div>
    <div class="balance-button">Balance </div>
`;
  document.querySelector(".header-buttons").innerHTML = headerButtonsHTML;
  document.querySelector(".income-button").textContent = `Income: $${budget}`;
  document.querySelector(".balance-button").textContent =
    `Balance: $${budget - totalAmount}`;
  document.querySelector(".expense-button").textContent =
    `Expenses: $${totalAmount}`;
}
