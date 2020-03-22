import React, {useState} from 'react';
import Hello from "./sayHello";
import Tweet from "./tweet";
function App() {

 const [isRed,setRed] = useState(false);
 const [count, setCount] =  useState(0);

 const increment =() =>
 {
     setCount(count+1);
 };
  return(
      <div className={"app"}>

        <div>
            <Hello/>
            <button onClick={increment}>Increment</button>
            <h1>{count}</h1>
            <Tweet  Name = "Imane"/>
            <Tweet  Name = "John"/>
            <Tweet  Name = "Jef"/>
        </div>

      </div>
  );

}

export default App;
