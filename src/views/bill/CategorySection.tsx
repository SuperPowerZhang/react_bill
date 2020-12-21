import styled from "styled-components";
import React from "react";

const CategoryUl=styled.ul`
display: flex;
font-size: 24px;
padding: 12px 0;
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
}}}
`;

type Props={
    category:"收入"|"支出",
    onChange:(category:"收入"|"支出")=>void
}
const CategorySection:React.FC<Props> =(props)=>{
    const selectedCategory=props.category;
    const onChange=props.onChange;
    const categories:("收入"|"支出")[]=["收入","支出"];
    return(
            <CategoryUl >
                {categories.map(category=>{
                    return  <li key={category} className={category===selectedCategory?'selected':''}
                                onClick={()=>onChange(category)} >{category}</li>
                })}
            </CategoryUl>
    )
}

export {CategorySection};