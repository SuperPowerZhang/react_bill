import styled from "styled-components";
import {NavLink} from "react-router-dom";
import React from "react";

const NavWrapper=styled.ul`
    display: flex;
    justify-content: space-around;
    text-align: center;
    box-shadow: 0 0 3px rgba(0 ,0 ,0 ,0.25);
    >li {
    width: 33.3333%;
    > a{
    display: flex;
    flex-direction: column;
    align-items: center;
    padding:6px;
    font-size: 12px;
    background-color:rgb(244, 244, 244);
    &.selected{
    background-color:white;
    }
    >svg{
    margin-bottom: 5px;
    font-size: 26px;
    }
    }
 }`;

const Icon=[
    {url:'/tags',name:"标签",link:'#icon-shengdanshu'},
    {url:'/bill',name:"记一笔",link:'#icon-SnowMan'},
    {url:'/statistics',name:"统计",link:'#icon-shengdanlaoren'}
];

const Nav=()=> {
return (
    <NavWrapper>
            {
                Icon.map((item)=>{
                    return (
                        <li key={item.name}>
                            <NavLink to={item.url} activeClassName="selected"><svg className="icon" aria-hidden="true">
                                <use xlinkHref={item.link}></use>
                            </svg>{item.name}</NavLink>
                        </li>
                    )
                })
            }
    </NavWrapper>
)};
export default Nav;