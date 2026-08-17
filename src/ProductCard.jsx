function ProductCard({ name, price,stock, description }) {
  return (
    <div className="product-card" style={{border:"2px solid black" , width:"400px"}}>
      
      <h2>{name}</h2>
      <p>{description}</p>
      <h3>₹{price}</h3>
    <p>Available: {{stock}>0?"Available":"Not Available"}</p>
      <button>Add to Cart</button>
    </div>
  );
}

export default ProductCard;