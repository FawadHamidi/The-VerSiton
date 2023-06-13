import React from "react";

function About(props) {
    return (
        <div id="about">
            <div className="about-image">
                <img src={props.image} alt="" />

            </div>
            <div className="about-text">
                {/* <h2>{props.title}</h2> */}
                <h2> <span> Web3 Junction:</span> hehehehehWhere Beginners Meet Professional's! </h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti consequuntur voluptatum
                    saepe est repellendus, nobis nesciunt odio. Esse, perferendis eveniet, ut aliquam in natus
                    consequuntur ratione labore cupiditate doloribus omnis aliquid officia exercitationem totam vero?
                </p>
                {/* <button>{props.button}</button> */}
                <a href="#" className="cv-btn">Know More</a>
            </div>

        </div>
    )
}

export default About;