import React, { useState } from "react";
import "./styles.css"; // Import your custom styles

type Category = "Food" | "Transport" | "Utilities" | "Other";

interface Data {
  description: string;
  amount: number;
  category: Category;
}

interface FormComponentProps {
  onSubmit: (data: Data) => void;
}

const FormComponent: React.FC<FormComponentProps> = ({ onSubmit }) => {
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState<number | "">("");
  const [category, setCategory] = useState<Category>("Other");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (description && amount) {
      const newData: Data = { description, amount: Number(amount), category };
      onSubmit(newData);
      setDescription("");
      setAmount("");
      setCategory("Other");
    }
  };

  return (
    <form className="container mt-4 custom-form" onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="description" className="form-label">
          Description:
        </label>
        <input
          id="description"
          type="text"
          className="form-control"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="amount" className="form-label">
          Amount:
        </label>
        <input
          id="amount"
          type="number"
          className="form-control"
          value={amount}
          onChange={(e) => setAmount(Number(e.target.value) || "")}
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="category" className="form-label">
          Category:
        </label>
        <select
          id="category"
          className="form-select"
          value={category}
          onChange={(e) => setCategory(e.target.value as Category)}
          required
        >
          <option value="Food">Food</option>
          <option value="Transport">Transport</option>
          <option value="Utilities">Utilities</option>
          <option value="Other">Other</option>
        </select>
      </div>
      <button type="submit" className="btn btn-primary custom-submit-button">
        Submit
      </button>
    </form>
  );
};

export default FormComponent;
