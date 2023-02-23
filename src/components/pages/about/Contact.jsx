import React from "react";
import CostumForm from "../../contact/CostumForm";
import ProfileImage from "../../profile/ProfileImage";

export default function Contact(){
    return(
        <div className="contact-container">
            <ProfileImage src="pexels-sevenstorm-juhaszimrus-443383.jpg" alt="building" class="contact-image" />
            <CostumForm />
        </div>
    )
}