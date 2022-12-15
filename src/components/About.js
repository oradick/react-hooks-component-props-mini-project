import React from "react";

function About({image, about}){

    return (
        <aside>
            <img 
            src={image} 
            alt="blog logo" 
            defaultValue="https://via.placeholder.com/215"
            />
            <p>{about}</p>
        </aside>
    )
}

export default About ;