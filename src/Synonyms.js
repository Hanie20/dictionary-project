import React from "react";
import "./Synonyms.css";

export default function Synonyms(props) {
    if (props.synonyms) { 
        return ( <ul className="Synonyms"> 
        <em> {props.synonyms.map(function(synonym, index) {
            return ( <li key={index}> {synonym} </li>
            )
        }
        )
        } </em>
        </ul>
        );
    } else {
        return null;
    }
}