import {createId} from "../lib/createId";
import {ADD_TAG} from "./actions";

type Tag={
    id:number,name:string
}

// TODO 应该是actionsNames中的某项
type Action={
    type:string,
    tag?:Tag
}

const initTags={
    tags:[{id:createId(),name:'衣'},
        {id:createId(),name:'食'},
        {id:createId(),name: '住'}]
}



const  tagsReducer =(state=initTags,action:Action)=> {
    switch (action.type) {
        case 'ADD_TAG':
            console.log('Reducer')
            let tags=[...state.tags,action.tag]
            console.log({...state,tags})
            return {...state,tags}
    }
    return state;
}
export {tagsReducer}
