# Finance Tracker

A modern, interactive web application for tracking personal expenses and managing monthly budgets with visual analytics.

## Features

- **Budget Management**: Set and track your monthly budget
- **Expense Tracking**: Record expenses with amount, date, and category
- **Visual Analytics**: Interactive pie chart showing expense distribution by category
- **Real-time Statistics**: View income, expenses, and remaining balance at a glance
- **Category-based Organization**: Pre-defined expense categories including:
  - Electricity
  - Car insurance
  - Rent/Mortgage
  - Takeout
  - Groceries
  - Miscellaneous (Movie, Date, Medical Expenses)
- **Budget Alerts**: Visual warnings when spending exceeds budget
- **Persistent Storage**: All data saved to browser's local storage
- **Delete Functionality**: Remove entire categories of expenses

## Tech Stack

- **HTML5**: Structure and layout
- **CSS3**: Modern styling with gradients and responsive design
- **JavaScript (ES6 Modules)**: Modular architecture
- **Chart.js**: Interactive pie chart visualization
- **Local Storage API**: Client-side data persistence

## Project Structure

```
├── index.html              # Main HTML structure
├── finance-tracker.js      # Core application logic and display updates
├── finance-tracker.css     # Main styling
├── expenseManager.js       # Expense tracking and management
├── expenseManager.css      # Expense-specific styling
├── budgetManager.js        # Budget setting and tracking
├── budgetManager.css       # Budget-specific styling
├── chartManager.js         # Chart.js integration and visualization
├── chartManager.css        # Chart-specific styling
├── storageManager.js       # Local storage utilities
└── eslint.config.mjs       # ESLint configuration
```

## Getting Started

### Prerequisites

- Modern web browser (Chrome, Firefox, Safari, Edge)
- No server or build process required

### Installation

1. Clone or download the repository:
   ```bash
   git clone <repository-url>
   cd finance-tracker-project101
   ```

2. Open `index.html` in your web browser:
   ```bash
   open index.html
   ```
   Or simply double-click the `index.html` file.

## Usage

### Setting Your Budget

1. Enter your monthly budget in the "Monthly Budget" input field
2. Click the "Add" button to save
3. Your budget will appear in the header as "Income"

### Adding Expenses

1. Enter the expense amount in the "How much did you spend?" field
2. Select the date using the date picker
3. Choose an appropriate category from the dropdown menu
4. Click the "Add" button to record the expense

### Viewing Analytics

- **Header Buttons**: Shows Income, Expenses, and Balance in real-time
- **Pie Chart**: Visual breakdown of expenses by category with color coding
- **Right Panel**: Detailed list showing:
  - Each category with its percentage of total spending
  - Dollar amount per category
  - Color-coded dots matching the pie chart
  - Delete button for each category
  - Total spending summary
  - Budget status (over/under budget alerts)

### Managing Expenses

- Click the "Delete" button next to any category to remove all expenses in that category
- All changes are automatically saved to local storage

## Key Features Explained

### Modular Architecture

The application uses ES6 modules for clean code separation:
- **expenseManager.js**: Handles all expense-related operations
- **budgetManager.js**: Manages budget settings and calculations
- **chartManager.js**: Controls Chart.js visualization
- **storageManager.js**: Manages localStorage operations
- **finance-tracker.js**: Coordinates all modules and updates the UI

### Data Persistence

All data is stored in the browser's localStorage:
- Budget settings persist across sessions
- Expense history is automatically saved
- Data remains available even after closing the browser

### Visual Feedback

- **Color-coded categories**: Each category has a unique color in both the chart and list
- **Percentage calculations**: Shows what portion of spending each category represents
- **Budget alerts**: 
  - ✅ Green "Under budget" message when spending is within limits
  - ⚠️ Red "Over budget" warning when spending exceeds budget

## Browser Compatibility

- Chrome (recommended)
- Firefox
- Safari
- Edge
- Any modern browser with ES6 module support

## Development

### ESLint Configuration

The project includes ESLint configuration (`eslint.config.mjs`) for code quality and consistency.

### File Organization

CSS files are split by feature:
- `finance-tracker.css`: Global styles and layout
- `expenseManager.css`: Expense form styling
- `budgetManager.css`: Budget section styling
- `chartManager.css`: Chart visualization styling

## Future Enhancements

Potential features for future versions:
- Export data to CSV/PDF
- Custom category creation
- Date range filtering
- Multiple budget periods
- Income tracking
- Recurring expense support
- Dark/light theme toggle
- Mobile responsive improvements

## License

This project is open source and available for personal and educational use.

## Contributing

Contributions, issues, and feature requests are welcome. Feel free to check issues page if you want to contribute.

---

**Made with ❤️ for better personal finance management**
