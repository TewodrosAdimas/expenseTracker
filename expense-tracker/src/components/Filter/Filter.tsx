import React, { useState } from "react";
import "./styles.css";

interface FilterProps {
  categories: string[];
  handleFilter: (category: string) => void;
}

const Filter: React.FC<FilterProps> = ({ categories, handleFilter }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>("");

  const onCategoryChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCategory(event.target.value);
    handleFilter(event.target.value);
  };

  return (
    <div className="filter-container">
      <select
        className="form-select"
        value={selectedCategory}
        onChange={onCategoryChange}
      >
        <option value="">All Categories</option>
        {categories.map((category, index) => (
          <option key={index} value={category}>
            {category}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Filter;
