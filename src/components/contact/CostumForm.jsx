import React from "react";

export default function CostumForm(){
    return(
        <div>
            <h3>Have a Question?</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            <form className="contact-form">
                <input type="text" placeholder="Name"></input> <br />
                <input type="email" placeholder="Email"></input> <br />
                <textarea placeholder="Message" rows="3" cols="30"></textarea> <br />
                <button>Send</button>
            </form>
        </div>
    )
}