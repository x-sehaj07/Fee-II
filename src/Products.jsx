import useFetch from "../Hooks/useFetch";
function Products(){
    const{data,loading}=useFetch('https://dummyjson.com/users')
    if(loading){
        return(
            <h1>Loading...</h1>
        )
    }
    return(
        <>
        <h1>All Products</h1>
        
        <ol>
            {data.map((product)=>{
                return(<li>{product.title}</li>)
            })}
        </ol>
        </>
    )
}
export default Products;