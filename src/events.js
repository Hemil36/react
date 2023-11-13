import React from "react";
import data from "./data"
import './style.css';
import Card from "./card"


export default function event() {
    const cards = data.map(item => {
        return (
            <Card
                image={item.img}
                intro={item.intro}
                name={item.name}
            />
        )
    }) 
    return (
        
        

 <div>

            <section className="skills" id="skills">
                <div className="max-width">
                    <h2 className="title">Flagship Events</h2>
                    <div className="carousel owl-carousel">
                        {cards}

                    </div>
                </div>
               
            </section>
        </div>






















        // <div>

        //     <section className="skills" id="skills">
        //         <div className="max-width">
        //             <h2 className="title">Flagship Events</h2>
        //             <div className="carousel owl-carousel">
        //                 <div className="card">
        //                     <div className="box">
        //                         <img src= {require("./images/IMG_2314.jpg")} alt="" />
        //                         <br />
        //                             <div className="text"> <strong> Astro Hunt</strong></div>
        //                             <p>AstroHunt is an exhilarating cosmic adventure where teams decipher astronomy-themed riddles
        //                                 to unveil hidden locations across their college campus. By solving each riddle and reaching
        //                                 the right spot, they form a celestial constellation on a provided map. The ultimate
        //                                 challenge: deduce the final location and the constellation it represents. Fastest team wins!
        //                             </p>
        //                     </div>
        //                 </div>
        //                 <div className="card">
        //                     <div className="box">
        //                         <img src={require("./images/WhatsApp Image 2023-10-25 at 9.46.04 AM.jpeg")} alt="" />
        //                         <br />
        //                             <div className="text"> <strong>Yuri's Night</strong></div>
        //                             <p>Yuri's Night, our stellar welcome event, is a celestial extravaganza! Dive into riveting
        //                                 debates, telescope stargazing, and thrilling games like "Chain Tod." Engage in discussions
        //                                 on all things astronomical and culminate the night with a harmonious jamming session. A
        //                                 stellar start to your journey with the club!</p>
        //                     </div>
        //                 </div>
        //                 <div className="card">
        //                     <div className="box">
        //                         <img src={require("./images/Copy of DSC_0132-471.jpg")} alt="" />
        //                         <br />
        //                             <div className="text"> <strong> Weakest-Link </strong></div>
        //                             <p>"Weakest Link" is a thrilling quiz of strategy and wit. With each correct answer, teams
        //                                 decide to bank their winnings or risk it for double. Wrong answers reset their earnings.
        //                                 After rounds of elimination, a final spin decides the topic and the last team standing wins
        //                                 it all. Who will prove to be the strongest link?</p>
        //                     </div>
        //                 </div>
        //                 <div className="card">
        //                     <div className="box">
        //                         <img src={require("./images/DSC_0121.jpg")} alt="" />
        //                         <br />
        //                             <div className="text"> <strong>Brahmand</strong></div>
        //                             <p>Bhramaand is the ultimate cosmic challenge, an astronomy-hackathon where teams tackle future
        //                                 astronomical conundrums. Armed with innovative solutions, they present their visionary ideas
        //                                 to discerning judges. The crucible of questions tests their mettle. The team with the most
        //                                 visionary, budget-friendly answers takes home the celestial crown</p>
        //                     </div>
        //                 </div>


        //                 <div className="card">
        //                     <div className="box">
        //                         <img src={require("./images/dhoomketu.jpeg")} alt="" />
        //                         <br />
        //                             <div className="text"> <strong>Dhoomketu</strong></div>
        //                             <p>A Cosmic Symphony. Jamming under the starry canvas, where melodies meet constellations.
        //                                 Groove to the cosmos' rhythms or stargaze at the library lawn. An extraordinary night</p>
        //                     </div>
        //                 </div>

        //             </div>
        //         </div>
               
        //     </section>
        // </div>
    )
}