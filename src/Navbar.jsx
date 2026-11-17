import { useDispatch,useSelector } from "react-redux";
import {double} from "./redux/counterSlice";
function Navbar(){
    const dispatch=useDispatch();
    const a=useSelector((state)=>state.counter.value)
    return(
        <>
        <h1>Naviagation bar</h1>
        <h2>{a}</h2>
        <button onClick={()=>dispatch(double())}>double</button>
        </>
    )
}
export default Navbar;