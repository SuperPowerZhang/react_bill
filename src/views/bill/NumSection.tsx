import React, {useState} from "react";
import {NumWrapper} from './NumWrapper';
import {GenerateNum} from './GenerateNum';

const NumSection:React.FC=()=>{
    const [output,setOutPut]=useState<string>("0");
    const getNumber=(text:string)=>{
        if(text==='OK'){
            //TODO
            console.log('ok')
        }else{
            let outputNew=GenerateNum(text,output)||'0';
            setOutPut(outputNew);
        }
    }
    const numbers:string[]=['1','2','3','删除','4','5','6','清空','7','8','9','OK','0','.'];
    return(
        <NumWrapper>
            <div>
                {output}
            </div >
            <ul className="bill-num">
                {numbers.map(num=>{
                    return <li key={num} onClick={()=>getNumber(num)}>{num}</li>
                })}
            </ul>
        </NumWrapper>
    )
};
export {NumSection};