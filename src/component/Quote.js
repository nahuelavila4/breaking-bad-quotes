import React from "react";

const Quote = ({quote}) => {
  return (
    <div className="quote-style">
      <p>
        {quote.text}
        <br></br>
        <span> -{quote.author}</span>
      </p>
    </div>
  );
};

export default Quote;
