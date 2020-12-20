import {createId} from "./createId";

type NewTag={id:number,name:string}

const addTag = (): NewTag=> {
    const newTagName=window.prompt('请输入新标签');
    if (newTagName) {
        // TODO id是随机生成的
        return {id:createId(),name: newTagName};
    }else{
        return{ id:-1,name:''}
    }
};
export {addTag};