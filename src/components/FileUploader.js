/*
Component to upload files and process the data

25-08-2022
*/

import '../App.css'
import Papa from "papaparse";
import { format_line } from '../modules/conversions';

function FileUpload(props){
    const changeHandler = (event) => {

        // Passing file data (event.target.files[0]) to parse using Papa.parse
        Papa.parse(event.target.files[0], {
          header: true,
          skipEmptyLines: true,
          //function to process the data read
          complete: function (results) {
            const rowsArray = [];
            const valuesArray = [];
            const changedValuesArray = [];
    
            // Iterating data to get column name and their values
            results.data.map((element) => {
              rowsArray.push(Object.keys(element)); //store names
              valuesArray.push(Object.values(element)); //store values
              changedValuesArray.push(format_line(Object.values(element)));
              //return a null to silence a warning
              return null;
            });
            
            //Store the values in the state
            // Set Filtered Column Names
            props.setTableRows(rowsArray[0]);
    
            // Set Filtered Values
            props.setValues(valuesArray);
    
            //Set converted data
            props.setChangedValues(changedValuesArray);
          },
        });
      };

      return(
        <div>
            <h2>Select a CSV file</h2>
            <input
                type="file"
                name="file"
                accept=".csv"
                onChange={changeHandler}
                style={{ display: "block", margin: "10px auto" }}
                data-testid = 'inputForm'
            />
            <br />
            <br />
        </div>
      );
}

export default FileUpload;