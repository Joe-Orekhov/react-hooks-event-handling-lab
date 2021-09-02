import { useState } from "react";


function EyesOnMe(){
  const [ Good, setGood ] = useState(true);
  const [ eyesOn, setEyesOn ] = useState(true);
  function good(){
    console.log('Good!')
    
  }
  function onBlur(){
    console.log('Hey! Eyes on me!')
    
  }
  return(
    <div>
      <button onBlur={onBlur} onFocus={good} >Eyes on me</button>
    </div>
  )
};

export default EyesOnMe;
