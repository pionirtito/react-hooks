import React, {useState} from 'react'

const Account = () => { // !!! proveri dal moze sa af


    const [account, setAccount] = useState({name:"Nikola", deposit:11000})


    return ( 

        <div className="container text-center">
            <h1>Name: {account.name}</h1>
            <h1>Deposit: {account.deposit}</h1>
            <input type="text"
            placeholder="set deposit"
            onChange={ e=>{ setAccount({...account,deposit:e.target.value}) } }/> {/* !!! stavljen je rest operator jer se brise "Nikola" prilikom unosa deposit */}
        </div>

     );
}
 
export default Account;