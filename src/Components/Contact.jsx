import React from "react";

function Contact() {
    return(
        <div id="contact">
            <h3>Send Me Mail</h3>
            <div className="contact-input">
                <input type="email" placeholder='Please enter your email!'/>
                <a href="#">Send</a>
            </div>
        </div>
    )
}

export default Contact;