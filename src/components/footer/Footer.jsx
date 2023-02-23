import React from "react";
import Icon from "./Icon"

export default function Footer(){
    const date = new Date()
    const currentYear = date.getFullYear();

    return (
        <>
            <div>
                <Icon class="fa-brands fa-instagram footer-icon" />
                <Icon class="fa-brands fa-facebook footer-icon" />
                <Icon class="fa-regular fa-envelope footer-icon" />
            </div>

            <div>
                @{currentYear} Kőszegi Katica
            </div>
        </>
    )
}