import React from "react";

export default function PostImage(props){

    const IMG = (imgName) => {
        return require('../img/'+ imgName)
    }

    return(
        <div>
            <img src={IMG(props.src)} alt="project" className={props.class}></img>
        </div>
    )
}
