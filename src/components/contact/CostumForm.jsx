import React, { useState } from "react";

export default function CostumForm(){

    const [status, setStatus] = useState("Submit");
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
    const { name, email, message } = e.target.elements;
    let details = {
      name: name.value,
      email: email.value,
      message: message.value,
    };
    console.log(details)
    let response = await fetch("http://localhost:5000/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(details),
    });
    setStatus("Submit");
    let result = await response.json();
    alert(result.status);
  };



    return(
        <div className="contact-form-container">
            <h3>Have a Question?</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            <form className="contact-form" onSubmit={handleSubmit}>
                <input type="text" placeholder="Name" id="name"></input> <br />
                <input type="email" placeholder="Email" id="email"></input> <br />
                <textarea placeholder="Message" rows="3" cols="30" id="message"></textarea> <br />
                <button>Send</button>
            </form>
        </div>
    )
}