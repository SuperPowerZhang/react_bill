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
import {combineReducers, createStore} from "redux";
import {tagsReducer} from "./store/reducer";
import {Provider} from "react-redux";

const Wrapper=styled.div`
display: flex;
flex-direction: column;
height:100vh;
background-color:rgb(245, 245, 245);
`;


type Tag={
    id:number,name:string
}
let appReducer=combineReducers({tagsReducer});
let store=createStore(appReducer)
const unsubscribe=store.subscribe(()=>{
    console.log('change',store.getState())
})
console.log(store.getState().tagsReducer)
const tagsReducer:any=store.getState().tagsReducer
const tags=tagsReducer.tags
console.log(tags)
function App() {
    return (
        <Provider store={store}>
        <Router>
            <Wrapper>
                <Switch>
                    <Route exact path="/tags">
                        <Tags />
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
