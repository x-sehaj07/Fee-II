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

import { useReducer, useState } from "react";
import CountDisplay from "./Class7oct.jsx/CountDisplay";
import Input from "./Input";

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
    
    const[formdata,setFormdata]=useState({
      email:"",
      password:"",
      age:0
    })
    const[error,setError]=useState({});
    function validation(){
      const newErrors={};
      if(!formdata.email.trim()){
        newErrors.email="Email is required"
      }
      if(!formdata.password.trim()){
        newErrors.password="Password is required"
      }
      if(!formdata.email.trim().length<8){
        newErrors.email="Email must contain more than 8 characters "
      }
    }
    function handleChange(e){   
      const {name,value}=e.target; 
      setFormdata({
        ...formdata,
        [name]:value
      })
      
    }
    
    function handleSubmit(e){
      e.preventDefault();
      console.log(formdata);
    }
    
    return(
        <>
        
        <h1>Counter component</h1>
        <h2> count: {count}</h2>
        {/* <button onClick={handleIncre}>Increment</button>
        <button onClick={handleDecre}>Decrement</button> */}
        <button onClick={()=> dispatch({type:"increment",data:10})}>increase</button>
        <button onClick={()=> dispatch({type:"decrement"})}>decrease</button>
        <CountDisplay dispatch={dispatch}  />
        <form onSubmit={handleSubmit}>
          {/* <label>Email:</label>
          <input type="email" name="email" value={formdata.email} onChange={handleChange}/>
          <label>Password:</label>
          <input type="password" name="password" value={formdata.password} onChange={handleChange}/>
          <label>Age:</label>
          <input type="number" name="age" onChange={handleChange} value={formdata.age} min={10} max={100}/> */}
          <Input label="Email" name="email" type="email" placeholder="Enter your Email" value={formdata.email} onChange={handleChange} required/>
          <Input label="Password" name="password" type="password" placeholder="Enter your password" value={formdata.password} onChange={handleChange}/>
          <Input label="Age" name="age" type="number" placeholder="" value={formdata.age} onChange={handleChange} min={10} max={100}/>
          
          <button type="submit">Submit</button>
        </form>
        </>
      )

}
export default App;  