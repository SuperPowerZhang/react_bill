import {useEffect, useRef} from "react";

const useUpdate=(fn:()=>void,deps:any[])=>{
    const count=useRef(0);
    useEffect(()=>{
        count.current+=1;
    },[deps]);
    useEffect(()=>{
        if(count.current>1){
            fn();
        }
        //看下会不会警告，之前是说必须要把fn作为依赖监听起来
    },[count,fn])
};
export {useUpdate}
