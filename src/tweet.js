import React from "react";
import './App.css';
function Tweet({Name}) {

    return(
<div className={"tweet"}>
      <div>
          <h3>{Name}</h3>
          <p>tweet message goes here</p>
          <h3>number of likes</h3>
      </div>
</div>
    );

}

export default Tweet;