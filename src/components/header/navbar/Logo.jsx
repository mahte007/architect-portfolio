import React from "react";
import { Link } from "react-router-dom";

export default function Logo(props){
    return(
        <Link className="site-title" to={props.to}>
                {props.text}
        </Link>
    )
}