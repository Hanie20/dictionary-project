import axios from "axios";
import React, {useState} from "react";
import Results from "./Results"
import "./Dictionary.css";

export default function Dictionary() {
    let [word, setWord] = useState("");
    let [results, setResults] = useState(null);

     function handleResponse(response) {
        setResults(response.data[0]);
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
          <Results results={results}/>
 </div>
 );
}