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

    const [users] = useState([
        { id:0,name:'Ed', text:'what is up' },
        {id:1,name:'Imane' ,text:'i am awesome' },
        {id:2,name:'OMG', text:'hihih'},
    ]);

  return(
        <div className={"app"}>
         {users.map(user =>(
            <Tweet key={user.id} Name={user.name} Message={user.text}/>
            ))}
            <h1 className={isRed ? 'red' : ''}>change my color!</h1>
            <Hello/>
            <button onClick={increment}>Increment</button>
            <h1>{count}</h1>
            <Tweet  Name = "Imane" Message = "helloo this is a message"/>
            <Tweet  Name = "John" Message  = "helloo this is a message"/>
            <Tweet  Name = "Jef" Message = "helloo this is a message"/>
        </div>
        );
      }

export default App;
