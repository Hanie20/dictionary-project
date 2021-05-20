import axios from "axios";
import React, {useState} from "react";
import "./Dictionary.css";

export default function Dictionary() {
    let [word, setWord] = useState("");

     function handleResponse(response) {
        console.log(response.data[0]);
    }

    function searchWord(event) {
      event.preventDefault();
        //documentation: https://dictionaryapi.dev/
        let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${word}`;
        axios.get(apiUrl).then(handleResponse);
    }

     function manageKeywordChange(event) {
         setWord(event.target.value);
    }

 return ( <div className="Dictionary">
     <form onSubmit= {searchWord}>
         <input type="search"  onChange={manageKeywordChange}/> 
          </form>
 </div>
 );
}