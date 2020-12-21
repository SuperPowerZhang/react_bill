import React, {useState} from "react";
import Nav from "../components/Nav";
import Layout from "../components/Layout";
import styled from "styled-components";
import {useRecords} from "../hooks/useRecords";
import {CategorySection} from "./bill/CategorySection";
// import day from "dayjs";
import {useTags} from "../hooks/useTags";

const MyLayout=styled(Layout)`
height: 100vh;
`;
const CategoryWrapper=styled.div`
background-color:#fff;
`
const RecordsList=styled.ul`
margin-bottom:auto;
>li{
display: flex;
justify-content: space-between;
padding:10px 16px;
line-height: 20px;
font-size: 16px;
background: #FFFFFF;
&.title{
background: #f5f5f5;
}
>.note{
margin-left: 10px;
margin-right: auto;
color: #999999;
}
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
                <li className="title">
                    <span>今天</span>
                    <span>￥1000</span>
                </li>
                {records.filter(record=>record.category===category)
                        .map((record)=>{
                            return <li key={record.createDate}>
                            <span>
                                {record.tagIds.map((id)=>{
                            return " "+findTag(id).name
                                })}
                            </span>
                            <span className="note">{record.note}</span>
                            <span>￥{record.amount}</span>

                            </li>
                })}
            </RecordsList>
            <Nav/>
        </MyLayout>
        </>
    )
}

export default  Statistics;