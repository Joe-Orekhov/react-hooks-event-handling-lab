import { useState } from "react";


function Keypad(){
  const [ noinput, input] = useState(" ")
function LoadingChange(){
  input(!noinput)
  console.log("Entering password...")
  }
  return(
    <div>
      <input type="password" onChange={LoadingChange}></input>
    </div>
  )
};

export default Keypad;