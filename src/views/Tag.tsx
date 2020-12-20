import {useParams,useHistory} from 'react-router-dom';
import {useTags} from "../lib/useTags";
import Layout from "../components/Layout";
import {Center} from "../components/Center";
import {Button} from "../components/Button";
import Nav from "../components/Nav";
import styled from "styled-components";
import React, {useRef} from "react";

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
const MyLayout=styled(Layout)`
height: 100vh;
display: flex;
flex-direction: column;
justify-content: space-between;
`;
const Tag:React.FC=()=>{
    let {id}=useParams<Params>();
    let {findTag,updateTag,deleteTag}=useTags();
    const tag=findTag(parseInt(id));
    const tagRef=useRef<HTMLInputElement>(null);
    const history=useHistory();
    const saveTag=()=>{
        if(tagRef.current){
            updateTag(parseInt(id),tagRef.current.value);
        }
    };
    const onDeleteTag=()=>{
        deleteTag(parseInt(id));
    };
    const onClickBack=()=>{
        history.push("/tags")
    };
    return (
        <MyLayout>
            <TitleDiv className="edit">
                <svg className="icon" aria-hidden="true" onClick={onClickBack}>
                    <use xlinkHref="#icon-jiantouzuo"></use>
                </svg>
                <span>编辑标签</span>
            </TitleDiv>
            {
                tag?
                    <>
                        <EditDiv>
                        <span>标签名 </span>
                        <input ref={tagRef} type="text" placeholder={tag.name} />
                    </EditDiv>
                    <Center>
                        <Button onClick={saveTag} className="save">保存修改</Button>
                        <Button onClick={onDeleteTag}>删除标签</Button>
                    </Center>
                </>
                    :
                    <Center>
                        标签不存在了ToT~
                    </Center>
            }

            <Nav/>
        </MyLayout>
    )
}
export {Tag}