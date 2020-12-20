import  {useState} from "react";
import {createId} from "./createId";

type Tag={
   id:number,name:string
}
const defaultTags=[
    {id:createId(),name:'衣'},
    {id:createId(),name:'食'},
    {id:createId(),name: '住'},
    {id:createId(),name: '行'}
    ];
const useTags = ()=>{
    const [tags,setTags]=useState<Tag[]>(defaultTags);
    const addTag=():Tag=>{
        const newTagName=window.prompt('请输入新标签');
        if (newTagName) {
            return {id:createId(),name: newTagName};
        }else{
            return{ id:-1,name:''}
        }
    }
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