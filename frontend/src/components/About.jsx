import React from "react";
import { Link } from "react-router-dom";
import {HiOutlineArrowNarrowRight} from 'react-icons/hi';

const About=() =>{
    return(
        <section className="about" id="about">
            <div className="container">
                <div className="banner">
                    <div className="top">
                        <h1 className="heading">ABOUT US</h1>
                        <p>The only thing we are serious about is FOOD!</p>
                    </div>
                    <p className="mid">We’ve made it! We’ve arrived! We’re here! 

Ci Siamo bridges the traditional with the contemporary, bringing live-fire cooking, housemade pasta, and a robust Italian wine list to the heart of Manhattan West.</p>
                <Link to={"/"}>Explore Menu
                <span><HiOutlineArrowNarrowRight/></span>
                </Link>
                </div>
                <div className="banner">
                <img src="about.png" alt="about" />
                </div>
            </div>
        </section>

    )
}
export default About;