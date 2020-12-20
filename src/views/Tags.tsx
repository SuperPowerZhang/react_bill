import React from "react";
import Layout from "../components/Layout";
import {useTags} from './common/useTags'
import styled from "styled-components";
import {Center} from '../components/Center';
import {Link} from "react-router-dom";
import Nav from "../components/Nav";

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
`;
const MyLayout=styled(Layout)`
height: 100vh;
display: flex;
flex-direction: column;
justify-content: space-between;
>Center{
flex-grow: 1;
}
`;

function Tags() {
    const {tags,setTags}=useTags();
    return(
            <MyLayout>
                <TagList>
                    {tags.map((tag) => {
                        return (
                            <li key={tag.id}>
                                <Link to={'/tags/'+tag.id}>
                                <span>
                                    {tag.name}
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
                <Nav/>
            </MyLayout>
    )
}

export default Tags;