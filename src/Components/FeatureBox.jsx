import React from "react";

function FeatureBxo(props) {
    return (
        <div className="a-box" >
                <div className="a-b-img">
                    <img src={props.image} />
                </div>
                <div className="s-b-text">
                    <h2>{props.title}</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>
        </div>
    )
}
export default FeatureBxo;