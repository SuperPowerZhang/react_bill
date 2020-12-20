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
import {Tag} from "./Tag";

const Wrapper=styled.div`
display: flex;
flex-direction: column;
height:100vh;
background-color:rgb(245, 245, 245);
`;

function App() {
    return (
        <Router>
            <Wrapper>
                <Switch>
                    <Route exact path="/tags">
                        <Tags />
                    </Route>
                    <Route exact path="/tags/:tag">
                        <Tag />
                    </Route>
                    <Route exact path="/bill">
                        < Bill/>
                    </Route>
                    <Route exact path="/statistics">
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
