import React from "react";

function Hello() {
    const SayHello = ()  => {
        alert("wazzuppp");
    };

    return(
        <div>
            <button onClick={SayHello}>Say hello</button>
        </div>
    );
}

export default Hello;