import styled from "styled-components";

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
    return(
        <CategoryWrapper></CategoryWrapper>
    )
}

export {};