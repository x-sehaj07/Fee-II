import { useState,useEffect, useRef } from "react";

const InfiniteScrolling=()=>{
    const[users,setusers]=useState([]);
    const [skip,setskip]=useState(0);
    const [hasmore,sethasmore]=useState(true);
    const observerref=useRef(null);
    const fetchusers=()=>{
        fetch(`https://dummyjson.com/users?limit=30&skip=${skip}`)
        .then(res=> res.json())
        .then((data)=>{
        setusers(prev=>[...prev,data.users]);
        setskip(skip+30);
        sethasmore(skip+30 <data.total)
        })
    }
        useEffect(()=>{
            fetchusers();
        },[]);
        useEffect(()=>{
            const observer=IntersectionObserver(entries=>{
                
            })
        },[]);
    return(
        <>
        <h1>Infinte Scrolling</h1>
        <ol>
            {users.map((user)=>{
                return (<li key={user.id}>{user.firstName} {user.lastName}</li>)
            })}
        </ol>
        <div ref={observerref}>Scroll down to get more users</div>
        </>
    )
}
export default InfiniteScrolling;