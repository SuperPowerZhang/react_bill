import styled from "styled-components";
import React, {useState} from "react";

const NumWrapper=styled.section`
display: flex;
flex-direction: column;
>div{
text-align: right;
font-size: 36px;
padding: 10px ;
background-color:rgb(255, 255, 255);
box-shadow: inset 0 -5px 5px -5px rgba(0,0,0,0.25),
            inset 0 5px 5px -5px rgba(0,0,0,0.25);
}
>.bill-num{
display: grid;
grid-template-rows:repeat(4,1fr);
grid-template-columns:repeat(4,1fr) ;
> li {
padding-top:12px ;
padding-bottom: 12px;
font-size: 18px;
line-height: 22px;
text-align: center;
background: #D3D3D3;
vertical-align: middle;
&:nth-child(1){
background-color:#F2F2F2;
}
&:nth-child(2),
&:nth-child(5){
background-color: #E0E0E0;
}
&:nth-child(3),
&:nth-child(6),
&:nth-child(9){
background-color:#D3D3D3;
}
&:nth-child(4),
&:nth-child(7),
&:nth-child(10){
background-color:#C1C1C1;
}
&:nth-child(8),
&:nth-child(11),
&:nth-child(13){
background-color:#B8B8B8;
}
&:nth-child(12){
  grid-row: 3/5;
  grid-column: 4/5;
  padding-top: 35px;
  padding-bottom: 35px;
   background-color:#9A9A9A;
}
&:nth-child(13){
  grid-row: 4/5;
  grid-column: 1/3;
}
&:nth-child(14){
background-color:#A9A9A9;
}
}
}
`;
const NumSection:React.FC=()=>{
    const [output,setOutPut]=useState<string>("0")
    const getNumber=(e:React.MouseEvent)=>{
        console.log((e.target as HTMLLIElement).innerText)
    }
    return(
        <NumWrapper>
            <div>
                {output}
            </div >
            <ul className="bill-num" onClick={(e)=>{
                getNumber(e)
            }}>
                <li>1</li>
                <li>2</li>
                <li>3</li>
                <li>删除</li>
                <li>4</li>
                <li>5</li>
                <li>6</li>
                <li>清空</li>
                <li>7</li>
                <li>8</li>
                <li>9</li>
                <li>OK</li>
                <li>0</li>
                <li>.</li>
            </ul>
        </NumWrapper>
    )
};
export {NumSection};