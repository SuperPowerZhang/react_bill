import styled from "styled-components";
import React from "react";
import {useTags} from 'hooks/useTags';

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
>li{
color: #484848;
padding: 4px 16px;
border-radius: 18px;
line-height: 20px;
background: #D9D9D9;
margin-right:15px ;
margin-bottom: 5px;
&.selected{
background-color: rgb(184, 225, 222);
}}}
>button{
width: 56px;
display: inline-block;
margin-top: 20px;
padding-bottom: 5px;
color: #999999;
background-color:#fff;
border-bottom:1px solid  black;
}
`;
type Props ={
    tagIds:number[],
    onChange:(stateNew:object)=>void
}
const TagsSection: React.FC<Props> = (props) => {
    const {tags,setTags,addTag}=useTags();
    const tagIds=props.tagIds;
    const onChange=props.onChange;
    const onAddTag=()=>{
        let newTag=addTag();
        if(newTag.id!==-1){
            setTags([...tags, newTag]);
        }
    };
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
            <ul>
                {tags.map((tag) => {
                    return <li key={tag.id} onClick={() => {
                        onToggleTags(tag.id)
                    }} className={tagIds.indexOf(tag.id) >= 0 ? 'selected' : ''}>
                        {tag.name}
                    </li>
                })}
            </ul>
            <button onClick={onAddTag}>新增标签</button>
        </TagsWrapper>
    )
};
export {TagsSection};
