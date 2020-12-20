import styled from "styled-components";
import React from "react";
import {useTags} from '../common/useTags'

const TagsWrapper = styled.section`
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
color: #999999;
background-color:#fff;
border-bottom:1px solid #666666;
}
`;
type Props ={
    selectedTags:string[],
    onChange:(stateNew:object)=>void
}
const TagsSection: React.FC<Props> = (props) => {
    const {tags,setTags}=useTags();
    const selectedTags=props.selectedTags;
    const onChange=props.onChange;
    const onAddTag = () => {
        const newTag = window.prompt('请输入新标签');
        if (newTag) {
            setTags([...tags, newTag])
        }
    };
    const onToggleTags = (tag: string) => {
        const index = selectedTags.indexOf(tag);
        if (index === -1) {
            onChange({selectedTags:[...selectedTags, tag]});
        } else {
           onChange({selectedTags:selectedTags.filter(t => t !== tag)});
        }
    };
    return (
        <TagsWrapper>
            <div>占个位子</div>
            <ul>
                {tags.map((tag) => {
                    return <li key={tag} onClick={() => {
                        onToggleTags(tag)
                    }} className={selectedTags.indexOf(tag) >= 0 ? 'selected' : ''}>
                        {tag}
                    </li>
                })}
            </ul>
            <button onClick={onAddTag}>新增标签</button>
        </TagsWrapper>
    )
};
export {TagsSection};
