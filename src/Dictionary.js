import axios from "axios";
import React, {useState} from "react";
import Results from "./Results"
import "./Dictionary.css";

export default function Dictionary(props) {
    let [word, setWord] = useState(props.defaultKeyword);
    let [results, setResults] = useState(null);
    let [loaded, setLoaded] = useState(false);

     function handleResponse(response) {
        setResults(response.data[0]);
    }
    function searchWord() {
      //documentation: https://dictionaryapi.dev/
        let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${word}`;
        axios.get(apiUrl).then(handleResponse);
    }
    function handleSubmit(event) {
      event.preventDefault();
        searchWord();
    }

     function manageKeywordChange(event) {
         setWord(event.target.value);
    }

    function load () {
     setLoaded(true);
     searchWord();
    }

    if (loaded) {
     return ( <div className="Dictionary">
     <section> 
         <h1>
             What word do you want to look up?
         </h1>
     <form onSubmit= {handleSubmit}>
         <input type="search"  onChange={manageKeywordChange}
         defaultValue={props.defaultKeyword}/> 
    </form>
    <div className="hint">
        <em> suggested words: life, sunset,  world, keyboard...</em>
    </div>
    </section>
          <Results results={results}/>
     </div>
     )   ;
} else {
    load();
    return "loading";
}
 
}