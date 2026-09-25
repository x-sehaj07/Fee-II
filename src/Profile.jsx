import useCounter from "../Hooks/useCounter";
function Profile(){
    const[count,increment,decrement]=useCounter();
    return (
        <>
        <h1>User Profile </h1>
        
        <p>{count}</p>
        <button onClick={increment}>increment</button>
        <button onClick={decrement}>decrement</button>
        </>
    )

}