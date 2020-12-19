import React from "react";

import styled from "styled-components";


const Main = styled.main`
flex-grow: 1;
display: flex;
flex-direction: column;
`;
type Props={
children:Element
}

function Layout(props:Props) {
    return (
            <Main>{props.children}</Main>
    )
}

export default  Layout;