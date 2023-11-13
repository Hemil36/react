import React from "react";
import './style.css';
import { Link } from "react-router-dom";

export default function member() {
    return (
        <div>

            <section className="teams" id="teams">
                <div className="max-width c">

                    <h2 className="title re">Faculty Mentor</h2>
                    <div className="cop cop-1" style={{ display: "inline-flexbox" }}>
                        <div className="card">
                            <div className="box">
                                <img src={require("./images/anupamsir.jpg")} height="180px" width="180px" alt="" />
                                <div className="text">Prof. Anupam Singh</div>
                                <p style={{ fontSize: "1.3rem" }}><b> Physics Professor</b> <br /> </p>
                            </div>
                          
                        </div>
                    </div>



                    <h2 className="title codi" id="title">Coordinators</h2>
                    <div className="cop" style={{ display: "inline-flexbox" }}>
                        <div className="card">
                            <div className="box">
                                <img src={require("./images/vp1.jpg")} height="180px" width="180px" alt="" />
                                <div className="text">Vaibhav Khameshra</div>
                                <p><b>Branch :</b> CSE <br /> <b>Year :</b> 3 <sup>rd</sup> </p>
                            </div>
                            
                        </div>


                        <div className="card">
                            <div className="box">
                                <img src={require("./images/gsec.jpg")} height="180px" width="180px" alt="" />
                                <div className="text">Parishita Agrawal</div>
                                <p><b>Branch :</b> ECE <br /> <b>Year :</b> 3 <sup>rd</sup> <br /> </p>
                            </div>
                        </div>
                        <div className="card">
                            <div className="box">
                                <img src={require("./images/Screenshot_2023-10-06-19-55-52-60_92460851df6f172a4592fca41cc2d2e6.jpg")}
                                    height="180px" width="180px" alt="" />
                                <div className="text">Ruthvik Devavarapu</div>
                                <p><b>Branch :</b> CSE <br /> <b>Year :</b> 3 <sup>rd</sup> <br /> </p>
                            </div>
                        </div>
                        <div className="card">
                            <div className="box">
                                <img src={require("./images/co.jpg")} height="180px" width="180px" alt="Cordi-4" />
                                <div className="text">Parth Somani</div>
                                <p><b>Branch :</b> CSE <br /> <b>Year :</b> 3 <sup>rd</sup> <br /> </p>
                            </div>
                        </div>


                    </div>

                </div>

                <Link to="/team">

                    <button className="btn btn-team"> Club Members</button>
                </Link>

            </section >
        </div >
    );
}