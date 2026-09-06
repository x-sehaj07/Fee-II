import { useEffect, useState } from "react";

function Hooks(){
    const[count,setcount]=useState(0);
    const [products,setproducts]=useState([]);
    function handleClick(){
        setcount(count+1);
    }
    useEffect(()=>{fetch('https://dummyjson.com/products').then((response)=>response.json()).then(
        (data)=> setproducts(data.products))},[count]);

    // useEffect(()=>{
    //     document.title="welcome";
    // },[])
    return (
        <>
            <h1>count: {count}</h1>
            <button onClick={handleClick}>Add</button>
            <ul>
                {products.map(product=>
                    {return <li key={product.id}>{product.data}</li>}
                )
                }
            </ul>
        </>
    )
}
export default Hooks;