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
            <NotesSection>
                <span>备注</span>
                <input type="text" placeholder="在这里添加备注" />
            </NotesSection>
            <CategorySection>
                <ul className="bill-type">
                    <li>收入</li>
                    <li className="selected">支出</li>
                </ul>
            </CategorySection>
            <NumSection>
                <div>
                    100
                </div >
                <ul className="bill-num">
                <li>1</li>
                <li>2</li>
                <li>3</li>
                <li>删除</li>
                <li>4</li>
                <li>5</li>
                <li>6</li>
                <li>清空</li>
                <li>7</li>
                <li>8</li>
                <li>9</li>
                <li>OK</li>
                <li>0</li>
                <li>.</li>
                </ul>
            </NumSection>
        </MyLayout>
        <Nav/>
        </>
    )
}
export  default Bill;