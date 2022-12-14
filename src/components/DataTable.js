/*
Component to show the table with data

25-08-2022
*/

import '../App.css';

function DataTable({tableRows, values, id}){
    return(
    <table className="Data-table" data-testid={id}>
      <thead className="Data-header">
        <tr>
          {tableRows.map((row, index) => {
            return <th key={index}>{row}</th>;
          })}
        </tr>
      </thead>
      <tbody className="Data-values">
        {values.map((row, index) => {
          return (
            <tr key={index}>
              {row.map((item, col) => {
                return <td key={col}>{item}</td>;
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
    );
}

export default DataTable;