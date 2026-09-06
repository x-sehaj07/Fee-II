import { useState } from "react";
function FormHandling(){
    const[name,setname]=useState("");
    const[lastname,setlastname]=useState("");
    
    function handleChange(e){
        setname(e.target.value);
        
    }
    function handleLastName(e){
        setlastname(e.target.value);
        
    }
    return (
        <>
        <input type="text" onChange={handleChange} value={name}/>
        <input type="text" onChange={handleLastName} value={name}/>

        </>
    )
}
export default FormHandling;