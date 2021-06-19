import React, { useRef, useEffect } from 'react'
import { TweenMax, TimelineLite, Power3 } from 'gsap';
import './Hero.scss'

import arrow from '../../images/arrow-right.svg'
import image1 from '../../images/girl.webp'
import image2 from '../../images/boy.webp'


function Hero() {
    let hero = useRef(null);
    let images = useRef(null);

    let tl = new TimelineLite()

    useEffect(() => {
        const image1 = images.firstElementChild;
        const image2 = images.lastElementChild;

        TweenMax.to(hero, 0, {css: {visibility: 'visible'}})
        console.log(image1, image2);
    })

    return (
        <div className="hero" ref={el => hero = el}>
            <div className="container">
                <div className="hero-inner">
                    <div className="hero-content">
                        <div className="hero-content-inner">
                            <h1>
                                <div className="hero-content-line">
                                    <div className="hero-content-line-inner">Welcome</div>
                                </div>
                                <div className="hero-content-line">
                                    <div className="hero-content-line-inner">To My</div>
                                </div>
                                <div className="hero-content-line">
                                    <div className="hero-content-line-inner">Webpage</div>
                                </div>
                            </h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                                incididunt ut labore et dolore magna aliqua.</p>
                            <div className="btn-row">
                                <button className="explore-button">
                                    Learn More
                                    <div className="arrow-icon">
                                        <img src={arrow} alt="arrow" />
                                    </div>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="hero-images">
                        <div className="hero-images-inner" ref={el => images = el}>
                            <div className="hero-image image1">
                                <img src={image1} alt="image1"/>
                            </div>
                            <div className="hero-image image2">
                                <img src={image2} alt="image2"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div> 
        </div>
    )
}

export default Hero
