import React from "react";
import { Link, useResolvedPath, useMatch } from "react-router-dom";

export default function CustomLink(props){
    const resolvedPath = useResolvedPath(props.to);
    const isActive = useMatch({path: resolvedPath.pathname})
    return(
    <li className={isActive ? "active" : ""}>
        <Link to={props.to}>
        {props.text}
        </Link>
    </li>)
}