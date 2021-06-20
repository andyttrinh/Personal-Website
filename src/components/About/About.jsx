import React from 'react';
import './About.scss';

function About() {
    return (
        <div className="about">
            <div className="container">
                <div className="about-inner">
                    <div className="about-content">
                        <div className="about-content-inner">
                            <h1>
                                <div className="about-content-line">
                                    <div className="about-content-line-inner">About Me</div>
                                </div>
                            </h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                                incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                                incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                                incididunt ut labore et dolore magna aliqua.</p>
                            <div className="btn-row">
                                <button className="explore-button">
                                    Learn More
                                    <div className="arrow-icon">
                                        <img src="" alt="arrow" />
                                    </div>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="about-images">
                        <div className="about-images-inner">
                            <div className="about-image image1">
                                <img src="" alt="image1"/>
                            </div>
                            <div className="about-image image2">
                                <img src="" alt="image2"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div> 
        </div>
    )
}

export default About
