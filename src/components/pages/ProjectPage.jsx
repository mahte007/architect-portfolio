import React from "react";
import PostImage from "../PostImage";
import projects from "../../projects";
import { useParams } from "react-router";
import ModalImage from "react-modal-image";

export default function ProjectPage(){

    const { pageUrl } = useParams();
    const project = projects.find((p) => p.pageUrl === pageUrl);
    const imageClass = "project-image"

    const IMG = (imgName) => {
        return require('../../img/'+ imgName)
    }


    if(!project) {
        return <div>Project not found</div>
    }
    
    return(
        <div className="project-container container-fluid">
            <div>
                {project.imagePortfolio.map((image, index) => (
                    <ModalImage 
                    small={IMG(project.imagePortfolio[index])}
                    large={IMG(project.imagePortfolio[index])}
                    alt={project.name}
                    className={imageClass}
                    hideDownload= "true"
                />
                ))}
            </div>
            <div className="project-content">
               <h1>{project.name}</h1>
                <p>{project.description}</p>
            </div>
        </div>
    )
}