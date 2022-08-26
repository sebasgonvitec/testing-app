/**
 * Component to display the two tables
 * Original data and processed data
 * 
 * 25-08-2022
 */

import '../App.css'
import DataTable from './DataTable';

function DataDisplay(props){
    return(
        <table className="tables" data-testid='contents'>
            <tbody>
                <tr>
                <td>
                    <h2>Original Table</h2>
                    {/* Contents table */}
                    <DataTable
                    tableRows={props.tableRows}
                    values={props.values}
                    id='tablaOriginal'
                    />
                </td>
                <td>
                    <h2>Results Table</h2>
                    {/* Contents table */}
                    <DataTable
                    tableRows={props.tableRows}
                    values={props.changedValues}
                    id='tablaResults'
                    />
                </td>
                </tr>
            </tbody>
        </table>
    );
}

export default DataDisplay;