import React from "react";

export default function PostImage(props){

    const IMG = (imgName) => {
        return require('../../img/project/'+ imgName)
    }

    return(
            <img src={IMG(props.src)} alt="project" className={props.class}></img>
    )
}
