import React from "react";

export default function CoverImage(props){

    const IMG = (imgName) => {
        return require('../img/'+ imgName)
    }

    return(
        <img src={IMG(props.src)} alt={props.alt} className={props.class}></img>
    )
}