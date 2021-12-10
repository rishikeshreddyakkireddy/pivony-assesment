import React from 'react';
import { parse } from "papaparse";

export default function Names({options , isHeaders}) {
    if(isHeaders === "yes" && options != null){
        const result = parse(options,{header:true});
        let columnNames = [];
        if(result && result.data){
            for (var key in result.data[0]) {
                columnNames.push(key);
            }
            return   (columnNames.map(name => 
                    <option key={name}>{name}</option>)
            );
        }
    }else if(isHeaders === "No" && options != null){
        const result = parse(options);
        let column = [];
        for(let i=1;i<=result.data.length;i++){
            column.push(i);
        }
        return (
            column.map(name => 
                <option key={name}>Column : {name}</option>)
        )
    }
    return (
        <option hidden={true}></option>
    )
}
