import React from "react";
import Card from "./Card";

const Section = (props) => {
    return (
        <div className="Section">
            <Card anotherClass = {props.card1} title = {props.title1} url = {props.url1}/>
            <Card anotherClass = {props.card2} title = {props.title2} url = {props.url2}/>
            <Card anotherClass = {props.card3} title = {props.title3} url = {props.url3}/>
            <Card anotherClass = {props.card4} title = {props.title4} url = {props.url4}/>
        </div>
    )
};

export default Section;