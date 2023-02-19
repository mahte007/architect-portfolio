import React from "react";
import CustomLink from "./CostumLink";

export default function DropDown(){
    return (
        <div>
            <CustomLink to="/bio" text="BIO" />
            <CustomLink to="/resume" text="RESUME" />
            <CustomLink to="/contact" text="CONTACT" />
        </div>
    )
}
