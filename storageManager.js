import { updateDisplay } from "./finance-tracker.js";
import { budgetSpent, budget } from "./budgetManager.js";
import { expenses } from "./expenseManager.js";

export function setLocalStorage() {
  localStorage.setItem("expense", JSON.stringify(expenses));
}
export function loadLocalStorage() {
  expenses.length = 0;
  expenses.push(JSON.parse(localStorage.getItem("expense")));
}

loadLocalStorage();
console.log(expenses);
