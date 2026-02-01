import React,{useState} from 'react';
function Toggle(){
    const [isOn,setIsOn]=useState(false);
    const handleResult = (e) =>{
        e.preventDefault();
        setIsOn(!isOn);
    }
    return(
        <div className='first'>
            <button onClick={handleResult}>Result</button>
            <h1>{isOn ? "True" : "False"}</h1>
        </div>
    )
}
export default Toggle