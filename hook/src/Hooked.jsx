import React,{useState,useEffect} from 'react';
function Hooked(){
    const [name,setName]=useState();
    const [email,setEmail]=useState();
    useEffect(()=>{
        console.log(name,email);
    },[name,email])
    const handleName = (e) =>{
        setName(e.target.value);
    }
    const handleEmail = (e) =>{
        setEmail(e.target.value);
    }
    return(
        <>
        <input type="text" value={name} onChange={handleName} placeholder='Enter your Name'/>
        <input type="email" value={email} onChange={handleEmail} placeholder='Enter your email'/>
        <h1>Name:{name}</h1>
        <h2>Email:{email}</h2>
        </>
    )
}
export default Hooked