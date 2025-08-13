import { updateHeaderButtons } from "./expenseManager.js";
export let budget = 0;
loadLocalStorage();
export let overspent = false;
export let htmlTotal = "";

export const monthlyBudget = document.querySelector("#js-monthly-budget");
export const budgetSpent = document.querySelector("#expense-amount");

export const addButtonElement = document.querySelector(".js-add-button");

// an event listener for the budget button, setting the monthly budget and updating the headerbuttons accordingly.
addButtonElement.addEventListener("click", () => {
  budget = Number(monthlyBudget.value);
  console.log(budget);

  updateHeaderButtons();
  setLocalStorage();
});
function setLocalStorage() {
  localStorage.setItem("budget", JSON.stringify(budget));
}
function loadLocalStorage() {
  budget = JSON.parse(localStorage.getItem("budget"));
  if (!budget) {
    budget = 0;
  }
}
