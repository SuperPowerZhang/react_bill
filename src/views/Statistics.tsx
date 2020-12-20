import React from "react";
import Nav from "../components/Nav";
import Layout from "../components/Layout";
import styled from "styled-components";
import {useRecords} from "../hooks/useRecords";

const MyLayout=styled(Layout)`
height: 100vh;
`;
const RecordsList=styled.ul`
>li{
display: flex;
justify-content: space-between;
border: 1px solid red;
}
`;
const TitleDiv=styled.ul`
display: flex;
justify-content: space-between;
>li{
flex-grow: 1;
text-align: center;
background-color:rgb(255, 255, 255);
}
`;

function Statistics() {
    const {records}=useRecords();
    return (
        <>
        <MyLayout>
            <TitleDiv>
                <li>收入</li>
                <li>支出</li>
            </TitleDiv>
            <RecordsList>
                {records.map((record)=>{
                    if(record.category==='支出'){
                        return <li key={record.createDate}>
                            <span>{record.tagIds}</span>
                            <span>{record.amount}</span>
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