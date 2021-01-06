import styled from "styled-components";
import React from "react";
import  {TagAddButton,TagsDisplay2} from '../../connect/tagsConnect'

const TagsWrapper = styled.section`
display: flex;
flex-direction: column;
font-size: 14px;
padding: 20px 20px 12px 20px;
background-color:rgb(255, 255, 255);
flex:1;
>ul{
display: flex;
justify-content: flex-start;
flex-wrap: wrap;
overflow-y: scroll;
>li {
> span{
position: relative;
padding: 4px 16px;
border-radius: 18px;
line-height: 20px;
//background: #D9D9D9;
margin-right:15px ;
margin-bottom: 5px;
&::after{
content: "";
position: absolute;
top: 0;
left: 0;
width: 100%;
height: 100%;
border-radius: 18px;
background-color:rgba(0,0,0,0.25);
}}
&.selected {
>span::after{
display: none;
//background-color:transparent;
}
}
}}
>button{
font-weight: 600;
width: 70px;
display: inline-block;
margin-top: auto;
padding-bottom: 5px;
color: rgb(170, 220, 218);
background-color:#fff;
border-bottom:1px solid  rgb(170, 220, 218);
}
`;
type Props ={
    tagIds:number[],
    onChange:(stateNew:object)=>void
}
const TagsSection: React.FC<Props> = (props) => {
    const tagIds=props.tagIds;
    const onChange=props.onChange;
    // const {tags,setTags,addTag}=useTags();
    const onToggleTags = (id: number) => {
        const index = tagIds.indexOf(id);
        if (index === -1) {
            //选中的时候存入的是id的数组
            onChange({tagIds:[...tagIds, id]});
        } else {
           onChange({tagIds:tagIds.filter(t => t !== id)});
        }
    };
    return (
        <TagsWrapper>
            <ul onClick={() => { onToggleTags(tag.id)}}>
            <TagsDisplay2 />
            </ul>
            <TagAddButton />
        </TagsWrapper>
    )
};
export {TagsSection};
