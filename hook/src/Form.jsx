import React, {useState} from 'react';
function Form(){
    const [name,setName]=useState("");
    const [email,setEmail]=useState("");
    const handleName = (e)=>{
        setName(e.target.value)
    }
    const handleEmail = (e) =>{
        setEmail(e.target.value);
    }
   
    return(
        <div className='first'>
            <form>
                <input type="text" onChange={handleName} placeholder='Enter your Name'/>
                <input type="email" onChange={handleEmail} placeholder="Enter your Email"/>
                
                <p>Name:{name}</p>
                <p>Email:{email}</p>
            </form>
        </div>
    )
}
export default Form