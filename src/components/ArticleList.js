import React from "react";
import Article from "./Article";

function ArticleList({articleData}){
    
    return(
        <main>
            {articleData.map((post) => { 
            return (
            <Article 
                key ={post.id} 
                title={post.title} 
                date={post.date} 
                preview={post.preview}
            />)})}
        </main>
    )

}

export default ArticleList;
