import React, { useEffect, useState } from 'react' // RFCE ... skracenica

// primer 3
function Users() {

    const [display,setDisplay] = useState(true);

    useEffect(() => {
        
        console.log("Rendering");

        return ()=>{
            console.log("Component unmounted"); // !!! korisno kad hocemo da pokrenemo nesto prilikom GASENJA komponente <=> component will unmount
        }

    },[display]) // !!! 

    return ( // !!!!!! trik
        <div className="container text-center">
            <button onClick={()=> { setDisplay(!display) }} >Toggle</button>
            {display && <div style={{width:"200px",height:"200px",background:"tomato"}}></div>} 
            </div>
    )
}


export default Users

// primer 2
/* function Users() {

    const [account, setAccount] = useState({name:"Nikola",deposit:11000})

    useEffect(() => {
        console.log("Rendering")
    },[account.deposit]) // !!! pokrece se SAMO kad se menja deposit

    return (
        <div className="container.text-center">
            <h1>{account.name} --- {account.deposit}</h1>
            <input type="text" placeholder="name" onChange={event=>{ setAccount({...account,name:event.target.value}) }} />
            <input type="text" placeholder="deposit" onChange={event=>{ setAccount({...account,deposit:event.target.value}) }} />
        </div>
            
    )
} */

// primer 1
// json placeholder, pa /users -> c/paste https://jsonplaceholder.typicode.com/users 
    /* function Users() {
    
        const [users, setUsers] = useState([]);
    
        useEffect(()=>{ // !!! zahteva samo 1 PARAMETAR
            console.log("Component render finished"); // !!! poziva se posle svakog RENDEROVANJA komponente
            fetch('https://jsonplaceholder.typicode.com/users')
            .then(res=>res.json())
            .then(result=>{
                setUsers(result)
            })
        },[]) // !!! dodajemo PRAZAN [] da bi imitirali componentDidMount inace se vrti beskonacno
    
        return (
            <div className="container text-center">
                <h1>Users</h1>
                {users.map(user=>{
                    return (
                        <li key={user.id}>{user.name}</li>
                    )
                })}
            </div>
        )
    } */