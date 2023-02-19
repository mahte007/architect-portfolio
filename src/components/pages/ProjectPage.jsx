import React from "react";
import PostImage from "../PostImage";
import projects from "../../projects";
import { useParams } from "react-router";

export default function ProjectPage(){

    const { pageUrl } = useParams();
    const project = projects.find((p) => p.pageUrl === pageUrl);
    const imageClass = "project-image"


    if(!project) {
        return <div>Project not found</div>
    }
    
    return(
        <div className="project-container container-fluid">
            <div>
                <PostImage src={project.imageUrl} class={imageClass}/>
                <PostImage src={project.imageUrl} class={imageClass}/>
                <PostImage src={project.imageUrl} class={imageClass}/>
                <PostImage src={project.imageUrl} class={imageClass}/>
            </div>
            <div className="project-content">
               <h1>{project.name}</h1>
                <p>{project.description}</p>
            </div>
        </div>
    )
}