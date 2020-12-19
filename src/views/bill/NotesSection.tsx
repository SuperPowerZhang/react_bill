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

const NotesSection:React.FC=()=>{
    const [newNote,setNewNote]=useState<string>("");
    const inputRef=useRef<HTMLInputElement>(null);
    const getNote=()=>{
        if(inputRef.current){
            const note=inputRef.current.value;
            setNewNote(note);
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