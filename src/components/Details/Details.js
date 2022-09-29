import React from 'react';
import antor from '../../image/antor.jpg';
import './Details.css';
const Details = () => {
    return (
        <div>
            <div className="about-me">
                <img src={antor} alt="" />
                <div className="name">
                    <h3>MD. Rakib Khan</h3>
                    <p>Bogra, Bangladesh</p>
                </div>
            </div>

            <div className="body-detai">
                
            </div>

        </div>
    );
};

export default Details;