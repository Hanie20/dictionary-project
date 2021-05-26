import axios from "axios";
import React, {useState} from "react";
import Results from "./Results"
import "./Dictionary.css";

export default function Dictionary(props) {
    let [word, setWord] = useState(props.defaultKeyword);
    let [results, setResults] = useState(null);
    let [loaded, setLoaded] = useState(false);
    let [photos, setPhoto] = useState(false)

     function handleDictionaryResponse(response) {
        setResults(response.data[0]);
    }
    function handlePexelsResponse (response) {
        console.log(response.data);
    }
    function searchWord() {
      //documentation: https://dictionaryapi.dev/
        let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${word}`;
        axios.get(apiUrl).then(handleDictionaryResponse);
        let pexelsApiKey = `563492ad6f917000010000015952f780e84240f0be7a60c638f5a1fd`;
        let pexelsApiUrl = ` https://api.pexels.com/v1/search?query=${word}&per_page=1`;
        let headers = {"Authorization" : `Bearer ${pexelsApiKey}`} ;
        axios
        .get(pexelsApiUrl, {  headers: headers}).then
        (handlePexelsResponse);
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