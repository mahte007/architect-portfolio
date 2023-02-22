import React from "react";
import { Link } from "react-router-dom";
import PostContent from "./PostContent";
import PostImage from "./PostImage";
import { Container, Col, Row } from "react-bootstrap";

export default function FeaturedPost(props){
    return (
        <Container className="featured-post">
        <Row>
            <Col sm={12} lg={6}>
            <PostContent />
            </Col>
            <Col sn={12} lg={6}>
            <Link to={'/portfolio/' + props.src}><PostImage src="pexels-gdtography-911758.jpg" class="featured-image"/></Link>
            </Col>
        </Row>
        </Container>
    )
}