import React from "react";
import Members from "./members";
import Footer from "./footer";
import Events from "./events";
import { Helmet } from "react-helmet";
import Nav from "./nav";
import About from "./about"
import './2.scss';
export default function main() {
    return (
        <div className="popat">
            <Helmet>


                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" />
                <link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" />
                <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>
                <script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
                <script src="https://cdnjs.cloudflare.com/ajax/libs/typed.js/2.0.11/typed.min.js"></script>
                <script src="https://cdnjs.cloudflare.com/ajax/libs/waypoints/4.0.1/jquery.waypoints.min.js"></script>
                <script src="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/owl.carousel.min.js"></script>
                <script src="http://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js"></script>
                <script src="http://threejs.org/examples/js/libs/stats.min.js"></script>
                <script src="./src/script.js"></script>

                <script src="jquery-2.1.4.js"></script>
                <script src="https://unpkg.com/aos@next/dist/aos.js"></script>
  <script>
    AOS.init();
  </script>


            </Helmet>
            <Nav />
            <About />
            <Events />
            <Members />
            <Footer />
        </div>
    )
        ;
}