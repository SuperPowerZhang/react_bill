import styled from "styled-components";
import React from "react";
import {useTags} from 'lib/useTags'
import {createId} from "lib/createId";
import {addTag} from "../../lib/addTag";

const TagsWrapper = styled.section`
display: flex;
flex-grow: 1;
flex-direction: column;
font-size: 14px;
padding: 20px 20px 12px 20px;
background-color:rgb(255, 255, 255);
>div{
flex-grow: 1;
}
>ul{
display: flex;
justify-content: flex-start;
flex-wrap: wrap;
>li{
color: #484848;
padding: 4px 16px;
border-radius: 18px;
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
    selectedTagIds:number[],
    onChange:(stateNew:object)=>void
}
const TagsSection: React.FC<Props> = (props) => {
    const {tags,setTags}=useTags();
    const selectedTagIds=props.selectedTagIds;
    const onChange=props.onChange;
    const onAddTag=()=>{
        let newTag=addTag();
        if(newTag.id!==-1){
            setTags([...tags, newTag]);
        }
    };
    const onToggleTags = (id: number) => {
        const index = selectedTagIds.indexOf(id);
        if (index === -1) {
            //选中的时候存入的是id的数组
            onChange({selectedTagIds:[...selectedTagIds, id]});
        } else {
           onChange({selectedTagIds:selectedTagIds.filter(t => t !== id)});
        }
    };
    return (
        <TagsWrapper>
            <div>占个位子</div>
            <ul>
                {tags.map((tag) => {
                    return <li key={tag.id} onClick={() => {
                        onToggleTags(tag.id)
                    }} className={selectedTagIds.indexOf(tag.id) >= 0 ? 'selected' : ''}>
                        {tag.name}
                    </li>
                })}
            </ul>
            <button onClick={onAddTag}>新增标签</button>
        </TagsWrapper>
    )
};
export {TagsSection};
