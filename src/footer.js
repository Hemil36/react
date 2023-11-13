import React from "react";
import './style.css'
export default function footer(){
    return(
        <div>
        <section className="contact flex" id="contact">


        <div className="footer-1">

            <div className="footer-logo">
                <img src={require("./images/logo.png")} alt="Logo" style={{borderRadius: "100%"}} />
            </div>



            <div className="follow" style={{textAlign: "center"}}>
                <p style={{paddingBottom: "0.6rem"}} className="io"> Contact Us on </p>
                <a href="https://www.instagram.com/astronomylnmiit/"> <img className="r" src={require("./images/instagram.png")}
                        height="30px" alt="" /> </a>
                <p className="i">astronomyclub@lnmiit.ac.in</p>
            </div>

        </div>

        <div className="address ">
            <img src={require("./images/1.png")} alt="" />

            <a className="link" href="https://maps.app.goo.gl/sdQWYFRbuqYkCMgK9">

                <p className="iu">The LNM Institute of Information Technology
                    Rupa ki Nangal, Post-Sumel, Via-Jamdoli
                    Jaipur-302031,
                    (Rajasthan) </p>

            </a>

        </div>


    </section>


   
    <footer>
        <span>Developed By <a href="https://www.instagram.com/astronomylnmiit/">Astronmy Club LNMIIT</a> | <span
                className="far fa-copyright"></span> 2023 All rights reserved.</span>
    </footer>
    </div>
    );
}