import Profile from "./Profile";
import { ThemeProvider } from './StateManagement/ThemeContext';
import { useContext } from "react";
function Navbar(){
    const {theme,toggleTheme}=useContext(ThemeContext);
    return (
        <>
        <h1> Navigation Component</h1>
        <h2>Theme :{theme}</h2>
        <button onClick={toggleTheme}>Change Theme</button>
        <Profile />
        </>
    )
}
export default Navbar;
