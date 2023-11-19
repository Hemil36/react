import React from "react";

export default function card(props){
    return(
        <div className="card " data-aos="zoom-in-right">
        
                            <div className="box">
                                <img src= {props.image} alt="" />
                                <br />
                                    <div className="text"> <strong> {props.name}</strong></div>
                                    <p>{props.intro}
                                    </p>
                            </div>
                        </div>
    )
}