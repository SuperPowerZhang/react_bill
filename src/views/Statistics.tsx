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
`;
const List=styled.div`
margin-bottom:auto;
flex-grow: 1;
 overflow:auto;
>div header{
background: #f5f5f5;
padding:10px 16px;
line-height: 20px;
font-size: 16px;
}
`;
const RecordsList=styled.ul`
>li{
display: flex;
justify-content: space-between;
padding:10px 16px;
line-height: 20px;
font-size: 16px;
background: #FFFFFF;
>.note{
margin-left: 10px;
margin-right: auto;
color: #999999;
}
}
`;

type RecordItem={
    tagIds:number[],
    note:string,
    category:"收入"|"支出",
    amount:number
    createDate:string //ISO 8601
}
type Category="收入"|"支出"
function Statistics() {
    const {records}=useRecords();
    const [category,setCategory]=useState<Category>('支出');
    const changeCategory=(category:Category)=>{
        setCategory(category)
    };
    const recordsDisplay=records.filter(record=>record.category===category);
    const hash:{[key:string]:RecordItem[]}={};
    recordsDisplay.forEach((record)=>{
        const key=day(record.createDate).format("YYYY-MM-DD");
        if(!(key in hash)){
            hash[key]=[];
        }
        hash[key].push(record);
    });
    const array=Object.entries(hash).sort((a,b)=>{
        if(a[0]===b[0]){            return 0;        }
        else if(a[0]>b[0]){         return 1;        }
        else if(a[0]<b[0]){         return -1;       }
        else{                       return 0;        }
    });
    const {findTag}=useTags();
    return (
        <>
        <MyLayout>
            <CategoryWrapper>
                <CategorySection category={category}  onChange={changeCategory}/>
            </CategoryWrapper>
            <List>
            {array.map(([date,records])=>{
                return (<div key={date}>
                    <header >{date}</header>
                    <RecordsList>
                    {records.map((record)=>{
                        return <li key={record.createDate}>
                            <span className="one-line">{record.tagIds.map((id)=>{return " "+findTag(id).name})}</span>
                            <span className="note">{record.note}</span>
                            <span>￥{record.amount}</span>
                        </li>
                    })}</RecordsList>
                    </div>
                )
            })}
            </List>
            <Nav/>
        </MyLayout>
        </>
    )
}

export default  Statistics;