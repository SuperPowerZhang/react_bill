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
import {Tag} from "./views/Tag";
import {Provider} from "react-redux";
import {store} from './store/store'
import TagsDisplay from "./connect/tagsConnect";

const Wrapper=styled.div`
display: flex;
flex-direction: column;
height:100vh;
background-color:rgb(245, 245, 245);
`;


const unsubscribe=store.subscribe(()=>{
    console.log('change',store.getState())
})
function App() {
    return (
        <Provider store={store}>
        <Router>
            <Wrapper>
                <Switch>
                    <Route exact path="/tags">
                        <TagsDisplay />
                    </Route>
                    <Route exact path="/tags/:id">
                        <Tag  />
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
        </Provider>

    );
}

export default App;
