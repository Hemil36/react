import React from "react";
import './style.css';
import logo from "./images/logo.png";


export default function Pop() {
    return (

        <div >
           <div className="scroll-up-btn">
        <i className="fas fa-angle-up"></i>
    </div>
            <nav className="navbar flex">


                <div className="container logo ">
                    
                <img src={logo} alt="Logo" className="align-text-top pogo" />

                        <a id="club" href="/#"><span>Astronomy Club LNMIIT </span></a>

                    
                </div>

 

                <div className="menu1 ">

                    <ul className="menu ms">
                        <li><a href="#home" className="menu-btn">Home</a></li>
                        <li><a href="#about" className="menu-btn">About</a></li>
                        <li><a href="#skills" className="menu-btn">Events</a></li>
                        <li><a href="#teams" className="menu-btn">Team</a></li>
                        <li><a href="#contact" className="menu-btn">Contact Us</a></li>
                    </ul>

                    <div className="menu-btn">
                        <i className="fas fa-bars"></i>
                    </div>
        </div>



    </nav >
    <section className="home" id="home">
        <div className="max-width">
            <div className="home-content">
                <div className="text-1">Hello, Welcome to </div>
                <div className="text-2">Astronomy Club LNMIIT</div>
                <div className="text-3">At the heart of our Astro Club,<br /> <span className="typing"></span></div>
                {/* <!-- <button type="button" className=" btn ">Latest Events</button>  --> */}
            </div>
        </div>

    </section>
</div >

    )
}

