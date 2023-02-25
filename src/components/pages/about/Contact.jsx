import React from "react";
import ContactElement from "../../contact/ContactElement";
import CostumForm from "../../contact/CostumForm";
import ProfileImage from "../../profile/ProfileImage";

export default function Contact(){
    return(
        <div>
            <div className="contact-container">
                <ProfileImage src="pexels-sevenstorm-juhaszimrus-443383.jpg" alt="building" class="contact-image" />
                <CostumForm />
            </div>
            <hr width="80%" className="page-line-whitespace" />
            <div className="contact-elements">
                <ContactElement name="Cell" content="+36 20 123 4567" />
                <ContactElement name="Email" content="koszegi.katica00@gmail.com" />
            </div>
        </div>
    )
}