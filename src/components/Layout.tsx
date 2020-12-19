import React from "react";
import {ReactElement} from 'react';
import styled from "styled-components";


const Main = styled.main``;
type Props={
    children: ReactElement | ReactElement []
    className?:string
}

function Layout(props:Props) {
    return (
            <Main className={props.className}>
                {props.children}
            </Main>
    )
}

export default  Layout;