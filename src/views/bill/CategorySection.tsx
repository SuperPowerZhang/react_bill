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

type Props={
    selectedCategory:string,
    onChange:(newState:object)=>void
}
const CategorySection:React.FC<Props> =(props)=>{
    const selectedCategory=props.selectedCategory;
    const onChange=props.onChange;
    const categories=["收入","支出"];
    return(
        <CategoryWrapper>
            <ul className="bill-type">
                {categories.map(category=>{
                    return  <li key={category} className={category===selectedCategory?'selected':''}
                                onClick={()=>onChange({selectedCategory:category})} >{category}</li>
                })}
            </ul>
        </CategoryWrapper>
    )
}

export {CategorySection};