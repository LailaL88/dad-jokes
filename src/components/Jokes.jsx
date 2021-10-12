import React from "react";
import Spinner from "./Spinner";

function Jokes(props) {
  return (
    <div>
      <div className="joke">
        {props.loading ? <Spinner /> : props.joke}
      </div>
      <div className="previous-jokes">
        <p className="previous-jokes-heading">Previous dad jokes</p>
          {props.list.length > 1 ?  
            <ul className="previous-jokes-list">
                {props.list.map(function(joke, index) {
                    if (index !== 0 && index < 6) {
                      return <li key={index}>{joke}</li>
                    } else {
                      return null;
                    }
                  })
                }
            </ul> : <p>Nothing to show yet, ask me to give it to <br/>you</p> }   
      </div>
    </div>
  );
}
  
export default Jokes;