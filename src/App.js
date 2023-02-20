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

  async function updateQuote() {
    // const url = "https://cors-anywhere.herokuapp.com/https://www.breakingbadapi.com/api/quote/random";
    try {
      const res = await fetch("https://api.breakingbadquotes.xyz/v1/quotes");

      const [newQuote] = await res.json();
      console.log(newQuote);

      setQuote({
        text: newQuote.quote,
        author: newQuote.author,
      });
    } catch (error) {}
  }

  useEffect(() => {
    updateQuote();
  }, []);

  return (
    <div className="app">
      <div className="cont">
        <h1>Quotes from</h1>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/7/77/Breaking_Bad_logo.svg"
          alt="logo"
        ></img>
        <div className="as">
          <Quote quote={quote}></Quote>
          <button onClick={() => updateQuote()}><p>Get Another</p></button>
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
