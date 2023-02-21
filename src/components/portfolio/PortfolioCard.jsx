import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import PortfolioImage from "./PortfolioImage";

export default function PortfolioCard(props){
    return (
        <Card key={props.project.key} border="light" className="h-100">
                <Link to={'/portfolio/' + props.project.pageUrl}>
                    <PortfolioImage project={props.project} />
                </Link>
        </Card>
    )
}