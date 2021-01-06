import {createId} from "../lib/createId";
import {ADD_TAG} from "./actions";
import {Action} from '../type'


const initTags={
    tags:[{id:createId(),name:'衣'},
        {id:createId(),name:'食'},
        {id:createId(),name: '住'},
        {id:createId(),name: '行'}]
}
const  tagsReducer =(state=initTags,action:Action)=> {
    switch (action.type) {
        case 'ADD_TAG':
            const newTagName=window.prompt('请输入新标签');
            if (newTagName) {
                let tags=[...state.tags,{id:createId(),name: newTagName}]
                return {...state,tags}
            }
    }
    return state;
};
export default tagsReducer
