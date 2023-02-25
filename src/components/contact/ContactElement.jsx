import React from "react";

export default function ContactElement(props){
    return(
        <p><b>{props.name}:</b> {props.content}</p>
    )
}