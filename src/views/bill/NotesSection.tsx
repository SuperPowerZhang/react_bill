import styled from "styled-components";
import React, {useRef, useState} from "react";

const NotesWrapper=styled.section`
display: flex;
justify-content: flex-start;
padding: 20px;
background-color:rgb(245, 245, 245);
>span{
color:#333333;
line-height: 22px;
}
>input{
margin-left: 20px;
}
`;
type Props={
    note:string,
    onChange:(stateNew:object)=>void
}
const NotesSection:React.FC<Props>=(props)=>{
    const {onChange}=props;
    const inputRef=useRef<HTMLInputElement>(null);
    const getNote=()=>{
        if(inputRef.current){
            const note=inputRef.current.value;
            onChange({note:note})
        }
    };
    return (
        <NotesWrapper>
            <span>备注</span>
            <input  ref={inputRef} onBlur={getNote} type="text" placeholder="在这里添加备注" />
        </NotesWrapper>
    )
};
export {NotesSection};