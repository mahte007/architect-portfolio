import React from "react";
import { Col } from "react-bootstrap";
import ModalImage from "react-modal-image";


export default function Project(props) {

    const IMG = (imgName) => {
        return require('../../img/project/'+ imgName)
    }

    return(
        <Col lg={6}>
                    {props.project.imagePortfolio.map((image, index) => (
                        <ModalImage 
                        small={IMG(props.project.imagePortfolio[index])}
                        large={IMG(props.project.imagePortfolio[index])}
                        alt={props.project.name}
                        className={props.imageClass}
                        hideDownload= "true"
                    />
                    ))}
        </Col>
    )
}