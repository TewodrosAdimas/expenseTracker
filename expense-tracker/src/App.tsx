import React, { useState } from "react";
import FormComponent from "./components/Form/Form";
import DisplayComponent from "./components/Display/DisplayComponent";

const App: React.FC = () => {
  const [dataList, setDataList] = useState<any[]>([]);

  const handleFormSubmit = (data: any) => {
    setDataList((prevData) => [...prevData, data]);
  };

  const handleDelete = (index: number) => {
    const updatedDataList = dataList.filter((_, i) => i !== index);
    setDataList(updatedDataList);
  };

  return (
    <div className="App">
      <FormComponent onSubmit={handleFormSubmit} />
      <DisplayComponent dataList={dataList} handleDelete={handleDelete} />
    </div>
  );
};

export default App;
