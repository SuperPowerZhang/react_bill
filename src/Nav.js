import styled from "styled-components";
import {Link} from "react-router-dom";
import React from "react";

const NavWrapper=styled.nav`
 > ul{
    display: flex;
    justify-content: space-around;
    text-align: center;
    padding: 18px;
 }`;

const Nav=()=> {
return (
    <NavWrapper>
        <ul>
            <li>
                <svg className="icon" aria-hidden="true">
                    <use xlink:href="#icon-shengdanshu"></use>
                </svg>
                <Link to="/tags">标签页</Link>
            </li>
            <li <svg className="icon" aria-hidden="true">
                <use xlink:href="#icon-SnowMan"></use>
            </svg><Link to="/bill">记账页</Link></li>
            <li> <svg className="icon" aria-hidden="true">
                <use xlink:href="#icon-shengdanlaoren"></use>
            </svg><Link to="/statistics">统计页</Link></li>
        </ul>
    </NavWrapper>
)};

export default Nav;