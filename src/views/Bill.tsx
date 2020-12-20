import React, {useState} from "react";
import Nav from "../components/Nav";
import Layout from "../components/Layout";
import styled from "styled-components";
import {TagsSection} from './bill/TagsSection'
import {NotesSection} from './bill/NotesSection';
import {CategorySection} from './bill/CategorySection';
import {NumSection} from './bill/NumSection';
import {useRecords} from "../hooks/useRecords";

type RecordItemString={
    tagIds:number[],
    note:string,
    category:"收入"|"支出",
    amount:string
}
//神奇的styled用法
const MyLayout=styled(Layout)`
flex-grow: 1;
display: flex;
flex-direction: column;
`;
const defaultState:RecordItemString={
    tagIds:[],
    note:"",
    category:"支出",
    amount:'0'
};
function Bill() {
    const [state,setState]=useState<RecordItemString>(defaultState);
    const {addRecord}=useRecords();
    type State=typeof state;
    const onChange=(obj:Partial<State>)=>{
        setState({...state,...obj})
    };
    const onSubmit=()=>{
        console.log('okkkkkkkk');
        addRecord({...state,amount:parseFloat(state.amount)})
        setState(defaultState);
    };
    return (
        <>
        <MyLayout >
            <TagsSection tagIds={state.tagIds}
                         onChange={(stateNew)=>{onChange(stateNew)}} />
            <NotesSection note={state.note}
                          onChange={(note)=>{onChange({note})}}/>
            <CategorySection category={state.category}
                             onChange={(category)=>{onChange({category})}}/>
            <NumSection amount={state.amount}
                        onChange={(amount)=>{onChange({amount})}}
                        onOk={onSubmit}/>
        </MyLayout>
        <Nav/>
        </>
    )
}
export  default Bill;