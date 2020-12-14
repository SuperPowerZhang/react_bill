import React from "react";
import {
    HashRouter as Router,
    Switch,
    Route,
    Link,
    Redirect
} from "react-router-dom";

function App() {
    return (
        <Router>
            <div>
                <nav>
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
                </nav>
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
            </div>
        </Router>
    );
}

function Statistics() {
    return <h2>Statistics</h2>;
}

function Tags() {
    return <h2>Tags</h2>;
}

function Bill() {
    return <h2>Bill</h2>;
}
function NoMatch(){
    return <h2>404</h2>
}
export default App;
