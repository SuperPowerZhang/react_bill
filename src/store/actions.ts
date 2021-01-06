import {Tag} from "../type";

export const ADD_TAG='ADD_TAG';
export function addTag(tag:Tag){
    return{
        type:ADD_TAG,
        tag
    }
}
