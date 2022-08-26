/*
App to convert student data to USA format

Sebastian Gonzalez Villacorta
Andreina Isabel Sananez Rico
Karla Valeria Mondragon Rosas

25-08-2022
*/

import "./App.css";
import { useState } from "react";
import FileUpload from "./components/FileUploader";
import DataDisplay from "./components/DataDisplay";

function App() {
  
  //State to store table Column name
  const [tableRows, setTableRows] = useState([]);

  //State to store the values
  const [values, setValues] = useState([]);

  //State to store the converted values
  const [changedValues, setChangedValues] = useState([]);

  return (
    <div>
      <div>
        Sebastian González <br></br>
        Andreína Sanánez <br></br>
        Karla Mondragón <br></br>
        <h2 id="titleDoc"> CSV File Reader and Converter </h2> 
      </div>
      {/*File Upload*/}
      <FileUpload
        setTableRows={setTableRows}
        setValues={setValues}
        setChangedValues={setChangedValues}
      />
      {/*Display Tables*/}
      <DataDisplay
        tableRows={tableRows}
        values={values}
        changedValues={changedValues}
        />
    </div> 
    
  );
}

export default App;