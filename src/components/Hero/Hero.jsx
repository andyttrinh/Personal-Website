import React, { useRef, useEffect } from 'react'
import gsap, { Power3 } from 'gsap';
import './Hero.scss'

import arrow from '../../images/arrow-right.svg'
import image1 from '../../images/girl.webp'
import image2 from '../../images/boy.webp'


function Hero() {
    // Reference for DOM Elements
    let hero = useRef(null);
    let images = useRef(null);
    let content = useRef(null);

    let t1 = gsap.timeline({delay: .7});

    useEffect(() => {
        gsap.to(hero, {duration: 0, css: {visibility: 'visible'}})

        // Animation For Contents
        const headlineFirst = content.children[0].children[0]; // returns first div of h1
        const headlineSecond = headlineFirst.nextSibling;
        const headlineThird = headlineSecond.nextSibling;
        const contentP = content.children[1];
        const contentButton = content.children[2];

        t1.from([headlineFirst.children, headlineSecond.children, headlineThird.children], {
            duration: 1,
            y: 44, 
            ease: Power3.easeOut, 
            delay: .8,
            stagger: .15}, 'start') // 'Start' just means that the two timelines run at the same time, it can be anything
            .from(contentP, {duration: 1, y: 20, opacity: 0, ease: Power3.easeOut}, 1.4)
            .from(contentButton, {duration: 1, y: 20, opacity: 0, ease: Power3.easeOut}, 1.4);

        // Animation For Images
        const image1 = images.firstElementChild;
        const image2 = images.lastElementChild;

        t1.from(image1, {duration: 1.2, y: 1280, ease: Power3.easeOut}, 'start')
        .from(image1.firstElementChild, {duration: 2, scale: 1.6, ease: Power3.easeOut}, .2) // .2 is how long it plays after the first .from
        .from(image2, {duration: 1.2, y: 1280, ease: Power3.easeOut}, .2)
        .from(image2.firstElementChild, {duration: 2, scale: 1.6, ease: Power3.easeOut}, .2);

    }, []);

    

    return (
        <div className="hero" ref={el => hero = el}>
            <div className="container">
                <div className="hero-inner">
                    <div className="hero-content">
                        <div className="hero-content-inner" ref={el => content = el}>
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
