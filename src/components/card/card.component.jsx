import React from "react";
import './card.style.css';

function Card(props) {
    const { id, name, email } = props.monster;

    return (
        <div className="card-container">
            <img alt="monster" src={`https://robohash.org/${id}?set=set2`} />
            <h2>{name}</h2>
            <p>{email}</p>
        </div>
    );
}

export default Card;
