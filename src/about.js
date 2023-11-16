import React from "react";
import logo from "../src/images/logo.png";

export default function about() {
    return (
        <div>

            <section className="about" id="about" >
                <div className="max-width">
                    <h2 className="title">About us</h2>
                    <div className="about-content">
                        <div className="column left">
                            <img src={logo} style={{borderRadius: "30%"}} alt="" />
                        </div>
                        <div data-aos="fade-left"
     data-aos-anchor="#example-anchor"
     data-aos-offset="1000"
     data-aos-duration="1500" className="column right ">
                            <div className="text"> We are Star-Gazers!! <span className="typing-2"></span></div>
                            <p  >We are a celestial heaven for aspiring stargazers, space enthusiasts, and cosmic explorers.
                                Dedicated to expanding our understanding of the universe, we provide a celestial sanctuary for
                                all.
                                Our array of activities is designed to cater to all levels of interest and experience. Our
                                activities include thrilling stargazing sessions that connect us with the celestial wonders
                                above. Our telescope workshops are a fantastic opportunity to gain hands-on experience with
                                astronomical equipment.
                                What truly sets our club apart are the debates and discussions on current technologies as well
                                as future aspects of the Universe which broaden everyone's perspective and force you to think
                                about things beyond the universe.
                                The Astronomy Club is more than just a club; it's an open portal to embark on an extraordinary
                                cosmic odyssey.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}