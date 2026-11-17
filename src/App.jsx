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

import { useEffect, useState } from "react";



// import { useDispatch,useSelector } from "react-redux"
// import {Navbar} from "./Navbar"
// import { decrement, increment } from "./counterSlice";

// import {useState} from 'react';
// import Navbar from './StateManagement/Navbar';
// import {UserContext} from "./StateManagement/UserContext";
// import { LoginContext } from './StateManagement/LoginContext';
// import Login from './StateManagement/Login';
// import { ThemeProvider } from './StateManagement/ThemeContext';

// import { useReducer, useState } from "react";
// import CountDisplay from "./Class7oct.jsx/CountDisplay";
// import Input from "./Input";


// function App() {

//   // const products = [
//   //   {
//   //     id:100,
//   //     name: "iPhone 15",
//   //     price: 69999,
//   //     stock:0,
//   //     description: "Powerful smartphone with great camera."
//   //   },
//   //   {
//   //     id:101,
//   //     name: "MacBook Air",
//   //     price: 99999,
//   //     stock:5,
//   //     description: "Lightweight laptop with excellent performance."
//   //   },
//   //   {
//   //     id:102,
//   //     name: "AirPods Pro",
//   //     price: 24999,
//   //     stock: 4,
//   //     description: "Wireless earbuds with noise cancellation."
//   //   }

//   // ];
//   // return (
//   //   <div>
//   //     {products.map((product) => (
//   //       <ProductCard
//   //         key={product.id}
//   //         name={product.name}
//   //         price={product.price}
//   //         description={product.description}
//   //       />

//   //     ))}
//   //     {
//   //       products.filter((product)=>product.price>=80000).map((product)=>{
//   //         return <p>{product.name}</p>
//   //       })
//   //     }

//   //     {<FormHandling/>}
//   //     {<Counter/>}
      
//   //     {<Useref/>}
//   //   </div>
    
//   // );
//   // return(
//   //   // <BrowserRouter>
//   //   // <Navbar/>
//   //   // <Routes>
//   //   //   <Route path="/" element={<Home/>}/>
//   //   //   <Route path="/about" element={<About/>}/>
//   //   //   <Route path="/products" element={<Products/>}/>
//   //   //   <Route path="/login" element={<Login/>}/>
//   //   //   <Route path="/products/:id" element={<ProductsDetails/>}/>
//   //   // </Routes>
//   //   // </BrowserRouter>
//   //   <Products/>
//   // )


//   // const user={
//   //   firstname:"kim",
//   //   lastname:"Jeon"
//   // }
  
//   // const password="1234"
//   // return(
//   //   <>
//   //   <UserContext.Provider value={user}>
//   //   <h1>App Component</h1>
//   //   <Navbar/>
//   //   </UserContext.Provider>
//   //   <ThemeProvider>
//   //     <h1>App Component</h1>
//   //   <Navbar/>
//   //   </ThemeProvider>
//   //   <LoginContext.Provider value={password}>
//   //     <Login/>
//   //   </LoginContext.Provider>
//   //   </>
//   // )
  

//   // const[count,setCount]=useState(0);
//   //   function handleIncre(){
//   //       setCount(count+1);
//   //   }
//   //   function handleDecre(){
//   //       setCount(count-1);
//   //   }


//     function reducer(state,action){
//       switch(action.type){
//           case "increment" :
//             return state+action.data;
          
//           case "decrement":
//             return state-1;
          
//           case "double" :
//             return state*2;
//           default:
//           return state;
//       }
//     }
//     const [count, dispatch] = useReducer(reducer, 0);
    
//     const[formdata,setFormdata]=useState({
//       email:"",
//       password:"",
//       age:0
//     })
//     const[error,setError]=useState({});
//     function validation(){
//       const newErrors={};
//       if(!formdata.email.trim()){
//         newErrors.email="Email is required"
//       }
//       if(!formdata.password.trim()){
//         newErrors.password="Password is required"
//       }
//       if(!formdata.email.trim().length<8){
//         newErrors.email="Email must contain more than 8 characters "
//       }
//       return newErrors;
//     }
//     function handleChange(e){   
//       const {name,value}=e.target; 
//       setFormdata({
//         ...formdata,
//         [name]:value
//       })
      
//     }
    
//     function handleSubmit(e){
//       e.preventDefault();
//       const newErrors = validation();
//     setError(newErrors);
//     if (Object.keys(newErrors).length === 0) {
//         console.log(formdata);

//     }
//     }
    
//     return(
//         <>
        
//         <h1>Counter component</h1>
//         <h2> count: {count}</h2>
//         {/* <button onClick={handleIncre}>Increment</button>
//         <button onClick={handleDecre}>Decrement</button> */}
//         <button onClick={()=> dispatch({type:"increment",data:10})}>increase</button>
//         <button onClick={()=> dispatch({type:"decrement"})}>decrease</button>
//         <CountDisplay dispatch={dispatch}  />
//         <form onSubmit={handleSubmit}>
//           {/* <label>Email:</label>
//           <input type="email" name="email" value={formdata.email} onChange={handleChange}/>
//           <label>Password:</label>
//           <input type="password" name="password" value={formdata.password} onChange={handleChange}/>
//           <label>Age:</label>
//           <input type="number" name="age" onChange={handleChange} value={formdata.age} min={10} max={100}/> */}
//           <Input label="Email" name="email" type="email" placeholder="Enter your Email" value={formdata.email} onChange={handleChange} error={error.email} required/>
//           <Input label="Password" name="password" type="password" placeholder="Enter your password" value={formdata.password} onChange={handleChange} error={error.password}/>
//           <Input label="Age" name="age" type="number" placeholder="" value={formdata.age} onChange={handleChange} min={10} max={100} error={error.age}/>
          
