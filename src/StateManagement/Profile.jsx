import { useContext } from "react";
import { UserContext } from "./UserContext";
function Profile(){
    const user=useContext(UserContext)
    return (
        <>
        <h1>User Profile:</h1>
        <h2>First name :{user.firstname}</h2>
        <h2>Last name:{user.lastname}</h2>
        </>
    )
}
export default Profile;