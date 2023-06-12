import React from "react";
import Navbar from "./Navbar";

function Header() {
    return (
        <div id="main">
            <Navbar/>
            <div className="name">
                <h1><span>A Place</span> for the Decentralized Innovation!</h1>
        
                <p className="details">A student run based Web3 community which aims to bridge the gap between beginners and professionals!</p>
                
                <a href="#" className="cv-btn">Join Now</a>
            </div>

        </div>
    )
}

export default Header;