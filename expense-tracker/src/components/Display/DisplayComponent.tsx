import React from "react";
import "./styles.css";

interface Data {
  description: string;
  amount: number;
  category: string;
  date: string; // Add date field
}

interface DisplayComponentProps {
  dataList: Data[];
  handleDelete: (index: number) => void;
}

const DisplayComponent: React.FC<DisplayComponentProps> = ({
  dataList,
  handleDelete,
}) => {
  // Calculate the total amount
  const totalAmount = dataList.reduce((total, data) => total + data.amount, 0);

  return (
    <div className="mt-4">
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Description</th>
            <th>Amount</th>
            <th>Category</th>
            <th>Date</th> {/* Add Date header */}
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {dataList.map((data, index) => (
            <tr key={index}>
              <td>{data.description}</td>
              <td>{data.amount}</td>
              <td>{data.category}</td>
              <td>{data.date}</td> {/* Display the date */}
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => handleDelete(index)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {/* Display the total amount */}
      <div className="total-amount">
        <strong>Total: </strong>${totalAmount.toFixed(2)}
      </div>
    </div>
  );
};

export default DisplayComponent;
