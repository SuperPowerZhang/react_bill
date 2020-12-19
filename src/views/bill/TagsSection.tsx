import styled from "styled-components";
import React from "react";

const TagsWrapper=styled.section`
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

const TagsSection:React.FC=()=> {
    return (
        <TagsWrapper>
            <div>占个位子</div>
            <ul>
                <li>衣</li>
                <li>食</li>
                <li>住</li>
                <li>行</li>
            </ul>
            <button>新增标签</button>
        </TagsWrapper>
    )
};
export {TagsSection};
