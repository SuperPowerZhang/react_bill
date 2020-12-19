import React, {useState} from "react";
import {NumWrapper} from './NumWrapper';
import {GenerateNum} from './GenerateNum';

type Props={
    output:string,
    onChange:(stateNew:object)=>void
}

const NumSection:React.FC<Props> = (props)=>{
    const output=props.output;
    const onChange=props.onChange;
    const getNumber=(text:string)=>{
        if(text==='OK'){
            //TODO
            console.log('ok')
        }else{
            onChange({output:GenerateNum(text,output)||'0'});
        }
    };
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