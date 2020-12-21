import React, {useEffect, useRef} from "react";
import {ReactElement} from 'react';
import styled from "styled-components";

const Main = styled.main`
display: flex;
flex-direction: column;
justify-content: space-between;
flex-shrink: 1;
`;
type Props={
    children: ReactElement | ReactElement []
    className?:string
}

const Layout:React.FC<Props> =(props)=> {
    return (
            <Main className={props.className}>
                {props.children}
            </Main>
    )
};


export default  Layout;