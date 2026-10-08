// import ProductCard from "./ProductCard";
// import Counter from "./Counter";
// import FormHandling from "./FormHandling";
// import Hooks from "./Hooks";
// import Useref from "./Useref";
// import { BrowserRouter,Routes,Route } from "react-router-dom";
// import Navbar from "./components/Navbar";
// import Home from "./components/Home";
// import About from "./components/About";
// import Products from "./components/Products";
// import Login from "./components/Login";
// import ProductDetails from "./components/ProductDetails";

// import {useState} from 'react';
// import Navbar from './StateManagement/Navbar';
// import {UserContext} from "./StateManagement/UserContext";
// import { LoginContext } from './StateManagement/LoginContext';
// import Login from './StateManagement/Login';
// import { ThemeProvider } from './StateManagement/ThemeContext';

import { useReducer } from "react";
import CountDisplay from "./Class7oct.jsx/CountDisplay";

function App() {
  // const products = [
  //   {
  //     id:100,
  //     name: "iPhone 15",
  //     price: 69999,
  //     stock:0,
  //     description: "Powerful smartphone with great camera."
  //   },
  //   {
  //     id:101,
  //     name: "MacBook Air",
  //     price: 99999,
  //     stock:5,
  //     description: "Lightweight laptop with excellent performance."
  //   },
  //   {
  //     id:102,
  //     name: "AirPods Pro",
  //     price: 24999,
  //     stock: 4,
  //     description: "Wireless earbuds with noise cancellation."
  //   }

  // ];
  // return (
  //   <div>
  //     {products.map((product) => (
  //       <ProductCard
  //         key={product.id}
  //         name={product.name}
  //         price={product.price}
  //         description={product.description}
  //       />

  //     ))}
  //     {
  //       products.filter((product)=>product.price>=80000).map((product)=>{
  //         return <p>{product.name}</p>
  //       })
  //     }

  //     {<FormHandling/>}
  //     {<Counter/>}
      
  //     {<Useref/>}
  //   </div>
    
  // );
  // return(
  //   // <BrowserRouter>
  //   // <Navbar/>
  //   // <Routes>
  //   //   <Route path="/" element={<Home/>}/>
  //   //   <Route path="/about" element={<About/>}/>
  //   //   <Route path="/products" element={<Products/>}/>
  //   //   <Route path="/login" element={<Login/>}/>
  //   //   <Route path="/products/:id" element={<ProductsDetails/>}/>
  //   // </Routes>
  //   // </BrowserRouter>
  //   <Products/>
  // )


  // const user={
  //   firstname:"kim",
  //   lastname:"Jeon"
  // }
  
  // const password="1234"
  // return(
  //   <>
  //   <UserContext.Provider value={user}>
  //   <h1>App Component</h1>
  //   <Navbar/>
  //   </UserContext.Provider>
  //   <ThemeProvider>
  //     <h1>App Component</h1>
  //   <Navbar/>
  //   </ThemeProvider>
  //   <LoginContext.Provider value={password}>
  //     <Login/>
  //   </LoginContext.Provider>
  //   </>
  // )
  

  // const[count,setCount]=useState(0);
  //   function handleIncre(){
  //       setCount(count+1);
  //   }
  //   function handleDecre(){
  //       setCount(count-1);
  //   }


    function reducer(state,action){
      switch(action.type){
          case "increment" :
            return state+action.data;
          
          case "decrement":
            return state-1;
          
          case "double" :
            return state*2;
          default:
          return state;
      }
    }
    const [count, dispatch] = useReducer(reducer, 0);
    return(
        <>
        
        <h1>Counter component</h1>
        <h2> count: {count}</h2>
        {/* <button onClick={handleIncre}>Increment</button>
        <button onClick={handleDecre}>Decrement</button> */}
        <button onClick={()=> dispatch({type:"increment",data:10})}>increase</button>
        <button onClick={()=> dispatch({type:"decrement"})}>decrease</button>
        <CountDisplay dispatch={dispatch}  />
        </>
      )

}
export default App; 