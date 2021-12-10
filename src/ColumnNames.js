import React from 'react';
import Names from './Names';

function ColumnNames({options, isHeaders}){

    return (
        <select name="columnNames" defaultValue={'DEFAULT'}>
              <Names options={options} isHeaders={isHeaders} />
              <option value="DEFAULT" hidden={true}> User Feedback </option>
        </select>
    )
}

export default ColumnNames;


// const [columnName,setColumnName] = useState(null); 
// function setSelectedColumnName(name){
//     setColumnName(name);
// }