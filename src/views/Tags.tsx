import React from "react";
import Layout from "../components/Layout";
import {useTags} from '../lib/useTags'
import styled from "styled-components";
import {Center} from '../components/Center';
import {Link} from "react-router-dom";
import Nav from "../components/Nav";
import {Button} from '../components/Button';

const TagList=styled.ul`
background-color:rgb(255, 255, 255);
>li a{
display: flex;
justify-content:space-between ;
font-size: 16px;
padding: 11px 15px;
border-bottom: 1px solid rgb(221, 221, 224);
>span{
overflow: hidden; 
text-overflow: ellipsis; 
white-space: nowrap; 
margin-right: 5px;
}
}
`;
const MyLayout=styled(Layout)`
height: 100vh;
display: flex;
flex-direction: column;
justify-content: space-between;
`;

function Tags() {
    const {tags,setTags,addTag}=useTags();
    const onAddTag=()=>{
            let newTag=addTag();
            if(newTag.id!==-1){
                setTags([...tags, newTag]);
            }
        };
    return(
            <MyLayout>
                <TagList>
                    {tags.map((tag) => {
                        return (
                            <li key={tag.id}>
                                <Link to={'/tags/'+tag.id}>
                                <span>
                                    {/*//TODO id暂时先显示方便查错，后续删除*/}
                                    {tag.id}:{tag.name}
                                </span>
                                <svg className="icon" aria-hidden="true">
                                    <use xlinkHref="#icon-jiantouyou"></use>
                                </svg>
                                </Link>
                        </li>)
                    })}
                </TagList>
                <Center>
                    <Button onClick={onAddTag} className="save">新增标签</Button>
                </Center>
                <Nav/>
            </MyLayout>
    )
}

export default Tags;