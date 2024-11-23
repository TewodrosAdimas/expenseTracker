import React, { useState } from "react";
import "./styles.css";

interface FilterProps {
  categories: string[];
  handleFilter: (category: string, date: string) => void;
}

const Filter: React.FC<FilterProps> = ({ categories, handleFilter }) => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedDate, setSelectedDate] = useState("");

  const handleCategoryChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const category = event.target.value;
    setSelectedCategory(category);
    handleFilter(category, selectedDate); // Filter by category and current date
  };

  const handleDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const date = event.target.value;
    setSelectedDate(date);
    handleFilter(selectedCategory, date === "" ? "all" : date); // Filter by category and selected date (or 'all')
  };

  return (
    <div className="filter-container">
      <div className="filter-group">
        <label htmlFor="categorySelect" className="form-label"></label>
        <select
          id="categorySelect"
          className="form-control"
          value={selectedCategory}
          onChange={handleCategoryChange}
        >
          <option value="">All Categories</option>
          {categories.map((category, index) => (
            <option key={index} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>

      <div className="filter-group">
        <label htmlFor="dateInput" className="form-label"></label>
        <input
          type="date"
          id="dateInput"
          className="form-control"
          value={selectedDate}
          onChange={handleDateChange}
        />
      </div>

      <button
        className="btn btn-secondary reset-btn"
        onClick={() => {
          setSelectedDate(""); // Reset the date filter
          handleFilter(selectedCategory, "all"); // Show all entries
        }}
      >
        All Dates
      </button>
    </div>
  );
};

export default Filter;
