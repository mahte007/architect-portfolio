import React, { useEffect, useState } from "react";
import projects from "../../projects";
import { useParams } from "react-router";
import Project from "../project/Project";

export default function ProjectPage(){

    const { pageUrl } = useParams();
    const project = projects.find((p) => p.pageUrl === pageUrl);
    const imageClass = "project-image"
    const containerClass = "project-container container-fluid"
    const colClass = "project-content"

    //useState and EvenHandler for screen size and render positioning
    const [isWidth, setIsWidth] = useState(true);

    const handleScreenWidth = () => {
        if(window.innerWidth > 991){
            setIsWidth(true);
        }else{
            setIsWidth(false);
        }
    }

    useEffect(() => {
        handleScreenWidth();
    }, [])

    useEffect(() => {
        window.addEventListener('resize', handleScreenWidth)
    })


    //Function to scroll to the top if page is rendered
    const scrollToTop = () => {
        window.scrollTo(0, 0);
    }
    scrollToTop();

    if(!project) {
        return <div>Project not found</div>
    }

    return (
    <Project 
        containerClass={containerClass} 
        colClass={colClass} 
        project={project} 
        imageClass={imageClass}
        isWidth={isWidth} 
    />)
} 