import React from "react";
import Nav from "../components/Nav";
import {HashRouter as Router} from "react-router-dom";
import Layout from "../components/Layout";


function Tags() {
    return(
        <>
            <Layout>
                <h2>标签页面</h2>
            </Layout>
            <Nav/>
            </>
    )
}

export default Tags;