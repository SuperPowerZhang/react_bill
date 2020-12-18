import styled from "styled-components";
import {Link} from "react-router-dom";
import React from "react";

const NavWrapper=styled.ul`
 
    display: flex;
    justify-content: space-around;
    text-align: center;
    padding: 18px;
    box-shadow: 0 0 3px rgba(0 ,0 ,0 ,0.25);
    >li{
    display: flex;
    flex-grow: 1;
    flex-direction: column;
    align-items: center;
    font-size: 12px;
    >svg{
    font-size: 26px;
    }
    
 }`;

const Icon=[
    {url:'/tags',name:"标签",link:'#icon-shengdanshu'},
    {url:'/bill',name:"记账",link:'#icon-SnowMan'},
    {url:'/statistics',name:"统计",link:'#icon-shengdanlaoren'}
];

const Nav=()=> {
return (
    <NavWrapper>
            {
                Icon.map((item)=>{
                    return (
                        <li key={item.name}>
                            <svg className="icon" aria-hidden="true">
                                <use xlinkHref={item.link}></use>
                            </svg>
                            <Link to={item.url}>{item.name}</Link>
                        </li>
                    )
                })
            }
    </NavWrapper>
)};

export default Nav;