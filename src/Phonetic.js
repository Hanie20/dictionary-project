import React from "react";

export default function Phonetic(props) {
    console.log(props.phonetic);
    return (<div className="Phonetic"> 
    <a href={props.phonetic.audio} target="_blank">
        Listen
    </a>
    <br />
    <em> {props.phonetic.text} </em>
    </div>);
}