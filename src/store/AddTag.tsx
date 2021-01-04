import {addTag} from "./tagsActions";
import React from 'react'
import { connect } from 'react-redux'
import {Button} from "../components/Button";

let AddTag=({dispatch})=>{
    return (
        <button onClick={()=>{
            dispatch(addTag({id:11,name:"haha"}))
        }} className="save">新增标签</button>
        )
}

AddTag=connect()(AddTag)

export {AddTag}
