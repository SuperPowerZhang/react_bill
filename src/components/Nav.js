import styled from "styled-components";
import {Link} from "react-router-dom";
import React from "react";

const NavWrapper=styled.nav`
 > ul{
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
    }
 }`;

const Icon=[
    {name:"标签",}
]

const Nav=()=> {
return (
    <NavWrapper>
        <ul>
            <li>
                <svg className="icon" aria-hidden="true">
                    <use xlinkHref="#icon-shengdanshu"></use>
                </svg>
                <Link to="/tags">标签</Link>
            </li>
            <li> <svg className="icon" aria-hidden="true">
                <use xlinkHref="#icon-SnowMan"></use>
            </svg>
                <Link to="/bill">记账</Link>
            </li>
            <li> <svg className="icon" aria-hidden="true">
                <use xlinkHref="#icon-shengdanlaoren"></use>
            </svg><Link to="/statistics">统计</Link>
            </li>
        </ul>
    </NavWrapper>
)};

export default Nav;