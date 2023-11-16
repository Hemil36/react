import React, { Component } from "react";
import { render } from "react-dom";
import Scroll from './scroll'
import $ from "jquery";
import Team from "./team";
import 'owl.carousel';
import Main from "./main";
import { BrowserRouter, Route,Routes } from "react-router-dom";

class App extends Component {

lcomponentDidCatch(error, errorInfo) {
    // log the error
    console.log("Error caught!");
    console.error(error);
    console.error(errorInfo);

    // record the error in an APM tool...
}

    componentDidMount() {
     
        $(document).ready(function () {
            $(window).scroll(function () {
                // sticky navbar on scroll script
                if (this.scrollY > 20) {
                    $('.navbar').addClass("sticky");
                } else {
                    $('.navbar').removeClass("sticky");
                }

                // scroll-up button show/hide script
                if (this.scrollY > 500) {
                    $('.scroll-up-btn').addClass("show");
                } else {
                    $('.scroll-up-btn').removeClass("show");
                }
            });

            // slide-up script
            $('.scroll-up-btn').click(function () {
                $('html').animate({ scrollTop: 0 });
                // removing smooth scroll on slide-up button click
                $('html').css("scrollBehavior", "smooth");
            });

            $('.navbar .menu li a').click(function () {
                // applying again smooth scroll on menu items click
                $('html').css("scrollBehavior", "smooth");
            });

            // toggle menu/navbar script
            $('.menu-btn').click(function () {
                $('.navbar .menu').toggleClass("active");
                $('.menu-btn i').toggleClass("active");
            });

            // typing text animation script
            // eslint-disable-next-line no-use-before-define, no-undef, no-unused-vars
            var typed = new Typed(".typing", {
                strings: ["Curiosity Thrives!", "we journey together beyond the known!", " Telescopes unveil wonders!", "We Win!"],
                typeSpeed: 60,
                backSpeed: 70,
                loop: true
            });
            // eslint-disable-next-line no-use-before-define, no-undef, no-unused-vars
            var typed1 = new Typed(".typing-2", {
                strings: ["One Team", "One Family"],

                typeSpeed: 100,
                backSpeed: 60,
                loop: true
            });
            // $("#owl-demo").owlCarousel({
            //     navigation : true
            //   });

            $(window).on("load", function () {
                $(".loader-wrapper").fadeOut("slow")
            });

            // owl carousel script
            $('.carousel').owlCarousel({
            
                margin: 20,
                loop: true,
                autoplay: true,
                autoplayTimeOut: 20,
                autoplayHoverPause: true,
                responsive: {
                    0: {
                        items: 1,
                        nav: false
                    },
                    600: {
                        items: 2,
                        nav: false
                    },
                    1000: {
                        items: 3,
                        nav: false
                    }
                }
            });
        });


    }
    render() {
 
        return (
            <div>

            <BrowserRouter>
            <Scroll />
            <Routes>
            <Route path="/" element={<Main />} />           
         
            <Route path="/team" element={<Team />} />
            
            </Routes>
            </BrowserRouter>
            </div>
        );
    }
}

render(<App />, document.getElementById("root"));
