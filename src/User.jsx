import { useState } from "react";
import useCounter from "../Hooks/useCounter";

function User({name,setName}){
    function handleChange(e){
    setName(e.target.value);
}
return(
    <>
    <input type='text' onChange={handleChange}></input>
    <p>{count}</p>
    <button onClick={increment}>increment</button>
    <button onClick={decrement}>decrement</button>
    </>
)
}