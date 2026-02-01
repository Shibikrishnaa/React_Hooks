import React,{useState} from 'react';
function Display(){
    const [text,setText]=useState("");
    const [display,setDisplay]=useState("");
    const handleDisplay = (e) =>{
        setText(e.target.value);
    }
    const handleSetDisplay = (e) =>{
        e.preventDefault();
        setDisplay(text);
    }
    return(
        <div className='first'>
            <form autocomplete="off">
                <input type="text" value={text} onChange={handleDisplay}/>
                <button onClick={handleSetDisplay}>Display</button>
                <h1>{display}</h1>
            </form>
        </div>
    )
}
export default Display