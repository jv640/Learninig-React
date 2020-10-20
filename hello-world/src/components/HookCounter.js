// As we know state can only be used inside a class component.
// So to implement counter funcitonality inside a functional component using state we need Hooks

// we can use state by using a function called useState() it takes initial value as arguement and return 
// 2 values one is current value of state and other is a updating function
import React, { useState } from 'react'

function HookCounter() {
    const [count, setcount] = useState(0);
    return (
        <div>
            <button onClick={ () => setcount(count + 1)}>counter {count}</button>
        </div>
    )
}

export default HookCounter
