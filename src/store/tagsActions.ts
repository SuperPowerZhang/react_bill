import {ADD_TAG} from "./actions";

type Tag={
    id:number,name:string
}

function addTag(tag:Tag) {
    return {
        type: ADD_TAG,
        tag
    }
}
export {addTag}
