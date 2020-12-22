import styled from "styled-components";

const NumWrapper=styled.section`
display: flex;
flex-direction: column;
>div{
text-align: right;
font-size: 36px;
padding: 10px ;
color:rgb(148, 57, 57);
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
background-color:rgba(148, 57, 57,0.1);
}
&:nth-child(2),
&:nth-child(5){
background-color: rgba(148, 57, 57,0.2);
}
&:nth-child(3),
&:nth-child(6),
&:nth-child(9){
background-color:rgba(148, 57, 57,0.3);
}
&:nth-child(4),
&:nth-child(7),
&:nth-child(10){
background-color:rgba(148, 57, 57,0.4);
}
&:nth-child(8),
&:nth-child(11),
&:nth-child(13){
background-color:rgba(148, 57, 57,0.5);
}
&:nth-child(12){
  grid-row: 3/5;
  grid-column: 4/5;
  padding-top: 35px;
  padding-bottom: 35px;
   background-color:rgba(148, 57, 57,0.7);
}
&:nth-child(13){
  grid-row: 4/5;
  grid-column: 1/3;
}
&:nth-child(14){
background-color:rgba(148, 57, 57,0.6);
}
}
}
`;

export {NumWrapper};