import React from "react";
import { Col } from "react-bootstrap";




export default function Project(props) {
    return(
        <Col lg={6} className="project-content">
                   <h1>{props.project.name}</h1>
                    <p>{props.project.description}</p>
        </Col>
    )
}