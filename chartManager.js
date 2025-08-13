import { expenses } from "./expenseManager.js";
export let myChart = null;
export let categoryLabels = {};
// the updateChart function - using a categoryTotal object, we're saving the amount respective to each category.
// and then we're calculating the categoryLabels variable, which contains the labels associated with each category.
// the myChart variable contains the parameters offered by chartjs library.
//
export function updateChart() {
  if (expenses.length === 0) {
    document.querySelector(".chart-container").classList.add("hidden");
    return;
  } else {
    document.querySelector(".chart-container").classList.remove("hidden");
  }
  let categoryTotal = {};
  expenses.forEach((expense) => {
    if (categoryTotal[expense.category]) {
      categoryTotal[expense.category] += expense.amount;
    } else {
      categoryTotal[expense.category] = expense.amount;
    }
  });
  // Destroy the old chart if it exists
  if (myChart) {
    myChart.destroy();
  }

  const ctx = document.getElementById("myChart").getContext("2d");
  myChart = new Chart(ctx, {
    type: "pie", // or 'bar', 'line', etc.
    data: {
      labels: Object.keys(categoryTotal),
      datasets: [
        {
          data: Object.values(categoryTotal),
          backgroundColor: [
            "cyan",
            "red",
            "yellow",
            "green",
            "purple",
            "magenta",
          ],
          borderColor: ["black"],
          borderWidth: 2,
        },
      ],
    },
    options: {
      // Chart configuration goes here
    },
  });

  Object.keys(categoryTotal).forEach((category) => {
    const categoryIndex = myChart.data.labels.indexOf(category);
    if (categoryIndex !== -1) {
      categoryLabels[category] =
        myChart.data.datasets[0].backgroundColor[categoryIndex];
    }
  });
}
