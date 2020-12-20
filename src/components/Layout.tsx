import React from "react";
import {ReactElement} from 'react';
import styled from "styled-components";


const Main = styled.main`
max-height: 100vh;
display: flex;
flex-direction: column;
justify-content: space-between;
>Center{
flex-grow: 1;
}
`;
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