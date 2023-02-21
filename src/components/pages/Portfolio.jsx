import React from "react";
import { Link } from "react-router-dom";
import projects from "../../projects";
import { Container, Row, Col, Card } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Portfolio(){

    const IMG = (imgName) => {
        return require('../../img/'+ imgName)
    }

    return(
        <Container className="portfolio-container">
        <Row className="m-3">
            {projects.map((project) => (
            <Col sm={12} lg={4} xl={3} className="mb-5">
                <Card key={project.key} border="light" className="h-100">
                <Link to={'/projects/' + project.pageUrl}>
                    <Card.Img
                    variant="top"
                    src={IMG(project.imageUrl)}
                    alt={project.name}
                    className="img-fluid w-100"
                    />
                
                    <Card.ImgOverlay className="d-flex align-items-end">
                    <Card.Title className="text-light">
                        <h2 className="card-title">{project.name}</h2>
                    </Card.Title>
                    </Card.ImgOverlay>
                </Link>
                </Card>
            </Col>
            ))}
        </Row>
        </Container>
            
    )
}