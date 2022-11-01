import { useState } from "react";
import Quote from "./component/Quote";
import { useEffect } from "react";
import "./index.css";

function App() {
  const initialQuote = {
    text: "asd",
    author: "we",
  };

  const [quote, setQuote] = useState(initialQuote);

  const updateQuote = async () => {
    const url = "https://www.breakingbadapi.com/api/quote/random";
    const res = await fetch(url);
    const [newQuote] = await res.json();
    console.log(newQuote);

    setQuote({
      text: newQuote.quote,
      author: newQuote.author,
    });
  };

  useEffect(() => {
    updateQuote();
  }, []);

  return (
    <div className="app">
      <div className="cont">
        <div className="qu">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/7/77/Breaking_Bad_logo.svg"
            alt="logo"
          ></img>
          <h1>Quotes from Breaking Bad</h1>
          <button onClick={() => updateQuote()}>Get Another</button>
          <Quote quote={quote}></Quote>
        </div>
      </div>
    </div>
  );
}

/* const respuesta = fetch("https://www.breakingbadapi.com/api/quote/random")
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.error(error));
 */

export default App;