//           <button type="submit">Submit</button>
//         </form>
//         </>
//       )

// }
// export default App;  

// function App(){
//   // const dispatch=useDispatch();
//   // const count=useSelector((state)=>state.counter.value);
//   // return(
//   //   <>
//   //   <h1>App Component</h1>
//   //   <h2>{count}</h2>
//   //   <button onClick={()=>dispatch(increment())}>increment</button>
//   //   <button onClick={()=>dispatch(decrement())}>decrement</button>
//   //   <Navbar/>
//   //   </>
//   // )
//   return(
//   <>
//   useEffect(() => {
//   const timer = setInterval(() => {
//     console.log("Running...");
//   }, 1000);

//   return () => {
//     clearInterval(timer);
//   };
// }, []);

// </>
// )
// }
// export default App;
// import { useEffect } from 'react';

// function App() {
 
//   useEffect(() => {
//     const timer = setInterval(() => {
//       console.log("Running...");
//     }, 1000);

//     return () => {
//       clearInterval(timer);
//     };
//   }, []);
//   return (
//     <>
//       <h1>The timer is running in the console!</h1>
//     </>
//   );
// }

// export default App;

// import {use, useState} from 'react';
// const App=()=>{
//   const [inputUser,setInputUser]=useState("");
//   const [submitted,setSubmitted]=useState("");
//   const [sortOrder,setSortOrder]=useState("");
//   const products=[
//     {id:1,name:"iphone 15",price:160000},
//     {id:2,name:"Samsung 24",price:55000},
//     {id:3,name:"iphone 17",price:100000},
//     {id:4,name:"Oneplus 12",price:50000},
//     {id:5,name:"iphone 17 pro",price:120000},
//   ]
//   function handleSearch(e){
//     setInputUser(e.target.value);
//   }
//   function handleButtonClick(){
//     setSubmitted(inputUser);
//   }
//   const filteredProd=products.filter((product)=>{
//       return product.name.toLowerCase().includes(submitted.toLowerCase())
//     })
//   const sortedProd=[...filteredProd].sort((a,b)=>{
//     if(sortOrder==="low") return a.price-b.price;
//     if(sortOrder==="high") return b.price-a.price;
//     return 0;
//   }
// )
//   return(
//     <>
//     <ol>
//     {sortedProd.map((product)=>(<div key={product.id}>
//         <p>{product.name}</p>
//         <p>{product.price}</p>
//       </div>
//       ))}
//     </ol>
//     <input type='text' placeholder='Search' onChange={handleSearch} ></input>
//     <select value={sortOrder} onChange={(e)=>setSortOrder(e.target.value)}>
//       <option value="">Default</option>
//       <option value="low">Price :low to high</option>
//       <option value="high">Price :high to low</option>

//     </select>
//     <button onClick={handleButtonClick}>Search</button>
//     </>
//   )
    
// }
// export default App;

// import { useState ,useEffect} from "react";

// const App = () => {
//   const [users, setUsers] = useState([]);
//   const [skip, setSkip] = useState(0);
//   const [page,setPage]=useState(1);
//   const [inputUser,setInputUser]=useState("");
//   const [getbyname,setgetbyname]=useState([]);
//   useEffect(() => {
//     fetch(`https://dummyjson.com/users?limit=5&skip=${skip}`)
//       .then(response => response.json())
//       .then(data => setUsers(data.users))
//       .catch(error => console.error(error));
//   }, [skip]);

//   function handleNext() {
//     setSkip(skip+ 5);
//     setPage(page+1);
//   }
//   function handlePrev() {
//     setSkip(skip- 5);
//     setPage(page-1);
//   }
//   function handleChange(e){
//     setInputUser(e.target.value);
//   }
// useEffect(()=>{
//   if(inputUser){
//   fetch(`https://dummyjson.com/users/search?q=${inputUser}`)
//   .then(res=> res.json())
//   .then((data)=>{
//     setgetbyname(data.users);
//   })}
// },[inputUser])
//   return (
//     <>
//       <h1>All users</h1>
//       <ol start={skip + 1}>
//         {users.map(user => (
//           <li key={user.id}>{user.firstName}</li>
//         ))}
//       </ol>
//       <h3>Page:{page}</h3>
//       <button onClick={handleNext}>Next</button>
//       <button onClick={handlePrev} disabled={skip==0}>Prev</button>
//       <input type="text" value={inputUser} onChange={handleChange}></input>
//       <ol>
//         {getbyname.map((user)=>{
//           return(<li>{user.firstName} {user.lastName}</li>)
//         })}
//       </ol>
//     </>
//   );
// };

// export default App;

import InfiniteScrolling from "./InfiniteScrolling";
const App = ()=>{
  const[name,setname]=useState("");
  const [getbyname,setgetbyname]=useState([]);
  const [debouncename,setdebouncename]=useState("");
  useEffect(()=>{
    let timer=setTimeout(()=>{
      setdebouncename(name);
    },500)
    return ()=>clearTimeout(timer);
  },[name])
  useEffect(()=>{
    if(debouncename){
    fetch(`https://dummyjson.com/users/search?q=${debouncename}`)
    .then(res=> res.json())
    .then((data)=>{
      console.log(data);
      setgetbyname(data.users);
    })}
  },[debouncename]); 
  return (
    <>
    <h1> All users </h1>
    <input type="text" placeholder="search name" value={name} onChange={(e)=>setname(e.target.value)}></input>
    <ol>
      {getbyname.map((user)=>{
        return(<li key={user.id}>{user.firstName} {user.lastName}</li>)
      })}
    </ol>
    <InfiniteScrolling/>
    </>
  )
}
export default App;