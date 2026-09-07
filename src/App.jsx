// import ProductCard from "./ProductCard";
// import Counter from "./Counter";
// import FormHandling from "./FormHandling";
// import Hooks from "./Hooks";
// import Useref from "./Useref";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Products from "./components/Products";
import Login from "./components/Login";
import ProductDetails from "./components/ProductDetails";
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
  return(
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/products" element={<Products/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/products/:id" element={<ProductsDetails/>}/>
    </Routes>
    </BrowserRouter>
  );
} 
export default App;