import React from "react";
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
    return (
        <>
        <MyLayout>
            <TagsSection />
            <NotesSection />
            <CategorySection />
            <NumSection />
        </MyLayout>
        <Nav/>
        </>
    )
}
export  default Bill;