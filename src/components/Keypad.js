import React from "react";


function handleChange(){
    console.log('Entering password...')
}




function Keypad (){
   
    return (
        <div>
            <input
  type="password"
  name="username"
  placeholder="Enter your name"
  onChange={handleChange}
/>
        </div>
    );
}

export default Keypad;