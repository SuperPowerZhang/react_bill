import {useParams} from 'react-router-dom';
import {useTags} from "../lib/useTags";
import Layout from "../components/Layout";
import {Center} from "../components/Center";
import {Button} from "../components/Button";
import Nav from "../components/Nav";
import styled from "styled-components";
import React from "react";

type Params={
    id:string
}
const TitleDiv=styled.div`
font-size: 16px;
padding: 16px;
display: flex;
justify-content: space-between;
background-color:rgb(255, 255, 255);
margin-bottom:8px;
>span{
flex-grow:1;
text-align: center;
}
`;
const EditDiv=styled.div`
background-color:#fff;
font-size: 16px;
padding: 16px;
>input{
font-size: 16px;
}
`;

const Tag:React.FC=()=>{
    let {id}=useParams<Params>();
    let {findTag}=useTags();
    const tag=findTag(parseInt(id));
    return (
        <Layout>
            <TitleDiv className="edit">
                <svg className="icon" aria-hidden="true">
                    <use xlinkHref="#icon-jiantouzuo"></use>
                </svg>
                <span>编辑标签</span>
            </TitleDiv>
            <EditDiv>
                <span>标签名 </span>
                <input type="text" placeholder={tag.name} />
            </EditDiv>
            <Center>
                <Button className="save">保存修改</Button>
                <Button>删除标签</Button>
            </Center>
            <Nav/>
        </Layout>
    )
}
export {Tag}