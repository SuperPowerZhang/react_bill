import React from "react";
import Layout from "../components/Layout";
import {useTags} from './common/useTags'
import styled from "styled-components";
import {Center} from './common/Center';
import {
    HashRouter as Router,
    Route,
    Redirect, Link
} from "react-router-dom";

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
const Button=styled.button`
background: #767676;
padding: 8px 16px;
font-size: 17px;
border-radius: 4px;
color: #FFFFFF;
text-align: center;
`

function Tags() {
    const {tags,setTags}=useTags();
    return(
            <Layout>
                <TagList>
                    {tags.map((tag) => {
                        return (
                            <li key={tag}>
                                <Link to={'/tags/'+tag}>
                                <span>
                                    {tag}
                                </span>
                                <svg className="icon" aria-hidden="true">
                                    <use xlinkHref="#icon-jiantouyou"></use>
                                </svg>
                                </Link>
                        </li>)
                    })}
                </TagList>
                <Center>
                    <Button>新建标签</Button>
                </Center>
            </Layout>
    )
}

export default Tags;