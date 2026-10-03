import React from "react";
import { NavLink } from "react-router";

function App(){
  return(
    <>
    <nav>
       <NavLink to="/collection/123" end>
        Product Collection 1234
      </NavLink>
    </nav>
  
    <h1 className="font-extrabold text-teal-950 text-center">React App with Tailwind Css</h1>
    <h1 className="text-3xl font-bold underline text-amber-950">
    Hello world!
  </h1></>
  )
}
export default App;