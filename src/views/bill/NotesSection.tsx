import styled from "styled-components";
import React, {useRef} from "react";


const NotesWrapper=styled.section`
display: flex;
justify-content: flex-start;
padding: 20px;
flex:0;
background-color:rgb(245, 245, 245);
>span{
color:rgb(148, 57, 57);
line-height: 22px;
}
>input{
margin-left: 20px;
color:rgb(148, 57, 57);
}
`;
type Props={
    note:string,
    onChange:(note:string)=>void
}
const NotesSection:React.FC<Props>=(props)=>{
    const {note,onChange}=props;
    const inputRef=useRef<HTMLInputElement>(null);
    const getNote=()=>{
        if(inputRef.current){
            const note=inputRef.current.value;
            onChange(note)
        }
    };
    return (
        <NotesWrapper>
            <span>备注</span>
            <input value={note} ref={inputRef} onChange={getNote} type="text" placeholder="在这里添加备注" />
        </NotesWrapper>
    )
};
export {NotesSection};