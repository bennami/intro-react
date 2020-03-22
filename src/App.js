import React from 'react';
import Hello from "./sayHello";
import Tweet from "./tweet";
function App() {


  return(
      <div className={"app"}>

        <div>
            <Hello/>
            <Tweet  Name = "imane"/>
            <Tweet  Name = "john"/>
            <Tweet  Name = "hihi"/>
        </div>

      </div>
  );

}

export default App;
