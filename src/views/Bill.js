import React from "react";
import Nav from "../components/Nav";
import Layout from "../components/Layout";
import styled from "styled-components";

const TagsSection=styled.section`
display: flex;
flex-grow: 1;
flex-direction: column;
font-size: 14px;
padding: 20px 20px 12px 20px;
>div{
flex-grow: 1;
}
>ul{
display: flex;
justify-content: flex-start;
>li{
color: #484848;
padding: 4px 16px;
border-radius: 18px;
background: #D9D9D9;
margin-right:20px ;
}
}
>button{
width: 56px;
display: inline-block;
margin-top: 20px;
color: #999999;
background-color:#fff;
border-bottom:1px solid #666666;
}
`;
const NotesSection=styled.section`
display: flex;
justify-content: flex-start;
padding: 20px;
background-color:rgb(245, 245, 245);
>span{
color:#333333;
line-height: 22px;
}
>input{
margin-left: 20px;
}
`;
const CategorySection=styled.section`
>ul{
display: flex;
font-size: 24px;
padding: 20px 0;
background-color:rgb(196, 196, 196);
>li{
width: 50%;
text-align: center;
height: 24px;
&.selected{
position: relative;
&::after{
position: absolute;
top: 42px;
left: 0;
content: "";
border: 2px solid #333333;
width: 100%;
display: inline-block;
}}}}
`;
const NumSection=styled.section`
display: flex;
flex-direction: column;
>div{
text-align: right;
font-size: 36px;
padding: 18px ;
background-color:rgb(255, 255, 255);
box-shadow: inset 0 -5px 5px -5px rgba(0,0,0,0.25),
            inset 0 5px 5px -5px rgba(0,0,0,0.25);
}
>.bill-num{
display: grid;
grid-template-rows:repeat(4,1fr);
grid-template-columns:repeat(4,1fr) ;
> li {
padding-top:20px ;
padding-bottom: 20px;
font-size: 18px;
line-height: 22px;
text-align: center;
background: #D3D3D3;
vertical-align: middle;
&:nth-child(1){
background-color:#F2F2F2;
}
&:nth-child(2),
&:nth-child(5){
background-color: #E0E0E0;
}
&:nth-child(3),
&:nth-child(6),
&:nth-child(9){
background-color:#D3D3D3;
}
&:nth-child(4),
&:nth-child(7),
&:nth-child(10){
background-color:#C1C1C1;
}
&:nth-child(8),
&:nth-child(11),
&:nth-child(13){
background-color:#B8B8B8;
}
&:nth-child(12){
  grid-row: 3/5;
  grid-column: 4/5;
  padding-top: 52px;
   padding-bottom: 51.5px;
   background-color:#9A9A9A;
}
&:nth-child(13){
  grid-row: 4/5;
  grid-column: 1/3;
}
&:nth-child(14){
background-color:#A9A9A9;
}
}
}
`;

function Bill() {
    return (
        <>
        <Layout>
            <TagsSection>
                <div>占个位子</div>
                <ul>
                    <li>衣</li>
                    <li>食</li>
                    <li>住</li>
                    <li>行</li>
                </ul>
                <button>新增标签</button>
            </TagsSection>
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
        </Layout>
        <Nav/>
        </>
    )
}
export  default Bill;