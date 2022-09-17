import logo from './logo.svg';
import './App.css';
import React, {useState} from "react";


function App() {
  const [val, setVal] = useState();
  const [img, setImg] = useState();

  const handleOnChange = (e) => {
    setVal(e.target.value);
  }
  const search = evt => {
    if(evt.key === "Enter"){
        setImg(val) //state changed to re-render the api call
    }
}
  return (
    <div className="App">
        <input 
          className='input'
          type = "text"
          placeholder = "enter link"
          onChange = {handleOnChange}
          value = {val}
          onKeyPress = {search}
          
        /> 

        <img src = {img}></img>
      
    </div>
  );
}

export default App;
