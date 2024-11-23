import React, { useState } from "react";
import "./App.css";
import FormComponent from "./components/Form/Form";
import DisplayComponent from "./components/Display/DisplayComponent";
import Filter from "./components/Filter/Filter"; // Import Filter component

// Define the type for the data
interface Data {
  description: string;
  amount: number;
  category: string;
}

const App: React.FC = () => {
  const [dataList, setDataList] = useState<Data[]>([]);
  const [filteredData, setFilteredData] = useState<Data[]>([]);

  // Categories list for dropdown in Filter
  const categories = ["Food", "Transport", "Entertainment", "Bills", "Other"];

  // Function to handle form submission
  const handleSubmit = (data: Data) => {
    setDataList([...dataList, data]);
    setFilteredData([...dataList, data]); // Update filtered data as well
  };

  // Function to delete a record
  const handleDelete = (index: number) => {
    const newDataList = dataList.filter((_, i) => i !== index);
    setDataList(newDataList);
    setFilteredData(newDataList); // Update filtered data after deletion
  };

  // Handle category filtering
  const handleFilter = (category: string) => {
    if (category) {
      setFilteredData(dataList.filter((data) => data.category === category));
    } else {
      setFilteredData(dataList); // Show all if no category is selected
    }
  };

  return (
    <div className="App">
      <FormComponent onSubmit={handleSubmit} />

      {/* Add Filter component above the Display */}
      <Filter categories={categories} handleFilter={handleFilter} />

      <DisplayComponent dataList={filteredData} handleDelete={handleDelete} />
    </div>
  );
};

export default App;
