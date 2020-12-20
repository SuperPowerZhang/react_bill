import {useEffect, useState} from "react";
import {createId} from "lib/createId";
import {useUpdate} from "./useUpdate";

type Tag={
   id:number,name:string
}
const useTags = ()=>{
    const [tags,setTags]=useState<Tag[]>([]);
    //tags更新的时候去localStorage里面存数据
        useUpdate(()=>{
            localStorage.setItem('tags',JSON.stringify(tags));
        },[tags]);
    //页面挂载的时候去localStorage里面取数据
    useEffect(()=>{
        // TODO 为啥前进后退页面也会触发1111
        // console.log('11111');
        let tagsLocal=JSON.parse(localStorage.getItem('tags')||'[]');
        if(tagsLocal.length===0){
            setTags([
                {id:createId(),name:'衣'},
                {id:createId(),name:'食'},
                {id:createId(),name: '住'},
                {id:createId(),name: '行'}
            ])
        }else{
            setTags(tagsLocal)
        }
    },[]);
    const addTag=()=>{
        const newTagName=window.prompt('请输入新标签');
        if (newTagName) {
            return {id:createId(),name: newTagName};
        }else{
            return{ id:-1,name:''}
        }
    };
    const findTag=(id:number)=>{
        return tags.filter(tag=> tag.id===id)[0];
    };
    const updateTag=(id:number,newName:string)=>{
        if(newName){
            setTags(tags.map((tag:Tag)=>{
                return  tag.id===id?{id,name:newName}:tag
            }))}
        };
    const deleteTag=(id:number)=>{
        setTags(tags.filter(tag=>tag.id!==id))
    };
    return(
        {tags,setTags,findTag,updateTag,deleteTag,addTag}
    );

};
export {useTags}