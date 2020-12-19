import React from "react";
import {
    HashRouter as Router,
    Switch,
    Route,
    Redirect
} from "react-router-dom";
import styled from 'styled-components';
import Statistics from "./views/Statistics";
import Bill from "./views/Bill";
import Tags from "./views/Tags";
import NoMatch from "./views/NoMatch";

const Wrapper=styled.div`
display: flex;
flex-direction: column;
height:100vh;
`;

function App() {
    return (
        <Router>
            <Wrapper>
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
            </Wrapper>
        </Router>

    );
}

export default App;
