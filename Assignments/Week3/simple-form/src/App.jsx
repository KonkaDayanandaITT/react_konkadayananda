import { useEffect, useRef, useState } from "react";
import './App.css';

function MyForm(){

const firstInputRef = useRef(null);

useEffect(() => {
    firstInputRef.current.focus()
},[]);

  return(
      <form>
          <div>
            <label>Name:</label>
            <input type="text" ref={firstInputRef}/>
          </div>
          <div>
            <label>Email:</label>
            <input type="email"/>
          </div>
          <div>
            <label>password:</label>
            <input type="password" />
          </div>
      </form>
  );
}

export default MyForm