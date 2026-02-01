import React,{useState} from 'react';
function Counter(){
    const [Count,setCount]=useState(0);
    const handleAdd=()=>{
        setCount(Count+1)
    }
    const handleSub=()=>{
        setCount(Count-1)
    }
    return(
        <div className='first'>
            <h1>{Count}</h1>
            <button onClick={handleAdd}>Addition</button>
            <button onClick={handleSub}>Subtraction</button>
        </div>
    )
}
export default Counter