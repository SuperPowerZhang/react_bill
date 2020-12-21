import React, {useState} from "react";
import Nav from "../components/Nav";
import Layout from "../components/Layout";
import styled from "styled-components";
import {TagsSection} from './bill/TagsSection'
import {NotesSection} from './bill/NotesSection';
import {CategorySection} from './bill/CategorySection';
import {NumSection} from './bill/NumSection';
import {useRecords} from "../hooks/useRecords";

//神奇的styled用法
const Wrapper=styled.div`
height: 100vh;
display: flex;
flex-direction: column;
`;
type RecordItemString={
    tagIds:number[],
    note:string,
    category:"收入"|"支出",
    amount:string
}
const defaultState:RecordItemString={
    tagIds:[],
    note:"",
    category:"支出",
    amount:'0'
};
const CategoryWrapper=styled.section`
background-color:rgb(196, 196, 196);
`;
function Bill() {
    const [state,setState]=useState<RecordItemString>(defaultState);
    const {addRecord}=useRecords();
    type State=typeof state;
    const onChange=(obj:Partial<State>)=>{
        setState({...state,...obj})
    };
    const onSubmit=()=>{
        let amountNum=parseFloat(state.amount);
        //TODO 表单验证样式优化，alert不友好的
        if(state.tagIds.length<=0){
            return alert('标签还没选择奥')
        }
        if(amountNum<=0){
            return alert('金额还没输入叭')
        }
        addRecord({...state,amount:amountNum,createDate:(new Date()).toISOString()});
        setState(defaultState);
    };
    return (
        <Wrapper id="12345">
        <Layout >
            <TagsSection tagIds={state.tagIds}
                         onChange={(stateNew)=>{onChange(stateNew)}} />
            <NotesSection note={state.note}
                          onChange={(note)=>{onChange({note})}}/>
            <CategoryWrapper>
                <CategorySection category={state.category}
                                 onChange={(category)=>{onChange({category})}}/>
            </CategoryWrapper>
            <NumSection amount={state.amount}
                        onChange={(amount)=>{onChange({amount})}}
                        onOk={onSubmit}/>
        </Layout>
        <Nav/>
        </Wrapper>
    )
}
export  default Bill;