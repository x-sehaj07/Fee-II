import { useContext } from "react";
import { LoginContext } from "./LoginContext";
function Login(){
    const password=useContext(LoginContext)
    return (
        <>
        <h1>Login Component</h1>
        <h2>Login:{password}</h2>
        </>
    )
}
export default Login;