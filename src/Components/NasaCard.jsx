import React from "react";

const NasaCard = (props) => {
    return(
    <div className="nasa-card">
        <h2>{props.title}</h2>
        <p className="date">{props.date}</p>
        <img src={props.image} alt={props.title}/>
        <small>{props.copyright}</small>
        <p className="description">{props.explanation}</p>
        {/* <small>{props.copyright}</small> */}
    </div>
    )
}

export default NasaCard;