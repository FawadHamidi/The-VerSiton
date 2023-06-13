import React from "react";
import FeatureBxo from "./FeatureBox";
import featureimage from '../images/feature_1.png';
import featureimage2 from '../images/feature_2.png';
import featureimage3 from '../images/feature_3.png';

function Feature() {
    return (
        <section id="features">
            <div className="a-container">
                 <a href="#" target="_blank"><FeatureBxo image={featureimage} title='Learn Web3'/></a>
                 <a href="#" target="_blank"><FeatureBxo image={featureimage2} title='Opportunities'/></a>
                 <a href="#" target="_blank"><FeatureBxo image={featureimage3} title='Development Resources'/></a>
            </div>
        </section>
    )
}
export default Feature;