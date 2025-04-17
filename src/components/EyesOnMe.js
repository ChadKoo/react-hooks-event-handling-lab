import React from "react"

function handleFocus(){
    return console.log("Good!");
}

function handleBlur(){
    return console.log("Hey! Eyes on me!");
}




function EyesOnMe(){


    return(
    <div>
        <button onFocus={handleFocus} onBlur={handleBlur}>Eyes on me</button>;
    </div>
    );
}

export default EyesOnMe;