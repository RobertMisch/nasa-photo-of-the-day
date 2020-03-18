import React, { useState, useEffect } from "react";

const NasaCard = (props) => {
    return(
    <div className="nasa-card">
        <h2>{props.title}</h2>
        <p className="date">{props.date}</p>
        <img src={props.image}/>
        <p className="description">{props.explanation}</p>
    </div>
    )
}

export default NasaCard;