function CountDisplay({dispatch}){
    return(
        <>
        <h1>Count Display</h1>
        <button onClick={()=>dispatch({type:"double"})}>Double</button>
        </>
    )
}
export default CountDisplay;