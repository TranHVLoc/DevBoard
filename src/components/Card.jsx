import React from "react";

const Card = (props) => {
    return (
        <a href={props.url} target='_blank'>
            <div className={"Card " + props.anotherClass}>
                <div className="border">
                    <h2>{props.title}</h2>
                </div>
            </div>
        </a>
    )
};

export default Card;