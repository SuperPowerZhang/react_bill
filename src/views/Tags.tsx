import React from "react";
import Layout from "../components/Layout";
import {useTags} from './common/useTags'

function Tags() {
    const {tags,setTags}=useTags();
    return(
            <Layout>
                <h2>标签页面</h2>

                <ul>
                    {tags.map((tag) => {
                        return <li key={tag}>{tag}</li>
                    })}
                </ul>
            </Layout>
    )
}

export default Tags;