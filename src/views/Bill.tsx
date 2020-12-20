import React, {useState} from "react";
import Nav from "../components/Nav";
import Layout from "../components/Layout";
import styled from "styled-components";
import {TagsSection} from './bill/TagsSection'
import {NotesSection} from './bill/NotesSection';
import {CategorySection} from './bill/CategorySection';
import {NumSection} from './bill/NumSection';

//神奇的styled用法
const MyLayout=styled(Layout)`
flex-grow: 1;
display: flex;
flex-direction: column;
`;
function Bill() {
    const [state,setState]=useState({
        selectedTagIds:[],
        note:"",
        selectedCategory:"支出",
        output:'0'
    });
    type State=typeof state;
    const onChange=(obj:Partial<State>)=>{
        setState({...state,...obj})
    };
    return (
        <>
        <MyLayout >
            <TagsSection selectedTagIds={state.selectedTagIds}
                         onChange={(stateNew)=>{onChange(stateNew)}} />
            <NotesSection note={state.note}
                          onChange={(note)=>{onChange({note})}}/>
            <CategorySection selectedCategory={state.selectedCategory}
                             onChange={(selectedCategory)=>{onChange({selectedCategory})}}/>
            <NumSection output={state.output}
                        onChange={(output)=>{onChange({output})}} />
        </MyLayout>
        <Nav/>
        </>
    )
}
export  default Bill;