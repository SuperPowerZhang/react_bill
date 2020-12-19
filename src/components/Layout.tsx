import React from "react";

import styled from "styled-components";


const Main = styled.main``;
type Props={
    children:Element,
    className:string
}

function Layout(props:Props) {
    return (
            <Main className={props.className}>{props.children}</Main>
    )
}

export default  Layout;