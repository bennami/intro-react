import React, {useState} from 'react';
import Hello from "./sayHello";
import Tweet from "./tweet";

function App() {

    //using useState to interact with elements
    const [isRed,setRed] = useState(false);
    const [count, setCount] =  useState(0);

    //function  that interacts with count
    const increment =() =>
    {
        setCount(count+1);
        setRed(!isRed);
    };

    //array of objects that will   be added to tweet component with map method
    const [users] = useState([
        { id:0,name:'Ed', text:'what is up' },
        {id:1,name:'Imane' ,text:'i am awesome' },
        {id:2,name:'OMG', text:'hihih'},
    ]);


    //return function is where you should put all your component tags, usually there is no html in here
    return(
        <div className={"app"}>
            <div>
                {/*use {} whenever you want to write JS*/}
                {users.map(user =>(
                    <Tweet key={user.id} Name={user.name} Message={user.text}/>
                ))}

                <h1 className={isRed ? 'red' : ''}>change my color!</h1>
                <Hello/>
                <button onClick={increment}>Increment</button>
                <h1>{count}</h1>
            </div>
        </div>
    );
}

export default App;
