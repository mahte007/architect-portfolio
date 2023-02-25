import React from "react";

export default function ResumeSection(props){
    return(
        <div className="resume-section">
             <h2>{props.title}</h2>
             <p>{props.content}</p>
        </div>
    )
}