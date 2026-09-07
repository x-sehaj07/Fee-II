import {Link} from "react-router-dom"

function Navbar(){
    return( 
    <nav>
    <Link to="/">Home</Link>
    <Link to="/about">About</Link>
    <Link to="/products">Products</Link>
    <Link to="/login">Login</Link>
    <Link to="/products/:id">Product Details</Link>
    </nav>

    );
}
export default Navbar;