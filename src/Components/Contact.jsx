import React from "react";

function Contact() {
    return(
        <section id="contact">
            <h3>Subscribe Now</h3>
            <div className="contact-input">
                <input type="email" placeholder='Please enter your email!'/>
                <a href="#">Send</a>
            </div>
        </section>
    )
}

export default Contact;