import React from "react";
import { Card } from "react-bootstrap";

export default function PortfolioCard(props){

    const IMG = (imgName) => {
        return require('../../img/project/'+ imgName)
    }

    return (
        <>
            <Card.Img
                        variant="top"
                        src={IMG(props.project.imageUrl)}
                        alt={props.project.name}
                        className="img-fluid w-100"
                        />
                        <Card.ImgOverlay className="d-flex align-items-end">
                        <Card.Title className="text-light">
                            <h2 className="card-title">{props.project.name}</h2>
                        </Card.Title>
            </Card.ImgOverlay>
        </>
    )
}