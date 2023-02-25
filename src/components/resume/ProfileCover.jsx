import React from "react";

export default function ProfileCover(props){

    const IMG = (imgName) => {
        return require('../img/profil/'+ imgName)
    }

    return(
        <img src={IMG(props.src)} alt={props.alt} className={props.class}></img>
    )
}