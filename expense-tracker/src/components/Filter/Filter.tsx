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
    handleFilter(selectedCategory, date); // Filter by category and selected date
  };

  return (
    <div className="filter-container">
      <label>Filter by Category:</label>
      <select
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

      <label>Filter by Date:</label>
      <input
        type="date"
        className="form-control"
        value={selectedDate}
        onChange={handleDateChange}
      />
    </div>
  );
};

export default Filter;
