import React, {useEffect} from "react";
import Layout from "../components/Layout";
import {useTags} from '../hooks/useTags'
import styled from "styled-components";
import {Center} from '../components/Center';
import {Link} from "react-router-dom";
import Nav from "../components/Nav";
import {Button} from '../components/Button';
import {Tag} from "antd";
import {colorInit} from "./colorInit";

type Tag={
    id:number,name:string
}
const TagList=styled.ul`
flex-shrink: 1;
background-color:rgb(255, 255, 255);
overflow:auto;

>li a{
display: flex;
justify-content:space-between ;
padding: 11px 15px;
border-bottom: 1px solid rgb(221, 221, 224);
>span{
border: 0;
font-size: 16px;
background-color:transparent;
padding: 0;
}
}
`;
const MyLayout=styled(Layout)`
height: 100vh;
display: flex;
flex-direction: column;
justify-content: space-between;
`;

// @ts-ignore
const Tags=({tags,onAddTag})=> {
    console.log(onAddTag)
    return(
            <MyLayout>
                <TagList>
                    {tags.map((tag:Tag) => {
                   return (
                            <li key={tag.id}>
                                <Link to={'/tags/'+tag.id}>
                                <Tag className="one-line" color={colorInit[tag.id%colorInit.length]}>
                                 {tag.name}
                                </Tag>
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
