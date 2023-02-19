import React from "react";
import { Link } from "react-router-dom";
import projects from "../../projects";

export default function Portfolio(){
    return(
        <div>
            {projects.map((project) => (
                <li key={project.id}>
                    <Link to={'/projects/' + project.pageUrl}>{project.name}</Link>
                </li>
            ))}
        </div>
    )
}