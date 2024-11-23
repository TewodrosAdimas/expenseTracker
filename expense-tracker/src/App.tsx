import React, { useState } from "react";
import "./App.css";
import FormComponent from "./components/Form/Form";
import DisplayComponent from "./components/Display/DisplayComponent";
import Filter from "./components/Filter/Filter";

interface Data {
  description: string;
  amount: number;
  category: string;
  date: string;
}

const App: React.FC = () => {
  const [dataList, setDataList] = useState<Data[]>([]);
  const [filteredData, setFilteredData] = useState<Data[]>([]);

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

  // Handle both category and date filtering
  const handleFilter = (category: string, date: string) => {
    let filtered = dataList;

    if (category) {
      filtered = filtered.filter((data) => data.category === category);
    }

    if (date !== "all" && date !== "") {
      filtered = filtered.filter((data) => data.date === date); // Filter by specific date
    }

    setFilteredData(filtered); // Update filtered data based on category and date
  };

  return (
    <div className="App">
      <FormComponent onSubmit={handleSubmit} />
      <Filter categories={categories} handleFilter={handleFilter} />
      <DisplayComponent dataList={filteredData} handleDelete={handleDelete} />
    </div>
  );
};

export default App;
