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
    const [records,setRecords]=useState<RecordItem[]>([]);
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
