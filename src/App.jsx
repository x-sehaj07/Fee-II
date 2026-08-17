import ProductCard from "./ProductCard";
import Counter from "./Counter";

function App() {
  const products = [
    {
      id:100,
      name: "iPhone 15",
      price: 69999,
      stock:0,
      description: "Powerful smartphone with great camera."
    },
    {
      id:101,
      name: "MacBook Air",
      price: 99999,
      stock:5,
      description: "Lightweight laptop with excellent performance."
    },
    {
      id:102,
      name: "AirPods Pro",
      price: 24999,
      stock: 4,
      description: "Wireless earbuds with noise cancellation."
    }

  ];
  return (
    <div>
      {products.map((product) => (
        <ProductCard
          key={product.id}
          name={product.name}
          price={product.price}
          description={product.description}
        />

      ))}
      {<Counter/>}
    </div>
    
  );
}

export default App;