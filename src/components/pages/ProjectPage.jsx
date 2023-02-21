import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import projects from "../../projects";
import { useParams } from "react-router";
import ModalImage from "react-modal-image";

export default function ProjectPage(){

    const [isWidth, setIsWidth] = useState(false);

    const handleScreenWidth = () => {
        if(window.innerWidth > 991){
            setIsWidth(true);
        }else{
            setIsWidth(false);
        }
    }

    useEffect(() => {
        window.addEventListener('resize', handleScreenWidth)
    })



    const scrollToTop = () => {
        window.scrollTo(0, 0);
    }

    scrollToTop();

    const { pageUrl } = useParams();
    const project = projects.find((p) => p.pageUrl === pageUrl);
    const imageClass = "project-image"

    const IMG = (imgName) => {
        return require('../../img/'+ imgName)
    }

    if(!project) {
        return <div>Project not found</div>
    }

    if(isWidth){
        return(
            <Container className="project-container container-fluid">
            <Row>
                <Col lg={6}>
                    {project.imagePortfolio.map((image, index) => (
                        <ModalImage 
                        small={IMG(project.imagePortfolio[index])}
                        large={IMG(project.imagePortfolio[index])}
                        alt={project.name}
                        className={imageClass}
                        hideDownload= "true"
                    />
                    ))}
                </Col>
                <Col lg={6} className="project-content">
                <h1>{project.name}</h1>
                    <p>{project.description}</p>
                </Col>
            </Row>
            </Container>

        )
    }else{
        return(
            <Container className="project-container container-fluid">
            <Row>
                <Col lg={6} className="project-content">
                   <h1>{project.name}</h1>
                    <p>{project.description}</p>
                </Col>
                <Col lg={6}>
                    {project.imagePortfolio.map((image, index) => (
                        <ModalImage 
                        small={IMG(project.imagePortfolio[index])}
                        large={IMG(project.imagePortfolio[index])}
                        alt={project.name}
                        className={imageClass}
                        hideDownload= "true"
                    />
                    ))}
                </Col>
            </Row>
            </Container>
    
        )
    }
}