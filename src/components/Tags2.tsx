import {Tag} from "antd";
import {colorInit} from "../views/colorInit";
import React from "react";

// @ts-ignore
const Tags2=({tags})=>{
    return(
            // @ts-ignore
            //TODO 怎么同时接收来自connect和Bills的参数——都从redux里面拿

            {tags.map((tag) => {
                return <li key={tag.id}  className={tagIds.indexOf(tag.id) >= 0 ? 'selected' : ''}>
                    <Tag color={colorInit[tag.id%colorInit.length]}>{tag.name}</Tag>
                </li>
            })}
        )

}
export {Tags2};
