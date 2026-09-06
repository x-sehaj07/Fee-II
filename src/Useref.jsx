import { useState, useRef } from "react";
function Useref(){
    const [count,setcount]=useState(0);
     const [counta,setcounta]=useState(0);
     const rendercount=useRef(0);
     rendercount.current++;
     
     function handleClick(){
        setcount(count+1);
     }
     function handleClicka(){
        setcounta(counta+1);
     }
     return(
        <>     
        <h2>count:{count}</h2>
        <button onClick={handleClick}>Add</button>
        <h2>counta:{counta}</h2>
        <button onClick={handleClicka}>Add</button>
        <h2>Render count: {rendercount.current}</h2>
        </>
     )
}
export default Useref;