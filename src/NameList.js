// Primer za 2 useState-a i array
import React, { useState } from 'react'

const NameLsit = () => { // ? Da li moze ovako...sa AF

    const [names, setNames] = useState(["Nikola", "Senka"])
    const [newName, setNewName] = useState("")

    const saveName = () => {
        setNames([...names,newName]);
        setNewName(""); // jer ostaje u inputu ... zato se i dodaje u input kao value
    }
    

    return (
        <div className="container text-center">
            <ul className="list-group">
                {names.map(name => <li className="list-item">{name}</li>)}
            </ul>
            <input type="text" onChange={ e=>{ setNewName(e.target.value) } } value={newName} />
            <button onClick={saveName}>Add</button>
        </div>
    );
}

export default NameLsit;
