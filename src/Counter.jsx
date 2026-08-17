import { useState } from "react";

function Counter(){
    const [count,setcount]=useState(10);
    function handleClick(){
        setcount(count+5);
        console.log(count);
    }
    return(
        <>
        <h1>Count: {count}</h1>
        <button onClick={handleClick}>Add</button>

        </>
    )
}
export default Counter;