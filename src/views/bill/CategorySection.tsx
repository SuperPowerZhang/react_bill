import styled from "styled-components";
import React, {useState} from "react";

const CategoryWrapper=styled.section`
>ul{
display: flex;
font-size: 24px;
padding: 12px 0;
background-color:rgb(196, 196, 196);
>li{
width: 50%;
text-align: center;
line-height: 24px;
&.selected{
position: relative;
&::after{
position: absolute;
top: 36px;
left: 0;
content: "";
border-bottom: 2px solid #333333;
width: 100%;
display: inline-block;
}}}}
`;

const CategorySection:React.FC=()=>{
    const [selectedType,setSelectedType]=useState<string>("支出")
    const types=["收入","支出"];
    return(
        <CategoryWrapper>
            <ul className="bill-type">
                {types.map(type=>{
                    return  <li key={type} onClick={()=>{
                        setSelectedType(type)
                    }} className={type===selectedType?'selected':''}>{type}</li>
                })}
            </ul>
        </CategoryWrapper>
    )
}

export {CategorySection};