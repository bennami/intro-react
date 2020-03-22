import React, {useState} from 'react';
import Hello from "./sayHello";
import Tweet from "./tweet";
function App() {

 const [isRed,setRed] = useState(false);
 const [count, setCount] =  useState(0);

 const increment =() =>
 {
     setCount(count+1);
     setRed(!isRed);
 };
  return(
      <div className={"app"}>

        <div>
            <h1 className={isRed ? 'red' : ''}>change my color!</h1>
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
