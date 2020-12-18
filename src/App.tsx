import React from "react";
import {
    HashRouter as Router,
    Switch,
    Route,
    Link,
    Redirect
} from "react-router-dom";
import styled from 'styled-components';

const Wrapper=styled.div`
display: flex;
flex-direction: column;
height:100vh;
`;

const Main = styled.main`
flex-grow: 1;
`;
const Nav=styled.nav`
 > ul{
    display: flex;
    justify-content: space-around;
    text-align: center;
    padding: 20px;
 }
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
                        <Bill />
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
            <Nav>
                    <ul>
                        <li>
                            <Link to="/tags">标签页</Link>
                        </li>
                        <li>
                            <Link to="/bill">记账页</Link>
                        </li>
                        <li>
                            <Link to="/statistics">统计页</Link>
                        </li>
                    </ul>
            </Nav>

        </Wrapper>
        </Router>

    );
}

function Statistics() {
    return <h2>统计页面</h2>;
}

function Tags() {
    return <h2>标签页面</h2>;
}

function Bill() {
    return <h2>记账页面</h2>;
}
function NoMatch(){
    return <h2>404了，肯定有哪里不对劲</h2>
}
export default App;
