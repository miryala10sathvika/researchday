import React from "react";
import "./card.css";

// Container template for position, name, college/institute
function Card(props) {
return (
    <div className="card" style={{ width: "46.5%" }}>
        <div className="card-header">
            <h5>{props.position}</h5>
        </div>

        {props.members.map((person, index) => (
            <div key={index}>
                {index > 0 && <hr  className="hr"/>}
                <div className="card-body">
                    <p className="card-name">{person.name}</p>
                    <p className="card-institute">{person.institute}</p>
                </div>
            </div>
        ))}
    </div>
);
}

export default Card;
