import {useEffect, useState} from "react";
import {useUpdate} from "./useUpdate";



type RecordItem={
    tagIds:number[],
    note:string,
    category:"收入"|"支出",
    amount:number
    createDate:string //ISO 8601
}

export const useRecords=()=>{
    const [records,setRecords]=useState<RecordItem[]>([{
        tagIds:[2],
        note:"",
        category:"支出",
        amount:1000,
        createDate: "2020-12-21T01:21:25.714Z"
    },{
        tagIds:[1],
        note:"",
        category:"支出",
        amount:50,
        createDate: "2020-12-22T01:21:36.260Z"
    },{
        tagIds:[3],
        note:"",
        category:"支出",
        amount:200,
        createDate: "2020-12-12T01:21:36.260Z"
    },{
        tagIds:[4],
        note:"早上消费",
        category:"支出",
        amount:20,
        createDate: "2020-12-22T09:21:36.260Z"
    },{
        tagIds:[1],
        note:"",
        category:"收入",
        amount:2000,
        createDate: "2020-12-22T07:21:36.260Z"
    },{
        tagIds:[3],
        note:"中彩票了",
        category:"收入",
        amount:600,
        createDate: "2020-12-18T01:21:36.260Z"
    },
    ]);
    const addRecord=(newRecord:RecordItem)=>{
        setRecords([...records,newRecord])
    };
    useUpdate(()=>{
        localStorage.setItem('records',JSON.stringify(records))
    },[records]);
    useEffect(()=>{
        let recordsLocal=JSON.parse(localStorage.getItem('records')||'[]');
        if(recordsLocal.length!==0){
            setRecords(recordsLocal);
        }
    },[]);
    return {records,setRecords,addRecord}
};
