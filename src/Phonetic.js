import React from "react";
import "./Phonetic.css";
export default function Phonetic(props) {
    console.log(props.phonetic);
    return (<div className="Phonetic"> 
    <a href={props.phonetic.audio} rel="noreferrer" >
        Listen 
    </a>
    <span className="text"> 
    <em> {props.phonetic.text} </em>
    </span>
    </div>);
}