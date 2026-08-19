import { useState } from "react";
import Display from "./Display";
import "./App.css";
function Counter(){
    const [count,setcount]=useState(10);
    const [name, setName] = useState("aman");
    const [theme,setTheme]=useState("light");
    const [student,setStudent]=useState({name:"Sam",age:19});
    const [fruit,setFruit]=useState()
    function handleClick(){
        setcount(prev=> prev+1);
        setcount(prev=> prev+1);
        setcount(prev=> prev+1);
        
    }
    function handleName(){
        setName(name=="aman"?"rahul":"aman")
    }
    function handleTheme(){
        setTheme(theme=="light"?"dark":"light");
    }
    function handleLastName(){
        setStudent({...student,lastName:"roy"})
    }
    return(
        <>
        <div className={theme=="light"?"light":"dark"} style={{border:"2px solid red"}}>
        <button onClick={handleTheme}>Theme change</button>
        <h1>Count: {count}</h1>
        <button onClick={handleClick}>Add</button>
        <Display count={count}/>
        <h1>Name: {name}</h1>
        <button onClick={handleName}>Change name</button>
        <p>{student.name}</p>
        <p>{student.age}</p>
        <p>{student.lastName?student.lastName: "NULL"}</p>
        <button onClick={handleLastName}>Add LastName</button>
        <ul>
            {fruit.map(fruit=>{
                return<li>{fruit}</li>})}
        </ul>
        </div>
        </>
    );
}
export default Counter;