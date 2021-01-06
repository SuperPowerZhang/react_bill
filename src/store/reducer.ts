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
            let tags=[...state.tags,action.tag]
            console.log({...state,tags})
            return {...state,tags}
    }
    return state;
};
export default tagsReducer
