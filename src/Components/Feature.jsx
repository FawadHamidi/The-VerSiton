import React from "react";
import FeatureBxo from "./FeatureBox";
import featureimage from '../images/feature_1.png';
import featureimage2 from '../images/feature_2.png';
import featureimage3 from '../images/feature_3.png';

function Feature() {
    return (
        <div id="features">
            <div className="a-container">
                    <FeatureBxo image={featureimage} title='Learn Web3'/>
                    <FeatureBxo image={featureimage2} title='Opportunities'/>
                    <FeatureBxo image={featureimage3} title='Development Resources'/>
            </div>
        </div>
    )
}
export default Feature;