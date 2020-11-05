import  { useState } from 'react';
import './App.css';


function App() {

  const [result,setresult]=useState("");

  const click=(e)=>{
    setresult(result+e.target.name);
  }

  const backspace=()=>{
    setresult(result.slice(0,-1));
  }

  const clear=()=>{
    setresult("");
  }

  const calculate=()=>{
    if(result=="Error"){
      setresult("Error");
    }
    else{
    try{
      setresult(eval(result.toString()));
    }
    catch(error){
      setresult("Error");
    }
  }
  }
  
  return (
    <>
    <div className="cal-app">
    <form>
      <textarea className="input" type="text" value={result}></textarea>
    </form>
    <div className="keypad">
      <button id="clear" onClick={clear}>Clear</button>
      <button id="backspace" onClick={backspace}>C</button>
      <button name="+" onClick={click}>+</button>
      <button name="7" onClick={click}>7</button>
      <button name="8" onClick={click}>8</button>
      <button name="9" onClick={click}>9</button>
      <button name="-" onClick={click}>-</button>
      <button name="4" onClick={click}>4</button>
      <button name="5" onClick={click}>5</button>
      <button name="6" onClick={click}>6</button>
      <button name="*" onClick={click}>&times;</button>
      <button name="1" onClick={click}>1</button>
      <button name="2" onClick={click}>2</button>
      <button name="3" onClick={click}>3</button>
      <button name="/" onClick={click}>/</button>
      <button name="0" onClick={click}>0</button>
      <button name="." onClick={click}>.</button>
      <button id="result" onClick={calculate}>Result</button>
    </div>
    </div>
    </>
  );
}

export default App;
