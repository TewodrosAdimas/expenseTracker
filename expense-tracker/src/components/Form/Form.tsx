import React, { useState } from "react";
import "./styles.css"; // Import custom CSS styles
import "font-awesome/css/font-awesome.min.css";

interface FormProps {
  onSubmit: (data: {
    description: string;
    amount: number;
    category: string;
    date: string;
  }) => void;
}

const FormComponent: React.FC<FormProps> = ({ onSubmit }) => {
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState<number>(0); // Keep amount as a number
  const [category, setCategory] = useState("");
  const [date, setDate] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (description && amount && category && date) {
      onSubmit({ description, amount, category, date });
      // Reset form after submission
      setDescription("");
      setAmount(0);
      setCategory("");
      setDate("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <div className="form-group">
        <label>Description:</label>
        <input
          type="text"
          className="form-control"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Enter description"
        />
      </div>

      <div className="form-group">
        <label>Amount:</label>
        <input
          type="number"
          className="form-control"
          value={amount}
          onChange={(e) => setAmount(parseFloat(e.target.value) || 0)} // Convert to number
          placeholder="Enter amount"
        />
      </div>

      <div className="form-group">
        <label>Category:</label>
        <select
          className="form-control"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="">Select Category</option>
          <option value="Food">Food</option>
          <option value="Transport">Transport</option>
          <option value="Entertainment">Entertainment</option>
          <option value="Bills">Bills</option>
          <option value="Other">Other</option>
        </select>
      </div>

      <div className="form-group">
        <label>Date:</label>
        <input
          type="date"
          className="form-control"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
      </div>

      <button type="submit" className="btn btn-primary submit-btn">
        Submit
      </button>
    </form>
  );
};

export default FormComponent;
