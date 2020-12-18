import React from "react";
import {
    HashRouter as Router,
    Switch,
    Route,
    Redirect
} from "react-router-dom";
import styled from 'styled-components';
import Nav from "./Nav";
import Statistics from "./views/Statistics";
import Bill from "./views/Bill";
import Tags from "./views/Tags";
import NoMatch from "./views/NoMatch";

const Wrapper=styled.div`
display: flex;
flex-direction: column;
height:100vh;
`;

const Main = styled.main`
flex-grow: 1;
`;

function App() {
    return (
        <Router>
        <Wrapper>
            <Main>
                <Switch>
                    <Route path="/tags">
                        <Tags />
                    </Route>
                    <Route path="/bill">
                        < Bill/>
                    </Route>
                    <Route path="/statistics">
                        <Statistics/>
                    </Route>
                    <Redirect exact from="/" to="/bill" />
                    <Route path="*" >
                        <NoMatch />
                    </Route>
                </Switch>
            </Main>
            <Nav/>

        </Wrapper>
        </Router>

    );
}

export default App;
