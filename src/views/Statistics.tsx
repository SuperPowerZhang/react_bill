import React, {useState} from "react";
import Nav from "../components/Nav";
import Layout from "../components/Layout";
import styled from "styled-components";
import {useRecords} from "../hooks/useRecords";
import {CategorySection} from "./bill/CategorySection";
import day from "dayjs";
import {useTags} from "../hooks/useTags";

const MyLayout=styled(Layout)`
height: 100vh;
`;
const CategoryWrapper=styled.div`
background-color:#fff;
`
const RecordsList=styled.ul`
>li{
display: flex;
justify-content: space-between;
border: 1px solid red;
}
`;

type Category="收入"|"支出"
function Statistics() {
    const {records}=useRecords();
    const [category,setCategory]=useState<Category>('支出');
    const changeCategory=(category:Category)=>{
        setCategory(category)
    };
    const {findTag}=useTags();

    return (
        <>
        <MyLayout>
            <CategoryWrapper>
                <CategorySection category={category}  onChange={changeCategory}/>
            </CategoryWrapper>
            <RecordsList>
                {records.map((record)=>{
                    if(record.category==='支出'){
                        return <li key={record.createDate}>
                            <span>
                                {record.tagIds.map((id)=>{
                            return " "+findTag(id).name
                        })}
                            </span>
                            <span>{record.amount}</span>
                            <span>{day(record.createDate).format("YYYY-MM-DD")}</span>
                            </li>
                    }
                })}
            </RecordsList>
            <Nav/>
        </MyLayout>
        </>
    )
}

export default  Statistics;