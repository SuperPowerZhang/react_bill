import styled from "styled-components";

// @ts-ignore
export const Button=({onAddTag})=>{
    return(
        <button onClick={()=>onAddTag()}>新增标签</button>
    )
};
