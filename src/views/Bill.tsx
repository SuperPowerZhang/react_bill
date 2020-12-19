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
type State={
    tags:string[],
    selectedTags:string[],
    newNote:string,
    selectedCategory:string,
    output:number
}
function Bill() {
    const [state,setState]=useState({
        tags:['衣', '食', '住', '行'],
        selectedTags:[],
        note:"",
        selectedCategory:"支出",
        output:'0'
    });
    const onChange=(obj:object)=>{
        setState({...state,...obj})
    };
    return (
        <>
        <MyLayout >
            <TagsSection tags={state.tags} selectedTags={state.selectedTags}
                         onChange={(stateNew)=>{onChange(stateNew)}} />
            <NotesSection note={state.note}
                          onChange={(stateNew)=>{onChange(stateNew)}}/>
            <CategorySection selectedCategory={state.selectedCategory}
                             onChange={(stateNew)=>{onChange(stateNew)}}/>
            <NumSection output={state.output}
                        onChange={(stateNew)=>{onChange(stateNew)}}/>
        </MyLayout>
        <Nav/>
        </>
    )
}
export  default Bill;