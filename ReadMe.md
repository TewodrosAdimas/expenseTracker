# Expense Tracker App

## Description

The **Expense Tracker App** is a React application built with TypeScript that allows users to track their expenses. The app features a form to input expense details (description, amount, category, and date), displays the submitted expenses in a table, and provides filtering options to easily view and manage expenses based on categories and dates.

The app also offers a clean, responsive user interface using **Bootstrap** for styling and custom CSS for enhanced visuals.

## Features

- **Expense Form**: Allows users to enter a description, amount (numeric), category (dropdown), and date.
- **Expense Display**: Displays a list of all submitted expenses in a table format, showing the description, amount, category, and the date of the expense.
- **Delete Functionality**: Each expense row has a delete button to remove the item from the list.
- **Category Filter**: Allows users to filter expenses by category using a dropdown.
- **Date Filter**: Provides the ability to filter expenses by date or display all expenses.
- **Responsive Design**: The layout adapts to different screen sizes for a better user experience on mobile devices.

## Installation

1. Clone the repository to your local machine:

   ```bash
   git clone https://github.com/TewodrosAdimas/expenseTracker.git
   cd expense-tracker
   ```

2. Install the dependencies:

   ```bash
   npm install
   ```

3. Run the development server:

   ```bash
   npm start
   ```

   The app should now be running at `http://localhost:3000`.

## Project Structure

```
src/
├── components/
│   ├── Form/
│   │   ├── Form.tsx   # Handles the expense form
│   │   ├── styles.css          # Custom styles for the form
│   ├── Display/
│   │   ├── DisplayComponent.tsx   # Displays the submitted expenses in a table
│   │   ├── styles.css             # Custom styles for the display table
│   ├── Filter/
│   │   ├── Filter.tsx           # Allows filtering by category and date
│   │   ├── styles.css           # Custom styles for the filter
├── App.tsx                        # Main application component
├── index.tsx                      # Entry point for the app
├── index.css                      # Global styles (if needed)
```

## Technologies Used

- **React**: JavaScript library for building user interfaces.
- **TypeScript**: A statically typed superset of JavaScript.
- **Bootstrap**: Front-end framework for responsive, mobile-first web development.
- **CSS**: Custom styles for layout and design.

## How it Works

1. **Form**:

   - Users enter a description, amount, category, and date.
   - Upon submitting the form, the data is stored in the app's state and displayed in the expense list.

2. **Display**:

   - The submitted expenses are shown in a table with columns for the description, amount, category, and date.
   - Each row in the table has a "Delete" button to remove the expense.

3. **Filtering**:
   - **Category Filter**: A dropdown list allows users to select a category to filter the displayed expenses.
   - **Date Filter**: A date picker allows users to filter by date, or select "All Dates" to see all expenses.

## Custom Styling

- **Filter**: Custom styles enhance the filter layout with padding, spacing, and a modern design.
- **Form**: Bootstrap's form-control and custom styling are used to improve the visual appeal and responsiveness of the input form.
- **Display**: The table is styled with Bootstrap to ensure clean display of data, with custom styles for additional spacing and table layout.

## License

This project is licensed under the MIT License.

---
