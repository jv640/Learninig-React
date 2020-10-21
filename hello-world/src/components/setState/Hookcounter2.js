// Here we will see how we can use object as state

import React, { useState } from 'react'

function Hookcounter2() {
    const [name, setName] = useState({firstName: '', lastname: ''});
    const [items, setItem] = useState([]);
    const addItem = () => {
        setItem([... items, {           // first use spread operator( ... ) to copy and then do changes
            id: items.length,
            value: Math.floor(Math.random()*10)+1
        }])
    }
    return (
        <div>
            <form >
                {/* <input type="text" value={name.firstName} onChange={e => setName({firstName: e.target.value})} />
                <input type="text" value={name.lastName} onChange={e => setName({lastName: e.target.value})} /> */}

                {/* Here we need to remeber is object dont get merge using useState we have to manually do that 
                and we can achieve it by copying all data into other and then changing  
                And same for Array*/}

                <input type="text" value={name.firstName} onChange={e => setName({... name, firstName: e.target.value})} />
                <input type="text" value={name.lastName} onChange={e => setName({... name, lastName: e.target.value})} />

            </form>
            <h2>Your first name is - {name.firstName} </h2>
            <h2>Your last name is - {name.lastName} </h2>
            <button onClick={addItem}>Add a number</button>
            <ul>{
                items.map(item => (
                <li key={item.id}>{item.value}</li>
                ))}
            </ul>
        </div>
    )
}

export default Hookcounter2
