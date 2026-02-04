import React,{useState,useRef,useEffect} from 'react';
function Reference(){
    const [count,setCount]=useState(0);
    const handleAdd = ()=>[
       setCount(count+1)
    ]
    let ref=useRef(0);
    ref.current++;
    useEffect(()=>{
        console.log(count);
        console.log(ref.current);
    },[count])
    return(
        <>
        <button onClick={handleAdd}>Add</button>
        <h1>{count}</h1>
        <h2>{ref.current}</h2>
        </>
    )
}
export default Reference