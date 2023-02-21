import React from "react";
import { Container, Row } from "react-bootstrap";
import ProjectImage from "./ProjectImage";
import ProjectDetails from "./ProjectDetails";




export default function Project(props) {

    if(props.isWidth){
        return(
            <Container className="project-container container-fluid">
                <Row>
                    <ProjectImage project={props.project} imageClass={props.imageClass} />
                    <ProjectDetails project={props.project} />
                </Row>
            </Container>
        )
    }else{
        return(
            <Container className="project-container container-fluid">
                <Row>
                    <ProjectDetails project={props.project} />
                    <ProjectImage project={props.project} imageClass={props.imageClass} />
                </Row>
            </Container>
        )
    }
}