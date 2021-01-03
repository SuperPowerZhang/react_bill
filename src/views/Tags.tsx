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
import {combineReducers, createStore} from 'redux'
import {Provider, useDispatch, useSelector} from 'react-redux'
import {tagsReducer} from "../store/reducer";
import {dispatch} from "jest-circus/build/state";
import {addTag} from "../store/tagsActions";

const appReducer=combineReducers({tagsReducer});
type Tag={
    id:number,name:string
}

let store=createStore(appReducer)
console.log(store.getState().tagsReducer)

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

function Tags() {
    console.log(store);
    const tagsReducer:any=store.getState().tagsReducer
    const tags=tagsReducer.tags
    console.log(tags)
    const onAddTag=()=>{
        console.log(11111)
                store.dispatch(addTag({id:11,name:"haha"}))
        }
        useEffect(()=>{
            console.log('更新了tags们')
        },tags)
    return(
        <Provider store={store}>
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
        </Provider>
    )
}

export default Tags;
