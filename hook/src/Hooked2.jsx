import React, {useState,useEffect} from 'react';
function Hooked2(){
    const [users,setUsers]=useState([]);
    useEffect(()=>{
        console.log("It is working fine!");
        fetch("https://dummy-json.mock.beeceptor.com/companies")
        .then((response)=>response.json())
        .then((data)=>setUsers(data))
        .catch((error)=>console.log(error))
    },[])
    return(
        <>
        <ul>
            {users.map((user)=>(
                <li key={user.id}>
                    <table border="5px">
                        <tr>
                    {user.name}
                    {user.address}
                    {user.zip}
                    {user.country}
                    {user.employeecount}
                    {user.industry}
                    {user.marketcap}
                    {user.domain}
                    {user.logo}
                    {user.ceoName}
                    </tr>
                    </table>
                    </li>
            ))}
            </ul>
        </>
    )
}
export default Hooked2