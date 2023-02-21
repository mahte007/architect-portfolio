import React from "react";
import projects from "../../projects";
import { Container, Row, Col } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import PortfolioCard from "../portfolio/PortfolioCard";

export default function Portfolio(){
    return(
        <Container className="portfolio-container">
        <Row className="m-3">
            {projects.map((project) => (
            <Col sm={12} lg={4} xl={3} className="mb-5">
                <PortfolioCard project={project} />
            </Col>
            ))}
        </Row>
        </Container>     
    )
}